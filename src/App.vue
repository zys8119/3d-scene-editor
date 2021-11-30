<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import test from './test'
import useStore from './store'

import { ElMessage } from 'element-plus'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'App',
    components: {
        HelloWorld,
        test
    },
    setup() {
        const store = useStore()

        window.store = { index: store }
        const promise = () => new Promise((resolve) => {
            setTimeout(() => {
                ElMessage('请求1结束')
                resolve({ code: 200, data: 'ok' })
            }, 2000)
        })

        const promise2 = () => new Promise((resolve, reject) => {
            setTimeout(() => {
                ElMessage('请求2结束')
                resolve({ code: 200, data: 'ok' })
            }, 3000)
        })

        const promise3 = () => new Promise((resolve, reject) => {
            setTimeout(() => {
                ElMessage('请求3结束')
                resolve({ code: 200, data: 'ok' })
            }, 5000)
        })

        const promise4 = () => new Promise((resolve, reject) => {
            setTimeout(() => {
                ElMessage('请求4结束')
                resolve({ code: 200, data: 'ok' })
            }, 10000)
        })

        const startLoading = () => {
            window.common.requestAll([promise(), promise2(), promise3(), promise4()])
                .then(res => {
                    ElMessage(`返回了${res.length}个内容`)
                })
                .catch(err => {
                    ElMessage('有其中一个请求出错了')
                })
        }

        return {
            store,
            startLoading
        }
    },
    // created() {
    //     this.$store = Object.assign(window.store)
    // }
})
</script>

<template>
    <test />
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    {{ store.name }}
    {{ store.requests }}
    <!-- {{ $store.index.requests }} -->
    <el-button :loading="store.loading" @click="startLoading">点我看看多个请求会有什么效果</el-button>
    <router-view />
</template>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
