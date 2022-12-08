<template>
    <wp-modal v-model="show" :title="`${isGw ? '绑定员工' : '绑定负责人'}`" width="600px">
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
    const res = await window.api.v1.system.staff.getUsers({disable_page: true}, {}, oId.value)
    list.value = res.data.list
    selected.value = (props.isGw && pId.value ?
        await window.api.v1.system.post.getPostStaff(pId.value) :
        await window.api.v1.system.staff.getOrgAdmin({disable_page: true}, {}, oId.value)
    ).data.list
}

// 保存
const submit = async() => {
    if (selected.value.length < 1) return WpToast.error('请至少选择一位人员')
    props.isGw && pId.value ?
        await window.api.v1.system.post.updatePostStaff(pId.value, selected.value.map(v => v.id)) :
        await window.api.v1.system.staff.updateOrgAdmin(selected.value.map(v => v.id), oId.value)
    await WpToast.success('操作成功')
    show.value = false
    emit('save')
}

defineExpose({open})
</script>

<style scoped>

</style>