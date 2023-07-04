<template>
    <n-input
        ref="el"
        class="n-input"
        @blur="show = false"
        v-if="show"
        v-model:value="item.label"
        placeholder="请输入名称"
    ></n-input>
    <div v-else @click="show = true">
        <n-ellipsis class="w-100%">{{ item.label }}</n-ellipsis>
    </div>
</template>

<script setup lang="ts">
import { Layer } from '@/store/modules/3d';

const show = ref(false);
const props = defineProps<{
    item: Layer;
}>();
const emits = defineEmits<{
    (e: 'update:item', v: any): void;
}>();
const item = useVModel(props, 'item', emits);
const el = ref();
const { isOutside } = useMouseInElement(el);
window.addEventListener('click', () => {
    if (isOutside.value) {
        show.value = false;
    }
});
</script>

<style scoped lang="less">
.n-input {
    --editor-bg: #fff;
    --editor-color: #000;
}
</style>
