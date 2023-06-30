<template>
    <div class="Layers flex flex-col">
        <n-space justify="space-between" class="p-10px">
            <div class="text-18px">title</div>
            <div>icon</div>
        </n-space>
        <div class="p-10px b-t-solid b-t-1px b-t-#5c5c5e">
            <n-input
                placeholder="Search"
                clearable
                v-model:value="srarch"
            ></n-input>
        </div>
        <div class="layers-menus flex-1">
            <n-space
                class="layers-menus-item"
                v-for="(item, key) in layers"
                :key="key"
            >
                <div
                    v-html="item.tool.icon"
                    class="w-20px h-20px flex justify-center items-center"
                ></div>
                <div>{{ item.label }}</div>
                <div class="flex justify-end">icon</div>
            </n-space>
            <div
                v-if="layers.length === 0"
                class="flex text-12px justify-center"
            >
                暂无数据！
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import useStore3d from '@/store/modules/3d';

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
</script>

<style scoped lang="less">
.Layers {
    position: absolute;
    left: 15px;
    top: 65px;
    background: #111316;
    width: 230px;
    height: calc((100% - 65px * 2));
    border-radius: 10px;
    color: #9d9ea0;
    z-index: 1;
    .layers-menus {
        &-item {
            padding: 10px 15px;
            font-size: 12px;
            color: #9d9ea0;
            padding-left: 30px;
            position: relative;
            :deep(svg) {
                fill: currentColor;
            }
            &:hover {
                background: #3b93fc;
                color: #ffffff;
                cursor: pointer;
            }
            & > :deep(div) {
                &:nth-child(3) {
                    flex: 1;
                }
            }
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
        }
    }
}
</style>
