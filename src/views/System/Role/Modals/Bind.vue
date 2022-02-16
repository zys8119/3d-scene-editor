<template>
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
</template>

<script lang="ts" setup>
import { ArrowLeft, ArrowRight } from '@element-plus/icons'
import type { TreeListItemCustom } from 'wisdom-plus'
import PersonTree from '@/components/Person/PersonTree.vue'
import { hasGotten } from '@/components/Person/data'

const api = window.api.v1.system.role
const emit = defineEmits<{
    (e: 'refresh'): void
}>()

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

const handleBindSubmit = async() => {
    await api.roleCreate(bindId.value, bindPersons.value.map(item => item.id))
    ElMessage({ message: '提交成功！', type: 'success' })
    emit('refresh')
    showBindModal.value = false
    hasGotten.value = new Set(['default'])
}

const open = async(id: number) => {
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

defineExpose({ open })
</script>

<style lang="less" scoped>
.arrow-space {
    height: 100%;
}
.wp-grid {
    flex: 1;
}
</style>