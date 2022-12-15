<template>
    <div class="action-items-wrapper">
        icon
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
.action-items-wrapper {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 1;

    .action-item {
        min-width: 40px;
        display: flex;
        align-items: center;

        &:hover {
            cursor: pointer;
            color: var(--primary-color-hover);
        }
    }

    .badge-action-item {
        cursor: pointer;
        margin-right: 30px;
    }
}
</style>
