<template>
    <div
        class="AttrCardComponent"
        :class="{
            'p-l-15px': isCursorGj,
        }"
        ref="el"
        @mouseup="mouseup"
        @mousedown="mousedown"
        @mousemove="mousemove"
    >
        <div @mousedown.stop="() => {}">
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
                    :item-style="config.isFlex ? { flex: 1 } : {}"
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
            </n-radio-group>
            <n-space
                v-if="config.type === 'color'"
                class="AttrCardComponentColor"
            >
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
                    v-model:value="config.props.value"
                    size="small"
                    :show-button="false"
                />
                <n-slider
                    v-model:value="config.props.value"
                    v-bind="config.props"
                />
            </n-space>
            <n-space v-if="config.type === 'VNode'">
                <AttributeMoreVnode
                    :content="config.renderVNode"
                ></AttributeMoreVnode>
            </n-space>
        </div>
        <div class="cursorCss" v-if="isCursorGj && isDown" :style="cursorCss">
            <svg
                t="1688374091664"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3262"
                width="200"
                height="200"
            >
                <path
                    d="M775.8 648.7V564c0-2.2-1.8-4-4-4H252.2c-2.2 0-4 1.8-4 4v84.7c0 3.1-3.3 5-6 3.5L11.5 518.9c-5.3-3.1-5.3-10.8 0-13.9l230.7-133.2c2.7-1.5 6 0.4 6 3.5V460c0 2.2 1.8 4 4 4h519.6c2.2 0 4-1.8 4-4v-84.7c0-3.1 3.3-5 6-3.5L1012.5 505c5.3 3.1 5.3 10.8 0 13.9L781.8 652.1c-2.7 1.6-6-0.3-6-3.4z"
                    p-id="3263"
                ></path>
            </svg>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Ref } from 'vue';
import { AttrsItemChildConfig } from '@/store/modules/3d/attrs';
import AttributeMoreVnode from './AttributeMoreVnode';
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
const isCursorGj = computed(() => {
    return (
        ['boolean', 'number'].includes(typeof props.config.cursorGj) &&
        !props.config?.props?.disabled
    );
});
const el = ref() as Ref<HTMLDivElement>;
const isDown = ref(false);
const time = ref(-1);
const moveX = ref(0);
const moveXM = ref(0);
const { x, y } = useMouseInElement(el);
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
    if (!isCursorGj.value) {
        return;
    }
    isDown.value = true;
    moveXM.value = 0;
    el.value.requestPointerLock();
};
const mouseup = () => {
    if (!isCursorGj.value) {
        return;
    }
    moveX.value = 0;
    moveXM.value = 0;
    isDown.value = false;
    document.exitPointerLock();
};
window.addEventListener('mouseup', mouseup);
const mousemove = (e: MouseEvent) => {
    if (!isCursorGj.value) {
        return;
    }
    try {
        clearInterval(time.value);
    } catch (e) {
        // err
    }
    if (isDown.value) {
        const configProps: any = get(props.config, 'props', {});
        const step =
            e.movementX *
            (typeof config.value.cursorGj === 'number'
                ? config.value.cursorGj
                : 1);
        const min = get(configProps, 'min');
        const max = get(configProps, 'max');
        const value = get(configProps, 'value', 0) + step;
        if (
            (typeof min === 'number' &&
                value >= min &&
                typeof max === 'number' &&
                value <= max) ||
            typeof min !== 'number' ||
            typeof max !== 'number'
        ) {
            moveX.value += step;
            moveXM.value += e.movementX;
            configProps.value = value;
        }
    }
};
</script>

<style scoped lang="less">
.AttrCardComponent {
    .cursorCss {
        position: fixed;
        z-index: 1000000000;
        width: 20px;
        height: 20px;
        color: #ff0000;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
            fill: currentColor;
            width: 100%;
            height: 100%;
            transform: translate(-10px, -50%);
            filter: drop-shadow(0 0 2px #000);
        }
    }
}
</style>
