<template>
    <div class="logo-wrapper">
        <img v-if="showLogo" class="logo-img" src="@/assets/images/logo.png" />
        <div
            v-if="showTitle"
            :class="[
                !appConfig.isCollapse || alwaysShow
                    ? 'show-title'
                    : 'close-title',
            ]"
        >
            <span class="logo-title">{{ base.title }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import useAppConfigStore from '@/store/modules/app-config';
import base from '@/config/base';

const props = withDefaults(
    defineProps<{
        showTitle?: boolean;
        showLogo?: boolean;
        alwaysShow?: boolean;
    }>(),
    {
        showTitle: true,
        showLogo: true,
        alwaysShow: false,
    }
);
const appConfig = useAppConfigStore();
</script>

<style lang="less" scoped>
.logo-wrapper {
    height: var(--logo-height);
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px dashed var(--border-color);

    .logo-img {
        width: 30px;
        margin-right: 5px;
    }

    .logo-title {
        font-weight: bold;
    }

    .show-title {
        transform: scale(1);
        width: auto;
        transition: transform 0.2s ease-in;
    }

    .close-title {
        transform: scale(0);
        width: 0;
    }
}
</style>
