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
                v-if="rawNode.node_type === 'company'"
                name="svgs-wuye"
                color="#7facf5"
            />
            <SvgIcon
                class="m-r-5"
                v-if="rawNode.node_type === 'department'"
                name="svgs-zuzhi"
                color="#e8a5a5"
            />
        </template>
        <template #suffix="{ rawNode }" v-if="canEdit">
            <n-dropdown
                trigger="hover"
                :options="dropdownBtnList(rawNode.node_type)"
                @select="editBtn($event, rawNode)"
            >
                <SvgIcon name="svgs-qita" />
            </n-dropdown>
        </template>
    </n-tree>
</template>

<script lang="ts" setup>
import { Ref } from 'vue';

// const props = withDefaults(
//     defineProps<{
//         canEdit?: boolean;
//         initValue?: boolean;
//     }>(),
//     {
//         canEdit: true,
//         initValue: true,
//     }
// );
const emit = defineEmits(['editBtn', 'selected']);

const data = ref([]) as Ref<any>;

const dropdownBtnList = computed(() => (type: string) => [
    { label: '新增子公司', key: 1, disabled: type !== 'company' },
    { label: '新增部门', key: 2, disabled: false },
    { label: '绑定负责人', key: 3, disabled: false },
    { label: '绑定角色', key: 4, disabled: false },
    { label: '编辑', key: 5, disabled: false },
    { label: '删除', key: 6, disabled: false },
]);

// 功能按钮
const editType = ref();
const editRow = ref();
const editBtn = (k, row) => {
    editType.value = k;
    editRow.value = row;
    emit('editBtn', k, row);
};

// 选中
const selectRow = (keys: Array<string>, option: any) => {
    selectedKeys.value = keys;
    emit('selected', keys, option);
};

// 搜索
const patternVal = ref('') as Ref<string>;
const filter = (str: string) => {
    patternVal.value = str;
};

// 初始化
const selectedKeys = ref([]) as Ref<string[]>;
const init = async () => {
    const res = await window.api.sass.api.v1.organization.list();
    data.value = res.data.list;
    // if (props.initValue) {
    //     if (
    //         selectedKeys.value.length < 1 ||
    //         (editType.value === 6 && selectedKeys.value[0] === editRow.value.id)
    //     ) {
    //         selectedKeys.value = [res.data.list[0].id];
    //         selectRow(selectedKeys.value, [res.data.list[0]]);
    //     }
    // }
};

onMounted(init);
defineExpose({ init, filter });
</script>

<style scoped></style>
