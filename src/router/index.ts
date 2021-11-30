import { createRouter, createWebHistory, RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'login',
        meta: {
        type: 'login',
        },
        component: () => import('@/components/Common/Login.vue'),
    }
    // {
    //     path: "/:pathMatch(.*)*", // 注意此处 404页面匹配规则和以前不相同，得采用这种配置方式才行
    //     name: "404",
    //     component: () => import("@/views/404"),
    // }
]

const asyncRoutes: RouteRecordRaw[] = [
    {
        name: 'index',
        path: '/',
        redirect: '/home',
        component: RouterView,
        children: [
            {
                path: 'home',
                name: 'home',
                meta: {
                    type: 'home'
                },
                component: () => import('@/components/HelloWorld.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: [ ...routes, ...asyncRoutes ]
})

export default router
