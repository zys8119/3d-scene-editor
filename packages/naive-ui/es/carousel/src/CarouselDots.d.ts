import type { PropType } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
declare const carouselDotsProps: {
    total: {
        type: NumberConstructor;
        default: number;
    };
    currentIndex: {
        type: NumberConstructor;
        default: number;
    };
    dotType: {
        type: PropType<'never' | 'dot' | 'line'>;
        default: string;
    };
    trigger: {
        type: PropType<'click' | 'hover'>;
        default: string;
    };
    keyboard: BooleanConstructor;
};
export type CarouselDotsProps = ExtractPublicPropTypes<
    typeof carouselDotsProps
>;
declare const _default: import('vue').DefineComponent<
    {
        total: {
            type: NumberConstructor;
            default: number;
        };
        currentIndex: {
            type: NumberConstructor;
            default: number;
        };
        dotType: {
            type: PropType<'never' | 'dot' | 'line'>;
            default: string;
        };
        trigger: {
            type: PropType<'click' | 'hover'>;
            default: string;
        };
        keyboard: BooleanConstructor;
    },
    {
        mergedClsPrefix: globalThis.ComputedRef<string>;
        dotEls: globalThis.Ref<HTMLElement[]>;
        handleKeydown: (e: KeyboardEvent, current: number) => void;
        handleMouseenter: (current: number) => void;
        handleClick: (current: number) => void;
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
            total: {
                type: NumberConstructor;
                default: number;
            };
            currentIndex: {
                type: NumberConstructor;
                default: number;
            };
            dotType: {
                type: PropType<'never' | 'dot' | 'line'>;
                default: string;
            };
            trigger: {
                type: PropType<'click' | 'hover'>;
                default: string;
            };
            keyboard: BooleanConstructor;
        }>
    >,
    {
        total: number;
        trigger: 'click' | 'hover';
        keyboard: boolean;
        currentIndex: number;
        dotType: 'never' | 'dot' | 'line';
    },
    {}
>;
export default _default;
