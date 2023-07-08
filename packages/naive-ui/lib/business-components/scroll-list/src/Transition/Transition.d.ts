import { BaseTransitionProps, FunctionalComponent, CSSProperties } from 'vue';
declare const TRANSITION = 'transition';
declare const ANIMATION = 'animation';
export interface TransitionProps extends BaseTransitionProps<Element> {
    style?: CSSProperties;
    class?: string[];
    name?: string;
    type?: typeof TRANSITION | typeof ANIMATION;
    css?: boolean;
    duration?:
        | number
        | {
              enter: number;
              leave: number;
          };
    enterFromClass?: string;
    enterActiveClass?: string;
    enterToClass?: string;
    appearFromClass?: string;
    appearActiveClass?: string;
    appearToClass?: string;
    leaveFromClass?: string;
    leaveActiveClass?: string;
    leaveToClass?: string;
    onMouseenter?: (e: MouseEvent) => void;
    onMouseleave?: (e: MouseEvent) => void;
}
export interface ElementWithTransition extends HTMLElement {
    _vtc?: Set<string>;
}
export declare const Transition: FunctionalComponent<TransitionProps>;
export declare const TransitionPropsValidators: any;
export declare function resolveTransitionProps(
    rawProps: TransitionProps
): BaseTransitionProps<Element>;
export declare function addTransitionClass(el: Element, cls: string): void;
export declare function removeTransitionClass(el: Element, cls: string): void;
interface CSSTransitionInfo {
    type: typeof TRANSITION | typeof ANIMATION | null;
    propCount: number;
    timeout: number;
    hasTransform: boolean;
}
export declare function getTransitionInfo(
    el: Element,
    expectedType?: TransitionProps['type']
): CSSTransitionInfo;
export declare function forceReflow(): number;
export {};
