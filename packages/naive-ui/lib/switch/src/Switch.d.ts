import { CSSProperties, PropType } from 'vue';
import type { MaybeArray, ExtractPublicPropTypes } from '../../_utils';
import type { OnUpdateValue } from './interface';
export declare const switchProps: {
    readonly size: {
        readonly type: PropType<'small' | 'medium' | 'large'>;
        readonly default: 'medium';
    };
    readonly value: {
        readonly type: PropType<string | number | boolean | undefined>;
        readonly default: undefined;
    };
    readonly loading: BooleanConstructor;
    readonly defaultValue: {
        readonly type: PropType<string | number | boolean>;
        readonly default: false;
    };
    readonly disabled: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
    readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
    readonly checkedValue: {
        readonly type: PropType<string | number | boolean>;
        readonly default: true;
    };
    readonly uncheckedValue: {
        readonly type: PropType<string | number | boolean>;
        readonly default: false;
    };
    readonly railStyle: PropType<
        (params: {
            focused: boolean;
            checked: boolean;
        }) => string | CSSProperties
    >;
    readonly rubberBand: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    /** @deprecated */
    readonly onChange: PropType<MaybeArray<OnUpdateValue> | undefined>;
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'Switch',
            {
                iconColor: string;
                textColor: string;
                loadingColor: string;
                opacityDisabled: string;
                railColor: string;
                railColorActive: string;
                buttonBoxShadow: string;
                buttonColor: string;
                railBorderRadiusSmall: string;
                railBorderRadiusMedium: string;
                railBorderRadiusLarge: string;
                buttonBorderRadiusSmall: string;
                buttonBorderRadiusMedium: string;
                buttonBorderRadiusLarge: string;
                boxShadowFocus: string;
                buttonHeightSmall: string;
                buttonHeightMedium: string;
                buttonHeightLarge: string;
                buttonWidthSmall: string;
                buttonWidthMedium: string;
                buttonWidthLarge: string;
                buttonWidthPressedSmall: string;
                buttonWidthPressedMedium: string;
                buttonWidthPressedLarge: string;
                railHeightSmall: string;
                railHeightMedium: string;
                railHeightLarge: string;
                railWidthSmall: string;
                railWidthMedium: string;
                railWidthLarge: string;
            },
            any
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Switch',
                {
                    iconColor: string;
                    textColor: string;
                    loadingColor: string;
                    opacityDisabled: string;
                    railColor: string;
                    railColorActive: string;
                    buttonBoxShadow: string;
                    buttonColor: string;
                    railBorderRadiusSmall: string;
                    railBorderRadiusMedium: string;
                    railBorderRadiusLarge: string;
                    buttonBorderRadiusSmall: string;
                    buttonBorderRadiusMedium: string;
                    buttonBorderRadiusLarge: string;
                    boxShadowFocus: string;
                    buttonHeightSmall: string;
                    buttonHeightMedium: string;
                    buttonHeightLarge: string;
                    buttonWidthSmall: string;
                    buttonWidthMedium: string;
                    buttonWidthLarge: string;
                    buttonWidthPressedSmall: string;
                    buttonWidthPressedMedium: string;
                    buttonWidthPressedLarge: string;
                    railHeightSmall: string;
                    railHeightMedium: string;
                    railHeightLarge: string;
                    railWidthSmall: string;
                    railWidthMedium: string;
                    railWidthLarge: string;
                },
                any
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Switch',
                {
                    iconColor: string;
                    textColor: string;
                    loadingColor: string;
                    opacityDisabled: string;
                    railColor: string;
                    railColorActive: string;
                    buttonBoxShadow: string;
                    buttonColor: string;
                    railBorderRadiusSmall: string;
                    railBorderRadiusMedium: string;
                    railBorderRadiusLarge: string;
                    buttonBorderRadiusSmall: string;
                    buttonBorderRadiusMedium: string;
                    buttonBorderRadiusLarge: string;
                    boxShadowFocus: string;
                    buttonHeightSmall: string;
                    buttonHeightMedium: string;
                    buttonHeightLarge: string;
                    buttonWidthSmall: string;
                    buttonWidthMedium: string;
                    buttonWidthLarge: string;
                    buttonWidthPressedSmall: string;
                    buttonWidthPressedMedium: string;
                    buttonWidthPressedLarge: string;
                    railHeightSmall: string;
                    railHeightMedium: string;
                    railHeightLarge: string;
                    railWidthSmall: string;
                    railWidthMedium: string;
                    railWidthLarge: string;
                },
                any
            >
        >
    >;
};
export type SwitchProps = ExtractPublicPropTypes<typeof switchProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly size: {
            readonly type: PropType<'small' | 'medium' | 'large'>;
            readonly default: 'medium';
        };
        readonly value: {
            readonly type: PropType<string | number | boolean | undefined>;
            readonly default: undefined;
        };
        readonly loading: BooleanConstructor;
        readonly defaultValue: {
            readonly type: PropType<string | number | boolean>;
            readonly default: false;
        };
        readonly disabled: {
            readonly type: PropType<boolean | undefined>;
            readonly default: undefined;
        };
        readonly round: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
        readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
        readonly checkedValue: {
            readonly type: PropType<string | number | boolean>;
            readonly default: true;
        };
        readonly uncheckedValue: {
            readonly type: PropType<string | number | boolean>;
            readonly default: false;
        };
        readonly railStyle: PropType<
            (params: {
                focused: boolean;
                checked: boolean;
            }) => string | CSSProperties
        >;
        readonly rubberBand: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        /** @deprecated */
        readonly onChange: PropType<MaybeArray<OnUpdateValue> | undefined>;
        readonly theme: PropType<
            import('../../_mixins').Theme<
                'Switch',
                {
                    iconColor: string;
                    textColor: string;
                    loadingColor: string;
                    opacityDisabled: string;
                    railColor: string;
                    railColorActive: string;
                    buttonBoxShadow: string;
                    buttonColor: string;
                    railBorderRadiusSmall: string;
                    railBorderRadiusMedium: string;
                    railBorderRadiusLarge: string;
                    buttonBorderRadiusSmall: string;
                    buttonBorderRadiusMedium: string;
                    buttonBorderRadiusLarge: string;
                    boxShadowFocus: string;
                    buttonHeightSmall: string;
                    buttonHeightMedium: string;
                    buttonHeightLarge: string;
                    buttonWidthSmall: string;
                    buttonWidthMedium: string;
                    buttonWidthLarge: string;
                    buttonWidthPressedSmall: string;
                    buttonWidthPressedMedium: string;
                    buttonWidthPressedLarge: string;
                    railHeightSmall: string;
                    railHeightMedium: string;
                    railHeightLarge: string;
                    railWidthSmall: string;
                    railWidthMedium: string;
                    railWidthLarge: string;
                },
                any
            >
        >;
        readonly themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Switch',
                    {
                        iconColor: string;
                        textColor: string;
                        loadingColor: string;
                        opacityDisabled: string;
                        railColor: string;
                        railColorActive: string;
                        buttonBoxShadow: string;
                        buttonColor: string;
                        railBorderRadiusSmall: string;
                        railBorderRadiusMedium: string;
                        railBorderRadiusLarge: string;
                        buttonBorderRadiusSmall: string;
                        buttonBorderRadiusMedium: string;
                        buttonBorderRadiusLarge: string;
                        boxShadowFocus: string;
                        buttonHeightSmall: string;
                        buttonHeightMedium: string;
                        buttonHeightLarge: string;
                        buttonWidthSmall: string;
                        buttonWidthMedium: string;
                        buttonWidthLarge: string;
                        buttonWidthPressedSmall: string;
                        buttonWidthPressedMedium: string;
                        buttonWidthPressedLarge: string;
                        railHeightSmall: string;
                        railHeightMedium: string;
                        railHeightLarge: string;
                        railWidthSmall: string;
                        railWidthMedium: string;
                        railWidthLarge: string;
                    },
                    any
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Switch',
                    {
                        iconColor: string;
                        textColor: string;
                        loadingColor: string;
                        opacityDisabled: string;
                        railColor: string;
                        railColorActive: string;
                        buttonBoxShadow: string;
                        buttonColor: string;
                        railBorderRadiusSmall: string;
                        railBorderRadiusMedium: string;
                        railBorderRadiusLarge: string;
                        buttonBorderRadiusSmall: string;
                        buttonBorderRadiusMedium: string;
                        buttonBorderRadiusLarge: string;
                        boxShadowFocus: string;
                        buttonHeightSmall: string;
                        buttonHeightMedium: string;
                        buttonHeightLarge: string;
                        buttonWidthSmall: string;
                        buttonWidthMedium: string;
                        buttonWidthLarge: string;
                        buttonWidthPressedSmall: string;
                        buttonWidthPressedMedium: string;
                        buttonWidthPressedLarge: string;
                        railHeightSmall: string;
                        railHeightMedium: string;
                        railHeightLarge: string;
                        railWidthSmall: string;
                        railWidthMedium: string;
                        railWidthLarge: string;
                    },
                    any
                >
            >
        >;
    },
    {
        handleClick: () => void;
        handleBlur: () => void;
        handleFocus: () => void;
        handleKeyup: (e: KeyboardEvent) => void;
        handleKeydown: (e: KeyboardEvent) => void;
        mergedRailStyle: globalThis.ComputedRef<
            string | CSSProperties | undefined
        >;
        pressed: globalThis.Ref<boolean>;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        mergedValue: globalThis.ComputedRef<string | number | boolean>;
        checked: globalThis.ComputedRef<boolean>;
        mergedDisabled: globalThis.ComputedRef<boolean>;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier': string;
                  '--n-button-border-radius': string;
                  '--n-button-box-shadow': string;
                  '--n-button-color': string;
                  '--n-button-width': string;
                  '--n-button-width-pressed': string;
                  '--n-button-height': string;
                  '--n-height': string;
                  '--n-offset': string;
                  '--n-opacity-disabled': string;
                  '--n-rail-border-radius': string;
                  '--n-rail-color': string;
                  '--n-rail-color-active': string;
                  '--n-rail-height': string;
                  '--n-rail-width': string;
                  '--n-width': string;
                  '--n-box-shadow-focus': string;
                  '--n-loading-color': string;
                  '--n-text-color': string;
                  '--n-icon-color': string;
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
            readonly size: {
                readonly type: PropType<'small' | 'medium' | 'large'>;
                readonly default: 'medium';
            };
            readonly value: {
                readonly type: PropType<string | number | boolean | undefined>;
                readonly default: undefined;
            };
            readonly loading: BooleanConstructor;
            readonly defaultValue: {
                readonly type: PropType<string | number | boolean>;
                readonly default: false;
            };
            readonly disabled: {
                readonly type: PropType<boolean | undefined>;
                readonly default: undefined;
            };
            readonly round: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
            readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
            readonly checkedValue: {
                readonly type: PropType<string | number | boolean>;
                readonly default: true;
            };
            readonly uncheckedValue: {
                readonly type: PropType<string | number | boolean>;
                readonly default: false;
            };
            readonly railStyle: PropType<
                (params: {
                    focused: boolean;
                    checked: boolean;
                }) => string | CSSProperties
            >;
            readonly rubberBand: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            /** @deprecated */
            readonly onChange: PropType<MaybeArray<OnUpdateValue> | undefined>;
            readonly theme: PropType<
                import('../../_mixins').Theme<
                    'Switch',
                    {
                        iconColor: string;
                        textColor: string;
                        loadingColor: string;
                        opacityDisabled: string;
                        railColor: string;
                        railColorActive: string;
                        buttonBoxShadow: string;
                        buttonColor: string;
                        railBorderRadiusSmall: string;
                        railBorderRadiusMedium: string;
                        railBorderRadiusLarge: string;
                        buttonBorderRadiusSmall: string;
                        buttonBorderRadiusMedium: string;
                        buttonBorderRadiusLarge: string;
                        boxShadowFocus: string;
                        buttonHeightSmall: string;
                        buttonHeightMedium: string;
                        buttonHeightLarge: string;
                        buttonWidthSmall: string;
                        buttonWidthMedium: string;
                        buttonWidthLarge: string;
                        buttonWidthPressedSmall: string;
                        buttonWidthPressedMedium: string;
                        buttonWidthPressedLarge: string;
                        railHeightSmall: string;
                        railHeightMedium: string;
                        railHeightLarge: string;
                        railWidthSmall: string;
                        railWidthMedium: string;
                        railWidthLarge: string;
                    },
                    any
                >
            >;
            readonly themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Switch',
                        {
                            iconColor: string;
                            textColor: string;
                            loadingColor: string;
                            opacityDisabled: string;
                            railColor: string;
                            railColorActive: string;
                            buttonBoxShadow: string;
                            buttonColor: string;
                            railBorderRadiusSmall: string;
                            railBorderRadiusMedium: string;
                            railBorderRadiusLarge: string;
                            buttonBorderRadiusSmall: string;
                            buttonBorderRadiusMedium: string;
                            buttonBorderRadiusLarge: string;
                            boxShadowFocus: string;
                            buttonHeightSmall: string;
                            buttonHeightMedium: string;
                            buttonHeightLarge: string;
                            buttonWidthSmall: string;
                            buttonWidthMedium: string;
                            buttonWidthLarge: string;
                            buttonWidthPressedSmall: string;
                            buttonWidthPressedMedium: string;
                            buttonWidthPressedLarge: string;
                            railHeightSmall: string;
                            railHeightMedium: string;
                            railHeightLarge: string;
                            railWidthSmall: string;
                            railWidthMedium: string;
                            railWidthLarge: string;
                        },
                        any
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Switch',
                        {
                            iconColor: string;
                            textColor: string;
                            loadingColor: string;
                            opacityDisabled: string;
                            railColor: string;
                            railColorActive: string;
                            buttonBoxShadow: string;
                            buttonColor: string;
                            railBorderRadiusSmall: string;
                            railBorderRadiusMedium: string;
                            railBorderRadiusLarge: string;
                            buttonBorderRadiusSmall: string;
                            buttonBorderRadiusMedium: string;
                            buttonBorderRadiusLarge: string;
                            boxShadowFocus: string;
                            buttonHeightSmall: string;
                            buttonHeightMedium: string;
                            buttonHeightLarge: string;
                            buttonWidthSmall: string;
                            buttonWidthMedium: string;
                            buttonWidthLarge: string;
                            buttonWidthPressedSmall: string;
                            buttonWidthPressedMedium: string;
                            buttonWidthPressedLarge: string;
                            railHeightSmall: string;
                            railHeightMedium: string;
                            railHeightLarge: string;
                            railWidthSmall: string;
                            railWidthMedium: string;
                            railWidthLarge: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        readonly value: string | number | boolean | undefined;
        readonly round: boolean;
        readonly size: 'small' | 'medium' | 'large';
        readonly disabled: boolean | undefined;
        readonly loading: boolean;
        readonly defaultValue: string | number | boolean;
        readonly checkedValue: string | number | boolean;
        readonly uncheckedValue: string | number | boolean;
        readonly rubberBand: boolean;
    },
    {}
>;
export default _default;
