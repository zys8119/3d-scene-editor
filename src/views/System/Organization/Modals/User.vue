<template>
    <wp-modal
        v-model="showModal"
        :title="isAdd ? '新增用户' : '修改用户'"
        width="500px"
        :overlay="{ zIndex: 2000 }"
    >
        <data-form
            ref="formRef"
            v-model="formData"
            label-width="120px"
            :schemas="schemas"
            @submit="handleSubmit"
        />
        <template #footer>
            <wp-space justify="center">
                <el-button @click="showModal = false">
                    取消
                </el-button>
                <el-button type="primary" @click="formRef?.submit()">
                    保存
                </el-button>
            </wp-space>
        </template>
    </wp-modal>
</template>

<script lang="ts" setup>
import type { TableUser, RegisterUser } from '@/api/v1/system/user'
import { hasGotten } from '@/components/Person/data'
import { mobilePhone } from '@/utils/pattern'

const api = window.api.v1.user
const props = defineProps<{
    id?: string | number | symbol
}>()
const emit = defineEmits<{
    (e: 'getOrganizationList'): void,
    (e: 'refresh'): void
}>()

/**
 * 新增用户
 */
const showModal = ref(false)
const formData = ref<Partial<RegisterUser | TableUser>>({})
const isAdd = ref(false)
const schemas = computed<Schemas<RegisterUser | TableUser>>(() => [
    {
        prop: isAdd.value ? 'name' : 'user_name',
        label: '姓名',
        component: ElInput,
        required: true
    },
    {
        prop: isAdd.value ? 'mobile_phone' : 'user_mobile_phone',
        label: '联系电话',
        component: ElInput,
        rules: [
            {
                required: true,
                pattern: mobilePhone,
                message: '请输入正确的联系电话'
            }
        ],
        required: true
    },
    // {
    //     prop: 'organization_id',
    //     label: '组织架构',
    //     component: ElCascader,
    //     componentProps: {
    //         options: organizations.value,
    //         props: {
    //             value: 'id',
    //             label: 'name',
    //             emitPath: false,
    //             checkStrictly: true
    //         }
    //     } as ExtractProps<typeof ElCascader>,
    //     hide: isAdd.value,
    //     required: true
    // }
])

/**
 * 提交表单
 */
const formRef = ref<DataFormInstance | null>(null)
const handleSubmit = async() => {
    if (isAdd.value) {
        await api.register({
            unit_id: Number(props.id),
            ...formData.value
        })
    } else {
        if (!formData.value.user_id) return
        await api.update(formData.value.user_id, formData.value)
    }
    ElMessage({
        message: '提交成功！',
        type: 'success'
    })
    emit('getOrganizationList')
    emit('refresh')
    showModal.value = false
    hasGotten.value = new Set()
}

const open = async(add = true, id?: number | string) => {
    if (add) {
        formData.value = {}
        isAdd.value = true
        showModal.value = true
    } else {
        if (!id) return
        isAdd.value = false
        showModal.value = true
        const res = await api.details(id)
        formData.value = res.data
    }
}

defineExpose({ open })
</script>