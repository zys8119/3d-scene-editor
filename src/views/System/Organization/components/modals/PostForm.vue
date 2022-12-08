<template>
    <wp-modal v-model="show" title="岗位表单" width="500px">
        <wp-pro-form ref="formRef" v-model="formData" :schemas="schemas" label-width="100px" @submit="handleSubmit" />
        <template #footer>
            <wp-space justify="flex-end">
                <wp-button size="medium" plain @click="show = false">
                    取消
                </wp-button>
                <wp-button type="primary" size="medium" @click="formRef?.submit()">
                    保存
                </wp-button>
            </wp-space>
        </template>
    </wp-modal>
</template>

<script lang="ts" setup>
import {Post} from '@/api/typing'
import {Toast} from 'wisdom-plus'

const emit = defineEmits<{
    (e: 'submit'): void
}>()

const show = ref(false)

const formData = ref<Partial<Post>>({})
const schemas = computed<Schemas>(() => [
    {
        prop: 'name',
        label: '岗位名称',
        component: WpInput,
        required: true
    },
    {
        prop: 'order',
        label: '顺序',
        component: WpInput,
        required: true
    },
    {
        prop: 'is_enabled',
        label: '是否启用',
        component: WpSwitch,
    },
    {
        prop: 'code',
        label: '岗位编码',
        component: WpInput,
        componentProps: {
            placeholder: '非必填，不填则自动生成'
        }
    },
])

const info = ref<Partial<Post> | null>()
async function open(oId: string, row?: Post) {
    show.value = true
    formData.value = {
        node_id: oId,
        is_enabled: true
    }
    info.value = null
    if (row && row.id) {
        info.value = {...row}
        formData.value.name = info.value.name
        formData.value.code = info.value.code
        formData.value.order = info.value.order
    }
}

async function handleSubmit() {
    const res = info.value?.id ?
        await api.v1.system.post.put(info.value.id, formData.value) :
        await api.v1.system.post.post(formData.value)
    res.message && Toast.success(res.message)
    show.value = false
    emit('submit')
}

const formRef = ref<InstanceType<typeof WpProForm>>()
defineExpose({ open })
</script>