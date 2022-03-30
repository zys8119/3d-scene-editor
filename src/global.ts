import {
    type Schemas as SchemasType,
    type WpProForm,
    type WpProPageLayout,
    permissionConfig
} from 'wisdom-plus'
import type {
    FileItem as FileItemType,
    PageMap as PageMapType,
    TableColumn as TableColumnType,
    TableColumns as TableColumnsType
} from '@/typings'

permissionConfig.useRoute = useRoute
declare global {
    type TableColumn<T extends string | object = string> = TableColumnType<T>
    type TableColumns<T extends (string | object) = string> = TableColumnsType<T>
    type PageMap = PageMapType
    type FileItem = FileItemType
    type DataFormInstance = InstanceType<typeof WpProForm>
    type PageLayoutInstance = InstanceType<typeof WpProPageLayout>
    type Schemas<T extends string | object = string> = SchemasType<T>
    type ExtractProps<T extends abstract new (...args: any) => any, P extends boolean = true> = P extends true ? Partial<(InstanceType<T>)['$props']> : (InstanceType<T>)['$props']
}