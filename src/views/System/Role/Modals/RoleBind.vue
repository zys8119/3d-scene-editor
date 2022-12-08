<template>
    <wp-modal
        v-model="showBindModal"
        title="角色人员绑定"
        width="800px"
        :overlay="{
            zIndex: 200
        }"
    >
        <el-form label-width="150px">
            <el-form-item label="绑定人员" required>
                <wp-pro-person-transfer v-model="selectedList" :list="personList"/>
            </el-form-item>
        </el-form>
        <template #footer>
            <wp-space justify="center">
                <el-button @click="showBindModal = false">
                    取消
                </el-button>
                <el-button type="primary" @click="handleBindSubmit">
                    提交
                </el-button>
            </wp-space>
        </template>
    </wp-modal>
</template>

<script lang="ts" setup>
import type {User} from '@/api/typing'
const emit = defineEmits<{
    (e: 'save'): void
}>()
const showBindModal = ref(false)
const personList = ref<User[]>([])
const selectedList = ref<User[]>([])
const roleId = ref<string>('')

const open = async(id: string) => {
    showBindModal.value = true
    roleId.value = id
    const res = await window.api.v1.system.user.get({}, {disable_page: true})
    personList.value = res.data.list
    selectedList.value = (await window.api.v1.system.role.getRoleUsers(id)).data.users
}

const handleBindSubmit = async() => {
    if (selectedList.value.length < 1) return ElMessage.error('请至少选择一位用户')
    await window.api.v1.system.role.updateRoleUsers(roleId.value, selectedList.value.map(v => v.id))
    ElMessage.success('操作成功')
    showBindModal.value = false
    emit('save')
}

defineExpose({ open })
</script>

<style lang="less" scoped>
.arrow-space {
    height: 100%;
}
.wp-grid {
    flex: 1;
}
</style>