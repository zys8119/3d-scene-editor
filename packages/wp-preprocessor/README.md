#### 快速开始

安装

```bash
yarn add wp-preprocessor
```

#### Usage

```ts
import { preprocessor } from 'wp-preprocessor'

// 自动获取 ID
const testcase = {
    ids: [{ id: 1 }, { id: 2 }]
}
preprocessor(testcase, { ids: 'ids' }) // => { ids: '1, 2' }

// 自动获取文件 ID
const testcase2 = {
    ids: [{ status: 1, id: 1 }, { id: 2 }]
}
preprocessor(testcase2, { ids: 'fileIds' }) // => { ids: '2' }

// 自动解构数组
const testcase3 = {
    time: ['now', 'ago']
}
preprocessor(testcase3, {
    time: ['now', 'ago']
})) // => { now: 'now', ago: 'ago' }

// 自动构建数组
const testcase4 = {
    time: 0
}
preprocessor(testcase4, {
    time: 'array'
})) // => { time: [0] }
```
