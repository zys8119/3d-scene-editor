import v1 from './v1'

const api = {
    v1
}

import { App } from 'vue'

export function mount(app: App<Element>) {
    app.config.globalProperties.api = api
    window.api = api
}

declare global {
    interface Window {
        api: typeof api
    }
}

declare module '@vue/runtime-core'  {
    export interface ComponentCustomProperties {
        api: typeof api;
    }
}

export default api