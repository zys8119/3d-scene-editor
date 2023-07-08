import { type PropType, type ExtractPropTypes } from 'vue';
export declare const rotateAlbumProps: {
    list: PropType<any[]>;
    duration: {
        type: NumberConstructor;
        default: number;
    };
    hoverToStop: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPath: BooleanConstructor;
    pathColor: {
        type: StringConstructor;
        default: string;
    };
    pathWidth: {
        type: NumberConstructor;
        default: number;
    };
};
export type RotateAlbumProps = ExtractPropTypes<typeof rotateAlbumProps>;
declare const RotateAlbum: import('vue').DefineComponent<
    {
        list: PropType<any[]>;
        duration: {
            type: NumberConstructor;
            default: number;
        };
        hoverToStop: {
            type: BooleanConstructor;
            default: boolean;
        };
        showPath: BooleanConstructor;
        pathColor: {
            type: StringConstructor;
            default: string;
        };
        pathWidth: {
            type: NumberConstructor;
            default: number;
        };
    },
    {
        elementRef: globalThis.Ref<HTMLElement | undefined>;
        path: globalThis.ComputedRef<string>;
        width: globalThis.Ref<number>;
        height: globalThis.Ref<number>;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        cssVars: globalThis.ComputedRef<{
            '--n-rotate-album-duration': string;
            '--n-rotate-album-offset-path': string;
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
        ExtractPropTypes<{
            list: PropType<any[]>;
            duration: {
                type: NumberConstructor;
                default: number;
            };
            hoverToStop: {
                type: BooleanConstructor;
                default: boolean;
            };
            showPath: BooleanConstructor;
            pathColor: {
                type: StringConstructor;
                default: string;
            };
            pathWidth: {
                type: NumberConstructor;
                default: number;
            };
        }>
    >,
    {
        duration: number;
        hoverToStop: boolean;
        showPath: boolean;
        pathColor: string;
        pathWidth: number;
    },
    {}
>;
export default RotateAlbum;
