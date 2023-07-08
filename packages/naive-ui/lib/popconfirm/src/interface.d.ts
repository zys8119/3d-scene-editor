import { Ref } from 'vue';
import type { PopoverInst } from '../../popover';
import type { MergedTheme } from '../../_mixins';
import type { PopconfirmTheme } from '../styles';
import type { PopconfirmSetupProps } from './Popconfirm';
export type PopconfirmInst = PopoverInst;
export interface PopconfirmInjection {
    mergedThemeRef: Ref<MergedTheme<PopconfirmTheme>>;
    mergedClsPrefixRef: Ref<string>;
    props: PopconfirmSetupProps;
}
export declare const popconfirmInjectionKey: globalThis.InjectionKey<PopconfirmInjection>;
