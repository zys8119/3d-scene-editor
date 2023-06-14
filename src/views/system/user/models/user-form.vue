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
            <n-form-item label="用户名" required>
                <n-input
                    v-model:value="form.username"
                    placeholder="请输入"
                ></n-input>
            </n-form-item>
            <n-form-item label="昵称" required>
                <n-input
                    v-model:value="form.nickname"
                    placeholder="请输入"
                ></n-input>
            </n-form-item>
            <n-form-item label="手机" required>
                <n-input
                    v-model:value="form.mobile"
                    placeholder="请输入"
                ></n-input>
            </n-form-item>
            <n-form-item label="密码" required v-if="!form.id">
                <n-input
                    v-model:value="form.password"
                    placeholder="请输入"
                ></n-input>
            </n-form-item>
            <n-form-item label="邮箱">
                <n-input
                    v-model:value="form.email"
                    placeholder="请输入"
                ></n-input>
            </n-form-item>
            <n-form-item label="是否有效" required>
                <n-switch v-model:value="form.status"></n-switch>
            </n-form-item>
            <n-form-item label="头像" required>
                <n-pro-upload
                    v-model:value="form.avatar"
                    accept=".png,.jpg,.jpeg,.svg"
                    :max="1"
                    :api="{
                        upload: api.file.api.v1.file.upload,
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
import { UserForm, UserListData } from '@/api/sass/api/v1/user';

const emit = defineEmits<{
    (e: 'submit'): void;
}>();

const message = useMessage();

const show = ref(false);
const form = ref<UserForm>({});

const open = (row: UserListData) => {
    form.value = {
        status: true,
    };
    show.value = true;
    if (row && row.id) {
        form.value = { ...row };
        if (form.value.avatar)
            form.value.avatar = [{ ...form.value.avatar, status: 'finished' }];
    }
};

const submit = async () => {
    const _data = {
        ...form.value,
        avatarId:
            form.value.avatar && form.value.avatar?.length > 0
                ? form.value.avatar[0].id
                : null,
    };
    const res =
        form.value && form.value.id
            ? await api.sass.api.v1.user.update(_data)
            : await api.sass.api.v1.user.create(_data);
    res.message && message.success(res.message);
    show.value = false;
    emit('submit');
};

defineExpose({ open });
</script>

<style scoped></style>
