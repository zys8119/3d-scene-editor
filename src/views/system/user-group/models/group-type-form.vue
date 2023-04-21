<template>
    <n-modal
        v-model:show="show"
        preset="card"
        title="用户组类型编辑"
        :bordered="false"
        :style="{ width: '50%' }"
        segmented
    >
        <n-form
            :label-width="150"
            label-placement="left"
            require-mark-placement="left"
        >
            <n-form-item label="组类型名称" required>
                <n-input
                    v-model:value="form.name"
                    placeholder="请输入"
                    clearable
                />
            </n-form-item>
            <n-form-item label="组类型CODE" required>
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
import { GroupTypeForm, GroupTypeListData } from '@/api/sass/api/v1/group-type';

const message = useMessage();

const emit = defineEmits(['save']);

const show = ref(false);

const open = (row: GroupTypeListData | null) => {
    show.value = true;
    form.value = row
        ? { ...row }
        : {
              status: true,
          };
};

// 接口组表单
const form = ref<GroupTypeForm>({});

const submit = async () => {
    if (!form.value.name) return message.error('请输入组类型名称');
    if (!form.value.code) return message.error('请输入组类型编码');
    const res = form.value.id
        ? await window.api.sass.api.v1.groupType.update(form.value)
        : await window.api.sass.api.v1.groupType.create(form.value);
    await message.success(res.msg);
    show.value = false;
    emit('save');
};

defineExpose({ open });
</script>

<style scoped></style>
