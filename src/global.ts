import type { App } from 'vue'

/**
 * 全局额外注册的组件需要主动引入css
 */
import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/message-box/style/css'
import 'element-plus/es/components/notification/style/css'
export default {
    install(app: App<Element>) {
        app.use(ElMessage)
        app.use(ElMessageBox)
        app.use(ElNotification)
    }
}

declare module '@vue/runtime-core'  {
    export interface ComponentCustomProperties {
        readonly $message: typeof ElMessage,
        readonly $msgbox: typeof ElMessageBox,
        readonly $alert: typeof ElMessageBox.alert,
        readonly $confirm: typeof ElMessageBox.confirm,
        readonly $prompt: typeof ElMessageBox.prompt,
        readonly $notify: typeof ElNotification
    }
}