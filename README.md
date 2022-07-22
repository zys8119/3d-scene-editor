## wisdom-plus地址如下
<a href="https://wisdom-plus.zhijiasoft.com/static/" target="_block">文档地址</a>

## 关于基于本框架进行开发的 Git 相关操作

首先在远端点击 Fork ，选择指定的 namespace 进行 Fork，然后将其 clone 到本地，即可开始开发。在开发的过程，如果需要拉取上游变动，请执行以下操作。

#### 添加上游仓库

```bash
git remote add upstream https://gitlab.zhijiasoft.com/xuyi/vue3-framework.git
```

添加完成之后就不需要再次添加了，以后每次只要运行以下操作

#### 拉取上游变动

```bash
git fetch upstream
```

#### 合并，使用 merge 或者 rebase

```bash
git rebase upstream/milestone-1
# git merge upstream/milestone-1
# 如果使用 merge ，将会新增一条 merge 相关的 commit
```

#### 更新远端仓库

```bash
git push origin master
```

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

