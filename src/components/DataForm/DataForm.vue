<template>
    <el-form
        ref="formRef"
        :validate-on-rule-change="false"
        v-bind="props"
        :model="data"
        :rules="rulesMap"
        @keydown.enter="(e: Event) => submit(true, e)"
    >
        <wp-g :default-span="24" v-bind="grid">
            <wp-gi v-for="schema in schemasMap" :key="schema.prop" v-bind="schema.grid">
                <template v-if="!schema.hide">
                    <el-form-item v-if="!schema.raw" :labelWidth="labelWidth" v-bind="schema.formItemProp" :prop="schema.noVaild ? '' : schema.prop" >
                        <slot v-if="'plain' in schema ? !schema.plain : !plain" :name="getSlotName(schema)">
                            <component
                                :is="schema.component"
                                v-bind="{
                                    ...schema.componentProps,
                                    [schema.model || 'modelValue']: data[schema.prop],
                                    [`onUpdate:${schema.model || 'modelValue'}`]: (value: unknown) => data[schema.prop] = value
                                }"
                            />
                        </slot>
                        <template v-else>
                            <slot :name="schema.prop + '_plain'">
                                {{ data[schema.prop] }}
                            </slot>
                        </template>
                    </el-form-item>
                    <slot v-else :name="schema.prop">
                        <component
                            :is="schema.component"
                            v-if="'plain' in schema ? !schema.plain : !plain"
                            v-bind="{
                                ...schema.componentProps,
                                [schema.model || 'modelValue']: data[schema.prop],
                                [`onUpdate:${schema.model || 'modelValue'}`]: (value: unknown) => data[schema.prop] = value
                            }"
                        />
                        <template v-else>
                            <slot :name="schema.prop + '_plain'">
                                {{ data[schema.prop] }}
                            </slot>
                        </template>
                    </slot>
                </template>
            </wp-gi>
        </wp-g>
        <slot />
    </el-form>
</template>

<script lang="ts">
import type { FormInstace } from '@/typings'
import type { PropType } from 'vue'
import type { Schema } from './interface'
import type { GridProps } from 'wisdom-plus'

export default defineComponent({
    name: 'ElDataForm',
    props: {
        enterToSubmit: {
            type: Boolean,
            default: false
        },
        schemas: {
            type: Array as PropType<Schema[]>,
            default: () => []
        },
        modelValue: {
            type: Object as PropType<Record<string, any>>,
            default: () => ({})
        },
        grid: Object as PropType<Partial<GridProps>>,
        initReset: Boolean,
        rules: Object as PropType<Record<string, any>>,
        props: Object as PropType<Record<string, any>>,
        labelWidth: [String, Number] as PropType<string | number>,
        plain: Boolean
    },
    emits: {
        submit: () => true,
        'update:modelValue': (value: Record<string, any>) => typeof value === 'object'
    },
    setup(props, { emit }) {
        const formRef = ref<FormInstace>(null)
        const data = useVModel(props, 'modelValue', emit, { passive: true, deep: true })
        const schemaHandle = (schema: Schema) => {
            const newSchema: Partial<Schema> = { ...schema }
            delete newSchema.grid
            delete newSchema.componentProps
            delete newSchema.component
            delete newSchema.raw
            delete newSchema.plain
            return newSchema as Record<string, any>
        }
        const schemasMap = computed(() => {
            return props.schemas.map(schema => {
                const componentProps = schema.componentProps || {}
                if (!('placehoder' in componentProps) && schema.label) componentProps.placeholder = `请输入${schema.label}`
                let component = schema.component
                if (component && typeof component === 'object') {
                    component = markRaw(component)
                }
                return {
                    ...schema,
                    component,
                    componentProps,
                    formItemProp: schemaHandle(schema)
                }
            })
        })
        const rulesMap = computed(() => {
            const newRules: Record<string, any> = {}
            props.schemas.forEach(schema => {
                newRules[schema.prop] = props.rules?.[schema.prop] || []
                if (schema.required) {
                    const rule = {
                        required: true,
                        message: `请输入${schema.label || ''}`
                    }
                    if (Array.isArray(newRules[schema.prop])) {
                        newRules[schema.prop].push(rule)
                    } else {
                        newRules[schema.prop] = [
                            newRules[schema.prop],
                            rule
                        ]
                    }
                }
            })
            return newRules
        })
        const reset = () => {
            formRef.value?.resetFields()
            for (const schema of props.schemas) {
                if (typeof schema.defaultValue === 'function') {
                    data.value[schema.prop] = schema.defaultValue()
                } else {
                    data.value[schema.prop] = schema.defaultValue
                }
            }
        }
        const submit = (isEnter = false, e?: Event) => {
            e?.preventDefault()
            if (isEnter && !props.enterToSubmit) return
            formRef.value?.validate(vaild => {
                if (!vaild) return
                emit('submit')
            })
        }
        const getSlotName = (schema: Schema) => {
            return schema.prop
        }
        if (props.initReset) reset()
        return {
            reset,
            submit,
            data,
            rulesMap,
            formRef,
            schemasMap,
            getSlotName
        }
    },
    expose: [
        'reset',
        'submit',
        'formRef'
    ]
})
</script>