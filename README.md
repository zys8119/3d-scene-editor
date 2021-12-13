## 快速开始

推荐使用  `yarn` 以获得更好的依赖安装体验

```bash
# 使用 yarn
yarn
yarn dev
# 使用 npm
npm i
npm run dev
```

每次运行  `dev`  前可以先运行以下命令以获得最新版本的 request 插件

```bash
# 使用 yarn
yarn upgrade wp-request
# 使用 npm
npm i wp-request
```
## 注意事项

#### Build 和 git commit

每次运行  `build`  命令或是提交一个 git commit 前，都会进行代码检查，等价于

```bash
npm run tsc && npm run lint:fix
git add .
```

请注意代码规范以及不要滥用 any 类型

#### 全局ts

在 tsconfig.json 的配置中，目前 js 文件被禁止引入，所以建立脚本文件请以 `ts` `tsx` 结尾，建立 `vue` 文件时，请在 script 中添加 lang="ts"

```html
<script lang="ts" setup>
</script>
```

