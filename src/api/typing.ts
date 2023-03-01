export interface List<T = any> {
    page_num: number;
    page_size: number;
    total: number;
    list: T[];
}

export interface Menu {
    id: string;
    name: string;
    title: string;
    is_enabled: boolean;
    order: number;
    router: string;
    buttons: string[];
    children: Menu[];
    icon?: string;
    components?: string;
    redirect?: string;
    is_hide?: boolean;
    is_hide_in_tab?: boolean;
    is_fixed_in_tab?: boolean;
    description?: string;
    parent_id?: string | null;
}

export interface Role {
    id?: string;
    code: string;
    name: string;
    is_enabled: boolean;
}

export interface Staff<Remote extends boolean = false> {
    created_at: string;
    is_active: 1 | 0;
    id: string;
    name: string;
    username: string;
    mobile: string;
    avatar?: any;
    is_admin: boolean;
    is_superuser: boolean;
    department_name?: string;
}

export interface User<Remote extends boolean = false> {
    id?: string;
    name: string;
    username: string;
    mobile: string;
    avatar: any;
    is_admin: boolean;
    is_superuser: boolean;
}

export interface Post {
    id?: string;
    name: string;
    code: string;
    is_enabled: boolean;
    order: number;
    node_id: string;
}
