<template>
    <div class="wp-menu-manage">
        <WpProCascader
            v-model:menus="menus"
            v-model:expends="expends"
            show-dropdown
            :props="{
                key: 'id',
            }"
            :draggable="false"
            @add="({ parent }) => MenuFormRef?.open(undefined, parent)"
            @modify="(menu) => MenuFormRef?.open(menu)"
            @delete="(menu) => handleDelete(menu.id)"
        />
        <MenuForm ref="MenuFormRef" :menus="menus" @refresh="getList" />
    </div>
</template>

<script name="Menu" lang="ts" setup>
import MenuForm from '@/views/System/Menu/Modals/MenuForm.vue'
import {Menu} from '@/api/typing'

const api = window.api.v1.system.menu

const MenuFormRef = ref<InstanceType<typeof MenuForm> | null>(null)
const menus = ref<Menu[]>([])
const expends = ref<Menu['id'][]>([])

const init = ref(false)
const getList = () => {
    return api.tree().then(res => {
        menus.value = res.data.list
    })
}

onActivated(() => {
    if (!init.value) {
        init.value = true
        return
    }
    getList()
})
getList().then(() => {
    if (menus.value.length === 0) return
    expends.value = [menus.value[0].id]
    if (menus.value[0].children.length > 0) {
        expends.value.push(menus.value[0].children[0].id)
    }
})

const handleDelete = async(id: string) => {
    await api.del([id])
    ElMessage.success('删除成功')
    getList()
}
</script>