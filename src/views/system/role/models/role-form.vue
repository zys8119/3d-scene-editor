<template>
    <n-modal
        v-model:show="show"
        preset="card"
        title="角色编辑"
        :bordered="false"
        :style="{ width: '50%' }"
        segmented
    >
        <n-form
            :label-width="100"
            label-placement="left"
            require-mark-placement="left"
        >
            <n-form-item label="角色名称" required>
                <n-input
                    v-model:value="form.name"
                    placeholder="请输入"
                    clearable
                />
            </n-form-item>
            <n-form-item label="角色CODE" required>
                <n-input
                    v-model:value="form.code"
                    placeholder="请输入"
                    clearable
                />
            </n-form-item>
            <n-form-item label="状态" required>
                <n-switch v-model:value="form.status"></n-switch>
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
import { useMessage } from 'naive-ui';
import { RoleForm, RoleListData } from '@/api/sass/api/v1/role';

const message = useMessage();

const emit = defineEmits(['save']);

const show = ref(false);

const open = (row: RoleListData | null) => {
    show.value = true;
    form.value = row
        ? { ...row }
        : {
              status: true,
          };
};

// 按钮表单
const form = ref<RoleForm>({});

const submit = async () => {
    if (!form.value.name) return message.error('请输入角色名称');
    if (!form.value.code) return message.error('请输入角色编码');
    const res = form.value.id
        ? await window.api.sass.api.v1.role.update(form.value)
        : await window.api.sass.api.v1.role.create(form.value);
    await message.success(res.msg);
    show.value = false;
    emit('save');
};

defineExpose({ open });
</script>

<style scoped></style>
