<template>
    <n-modal
        v-model:show="show"
        preset="card"
        title="接口编辑"
        :bordered="false"
        :style="{ width: '50%' }"
        segmented
    >
        <n-form
            :label-width="150"
            label-placement="left"
            require-mark-placement="left"
        >
            <n-form-item label="接口地址" required>
                <n-input
                    v-model:value="form.path"
                    placeholder="请输入"
                    clearable
                />
            </n-form-item>
            <n-form-item label="请求方法" required>
                <n-input
                    v-model:value="form.method"
                    placeholder="请输入"
                    clearable
                />
            </n-form-item>
            <n-form-item label="接口组" required>
                <n-input
                    v-model:value="form.apiGroup"
                    placeholder="请输入"
                    clearable
                />
            </n-form-item>
            <n-form-item label="状态" required>
                <n-switch v-model:value="form.status" />
            </n-form-item>
            <n-form-item label="描述">
                <n-input
                    v-model:value="form.description"
                    placeholder="请输入"
                    type="textarea"
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
import { useMessage } from 'naive-ui';
import { ApiForm, ApiListData } from '@/api/sass/api/v1/api';
import { GroupListData } from '@/api/sass/api/v1/group';

const message = useMessage();

const emit = defineEmits(['save']);

const show = ref(false);

const open = (row: ApiListData | null) => {
    show.value = true;
    form.value = row
        ? { ...row }
        : {
              status: true,
          };
};

// 接口组表单
const form = ref<ApiForm>({});

const submit = async () => {
    if (!form.value.path) return message.error('请输入接口地址');
    if (!form.value.method) return message.error('请输入接口请求方式');
    if (!form.value.apiGroup) return message.error('请输入接口组');
    const res = form.value.id
        ? await window.api.sass.api.v1.api.update(form.value)
        : await window.api.sass.api.v1.api.create(form.value);
    await message.success(res.msg);
    show.value = false;
    emit('save');
};

defineExpose({ open });
</script>

<style scoped></style>
