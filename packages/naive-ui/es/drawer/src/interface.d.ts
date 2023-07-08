import { Ref } from 'vue';
import type { MergedTheme } from '../../_mixins';
import type { DrawerTheme } from '../styles';
export type DrawerBodyInjection = Ref<HTMLElement | null> | null;
export declare const drawerBodyInjectionKey: globalThis.InjectionKey<DrawerBodyInjection>;
export interface DrawerInjection {
    isMountedRef: Ref<boolean>;
    mergedThemeRef: Ref<MergedTheme<DrawerTheme>>;
    mergedClsPrefixRef: Ref<string>;
    doUpdateShow: (show: boolean) => void;
    doUpdateWidth: (value: number) => void;
    doUpdateHeight: (value: number) => void;
}
export declare const drawerInjectionKey: globalThis.InjectionKey<DrawerInjection>;
