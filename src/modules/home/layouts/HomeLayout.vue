<template>
<div class="position-relative">
  <Navbar/>

  <router-view/>


</div>
  
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapActions, mapMutations } from 'vuex'


export default {
    components:{
        Navbar: defineAsyncComponent(() => import('../components/NavbarItem.vue')),
    },
        methods:{
      ...mapActions('home',['loadMovies']),
      ...mapMutations('home',['clearMovies']),
      
      async loadPeliculas(){
        await this.loadMovies()
      }
    },

    created(){
      this.loadPeliculas()
    }
    
}
</script>

<style>


</style>