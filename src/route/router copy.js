import {createRouter,createWebHistory} from 'vue-router'

const routes=[{
    path:'/',
    redirect:'/home'
},{
    path:'/home',
    component:()=>import('../page/home.vue'),
},{
    path:'/my',
    component:()=>import('../page/my.vue')
}]

export default createRouter({
    history:createWebHistory(),
    routes:routes
})