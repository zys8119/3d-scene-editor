<template>
    <n-modal
        v-model:show="show"
        preset="card"
        title="菜单编辑"
        :bordered="false"
        :style="{ width: '50%' }"
        segmented
    >
        <n-form
            :label-width="100"
            label-placement="left"
            require-mark-placement="left"
        >
            <n-form-item label="菜单标题" required>
                <n-input
                    v-model:value="form.title"
                    placeholder="请输入菜单标题"
                    clearable
                />
            </n-form-item>
            <n-form-item label="菜单名称" required>
                <n-input
                    v-model:value="form.name"
                    placeholder="请输入菜单名称"
                    clearable
                />
            </n-form-item>
            <n-form-item label="路径 / Url" required>
                <n-input
                    v-model:value="form.url"
                    placeholder="请输入路径 / Url"
                    clearable
                />
            </n-form-item>
            <n-form-item label="组件">
                <n-select
                    v-model:value="form.component"
                    :options="componentsOptions"
                    filterable
                />
            </n-form-item>
            <n-form-item label="重定向">
                <n-input
                    v-model:value="form.redirect"
                    placeholder="请输入重定向路径"
                    clearable
                />
            </n-form-item>
            <n-form-item label="排序号">
                <n-input-number v-model:value="form.sort" :precision="0" />
            </n-form-item>
            <n-form-item label="父级" v-if="parentMenu">
                <n-cascader
                    v-model:value="parentMenu.id"
                    :options="menus"
                    value-field="id"
                    label-field="title"
                    disabled
                />
            </n-form-item>
            <n-space justify="space-between">
                <n-form-item label="是否隐藏">
                    <n-switch v-model:value="form.hidden" />
                </n-form-item>
                <n-form-item label="是否在页签中隐藏" label-width="150px">
                    <n-switch v-model:value="form.hiddenInTab" />
                </n-form-item>
            </n-space>
            <n-space justify="space-between">
                <n-form-item label="是否启用">
                    <n-switch v-model:value="form.isActive" />
                </n-form-item>
                <n-form-item label="是否在页签中固定" label-width="150px">
                    <n-switch v-model:value="form.fixed" />
                </n-form-item>
            </n-space>
            <n-form-item label="图标">
                <icon-select v-model:value="form.icon" />
            </n-form-item>
            <n-form-item label="备注">
                <n-input
                    v-model:value="form.remark"
                    type="textarea"
                    placeholder="请输入备注"
                />
            </n-form-item>
        </n-form>
        <template #footer>
            <n-space justify="center">
                <n-button @click="show = false">取消</n-button>
                <n-button @click="submit" type="primary">提交</n-button>
            </n-space>
        </template>
    </n-modal>
</template>

<script lang="ts" setup>
import { views } from '@/config/config-hooks';
import { useMessage } from 'naive-ui';
import { MenuForm, MenuListData } from '@/api/sass/api/v1/menu';

defineProps<{
    menus: MenuListData[];
}>();

const message = useMessage();

const emit = defineEmits(['save']);

const show = ref(false);
const parentMenu = ref();

const open = (row: MenuListData, parent: MenuListData) => {
    show.value = true;
    parentMenu.value = parent ?? (row ? row.parent : null) ?? null;
    form.value = {
        isActive: true,
        parentId: parentMenu.value ? parentMenu.value.id : '',
    };
    if (row) form.value = { ...row };
};

// vue 文件列表
const componentsOptions = computed(() => {
    return Object.keys(views).map((item) => ({
        label: item.replace(/^\.\.\/views/, ''),
        value: item.replace(/^\.\.\/views/, ''),
    }));
});

// 菜单表单
const form = ref<MenuForm>({});

const submit = async () => {
    const res = form.value.id
        ? await window.api.sass.api.v1.menu.update(form.value)
        : await window.api.sass.api.v1.menu.create(form.value);
    await message.success(res.msg);
    show.value = false;
    emit('save');
};

defineExpose({ open });
</script>

<style scoped></style>
