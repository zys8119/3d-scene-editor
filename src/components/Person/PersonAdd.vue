<template>
    <wp-space align="center">
        <template v-if="showUsers">
            <span v-for="item in checkedItemsMapFilter" :key="item.id" class="user-text">
                {{ item.name || item.username }}
            </span>
            <span v-if="checkedItemsMapFilter.length !== checkedItemsMap.length">
                等{{ checkedItemsMap.length }}人
            </span>
        </template>
        <el-button circle size="small" :icon="Plus" :disabled="disabeld" @click="handleAdd" />
    </wp-space>
</template>

<script lang="tsx" setup>
import { Plus } from '@element-plus/icons'
import { Dialog } from 'wisdom-plus'
import PersonTree from '../Person/PersonTree.vue'
import type { TreeListItemCustom } from 'wisdom-plus'

import { getData, flattenSet } from './data'
import { User } from '@/api/v1/common'

const props = defineProps<{
    modelValue?: (string | number | symbol)[],
    useRadio?: boolean,
    disabeld?: boolean,
    showUsers?: boolean,
    exclude?: (string | number | symbol)[],
    site?: boolean
}>()

const role = props.site ? '轮值站长' : 'default'

const emit = defineEmits<{
    (e: 'update:modelValue', value: (string | number | symbol)[]): void,
    (e: 'change', value: (string | number | symbol)[]): void,
    (e: 'checked', value: TreeListItemCustom[]): void
}>()

const selections = ref<(string | number | symbol)[]>([])

const checkedItemsMap = computed(() => {
    const valueSet = new Set(props.modelValue)
    const finalItems: User[] = []
    if (!flattenSet.value[role]) return []
    flattenSet.value[role].forEach(item => {
        if (valueSet.has(item.id)) {
            finalItems.push(item)
        }
    })
    return finalItems
})

const checkedItemsMapFilter = computed(() => {
    return checkedItemsMap.value.filter((item, index) => index < 3)
})

watch(checkedItemsMap, () => {
    emit('checked', checkedItemsMap.value)
}, {
    immediate: true
})

watchEffect(() => {
    if (!props.modelValue) {
        emit('update:modelValue', [])
    }
})

const handleAdd = async() => {
    selections.value = props.modelValue ? [ ...props.modelValue ] : []
    await Dialog({
        title: '请选择',
        content: () => (
            <PersonTree
                modelValue={selections.value}
                onUpdate:modelValue={value => selections.value = value}
                useRadio={props.useRadio}
                exclude={props.exclude}
                site={props.site}
            />
        ),
        spaceProps: {
            justify: 'center'
        },
        confirmText: '提交',
        props: {
            width: '400px'
        }
    })
    emit('change', selections.value)
    emit('update:modelValue', selections.value)
}

getData(role)
</script>

<style lang="less" scoped>
.user-text {
    font-size: 14px;
}
</style>