<template>
    <n-modal
        v-model:show="show"
        preset="card"
        title="按钮编辑"
        :bordered="false"
        :style="{ width: '60%' }"
        segmented
    >
        <n-form
            :label-width="100"
            label-placement="left"
            require-mark-placement="left"
        >
            <n-form-item
                label="按钮名称"
                required
                v-for="(item, key) in formList"
                :key="key"
            >
                <n-space>
                    <n-input
                        v-model:value="item.name"
                        placeholder="请输入按钮名称"
                        clearable
                    />
                    <n-input
                        v-model:value="item.code"
                        placeholder="请输入按钮CODE"
                        clearable
                    />
                    <n-button type="primary" @click="addItem">新增</n-button>
                    <n-button type="error" @click="delItem(key)">删除</n-button>
                </n-space>
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
import { ButtonForm } from '@/api/sass/api/v1/button';
import { MenuListData } from '@/api/sass/api/v1/menu';

const message = useMessage();

const emit = defineEmits(['save']);

const show = ref(false);
const menuInfo = ref<MenuListData>({});

const open = (row: MenuListData) => {
    menuInfo.value = row;
    show.value = true;
    formList.value = row.buttons.length > 0 ? row.buttons : [item];
};

// 按钮表单
const formList = ref<ButtonForm[]>([]);
const item = ref<ButtonForm>({ name: '', code: '' });

// 添加按钮
const addItem = () => {
    formList.value.push({ ...item });
};

// 删除按钮
const delItem = (k) => {
    formList.value.splice(k, 1);
};

const submit = async () => {
    // const res = menuForm.value.id
    //     ? await window.api.sass.api.v1.menu.update(menuForm.value)
    //     : await window.api.sass.api.v1.menu.create(menuForm.value);
    // await message.success(res.msg);
    // show.value = false;
    // emit('save');
};

defineExpose({ open });
</script>

<style scoped></style>
