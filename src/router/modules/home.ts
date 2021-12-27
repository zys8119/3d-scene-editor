import { RouteRecordRaw, RouterView } from 'vue-router'
import { markRaw } from 'vue'
import {
    HomeFilled
} from '@element-plus/icons'

const homeRoutes: RouteRecordRaw[] = [
    {
        path: 'home',
        name: 'home',
        meta: {
            title: '文创AR系统',
            fixed: true
        },
        component: () => import('@/views/HelloWorld.vue')
    },
    {
        path: 'platform-manage',
        name: 'platform-manage',
        meta: {
            title: '平台管理'
        },
        component: RouterView,
        children: [
            {
                path: 'test1',
                name: 'test1',
                redirect: '',
                meta: {
                    title: '客户管理',
                },
                component: () => import('@/views/test1.vue')
            },
            {
                path: 'test6',
                name: 'test6',
                redirect: '',
                meta: {
                    title: '模板管理',
                },
                component: () => import('@/views/test6.vue')
            },
            {
                path: 'test2',
                name: 'test2',
                redirect: '',
                meta: {
                    title: '素材管理',
                },
                component: () => import('@/views/test2.vue')
            }
        ]
    },
    {
        path: 'system-manage',
        name: 'system-manage',
        meta: {
            title: '系统管理'
        },
        component: RouterView,
        children: [
            {
                path: 'test3',
                name: 'test3',
                redirect: '',
                meta: {
                    title: '用户管理',
                },
                component: () => import('@/views/test3.vue')
            },
            {
                path: 'test4',
                name: 'test4',
                redirect: '',
                meta: {
                    title: '菜单管理',
                },
                component: () => import('@/views/test4.vue')
            },
            {
                path: 'test5',
                name: 'test5',
                redirect: '',
                meta: {
                    title: '角色管理',
                },
                component: () => import('@/views/test5.vue')
            }
        ]
    }
]

export default homeRoutes