import v1 from './v1'

const api = {
    v1
}

import { App } from 'vue'

declare global {
    interface Window {
        api: typeof api
    }
}

declare module '@vue/runtime-core'  {
    export interface ComponentCustomProperties {
        readonly api: typeof api;
    }
}

export default {
    install(app: App<Element>) {
        app.config.globalProperties.api = api
        window.api = api
    }
}