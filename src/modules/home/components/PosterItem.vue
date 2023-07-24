import { mapGetters } from 'vuex';
<template>
    <div class="col"  @click="$router.push({name: 'pelicula-view', params: {id: movie.id} })">
    
      <img width="160" height="242" :src="movie.poster" class="card-img-top" alt="MOVIE">

    <p class="text-center">{{movie.nombre}}</p>
      
    
  </div>
</template>

<script >



export default {
  props:{
    movie:{
      type: Object,
      required: true
    }
    
  },



}
</script>

<style scoped>
img{
  cursor:pointer;
}

img:hover{
  transform: scale(1.15);
  transition: 0.5s;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
p{
  font-family: Ubuntu-Regular;
  color:azure;
  font-size: 20px;
  
}

</style>