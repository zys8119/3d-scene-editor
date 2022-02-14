<template>
    <div class="person-tree">
        <el-input v-model="filter" :prefix-icon="Search" placeholder="请输入关键词" :validate-event="false" />
        <wp-space class="person-tree-bar" align="center" :item-style="{
            common: {
                marginTop: '10px',
                marginBottom: '5px'
            },
            0: {
                marginLeft: '5px'
            },
            2: {
                flex: 1,
                textAlign: 'right'
            }
        }">
            <template v-if="!useRadio">
                <wp-checkbox v-model="checkedAll" size="small" :disabled="count === 0" :indeterminate="checked && checked.length > 0 && checked.length !== listComputed.length">全选</wp-checkbox>
                <slot name="checked" :checked="checked" :list="listComputed" :count="count" :itemsCount="listComputed.length">
                    已选：{{ checked?.length || 0 }}/{{ count }}
                </slot>
            </template>
            <el-button
                v-if="useRadio || handleDelete"
                size="small"
                type="text"
                :disabled="useRadio ? checked && checked.length === 0 : count === 0"
                @click="useRadio ? ( checked = [] ) : handleDelete?.()"
            >
                {{ useRadio ? '取消选中' : '全部删除'}}
            </el-button>
        </wp-space>
        <wp-tree
            ref="treeRef"
            v-model:checked="checked"
            :list="listComputed"
            :exclude="exclude"
            :props="{
                key: 'id',
                title: 'name'
            }"
            checkable
            filterable
            arrow-right
            :expends="expends"
            :filter="filter"
            :item-height="30"
            height="200px"
            virtual
            :use-radio="useRadio"
            :filter-call="filterCall"
        >
            <template #title="{ name, username }">
                {{ name || username }}
            </template>
        </wp-tree>
    </div>
</template>

<script lang="ts" setup>
import { Search } from '@element-plus/icons'
import type { WpTree, TreeListItemCustom } from 'wisdom-plus'
import { getData, userData } from './data'

const filter = ref('')

const props = defineProps<{
    modelValue?: (string | number | symbol)[],
    checkedItems?: TreeListItemCustom[],
    useRadio?: boolean,
    handleDelete?: () => void,
    list?: TreeListItemCustom[],
    exclude?: (string | number | symbol)[],
    noFilterCount?: boolean,
    site?: boolean
}>()
const emit = defineEmits<{
    (e: 'update:modelValue', value: (string | number | symbol)[]): void,
    (e: 'update:checkedItems', value: TreeListItemCustom[]): void
}>()

const role = props.site ? '轮值站长' : 'default'

const treeRef = ref<InstanceType<typeof WpTree> | null>(null)

const checked = useVModel(props, 'modelValue', emit, { passive: true, deep: true })
const expends = ref<string[]>(['street'])

watchEffect(() => {
    if (!checked.value) {
        checked.value = []
    }
})

const listComputed = computed(() => {
    return props.list || userData.value[role]
})

const count = ref(0)

const updateCount = () => {
    if (!treeRef.value) return
    count.value = treeRef.value.getItemsCount(!props.noFilterCount)
}

const getCheckedItems = () => {
    if (!treeRef.value) return
    return treeRef.value.getCheckedItems()
}

watch(checked, () => {
    if (props.checkedItems) {
        const items = getCheckedItems()
        if (!items) return
        emit('update:checkedItems', items)
    }
}, {
    deep: true
})

onMounted(updateCount)

defineExpose({
    updateCount,
    getCheckedItems
})

const checkedAll = computed<boolean>({
    get() {
        if (!checked.value) return false
        if (checked.value.length === 0) return false
        return checked.value.length >= count.value - (props.exclude?.length || 0)
    },
    set(value) {
        if (value) {
            treeRef.value?.checkAll?.()
        } else {
            checked.value = []
        }
    }
})

const filterCall = (item: any, text?: string) => {
    return item.username.includes(text) || item.name?.includes(text)
}

if (!props.list) {
    getData(role, () => {
        nextTick(updateCount)
    })
}
</script>

<style lang="less" scoped>
.person-tree {
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    line-height: 1em;
    :deep(.wp-tree-nodes) {
        .wp-tree-node {
            height: 20px;
        }
        .wp-tree-node__content {
            font-size: 12px;
        }
        .wp-checkbox {
            --wp-checkbox-size: 14px;
            --wp-checkbox-font-size: 12px;
        }
    }
    &-bar {
        font-size: 12px;
    }
    .el-button {
        padding: 0;
        height: 20px;
        min-height: 0px;
        font-size: 12px;
    }
}
</style>