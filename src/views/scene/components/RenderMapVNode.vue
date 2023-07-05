<template>
    <div class="RenderMapVNode w-100px h-100px overflow-hidden b-rd-10px">
        <n-image
            v-if="typeof src === 'string'"
            class="w-100% h-100%"
            width="100"
            height="100"
            object-fit="cover"
            :src="src"
        />
    </div>
</template>

<script setup lang="ts">
import { get } from 'lodash';
const src = computed(() => {
    return get(window.store, 'store3d.layerActiveGetters.Material.map');
});
</script>

<style scoped lang="less">
.RenderMapVNode {
    border: 1px solid #9d9ea0;
}
</style>
