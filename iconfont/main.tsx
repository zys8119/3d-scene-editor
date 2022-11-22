import {createApp} from 'vue'
import './style.scss'
import 'wisdom-plus/theme-chalk/src/index.scss'
import route from './src/router'
import App from './src/App'
createApp(App)
    .use(route)
    .mount('#app')
