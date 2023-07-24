import auth from '@/modules/auth/store'
import home from '@/modules/home/store'
import {createStore} from 'vuex'
const store = createStore({
    modules:{
    auth,
    home
    }
    
})
export default store
