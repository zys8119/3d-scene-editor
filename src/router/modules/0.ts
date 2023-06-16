import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: 'h5',
        component: () => import('@/components/layout/main-h5'),
    },
];
