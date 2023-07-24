import authApi from "@/api/authApi"
import { firestore } from "@/utils/firebase"
import {doc , setDoc, getDoc } from 'firebase/firestore';


export const createUser = async ({commit},user) => {
    const {name, email, password} = user
    try {

        const {data} = await authApi.post(':signUp',{email, password, returnSecureToken: true})

        const {idToken, refreshToken}= data
        const user = await authApi.post(':update', {displayName: name, idToken} )
        user.rol = 'USER_ROLE'
        user.vistaLista= []
        const docuRef = doc(firestore,`usuarios/${user.data.localId}`);
        setDoc(docuRef, {nombre:name, email, rol: 'USER_ROLE',vistaLista:[], profilePhoto:'https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg'})

        delete user.password

        commit('loginUser',{ user,idToken, refreshToken })
        return { ok: true}
        
    } catch (error) {
        console.log(error.response)
        return {ok : false, message: error.response.data.error.message}
    }

}

export const signInUser = async ({commit},user) => {
    const { email, password} = user
    try {

        const {data} = await authApi.post(':signInWithPassword',{email, password, returnSecureToken: true})
        
        const {displayName, idToken, refreshToken, localId}= data

        const docuRef = doc(firestore,`usuarios/${localId}`)
        const docuCifrada = await getDoc(docuRef)
        

        user.rol = docuCifrada.data().rol
        user.vistaLista = docuCifrada.data().vistaLista
        user.profilePhoto= docuCifrada.data().profilePhoto
        user.nombre = displayName



        commit('loginUser',{ user,idToken, refreshToken })
        return { ok: true}
        
    } catch (error) {
        console.log(error.response)
        return {ok : false, message: error.response.data.error.message}
    }
    

}
export const checkAuthentication = async({commit}) => {

        const idToken = localStorage.getItem('idToken')
        const refreshToken =localStorage.getItem('refreshToken')
        if(!idToken){
            commit('logOut')
            return { ok: false, message: 'No hay token en la peticion'}
        }

        try {

            const {data} = await authApi.post(':lookup',{idToken})
            

            const {displayName,email, localId}= data.users[0]

            const docuRef = doc(firestore,`usuarios/${localId}`)
            const docuCifrada = await getDoc(docuRef)

            
            const user ={
                nombre: displayName,
                email,
                profilePhoto: docuCifrada.data().profilePhoto,
                rol: docuCifrada.data().rol,
                vistaLista: docuCifrada.data().vistaLista


            }

            commit('loginUser',{user, idToken, refreshToken})
            return {ok: true}
            
            
        } catch (error) {
            commit('logOut')
            
            return { ok:false, message: error.response.data.error.message}
        }
}

export const setVistaLista= async({commit}, movie)=>{
    const idToken = localStorage.getItem('idToken')
    
    try {
        const {data} = await authApi.post(':lookup',{idToken})
        const {displayName,email, localId}= data.users[0]
        const docuRef = doc(firestore,`usuarios/${localId}`)

        const docuCifrada = await getDoc(docuRef)

        const vistaLista = docuCifrada.data().vistaLista
        const rol = docuCifrada.data().rol
        const profilePhoto = docuCifrada.data().profilePhoto
        vistaLista.push(movie)
        vistaLista.reverse()
        setDoc(docuRef, {nombre:displayName, email, rol,vistaLista, profilePhoto})
        const user ={
            nombre: displayName,
            email,
            rol,
            vistaLista,
            profilePhoto
        }
        commit('updateUser',{user})
        return {ok: true}
        
    } catch (error) {
        return { ok:false, message: error.response.data.error.message}
        
    }


}

export const updateDatos = async({commit},datos)=>{

    const {nombre, email, password, profilePhoto}= datos
    
    try {

        
        const {data} = await authApi.post(':signInWithPassword',{email, password, returnSecureToken: true})
        const { idToken, localId}= data

        await authApi.post(':update', {displayName: nombre,email, idToken} )
        const docuRef = doc(firestore,`usuarios/${localId}`);
        const docuCifrada = await getDoc(docuRef)

        
        const rol = docuCifrada.data().rol
        const vistaLista= docuCifrada.data().vistaLista
        
        setDoc(docuRef, {nombre, email, rol, vistaLista, profilePhoto})
        const docuCifrada2 = await getDoc(docuRef)
        const user ={
        nombre: docuCifrada2.data().nombre,
        email: docuCifrada2.data().email,
        rol: docuCifrada2.data().rol,
        vistaLista: docuCifrada2.data().vistaLista,
        profilePhoto: docuCifrada2.data().profilePhoto
        
        
        }
        console.log(user)
    

        delete datos.password

        commit('updateUser',{ user })
        return { ok: true}
        
        
        
    } catch (error) {
        console.log(error.response)
        return {ok : false, message: error.response.data.error.message}
        
    }
}

export const uploadProfile = async({commit},datos)=>{
    const {profilePhoto}= datos
try {
    
    const idToken = localStorage.getItem('idToken')
    const {data} = await authApi.post(':lookup',{idToken})
    
    const {  localId}= data.users[0]
    
    
    const docuRef = doc(firestore,`usuarios/${localId}`);
    const docuCifrada = await getDoc(docuRef)

    const nombre = docuCifrada.data().nombre
    const email = docuCifrada.data().email
    const rol = docuCifrada.data().rol
    const vistaLista= docuCifrada.data().vistaLista
    
    setDoc(docuRef, {nombre, email, rol, vistaLista, profilePhoto})
    const docuCifrada2 = await getDoc(docuRef)
    const user ={
    nombre: docuCifrada2.data().nombre,
    email: docuCifrada2.data().email,
    rol: docuCifrada2.data().rol,
    vistaLista: docuCifrada2.data().vistaLista,
    profilePhoto: docuCifrada2.data().profilePhoto
    
    
    }
    
    
    
    commit('updateUser',{ user })
    return { ok: true}
} catch (error) {
    console.log(error.response)
    return {ok : false, message: error.response.data.error.message}
    
}


}