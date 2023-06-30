<template>
    <div class="Tool">
        <n-space class="ToolBox">
            <n-space
                class="Tool-cols"
                v-for="(cols, key) in $store.store3d.tools"
                :key="key"
            >
                <div
                    class="ToolIcon"
                    v-for="(item, kk) in cols.children"
                    :key="kk"
                    :class="{
                        active: $store.store3d.toolsActive === item.type,
                    }"
                    @click="$store.store3d.toolsActive = item.type"
                    v-html="item.icon"
                ></div>
            </n-space>
        </n-space>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.Tool {
    position: absolute;
    left: 50%;
    top: 15px;
    transform: translateX(-50%);
    background-color: #1c1d20;
    color: #646567;
    z-index: 1;
    padding: 5px;
    border-radius: 10px;
    .ToolBox {
        & > :deep(:has(.Tool-cols)) {
            & + :has(.Tool-cols) {
                position: relative;
                &:before {
                    content: '';
                    position: absolute;
                    left: -8px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 4px;
                    height: 20px;
                    border-radius: 3px;
                    background: tint(#27282b, 5%);
                }
            }
        }
    }
    .ToolIcon {
        display: flex;
        width: 30px;
        height: 30px;
        justify-content: center;
        align-items: center;
        :deep(svg) {
            fill: currentColor;
            width: 80%;
            height: 80%;
        }
        &.active {
            background: #3880fc;
            color: #ffffff;
            border-radius: 5px;
            cursor: pointer;
        }
        &:hover {
            .active;
        }
    }
}
</style>
