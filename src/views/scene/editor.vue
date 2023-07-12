<template>
    <div
        class="editor fixed w-100% h-100% left-0 top-0"
        :class="{
            editorIsPlay: $store.store3d.toolsActive === 'play',
        }"
    >
        <n-three
            v-model:initialization-data="initializationData"
            :stats="initializationData.statsShow"
            :light="false"
            @load="load"
            class="bg-#d2d2d2"
            :near="0.5"
            ref="threeRef"
        ></n-three>
        <tool-3d></tool-3d>
        <layers-3d></layers-3d>
        <attribute-3d></attribute-3d>
        <div
            class="right-button-menu"
            :style="rbmStyle"
            v-if="showMenu"
            ref="rbmRef"
        >
            <div
                class="right-button-menu-item"
                v-for="(item, key) in menus"
                :key="key"
                @click="
                    typeof item.calllback === 'function'
                        ? item.calllback(item, $event)
                        : () => void 0
                "
            >
                {{ item.name }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import { BaseThreeClass } from 'naive-ui';
import { Object3D } from 'three';
import useStore3d from '@/store/modules/3d';
const thresInstance = $data.provideConfig().three;
const initializationData = use3DConfig();
const store = useStore3d();
const threeRef = ref();
const rbmRef = ref();
const showMenu = ref(false);
const { x, y } = useMouseInElement(threeRef);
const { isOutside } = useMouseInElement(rbmRef);
const rbmPos = ref({
    x: 0,
    y: 0,
});
const rbmStyle = computed(() => {
    return {
        left: `${rbmPos.value.x + 2}px`,
        top: `${rbmPos.value.y + 2}px`,
    };
});
const menusObject = ref() as Ref<Object3D>;
const menusMap = ref({
    objectRightButtonCallback: [
        {
            name: '删除',
            calllback() {
                showMenu.value = false;
                const id = parseName(menusObject.value.name as string).id;
                const index = store.layers.findIndex((e) => e.id === id);
                store.delLayer(index);
                thresInstance.value.scene.remove(menusObject.value as any);
            },
        },
    ],
});
const menusType = ref<typeof menusMap extends Ref<infer T> ? keyof T : never>();
const menus = computed(
    () => (menusMap.value as any)[menusType.value as any] || []
);

const load = async (three: BaseThreeClass) => {
    thresInstance.value = three;

    // 全局初始化
    use3DGlobalInit(three, {
        objectRightButtonCallback(object, event) {
            event.preventDefault();
            rbmPos.value.x = x.value;
            rbmPos.value.y = y.value;
            menusType.value = 'objectRightButtonCallback';
            menusObject.value = object;
            showMenu.value = true;
        },
    });
    // 绘制
    use3DDraw(three);
};
window.addEventListener('click', () => {
    if (isOutside.value) {
        showMenu.value = false;
    }
});
</script>

<style scoped lang="less">
.editor {
    .right-button-menu {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1000;
        box-shadow: 0px 0px 5px #000000;
        border-radius: 5px;
        background-color: #ffffff;
        overflow: hidden;
        .right-button-menu-item {
            padding: 5px 10px;
            cursor: pointer;
            &:hover {
                background-color: #478cf9;
                color: #ffffff;
            }
            & + .right-button-menu-item {
                border-top: 1px solid #d8d8d8;
            }
        }
    }
    &.editorIsPlay {
        .Layers {
            transform: translateX(-120%);
            opacity: 0;
        }
        .Attribute {
            transform: translateX(120%);
        }
    }
}
</style>
