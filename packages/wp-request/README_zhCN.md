## 快速开始

```javascript
/**
** main.ts
**/
import { createApp } from 'vue'
const app = createApp(App)

import request from 'wp-request'
import useStore from '@/store' // require a pinia store

app.use(request, {
  useStore
})

import api from '@/api'
app.use(api)

import { createPinia } from 'pinia'
app.use(createPinia())
app.mount('#app')

/**
** api/main.ts
**/
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
```

## 如何在 Vue 单文件组件中使用

方式一：直接导入，适合于 options api 或者 composition api。

```javascript
import request, { requestAll, download } from '@/api';
request({
    url: 'http://exp.com',
    method: 'GET',
});
```

方式二：window.common，适合于 options api 或者 composition api。

```javascript
window.common.axios({
    url: 'http://exp.com',
    method: 'GET',
});
```

方式三: this.axios，仅适合于 options api 。

```javascript
import { defineComponent } from 'vue';
export default defineComponent({
    created() {
        this.axios({
            url: 'http://exp.com',
            method: 'GET',
        });
    },
});
```

## 如果通过 api 在 Vue 单文件组件中使用

方式一：window.api，适合于 options api 或者 composition api。

```javascript
window.api.v1.sth();
```

方式二：this.api，仅适合于 options api 。

```javascript
this.api.v1.sth();
```

## 配合 Typescript 使用 （泛型控制返回值）

```typescript
window.common
    .axios<{
        name: string;
    }>({
        url: 'http://exp.com',
    })
    .then((res) => {
        // res.data is as { name: string }
        const data = res.data;
    });
```

## 类型 Type

```typescript
declare type request = <T = any>(
    config: AxiosRequestConfig,
    setLoading: boolean
) => Promise<ResponseType<T>>;
// Store 要求三项内容
interface Store {
    token: string;
    loading: boolean;
    requests: Set<Promise<any>>;
}
// Options 选项，初始化时均为可选
interface Options {
    baseURL: string;
    useStore: null | (() => Store);
    successCode: number[];
}
// ResponseType 用于定义类型
interface ResponseType<T = any> {
    code: number;
    errorMsg?: string;
    data: T;
    success?: boolean;
}
```
