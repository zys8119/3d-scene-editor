import App from './App.vue'

const app = createApp(App)

import global from './global'
app.use(global)

/**
 * 请求初始化
 */
import request from 'wp-request'
import config from './config/config'
import configHooks from './config/configHooks'
app.use(request, {
    ...config.request,
    ...configHooks.request
})

import errorHandle from './error'
app.use(errorHandle, {
    errorHandler: configHooks.error.handle
})

import api from '@/api'
app.use(api)

import '@/router/permission'

import router from './router'
app.use(router)

app.use(createPinia())
/**
 * store 一定要在 createPinia 之后
 */
import stores from '@/store'
app.use(stores)

import '@/assets/less/index.less'

// 全局引入 WisdomPlus
// import WisdomPlus from 'wisdom-plus'
// app.use(WisdomPlus)
// import 'wisdom-plus/dist/index.css'

app.mount('#app')
