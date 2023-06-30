<template>
    <div class="editor fixed w-100% h-100% left-0 top-0">
        <n-three
            v-model:initialization-data="initializationData"
            :stats="initializationData.statsShow"
            @load="load"
            class="bg-#d2d2d2"
            :near="0.5"
        ></n-three>
        <tool-3d></tool-3d>
        <layers-3d></layers-3d>
        <attribute-3d></attribute-3d>
    </div>
</template>

<script setup lang="ts">
import { BaseThreeClass } from 'naive-ui';
const initializationData = use3DConfig();
const load = async (three: BaseThreeClass) => {
    // 全局初始化
    use3DGlobalInit(three);
    // 绘制
    use3DDraw(three);
};
</script>

<style>
.editor {
}
</style>
