<template>
    <div class="Layers flex flex-col">
        <n-space justify="space-between" class="p-10px">
            <div class="text-18px">sceneTitle</div>
            <div>icon</div>
        </n-space>
        <div class="p-10px b-t-solid b-t-1px b-t-#5c5c5e">
            <n-input
                placeholder="Search"
                clearable
                v-model:value="srarch"
            ></n-input>
        </div>
        <div class="layers-menus layers-menus-line flex-1">
            <VueDraggable v-model="$store.store3d.layers" :animation="150">
                <n-space
                    class="layers-menus-item"
                    align="center"
                    v-for="(item, key) in layers"
                    :key="key"
                    :class="{
                        active:
                            item.id === store.layerActiveId ||
                            item.id === store.layerActiveIdCache,
                    }"
                    @mouseenter="$store.store3d.setLayerActiveId(item.id)"
                    @mouseleave="$store.store3d.setLayerActiveId(null)"
                >
                    <div
                        v-html="item.tool.icon"
                        class="w-20px h-20px flex justify-center items-center"
                        @click="layerClick(item)"
                    ></div>
                    <layers-label-3d
                        class="w-100% min-h-19px"
                        :item="item"
                        @click="layerClick(item)"
                    ></layers-label-3d>
                    <div class="flex justify-end">icon</div>
                </n-space>
            </VueDraggable>
            <div
                v-if="layers.length === 0"
                class="flex text-12px justify-center"
            >
                暂无数据！
            </div>
        </div>
        <div class="layers-menus b-t-solid b-t-1px b-t-#5c5c5e">
            <n-space
                class="layers-menus-item"
                align="center"
                v-for="(item, key) in layersFooter"
                :key="key"
            >
                <div
                    v-if="item.icon"
                    v-html="item.icon"
                    class="w-20px h-20px flex justify-center items-center"
                ></div>
                <div>{{ item.title }}</div>
            </n-space>
            <div
                v-if="layersFooter.length === 0"
                class="flex text-12px justify-center"
            >
                暂无数据！
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import useStore3d, { LayersGettersItem } from '@/store/modules/3d';
import { VueDraggable } from 'vue-draggable-plus';
const config = use3DConfig();
const top = computed(() => (config.value.statsShow ? '65px' : '15px'));
const store = useStore3d();
const srarch = ref('');
const srarchReg = computed(() => new RegExp(srarch.value));
const layers = computed(() => {
    return store.layersGetters.filter(
        (e) =>
            srarchReg.value.test(e.label) ||
            srarchReg.value.test(e.tool.type) ||
            srarchReg.value.test(e.tool.title)
    );
});
const layersFooter = ref([
    { title: 'Library' },
    { title: 'Import' },
    { title: 'Help & Feedback' },
]);
const layerClick = (layer: LayersGettersItem) => {
    store.setLayerActiveId(layer.id, true);
    window.$draw3dSceneEditorObject3DClick = true;
    setTimeout(() => {
        window.$draw3dSceneEditorObject3DClick = false;
    }, 500);
};
</script>

<style scoped lang="less">
.Layers {
    position: absolute;
    left: 15px;
    top: v-bind(top);
    background: #111316;
    width: 230px;
    height: calc((100% - v-bind(top) * 2));
    border-radius: 10px;
    color: #9d9ea0;
    z-index: 1;
    overflow: hidden;
    transition: all ease-in-out 300ms;
    .layers-menus {
        &-item {
            padding: 10px 15px;
            font-size: 12px;
            color: #9d9ea0;
            position: relative;
            :deep(svg) {
                fill: currentColor;
            }
            &.active {
                background: #3b93fc;
                color: #ffffff;
                cursor: pointer;
            }
            &:hover {
                .active;
            }
            & > :deep(div) {
                &:nth-child(3) {
                    flex: 1;
                }
            }
        }
        &-line {
            overflow-x: hidden;
            &::-webkit-scrollbar {
                width: 5px;
            }
            &::-webkit-scrollbar-track {
                background: #111316;
            }
            &::-webkit-scrollbar-thumb {
                background: #888;
                border-radius: 5px;
            }

            .layers-menus-item {
                padding-left: 30px;
                &:before {
                    content: '';
                    position: absolute;
                    left: 15px;
                    top: 0;
                    width: 1px;
                    height: 100%;
                    background: #27272b;
                }
                &:after {
                    content: '';
                    position: absolute;
                    left: 15px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 13px;
                    height: 1px;
                    background: #27272b;
                }
                &:last-child {
                    &:before {
                        height: 50%;
                    }
                }
                &.active {
                    &:before,
                    &:after {
                        background: #ffffff;
                    }
                }
                &:hover {
                    //.active;
                    color: #3b93fc;
                    background: transparent;
                    &:before,
                    &:after {
                        background: #3b93fc;
                    }
                }
                & > :deep(div) {
                    &:nth-child(2) {
                        flex: 1;
                        overflow: hidden;
                    }
                    &:last-child {
                        flex: initial;
                    }
                }
            }
        }
    }
}
</style>
