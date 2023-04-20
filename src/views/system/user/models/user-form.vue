<template>
    <n-modal
        v-model:show="show"
        preset="card"
        title="用户编辑"
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
            <n-form-item label="用户名" required>
                <n-input
                    v-model:value="form.username"
                    placeholder="请输入"
                ></n-input>
            </n-form-item>
            <n-form-item label="手机" required>
                <n-input
                    v-model:value="form.mobile"
                    placeholder="请输入"
                ></n-input>
            </n-form-item>
            <n-form-item label="密码" required v-if="!info">
                <n-input
                    v-model:value="form.password"
                    placeholder="请输入"
                ></n-input>
            </n-form-item>
            <n-form-item label="是否管理员" required>
                <n-switch v-model:value="form.is_admin"></n-switch>
            </n-form-item>
            <n-form-item label="是否有效" required>
                <n-switch v-model:value="form.is_enabled"></n-switch>
            </n-form-item>
            <n-form-item label="头像" required>
                <n-pro-upload
                    v-model:value="form.avatar"
                    :max="1"
                    :api="{
                        upload: api.common.upload,
                    }"
                    :upload-props="{
                        listType: 'image-card',
                    }"
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
import { Staff, User } from '@/api/typing';

const emit = defineEmits<{
    (e: 'submit'): void;
}>();

const message = useMessage();

const show = ref(false);
const form = ref<Partial<Staff>>({});
const info = ref<Partial<User> | null>();

const open = (row?: User) => {
    info.value = null;
    form.value = {
        is_admin: false,
        is_enabled: true,
    };
    show.value = true;
    if (row && row.id) {
        info.value = { ...row };
        form.value = info.value;
        if (info.value.avatar)
            form.value.avatar = [{ ...info.value.avatar, status: 'finished' }];
    }
};

const submit = async () => {
    const _data = {
        ...form.value,
        avatar_id:
            form.value.avatar && form.value.avatar?.length > 0
                ? form.value.avatar[0].id
                : null,
    };
    const res =
        form.value && form.value.id
            ? await api.v1.system.user.put(form.value.id, _data)
            : await api.v1.system.user.post(_data);
    res.message && message.success(res.message);
    show.value = false;
    emit('submit');
};

defineExpose({ open });
</script>

<style scoped></style>
