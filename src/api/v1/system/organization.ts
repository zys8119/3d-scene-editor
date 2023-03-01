/** 组织架构系列 api */

/** 列表页 */
export function getList() {
    return request<{ list: Organization[] }>({
        url: '/api/admin/v1/organization-node/tree/',
    });
}

/** 详情 */
export function getDetail(id: string) {
    return request<Organization>({
        url: `/api/admin/v1/organization-node/${id}`,
    });
}

/** 创建 */
export function create(organization: Partial<Organization>) {
    return request({
        method: 'post',
        url: '/api/admin/v1/organization-node',
        data: preprocessor(organization, {
            parent_name: () => void 0,
        }),
    });
}

/** 修改 */
export function update(id: string, organization: Partial<Organization>) {
    return request({
        method: 'put',
        url: `/api/admin/v1/organization-node/${id}`,
        data: preprocessor(organization, {
            children: () => void 0,
        }),
    });
}

/** 删除 */
export function remove(ids: string[]) {
    return request({
        method: 'delete',
        url: '/api/admin/v1/organization-node',
        data: {
            id_list: ids,
        },
    });
}

export function getOrgRoles(id: string) {
    return request({
        url: `/api/admin/v1/organization-node/get-org-roles/${id}`,
    });
}
export function updateOrgRoles(id: string, id_list: string[]) {
    return request({
        method: 'post',
        url: `/api/admin/v1/organization-node/update-org-roles/${id}`,
        data: {
            id_list,
        },
    });
}

export interface Organization {
    code: string;
    created_at: string;
    id: string;
    is_enabled: boolean;
    modified_at: string;
    node_type: OrganizationNodeTypeEnum;
    parent_id?: string | null;
    parent_name?: string;
    name: string;
    total_path: string;
    children?: Organization[];
    managers?: { id: string; name: string }[];
}

export type OrganizationNodeTypeEnum = 'company' | 'department';
