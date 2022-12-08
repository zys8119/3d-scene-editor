<template>
    <wp-modal v-model="show" title="绑定角色" width="600px">
        <wp-pro-person-transfer v-model="selected" :list="list" />
        <template #footer>
            <wp-space justify="flex-end">
                <wp-button size="medium" plain @click="show = false">
                    取消
                </wp-button>
                <wp-button type="primary" size="medium" @click="submit">
                    保存
                </wp-button>
            </wp-space>
        </template>
    </wp-modal>
</template>

<script lang="ts" setup>
import {Staff} from '@/api/typing'
import {WpToast} from 'wisdom-plus'

const emit = defineEmits(['save'])
const props = defineProps<{
    isGw?: boolean
}>()

const show = ref(false)
const oId = ref<string>('')
const pId = ref<string | undefined>('')
const list = ref<Staff[]>([])
const selected = ref<Staff[]>([])

const open = (id: string, post?: string) => {
    oId.value = id
    pId.value = post
    show.value = true
    init()
}

// 获取人员
const init = async() => {
    const res = await window.api.v1.system.role.get({}, {disable_page: true})
    list.value = res.data.list
    selected.value = (props.isGw && pId.value ?
        await window.api.v1.system.post.getPostRoles(pId.value) :
        await window.api.v1.system.organization.getOrgRoles(oId.value)
    ).data.roles
}

// 保存
const submit = async() => {
    if (selected.value.length < 1) return WpToast.error('请至少选择一种角色')
    props.isGw && pId.value ?
        await window.api.v1.system.post.updatePostRoles(pId.value, selected.value.map(v => v.id)) :
        await window.api.v1.system.organization.updateOrgRoles(oId.value, selected.value.map(v => v.id))
    await WpToast.success('操作成功')
    show.value = false
    emit('save')
}

defineExpose({open})
</script>

<style scoped>

</style>