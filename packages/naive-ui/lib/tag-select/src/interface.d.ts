import { Ref } from 'vue';
import { MergedTheme } from '../../_mixins';
import type { TagSelectTheme } from '../styles';
export interface TagSelectInjection {
    mergedThemeRef: Ref<MergedTheme<TagSelectTheme>>;
    mergedClsPrefixRef: Ref<string>;
}
export declare const tagSelectInjectionKey: globalThis.InjectionKey<TagSelectInjection>;
