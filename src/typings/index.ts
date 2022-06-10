import { TableProps } from 'wisdom-plus'

/**
 * ElementPlus 相关
 */
export type TableColumn<T extends (string | object) = string> = ExtractProps<TableProps['columns']> & Record<string, any> & {
    prop?: T extends object ? keyof T : T
}
export type TableColumns<T extends (string | object) = string> = TableColumn<T>[]

/**
 * ElementPlus 实例
 */
export type FormInstace<Required extends boolean = false> = Required extends false ? (InstanceType<typeof WpForm> | null) : InstanceType<typeof WpForm>

/**
 * 公共类型
 */
export type PageMap = Record<string, string | number | boolean>
export interface FileItem {
    id: number,
    creator_id: string
    creator_name: string,
    name?: string,
    origin_name?: string,
    size: number
    suffix: string
    url: string
}