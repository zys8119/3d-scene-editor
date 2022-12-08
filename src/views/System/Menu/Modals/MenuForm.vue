<template>
    <wp-modal
        v-model="showModal"
        width="800px"
        :title="!menuRef ? '新增菜单' : '编辑菜单'"
        :overlay="{
            zIndex: 100
        }"
    >
        <wp-pro-form
            ref="formRef"
            v-model="formData"
            :schemas="schemas"
            labelWidth="150px"
            @submit="handleSubmit"
        />
        <template #footer>
            <wp-space justify="center">
                <el-button @click="showModal = false">取消</el-button>
                <el-button type="primary" @click="formRef?.submit()">确定</el-button>
            </wp-space>
        </template>
    </wp-modal>
</template>

<script lang="ts" setup>
import { CascaderMenu, WpCascader } from 'wisdom-plus'
import { views } from '@/config/configHooks'
import SelectOptionVue from '@/components/SelectOption.vue'
import IconSelect from '@/components/IconSelect.vue'
import {Menu} from '@/api/typing'

const emit = defineEmits<{
    (e: 'refresh'): void
}>()

const props = defineProps<{
    menus: Menu[]
}>()

const api = window.api.v1.system.menu

const showModal = ref(false)

const formRef = ref<DataFormInstance | null>(null)
const formData = ref<Partial<Menu>>({})

const viewsKey = Object.keys(views).map(item => ({
    label: item.replace(/^\.\.\/views/, ''),
    value: item.replace(/^\.\.\/views/, '')
})).filter(item => !item.value.includes('Modal'))
const schemas = computed<Schemas<Menu>>(() => [
    {
        prop: 'name',
        label: '名称',
        component: ElInput,
        required: true
    },
    {
        prop: 'title',
        label: '标题',
        component: ElInput,
        required: true
    },
    {
        prop: 'router',
        label: '路径 / Url',
        component: ElInput,
        required: true
    },
    {
        prop: 'components',
        label: '组件',
        component: SelectOptionVue,
        componentProps: {
            options: viewsKey,
            filterable: true,
            clearable: true
        },
    },
    {
        prop: 'redirect',
        label: '重定向',
        component: ElInput
    },
    {
        prop: 'order',
        label: '排序号',
        component: ElInputNumber,
        componentProps: {
            controlsPosition: 'right'
        } as ExtractProps<typeof ElInputNumber>,
        required: true
    },
    {
        prop: 'parent_id',
        label: '父级',
        component: WpCascader,
        componentProps: {
            size: 'small',
            menus: props.menus as unknown[],
            props: {
                key: 'id',
                title: 'name'
            },
            clearable: true,
            disabled: true
        } as ExtractProps<typeof WpCascader>
    },
    {
        prop: 'is_hide',
        label: '隐藏',
        component: ElSwitch,
        required: true
    },
    {
        prop: 'is_hide_in_tab',
        label: '在页签中隐藏',
        component: ElSwitch,
        required: true
    },
    {
        prop: 'is_fixed_in_tab',
        label: '在页签中固定',
        component: ElSwitch,
        required: true
    },
    {
        prop: 'is_enabled',
        label: '是否启用',
        component: ElSwitch,
        required: true
    },
    {
        prop: 'icon',
        label: '图标',
        component: IconSelect,
    },
    {
        prop: 'description',
        label: '描述',
        component: ElInput,
        componentProps: {
            type: 'textarea'
        }
    }
])

const parentRef = ref<null | Menu>(null)
const menuRef = ref<null | Menu>(null)
const open = (menu?: Menu | CascaderMenu, parent?: Menu | CascaderMenu) => {
    showModal.value = true
    if (!menu) {
        formData.value = {
            parent_id: parent?.id,
            is_hide: false,
            is_hide_in_tab: false,
            is_fixed_in_tab: false,
            is_enabled: true
        } as Menu
        parentRef.value = parent as Menu
        menuRef.value = null
    } else {
        formData.value = {
            ...menu
        } as Menu
        parentRef.value = null
        menuRef.value = menu as Menu
    }
}

const handleSubmit = async() => {
    if (!menuRef.value) {
        await api.post(formData.value)
    } else {
        await api.put(menuRef.value.id, formData.value)
    }
    ElMessage({
        message: '提交成功',
        type: 'success'
    })
    emit('refresh')
    showModal.value = false
}

defineExpose({ open })
</script>

<style scoped lang="less">
:deep(.el-select) {
    width: 100%!important;
}
:deep(.wp-cascader) {
    width: 100%!important;
}
</style>