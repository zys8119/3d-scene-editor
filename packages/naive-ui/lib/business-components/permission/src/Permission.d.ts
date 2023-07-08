import { ExtractPropTypes } from 'vue';
import { RouteLocationNormalizedLoaded } from 'vue-router';
export declare const permissionProps: {
    readonly useRoute: {
        readonly type: globalThis.PropType<() => RouteLocationNormalizedLoaded>;
    };
    readonly has: {
        readonly type: globalThis.PropType<string | string[]>;
    };
    readonly hasAll: {
        readonly type: globalThis.PropType<string | string[]>;
    };
};
export type PermissionProps = ExtractPropTypes<typeof permissionProps>;
declare const Permission: import('vue').DefineComponent<
    {
        readonly useRoute: {
            readonly type: globalThis.PropType<
                () => RouteLocationNormalizedLoaded
            >;
        };
        readonly has: {
            readonly type: globalThis.PropType<string | string[]>;
        };
        readonly hasAll: {
            readonly type: globalThis.PropType<string | string[]>;
        };
    },
    {
        hasComputed: globalThis.ComputedRef<boolean>;
        hasAllComputed: globalThis.ComputedRef<boolean>;
        permissions: {};
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
            readonly useRoute: {
                readonly type: globalThis.PropType<
                    () => RouteLocationNormalizedLoaded
                >;
            };
            readonly has: {
                readonly type: globalThis.PropType<string | string[]>;
            };
            readonly hasAll: {
                readonly type: globalThis.PropType<string | string[]>;
            };
        }>
    >,
    {},
    {}
>;
export default Permission;
