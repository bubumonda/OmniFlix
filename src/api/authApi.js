import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params:{
        key:'AIzaSyCL73soro_aVvU9IdiMT-q4goSpUe4B-hs'
    }
})

export default authApi