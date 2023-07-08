import { PropType } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
export declare const collapseItemProps: {
    readonly title: StringConstructor;
    readonly name: PropType<string | number>;
    readonly disabled: BooleanConstructor;
    readonly displayDirective: PropType<'show' | 'if'>;
};
export type CollapseItemProps = ExtractPublicPropTypes<
    typeof collapseItemProps
>;
declare const _default: import('vue').DefineComponent<
    {
        readonly title: StringConstructor;
        readonly name: PropType<string | number>;
        readonly disabled: BooleanConstructor;
        readonly displayDirective: PropType<'show' | 'if'>;
    },
    {
        rtlEnabled:
            | globalThis.Ref<
                  | import('../../config-provider/src/internal-interface').RtlItem
                  | undefined
              >
            | undefined;
        collapseSlots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        randomName: string;
        mergedClsPrefix: globalThis.Ref<string>;
        collapsed: globalThis.ComputedRef<boolean>;
        mergedDisplayDirective: globalThis.ComputedRef<'show' | 'if'>;
        arrowPlacement: globalThis.ComputedRef<'left' | 'right'>;
        handleClick(e: MouseEvent): void;
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
            readonly title: StringConstructor;
            readonly name: PropType<string | number>;
            readonly disabled: BooleanConstructor;
            readonly displayDirective: PropType<'show' | 'if'>;
        }>
    >,
    {
        readonly disabled: boolean;
    },
    {}
>;
export default _default;
