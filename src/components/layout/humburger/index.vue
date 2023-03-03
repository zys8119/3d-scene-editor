<template>
    <span
        class="fold-wrapper iconfont"
        :class="[
            appConfig.isCollapse ? 'fold-close-status' : 'fold-open-status',
        ]"
        @click="toggleFold"
    >
        <SvgIcon name="svgs-shousuo" :size="20" />
    </span>
</template>

<script lang="ts" setup>
import SvgIcon from '@/components/layout/svg-icon/index.vue';
import useAppConfigStore from '@/store/modules/app-config';

const appConfig = useAppConfigStore();

function toggleFold() {
    appConfig.toggleCollapse(!appConfig.isCollapse);
}
</script>

<style lang="less" scoped>
.fold-open-status {
    transform: rotate(180deg);
}

.fold-close-status {
    transform: rotate(0);
}

.fold-wrapper {
    box-sizing: border-box;
    display: inline-block;
    line-height: var(--logo-height);
    text-align: center;
    padding: 10px;
    font-size: 22px;
    transition: transform var(--transition-time);
}

.fold-wrapper:hover {
    color: #999999;
    cursor: pointer;
}
</style>
