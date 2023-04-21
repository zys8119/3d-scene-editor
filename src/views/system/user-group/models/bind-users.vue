<template>
    <n-modal
        v-model:show="show"
        preset="card"
        title="接口权限"
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

const show = ref(false);
const selected = ref<string[]>([]);
const gId = ref('');
const users = ref<UserListData[]>([]);

const open = (id: string) => {
    gId.value = id;
    show.value = true;
    init();
};

const init = async () => {
    const res = await window.api.sass.api.v1.user.list({ pageSize: 1000 });
    users.value = res.data.data.map((v) => ({
        ...v,
        label: v.username,
        value: v.id,
        disabled: !v.status,
    }));
    selected.value = (
        await window.api.sass.api.v1.group.users.get(gId.value)
    ).data.data.map((v) => v.id);
};

const submit = async () => {
    const res = await window.api.sass.api.v1.group.update_users(
        gId.value,
        users.value.filter((v) => selected.value.indexOf(v.id) > -1)
    );
    await message.success(res.msg);
    show.value = false;
};

defineExpose({ open });
</script>

<style scoped></style>
