import type { Component, VNode } from 'vue'
import type { GridItemProps } from 'wisdom-plus'

export type ColumnSchema = ExtractProps<typeof ElFormItem>
export type Schema<T extends string | object = string> = ColumnSchema & {
    prop: T extends string ? T : keyof T,
    label?: string,
    required?: boolean,
    defaultValue?: any,
    grid?: Partial<GridItemProps>,
    component?: Component | string | VNode,
    componentProps?: Record<string, any>,
    plain?: boolean,
    hide?: boolean,
    raw?: boolean,
    noVaild?: boolean,
    model?: string
} & Record<string, any>
export type Schemas<T extends string | object = string> = Schema<T>[]