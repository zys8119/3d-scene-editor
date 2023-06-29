<template>
    <div class="editor">
        <n-three
            v-model:initialization-data="initializationData"
            :gui="true"
            :stats="true"
            @gui="gui"
            @load="load"
            class="bg-#d2d2d2"
        ></n-three>
    </div>
</template>

<script setup lang="ts">
import { BaseThreeClass } from 'naive-ui';
const initializationData = use3DConfig();
const load = async (three: BaseThreeClass) => {
    const { THREE } = three;
    // 全局初始化
    use3DGlobalInit(three);
    const box = new THREE.BoxGeometry(100, 100, 100);
    const material = new THREE.MeshLambertMaterial({
        map: three.downloadImagesTexture(
            'https://t7.baidu.com/it/u=4036010509,3445021118&fm=193&f=GIF',
            'aa'
        ),
        transparent: true,
    });
    const mesh = new THREE.Mesh(box, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    three.scene.add(mesh);
};
const gui = use3DGui();
</script>

<style scoped>
.editor {
}
</style>
