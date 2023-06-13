import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: 'system',
        name: 'System',
        meta: {
            title: '系统管理',
            icon: 'menus-menu',
        },
        redirect: '/login/organization',
        children: [
            {
                path: 'organization',
                name: 'Organization',
                meta: {
                    title: '组织架构',
                    permissions: [
                        { name: '新建单位', code: 'addOrganization' },
                        { name: '新建子单位', code: 'addSubOrganization' },
                        { name: '新增部门', code: 'addDepartment' },
                        { name: '编辑组织架构', code: 'editOrganization' },
                        { name: '删除组织架构', code: 'deleteDepartment' },
                        { name: '新增用户', code: 'addUser' },
                        { name: '绑定用户', code: 'bindUser' },
                        { name: '编辑用户', code: 'editUser' },
                        { name: '删除用户', code: 'deleteUser' },
                        { name: '批量密码修改', code: 'batchUpdatePassword' },
                    ],
                },
                component: () =>
                    import('@/views/system/organization/index.vue'),
            },
            {
                path: 'tenant',
                name: 'Tenant',
                meta: {
                    title: '租户管理',
                    permissions: [
                        { name: '用户列表', code: 'userList' },
                        { name: '新增用户', code: 'addUser' },
                        { name: '编辑用户', code: 'editUser' },
                        { name: '删除用户', code: 'deleteUser' },
                        { name: '绑定用户', code: 'bindUser' },
                        { name: '新增租户', code: 'addTenant' },
                        { name: '编辑租户', code: 'editTenant' },
                        { name: '删除租户', code: 'deleteTenant' },
                    ],
                },
                component: () => import('@/views/system/tenant/index.vue'),
            },
            {
                path: 'user',
                name: 'User',
                meta: {
                    title: '用户管理',
                    permissions: [
                        { name: '新增用户', code: 'addUser' },
                        { name: '编辑用户', code: 'editUser' },
                        { name: '删除用户', code: 'deleteUser' },
                    ],
                },
                component: () => import('@/views/system/user/index.vue'),
            },
            {
                path: 'user-group',
                name: 'UserGroup',
                meta: {
                    title: '用户组管理',
                    permissions: [
                        { name: '新增用户组类型', code: 'addUserGroupType' },
                        { name: '编辑用户组类型', code: 'editUserGroupType' },
                        { name: '删除用户组类型', code: 'deleteUserGroupType' },
                        { name: '新增用户组', code: 'addUserGroup' },
                        { name: '编辑用户组', code: 'editUserGroup' },
                        { name: '删除用户组', code: 'deleteUserGroup' },
                        { name: '绑定用户', code: 'bindUser' },
                    ],
                },
                component: () => import('@/views/system/user-group/index.vue'),
            },
            {
                path: 'position',
                name: 'Position',
                meta: {
                    title: '职位管理',
                    permissions: [
                        { name: '新增职位', code: 'addPosition' },
                        { name: '编辑职位', code: 'editPosition' },
                        { name: '删除职位', code: 'deletePosition' },
                    ],
                },
                component: () => import('@/views/system/position/index.vue'),
            },
            {
                path: 'menu',
                name: 'Menu',
                meta: {
                    title: '菜单管理',
                    permissions: [
                        { name: '新增菜单', code: 'addMenu' },
                        { name: '编辑菜单', code: 'editMenu' },
                        { name: '删除菜单', code: 'deleteMenu' },
                        { name: '按钮设置', code: 'buttonSet' },
                    ],
                },
                component: () => import('@/views/system/menu/index.vue'),
            },
            {
                path: 'api',
                name: 'Api',
                meta: {
                    title: '接口管理',
                    permissions: [
                        { name: '新增接口', code: 'addApi' },
                        { name: '编辑接口', code: 'editApi' },
                        { name: '删除接口', code: 'deleteApi' },
                    ],
                },
                component: () => import('@/views/system/api/index.vue'),
            },
            {
                path: 'role',
                name: 'Role',
                meta: {
                    title: '角色管理',
                    permissions: [
                        { name: '新增角色', code: 'addRole' },
                        { name: '编辑角色', code: 'editRole' },
                        { name: '删除角色', code: 'deleteRole' },
                        { name: '绑定人员', code: 'bindUser' },
                        { name: '菜单权限', code: 'menuAuth' },
                        { name: '接口权限', code: 'apiAuth' },
                    ],
                },
                component: () => import('@/views/system/role/index.vue'),
            },
        ],
    },
];

export default routes;
