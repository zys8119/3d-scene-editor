<template>
    <wp-modal v-model="show" :show-close="false" width="600px">
        <wp-pro-person-key-transfer v-model="persons" :list="leftTree" :get-title="() => 'title'" />
        <template #footer>
            <wp-space justify="flex-end">
                <wp-button size="medium" plain @click="show = false">
                    取消
                </wp-button>
                <wp-button type="primary" size="medium" @click="handleSubmit">
                    保存
                </wp-button>
            </wp-space>
        </template>
    </wp-modal>
</template>

<script setup lang="ts">
import { Toast } from 'wisdom-plus'
import { User } from '@/api/typing'

const emit = defineEmits<{
    (e: 'submit'): void
}>()

const show = ref(false)
const leftTree = ref<User[]>([])
const persons = ref<string[]>([])
const currentId = ref<string>('')
async function open(id: string) {
    show.value = true
    currentId.value = id
    const res = await Promise.all([
        api.v1.system.user.get({}, { disable_page: true }),
        api.v1.system.staff.getUsers({}, { disable_page: true }, id)
    ])
    leftTree.value = res[0].data.list
    persons.value = res[1].data.list.map(item => item.id)
}
defineExpose({ open })

async function handleSubmit() {
    const res = await api.v1.system.staff.batchUpdate(currentId.value, persons.value)
    res.message && Toast.success(res.message)
    show.value = false
    emit('submit')
}
</script>