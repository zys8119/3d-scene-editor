<template>
    <div
        class="RenderMapVNode w-40px h-40px overflow-hidden b-rd-10px relative"
    >
        <n-image
            v-if="typeof src === 'string'"
            class="w-100% h-100%"
            width="40"
            height="40"
            object-fit="cover"
            :src="src"
        />
        <span
            v-if="typeof src === 'string'"
            @click.stop="delMap"
            class="absolute top-2px right-2px w-15px h-15px b-rd-10px overflow-hidden bg-#fff flex justify-center items-center opacity-10% hover:opacity-100% cursor-pointer"
        >
            <svg
                t="1688545193928"
                class="icon w-80% h-80%"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4210"
                width="200"
                height="200"
            >
                <path
                    d="M568.96 512.064l326.336-326.336a39.232 39.232 0 1 0-55.552-55.552L513.408 456.512l-326.4-326.336a39.232 39.232 0 1 0-55.552 55.552l326.4 326.336L131.584 838.4a39.232 39.232 0 1 0 55.552 55.552l326.336-326.336 326.336 326.336c15.36 15.232 40.192 15.232 55.552 0a39.36 39.36 0 0 0 0-55.552l-326.4-326.336z"
                    p-id="4211"
                ></path>
            </svg>
        </span>
    </div>
</template>

<script setup lang="ts">
import { get, set } from 'lodash';
const props = defineProps<{
    keyName: string;
}>();
const src = computed(() => {
    return get(
        window.store,
        `store3d.layerActiveGetters.Material.${props.keyName}`
    );
});
const delMap = () => {
    if (window.store.store3d.layerActiveGetters)
        set(
            window.store.store3d,
            `layerActiveGetters.Material.${props.keyName}`,
            null
        );
};
</script>

<style scoped lang="less">
.RenderMapVNode {
    border: 1px solid #9d9ea0;
}
</style>
