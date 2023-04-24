<template>
    <n-modal
        v-model:show="show"
        preset="card"
        title="租户编辑"
        :bordered="false"
        :style="{ width: '50%' }"
        segmented
    >
        <n-form label-placement="left" :label-width="100">
            <n-form-item label="姓名" required>
                <n-input
                    v-model:value="form.name"
                    placeholder="请输入"
                ></n-input>
            </n-form-item>
            <n-form-item label="有效时间" required>
                <n-date-picker
                    class="w-100"
                    v-model:value="time"
                    type="datetimerange"
                    clearable
                />
            </n-form-item>
            <n-form-item label="密钥">
                <n-input
                    v-model:value="form.secret"
                    placeholder="请输入"
                ></n-input>
            </n-form-item>
            <n-form-item label="是否有效" required>
                <n-switch v-model:value="form.isSuper"></n-switch>
            </n-form-item>
            <n-form-item label="是否有效" required>
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
import { TenantForm, TenantListData } from '@/api/sass/api/v1/tenant';

const emit = defineEmits<{
    (e: 'submit'): void;
}>();

const message = useMessage();

const show = ref(false);
const form = ref<TenantForm>({});
const time = ref<[number, number]>();

const open = (row: TenantListData) => {
    time.value = null;
    form.value = {
        status: true,
    };
    show.value = true;
    if (row && row.id) {
        form.value = { ...row };
        if (form.value.serviceStartAt && form.value.serviceEndAt)
            time.value = [form.value.serviceStartAt, form.value.serviceEndAt];
    }
};

const submit = async () => {
    const _data = {
        ...form.value,
        serviceStartAt: time.value[0],
        serviceEndAt: time.value[1],
    };
    const res =
        form.value && form.value.id
            ? await api.sass.api.v1.tenant.update(_data)
            : await api.sass.api.v1.tenant.create(_data);
    res.message && message.success(res.message);
    show.value = false;
    emit('submit');
};

defineExpose({ open });
</script>

<style scoped></style>
