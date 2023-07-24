<template>
  <button class="btn btn-primary">
    
    <i class="fa-solid"
        :class="icon"
        
    ></i>
  </button>
</template>

<script>
export default {
    props:{
        icon:{
        type:String,
        default:'fa-save fa-2xl'
        },
    
    },
  

}
</script>

<style lang="scss" scoped>
button{
    border-radius: 100%;
    bottom: 20px;
    height: 80px;
    position: fixed;
    right: 20px;
    width: 80px;

}

</style>

