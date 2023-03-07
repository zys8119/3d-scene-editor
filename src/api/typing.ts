export interface List<T = any> {
    page_num: number;
    page_size: number;
    total: number;
    list: T[];
}
