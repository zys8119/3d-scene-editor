import {App, h} from 'vue'
import {Dialog, DialogOptions, closeAllModals, ModalProps, WpButton, Toast} from 'wisdom-plus'
import {merge} from 'lodash'
import CommonModalHeader from '@/components/CommonModalHeader.vue'
import AlertFooter from '@/components/AlertFooter.vue'

/**
 // vant 兼容处理
 import {Dialog} from 'vant'
 import 'vant/lib/index.css'
 import {merge} from 'lodash'
 import alert, {AlertPlugConfig} from '@/alert'
 app.use(alert, {
    defineComponent:async(config: any) => {
        const content = await config.content
        const vnode = h(content?.default, config.props)
        return h(Dialog(merge( {
            title:config.title,
            message:content?.default ? (() => vnode) : content,
            className:'van-popup--bottom',
            showConfirmButton:false,
        }, config)))
    }
} as AlertPlugConfig)
 */
export interface AlertPlugConfig {
    defineComponent?(config: any):void
}

const alertOptionsInIt = ref<AlertPlugConfig>({} as any)
export const alertPlug = (alertOptions:Partial<DialogOptions & AlertOptions> = {}) => {
    const options = merge({
        showCloseIcon:true,
        showTitle:true,
    }, alertOptions)
    const config = merge({
        showFooter:false,
        content:options.component ? h(defineComponent({
            setup() {
                return () => [
                    options.showTitle ? h(CommonModalHeader, {
                        // title:options.title,
                        showClose:options.showCloseIcon,
                        onClose:() => {
                            closeAllModals()
                        },
                    }, {
                        title:() => Object.prototype.toString.call(options.title) === '[object Object]' ? h(options.title) : options.title
                    }) : null,
                    h(Object.prototype.toString.call(options.component) === '[object Promise]' ? defineAsyncComponent(() => options.component) as any : options.component, merge({
                        title:options.props,
                    }, options.props), options.children),
                ]
            }
        })) : options.content
    }, options, {
        title:false,
        showCloseIcon:true,
        props:merge({
            class:'common-wp-modal',
            showClose:false,
            width:'700px',
        }, options.modalProps)
    }, options.alert ? {
        title:options.title || '温馨提示',
        props:{
            width:400,
        },
        content:h(defineComponent({
            setup() {
                return () => [
                    h('div', {
                        class:{
                            'p-a-15':true
                        }
                    }, options.content),
                    h(AlertFooter, () => [
                        h(WpButton, {
                            onClick:ev => {
                                closeAllModals()
                                options.onCancel?.(ev)
                            }
                        }, {
                            default:() => '取消'
                        }),
                        h(WpButton, {
                            type:'primary',
                            onClick:ev => {
                                closeAllModals()
                                options.onConfirm?.(ev)
                            }
                        }, {
                            default:() => '确定'
                        })
                    ]),
                ]
            }
        }))
    } : {})
    return alertOptionsInIt.value.defineComponent?.(config as any)
}

alertPlug.install = (app: App<Element>, options:AlertPlugConfig = {}) => {
    alertOptionsInIt.value = merge<AlertPlugConfig, AlertPlugConfig>({
        defineComponent(config:any) {
            return Dialog(config)
        }
    }, options)
    app.config.globalProperties.$alert = alertPlug
    window.$alert = alertPlug
    app.config.globalProperties.$toast = Toast
    app.config.globalProperties.$Toast = Toast
    window.$toast = Toast
}

alertPlug.close = closeAllModals
interface AlertOptions {
    onConfirm?:(ev:MouseEvent)=>void
    onCancel?:(ev:MouseEvent)=>void
    content?:any
    alert?:boolean
    component?:any
    title?:any
    showCloseIcon?:boolean
    showTitle?:boolean
    props?:Record<string, any>
    modalProps?: Partial<ModalProps> & Record<string, any>;
    children?: any []
}

declare global {
    interface Window {
        $alert:typeof alertPlug
        $toast: typeof Toast;
        $Toast: typeof Toast;
    }
}
declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $alert: typeof alertPlug;
        $toast: typeof Toast;
        $Toast: typeof Toast;
    }
}

export default alertPlug
