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
import utils from 'wp-utils';

utils.utils.a();
</script>

<style scoped></style>
