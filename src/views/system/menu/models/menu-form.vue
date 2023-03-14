<template>
    <n-modal
        v-model:show="show"
        preset="card"
        title="菜单编辑"
        :bordered="false"
        :style="{ width: '50%' }"
        segmented
    >
        <n-tabs type="line" animated>
            <n-tab-pane name="菜单设置">
                <n-form
                    :label-width="100"
                    label-placement="left"
                    require-mark-placement="left"
                >
                    <n-form-item label="菜单名称" required>
                        <n-input
                            v-model:value="menuForm.name"
                            placeholder="请输入菜单名称"
                            clearable
                        />
                    </n-form-item>
                    <n-form-item label="菜单标题" required>
                        <n-input
                            v-model:value="menuForm.title"
                            placeholder="请输入菜单标题"
                            clearable
                        />
                    </n-form-item>
                    <n-form-item label="路径 / Url" required>
                        <n-input
                            v-model:value="menuForm.router"
                            placeholder="请输入路径 / Url"
                            clearable
                        />
                    </n-form-item>
                    <n-form-item label="组件" required>
                        <n-select
                            v-model:value="menuForm.components"
                            :options="componentsOptions"
                            filterable
                        />
                    </n-form-item>
                    <n-form-item label="重定向">
                        <n-input
                            v-model:value="menuForm.redirect"
                            placeholder="请输入重定向路径"
                            clearable
                        />
                    </n-form-item>
                    <n-form-item label="排序号">
                        <n-input-number
                            v-model:value="menuForm.order"
                            :precision="0"
                        />
                    </n-form-item>
                    <n-form-item label="父级">
                        {{ parentMenu ? parentMenu.name : '无' }}
                    </n-form-item>
                    <n-space justify="space-between">
                        <n-form-item label="是否隐藏">
                            <n-switch v-model:value="menuForm.is_hide" />
                        </n-form-item>
                        <n-form-item
                            label="是否在页签中隐藏"
                            label-width="150px"
                        >
                            <n-switch v-model:value="menuForm.is_hide_in_tab" />
                        </n-form-item>
                    </n-space>
                    <n-space justify="space-between">
                        <n-form-item label="是否启用">
                            <n-switch v-model:value="menuForm.is_enabled" />
                        </n-form-item>
                        <n-form-item
                            label="是否在页签中固定"
                            label-width="150px"
                        >
                            <n-switch
                                v-model:value="menuForm.is_fixed_in_tab"
                            />
                        </n-form-item>
                    </n-space>
                    <n-form-item label="图标">
                        <icon-select v-model:value="menuForm.icon" />
                    </n-form-item>
                    <n-form-item label="备注">
                        <n-input type="textarea" placeholder="请输入备注" />
                    </n-form-item>
                </n-form>
            </n-tab-pane>
            <n-tab-pane name="权限设置">
                <n-space vertical>
                    <n-card title="按钮权限">
                        <n-form label-placement="left">
                            <n-form-item label="按钮名称" required>
                                <n-space>
                                    <n-input
                                        placeholder="请输入按钮名称"
                                        clearable
                                    />
                                    <n-button type="primary">新增</n-button>
                                    <n-button type="error">删除</n-button>
                                </n-space>
                            </n-form-item>
                        </n-form>
                    </n-card>
                    <n-card title="接口权限">
                        <n-form label-placement="left">
                            <n-form-item label="接口地址" required>
                                <n-space>
                                    <n-input
                                        placeholder="请输入接口地址"
                                        clearable
                                    />
                                    <n-button type="primary">新增</n-button>
                                    <n-button type="error">删除</n-button>
                                </n-space>
                            </n-form-item>
                        </n-form>
                    </n-card>
                </n-space>
            </n-tab-pane>
        </n-tabs>
        <template #footer>
            <n-space justify="center">
                <n-button>取消</n-button>
                <n-button type="primary">提交</n-button>
            </n-space>
        </template>
    </n-modal>
</template>

<script lang="ts" setup>
import { TreeNode } from 'naive-ui';
import { views } from '@/config/config-hooks';

defineProps<{
    parentMenu?: TreeNode;
}>();

const show = ref(false);

const open = () => {
    show.value = true;
    menuForm.value = {
        is_enabled: true,
    };
};

// vue 文件列表
const componentsOptions = computed(() => {
    return Object.keys(views).map((item) => ({
        label: item.replace(/^\.\.\/views/, ''),
        value: item.replace(/^\.\.\/views/, ''),
    }));
});

// 菜单表单
const menuForm = ref<any>({});

// 按钮权限表单
// const buttonForm = ref([]);

// 接口权限表单
// const apiForm = ref([]);

defineExpose({ open });
</script>

<style scoped></style>
