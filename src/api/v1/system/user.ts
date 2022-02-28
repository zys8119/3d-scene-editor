import { PageMap } from '@/typings'
import { type List } from '../../config'

export default {
    login(data: { username: string, password: string }) {
        return window.common.axios({
            url: '/v1/user/login',
            method: 'post',
            isFormData: true,
            params: {
                pc: true
            },
            data
        })
    },
    register(data: {
        mobile_phone?: string,
        unit_id: number,
        name?: string
    }) {
        return window.common.axios({
            url: '/v1/user/register/',
            method: 'post',
            isFormData: true,
            data
        })
    },
    verify(access_token: string) {
        return window.common.axios<{
            token_validated: boolean
        }>({
            url: '/v1/auth/token/verify/',
            method: 'post',
            data: {
                access_token
            }
        })
    },
    tokenRefresh(refresh_token: string) {
        return window.common.axios<{
            access_token: string,
            authorization: string
        }>({
            url: '/v1/auth/token/refresh/',
            method: 'post',
            data: {
                refresh_token
            }
        })
    },
    delete(id: number | string) {
        return window.common.axios({
            url: `/v1/organization/user-organization/delete/${id}`,
            method: 'DELETE'
        })
    },
    details(id: number | string) {
        return window.common.axios<Required<TableUser>>({
            url: `/v1/organization/user-organization/details/${id}`,
            method: 'get'
        })
    },
    update(id: number, data: Partial<TableUser>) {
        return window.common.axios({
            url: `/v1/user/update/${id}`,
            method: 'put',
            data: {
                name: data.user_name,
                mobile_phone: data.user_mobile_phone
            }
        })
        // return window.common.axios({
        //     url: `/v1/organization/user-organization/update/${id}`,
        //     method: 'put',
        //     isFormData: true,
        //     data
        // })
    },
    list(organization_id: number, page: PageMap, search?: string) {
        return window.common.axios<List<TableUser>>({
            url: '/v1/organization/user-organization/list',
            method: 'get',
            params: {
                organization_id,
                page_no: page.page,
                page_size: page.size,
                search
            }
        })
    },
    createOrganization(data: Partial<OrganizationCreate>) {
        return window.common.axios({
            url: '/v1/organization/create',
            method: 'post',
            isFormData: true,
            data
        })
    },
    getOrganization(id: number | string) {
        return window.common.axios<Required<OrganizationCreate>>({
            url: `/v1/organization/details/${id}`,
            method: 'get'
        })
    },
    updateOrganization(id: number, data: Partial<OrganizationCreate>) {
        return window.common.axios({
            url: `/v1/organization/update/${id}`,
            method: 'put',
            data
        })
    },
    deleteOrganization(id: number | string) {
        return window.common.axios({
            url: `/v1/organization/delete/${id}`,
            method: 'DELETE'
        })
    },
}

export interface OrganizationCreate {
    id?: number,
    name: string,
    type: 1 | 2 | 3,
    level?: 1 | 2 | 3 | 4 | 5,
    parent_id?: number
}

export interface TableUser {
    id?: number,
    user_id?: number,
    user_name: string,
    user_mobile_phone: string,
    organization_id: string,
    role?: string | null
}

export interface RegisterUser {
    id: number,
    name: string,
    mobile_phone: string,
    user_id?: number
}