<template>
    <n-card class="footer-container"> Copyright © {{ base.title }} {{ new Date().getFullYear() }}</n-card>
</template>

<script lang="ts" setup>
import base from '@/config/base'
</script>

<style lang="less" scoped>
.footer-container {
    height: var(--footer-height);
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-top: 1px dashed var(--border-color);
}
</style>
