import { PropType } from 'vue';
import { ColorPickerMode } from './utils';
interface ParsedColor {
    value: string;
    mode: ColorPickerMode | null;
    legalValue: string;
}
declare const _default: import('vue').DefineComponent<
    {
        clsPrefix: {
            type: StringConstructor;
            required: true;
        };
        mode: {
            type: PropType<ColorPickerMode>;
            required: true;
        };
        swatches: {
            type: PropType<string[]>;
            required: true;
        };
        onUpdateColor: {
            type: PropType<(value: string) => void>;
            required: true;
        };
    },
    {
        parsedSwatchesRef: globalThis.ComputedRef<ParsedColor[]>;
        handleSwatchSelect: (parsed: ParsedColor) => void;
        handleSwatchKeyDown: (e: KeyboardEvent, parsed: ParsedColor) => void;
    },
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {},
    string,
    import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
    Readonly<
        import('vue').ExtractPropTypes<{
            clsPrefix: {
                type: StringConstructor;
                required: true;
            };
            mode: {
                type: PropType<ColorPickerMode>;
                required: true;
            };
            swatches: {
                type: PropType<string[]>;
                required: true;
            };
            onUpdateColor: {
                type: PropType<(value: string) => void>;
                required: true;
            };
        }>
    >,
    {},
    {}
>;
export default _default;
