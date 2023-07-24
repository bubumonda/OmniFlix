<template>
 <Carusel/>
  <div class="container-fluid bg-emerald900 p-5">
      <p class="fs-2 fw-semibold text-white mx-5">PELICULAS</p>
      <input 
        type="text"
        class="form-control me-2"
        placeholder="Buscar Pelicula"
        v-model="term"
        >
  </div>
  
  <div class="container-fluid bg-emerald p-5" >

    <div class="row row-cols-1 row-cols-5 g-5 m-5 p-5 bg-emerald900">
      <template v-if="isLoading">
    <div class="row justify-content-md-center">
    <div class="col-3 alert-info text-center mt-5">
        Espere por favor...
        <h3 class="mt-2">
            <i class="fa fa-spin fa-sync"></i>
        </h3>

    </div>
    </div>
      </template>
      <template v-if="isNotLoading">
      <Poster
      v-for="movie in moviesByTerm"
      :key="movie.id"
      :movie="movie"
      />
      </template>
      
</div>

  </div>
  
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

export default {
    components:{
        Carusel: defineAsyncComponent(() => import('../components/CaruselItem.vue')),
        Poster: defineAsyncComponent(()=> import('../components/PosterItem.vue'))
    },
    computed:{
      ...mapGetters('home',['getMoviesByTerm']),
      moviesByTerm(){
        return this.getMoviesByTerm(this.term)
      
      },
     ...mapState('home',['isLoading']),
        isNotLoading(){
            return !this.isLoading

     },
     
    },
    data(){
      return{
        term :''
      }
    },
    methods:{
      ...mapActions('home',['loadMovies']),
      ...mapMutations('home',['clearMovies'])
      
    },


}
</script>

<style>
body{
  background-color: aliceblue;
}

</style>