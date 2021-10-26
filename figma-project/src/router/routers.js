import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
mode:'history',
base: process.env.BASE_URL,
routes:[
    {
        path:'/login',
        name:'login',
        meta:{layout:'auth'},
        component:() => import('../views/Login'),
    },
    {
        path: '/',
        name:'main',
        meta:{ layout:'main'},
        component:()=>import('../views/MainPage')
    }
]

})

