<template>
    <div class="staff">
        <div class="staff-tree">
            <organization-select ref="selectRef" v-model="active" :canEdit="false" @change="item => activeName = item.title || ''" />
        </div>
        <div class="staff-table">
            <wp-pro-data-page-layout
                ref="layoutRef"
                size="medium"
                :pagination-map="{ page: 'page_num', size: 'page_size', no_page: 'disable_page' }"
                :form="{
                    placeholder: '搜索账号名/使用者'
                }"
                :text="{
                    batchDelete: '删除'
                }"
                :table="{ columns, props: { scrollWidth: '1200px' } }"
                :apis="{
                    list: (...args) => active ? api.v1.system.staff.getUsers(...args, active) : {data: {total: 1, page_num: 1, page_size: 1, list: []}},
                    delete: api.v1.system.staff.remove
                }"
            >
                <template #table-avatar="{ row }">
                    <wp-avatar :src="row.avatar" size="45px" border-radius="4px">
                        <template #empty>
                            {{ row.name.slice(0, 1) }}
                        </template>
                    </wp-avatar>
                </template>
                <template #table-is_effect="{ row }">
                    {{ row.is_effect ? '在职' : '离职' }}
                </template>
                <template #buttons>
                    <wp-button key="add" size="medium" type="primary" @click="addRef?.open({ id: active, name: activeName === '全部' ? '' : activeName })">新增员工</wp-button>
                    <wp-button v-if="active" key="batch-add" size="medium" type="primary" @click="batchAddRef?.open(active)">批量新增</wp-button>
                    <wp-button v-if="active" key="in" size="medium" plain :disabled="layoutRef?.selections.length === 0" @click="updateEffect(true)">在职</wp-button>
                    <wp-button v-if="active" key="out" size="medium" plain :disabled="layoutRef?.selections.length === 0" @click="updateEffect(false)">离职</wp-button>
                    <wp-button key="reset" size="medium" plain :disabled="layoutRef?.selections.length === 0" @click="resetPasswordRef?.open(layoutRef?.selections)">重置密码</wp-button>
                </template>
            </wp-pro-data-page-layout>
        </div>
    </div>
    <Add ref="addRef" @submit="layoutRef?.refresh()" />
    <BatchAdd ref="batchAddRef" @submit="layoutRef?.refresh(), selectRef?.getList()" />
    <ResetPassword ref="resetPasswordRef" @submit="layoutRef ? layoutRef.selections = [] : void 0" />
</template>

<script lang="ts" setup>
import { DataTableColumn, Toast } from 'wisdom-plus'
import OrganizationSelect from '../components/OrganizationSelect.vue'
import Add from './Modals/Add.vue'
import BatchAdd from './Modals/BatchAdd.vue'
import ResetPassword from './Modals/ResetPassword.vue'

// $refs
const batchAddRef = ref<InstanceType<typeof BatchAdd>>()
const addRef = ref<InstanceType<typeof Add>>()
const selectRef = ref<InstanceType<typeof OrganizationSelect>>()
const resetPasswordRef = ref<InstanceType<typeof ResetPassword>>()
const layoutRef = ref<InstanceType<typeof WpProDataPageLayout>>()

// organization
const active = ref<string>('')
const activeName = ref('')

// table
const columns = computed(() => {
    const columnsSchemas: DataTableColumn[] = [
        {
            type: 'index',
            label: '序号',
            width: '65px'
        },
        {
            prop: 'username',
            label: '工号'
        },
        {
            prop: 'name',
            label: '姓名'
        },
        // {
        //     prop: 'email',
        //     label: '邮箱'
        // },
        {
            prop: 'avatar',
            label: '头像',
            width: '100px'
        },
        {
            prop: 'mobile',
            label: '手机'
        },
        // {
        //     prop: '公司',
        //     label: '公司'
        // },
        // {
        //     prop: '部门',
        //     label: '部门'
        // },
        // {
        //     prop: '岗位',
        //     label: '岗位'
        // },
        {
            prop: 'is_effect',
            label: '状态',
            width: '100px',
            exclude: () => !active.value
        },
        {
            prop: 'created_at',
            label: '创建时间'
        }
    ]
    return columnsSchemas.map(item => {
        item.align = 'center'
        return item
    })
})

watch(active, () => layoutRef.value?.refresh(true))

async function updateEffect(is_effect: boolean) {
    if (!layoutRef.value || !active.value) return
    const res = await api.v1.system.staff.updateEffect(layoutRef.value.selections as string[], is_effect, active.value)
    res.message && Toast.success(res.message)
    layoutRef.value?.refresh()
    layoutRef.value.selections = []
}
</script>

<style lang="less" scoped>
@gap: 20px;
.staff {
    display: flex;
    min-height: calc(100% - 40px);
    margin-top: 15px;
    .staff-tree,
    .staff-table {
        background-color: #fff;
        border-radius: 4px;
    }
    .staff-tree {
        width: 300px;
        margin-right: @gap;
        padding: 10px;
        box-sizing: border-box;
    }
    .staff-table {
        flex: 1;
        overflow: hidden;
    }
    .wp-avatar {
        font-size: 14px !important;
    }
}
:deep(.wp-pro-page-layout-form) {
    .wp-input {
        width: 200px;
    }
}
</style>