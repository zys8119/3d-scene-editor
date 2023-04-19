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
    delete(ids: string[]) {
        return request({
            url: '/saas/api/v1/menu/delete',
            method: 'post',
            data: { ids },
        });
    },
    update(data: MenuListData) {
        return request({
            url: '/saas/api/v1/menu/update',
            method: 'post',
            data: preprocessor(data, {
                buttons: () => void 0,
                children: () => void 0,
            }),
        });
    },
    get(id: string) {
        return request({
            url: `/saas/api/v1/menu/${id}`,
            method: 'get',
        });
    },
};

export interface MenuForm {
    component: string;
    fixed: boolean;
    hidden: boolean;
    hiddenInTab: boolean;
    icon: string;
    isActive: boolean;
    meta?: any;
    name: string;
    parentId: string | null;
    redirect: string;
    remark: string;
    sort: number;
    title: string;
    url: string;
}

export interface MenuListData extends MenuForm {
    buttons: {
        code: string;
        id: string;
        menuId: string;
        name: string;
        sort: number;
    }[];
    children: MenuListData[];
    id: string;
    parent: MenuListData | undefined;
}
