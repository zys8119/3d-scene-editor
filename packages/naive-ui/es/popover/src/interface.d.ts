import { Ref, CSSProperties, VNode } from 'vue';
export type PopoverTrigger = 'click' | 'hover' | 'focus' | 'manual';
export interface PopoverInst {
    syncPosition: () => void;
    setShow: (value: boolean) => void;
}
export type PopoverBodyInjection = Ref<HTMLElement | null> | null;
export declare const popoverBodyInjectionKey: globalThis.InjectionKey<PopoverBodyInjection>;
export type InternalRenderBody = (
    className: any,
    ref: Ref<HTMLElement | null>,
    style: Ref<CSSProperties>,
    onMouseenter: (e: MouseEvent) => void,
    onMouseleave: (e: MouseEvent) => void
) => VNode;
