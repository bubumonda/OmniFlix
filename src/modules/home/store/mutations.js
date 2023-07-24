export const setMovies = (state,movies) => {

    state.movies=  [...state.movies,  ...movies]
    state.isLoading = false
}

export const clearMovies = (state) =>{
    state.movies= []
    


}

export const deleteMovie = (state, id)=>{
    const filterEntries = state.movies.filter((e) => e.id !== id)
    state.movies = [...filterEntries]

}

export const updateMovie = (state, entry) => {
    const idx = state.movies.map(e=> e.id).indexOf(entry.id)
    

    state.movies[idx] = entry

}

