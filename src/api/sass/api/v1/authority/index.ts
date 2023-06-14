export default {
    api: {
        create_or_update(data: ApiForm[], roleId: string) {
            return request({
                baseURL: import.meta.env.VITE_SASS_API,
                url: '/saas/api/v1/authority/api/create_or_update',
                method: 'post',
                data: {
                    data,
                    roleId,
                },
            });
        },
        role(id: string) {
            return request({
                baseURL: import.meta.env.VITE_SASS_API,
                url: `/saas/api/v1/authority/api/role/${id}`,
                method: 'get',
            });
        },
    },
    menu: {
        create_or_update(data: MenuButtonsForm) {
            return request({
                baseURL: import.meta.env.VITE_SASS_API,
                url: '/saas/api/v1/authority/menu/create_or_update',
                method: 'post',
                data,
            });
        },
        role(id: string) {
            return request({
                baseURL: import.meta.env.VITE_SASS_API,
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
