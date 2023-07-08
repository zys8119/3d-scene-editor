import { PropType } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
export declare const numberAnimationProps: {
    to: {
        type: NumberConstructor;
        default: number;
    };
    precision: {
        type: NumberConstructor;
        default: number;
    };
    showSeparator: BooleanConstructor;
    locale: StringConstructor;
    from: {
        type: NumberConstructor;
        default: number;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    onFinish: PropType<() => void>;
};
export type NumberAnimationProps = ExtractPublicPropTypes<
    typeof numberAnimationProps
>;
export interface NumberAnimationInst {
    play: () => void;
}
declare const _default: import('vue').DefineComponent<
    {
        to: {
            type: NumberConstructor;
            default: number;
        };
        precision: {
            type: NumberConstructor;
            default: number;
        };
        showSeparator: BooleanConstructor;
        locale: StringConstructor;
        from: {
            type: NumberConstructor;
            default: number;
        };
        active: {
            type: BooleanConstructor;
            default: boolean;
        };
        duration: {
            type: NumberConstructor;
            default: number;
        };
        onFinish: PropType<() => void>;
    },
    {
        play: () => void;
        formattedValue: globalThis.ComputedRef<{
            integer: string;
            decimal: string;
            decimalSeparator: string | undefined;
        }>;
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
            to: {
                type: NumberConstructor;
                default: number;
            };
            precision: {
                type: NumberConstructor;
                default: number;
            };
            showSeparator: BooleanConstructor;
            locale: StringConstructor;
            from: {
                type: NumberConstructor;
                default: number;
            };
            active: {
                type: BooleanConstructor;
                default: boolean;
            };
            duration: {
                type: NumberConstructor;
                default: number;
            };
            onFinish: PropType<() => void>;
        }>
    >,
    {
        active: boolean;
        duration: number;
        from: number;
        to: number;
        precision: number;
        showSeparator: boolean;
    },
    {}
>;
export default _default;
