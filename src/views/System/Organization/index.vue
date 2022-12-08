<template>
    <div class="organization">
        <div class="organization-tree">
            <organization-select ref="selectRef" v-model="active" @editBtn="editBtn" />
        </div>
        <div class="organization-form">
            <wp-space class="organization-form-title" align="center" justify="space-between">
                {{ originFormData.name }}
                <wp-button size="medium" type="primary" @click="addCompany">新建公司</wp-button>
            </wp-space>
            <div class="organization-form-content">
                <wp-form label-width="100px">
                    <wp-form-item :label="`${currentType}编码:`">{{originFormData.code}}</wp-form-item>
                    <wp-form-item :label="`${currentType}名称:`">{{originFormData.name}}</wp-form-item>
                    <wp-form-item label="部门负责人:">{{originFormData.managers.length > 0 ? originFormData.managers.map(v => v.name).join(',') : '未设置'}}</wp-form-item>
                    <wp-form-item label="角色:">{{originFormData.roles.length > 0 ? originFormData.roles.map(v => v.name).join(',') : '未设置'}}</wp-form-item>
                    <wp-form-item label="上级:">{{originFormData.parent_name || '无'}}</wp-form-item>
                    <wp-form-item label="全路径:">{{originFormData.total_path}}</wp-form-item>
                    <wp-form-item label="是否启用:">
                        <el-tag v-if="originFormData.is_enabled" type="success">有效</el-tag>
                        <el-tag v-else type="danger">禁用</el-tag>
                    </wp-form-item>
                </wp-form>
            </div>
            <div v-if="active" class="organization-gw">
                <gw-table ref="gwTableRef" :oId="active"/>
            </div>
        </div>
    </div>
    <Add ref="addRef" @submit="doSuccess" />
    <BindAdmin ref="BindAdminRef" @save="doSuccess"/>
    <BindRole ref="BindRoleRef" @save="doSuccess"/>
</template>

<script lang="ts" setup>
import { Organization } from '@/api/v1/system/organization'
import { Dialog } from 'wisdom-plus'
import OrganizationSelect from '../components/OrganizationSelect.vue'
import Add from './Modals/Add.vue'
import {EditBtn} from '@/typings'
import BindAdmin from '@/views/System/Organization/Modals/BindAdmin.vue'
import BindRole from '@/views/System/Organization/Modals/BindRole.vue'
import GwTable from '@/views/System/Organization/components/GwTable.vue'

const active = ref<string>('')
const addRef = ref<InstanceType<typeof Add>>()
const selectRef = ref<InstanceType<typeof OrganizationSelect>>()

const originFormData = ref<Partial<Organization>>({})
const currentType = ref<string>('')
async function getDetail() {
    const res = await api.v1.system.organization.getDetail(active.value)
    originFormData.value = { ...res.data }
    currentType.value = originFormData.value.node_type === 'department' ? '部门' : '公司'
}
watch(active, () => {
    getDetail()
    gwTableRef.value?.refresh()
})

// 功能操作按钮
const editBtn = (row: EditBtn, info: Partial<Organization>) => {
    switch (row.index) {
        case 1 : addRef.value?.open(2, info.id); break
        case 2 : BindAdminRef.value?.open(info.id); break
        case 3 : addRef.value?.open(info.node_type === 'company' ? 1 : 2, info?.parent_id, info); break
        case 4 : handleRemove(info); break
        case 5 : BindRoleRef.value.open(info.id); break
    }
}

// 新建公司
const addCompany = () => {
    addRef.value?.open()
}

// 删除
async function handleRemove(info: Partial<Organization>) {
    await Dialog({
        content: `确认要删除这个${info.name}吗？`
    })
    await api.v1.system.organization.remove([info.id!])
    selectRef.value?.getList()
}

// 操作成功
const doSuccess = () => {
    selectRef.value?.getList(false)
    getDetail()
}

const BindAdminRef = ref()
const BindRoleRef = ref()
const gwTableRef = ref()
</script>

<style lang="less" scoped>
@gap: 20px;
.organization {
    display: flex;
    min-height: calc(100% - 40px);
    margin-top: 15px;
    .organization-tree,
    .organization-form {
        background-color: #fff;
        border-radius: 4px;
    }
    .organization-tree {
        width: 300px;
        margin-right: @gap;
        padding: 10px;
        box-sizing: border-box;
    }
    .organization-form {
        flex: 1;
        overflow: hidden;
        padding: 10px 15px;
        .organization-form-title {
            font-size: 14px;
            color: #666;
            padding: 0 10px;
        }
        .organization-form-content {
            border-top: 1px solid #eee;
            display: flex;
            justify-content: center;
            margin-top: 10px;
            .wp-form {
                padding: 20px 10px;
                width: 100%;
                max-width: 650px;
                .wp-form-item--default {
                    margin-bottom: 0;
                }
            }
        }
        .organization-gw {
            border-top: 1px solid #eeeeee;
        }
    }
}
</style>