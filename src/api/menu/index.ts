export default {
    index(id: string) {
        return request({
            url: '/menu',
            method: 'post',
            data: { id },
        });
    },
    create(data: MenuForm) {
        return request({
            url: '/menu/create',
            method: 'post',
            data,
        });
    },
    update(data: MenuForm) {
        return request({
            url: '/menu/update',
            method: 'post',
            data,
        });
    },
    delete(id: string) {
        return request({
            url: '/menu/delete',
            method: 'post',
            data: { id },
        });
    },
    list() {
        return request({
            url: '/menu/list',
            method: 'get',
        });
    },
    role: {
        list() {
            return request({
                url: '/menu/role/list',
                method: 'get',
            });
        },
    },
};

export interface MenuForm {
    id?: string;
    type: 'menu' | 'button';
    name: string;
    title: string;
    url: string;
    component: string;
    redirect: string;
    order: string;
    parent: string | null;
    hidden: boolean;
    hiddenInTab: boolean;
    isActive: boolean;
    fixed: boolean;
    icon: string;
    remark: string;
    permissions: string[];
    buttons: MenuForm[];
}
