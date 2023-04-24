<template>
    <n-modal
        v-model:show="show"
        preset="card"
        title="菜单权限"
        :bordered="false"
        :style="{ width: '60%' }"
        segmented
    >
        <n-scrollbar x-scrollable>
            <n-cascade-menu
                ref="cascadeMenuRef"
                v-model:tree="tree"
                v-model:selected="selected"
                :load-tree="loadTree"
                :load-selected="loadTreeSelected"
                selectable
                multiple
                propagation
                identifier="id"
                :tree-options="{
                    label: 'title',
                }"
            >
            </n-cascade-menu>
        </n-scrollbar>
        <template #footer>
            <n-space justify="center">
                <n-button @click="show = false">取消</n-button>
                <n-button @click="submit" type="primary">提交</n-button>
            </n-space>
        </template>
    </n-modal>
</template>

<script lang="ts" setup>
import { MenuListData } from '@/api/sass/api/v1/menu';
import { useMessage } from 'naive-ui';

const message = useMessage();

const show = ref(false);
const tree = ref<MenuListData[]>([]);
const selected = ref([]);
const rId = ref('');

const open = (id: string) => {
    selected.value = [];
    rId.value = id;
    show.value = true;
};

const loadTree = async () => {
    const res = await window.api.sass.api.v1.menu.tree.list();
    let data = res.data.data;
    const recombinationData = (list) => {
        for (let i = 0; i < list.length; i++) {
            const row = list[i];
            let permissions =
                row.permissions && row.permissions.length > 0
                    ? row.permissions.map((v) => ({
                          ...v,
                          title: v.name,
                          children: [],
                      }))
                    : [];
            row.children = row.children.concat(permissions);
            if (row.children.length > 0) recombinationData(row.children);
        }
    };
    recombinationData(data);
    return data;
};

const loadTreeSelected = async () => {
    const res = await window.api.sass.api.v1.authority.menu.role(rId.value);
    const buttons = res.data.buttonIds.map((v) => ({ id: v }));
    const menus = res.data.menuIds.map((v) => ({ id: v }));
    return [...buttons, ...menus];
};

const submit = async () => {
    const res = await window.api.sass.api.v1.authority.menu.create_or_update({
        buttonIds: selected.value
            .filter((v) => v.nodeType === 'button')
            .map((v) => v.id),
        menuIds: selected.value
            .filter((v) => v.nodeType === 'menu')
            .map((v) => v.id),
        roleId: rId.value,
    });
    await message.success(res.msg);
    show.value = false;
};

defineExpose({ open });
</script>

<style scoped></style>
