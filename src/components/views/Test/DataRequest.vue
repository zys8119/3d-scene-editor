<template>
    <div class="data-request">
        以下是动态获取到的数据，
        <el-button type="primary" :loading="loading" @click="() => init()">刷新</el-button>
        <el-button type="danger" :loading="loading" @click="() => init(true)">请求有点问题</el-button>
        <ul>
            <li v-for="item in data" :key="item.title">
                {{ item.title }}年 / <b>{{ item.count }}</b>
            </li>
        </ul>
        有 {{ requestsSize }} 个请求正在进行中
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
/**
 * 数据获取
 */
const data = ref<{
    title: string;
    count: number | string;
}[]>()
const init = async(error = false) => {
    try {
        const res = await window.api.v1.test[error ? 'getTestInfoError' : 'getTestInfo']()
        data.value = res.data.map(item => {
            return {
                title: item[0].value,
                count: item[1].value
            }
        })
    } catch (err) {
        console.log(err)
    }
}
init()
/**
 * 请求是否进行中
 */
const loading = computed(() => window.store.index.loading)
const requestsSize = computed(() => window.store.index.requests.size)
</script>

<style lang="less" scoped>
.data-request {
    ul {
        list-style-type:none;
        padding: 10px 20px;
        border: 1px solid #ccc;
        background-color: #fcfcfc;
        li {
            line-height: 24px;
            > b {
                color: orange;
            }
        }
    }
}
</style>