import {createRouter,createWebHistory} from 'vue-router'

const routes=[{
    path:'/',
    redirect:'/entry'
},{
    path:'/entry',
    component:()=>import('../page/entry.vue'),
    redirect:'entry/home',
    children:[{
        path:'/entry/home',
        component:()=>import('../page/childPage/home.vue')
    },{
        path:'/entry/bills',
        component:()=>import('../page/childPage/bills.vue')
    },{
        path:'/entry/chat',
        component:()=>import('../page/childPage/chat.vue')
    },{
        path:'/entry/my',
        component:()=>import('../page/childPage/my.vue')
    }]
}]

export default createRouter({
    history:createWebHistory(),
    routes:routes,
    linkActiveClass:'textEmphasis'
})