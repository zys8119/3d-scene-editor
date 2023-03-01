import App from './app.vue';
const app = createApp(App);

/**
 * 请求初始化
 */
import request from 'wp-request';
import config from './config/config';
import configHooks from './config/config-hooks';
app.use(request, {
    ...config.request,
    ...configHooks.request,
});

import api from '@/api';
app.use(api);

import '@/router/permission';
import router from './router';
app.use(router);

import stores from '@/store';
app.use(stores);

import '@/assets/less/index.less';

import './global';

import 'virtual:svg-icons-register';

app.mount('#app');
