<template>
    <div
        class="AttrCardComponent"
        ref="el"
        @mouseup="mouseup"
        @mousedown="mousedown"
        @mousemove="mousemove"
    >
        <n-input
            v-if="config.type === 'input'"
            clearable
            v-bind="config.props"
            v-model:value="config.props.value"
        >
        </n-input>
        <n-input-number
            v-if="config.type === 'number'"
            clearable
            v-bind="config.props"
            v-model:value="config.props.value"
        >
        </n-input-number>
        <n-switch
            v-if="config.type === 'switch'"
            clearable
            v-bind="config.props"
            v-model:value="config.props.value"
        >
        </n-switch>
        <n-select
            v-if="config.type === 'select'"
            clearable
            :menu-props="{
                        class:'AttrCardComponent-n-select '
                  } as any"
            v-bind="config.props"
            v-model:value="config.props.value"
        >
        </n-select>
        <n-radio-group
            v-if="config.type === 'radio'"
            v-bind="config.props"
            v-model:value="config.props.value"
            class="attrs-n-radio-group w-100%"
        >
            <n-space
                :item-style="config.isflex ? { flex: 1 } : {}"
                class="w-100%"
            >
                <n-radio
                    v-for="song in config.props.options"
                    :key="song.value"
                    :value="song.value"
                >
                    <n-ellipsis class="w-100%">
                        <div class="flex justify-center items-center">
                            {{ song.label }}
                        </div>
                    </n-ellipsis>
                </n-radio>
            </n-space>
            <template #icon>asdas</template>
        </n-radio-group>
        <n-space v-if="config.type === 'color'" class="AttrCardComponentColor">
            <n-color-picker
                v-bind="config.props"
                v-model:value="config.props.value"
                class="w-30px h-30px"
                show-preview
                size="small"
            >
                <template #label></template>
            </n-color-picker>
            <n-input v-model:value="config.props.value"></n-input>
        </n-space>
        <n-space
            v-if="config.type === 'slider'"
            class="AttrCardComponentSlider"
        >
            <n-input-number
                @mousedown.stop="() => {}"
                v-model:value="config.props.value"
                size="small"
                :show-button="false"
            />
            <n-slider
                @mousedown.stop="() => {}"
                v-model:value="config.props.value"
                v-bind="config.props"
            />
        </n-space>
        <div
            class="cursorCss"
            v-if="config.cursorGj && isDown"
            :style="cursorCss"
        ></div>
    </div>
</template>
<script setup lang="ts">
import { Ref } from 'vue';
import { AttrsItemChildConfig } from '@/store/modules/3d/attrs';
import { get } from 'lodash';
const props = defineProps<{
    config: AttrsItemChildConfig;
}>();
const emits = defineEmits<{
    (e: 'uodate:config', v: AttrsItemChildConfig): void;
}>();
const config = computed<AttrsItemChildConfig>({
    get() {
        return props.config;
    },
    set(v: AttrsItemChildConfig) {
        emits('uodate:config', v);
    },
});
const el = ref() as Ref<HTMLDivElement>;
const isDown = ref(false);
const time = ref(-1);
const moveX = ref(0);
const moveXM = ref(0);
const { x, y, isOutside } = useMouseInElement(el);
const cursorCss = computed(() => {
    let left = (x.value + moveXM.value) % window.innerWidth;
    if (left <= 0) {
        left = window.innerWidth + left;
    }
    return {
        left: `${left}px`,
        top: `${y.value}px`,
    };
});
const mousedown = () => {
    if (!props.config.cursorGj) {
        return;
    }
    isDown.value = true;
    moveXM.value = 0;
    el.value.requestPointerLock();
    time.value = setTimeout(() => {
        document.exitPointerLock();
        isDown.value = false;
    }, 500);
};
const mouseup = (e: MouseEvent) => {
    if (!props.config.cursorGj) {
        return;
    }
    moveX.value = e.movementX;
    moveXM.value = 0;
    document.exitPointerLock();
};
window.addEventListener('mouseup', mouseup);
const mousemove = (e: MouseEvent) => {
    if (!props.config.cursorGj) {
        return;
    }
    try {
        clearInterval(time.value);
    } catch (e) {
        // err
    }
    if (isDown.value) {
        el.value.requestPointerLock();
        moveX.value += e.movementX;
        moveXM.value += e.movementX;
        const configProps: any = get(props.config, 'props', {});
        configProps.value = get(configProps, 'value', 0);
        configProps.value += e.movementX;
        time.value = setTimeout(() => {
            document.exitPointerLock();
            isDown.value = false;
        }, 500);
    }
};
watchEffect(() => {
    if (!isDown.value && isOutside.value) {
        document.exitPointerLock();
    }
});
</script>

<style scoped lang="less">
.AttrCardComponent {
    .cursorCss {
        position: fixed;
        z-index: 1000000000;
        width: 10px;
        height: 10px;
        background: #f00;
    }
}
</style>
