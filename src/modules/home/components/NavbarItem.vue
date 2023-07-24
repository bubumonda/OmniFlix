<template>
    
    <nav class="fixed-top navbar navbar-expand-lg bg-emerald">

    <div class="container-fluid px-5 mx-5">
      <ul class="navbar nav">
        <li class="nav-item">
    <p class="navbar-brand text-white" href="#">
        <img src="@/assets/logo.png" 
                 alt="Vue Logo"
                 
            >
        OMNIFLIX</p>

        </li>

      </ul>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-5">
        <li class="nav-item mx-2">
          <button class="btn btn-emerald900 rounded-pill" aria-current="page" href="#"
            @click="$router.push({name: 'home-view'})"
          >Inicio</button>
        </li>
        <li class="nav-item dropdown">
          <button class="nav-link dropdown-toggle btn btn-emerald900 rounded-pill" data-bs-toggle="dropdown" type="button" href="#">Categorias</button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" role="button" @click="$router.push({name:'categorias-view', params: {nombre: 'Accion'} })"
                >Acción</a></li>
                <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" role="button" @click="$router.push({name:'categorias-view', params: {nombre: 'Terror'} })"
                >Terror</a></li>
                <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" role="button" @click="$router.push({name:'categorias-view', params: {nombre: 'Drama'} })"
                >Drama</a></li>
          </ul>

        </li>
          

      </ul>

    </div>
          <div class="d-flex">
            <ul class="navbar nav">
            <li class="nav-item">

              <a class="nav-link dropdown-toggle icon" data-bs-toggle="dropdown" href="#" type="button" aria-expanded="false">
                <img  :src="getPhoto" alt="">
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" role="button" @click="$router.push({name: 'perfil-view'})"
                >Perfil</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a @click="onLogout" role="button" class="dropdown-item">
                  
              <i class="fa fa-sign-out-alt">Logout</i>
                  </a></li>
              </ul>
            </li>

            </ul>

          
          
          </div>


    </div>

  
        
    </nav>

  
</template>

<script>
import useAuth from '@/modules/auth/composables/useAuth'
import { useRouter } from 'vue-router'
export default {

 
    setup(){
        const router= useRouter()
        const {username, logout, getPhoto} = useAuth()
        return{
            username,
            onLogout: ()=>{
                router.push({name: 'login'})
                logout()
            },
            getPhoto
        }
    }
}
</script>

<style scoped>

  nav{

      font-size: 20px;
      line-height: 1.7;
      color: #666666;

  }

  button{

      font-size: 20px;
      line-height: 1.7;
      color: #ffffff;
  }
  img{
    width: 55px;
    height: 55px;
    border-radius: 150px;
  }
  img:hover{
    filter: grayscale(80%);
  }
</style>