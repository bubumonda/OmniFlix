export default {

    name: 'auth',
    component: ()=> import('@/modules/auth/layouts/AuthLayout.vue'),
    
    children:[
        {
            path:'',
            name:'login',
            component: ()=> import('@/modules/auth/views/LoginItem.vue')
        },
        {
            path:'/register',
            name:'register',
            component: ()=> import('@/modules/auth/views/RegisterItem.vue')
        }

    ]
}