import { FileItem } from '@/typings'

export default {
    upload(file: File, extra?: Record<string, any>) {
        return window.common.axios<FileItem>({
            url: '/v1/file/upload/',
            method: 'post',
            isFormData: true,
            data: {
                file,
                ...extra
            }
        })
    },
    organizationList() {
        return window.common.axios<Organization[]>({
            url: '/v1/organization/list',
            method: 'get',
            params: {
                get_all: true
            }
        })
    },
    userList(role?: string) {
        return window.common.axios<User[]>({
            url: '/v1/user/userInfo/list',
            method: 'get',
            params: {
                role_name: role,
                no_page: true
            }
        })
    }
}

export interface Organization {
    id: number,
    name: string,
    title: string,
    level: number,
    level_str: string,
    children: Organization[]
}
export interface User {
    id: number,
    username: string,
    mobile_phone?: string,
    name?: string,
    children?: User[]
}