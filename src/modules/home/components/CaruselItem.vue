<template>

       <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        
      <div class="carousel-inner">
        <div class="carousel-item active position relative" data-bs-interval="2000">
          <img src="https://image.tmdb.org/t/p/w1280/7e9MVGg8efOhoA2R9XhZcGWTC5Z.jpg" class="d-block w-100" width="800" height="600" alt="">
          <div class="carousel-caption d-none d-md-block">
            <div class="position-absolute bottom-100 start-0">
            <p class="fs-1 fw-bolder text-white">THE FLASH</p>
            </div>
            <div class="position-absolute bottom-0 start-0">
            <button @click="$router.push({name: 'pelicula-view', params: {id:2} })" type="button" class="btn btn-emerald btn-lg rounded-pill">
            <i class="fa fa-solid fa-play">Ver Pelicula</i> 
          </button>
            </div>
            </div>
        </div>
        
        <div class="carousel-item position relative" data-bs-interval="2000">
          <img src="https://image.tmdb.org/t/p/w1280/2I5eBh98Q4aPq8WdQrHdTC8ARhY.jpg" class="d-block w-100" width="800" height="600" alt="">
          <div class="carousel-caption d-none d-md-block">
            <div class="position-absolute bottom-100 start-0">
            <p class="fs-1 fw-bolder text-white">SPIDERMAN: ACROSS THE SPIDERVERSE</p>
            </div>
            <div class="position-absolute bottom-0 start-0">
            <button @click="$router.push({name: 'pelicula-view', params: {id:3} })"  type="button" class="btn btn-emerald btn-lg rounded-pill">
            <i class="fa fa-solid fa-play">Ver Pelicula</i> 
          </button>

            </div>
            </div>
        </div>

        <div class="carousel-item position relative" data-bs-interval="2000">
          <img src="https://image.tmdb.org/t/p/w1280/rH3jY9JN9krUyE0Q3WLNtujMs8.jpg" class="d-block w-100" width="800" height="600" alt="">
          <div class="carousel-caption d-none d-md-block">
            <div class="position-absolute bottom-100 start-0">
            <p class="fs-1 fw-bolder text-white">TRANSFORMERS: EL DESPERTAR DE LAS BESTIAS</p>
            </div>
            <div class="position-absolute bottom-0 start-0">
            <button @click="$router.push({name: 'pelicula-view', params: {id:4} })" type="button" class="btn btn-emerald btn-lg rounded-pill">
            <i class="fa fa-solid fa-play">Ver Pelicula</i> 
          </button>

            </div>
            </div>
        </div>

        <div class="carousel-item position relative">
          <img src="https://image.tmdb.org/t/p/w1280/cEyhk8tZWubni71M6plwLMQFOIX.jpg" class="d-block w-100" width="800" height="600" alt="">
          <div class="carousel-caption d-none d-md-block">
                       <div class="position-absolute bottom-100 start-0">
            <p class="fs-1 fw-bolder text-white">FAST AND FURIOUS X</p>
            </div>
            <div class="position-absolute bottom-0 start-0">
            <button @click="$router.push({name: 'pelicula-view', params: {id:4} })"  type="button" class="btn btn-emerald btn-lg rounded-pill">
            <i class="fa fa-solid fa-play">Ver Pelicula</i> 
          </button>

            </div>
            </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>


    

  
</template>

<script>
export default {

}
</script>

<style scoped>

img{
  margin-top: -60px;
  opacity: 0.95;
  filter: grayscale(30%);
  
}
button:hover{
  transform: scale(1.15);
  transition: 0.5s;

}



</style>


