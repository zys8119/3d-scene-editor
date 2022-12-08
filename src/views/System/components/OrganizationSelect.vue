<template>
    <div class="organization-select">
        <wp-input v-model="filter" placeholder="请输入名称或编号">
            <template #suffix>
                <wp-icon>
                    <Search />
                </wp-icon>
            </template>
        </wp-input>
        <wp-tree
            ref="treeRef"
            v-model:selecting="active"
            filterable
            :filter="filter"
            selectable
            :list="treeData"
            :exclude="exclude"
            auto-expands
            link
            :props="{ key: 'id', title: 'name' }"
            @select="handleSelect"
        >
            <template #title="{ name, node_type }">
                <wp-icon class="organization-tree-icon">
                    <office-building v-if="node_type === 'company'" color="#7facf5" />
                    <school v-else-if="node_type === 'department'" color="#e8a5a5" />
                </wp-icon>
                {{ name }}
            </template>
            <template v-if="canEdit" #suffix="data">
                <wp-dropdown :list="dropdownBtnList" @click="editBtn($event, data)">
                    <more-filled class="tree-btn"/>
                </wp-dropdown>
            </template>
        </wp-tree>
    </div>
</template>

<script lang="ts" setup>
import { Search, OfficeBuilding, School, MoreFilled } from '@element-plus/icons-vue'
import { Organization } from '@/api/v1/system/organization'
import { TreeListItemCustom } from 'wisdom-plus'
import {EditBtn} from '@/typings'

const props = withDefaults(defineProps<{
    canEdit?: true,
    modelValue?: keyof any,
    initValue?: boolean,
    exclude?: (keyof any)[]
}>(), {
    canEdit: true,
    initValue: true
})
const emit = defineEmits<{
    (e: 'update:modelValue', value: keyof any): void
    (e: 'change', value: TreeListItemCustom): void
    (e: 'editBtn', value: EditBtn, info: Partial<Organization>): void
}>()

const dropdownBtnList = ref<EditBtn[]>([
    {title: '新增部门', index: 1},
    {title: '绑定负责人', index: 2},
    {title: '绑定角色', index: 5},
    {title: '编辑', index: 3},
    {title: '删除', index: 4},
])
const treeRef = ref<InstanceType<typeof WpTree>>()
const filter = ref('')
const active = useVModel(props, 'modelValue', emit)
const treeData = ref<Partial<Organization>[]>([])

async function getList(setActive = true) {
    const res = await api.v1.system.organization.getList()
    treeData.value = res.data.list
    if (setActive && props.initValue) active.value = res.data.list[0].id
}
getList()

defineExpose({ getList })

function handleSelect(key: keyof any, item: TreeListItemCustom) {
    emit('change', item)
}

// 操作按钮事件
const editBtn = (row: EditBtn, info: Partial<Organization>) => {
    emit('editBtn', row, info)
}
</script>

<style lang="less" scoped>
.organization-select {
    --wp-tree-link-bg: #eee;
    --wp-tree-selecting-color: rgba(218, 227, 255, 0.322);
    .wp-input {
        border-top: 0;
        border-left: 0;
        border-right: 0;
        border-radius: 0;
        margin-bottom: 10px;
    }
    .wp-tree {
        color: #5f5f5f;
        font-size: 13px;
        .organization-tree-icon {
            margin-right: 5px;
        }
        .tree-btn {
            width: 15px;
            padding: 0 10px;
            cursor: pointer;
        }
    }
}
</style>