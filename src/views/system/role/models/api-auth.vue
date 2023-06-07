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
            :options="apis"
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
import { ApiListData } from '@/api/sass/api/v1/api';

const message = useMessage();

const show = ref(false);
const selected = ref<string[]>([]);
const rId = ref('');
const apis = ref<ApiListData[]>([]);

const open = (id: string) => {
    rId.value = id;
    show.value = true;
    init();
};

const init = async () => {
    const res = await window.api.sass.api.v1.api.list({ pageSize: 10000 });
    apis.value = res.data.data.map((v) => ({
        ...v,
        label: v.path,
        value: v.id,
        disabled: !v.status,
    }));
    selected.value = (
        await window.api.sass.api.v1.authority.api.role(rId.value)
    ).data.data.map((v) => v.id);
};

const submit = async () => {
    const res = await window.api.sass.api.v1.authority.api.create_or_update(
        apis.value.filter((v) => selected.value.indexOf(v.id) > -1),
        rId.value
    );
    await message.success(res.msg);
    show.value = false;
};

defineExpose({ open });
</script>

<style scoped></style>
