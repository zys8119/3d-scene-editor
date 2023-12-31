import App from './app.vue';
const app = createApp(App);

import SvgIcon from '@/components/layout/svg-icon/index.vue';
app.component('SvgIcon', SvgIcon);

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

import errorHandle from './error';
app.use(errorHandle, {
    errorHandle: configHooks.error.handle,
});

import api from '@/api';
app.use(api);

import '@/router/permission';
import router from './router';
app.use(router);

import stores from '@/store';
app.use(stores);

import 'virtual:uno.css';
import '@/assets/less/index.less';

import './global';

import 'virtual:svg-icons-register';

app.mount('#app');
