import { Component, VNode } from 'vue';
export interface Options {
    prop: string;
    label: string;
    required?: boolean;
    show?: boolean;
    requiredMessage?: string;
    componentProps?: Record<string, any>;
    component?: Component | VNode | (abstract new (...args: any) => any);
    columns?: Columns[];
    ruleType?: string;
    span: number;
}
export interface Columns {
    label: string;
    value: number | string | undefined;
}
