<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <div class="d-flex">
            <button class="btn btn-outline-info mx-2"
                @click="onLogout">
                <i class="fa fa-sign-out-alt">Logout</i>
            </button>
        </div>
</template>

<script>
// @ is an alias to /src


import useAuth from '@/modules/auth/composables/useAuth'
import { useRouter } from 'vue-router'
export default {

 
    setup(){
        const router= useRouter()
        const {username, logout} = useAuth()
        return{
            username,
            onLogout: ()=>{
                router.push({name: 'login'})
                logout()
            }
        }
    }
}
</script>
