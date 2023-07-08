import { PropType } from 'vue';
import { TreeNode } from 'treemate';
import type {
    SelectOption,
    SelectGroupOption,
    SelectIgnoredOption,
    Value,
    SelectTreeMate,
} from '../../../select/src/interface';
import type { RenderLabel, Size, RenderOption, NodeProps } from './interface';
declare const _default: import('vue').DefineComponent<
    {
        clsPrefix: {
            type: StringConstructor;
            required: true;
        };
        scrollable: {
            type: BooleanConstructor;
            default: boolean;
        };
        treeMate: {
            type: PropType<SelectTreeMate>;
            required: true;
        };
        multiple: BooleanConstructor;
        size: {
            type: PropType<Size>;
            default: string;
        };
        value: {
            type: PropType<Value | null>;
            default: null;
        };
        autoPending: BooleanConstructor;
        virtualScroll: {
            type: BooleanConstructor;
            default: boolean;
        };
        show: {
            type: BooleanConstructor;
            default: boolean;
        };
        labelField: {
            type: StringConstructor;
            default: string;
        };
        valueField: {
            type: StringConstructor;
            default: string;
        };
        loading: BooleanConstructor;
        focusable: BooleanConstructor;
        renderLabel: PropType<RenderLabel>;
        renderOption: PropType<RenderOption>;
        nodeProps: PropType<NodeProps>;
        showCheckmark: {
            type: BooleanConstructor;
            default: boolean;
        };
        onMousedown: PropType<(e: MouseEvent) => void>;
        onScroll: PropType<(e: Event) => void>;
        onFocus: PropType<(e: FocusEvent) => void>;
        onBlur: PropType<(e: FocusEvent) => void>;
        onKeyup: PropType<(e: KeyboardEvent) => void>;
        onKeydown: PropType<(e: KeyboardEvent) => void>;
        onTabOut: PropType<() => void>;
        onMouseenter: PropType<(e: MouseEvent) => void>;
        onMouseleave: PropType<(e: MouseEvent) => void>;
        onResize: PropType<() => void>;
        resetMenuOnOptionsChange: {
            type: BooleanConstructor;
            default: boolean;
        };
        inlineThemeDisabled: BooleanConstructor;
        onToggle: PropType<(tmNode: TreeNode<SelectOption>) => void>;
        theme: PropType<
            import('../../../_mixins').Theme<
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
                    Scrollbar: import('../../../_mixins').Theme<
                        'Scrollbar',
                        {
                            color: string;
                            colorHover: string;
                        },
                        any
                    >;
                    Empty: import('../../../_mixins').Theme<
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
            >
        >;
        themeOverrides: PropType<
            import('../../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../../_mixins').Theme<
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
                        Scrollbar: import('../../../_mixins').Theme<
                            'Scrollbar',
                            {
                                color: string;
                                colorHover: string;
                            },
                            any
                        >;
                        Empty: import('../../../_mixins').Theme<
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
                >
            >
        >;
        builtinThemeOverrides: PropType<
            import('../../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../../_mixins').Theme<
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
                        Scrollbar: import('../../../_mixins').Theme<
                            'Scrollbar',
                            {
                                color: string;
                                colorHover: string;
                            },
                            any
                        >;
                        Empty: import('../../../_mixins').Theme<
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
                >
            >
        >;
    },
    {
        selfRef: globalThis.Ref<HTMLElement | null>;
        getPendingTmNode: () => TreeNode<
            import('../../../select/src/interface').SelectBaseOption<
                string | number,
                | string
                | ((
                      option: import('../../../select/src/interface').SelectBaseOption<
                          string | number,
                          string | any
                      >,
                      selected: boolean
                  ) => import('vue').VNodeChild)
            >,
            import('../../../select/src/interface').SelectBaseOption<
                string | number,
                | string
                | ((
                      option: import('../../../select/src/interface').SelectBaseOption<
                          string | number,
                          string | any
                      >,
                      selected: boolean
                  ) => import('vue').VNodeChild)
            >,
            import('../../../select/src/interface').SelectBaseOption<
                string | number,
                | string
                | ((
                      option: import('../../../select/src/interface').SelectBaseOption<
                          string | number,
                          string | any
                      >,
                      selected: boolean
                  ) => import('vue').VNodeChild)
            >
        > | null;
        prev: () => void;
        next: () => void;
        mergedTheme: globalThis.ComputedRef<{
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
            };
            peers: {
                Scrollbar: import('../../../_mixins').Theme<
                    'Scrollbar',
                    {
                        color: string;
                        colorHover: string;
                    },
                    any
                >;
                Empty: import('../../../_mixins').Theme<
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
            };
            peerOverrides: {
                Scrollbar?:
                    | {
                          peers?:
                              | {
                                    [x: string]: any;
                                }
                              | undefined;
                      }
                    | undefined;
                Empty?:
                    | {
                          peers?:
                              | {
                                    [x: string]: any;
                                }
                              | undefined;
                      }
                    | undefined;
            };
        }>;
        virtualListRef: globalThis.Ref<{
            listElRef: HTMLElement;
            itemsElRef: HTMLElement | null;
            scrollTo: import('vueuc/lib/virtual-list/src/VirtualList').ScrollTo;
        } | null>;
        scrollbarRef: globalThis.Ref<{
            $el: HTMLElement;
            containerRef: HTMLElement | null;
            contentRef: HTMLElement | null;
            containerScrollTop: number;
            syncUnifiedContainer: () => void;
            scrollTo: import('../../scrollbar/src/Scrollbar').ScrollTo;
            scrollBy: import('../../scrollbar/src/Scrollbar').ScrollBy;
            sync: () => void;
            handleMouseEnterWrapper: () => void;
            handleMouseLeaveWrapper: () => void;
        } | null>;
        itemSize: globalThis.ComputedRef<number>;
        padding: globalThis.ComputedRef<import('seemly').Margin>;
        flattenedNodes: globalThis.ComputedRef<
            TreeNode<
                import('../../../select/src/interface').SelectBaseOption<
                    string | number,
                    | string
                    | ((
                          option: import('../../../select/src/interface').SelectBaseOption<
                              string | number,
                              string | any
                          >,
                          selected: boolean
                      ) => import('vue').VNodeChild)
                >,
                SelectGroupOption,
                SelectIgnoredOption
            >[]
        >;
        empty: globalThis.ComputedRef<boolean>;
        virtualListContainer(): HTMLElement;
        virtualListContent(): HTMLElement;
        doScroll: (e: Event) => void;
        handleFocusin: (e: FocusEvent) => void;
        handleFocusout: (e: FocusEvent) => void;
        handleKeyUp: (e: KeyboardEvent) => void;
        handleKeyDown: (e: KeyboardEvent) => void;
        handleMouseDown: (e: MouseEvent) => void;
        handleVirtualListResize: () => void;
        handleVirtualListScroll: (e: Event) => void;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-height': string;
                  '--n-action-divider-color': string;
                  '--n-action-text-color': string;
                  '--n-bezier': string;
                  '--n-border-radius': string;
                  '--n-color': string;
                  '--n-option-font-size': string;
                  '--n-group-header-text-color': string;
                  '--n-option-check-color': string;
                  '--n-option-color-pending': string;
                  '--n-option-color-active': string;
                  '--n-option-color-active-pending': string;
                  '--n-option-height': string;
                  '--n-option-opacity-disabled': string;
                  '--n-option-text-color': string;
                  '--n-option-text-color-active': string;
                  '--n-option-text-color-disabled': string;
                  '--n-option-text-color-pressed': string;
                  '--n-option-padding': string;
                  '--n-option-padding-left': string;
                  '--n-option-padding-right': string;
                  '--n-loading-color': string;
                  '--n-loading-size': string;
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
            clsPrefix: {
                type: StringConstructor;
                required: true;
            };
            scrollable: {
                type: BooleanConstructor;
                default: boolean;
            };
            treeMate: {
                type: PropType<SelectTreeMate>;
                required: true;
            };
            multiple: BooleanConstructor;
            size: {
                type: PropType<Size>;
                default: string;
            };
            value: {
                type: PropType<Value | null>;
                default: null;
            };
            autoPending: BooleanConstructor;
            virtualScroll: {
                type: BooleanConstructor;
                default: boolean;
            };
            show: {
                type: BooleanConstructor;
                default: boolean;
            };
            labelField: {
                type: StringConstructor;
                default: string;
            };
            valueField: {
                type: StringConstructor;
                default: string;
            };
            loading: BooleanConstructor;
            focusable: BooleanConstructor;
            renderLabel: PropType<RenderLabel>;
            renderOption: PropType<RenderOption>;
            nodeProps: PropType<NodeProps>;
            showCheckmark: {
                type: BooleanConstructor;
                default: boolean;
            };
            onMousedown: PropType<(e: MouseEvent) => void>;
            onScroll: PropType<(e: Event) => void>;
            onFocus: PropType<(e: FocusEvent) => void>;
            onBlur: PropType<(e: FocusEvent) => void>;
            onKeyup: PropType<(e: KeyboardEvent) => void>;
            onKeydown: PropType<(e: KeyboardEvent) => void>;
            onTabOut: PropType<() => void>;
            onMouseenter: PropType<(e: MouseEvent) => void>;
            onMouseleave: PropType<(e: MouseEvent) => void>;
            onResize: PropType<() => void>;
            resetMenuOnOptionsChange: {
                type: BooleanConstructor;
                default: boolean;
            };
            inlineThemeDisabled: BooleanConstructor;
            onToggle: PropType<(tmNode: TreeNode<SelectOption>) => void>;
            theme: PropType<
                import('../../../_mixins').Theme<
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
                        Scrollbar: import('../../../_mixins').Theme<
                            'Scrollbar',
                            {
                                color: string;
                                colorHover: string;
                            },
                            any
                        >;
                        Empty: import('../../../_mixins').Theme<
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
                >
            >;
            themeOverrides: PropType<
                import('../../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../../_mixins').Theme<
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
                            Scrollbar: import('../../../_mixins').Theme<
                                'Scrollbar',
                                {
                                    color: string;
                                    colorHover: string;
                                },
                                any
                            >;
                            Empty: import('../../../_mixins').Theme<
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
                    >
                >
            >;
            builtinThemeOverrides: PropType<
                import('../../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../../_mixins').Theme<
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
                            Scrollbar: import('../../../_mixins').Theme<
                                'Scrollbar',
                                {
                                    color: string;
                                    colorHover: string;
                                },
                                any
                            >;
                            Empty: import('../../../_mixins').Theme<
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
                    >
                >
            >;
        }>
    >,
    {
        value: Value | null;
        size: Size;
        show: boolean;
        multiple: boolean;
        focusable: boolean;
        loading: boolean;
        inlineThemeDisabled: boolean;
        scrollable: boolean;
        showCheckmark: boolean;
        virtualScroll: boolean;
        autoPending: boolean;
        labelField: string;
        valueField: string;
        resetMenuOnOptionsChange: boolean;
    },
    {}
>;
export default _default;
