export const getMoviesByTerm = (state) => (term = '') => {

    if(term.length === 0) return state.movies

    return state.movies.filter(movie => movie.nombre.toLowerCase().includes(term.toLocaleLowerCase() ))

}

export const getMoviesByCategoria = (state) =>(nombre='') => {

    const movies = state.movies.filter( movie=> movie.genero.includes(nombre))


    return {...movies}
}
// ID
export const getMovieById = (state) => (id='')=> {
    const movie = state.movies.find( movie => movie.id=== id)
    if(!movie) return
    
    return {...movie}

}

export const clearMovies = (state) =>{
    state.movies= []
    

}