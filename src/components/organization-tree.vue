<template>
    <n-tree
        :pattern="patternVal"
        :show-irrelevant-nodes="false"
        :selected-keys="selectedKeys"
        block-line
        :cancelable="false"
        :data="data"
        label-field="name"
        key-field="id"
        :render-label="
            ({ option }) => `${option.name}【${option.children.length}】`
        "
        @update:selected-keys="selectRow"
    >
        <template #prefix="{ rawNode }">
            <SvgIcon
                class="m-r-5"
                v-if="rawNode.nodeType === 0"
                name="svgs-wuye"
                color="#7facf5"
            />
            <SvgIcon
                class="m-r-5"
                v-if="rawNode.nodeType === 1"
                name="svgs-zuzhi"
                color="#e8a5a5"
            />
        </template>
        <template #suffix="{ rawNode }" v-if="canEdit">
            <n-dropdown
                trigger="hover"
                :options="dropdownBtnList(rawNode.nodeType)"
                @select="editBtn($event, rawNode)"
            >
                <SvgIcon name="svgs-qita" />
            </n-dropdown>
        </template>
    </n-tree>
</template>

<script lang="ts" setup>
import { OrganizationListData } from '@/api/sass/api/v1/organization';
import { TreeOption } from 'naive-ui';

const props = withDefaults(
    defineProps<{
        canEdit?: boolean;
        initValue?: boolean;
    }>(),
    {
        canEdit: true,
        initValue: true,
    }
);
const emit = defineEmits<{
    (e: 'edit', k: number, row: OrganizationListData): void;
    (e: 'selected', keys: string[], option: TreeOption[]): void;
}>();

const data = ref<OrganizationListData[]>([]);

const dropdownBtnList = computed(() => (type: string) => [
    { label: '新增子单位', key: 'subUnit', disabled: type !== 0 },
    { label: '新增部门', key: 'department', disabled: false },
    { label: '编辑', key: 'edit', disabled: false },
    { label: '删除', key: 'delete', disabled: false },
]);

// 功能按钮
const editType = ref();
const editRow = ref();
const editBtn = (k: number, row: OrganizationListData) => {
    editType.value = k;
    editRow.value = row;
    emit('edit', k, row);
};

// 选中
const selectRow = (keys: string[], option: TreeOption[]) => {
    selectedKeys.value = keys;
    emit('selected', keys, option);
};

// 搜索
const patternVal = ref('');
const filter = (str: string) => {
    if (!str) init();
    patternVal.value = str;
};

// 初始化
const selectedKeys = ref<string[]>([]);
const init = async () => {
    const res = await window.api.sass.api.v1.organization.tree.list();
    data.value = res.data.data;
    if (props.initValue && data.value.length > 0) {
        if (
            selectedKeys.value.length < 1 ||
            (editType.value === 6 && selectedKeys.value[0] === editRow.value.id)
        ) {
            selectedKeys.value = [data.value[0].id];
            selectRow(selectedKeys.value, [data.value[0]]);
        }
    }
};

onMounted(init);
defineExpose({ init, filter });
</script>

<style scoped></style>
