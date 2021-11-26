import v1 from './v1'

const api = {
    v1
}

declare global {
    interface Window {
        api: typeof api
    }
}

window.api = api

export default api