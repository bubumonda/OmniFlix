<template>  
  <div class="container-fluid position-relative bg-emerald900 p-5" >
    <div class="row row-cols-1 row-cols-3 ">
      <div class="col img-poster">
  <img width="160" height="242" class="img-fluid"  :src="movie.poster" alt="">
      </div>
      <div class="col resumen-poster">
        <p class="titulo">{{movie.nombre}}</p>
        <p class="my-4 text-white">{{movie.año}}</p>
        <p class="my-4 text-white">{{sinopsis}}</p>
        <p class="my-4 text-white">{{generos}}</p>
      </div>

    </div>
      <div class="container-fluid bg-emerald">
  <Artplayer @get-instance="getInstance" :option="option" :style="style" @click="setMoviesLista" />
        </div>
        


  </div>
</template>

<script>
import Artplayer from "../components/ArtplayerItem.vue";
import { mapActions, mapGetters} from 'vuex';
import Swal from 'sweetalert2';



export default {
  
  data() {
    return {

      movie: null,
      
      option: {
        url: '',
        fullscreen: true,
        miniProgressBar: true,
        theme : '#044fff6f',
         
          
        
      },
      style: {
        width: "1000px",
        height: "500px",
        margin: "60px auto 0",
      },
    };
  },
  components: {
    Artplayer,
  },
  methods: {
    getInstance(art) {
      console.info(art);
      
    },
      ...mapActions('home',['loadMovies']),
      ...mapActions('auth',['setVistaLista']),
    async loadMovie(){
    
      
      this.movie= this.getMovieById(this.id)


      this.option.url= this.movie.pelicula
    },
    async loadPeliculas(){
      await this.loadMovies()
    },
    async setMoviesLista(){

      if(!this.getListaVistaById(this.id)){
      const {ok, message}= await this.setVistaLista(this.movie)
				if(!ok) Swal.fire('Error', message, 'error')
    }
  
        
    }


  },
  computed:{


    ...mapGetters('home',['getMoviesByTerm','getMovieById']),
    ...mapGetters('auth',['getListaVista','getListaVistaById']),
    sinopsis(){
            return (this.movie.sinopsis.length > 200)
                ? this.movie.sinopsis.substring(0,200) + '...'
                : this.movie.sinopsis
        },
    generos(){
      return this.movie.genero.join()
      
      
    }

  },
  props:{
    id:{
      type: String,
      required: true
  }
    
    },
    watch:{
        id(){
            this.loadMovie()

        }

    },

    created(){

        this.loadMovie()

      

      
    },
  

};
</script>
<style scoped>
  .img-poster{
    margin-top: 100px;
    margin-left: 210px;
  }
  .resumen-poster{
        margin-top: 100px;
        margin-left: -290px;
  }
  .titulo{
    font-size: 20px;
    font-weight: bold;
    color: white;

  }

</style>