<template>
    <wp-modal
        v-model="showMenuModal"
        title="角色权限设置"
        width="800px"
        :overlay="{
            zIndex: 200
        }"
    >
        <el-form label-width="150px">
            <el-form-item label="权限设置" required>
                <wp-pro-cascader
                    v-model="optionsChoose"
                    :menus="menus"
                    show-dropdown
                    :props="{
                        key: 'id',
                        title: 'name'
                    }"
                    :editable="false"
                    use-checkbox
                    preset="compact"
                />
            </el-form-item>
        </el-form>
        <template #footer>
            <wp-space justify="center">
                <el-button @click="showMenuModal = false">
                    取消
                </el-button>
                <el-button type="primary" @click="handleMenuSubmit">
                    提交
                </el-button>
            </wp-space>
        </template>
    </wp-modal>
</template>

<script lang="ts" setup>
import type { Menu } from '@/api/typing'

const api = window.api.v1.system.role

const menus = ref<Menu[]>([])
const activeId = ref<string>('')

/**
 * 角色权限设置
 */
const showMenuModal = ref(false)
const optionsChoose = ref<string[]>([])

const handleMenuSubmit = async() => {
    if (optionsChoose.value.length < 1) return ElMessage.error('请至少勾选一个菜单数据')
    await api.updateRolePerms(activeId.value, optionsChoose.value)
    ElMessage({ message: '提交成功！', type: 'success' })
    showMenuModal.value = false
}

const open = async(id: string) => {
    showMenuModal.value = true
    activeId.value = id
    window.api.v1.system.menu.tree().then(res => {
        menus.value = res.data.list
    })
    api.getRolePerms(id)
        .then(res => {
            optionsChoose.value = res.data.menus
        })
}

defineExpose({ open })
</script>

<style lang="less" scoped>
.wp-pro-cascader {
    flex: 1;
    overflow: auto;
    font-size: 13px;
    :deep(.wp-pro-cascader--item),
    :deep(.wp-checkbox--label) {
        font-size: 13px;
        // color: #555;
    }
}
</style>