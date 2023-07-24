import { computed } from "vue"
import { useStore } from "vuex"


const useAuth =()=>{
    
    const store = useStore()
    const createUser = async(user) =>{
        const resp = await store.dispatch('auth/createUser',user)
        return resp


    }


    const loginUser = async(user) =>{
        const resp = await store.dispatch('auth/signInUser',user)
        return resp
    }

    const checkAuthStatus = async() =>{
        const resp = await store.dispatch('auth/checkAuthentication')
        return resp
    }

    const logout = () =>{
        store.commit('auth/logOut')
        store.commit('home/clearMovies')
    }
    const clearmovies=()=>{
        store.commit('home/clearMovies')
    }



    return{
        createUser,
        loginUser,
        checkAuthStatus,
        logout,
        clearmovies,
        getPhoto: computed(()=>store.getters['auth/getProfilePhoto']),

        authStatus: computed(()=> store.getters['auth/currentState']),
        username: computed(()=> store.getters['auth/getUsername'])

    }
}
export default useAuth