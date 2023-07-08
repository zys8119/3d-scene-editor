import { PropType, Ref } from 'vue';
export declare const layoutSiderInjectionKey: globalThis.InjectionKey<{
    collapsedRef: Ref<boolean>;
    collapseModeRef: Ref<'transform' | 'width'>;
}>;
export declare const positionProp: {
    readonly type: PropType<'static' | 'absolute'>;
    readonly default: 'static';
};
export interface LayoutInst {
    scrollTo: ((options: ScrollToOptions) => void) &
        ((x: number, y: number) => void);
}
export type LayoutSiderInst = LayoutInst;
