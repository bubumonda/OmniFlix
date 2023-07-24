export default{
    name:'home',
    component: () => import('@/modules/home/layouts/HomeLayout.vue'),
    children:[
        {
            path: '',
            name: 'home-view',
            component: () => import( '@/modules/home/views/HomeView.vue')
            },
        {
            path: ':id',
            name: 'pelicula-view',
            component: () => import( '@/modules/home/views/PeliculaView.vue'),
            props: (route)=>{
                return{
                    id: route.params.id
                }


            }
        },
        {
            path:'/perfil',
            name: 'perfil-view',
            component: () => import( '@/modules/home/views/PerfilView.vue'),
        },
        {
            path:'/categorias/:nombre',
            name:'categorias-view',
            component: () => import('@/modules/home/views/CategoriasView.vue'),
            props:(route)=>{
                return{
                    nombre: route.params.nombre
                }
            }
        }
    ]
}