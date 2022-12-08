<template>
    <div id="SMSPackage">
        <wp-pro-page-layout
            ref="wpProPageLayoutRef"
            v-model:data="tableData"
            :table="{ columns, hideSelection: true, props: {onEdit: edit, onDeleteBtn: deleteBtn, onRoleUserBtn: roleUserBtn, onRoleMenuRefBtn: roleMenuRefBtn} }"
            :apis="{
                list: api.v1.system.role.get
            }"
            :form="{placeholder: '请输入'}"
            :total="tableData.length"
            :showCheckedDelete="false"
        >
            <template #buttons>
                <wp-button type="primary" @click="openForm">新增角色</wp-button>
            </template>
            <template #table-is_enabled="{row}">
                {{row.is_enabled ? '有效' : '无效'}}
            </template>
        </wp-pro-page-layout>
        <!--        角色表单-->
        <RoleForm ref="RoleFormRef" @save="wpProPageLayoutRef?.refresh()"/>
        <!--        绑定人员-->
        <RoleBind ref="RoleBindRef" @save="wpProPageLayoutRef?.refresh()"/>
        <!--        权限设置-->
        <RoleMenu ref="RoleMenuRef" @save="wpProPageLayoutRef?.refresh()"/>
    </div>
</template>

<script lang="ts" setup>
import RoleForm from '@/views/System/Role/Modals/RoleForm.vue'
import RoleBind from '@/views/System/Role/Modals/RoleBind.vue'
import RoleMenu from '@/views/System/Role/Modals/RoleMenu.vue'

const tableData = ref<any>([])
const columns = ref([
    {label:'序号', number: true, align: 'center', width: 70},
    {label:'名称', prop:'name', align: 'center'},
    {label:'code', prop:'code', align: 'center'},
    {label:'是否有效', prop:'is_enabled', align: 'center'},
    {label:'操作', align: 'center', width: '350px', btns: [
        {name: '编辑', type: 'success', emit: 'edit', size: 'mini'},
        {name: '删除', type: 'danger', emit: 'deleteBtn', size: 'mini'},
        {name: '绑定人员', type: 'primary', emit: 'roleUserBtn', size: 'mini'},
        {name: '权限设置', type: 'primary', emit: 'roleMenuRefBtn', size: 'mini'},
    ]},
])

// 创建角色
const openForm = () => {
    RoleFormRef.value.open(true)
}

// 编辑角色
const edit = (row: any) => {
    RoleFormRef.value.open(true, row.row.id)
}

// 绑定人员
const roleUserBtn = (row: any) => {
    RoleBindRef.value.open(row.row.id)
}

// 权限设置
const roleMenuRefBtn = (row: any) => {
    RoleMenuRef.value.open(row.row.id)
}

// 删除角色
const deleteBtn = (row: any) => {
    ElMessageBox.confirm('确定删除?', '提示')
        .then(async() => {
            await window.api.v1.system.role.del([row.row.id])
            await ElMessage.success('删除成功')
            await wpProPageLayoutRef.value?.refresh()
        })
}

const RoleFormRef = ref()
const RoleBindRef = ref()
const RoleMenuRef = ref()
const wpProPageLayoutRef = ref()
</script>

<style scoped>

</style>