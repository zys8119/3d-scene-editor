import { ComputedRef, Ref, Slots } from 'vue';
import type { MergedTheme } from '../../_mixins';
import type { ColorPickerTheme } from '../styles';
import type { RenderLabel } from './interface';
export declare const colorPickerInjectionKey: globalThis.InjectionKey<{
    themeRef: ComputedRef<MergedTheme<ColorPickerTheme>>;
    colorPickerSlots: Slots;
    renderLabelRef: Ref<RenderLabel | undefined>;
}>;
