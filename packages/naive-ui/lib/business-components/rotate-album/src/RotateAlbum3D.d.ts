import { type PropType, type ExtractPropTypes } from 'vue';
export declare const rotateAlbum3dProps: {
    list: PropType<any[]>;
    xDeg: StringConstructor;
    size: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    hoverToStop: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export type RotateAlbum3dProps = ExtractPropTypes<typeof rotateAlbum3dProps>;
declare const RotateAlbum3d: import('vue').DefineComponent<
    {
        list: PropType<any[]>;
        xDeg: StringConstructor;
        size: {
            type: NumberConstructor;
            default: number;
        };
        duration: {
            type: NumberConstructor;
            default: number;
        };
        hoverToStop: {
            type: BooleanConstructor;
            default: boolean;
        };
    },
    {
        mergedClsPrefix: globalThis.ComputedRef<string>;
        cssVars: globalThis.ComputedRef<{
            '--n-rotate-album-3d-duration': string;
            '--n-rotate-album-3d-x-deg': string | undefined;
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
            xDeg: StringConstructor;
            size: {
                type: NumberConstructor;
                default: number;
            };
            duration: {
                type: NumberConstructor;
                default: number;
            };
            hoverToStop: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>
    >,
    {
        size: number;
        duration: number;
        hoverToStop: boolean;
    },
    {}
>;
export default RotateAlbum3d;
