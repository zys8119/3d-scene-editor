<template>
    <div class="is-h5" :style="{ color: store.isH5 ? 'green' : 'red' }">
        评判标准 ≤ {{ store.isH5Max }} px，{{ store.isH5 ? '是' : '不是' }} H5 页面
    </div>
</template>

<script lang="ts" setup>
import useStore from '@/store/modules/main'
const store = useStore()
</script>

<style lang="less" scoped>
.is-h5 {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>