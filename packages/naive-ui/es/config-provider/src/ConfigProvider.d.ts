import { PropType, ComputedRef, ExtractPropTypes } from 'vue';
import { Hljs } from '../../_mixins';
import { NDateLocale } from '../../locales';
import type {
    GlobalTheme,
    GlobalThemeOverrides,
    GlobalComponentConfig,
    GlobalIconConfig,
} from './interface';
import type { RtlProp, Breakpoints } from './internal-interface';
export declare const configProviderProps: {
    readonly abstract: BooleanConstructor;
    readonly bordered: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly clsPrefix: StringConstructor;
    readonly locale: PropType<{
        name: string;
        global: {
            undo: string;
            redo: string;
            confirm: string;
            clear: string;
        };
        Popconfirm: {
            positiveText: string;
            negativeText: string;
        };
        Cascader: {
            placeholder: string;
            loading: string;
            loadingRequiredMessage: (label: string) => string;
        };
        Time: {
            dateFormat: string;
            dateTimeFormat: string;
        };
        DatePicker: {
            yearFormat: string;
            monthFormat: string;
            dayFormat: string;
            yearTypeFormat: string;
            monthTypeFormat: string;
            dateFormat: string;
            dateTimeFormat: string;
            quarterFormat: string;
            clear: string;
            now: string;
            confirm: string;
            selectTime: string;
            selectDate: string;
            datePlaceholder: string;
            datetimePlaceholder: string;
            monthPlaceholder: string;
            yearPlaceholder: string;
            quarterPlaceholder: string;
            startDatePlaceholder: string;
            endDatePlaceholder: string;
            startDatetimePlaceholder: string;
            endDatetimePlaceholder: string;
            startMonthPlaceholder: string;
            endMonthPlaceholder: string;
            monthBeforeYear: boolean;
            firstDayOfWeek: 0 | 2 | 1 | 3 | 4 | 5 | 6;
            today: string;
        };
        DataTable: {
            checkTableAll: string;
            uncheckTableAll: string;
            confirm: string;
            clear: string;
        };
        LegacyTransfer: {
            sourceTitle: string;
            targetTitle: string;
        };
        Transfer: {
            selectAll: string;
            unselectAll: string;
            clearAll: string;
            total: (num: number) => string;
            selected: (num: number) => string;
        };
        Empty: {
            description: string;
        };
        Select: {
            placeholder: string;
        };
        TimePicker: {
            placeholder: string;
            positiveText: string;
            negativeText: string;
            now: string;
        };
        Pagination: {
            goto: string;
            selectionSuffix: string;
        };
        DynamicTags: {
            add: string;
        };
        Log: {
            loading: string;
        };
        Input: {
            placeholder: string;
        };
        InputNumber: {
            placeholder: string;
        };
        DynamicInput: {
            create: string;
        };
        ThemeEditor: {
            title: string;
            clearAllVars: string;
            clearSearch: string;
            filterCompName: string;
            filterVarName: string;
            import: string;
            export: string;
            restore: string;
        };
        Image: {
            tipPrevious: string;
            tipNext: string;
            tipCounterclockwise: string;
            tipClockwise: string;
            tipZoomOut: string;
            tipZoomIn: string;
            tipClose: string;
            tipOriginalSize: string;
        };
    } | null>;
    readonly dateLocale: PropType<NDateLocale | null>;
    readonly namespace: StringConstructor;
    readonly rtl: PropType<RtlProp>;
    readonly tag: {
        readonly type: StringConstructor;
        readonly default: 'div';
    };
    readonly hljs: PropType<Hljs>;
    readonly katex: PropType<typeof import('katex').default>;
    readonly theme: PropType<GlobalTheme | null>;
    readonly themeOverrides: PropType<GlobalThemeOverrides | null>;
    readonly componentOptions: PropType<GlobalComponentConfig>;
    readonly icons: PropType<GlobalIconConfig>;
    readonly breakpoints: PropType<Breakpoints>;
    readonly preflightStyleDisabled: BooleanConstructor;
    readonly inlineThemeDisabled: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly as: {
        readonly type: PropType<string | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
};
export type ConfigProviderProps = Partial<
    ExtractPropTypes<typeof configProviderProps>
>;
declare const _default: import('vue').DefineComponent<
    {
        readonly abstract: BooleanConstructor;
        readonly bordered: {
            readonly type: PropType<boolean | undefined>;
            readonly default: undefined;
        };
        readonly clsPrefix: StringConstructor;
        readonly locale: PropType<{
            name: string;
            global: {
                undo: string;
                redo: string;
                confirm: string;
                clear: string;
            };
            Popconfirm: {
                positiveText: string;
                negativeText: string;
            };
            Cascader: {
                placeholder: string;
                loading: string;
                loadingRequiredMessage: (label: string) => string;
            };
            Time: {
                dateFormat: string;
                dateTimeFormat: string;
            };
            DatePicker: {
                yearFormat: string;
                monthFormat: string;
                dayFormat: string;
                yearTypeFormat: string;
                monthTypeFormat: string;
                dateFormat: string;
                dateTimeFormat: string;
                quarterFormat: string;
                clear: string;
                now: string;
                confirm: string;
                selectTime: string;
                selectDate: string;
                datePlaceholder: string;
                datetimePlaceholder: string;
                monthPlaceholder: string;
                yearPlaceholder: string;
                quarterPlaceholder: string;
                startDatePlaceholder: string;
                endDatePlaceholder: string;
                startDatetimePlaceholder: string;
                endDatetimePlaceholder: string;
                startMonthPlaceholder: string;
                endMonthPlaceholder: string;
                monthBeforeYear: boolean;
                firstDayOfWeek: 0 | 2 | 1 | 3 | 4 | 5 | 6;
                today: string;
            };
            DataTable: {
                checkTableAll: string;
                uncheckTableAll: string;
                confirm: string;
                clear: string;
            };
            LegacyTransfer: {
                sourceTitle: string;
                targetTitle: string;
            };
            Transfer: {
                selectAll: string;
                unselectAll: string;
                clearAll: string;
                total: (num: number) => string;
                selected: (num: number) => string;
            };
            Empty: {
                description: string;
            };
            Select: {
                placeholder: string;
            };
            TimePicker: {
                placeholder: string;
                positiveText: string;
                negativeText: string;
                now: string;
            };
            Pagination: {
                goto: string;
                selectionSuffix: string;
            };
            DynamicTags: {
                add: string;
            };
            Log: {
                loading: string;
            };
            Input: {
                placeholder: string;
            };
            InputNumber: {
                placeholder: string;
            };
            DynamicInput: {
                create: string;
            };
            ThemeEditor: {
                title: string;
                clearAllVars: string;
                clearSearch: string;
                filterCompName: string;
                filterVarName: string;
                import: string;
                export: string;
                restore: string;
            };
            Image: {
                tipPrevious: string;
                tipNext: string;
                tipCounterclockwise: string;
                tipClockwise: string;
                tipZoomOut: string;
                tipZoomIn: string;
                tipClose: string;
                tipOriginalSize: string;
            };
        } | null>;
        readonly dateLocale: PropType<NDateLocale | null>;
        readonly namespace: StringConstructor;
        readonly rtl: PropType<RtlProp>;
        readonly tag: {
            readonly type: StringConstructor;
            readonly default: 'div';
        };
        readonly hljs: PropType<Hljs>;
        readonly katex: PropType<typeof import('katex').default>;
        readonly theme: PropType<GlobalTheme | null>;
        readonly themeOverrides: PropType<GlobalThemeOverrides | null>;
        readonly componentOptions: PropType<GlobalComponentConfig>;
        readonly icons: PropType<GlobalIconConfig>;
        readonly breakpoints: PropType<Breakpoints>;
        readonly preflightStyleDisabled: BooleanConstructor;
        readonly inlineThemeDisabled: {
            readonly type: BooleanConstructor;
            readonly default: undefined;
        };
        readonly as: {
            readonly type: PropType<string | undefined>;
            readonly validator: () => boolean;
            readonly default: undefined;
        };
    },
    {
        mergedClsPrefix: ComputedRef<string | undefined>;
        mergedBordered: ComputedRef<boolean | undefined>;
        mergedNamespace: ComputedRef<string | undefined>;
        mergedTheme: ComputedRef<GlobalTheme | undefined>;
        mergedThemeOverrides: ComputedRef<GlobalThemeOverrides | undefined>;
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
            readonly abstract: BooleanConstructor;
            readonly bordered: {
                readonly type: PropType<boolean | undefined>;
                readonly default: undefined;
            };
            readonly clsPrefix: StringConstructor;
            readonly locale: PropType<{
                name: string;
                global: {
                    undo: string;
                    redo: string;
                    confirm: string;
                    clear: string;
                };
                Popconfirm: {
                    positiveText: string;
                    negativeText: string;
                };
                Cascader: {
                    placeholder: string;
                    loading: string;
                    loadingRequiredMessage: (label: string) => string;
                };
                Time: {
                    dateFormat: string;
                    dateTimeFormat: string;
                };
                DatePicker: {
                    yearFormat: string;
                    monthFormat: string;
                    dayFormat: string;
                    yearTypeFormat: string;
                    monthTypeFormat: string;
                    dateFormat: string;
                    dateTimeFormat: string;
                    quarterFormat: string;
                    clear: string;
                    now: string;
                    confirm: string;
                    selectTime: string;
                    selectDate: string;
                    datePlaceholder: string;
                    datetimePlaceholder: string;
                    monthPlaceholder: string;
                    yearPlaceholder: string;
                    quarterPlaceholder: string;
                    startDatePlaceholder: string;
                    endDatePlaceholder: string;
                    startDatetimePlaceholder: string;
                    endDatetimePlaceholder: string;
                    startMonthPlaceholder: string;
                    endMonthPlaceholder: string;
                    monthBeforeYear: boolean;
                    firstDayOfWeek: 0 | 2 | 1 | 3 | 4 | 5 | 6;
                    today: string;
                };
                DataTable: {
                    checkTableAll: string;
                    uncheckTableAll: string;
                    confirm: string;
                    clear: string;
                };
                LegacyTransfer: {
                    sourceTitle: string;
                    targetTitle: string;
                };
                Transfer: {
                    selectAll: string;
                    unselectAll: string;
                    clearAll: string;
                    total: (num: number) => string;
                    selected: (num: number) => string;
                };
                Empty: {
                    description: string;
                };
                Select: {
                    placeholder: string;
                };
                TimePicker: {
                    placeholder: string;
                    positiveText: string;
                    negativeText: string;
                    now: string;
                };
                Pagination: {
                    goto: string;
                    selectionSuffix: string;
                };
                DynamicTags: {
                    add: string;
                };
                Log: {
                    loading: string;
                };
                Input: {
                    placeholder: string;
                };
                InputNumber: {
                    placeholder: string;
                };
                DynamicInput: {
                    create: string;
                };
                ThemeEditor: {
                    title: string;
                    clearAllVars: string;
                    clearSearch: string;
                    filterCompName: string;
                    filterVarName: string;
                    import: string;
                    export: string;
                    restore: string;
                };
                Image: {
                    tipPrevious: string;
                    tipNext: string;
                    tipCounterclockwise: string;
                    tipClockwise: string;
                    tipZoomOut: string;
                    tipZoomIn: string;
                    tipClose: string;
                    tipOriginalSize: string;
                };
            } | null>;
            readonly dateLocale: PropType<NDateLocale | null>;
            readonly namespace: StringConstructor;
            readonly rtl: PropType<RtlProp>;
            readonly tag: {
                readonly type: StringConstructor;
                readonly default: 'div';
            };
            readonly hljs: PropType<Hljs>;
            readonly katex: PropType<typeof import('katex').default>;
            readonly theme: PropType<GlobalTheme | null>;
            readonly themeOverrides: PropType<GlobalThemeOverrides | null>;
            readonly componentOptions: PropType<GlobalComponentConfig>;
            readonly icons: PropType<GlobalIconConfig>;
            readonly breakpoints: PropType<Breakpoints>;
            readonly preflightStyleDisabled: BooleanConstructor;
            readonly inlineThemeDisabled: {
                readonly type: BooleanConstructor;
                readonly default: undefined;
            };
            readonly as: {
                readonly type: PropType<string | undefined>;
                readonly validator: () => boolean;
                readonly default: undefined;
            };
        }>
    >,
    {
        readonly abstract: boolean;
        readonly tag: string;
        readonly as: string | undefined;
        readonly bordered: boolean | undefined;
        readonly preflightStyleDisabled: boolean;
        readonly inlineThemeDisabled: boolean;
    },
    {}
>;
export default _default;
