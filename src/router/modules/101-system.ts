import { RouteRecordRaw, RouterView } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: 'system',
        name: 'System',
        meta: {
            title: '系统管理',
            icon: 'svgs-dingbufanhui',
        },
        children: [
            {
                path: 'organization',
                name: 'Organization',
                meta: {
                    title: '组织架构',
                    tabTitle: 'asdfjalskdfj',
                    fixed: true,
                },
                component: () =>
                    import('@/views/system/organization/index.vue'),
            },
        ],
    },
];

export default routes;
