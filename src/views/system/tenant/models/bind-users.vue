<template>
    <n-modal
        v-model:show="show"
        preset="card"
        title="绑定用户"
        :bordered="false"
        :style="{ width: '60%' }"
        segmented
    >
        <n-transfer
            v-model:value="selected"
            virtual-scroll
            :options="users"
            source-filterable
        />
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
import { UserListData } from '@/api/sass/api/v1/user';

const message = useMessage();

const props = defineProps<{
    tId: string;
}>();
const emit = defineEmits<{
    (e: 'submit'): void;
}>();

const show = ref(false);
const selected = ref<string[]>([]);
const users = ref<UserListData[]>([]);

const open = () => {
    show.value = true;
    init();
};

const init = async () => {
    const res = await window.api.sass.api.v1.user.list({
        ignoreTenant: true,
        pageSize: 10000,
    });
    users.value = res.data.data.map((v) => ({
        ...v,
        label: v.username,
        value: v.id,
        disabled: !v.status,
    }));
    selected.value = (
        await window.api.sass.api.v1.tenantUserInfo.list({
            tenantId: props.tId,
            page: 1,
            pageSize: 10000,
        })
    ).data.data.map((v) => v.id);
};

const submit = async () => {
    const res = await window.api.sass.api.v1.tenant.update_users(
        props.tId,
        selected.value
    );
    await message.success(res.msg);
    show.value = false;
    emit('submit');
};

defineExpose({ open });
</script>

<style scoped></style>
