import type { App } from 'vue'

import { install } from 'resize-observer'
if (!window.ResizeObserver) install()

import {
    type Schemas as SchemasType,
    type WpProForm,
    type WpProPageLayout,
    proFormGenerate,
    permissionConfig
} from 'wisdom-plus'
import type {
    FileItem as FileItemType,
    PageMap as PageMapType,
    TableColumn as TableColumnType,
    TableColumns as TableColumnsType
} from '@/typings'

import { name, version } from '../package.json'
/** 打印版本信息 */
console.log(`%c${name} v${version}`, 'color: #fff; border-radius: 5px; padding: 10px 25px;background: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%)')

const ProElForm = proFormGenerate('ProElForm', ElForm, ElFormItem)
permissionConfig.useRoute = useRoute

export default {
    install(app: App<Element>) {
        app.use(ElMessage)
        app.use(ElMessageBox)
        app.use(ElNotification)
        app.component('ProElForm', ProElForm)
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

declare module 'vue' {
    export interface GlobalComponents {
        ProElForm: typeof ProElForm
    }
}

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