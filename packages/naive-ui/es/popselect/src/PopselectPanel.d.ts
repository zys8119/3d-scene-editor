import { PropType } from 'vue';
import { TreeNode } from 'treemate';
import {
    NodeProps,
    RenderLabel,
} from '../../_internal/select-menu/src/interface';
import {
    OnUpdateValue,
    Value,
    SelectMixedOption,
    SelectBaseOption,
    SelectGroupOption,
    SelectIgnoredOption,
} from '../../select/src/interface';
import type { MaybeArray } from '../../_utils';
import type { PopselectSize } from './interface';
export declare const panelProps: {
    readonly multiple: BooleanConstructor;
    readonly value: {
        readonly type: PropType<Value | null>;
        readonly default: null;
    };
    readonly cancelable: BooleanConstructor;
    readonly options: {
        readonly type: PropType<SelectMixedOption[]>;
        readonly default: () => never[];
    };
    readonly size: {
        readonly type: PropType<PopselectSize>;
        readonly default: 'medium';
    };
    readonly scrollable: BooleanConstructor;
    readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
    readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
    readonly onMouseenter: PropType<(e: MouseEvent) => void>;
    readonly onMouseleave: PropType<(e: MouseEvent) => void>;
    readonly renderLabel: PropType<RenderLabel>;
    readonly showCheckmark: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly nodeProps: PropType<NodeProps>;
    readonly virtualScroll: BooleanConstructor;
    readonly onChange: PropType<MaybeArray<OnUpdateValue> | undefined>;
};
export declare const panelPropKeys: (
    | 'value'
    | 'size'
    | 'multiple'
    | 'onChange'
    | 'onMouseenter'
    | 'onMouseleave'
    | 'options'
    | 'scrollable'
    | 'cancelable'
    | 'onUpdate:value'
    | 'onUpdateValue'
    | 'renderLabel'
    | 'showCheckmark'
    | 'nodeProps'
    | 'virtualScroll'
)[];
declare const _default: import('vue').DefineComponent<
    {
        readonly multiple: BooleanConstructor;
        readonly value: {
            readonly type: PropType<Value | null>;
            readonly default: null;
        };
        readonly cancelable: BooleanConstructor;
        readonly options: {
            readonly type: PropType<SelectMixedOption[]>;
            readonly default: () => never[];
        };
        readonly size: {
            readonly type: PropType<PopselectSize>;
            readonly default: 'medium';
        };
        readonly scrollable: BooleanConstructor;
        readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
        readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
        readonly onMouseenter: PropType<(e: MouseEvent) => void>;
        readonly onMouseleave: PropType<(e: MouseEvent) => void>;
        readonly renderLabel: PropType<RenderLabel>;
        readonly showCheckmark: {
            readonly type: BooleanConstructor;
            readonly default: undefined;
        };
        readonly nodeProps: PropType<NodeProps>;
        readonly virtualScroll: BooleanConstructor;
        readonly onChange: PropType<MaybeArray<OnUpdateValue> | undefined>;
    },
    {
        mergedTheme: globalThis.Ref<{
            common: {
                baseColor: string;
                primaryColor: string;
                primaryColorHover: string;
                primaryColorPressed: string;
                primaryColorSuppl: string;
                infoColor: string;
                infoColorHover: string;
                infoColorPressed: string;
                infoColorSuppl: string;
                successColor: string;
                successColorHover: string;
                successColorPressed: string;
                successColorSuppl: string;
                warningColor: string;
                warningColorHover: string;
                warningColorPressed: string;
                warningColorSuppl: string;
                errorColor: string;
                errorColorHover: string;
                errorColorPressed: string;
                errorColorSuppl: string;
                textColorBase: string;
                textColor1: string;
                textColor2: string;
                textColor3: string;
                textColor6: string;
                textColor7: string;
                textColorDisabled: string;
                placeholderColor: string;
                placeholderColorDisabled: string;
                iconColor: string;
                iconColorHover: string;
                iconColorPressed: string;
                iconColorDisabled: string;
                opacity1: string;
                opacity2: string;
                opacity3: string;
                opacity4: string;
                opacity5: string;
                dividerColor: string;
                borderColor: string;
                closeIconColor: string;
                closeIconColorHover: string;
                closeIconColorPressed: string;
                closeColorHover: string;
                closeColorPressed: string;
                clearColor: string;
                clearColorHover: string;
                clearColorPressed: string;
                scrollbarColor: string;
                scrollbarColorHover: string;
                scrollbarWidth: string;
                scrollbarHeight: string;
                scrollbarBorderRadius: string;
                progressRailColor: string;
                railColor: string;
                popoverColor: string;
                tableColor: string;
                cardColor: string;
                modalColor: string;
                bodyColor: string;
                tagColor: string;
                avatarColor: string;
                invertedColor: string;
                inputColor: string;
                codeColor: string;
                tabColor: string;
                actionColor: string;
                tableHeaderColor: string;
                hoverColor: string;
                tableColorHover: string;
                tableColorStriped: string;
                pressedColor: string;
                opacityDisabled: string;
                inputColorDisabled: string;
                buttonColor2: string;
                buttonColor2Hover: string;
                buttonColor2Pressed: string;
                boxShadow1: string;
                boxShadow2: string;
                boxShadow3: string;
                fontFamily: string;
                fontFamilyMono: string;
                fontWeight: string;
                fontWeightStrong: string;
                cubicBezierEaseInOut: string;
                cubicBezierEaseOut: string;
                cubicBezierEaseIn: string;
                borderRadius: string;
                borderRadiusSmall: string;
                fontSize: string;
                fontSizeMini: string;
                fontSizeTiny: string;
                fontSizeSmall: string;
                fontSizeMedium: string;
                fontSizeLarge: string;
                fontSizeHuge: string;
                lineHeight: string;
                heightMini: string;
                heightTiny: string;
                heightSmall: string;
                heightMedium: string;
                heightLarge: string;
                heightHuge: string;
                name: 'common';
            };
            self: {
                menuBoxShadow: string;
            };
            peers: {
                Popover: import('../../_mixins').Theme<
                    'Popover',
                    {
                        fontSize: string;
                        borderRadius: string;
                        color: string;
                        dividerColor: string;
                        textColor: string;
                        boxShadow: string;
                        space: string;
                        spaceArrow: string;
                        arrowOffset: string;
                        arrowOffsetVertical: string;
                        arrowHeight: string;
                        padding: string;
                    },
                    any
                >;
                InternalSelectMenu: import('../../_mixins').Theme<
                    'InternalSelectMenu',
                    {
                        optionFontSizeSmall: string;
                        optionFontSizeMedium: string;
                        optionFontSizeLarge: string;
                        optionFontSizeHuge: string;
                        optionHeightSmall: string;
                        optionHeightMedium: string;
                        optionHeightLarge: string;
                        optionHeightHuge: string;
                        borderRadius: string;
                        color: string;
                        groupHeaderTextColor: string;
                        actionDividerColor: string;
                        optionTextColor: string;
                        optionTextColorPressed: string;
                        optionTextColorDisabled: string;
                        optionTextColorActive: string;
                        optionOpacityDisabled: string;
                        optionCheckColor: string;
                        optionColorPending: string;
                        optionColorActive: string;
                        optionColorActivePending: string;
                        actionTextColor: string;
                        loadingColor: string;
                        height: string;
                        paddingSmall: string;
                        paddingMedium: string;
                        paddingLarge: string;
                        paddingHuge: string;
                        optionPaddingSmall: string;
                        optionPaddingMedium: string;
                        optionPaddingLarge: string;
                        optionPaddingHuge: string;
                        loadingSize: string;
                    },
                    {
                        Scrollbar: import('../../_mixins').Theme<
                            'Scrollbar',
                            {
                                color: string;
                                colorHover: string;
                            },
                            any
                        >;
                        Empty: import('../../_mixins').Theme<
                            'Empty',
                            {
                                fontSizeSmall: string;
                                fontSizeMedium: string;
                                fontSizeLarge: string;
                                fontSizeHuge: string;
                                textColor: string;
                                iconColor: string;
                                extraTextColor: string;
                                iconSizeSmall: string;
                                iconSizeMedium: string;
                                iconSizeLarge: string;
                                iconSizeHuge: string;
                            },
                            any
                        >;
                    }
                >;
            };
            peerOverrides: {
                Popover?:
                    | {
                          peers?:
                              | {
                                    [x: string]: any;
                                }
                              | undefined;
                      }
                    | undefined;
                InternalSelectMenu?:
                    | {
                          peers?:
                              | {
                                    Scrollbar?:
                                        | import('../../_mixins/use-theme').ExtractThemeOverrides<
                                              import('../../_mixins').Theme<
                                                  'Scrollbar',
                                                  {
                                                      color: string;
                                                      colorHover: string;
                                                  },
                                                  any
                                              >
                                          >
                                        | undefined;
                                    Empty?:
                                        | import('../../_mixins/use-theme').ExtractThemeOverrides<
                                              import('../../_mixins').Theme<
                                                  'Empty',
                                                  {
                                                      fontSizeSmall: string;
                                                      fontSizeMedium: string;
                                                      fontSizeLarge: string;
                                                      fontSizeHuge: string;
                                                      textColor: string;
                                                      iconColor: string;
                                                      extraTextColor: string;
                                                      iconSizeSmall: string;
                                                      iconSizeMedium: string;
                                                      iconSizeLarge: string;
                                                      iconSizeHuge: string;
                                                  },
                                                  any
                                              >
                                          >
                                        | undefined;
                                }
                              | undefined;
                      }
                    | undefined;
            };
        }>;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        treeMate: globalThis.ComputedRef<
            import('treemate').TreeMate<
                SelectBaseOption<
                    string | number,
                    | string
                    | ((
                          option: SelectBaseOption<
                              string | number,
                              string | any
                          >,
                          selected: boolean
                      ) => import('vue').VNodeChild)
                >,
                SelectGroupOption,
                SelectIgnoredOption
            >
        >;
        handleToggle: (tmNode: TreeNode<SelectBaseOption>) => void;
        handleMenuMousedown: (e: MouseEvent) => void;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-menu-box-shadow': string;
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
            readonly multiple: BooleanConstructor;
            readonly value: {
                readonly type: PropType<Value | null>;
                readonly default: null;
            };
            readonly cancelable: BooleanConstructor;
            readonly options: {
                readonly type: PropType<SelectMixedOption[]>;
                readonly default: () => never[];
            };
            readonly size: {
                readonly type: PropType<PopselectSize>;
                readonly default: 'medium';
            };
            readonly scrollable: BooleanConstructor;
            readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
            readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
            readonly onMouseenter: PropType<(e: MouseEvent) => void>;
            readonly onMouseleave: PropType<(e: MouseEvent) => void>;
            readonly renderLabel: PropType<RenderLabel>;
            readonly showCheckmark: {
                readonly type: BooleanConstructor;
                readonly default: undefined;
            };
            readonly nodeProps: PropType<NodeProps>;
            readonly virtualScroll: BooleanConstructor;
            readonly onChange: PropType<MaybeArray<OnUpdateValue> | undefined>;
        }>
    >,
    {
        readonly value: Value | null;
        readonly size: PopselectSize;
        readonly multiple: boolean;
        readonly options: SelectMixedOption[];
        readonly scrollable: boolean;
        readonly cancelable: boolean;
        readonly showCheckmark: boolean;
        readonly virtualScroll: boolean;
    },
    {}
>;
export default _default;
