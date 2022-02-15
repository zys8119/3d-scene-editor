<template>
    <wp-modal
        v-model="showMenuModal"
        title="角色权限设置"
        width="800px"
        :overlay="{
            zIndex: 2000
        }"
    >
        <el-form label-width="150px">
            <el-form-item label="权限设置" required>
                <el-cascader-panel
                    v-model="optionsChoose"
                    :options="options"
                    :props="{
                        multiple: true,
                        emitPath: false
                    }"
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
import { asyncRoutes } from '@/router'
import type { CascaderOption } from 'element-plus'
import type { RouteRecordRaw } from 'vue-router'

const api = window.api.v1.system.role

/**
 * 角色权限设置
 */
const showMenuModal = ref(false)
const routesMap = (routes: RouteRecordRaw[]): CascaderOption[] => {
    return routes.map(route => {
        return {
            value: String(route.name),
            label: String(route.meta?.title || route.name),
            children: route.children ? routesMap(route.children) : undefined
        }
    })
}
const options = routesMap(asyncRoutes)
const optionsChoose = ref<string[]>([])

const handleMenuSubmit = () => {
    showMenuModal.value = false
    // hasGotten.value = new Set()
}

const open = async(id: number) => {
    showMenuModal.value = true
    const res = await api.menuList(id)
    optionsChoose.value = res.data.menus
}

defineExpose({ open })
</script>