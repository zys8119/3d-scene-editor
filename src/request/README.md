Quick Start
----

```javascript
/**
** main.ts
**/
import { createApp } from 'vue'
const app = createApp(App)

import { mount as requestMount } from '@/request'
import useStore from '@/store' // require a pinia store

requestMount(app, {
    useStore
})

import { mount as apiMount } from '@/api'
apiMount(app)

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
        readonly api: typeof api;
    }
}

export default api
```

How to Use in Vue SFC
----

Way 1: Import directly, fit to options api and composition api.

```javascript
import request, { requestAll, download } from '@/api'
request({
	url: 'http://exp.com',
  method: 'GET'
})
```

Way 2: window.common, fit to options api and composition api.

```javascript
window.common.axios({
	url: 'http://exp.com',
  method: 'GET'
})
```

Way 3: this.axios, fit to options api only.

```javascript
import { defineComponent } from 'vue'
export default defineComponent({
  created(){
    this.axios({
      url: 'http://exp.com',
      method: 'GET'
    })
  }
})
```

How to Use in Vue SFC by API
----

Way 1: window.api, fit to options api and composition api.

```javascript
window.api.v1.sth()
```

Way 2: this.api, fit to options api only.

```javascript
this.api.v1.sth()
```

How to Use with Typescript
----

```typescript
window.common.axios<{
  name: string
}>({
  url: 'http://exp.com'
})
	.then(res => {
  	// res.data is as { name: string }
		const data = res.data
  })
```

Type
----

```typescript
declare type request = <T = any>(config: AxiosRequestConfig, setLoading: boolean) => Promise<ResponseType<T>>
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

