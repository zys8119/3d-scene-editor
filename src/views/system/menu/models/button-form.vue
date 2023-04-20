<template>
    <n-modal
        v-model:show="show"
        preset="card"
        title="按钮编辑"
        :bordered="false"
        :style="{ width: '50%' }"
        segmented
    >
        <n-form
            :label-width="100"
            label-placement="left"
            require-mark-placement="left"
        >
            <n-form-item label="按钮名称" required>
                <n-input
                    v-model:value="form.name"
                    placeholder="请输入按钮名称"
                    clearable
                />
            </n-form-item>
            <n-form-item label="按钮CODE" required>
                <n-input
                    v-model:value="form.code"
                    placeholder="请输入按钮CODE"
                    clearable
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
import { ButtonForm, ButtonListData } from '@/api/sass/api/v1/button';

const message = useMessage();

const emit = defineEmits(['save']);

const show = ref(false);

const open = (row: ButtonListData | null, id: string) => {
    show.value = true;
    form.value = { ...row } ?? {};
    form.value.menuId = id;
};

// 按钮表单
const form = ref<ButtonForm>({});

const submit = async () => {
    if (!form.value.name) return message.error('请输入按钮名称');
    if (!form.value.code) return message.error('请输入按钮编码');
    const res = form.value.id
        ? await window.api.sass.api.v1.button.update(form.value)
        : await window.api.sass.api.v1.button.create(form.value);
    await message.success(res.msg);
    show.value = false;
    emit('save');
};

defineExpose({ open });
</script>

<style scoped></style>
