<template>
    <div class="page-layout">
        <wp-space :size="15" vertical :item-style="{
            common: {
                width: '100%',
                overflow: 'hidden'
            }
        }" v-bind="spaceProps">
            <div class="page-layout-top">
                <div class="page-layout-form" @keydown.enter="handleQuery(true, true)">
                    <wp-space :vertical="store.isH5">
                        <el-input
                            v-model="formData[field]"
                            :placeholder="form?.placeholder"
                            clearable
                        />
                        <slot name="form" :formData="formData" />
                        <el-button type="primary" @click="handleQuery(true, true)">
                            搜索
                        </el-button>
                        <el-button v-if="!form?.hideReset" @click="reset">
                            重置
                        </el-button>
                    </wp-space>
                </div>
                <div class="page-layout-buttons">
                    <wp-space :vertical="store.isH5">
                        <slot name="buttons" />
                        <el-button v-if="showCheckedDelete" type="danger" :disabled="selections.length === 0" @click="handleDeleteSelect">
                            批量删除
                        </el-button>
                    </wp-space>
                </div>
            </div>
            <div class="page-layout-table">
                <el-table
                    ref="tableRef"
                    :data="tableData"
                    border
                    stripe
                    row-key="id"
                    v-bind="tableProps"
                    @selection-change="handleSelectionChange"
                >
                    <el-table-column v-if="!table?.hideSelection" reserve-selection type="selection" width="55" align="center" />
                    <page-layout-columns
                        :slots="$slots"
                        :columns="columnsMap"
                    />
                    <slot />
                    <el-table-column v-if="!table?.hideHandle" v-slot="scope" label="操作" align="center">
                        <wp-space justify="center" :vertical="store.isH5">
                            <slot name="handle" v-bind="scope" />
                            <el-button v-if="showDelete" type="danger" size="small" @click="handleDelete(scope.row)">
                                删除
                            </el-button>
                            <slot name="handle-suffix" v-bind="scope" />
                        </wp-space>
                    </el-table-column>
                </el-table>
                <wp-x-scroll class="page-layout-pagination" smooth>
                    <wp-pagination
                        v-model:page="page.page"
                        v-model:size="page.size"
                        :sizes="[10, 20, 40, 60, 100]"
                        :total="total"
                        :layout="['total', 'sizes', 'prev', 'pager', 'next', 'jumper']"
                        :space-props="{
                            justify: 'right'
                        }"
                    />
                </wp-x-scroll>
            </div>
        </wp-space>
    </div>
</template>

<script lang="ts">
import type { SpaceProps } from 'wisdom-plus'
import { Dialog } from 'wisdom-plus'
import useStore from '@/store/modules/main'
import { PropType } from 'vue'
import PageLayoutColumns from '../PageLayout/PageLayoutColumns'

export default defineComponent({
    name: 'PageLayout',
    components: {
        PageLayoutColumns
    },
    props: {
        form: Object as PropType<{
            field?: string,
            placeholder?: string,
            queryAfterReset?: boolean,
            hideReset?: boolean
        }>,
        showCheckedDelete: {
            type: Boolean,
            default: true
        },
        showDelete: {
            type: Boolean,
            default: true
        },
        total: {
            type: Number,
            default: 0
        },
        data: {
            type: Array as PropType<unknown[]>,
            required: true
        },
        table: {
            type: Object as PropType<{
                props?: ExtractProps<typeof ElTable> & Record<string, any>,
                columns?: (ExtractProps<typeof ElTableColumn> & Record<string, any>)[],
                hideSelection?: boolean,
                hideHandle?: boolean,
                keepSelection?: boolean
            }>,
            default: () => ({
                props: {},
                columns: [],
                hideSelection: false,
                hideHandle: false,
                keepSelection: false
            })
        },
        delete: Function as PropType<(items: any[]) => Promise<unknown>>,
        spaceProps: {
            type: Object as PropType<Partial<SpaceProps>>,
            default: () => ({})
        },
        queryOnActive: {
            type: Boolean,
            default: true
        }
    },
    emits: {
        query: (formData: Record<string, any>, page: { page: number, size: number }) => {
            void formData
            void page
            return true
        },
        'update:data': (data: unknown[]) => {
            return Array.isArray(data)
        }
    },
    setup(props, { emit }) {
        const store = useStore()

        const field = computed(() => props.form?.field || 'search')

        const page = reactive({
            page: 1,
            size: 20
        })

        const tableRef = ref<InstanceType<typeof ElTable> | null>(null)

        const columnsMap = computed(() => {
            const columnsNew = props.table.columns || []
            return columnsNew.map(column => {
                return {
                    ...column,
                    map: column.prop || Symbol('prop'),
                    name: `table-${column.prop}`
                }
            })
        })

        /**
         * 搜索表单
         */

        const formData = ref<Record<string, any>>({})

        const selections = ref<unknown[]>([])

        const handleSelectionChange = (currentSelections: unknown[]) => {
            selections.value = currentSelections
        }

        const formDataBackup = ref<Record<string, any>>({})
        const handleQuery = (resetPage = true, backup = false, refresh = false) => {
            if (resetPage) page.page = 1
            if (backup) formDataBackup.value = { ...formData.value }
            if (!refresh && !props.table?.keepSelection) {
                tableRef.value?.clearSelection()
            }
            emit('query', formDataBackup.value, page)
        }

        const reset = () => {
            for (const item in formData.value) {
                formData.value[item] = null
            }
            if (props.form?.queryAfterReset) {
                page.size = 20
                handleQuery(true, true)
            }
        }

        /**
         * 表格
         */

        const tableData = useVModel(props, 'data', emit, {
            passive: true,
            deep: true
        })

        const handleDelete = async(row: unknown) => {
            await Dialog({
                content: '确定要删除本条记录吗？',
                confirmProps: {
                    type: 'danger',
                    size: 'small'
                },
                cancelProps: {
                    size: 'small'
                }
            })
            await props.delete?.([row])
            handleQuery(false)
        }

        const handleDeleteSelect = async() => {
            await Dialog({
                content: '确定要删除选中的记录吗？',
                confirmProps: {
                    type: 'danger',
                    size: 'small'
                },
                cancelProps: {
                    size: 'small'
                }
            })
            await props.delete?.(selections.value)
            tableRef.value?.clearSelection()
            handleQuery(false)
        }

        onActivated(() => {
            if (props.queryOnActive) handleQuery(false, false, true)
        })
        if (!props.queryOnActive) handleQuery()

        /**
         * 分页
         */
        watch(() => page.page, () => {
            handleQuery(false)
        })
        watch(() => page.size, () => {
            handleQuery()
        })

        const tableProps = computed<any>(() => {
            return props.table?.props
        })

        return {
            tableRef,
            store,
            field,
            columnsMap,
            handleSelectionChange,
            reset,
            tableData,
            formData,
            selections,
            handleDelete,
            handleDeleteSelect,
            handleQuery,
            tableProps,
            page,
            refresh: (resetPage = false, backup?: boolean) => handleQuery(resetPage, backup, true),
            getSelections: () => selections.value
        }
    },
    expose: ['refresh', 'getSelections']
})
</script>

<style lang="less" scoped>
.page-layout {
    &-top {
        display: flex;
        background-color: #fff;
        padding: 15px;
    }
    &-form {
        flex: 1;
        overflow: hidden;
        margin-right: 20px;
        .el-button {
            min-width: 80px;
        }
        .el-input {
            max-width: 240px;
        }
    }
    &-table {
        background-color: #fff;
        padding: 15px;
        .el-table {
            --el-table-header-bg-color: rgb(246, 248, 253);
            --el-table-header-text-color: #333;
            --el-table-text-color: #666;
        }
    }
    &-pagination {
        margin-top: 15px;
        .el-pagination {
            --el-pagination-button-disabled-bg-color: transparent;
            --el-pagination-bg-color: transparent;
            justify-content: end;
        }
    }
}
</style>