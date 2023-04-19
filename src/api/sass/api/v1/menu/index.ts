export default {
    tree: {
        list() {
            return request({
                url: '/saas/api/v1/menu/tree/list',
                method: 'get',
            });
        },
    },
    create(data: MenuForm) {
        return request({
            url: '/saas/api/v1/menu/create',
            method: 'post',
            data,
        });
    },
    delete(ids: number[]) {
        return request({
            url: '/saas/api/v1/menu/delete',
            method: 'post',
            data: { ids },
        });
    },
    update(data: MenuForm & { id: number }) {
        return request({
            url: '/saas/api/v1/menu/update',
            method: 'post',
            data,
        });
    },
    get(id: number) {
        return request({
            url: `/saas/api/v1/menu/${id}`,
            method: 'get',
        });
    },
};

export interface MenuForm {
    component: string;
    Component: string;
    fixed: boolean;
    hidden: boolean;
    hiddenInTab: boolean;
    icon: string;
    isActive: boolean;
    meta?: any;
    name: string;
    parentId: number | null;
    redirect: string;
    remark: string;
    sort: number;
    title: string;
    url: string;
}

export interface MenuListData {
    buttons: {
        code: string;
        id: number;
        menuId: number;
        name: string;
        sort: number;
    }[];
    children: MenuListData[];
    component: string;
    fixed: boolean;
    hidden: boolean;
    hiddenInTab: boolean;
    icon: string;
    id: number;
    isActive: boolean;
    menuType: number;
    meta: any;
    name: string;
    parentId: number;
    redirect: string;
    remark: string;
    sort: number;
    title: string;
    url: string;
}
