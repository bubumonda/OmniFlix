import homeApi from "@/api/homeApi";

export const loadMovies = async ({commit}, id) => {
    const {data} = await homeApi.get('/Movies.json')


    if (!data){
        commit('setMovies',[])
        return
    }

    const movies = []
    for ( let id of Object.keys( data )){
        movies.push({
            id,
            ...data[id]
        })
    }
    commit('setMovies',movies)
    
    return movies[id]
}



// export const updateMovie = async ({commit},entry) => {
//     const {date,text, picture} = entry
//     const dataToSave = {
//         date,
//         text,
//         picture
//     }
//     await journalApi.put(`/Entries/${entry.id}.json`,dataToSave)
//     dataToSave.id = entry.id

//     commit('updateEntry',{...dataToSave})


// }

// export const createEntry = async ({commit}, entry) => {
//     const {text,date,picture} = entry
//     const dataToSave = {
//         text,
//         date,
//         picture
//     }
//     const {data} = await homeApi.post('/Movies.json',dataToSave)
//     const dataToSend={
//         id: data.name,
//         date,
//         text

//     }
    


//     commit('addEntry',dataToSend)

//     return data.name

// }
export const deleteEntry = async({commit}, id)=>{
    await homeApi.delete(`/Movies/${id}.json`)

    commit('deleteEntry',id)

}