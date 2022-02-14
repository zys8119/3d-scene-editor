import { List } from '@/api/config'

const prefix = '/v1/permission/role'

export const list = (data: { search?: string }, page: PageMap) => {
    return window.common.axios<List<TableData>>({
        url: `${prefix}/list`,
        method: 'get',
        params: {
            page_no: page.page,
            page_size: page.size,
            ...data
        }
    })
}

export const details = (id: number) => {
    return window.common.axios<Detail>({
        url: `${prefix}/details/${id}`,
        method: 'get'
    })
}

export const create = (data: Partial<Detail>) => {
    return window.common.axios({
        url: `${prefix}/create`,
        method: 'post',
        data
    })
}

export const update = (id: number, data: Partial<Detail>) => {
    return window.common.axios({
        url: `${prefix}/update/${id}`,
        method: 'put',
        data: {
            valid: data.valid,
            name: data.name
        }
    })
}

export const deleteSome = (id: (string | number)[]) => {
    if (id.length === 1) {
        return window.common.axios({
            url: `${prefix}/delete/${id.join(',')}`,
            method: 'delete'
        })
    } else {
        return window.common.axios({
            url: `${prefix}/bulk-delete`,
            method: 'post',
            isFormData: true,
            data: {
                ids: id.join(',')
            }
        })
    }
}

export const roleList = (role_id: number) => {
    return window.common.axios<RoleList[]>({
        url: '/v1/permission/user-role/list',
        method: 'get',
        params: {
            role_id
        }
    })
}

export const roleCreate = (role_id: number, user_ids: number[]) => {
    return window.common.axios({
        url: '/v1/permission/user-role/create',
        method: 'post',
        data: {
            role_id,
            user_ids: user_ids.join()
        }
    })
}

export const menuList = (role_id: number) => {
    return window.common.axios<{
        menus: string[]
    }>({
        url: `${prefix}-menu/list`,
        method: 'get',
        params: {
            role_id
        }
    })
}

export interface TableData {
    id: number,
    name: string,
    datetime_created: string,
    valid: boolean
}

export interface Detail {
    id?: number,
    name: string,
    valid: boolean
}

export interface RoleList {
    id: number,
    role_id: string,
    user_info: {
        id: number,
        name: string,
        username: string
    }
}