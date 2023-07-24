export const currentState = (state) => {
    return state.status
}
export const getUsername = (state)=>{
    return state.user?.nombre || ''
}

export const getEmail = (state)=>{
    return state.user?.email || ''
}

export const getRol = (state)=>{
    return state.user?.rol || ''
}

export const getListaVistaById = (state) => (id='') => {


    
    const pelicula = state.user.vistaLista.find( e => e.id === id)
    if(!pelicula) return
    
    return {...pelicula}
}

export const getListaVista= (state)=>{

    return state.user?.vistaLista
}

export const getProfilePhoto = (state)=>{
    return state.user?.profilePhoto
}
