import App from './App.vue'
const app = createApp(App)

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
app.use(validate, configHooks.validate)

import errorHandle from './error'
app.use(errorHandle, {
    errorHandler: configHooks.error.handle
})

import api from '@/api'
app.use(api)

import '@/router/permission'

import router from './router'
app.use(router)

import stores from '@/store'
app.use(stores)

// 全局引入 WisdomPlus
// import WisdomPlus from 'wisdom-plus'
// app.use(WisdomPlus)
import 'wisdom-plus/dist/index.css'
import '@/assets/less/index.less'

import global from './global'
app.use(global)

app.mount('#app')