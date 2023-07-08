import { Ref } from 'vue';
import { MergedTheme } from '../../../_mixins';
import { PopDialogTheme } from '../styles';
export interface PopDialogInjection {
    mergedThemeRef: Ref<MergedTheme<PopDialogTheme>>;
    mergedClsPrefixRef: Ref<string>;
}
export declare const popDialogInjectionKey: globalThis.InjectionKey<PopDialogInjection>;
