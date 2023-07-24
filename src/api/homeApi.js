import axios from 'axios'

const homeApi = axios.create({
    baseURL: 'https://vue-demos-98eae-default-rtdb.firebaseio.com'
})

homeApi.interceptors.request.use((config)=>{

    config.params = {
        auth: localStorage.getItem('idToken')
    }
    return config
})

export default homeApi