import {createRouter, createWebHashHistory} from 'vue-router'
export default createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:'首页',
            component:() => import('../view/Home.tsx')
        }
    ],
})
