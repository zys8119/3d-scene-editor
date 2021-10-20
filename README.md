# vue3的基础框架仓库

> 基于vite构建的【vue+element-plus】vue3 ts基础框架

## 使用必读

* 维护业务层的组员需要关注的目录

## 目录说明

```
|- src ------//主入口
    |- api ------//全局api目录
        |- api.ts ------//全局api模块
        |- index.ts ------//全局api插件及api代理
    |- assets ------//全局资源目录
    |- data ------//全局静态数据目录
    |- directive ------//全局指令目录
    |- router ------//全局路由目录
    |- store ------//全局vuex相关目录
        |- plug ------//插件
        |- request ------//全局请求封装
        |- airforce.ts ------//airforce
        |- airforceStateInit.ts ------//airforce初始化数据
        |- index.ts ------//vuex主入口
    |- ui ------//全局ui库
        |- package ------//ui包
            |- data ------//ui数据
            |- images ------//ui资源
            |- js ------//ui资源
            |- UiTypes ------//ui类型
            |- index.ts ------//ui映射
            |- ui.ts ------// ui接口文档说明
        |- ContentTable.ts ------// 表格混录
        |- index.ts ------// ui插件
        |- Interface.ts ------// ui接口
    |- utils ------//全局工具库函数
        |- index.ts ------//工具函数
        |- Interface.ts ------//工具接口
    |- view ------// 业务视图文件目录
        |- Alert ----// 页面弹框
        |- components ----// 页面组件目录
        |- ***dirName*** ----// 页面模块目录
            - Alert ----// 页面弹框
            |- components ----// 页面组件目录
            |- ***dirName*** ----// 页面模块目录
                |- ...
            |- **.vue ----// 具体页面
            |- ...
        |- **.vue ----// 具体页面
        |- ...
    |- App.vue ------// app主文件
|- ViteCconfig ------//Vite业务配置
    |- plug ------//插件
        |- lessPlug.ts ------//less插件，实现vue文件lees全局变量注入插件
|- .gitignore ------//git忽略
|- declare.ts ------//全局声明
|- favicon.svg ------//favicon
|- index.html ------//主页面
|- main.ts ------//主入口
|- package.json ------// 项目配置信息
|- package-lock.json ------// 本地依赖映射，默认忽略，便于同步最新代码
|- README.md ------// 项目描述文档
|- tsconfig.json ------// typescript 编译配置
|- vite.config.ts ------// vite相关配置
```
## 参考文档

[vite](https://v3.cn.vuejs.org/)

[vue](https://v3.cn.vuejs.org/)

[element-plus](https://element-plus.gitee.io/zh-CN/)

[vuex](https://next.vuex.vuejs.org/)

[vue-router](https://next.router.vuejs.org/zh/)

[mockjs](http://mockjs.com/)

[axios](http://www.axios-js.com/)

## 技术支持