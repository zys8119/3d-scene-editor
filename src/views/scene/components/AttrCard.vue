<template>
    <div class="attr-card-3d">
        <div class="text-12px font-bold color-#cacbcb" v-if="title">
            {{ title }}
        </div>
        <div
            class="attr-card-3d-value flex justify-center items-center gap-15px"
            v-for="(item, key) in list"
            :key="key"
        >
            <div class="attr-card-3d-value__label text-12px w-60px">
                <n-ellipsis class="w-100%">{{ item.label }}</n-ellipsis>
            </div>
            <div class="value flex-1">
                <attr-card-component-3d
                    :config="item.config"
                    class="w-100%"
                ></attr-card-component-3d>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { AttrsItemChild } from '@/store/modules/3d/attrs';
defineProps<{
    title: string;
    list: Array<AttrsItemChild>;
}>();
</script>

<style scoped lang="less">
.attr-card-3d {
    padding: 15px;
    & + .attr-card-3d {
        border-top: 1px solid #1c1d20;
    }
    .label {
        color: #696a6c;
    }
    display: flex;
    flex-direction: column;
    gap: 4px;
    .attr-card-3d-value {
    }
}
</style>
