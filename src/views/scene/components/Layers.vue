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
                    <div class="flex justify-end items-center">
                        <div
                            class="w-20px h-20px"
                            v-if="item.visible"
                            @click="item.visible = false"
                        >
                            <svg
                                t="1689025401856"
                                class="icon"
                                viewBox="0 0 1024 1024"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                p-id="3310"
                                width="200"
                                height="200"
                            >
                                <path
                                    d="M977.824 454.016C826.432 280.288 672.512 192 516.128 192c-156.384 0-310.304 88.288-461.696 262.016a112 112 0 0 0-1.632 145.248c138.24 165.984 293.088 250.24 463.328 250.24s325.088-84.256 463.328-250.24a112 112 0 0 0-1.632-145.248z m-47.552 104.32c-126.848 152.32-264.48 227.2-414.144 227.2s-287.296-74.88-414.144-227.2a48 48 0 0 1 0.704-62.24C243.008 335.072 380.8 256 516.128 256s273.152 79.072 413.44 240.064c15.488 17.792 15.776 44.16 0.704 62.272z"
                                    p-id="3311"
                                ></path>
                                <path
                                    d="M512 288a224 224 0 1 0 0 448 224 224 0 0 0 0-448z m-64 224a64 64 0 1 1 0.032-128.032A64 64 0 0 1 448 512z"
                                    p-id="3312"
                                ></path>
                            </svg>
                        </div>
                        <div
                            class="w-20px h-20px"
                            v-else
                            @click="item.visible = true"
                        >
                            <svg
                                t="1689025640277"
                                class="icon"
                                viewBox="0 0 1024 1024"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                p-id="4291"
                                width="200"
                                height="200"
                            >
                                <path
                                    d="M857.595387 468.18018c-13.893189-20.166342-27.195964-40.812396-42.436036-59.945513-122.344937-153.895207-315.392-206.349838-495.523747-102.363099-12.730811 7.38018-20.424649 4.90782-29.114811-5.055424-18.321297-21.015063-37.177658-41.587315-55.738811-62.233369L175.279279 295.539315 697.13182 811.81982l61.384648-52.122523-73.525045-60.037765c11.236324-8.468757 16.937514-13.727135 23.487424-17.546379 64.576577-37.602018 110.850306-92.399856 149.024288-155.389694 12.288-20.277045 13.450378-39.133405 0.092252-58.543279zM627.315315 634.271135l-57.546955-64.004612c42.620541-53.026595 46.624288-99.982991 9.225226-141.053694s-81.956901-38.745946-150.924685 8.911567c-16.125694-16.605405-33.59827-32.509694-48.174126-50.79409-3.69009-4.649514-1.309982-19.428324 3.542486-24.815856 51.882667-57.620757 152.253117-69.61355 221.626811-27.675675C716.191135 402.21982 728.202378 557.904721 627.315315 634.271135zM176.330955 543.421117c45.240505 71.68 103.599279 126.606991 181.644685 160.039207 38.173982 16.36555 77.049081 30.037333 121.348612 29.207063L183.932541 439.655784c-32.435892 31.255063-32.509694 64.29982-7.601586 103.765333z"
                                    p-id="4292"
                                ></path>
                            </svg>
                        </div>
                    </div>
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
    svg {
        width: 100%;
        height: 100%;
        fill: currentColor;
        path {
            fill: currentColor;
        }
    }
}
</style>
