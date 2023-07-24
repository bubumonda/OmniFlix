
<template>
  <div class="container-fluid bg-emerald900 contenedor">
    <h1 class="text-start bg-emerald450 text-white">Mi Perfil</h1>

    <div class="d-flex justify-content-center position-relative">
    <img  v-if="getProfilePhoto && !localImage"  :src="getProfilePhoto" alt="entry-pictyre" class="img-thumbnail">
        <img  v-if="localImage" :src="localImage" alt="entry-picture" class="img-thumbnail">
    <input type="file"
                    @change="onSelectedImage"
                    ref="imageSelector"
                    v-show="false"
                    accept="image/png, image/jpeg">
    <button v-if="!editarFoto" @click="onSelectImage" class="btn btn-emerald900 rounded-pill position-absolute bottom-0 start-40">
    <i class="fa-solid fa-pen-to-square fa-2xl "></i>
    </button>
     <button v-if="editarFoto" @click="guardarImagen" class="btn btn-emerald900 rounded-pill position-absolute bottom-0 start-40">
    <i class="fa-solid fa-save fa-2xl "></i>

    </button>

    

    </div>

    <div  class="container text-center bg-emerald450 mt-5">
    <form  >

    <div class="row">
        <div class="col">
            <h3>General</h3>
        </div>
    </div>
    <div class="row m-5">
    <div class="col-sm-4">
        <h4 class="text-white">Nombre</h4>
    </div>
    <div  class="col-sm-8">
        <input v-if="editar"  v-model="userDatos.nombre" class="input100" type="text" placeholder="Nombre" required>
        <h4 v-if="!editar" class="text-white">{{getUsername}}</h4>
    </div>

    
    </div>

    <div class="row m-5">
    <div class="col-sm-4">
        <h4 class="text-white">Email</h4>
    </div>
    <div  class="col-sm-8">

        <input v-if="editar"  v-model="userDatos.email" class="input100" type="text" placeholder="Email" required>
        <h4 v-if="!editar" class="text-white">{{getEmail}}</h4>
    </div>
    </div>

    <div v-if="editar" class="row m-5 mb-5">
    <div class="col-sm-4">
        <h4 class="text-white">Contraseña</h4>
    </div>
    <div  class="col-sm-8">

        <input   v-model="userDatos.password" class="input100" type="password" placeholder="" required>
    </div>
    </div>
    

    <FabItem
        v-if="!editar"
        @click="editarDatos"
        icon="fa-pen-to-square fa-2xl"
        
    />
    <FabItem
        v-if="editar"
        @click="guardarDatos"
        type="submit"
        
    />
    </form>
    </div>
    <div class="container  bg-emerald">
            <h2 class="text-white">Seguir Viendo...</h2>
            <div class="card-group row row-cols-1 row-cols-6">
                <Poster
                    v-for="movie in moviesByTerm"
                    :key="movie.id"
                    :movie="movie"
                    />
            </div>
    </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import Swal from 'sweetalert2'
import uploadImage from '@/modules/home/helpers/uploadImage.js'

export default {

    data(){
        return{
        term: '',
        editar: false,
        editarFoto:false,
        userDatos:{
            nombre:'',
            email:'',
            password:'',
            profilePhoto: this.getProfilePhoto
        },
        file:null,
        localImage:null
        }
    },
    components:{
        FabItem: defineAsyncComponent( ()=> import('../components/FabItem.vue') ),
        Poster: defineAsyncComponent(()=> import('../components/PosterItem.vue'))
    },
    methods:{
        editarDatos(){
            this.editar= true
        },
        ...mapActions('auth',['updateDatos','uploadProfile']),
        async guardarDatos(){
             new Swal({
                title: 'Espere por favor',
                allowOutsideClick: false
            })
            Swal.showLoading()
            if(this.userDatos.nombre.length == 0 || this.userDatos.email.length == 0){
                Swal.fire('Error','Todos los campos deben estar llenos','error')
                this.editar = true
            }else{

            this.userDatos.profilePhoto = this.getProfilePhoto
            const {ok, message}= await this.updateDatos( this.userDatos)
            this.editar= false
			if(!ok) Swal.fire('Error', message, 'error')
            else Swal.fire('Guardado','Entrada registrada con exito','success')
            }
        },
        async guardarImagen(){
            new Swal({
                title: 'Espere por favor',
                allowOutsideClick: false
            })
            Swal.showLoading()
            if(!this.file) {
                Swal.fire('Error','No hay archivo', 'error')
                this.editarFoto = false
            }else{
            const fotoPerfil = await uploadImage( this.file)
            
            
            this.userDatos.profilePhoto = fotoPerfil
            
            
            const {ok, message}= await this.uploadProfile( this.userDatos)
            this.file = null
            this.editarFoto= false
			if(!ok) Swal.fire('Error', message, 'error')
            else Swal.fire('Guardado','Entrada registrada con exito','success')
            }
        },
        onSelectedImage( event ){
            const file = event.target.files[0]
            if( !file){
                return
            }
            this.file= file
            const fr = new FileReader()
            fr.onload = () => this.localImage = fr.result
            fr.readAsDataURL( file )
            

        },
        onSelectImage(){
            this.$refs.imageSelector.click()
            this.editarFoto= true
        


        },
        
    },
    computed:{
        ...mapGetters('auth',['getUsername','getEmail','getProfilePhoto', 'getListaVista']),
        ...mapGetters('home',['getMoviesByTerm']),
      moviesByTerm(){
        return this.getListaVista
      
      },
    }
    

}
</script>

<style scoped>
.contenedor{
    margin-top: 103px;
    height: 100%;
}
img{
    width: 200px;
    height: 200px;
    border-radius: 150px;
}


</style>