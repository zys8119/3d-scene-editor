import { Ref, ComponentPublicInstance } from 'vue';
import { MergedTheme } from '../../../_mixins/use-theme';
import { TourTheme } from '../styles';
export interface StepsInfo {
    title: string;
    description: string;
    target: any;
    placement?: string;
}
export interface StepInfo {
    title: string;
    description: string;
    placement?: string;
    x: number;
    y: number;
    boxWidth: number;
    boxHeight: number;
    boxX: number;
    boxY: number;
}
export type TourBodyInjection = Ref<
    HTMLElement | ComponentPublicInstance | null
> | null;
export declare const tourBodyInjectionKey: globalThis.InjectionKey<TourBodyInjection>;
export interface TourInjection {
    getMousePosition: () => {
        x: number;
        y: number;
    } | null;
    mergedClsPrefixRef: Ref<string>;
    mergedThemeRef: Ref<MergedTheme<TourTheme>>;
    isMountedRef: Ref<boolean>;
    appearRef: Ref<boolean | undefined>;
    transformOriginRef: Ref<'mouse' | 'center'>;
}
export declare const tourInjectionKey: globalThis.InjectionKey<TourInjection>;
