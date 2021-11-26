import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import router from "./router"
app.use(router)

router.beforeEach((to, from, next) => {
    console.log('路由')
    next()
})

import { createPinia } from 'pinia'
app.use(createPinia())

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

app.use(ElementPlus)
app.mount('#app')
