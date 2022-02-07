export interface List<T = any> {
    list: T[]
    page_no: number
    page_size: number
    total: number
}