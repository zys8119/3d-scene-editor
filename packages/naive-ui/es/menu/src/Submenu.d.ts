import { PropType, VNodeChild } from 'vue';
import { MenuMixedOption, TmNode } from './interface';
export declare const submenuProps: {
    readonly rawNodes: {
        readonly type: PropType<MenuMixedOption[]>;
        readonly default: () => never[];
    };
    readonly tmNodes: {
        readonly type: PropType<TmNode[]>;
        readonly default: () => never[];
    };
    readonly tmNode: {
        readonly type: PropType<TmNode>;
        readonly required: true;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly icon: PropType<() => VNodeChild>;
    readonly onClick: PropType<() => void>;
    readonly internalKey: {
        readonly type: PropType<import('treemate').Key>;
        readonly required: true;
    };
    readonly root: BooleanConstructor;
    readonly isGroup: BooleanConstructor;
    readonly level: {
        readonly type: NumberConstructor;
        readonly required: true;
    };
    readonly title: PropType<string | (() => VNodeChild)>;
    readonly extra: PropType<string | (() => VNodeChild)>;
};
export declare const NSubmenu: import('vue').DefineComponent<
    {
        readonly rawNodes: {
            readonly type: PropType<MenuMixedOption[]>;
            readonly default: () => never[];
        };
        readonly tmNodes: {
            readonly type: PropType<TmNode[]>;
            readonly default: () => never[];
        };
        readonly tmNode: {
            readonly type: PropType<TmNode>;
            readonly required: true;
        };
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly icon: PropType<() => VNodeChild>;
        readonly onClick: PropType<() => void>;
        readonly internalKey: {
            readonly type: PropType<import('treemate').Key>;
            readonly required: true;
        };
        readonly root: BooleanConstructor;
        readonly isGroup: BooleanConstructor;
        readonly level: {
            readonly type: NumberConstructor;
            readonly required: true;
        };
        readonly title: PropType<string | (() => VNodeChild)>;
        readonly extra: PropType<string | (() => VNodeChild)>;
    },
    {
        menuProps: import('./Menu').MenuSetupProps;
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
                itemColorHoverInverted: string;
                itemColorActiveInverted: string;
                itemColorActiveHoverInverted: string;
                itemColorActiveCollapsedInverted: string;
                itemTextColorInverted: string;
                itemTextColorHoverInverted: string;
                itemTextColorChildActiveInverted: string;
                itemTextColorChildActiveHoverInverted: string;
                itemTextColorActiveInverted: string;
                itemTextColorActiveHoverInverted: string;
                itemTextColorHorizontalInverted: string;
                itemTextColorHoverHorizontalInverted: string;
                itemTextColorChildActiveHorizontalInverted: string;
                itemTextColorChildActiveHoverHorizontalInverted: string;
                itemTextColorActiveHorizontalInverted: string;
                itemTextColorActiveHoverHorizontalInverted: string;
                itemIconColorInverted: string;
                itemIconColorHoverInverted: string;
                itemIconColorActiveInverted: string;
                itemIconColorActiveHoverInverted: string;
                itemIconColorChildActiveInverted: string;
                itemIconColorChildActiveHoverInverted: string;
                itemIconColorCollapsedInverted: string;
                itemIconColorHorizontalInverted: string;
                itemIconColorHoverHorizontalInverted: string;
                itemIconColorActiveHorizontalInverted: string;
                itemIconColorActiveHoverHorizontalInverted: string;
                itemIconColorChildActiveHorizontalInverted: string;
                itemIconColorChildActiveHoverHorizontalInverted: string;
                arrowColorInverted: string;
                arrowColorHoverInverted: string;
                arrowColorActiveInverted: string;
                arrowColorActiveHoverInverted: string;
                arrowColorChildActiveInverted: string;
                arrowColorChildActiveHoverInverted: string;
                groupTextColorInverted: string;
                borderRadius: string;
                color: string;
                groupTextColor: string;
                itemColorHover: string;
                itemColorActive: string;
                itemColorActiveHover: string;
                itemColorActiveCollapsed: string;
                itemTextColor: string;
                itemTextColorHover: string;
                itemTextColorActive: string;
                itemTextColorActiveHover: string;
                itemTextColorChildActive: string;
                itemTextColorChildActiveHover: string;
                itemTextColorHorizontal: string;
                itemTextColorHoverHorizontal: string;
                itemTextColorActiveHorizontal: string;
                itemTextColorActiveHoverHorizontal: string;
                itemTextColorChildActiveHorizontal: string;
                itemTextColorChildActiveHoverHorizontal: string;
                itemIconColor: string;
                itemIconColorHover: string;
                itemIconColorActive: string;
                itemIconColorActiveHover: string;
                itemIconColorChildActive: string;
                itemIconColorChildActiveHover: string;
                itemIconColorCollapsed: string;
                itemIconColorHorizontal: string;
                itemIconColorHoverHorizontal: string;
                itemIconColorActiveHorizontal: string;
                itemIconColorActiveHoverHorizontal: string;
                itemIconColorChildActiveHorizontal: string;
                itemIconColorChildActiveHoverHorizontal: string;
                itemHeight: string;
                arrowColor: string;
                arrowColorHover: string;
                arrowColorActive: string;
                arrowColorActiveHover: string;
                arrowColorChildActive: string;
                arrowColorChildActiveHover: string;
                colorInverted: string;
                borderColorHorizontal: string;
                fontSize: string;
                dividerColor: string;
            };
            peers: {
                Tooltip: import('../../_mixins').Theme<
                    'Tooltip',
                    {
                        borderRadius: string;
                        boxShadow: string;
                        color: string;
                        textColor: string;
                        padding: string;
                    },
                    {
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
                    }
                >;
                Dropdown: import('../../_mixins').Theme<
                    'Dropdown',
                    {
                        optionHeightSmall: string;
                        optionHeightMedium: string;
                        optionHeightLarge: string;
                        optionHeightHuge: string;
                        borderRadius: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        fontSizeHuge: string;
                        optionTextColor: string;
                        optionTextColorHover: string;
                        optionTextColorActive: string;
                        optionTextColorChildActive: string;
                        color: string;
                        dividerColor: string;
                        suffixColor: string;
                        prefixColor: string;
                        optionColorHover: string;
                        optionColorActive: string;
                        groupHeaderTextColor: string;
                        optionTextColorInverted: string;
                        optionTextColorHoverInverted: string;
                        optionTextColorActiveInverted: string;
                        optionTextColorChildActiveInverted: string;
                        colorInverted: string;
                        dividerColorInverted: string;
                        suffixColorInverted: string;
                        prefixColorInverted: string;
                        optionColorHoverInverted: string;
                        optionColorActiveInverted: string;
                        groupHeaderTextColorInverted: string;
                        optionOpacityDisabled: string;
                        padding: string;
                        optionIconSizeSmall: string;
                        optionIconSizeMedium: string;
                        optionIconSizeLarge: string;
                        optionIconSizeHuge: string;
                        optionSuffixWidthSmall: string;
                        optionSuffixWidthMedium: string;
                        optionSuffixWidthLarge: string;
                        optionSuffixWidthHuge: string;
                        optionIconSuffixWidthSmall: string;
                        optionIconSuffixWidthMedium: string;
                        optionIconSuffixWidthLarge: string;
                        optionIconSuffixWidthHuge: string;
                        optionPrefixWidthSmall: string;
                        optionPrefixWidthMedium: string;
                        optionPrefixWidthLarge: string;
                        optionPrefixWidthHuge: string;
                        optionIconPrefixWidthSmall: string;
                        optionIconPrefixWidthMedium: string;
                        optionIconPrefixWidthLarge: string;
                        optionIconPrefixWidthHuge: string;
                    },
                    {
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
                    }
                >;
            };
            peerOverrides: {
                Tooltip?:
                    | {
                          peers?:
                              | {
                                    Popover?:
                                        | import('../../_mixins/use-theme').ExtractThemeOverrides<
                                              import('../../_mixins').Theme<
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
                                              >
                                          >
                                        | undefined;
                                }
                              | undefined;
                      }
                    | undefined;
                Dropdown?:
                    | {
                          peers?:
                              | {
                                    Popover?:
                                        | import('../../_mixins/use-theme').ExtractThemeOverrides<
                                              import('../../_mixins').Theme<
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
                                              >
                                          >
                                        | undefined;
                                }
                              | undefined;
                      }
                    | undefined;
            };
        }>;
        doSelect: import('./interface').OnUpdateValueImpl;
        inverted: globalThis.Ref<boolean>;
        isHorizontal: globalThis.Ref<boolean>;
        mergedClsPrefix: globalThis.Ref<string>;
        maxIconSize: globalThis.ComputedRef<number>;
        activeIconSize: globalThis.ComputedRef<number>;
        iconMarginRight: globalThis.ComputedRef<number>;
        dropdownPlacement: globalThis.ComputedRef<
            import('vueuc').FollowerPlacement
        >;
        dropdownShow: globalThis.Ref<boolean>;
        paddingLeft: globalThis.ComputedRef<number | undefined>;
        mergedDisabled: globalThis.ComputedRef<boolean>;
        mergedValue: globalThis.Ref<import('treemate').Key | null>;
        childActive: globalThis.ComputedRef<boolean>;
        collapsed: globalThis.ComputedRef<boolean>;
        dropdownEnabled: globalThis.ComputedRef<boolean>;
        handlePopoverShowChange: (value: boolean) => void;
        handleClick: () => void;
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
            readonly rawNodes: {
                readonly type: PropType<MenuMixedOption[]>;
                readonly default: () => never[];
            };
            readonly tmNodes: {
                readonly type: PropType<TmNode[]>;
                readonly default: () => never[];
            };
            readonly tmNode: {
                readonly type: PropType<TmNode>;
                readonly required: true;
            };
            readonly disabled: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            readonly icon: PropType<() => VNodeChild>;
            readonly onClick: PropType<() => void>;
            readonly internalKey: {
                readonly type: PropType<import('treemate').Key>;
                readonly required: true;
            };
            readonly root: BooleanConstructor;
            readonly isGroup: BooleanConstructor;
            readonly level: {
                readonly type: NumberConstructor;
                readonly required: true;
            };
            readonly title: PropType<string | (() => VNodeChild)>;
            readonly extra: PropType<string | (() => VNodeChild)>;
        }>
    >,
    {
        readonly root: boolean;
        readonly disabled: boolean;
        readonly tmNodes: TmNode[];
        readonly isGroup: boolean;
        readonly rawNodes: MenuMixedOption[];
    },
    {}
>;
