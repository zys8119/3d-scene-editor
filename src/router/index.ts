import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        meta: {
            type: 'home'
        },
        component: () => import('@/components/HelloWorld.vue')
    }
    // {
    //     path: "/login",
    //     name: "login",
    //     meta: {
    //     type: "login",
    //     },
    //     component: () => import("@/views/login"),
    // },
    // {
    //     path: "/:pathMatch(.*)*", // 注意此处 404页面匹配规则和以前不相同，得采用这种配置方式才行
    //     name: "404",
    //     component: () => import("@/views/404"),
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
