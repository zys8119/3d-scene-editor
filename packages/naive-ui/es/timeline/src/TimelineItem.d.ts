import { PropType } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
export declare const timelineItemProps: {
    time: PropType<string | number>;
    title: StringConstructor;
    content: StringConstructor;
    color: StringConstructor;
    lineType: {
        type: PropType<'default' | 'dashed'>;
        default: string;
    };
    type: {
        type: PropType<'default' | 'error' | 'info' | 'success' | 'warning'>;
        default: string;
    };
};
export type TimelineItemProps = ExtractPublicPropTypes<
    typeof timelineItemProps
>;
declare const _default: import('vue').DefineComponent<
    {
        time: PropType<string | number>;
        title: StringConstructor;
        content: StringConstructor;
        color: StringConstructor;
        lineType: {
            type: PropType<'default' | 'dashed'>;
            default: string;
        };
        type: {
            type: PropType<
                'default' | 'error' | 'info' | 'success' | 'warning'
            >;
            default: string;
        };
    },
    {
        mergedClsPrefix: globalThis.Ref<string>;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier': string;
                  '--n-circle-border': string;
                  '--n-icon-color': string;
                  '--n-content-font-size': string;
                  '--n-content-text-color': string;
                  '--n-line-color': string;
                  '--n-meta-text-color': string;
                  '--n-title-font-size': string;
                  '--n-title-font-weight': string;
                  '--n-title-margin': string;
                  '--n-title-text-color': string;
                  '--n-icon-size': string;
              }>
            | undefined;
        themeClass: globalThis.Ref<string> | undefined;
        onRender: (() => void) | undefined;
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
            time: PropType<string | number>;
            title: StringConstructor;
            content: StringConstructor;
            color: StringConstructor;
            lineType: {
                type: PropType<'default' | 'dashed'>;
                default: string;
            };
            type: {
                type: PropType<
                    'default' | 'error' | 'info' | 'success' | 'warning'
                >;
                default: string;
            };
        }>
    >,
    {
        type: 'default' | 'error' | 'info' | 'success' | 'warning';
        lineType: 'default' | 'dashed';
    },
    {}
>;
export default _default;
