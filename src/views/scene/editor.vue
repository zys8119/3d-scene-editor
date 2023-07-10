<template>
    <div class="editor fixed w-100% h-100% left-0 top-0">
        <n-three
            v-model:initialization-data="initializationData"
            :stats="initializationData.statsShow"
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
const initializationData = use3DConfig();
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
const menusMap = ref({
    objectRightButtonCallback: [
        {
            name: '测试菜单',
            value: 'asdas',
            calllback() {
                showMenu.value = false;
            },
        },
    ],
});
const menusType = ref<typeof menusMap extends Ref<infer T> ? keyof T : never>();
const menus = computed(() => menusMap.value[menusType.value as any] || []);
const load = async (three: BaseThreeClass) => {
    // 全局初始化
    use3DGlobalInit(three, {
        objectRightButtonCallback(object, event) {
            event.preventDefault();
            rbmPos.value.x = x.value;
            rbmPos.value.y = y.value;
            menusType.value = 'objectRightButtonCallback';
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
}
</style>
