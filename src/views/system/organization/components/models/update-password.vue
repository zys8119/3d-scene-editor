<template>
    <n-modal
        v-model:show="show"
        preset="card"
        title="修改密码"
        :bordered="false"
        :style="{ width: '40%' }"
        segmented
    >
        <n-form label-placement="left" label-width="150px">
            <n-form-item
                label="操作员登录密码"
                required
                require-mark-placement="left"
            >
                <n-input
                    v-model:value="form.operatorPW"
                    type="password"
                    placeholder="请输入当前账号的登录密码"
                ></n-input>
            </n-form-item>
            <n-form-item label="新密码" required require-mark-placement="left">
                <n-input
                    v-model:value="form.newPass"
                    type="password"
                    placeholder="请输入新密码"
                ></n-input>
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

const message = useMessage();

const props = defineProps<{
    ids: string[];
}>();

const show = ref(false);
const form = ref({});

const open = () => {
    show.value = true;
};

const submit = async () => {
    const res = await window.api.sass.api.v1.user.update_users_password({
        ...form.value,
        userIds: props.ids,
    });
    await message.success(res.msg);
    show.value = false;
};

defineExpose({ open });
</script>

<style scoped></style>
