import demo from './demo'
import {App} from 'vue'

export const api = {
    demo
}

declare global {
    interface Window {
        api: typeof api
    }
}

declare module 'vue' {
    export interface ComponentCustomProperties {
        api: typeof api;
    }
}

export default {
    install(app: App<Element>) {
        app.config.globalProperties.api = api
        window.api = api
    }
}