<template>
    <n-space>
        <n-input v-model:value="a"></n-input>
        <SvgIcon name="svgs-qita" :size="20" />
        <n-button type="primary" @click="$router.push('/demo/test1/test3')"
            >跳转内页</n-button
        >
        <n-permission has="add">
            <n-button type="primary">新增</n-button>
        </n-permission>
        <n-permission has="edit">
            <n-button type="success">编辑</n-button>
        </n-permission>
        <van-button type="primary">主要按钮</van-button>
        <div class="h-1000px w-100vw">asdfasd</div>
    </n-space>
</template>

<script lang="ts" setup>
const a = ref('');
</script>

<style scoped></style>
