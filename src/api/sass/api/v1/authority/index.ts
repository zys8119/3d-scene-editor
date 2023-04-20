export default {
    api: {
        create_or_update(data: ApiForm[]) {
            return request({
                url: '/saas/api/v1/authority/api/create_or_update',
                method: 'post',
                data,
            });
        },
        role(id: string) {
            return request({
                url: `/saas/api/v1/authority/api/role/${id}`,
                method: 'get',
            });
        },
    },
    menu: {
        create_or_update(data: MenuButtonsForm) {
            return request({
                url: '/saas/api/v1/authority/menu/create_or_update',
                method: 'post',
                data,
            });
        },
        role(id: string) {
            return request({
                url: `/saas/api/v1/authority/menu/role/${id}`,
                method: 'get',
            });
        },
    },
};

export interface ApiForm {
    id: string;
    method: string;
    path: string;
}

export interface MenuButtonsForm {
    buttonIds: string[];
    menuIds: string[];
    roleId: string;
}
