<template>
    <page-layout
        ref="layoutRef"
        v-model:data="tableData"
        :form="{
            placeholder: '请输入角色关键字',
            queryAfterReset: true
        }"
        :table="{
            columns: tableColumns
        }"
        :total="total"
        :delete="handleDelete"
        @query="query"
    >
        <template #buttons>
            <el-button type="primary" :icon="Plus" @click="handleAdd">新建角色</el-button>
        </template>
        <template #handle="{ row }">
            <el-button type="success" size="small" @click="handleMotify(row.id)">编辑</el-button>
        </template>
        <template #handle-suffix="{ row }">
            <el-button type="primary" size="small" @click="handleBindMotify(row.id)">绑定人员</el-button>
            <el-button type="primary" size="small" @click="handleMenuMotify(row.id)">权限设置</el-button>
        </template>
        <template #table-valid="{ row }">
            {{ row.valid ? '是' : '否' }}
        </template>
    </page-layout>
    <wp-modal
        v-model="showModal"
        :title="isAdd ? '新建角色' : '编辑角色'"
        width="600px"
        :overlay="{
            zIndex: 2000
        }"
    >
        <data-form
            ref="formRef"
            v-model="formData"
            :schemas="schemas"
            label-width="150px"
            @submit="handleSubmit"
        />
        <template #footer>
            <wp-space justify="center">
                <el-button @click="showModal = false">
                    取消
                </el-button>
                <el-button type="primary" @click="formRef?.submit()">
                    提交
                </el-button>
            </wp-space>
        </template>
    </wp-modal>
    <wp-modal
        v-model="showBindModal"
        title="角色人员绑定"
        width="800px"
        :overlay="{
            zIndex: 2000
        }"
    >
        <el-form label-width="150px">
            <el-form-item label="绑定人员" required>
                <wp-g>
                    <wp-gi :span="10">
                        <PersonTree
                            ref="choosing"
                            v-model="bindChoosing"
                            :exclude="excludes"
                            no-filter-count
                        >
                            <template #checked="{ checked }">
                                已选：{{ checked?.length }} 人
                            </template>
                        </PersonTree>
                    </wp-gi>
                    <wp-gi :span="4">
                        <wp-space class="arrow-space" vertical align="center" justify="center">
                            <el-button :icon="ArrowRight" :disabled="bindChoosing.length === 0" @click="leftArrowClick" />
                            <el-button :icon="ArrowLeft" :disabled="bindPersonsChoosing.length === 0" @click="rightArrowClick" />
                        </wp-space>
                    </wp-gi>
                    <wp-gi :span="10">
                        <PersonTree
                            ref="personChoosing"
                            v-model="bindPersonsChoosing"
                            :list="bindPersons"
                            :handle-delete="handleDeleteAll"
                        />
                    </wp-gi>
                </wp-g>
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

<script name="Role" lang="ts" setup>
import { Plus, ArrowLeft, ArrowRight } from '@element-plus/icons'
import type { CascaderOption } from 'element-plus'
import type { TreeListItemCustom } from 'wisdom-plus'

import PersonTree from '@/components/Person/PersonTree.vue'

import { asyncRoutes } from '@/router'
import type { RouteRecordRaw } from 'vue-router'
import type { Detail, TableData } from '@/api/v1/system/role'

import { hasGotten } from '@/components/Person/data'

const api = window.api.v1.system.role
const layoutRef = ref<PageLayoutInstance | null>(null)

const tableData = ref<TableData[]>([])
const tableColumns: TableColumns<TableData> = [
    {
        prop: 'name',
        label: '角色名称'
    },
    {
        prop: 'datetime_created',
        label: '创建时间'
    },
    {
        prop: 'valid',
        label: '是否有效'
    }
]

const total = ref(0)
const query = async(form: { search?: string }, page: { page: number, size: number }) => {
    const res = await api.list(form, page)
    tableData.value = res.data.list
    total.value = res.data.total
}

const handleDelete = (items: TableData[]) => {
    return api.deleteSome(items.map(item => item.id))
}

/**
 * 修改新增角色
 */
const showModal = ref(false)
const isAdd = ref(false)
const formData = ref<Partial<Detail>>({
    valid: true
})
const formRef = ref<DataFormInstance | null>(null)

const schemas: Schemas<Detail> = [
    {
        prop: 'name',
        label: '角色名称',
        component: ElInput,
        required: true
    },
    {
        prop: 'valid',
        label: '角色是否有效',
        component: ElSwitch,
        required: true
    }
]

const handleAdd = () => {
    isAdd.value = true
    showModal.value = true
    formData.value = { valid: true }
}

const handleMotify = async(id: number) => {
    try {
        isAdd.value = false
        showModal.value = true
        const res = await api.details(id)
        formData.value = res.data
    } catch {
        showModal.value = false
    }
}

const handleSubmit = async() => {
    if (isAdd.value) {
        await api.create(formData.value)
    } else {
        if (!formData.value.id) return
        await api.update(formData.value.id, formData.value)
    }
    ElMessage({ message: '提交成功！', type: 'success' })
    layoutRef.value?.refresh()
    showModal.value = false
}

/**
 * 绑定人员
 */
const showBindModal = ref(false)
const bindId = ref(0)

const bindPersons = ref<TreeListItemCustom[]>([])
const bindChoosing = ref<(string | number | symbol)[]>([])
const bindPersonsChoosing = ref<(string | number | symbol)[]>([])

const choosing = ref()
const personChoosing = ref()

const updateCount = () => {
    nextTick(() => {
        personChoosing.value?.updateCount()
    })
}

const excludes = computed(() => {
    return bindPersons.value.map(item => item.id as number)
})

const leftArrowClick = () => {
    if (!choosing.value) return
    const excludesSet = new Set(excludes.value)
    const checkedItems = choosing.value.getCheckedItems()
    for (const item of checkedItems) {
        if (excludesSet.has(item.id)) continue
        bindPersons.value.push(item)
    }
    bindChoosing.value = []
    updateCount()
}

const rightArrowClick = () => {
    const bindPersonsChoosingSet = new Set(bindPersonsChoosing.value)
    bindPersons.value = bindPersons.value.filter(item => item.id && !bindPersonsChoosingSet.has(item.id))
    bindPersonsChoosing.value = []
    updateCount()
}

const handleDeleteAll = () => {
    bindPersons.value = []
    bindPersonsChoosing.value = []
    updateCount()
}

const handleBindMotify = async(id: number) => {
    try {
        bindChoosing.value = []
        bindPersonsChoosing.value = []
        showBindModal.value = true
        bindId.value = id
        const res = await api.roleList(id)
        bindPersons.value = res.data.map(item => item.user_info)
        nextTick(() => {
            updateCount()
        })
    } catch {
        showBindModal.value = false
    }
}

const handleBindSubmit = async() => {
    await api.roleCreate(bindId.value, bindPersons.value.map(item => item.id))
    ElMessage({ message: '提交成功！', type: 'success' })
    layoutRef.value?.refresh()
    showBindModal.value = false
    hasGotten.value = new Set(['default'])
}

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

const handleMenuMotify = async(id: number) => {
    showMenuModal.value = true
    const res = await api.menuList(id)
    optionsChoose.value = res.data.menus
}

const handleMenuSubmit = () => {
    showMenuModal.value = false
    // hasGotten.value = new Set()
}
</script>

<style lang="less" scoped>
.arrow-space {
    height: 100%;
}
</style>