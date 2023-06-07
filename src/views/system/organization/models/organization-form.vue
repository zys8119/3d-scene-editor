<template>
    <n-modal
        v-model:show="show"
        preset="card"
        :title="`${typeName}编辑`"
        :bordered="false"
        :style="{ width: '40%' }"
        segmented
    >
        <n-form label-placement="left" :label-width="100">
            <n-form-item :label="`${typeName}名称`" required>
                <n-input
                    v-model:value="form.name"
                    placeholder="请输入"
                ></n-input>
            </n-form-item>
            <n-form-item :label="`${typeName}编码`" required>
                <n-input
                    v-model:value="form.code"
                    placeholder="请输入"
                ></n-input>
            </n-form-item>
            <n-form-item label="是否启用" required>
                <n-switch v-model:value="form.status"></n-switch>
            </n-form-item>
            <n-form-item label="负责人姓名">
                <n-input
                    v-model:value="form.leader"
                    placeholder="请输入"
                ></n-input>
            </n-form-item>
            <n-form-item label="负责人手机号">
                <n-input
                    v-model:value="form.phone"
                    placeholder="请输入"
                ></n-input>
            </n-form-item>
            <n-form-item label="负责人邮箱">
                <n-input
                    v-model:value="form.email"
                    placeholder="请输入"
                ></n-input>
            </n-form-item>
            <n-form-item label="备注">
                <n-input
                    v-model:value="form.remark"
                    type="textarea"
                    placeholder="请输入备注"
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
import { OrganizationListData } from '@/api/sass/api/v1/organization';
import useStore from '@/store/modules/main';

const emit = defineEmits<{
    (e: 'submit'): void;
}>();

const message = useMessage();
const store = useStore();

const show = ref(false);
const form = ref<Partial<OrganizationListData>>({});
const typeName = ref('');

const open = (
    nodeType: number,
    type_name: string,
    parentId?: string,
    row?: OrganizationListData | null
) => {
    show.value = true;
    typeName.value = type_name;
    form.value = {
        tenantId: store.userinfo.defaultTenantID,
        nodeType,
        parentId: parentId ?? null,
        status: true,
    };
    if (row) {
        form.value = { ...row };
    }
};

const submit = async () => {
    const res = form.value?.id
        ? await api.sass.api.v1.organization.update(form.value)
        : await api.sass.api.v1.organization.create(form.value);
    res.message && message.success(res.message);
    show.value = false;
    emit('submit');
};

defineExpose({ open });
</script>

<style scoped></style>
