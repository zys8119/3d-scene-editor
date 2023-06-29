import { RouteRecordRaw } from 'vue-router';

export default [
    {
        path: 'scene',
        name: 'scene',
        children: [
            {
                path: 'editor',
                name: 'editor',
                meta: {
                    isFullPage: true,
                },
                component: () => import('@/views/scene/editor.vue'),
            },
        ],
    },
] as RouteRecordRaw[];
