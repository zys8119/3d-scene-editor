import { Ref } from 'vue';
import type { MergedTheme } from '../../_mixins';
import type { DynamicInputTheme } from '../styles';
export interface DynamicInputInjection {
    mergedThemeRef: Ref<MergedTheme<DynamicInputTheme>>;
    keyPlaceholderRef: Ref<string | undefined>;
    valuePlaceholderRef: Ref<string | undefined>;
    placeholderRef: Ref<string | undefined>;
}
export declare const dynamicInputInjectionKey: globalThis.InjectionKey<DynamicInputInjection>;
export type OnUpdateValue = <T>(value: T[]) => void;
