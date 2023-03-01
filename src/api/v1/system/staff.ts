/** 员工信息 */

import { List, Staff } from "@/api/typing";

/** 获取用户列表 */
export function getUsers(data: object, page: PageMap, organizationId: string) {
    return request<List<Staff>>({
        url: `/api/admin/v1/staff/get-org-staff/${organizationId}`,
        params: {
            ...data,
            page_num: page.page,
            page_size: page.size,
        },
    });
}
/** 获取已绑定负责人列表 */
export function getOrgAdmin(
    data: object,
    page: PageMap,
    organizationId: string
) {
    return request<List<Staff>>({
        url: `/api/admin/v1/staff/get-org-admin/${organizationId}`,
        params: {
            ...data,
            page_num: page.page,
            page_size: page.size,
        },
    });
}
/** 更新绑定负责人列表 */
export function updateOrgAdmin(id_list: string[], organizationId: string) {
    return request<List<Staff>>({
        method: "post",
        url: `/api/admin/v1/staff/update-org-admin/${organizationId}`,
        data: {
            id_list,
            is_manager: true,
        },
    });
}

/** 创建 */
export async function create(user: Partial<Staff<false>>, id?: string) {
    /**
     * 0. 预处理
     */
    const addRequest = request<Staff>({
        url: "/api/admin/v1/user",
        method: "post",
        data: preprocessor(user, {
            department_name: () => void 0,
        }),
    });
    /**
     * 1. 创建用户
     */
    if (!id) return addRequest;
    const userinfo = await addRequest;
    /**
     * 2. 绑定关系
     */
    await batchUpdate(id, [userinfo.data.id]);
    return addRequest;
}

/** 批量绑定关系 */
export function batchUpdate(organizationId: string, ids: string[]) {
    return request({
        url: `/api/admin/v1/staff/update-org-staff/${organizationId}`,
        method: "post",
        data: {
            id_list: ids,
        },
    });
}

/** 删除 */
export function remove(ids: (string | number)[]) {
    return request({
        method: "delete",
        url: "/api/admin/v1/user",
        data: {
            id_list: ids,
        },
    });
}

/** 批量设置状态 */
export function updateEffect(
    id_list: string[],
    is_effect: boolean,
    organizationId: string
) {
    return request({
        method: "post",
        url: `/api/admin/v1/staff/update-staff-status/${organizationId}`,
        data: {
            id_list,
            is_effect,
        },
    });
}

/** 重置密码 */
export function resetPassword(id_list: string[], data: Partial<Password>) {
    return request({
        method: "patch",
        url: "/api/admin/v1/user/reset-users-password",
        data: {
            id_list,
            ...preprocessor(data, {
                confirm_password: () => void 0,
            }),
        },
    });
}

export interface Password {
    admin_password: string;
    new_password: string;
    confirm_password: string;
}
