<template>
    <div class="icon-select">
        <div
            v-for="(item, key) in iconList"
            :key="key"
            class="con"
            :class="{ active: selected === item }"
            @click="init(item)"
        >
            <SvgIcon :name="item" :size="20" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import config from '@/config/setting';
const icons = import.meta.glob('@/icons/menus/*');

const props = defineProps<{
    value?: string | undefined;
}>();
const emit = defineEmits(['update:value']);

const iconList = ref<string[]>([]);
const selected = ref<string>('');
for (const [key] of Object.entries(icons).filter(
    (v) => v[0].indexOf('fill') < 0
)) {
    let moduleName = key
        .replace('/src/icons/', '')
        .replace(/\.svg/g, '')
        .split('/')
        .join('-');
    iconList.value.push(moduleName);
}

const init = (name?: string) => {
    selected.value = name
        ? name === selected.value
            ? ''
            : name
        : props.value
        ? props.value
        : iconList.value[0];
    emit('update:value', selected.value);
};

onMounted(init);
</script>

<style scoped lang="less">
.icon-select {
    width: 100%;
    height: 100px;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    .con {
        width: 30px;
        height: 30px;
        margin: 5px 5px 0 5px;
        padding: 5px;
        border: 1px solid #eeeeee;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        &.active {
            border: 1px solid v-bind('config.themeColor');
        }
        svg {
            width: 100%;
            height: 100%;
            color: #333333;
        }
    }
}
</style>
