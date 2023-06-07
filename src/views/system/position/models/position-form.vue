<template>
    <n-modal
        v-model:show="show"
        preset="card"
        title="职位编辑"
        :bordered="false"
        :style="{ width: '50%' }"
        segmented
    >
        <n-form
            :label-width="150"
            label-placement="left"
            require-mark-placement="left"
        >
            <n-form-item label="职位名称" required>
                <n-input
                    v-model:value="form.name"
                    placeholder="请输入"
                    clearable
                />
            </n-form-item>
            <n-form-item label="职位编码" required>
                <n-input
                    v-model:value="form.code"
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
import { PositionForm, PositionListData } from '@/api/sass/api/v1/position';

const message = useMessage();

const emit = defineEmits(['save']);

const show = ref(false);

const open = (row: PositionListData | null) => {
    show.value = true;
    form.value = row
        ? { ...row }
        : {
              status: true,
          };
};

// 接口组表单
const form = ref<PositionForm>({});

const submit = async () => {
    if (!form.value.name) return message.error('请输入职位名称');
    if (!form.value.code) return message.error('请输入职位编码');
    const res = form.value.id
        ? await window.api.sass.api.v1.position.update(form.value)
        : await window.api.sass.api.v1.position.create(form.value);
    await message.success(res.msg);
    show.value = false;
    emit('save');
};

defineExpose({ open });
</script>

<style scoped></style>
