import type { App } from 'vue'

import type { Schemas as SchemasType } from '@/components/DataForm/interface'
import type {
    TableColumn as TableColumnType,
    TableColumns as TableColumnsType,
    PageMap as PageMapType,
    FileItem as FileItemType
} from '@/typings'
import type DataForm from '@/components/DataForm/DataForm.vue'
import type PageLayout from '@/components/PageLayout/PageLayout.vue'

export default {
    install(app: App<Element>) {
        app.use(ElMessage)
        app.use(ElMessageBox)
        app.use(ElNotification)
    }
}

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $message: typeof ElMessage,
        $msgbox: typeof ElMessageBox,
        $alert: typeof ElMessageBox.alert,
        $confirm: typeof ElMessageBox.confirm,
        $prompt: typeof ElMessageBox.prompt,
        $notify: typeof ElNotification
    }
}

declare global {
    type TableColumn<T extends string | object = string> = TableColumnType<T>
    type TableColumns<T extends (string | object) = string> = TableColumnsType<T>
    type PageMap = PageMapType
    type FileItem = FileItemType
    type DataFormInstance = InstanceType<typeof DataForm>
    type PageLayoutInstance = InstanceType<typeof PageLayout>
    type Schemas<T extends string | object = string> = SchemasType<T>
    type ExtractProps<T extends abstract new (...args: any) => any, P extends boolean = true> = P extends true ? Partial<(InstanceType<T>)['$props']> : (InstanceType<T>)['$props']
}