import { UseVModelOptions } from '@vueuse/core';
import { Ref } from 'vue';
/**
 * 自动使用受控非受控模式
 */
export declare function useAutoControl<
    T extends Ref,
    P extends object,
    K extends keyof P,
    Name extends string
>(
    ref: T,
    props: P,
    key?: K,
    emit?: (name: Name, ...args: any[]) => void,
    options?: UseVModelOptions<P[K]>
): import('vue').WritableComputedRef<P[K] | undefined>;
