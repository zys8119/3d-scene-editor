<template>
    <n-space>
        <SvgIcon name="svgs-qita" :size="20" />
        <n-permission has="add">
            <n-button type="primary">新增</n-button>
        </n-permission>
        <n-permission has="edit">
            <n-button type="success">编辑</n-button>
        </n-permission>
    </n-space>
</template>

<script lang="ts" setup>
window.$message.warning('this is test message');
setTimeout(() => window.$apis.test.index.xxx(), 1000);
</script>

<style scoped></style>
