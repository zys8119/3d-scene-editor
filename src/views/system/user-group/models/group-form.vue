<template>
    <n-modal
        v-model:show="show"
        preset="card"
        title="用户组编辑"
        :bordered="false"
        :style="{ width: '50%' }"
        segmented
    >
        <n-form
            :label-width="150"
            label-placement="left"
            require-mark-placement="left"
        >
            <n-form-item label="用户组名称" required>
                <n-input
                    v-model:value="form.name"
                    placeholder="请输入"
                    clearable
                />
            </n-form-item>
            <n-form-item label="所属组类型" required>
                <n-select
                    v-model:value="form.groupTypeId"
                    :options="options"
                    label-field="name"
                    value-field="id"
                    placeholder="请输入"
                />
            </n-form-item>
            <n-form-item label="用户组CODE" required>
                <n-input
                    v-model:value="form.code"
                    placeholder="请输入"
                    clearable
                />
            </n-form-item>
            <n-form-item label="状态" required>
                <n-switch v-model:value="form.status" />
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
import { GroupTypeListData } from '@/api/sass/api/v1/group-type';
import { GroupForm, GroupListData } from '@/api/sass/api/v1/group';

const message = useMessage();

const emit = defineEmits(['save']);

const show = ref(false);
const options = ref<GroupTypeListData[]>([]);

const open = (row: GroupListData | null, id: string) => {
    show.value = true;
    form.value = row
        ? { ...row }
        : {
              status: true,
          };
    init();
};

const init = async () => {
    const res = await window.api.sass.api.v1.groupType.list({ pageSize: 1000 });
    options.value = res.data.data.map((v) => ({
        ...v,
        disabled: !v.status,
    }));
};

// 接口组表单
const form = ref<GroupForm>({});

const submit = async () => {
    if (!form.value.name) return message.error('请输入用户组名称');
    if (!form.value.code) return message.error('请输入用户组编码');
    if (!form.value.code) return message.error('请选择用户组类型');
    const res = form.value.id
        ? await window.api.sass.api.v1.group.update(form.value)
        : await window.api.sass.api.v1.group.create(form.value);
    await message.success(res.msg);
    show.value = false;
    emit('save');
};

defineExpose({ open });
</script>

<style scoped></style>
