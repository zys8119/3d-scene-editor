<template>
    <div class="icon-select">
        <div v-for="(item, key) in Icons" :key="key" class="con" :class="{active: selected === key}" @click="init(key)">
            <component :is="item"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import * as Icons from '@/components/Icons/index'

const props = defineProps<{
    modelValue?: string | undefined
}>()
const emit = defineEmits(['update:modelValue'])

const selected = ref<string>('')

const init = (name?: string) => {
    selected.value = name ? name : props.modelValue ? props.modelValue : Object.keys(Icons)[0]
    emit('update:modelValue', selected.value)
}

onMounted(init)
</script>

<style scoped lang="less">
    .icon-select {
        width: 100%;
        height: 100px;
        overflow: auto;
        display: flex;
        flex-wrap: wrap;
        .con {
            width: 20px;
            height: 20px;
            margin: 5px 5px 0 5px;
            padding: 5px;
            border: 1px solid #eeeeee;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            &.active {
                border: 1px solid var(--primary-color);
            }
            svg {
                width: 100%;
                height: 100%;
                color: #333333;
            }
        }
    }
</style>