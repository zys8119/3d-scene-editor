import { PropType } from 'vue';
import { SpaceProps } from '../../../space';
import { InputProps } from '../../../input';
import { PaginationProps } from '../../../pagination';
import { DataTableProps } from '../../../data-table';
import { ExtractPublicPropTypes } from '../../../_utils';
export declare const searchTablePageBaseProps: {
    searchTableSpace: PropType<SpaceProps>;
    searchSpace: PropType<SpaceProps>;
    searchBottomSpace: PropType<SpaceProps>;
    tableSpace: PropType<SpaceProps>;
    searchFormSpace: PropType<SpaceProps>;
    searchInputProps: PropType<InputProps>;
    dataTableProps: PropType<DataTableProps>;
    paginationProps: PropType<PaginationProps>;
    pageConfig: {
        type: PropType<
            ExtractPublicPropTypes<{
                page: number;
                size: number;
            }>
        >;
        default: () => {
            page: number;
            size: number;
        };
    };
    searchProps: {
        type: PropType<
            ExtractPublicPropTypes<{
                show: boolean;
                showInput: boolean;
                inputWidth: number | string;
                showSearch: boolean;
                showReset: boolean;
                showHandle: boolean;
                showAdd: boolean;
                showPageTotal: boolean;
                showDeleteSelect: boolean;
                searchText: string;
                searchInputPlaceholder: string;
                resetText: string;
                addText: string;
                deleteSelectText: string;
                leftMaxWidth: string;
                leftMinWidth: string;
                rightMaxWidth: string;
                rightMinWidth: string;
            }>
        >;
        default: () => {
            show: boolean;
            showInput: boolean;
            inputWidth: string;
            showSearch: boolean;
            showReset: boolean;
            showHandle: boolean;
            showAdd: boolean;
            showDeleteSelect: boolean;
            showTotal: boolean;
            showPageTotal: boolean;
            searchText: string;
            searchInputPlaceholder: string;
            resetText: string;
            addText: string;
            deleteSelectText: string;
            leftMaxWidth: string;
            leftMinWidth: string;
            rightMaxWidth: string;
            rightMinWidth: string;
        };
    };
    tableProps: {
        type: PropType<
            ExtractPublicPropTypes<{
                show: boolean;
                showTable: boolean;
                showPagination: boolean;
                showTotal: boolean;
            }>
        >;
        default: {
            show: boolean;
            showTable: boolean;
            showPagination: boolean;
            showTotal: boolean;
        };
    };
    dataApi: PropType<(data: any) => Promise<any>>;
    params: PropType<Record<string, any>>;
    dataField: {
        type: StringConstructor;
        default: string;
    };
    searchField: {
        type: StringConstructor;
        default: string;
    };
    pageField: {
        type: StringConstructor;
        default: string;
    };
    sizeField: {
        type: StringConstructor;
        default: string;
    };
    totalField: {
        type: StringConstructor;
        default: string;
    };
    noPageField: {
        type: StringConstructor;
        default: string;
    };
    padding: {
        type: StringConstructor;
        default: string;
    };
    hasBackgroundColor: {
        type: BooleanConstructor;
        default: boolean;
    };
    backgroundColor: {
        type: StringConstructor;
        default: null;
    };
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
};
export declare const searchTablePageProps: {
    searchTableSpace: PropType<SpaceProps>;
    searchSpace: PropType<SpaceProps>;
    searchBottomSpace: PropType<SpaceProps>;
    tableSpace: PropType<SpaceProps>;
    searchFormSpace: PropType<SpaceProps>;
    searchInputProps: PropType<InputProps>;
    dataTableProps: PropType<DataTableProps>;
    paginationProps: PropType<PaginationProps>;
    pageConfig: {
        type: PropType<
            ExtractPublicPropTypes<{
                page: number;
                size: number;
            }>
        >;
        default: () => {
            page: number;
            size: number;
        };
    };
    searchProps: {
        type: PropType<
            ExtractPublicPropTypes<{
                show: boolean;
                showInput: boolean;
                inputWidth: number | string;
                showSearch: boolean;
                showReset: boolean;
                showHandle: boolean;
                showAdd: boolean;
                showPageTotal: boolean;
                showDeleteSelect: boolean;
                searchText: string;
                searchInputPlaceholder: string;
                resetText: string;
                addText: string;
                deleteSelectText: string;
                leftMaxWidth: string;
                leftMinWidth: string;
                rightMaxWidth: string;
                rightMinWidth: string;
            }>
        >;
        default: () => {
            show: boolean;
            showInput: boolean;
            inputWidth: string;
            showSearch: boolean;
            showReset: boolean;
            showHandle: boolean;
            showAdd: boolean;
            showDeleteSelect: boolean;
            showTotal: boolean;
            showPageTotal: boolean;
            searchText: string;
            searchInputPlaceholder: string;
            resetText: string;
            addText: string;
            deleteSelectText: string;
            leftMaxWidth: string;
            leftMinWidth: string;
            rightMaxWidth: string;
            rightMinWidth: string;
        };
    };
    tableProps: {
        type: PropType<
            ExtractPublicPropTypes<{
                show: boolean;
                showTable: boolean;
                showPagination: boolean;
                showTotal: boolean;
            }>
        >;
        default: {
            show: boolean;
            showTable: boolean;
            showPagination: boolean;
            showTotal: boolean;
        };
    };
    dataApi: PropType<(data: any) => Promise<any>>;
    params: PropType<Record<string, any>>;
    dataField: {
        type: StringConstructor;
        default: string;
    };
    searchField: {
        type: StringConstructor;
        default: string;
    };
    pageField: {
        type: StringConstructor;
        default: string;
    };
    sizeField: {
        type: StringConstructor;
        default: string;
    };
    totalField: {
        type: StringConstructor;
        default: string;
    };
    noPageField: {
        type: StringConstructor;
        default: string;
    };
    padding: {
        type: StringConstructor;
        default: string;
    };
    hasBackgroundColor: {
        type: BooleanConstructor;
        default: boolean;
    };
    backgroundColor: {
        type: StringConstructor;
        default: null;
    };
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    theme: PropType<
        import('../../../_mixins').Theme<
            'SearchTablePage',
            {
                baseColor: string;
            },
            any
        >
    >;
    themeOverrides: PropType<
        import('../../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../../_mixins').Theme<
                'SearchTablePage',
                {
                    baseColor: string;
                },
                any
            >
        >
    >;
    builtinThemeOverrides: PropType<
        import('../../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../../_mixins').Theme<
                'SearchTablePage',
                {
                    baseColor: string;
                },
                any
            >
        >
    >;
};
export type SearchTablePageProps = ExtractPublicPropTypes<
    typeof searchTablePageProps
>;
declare const SearchTablePage: import('vue').DefineComponent<
    {
        searchTableSpace: PropType<SpaceProps>;
        searchSpace: PropType<SpaceProps>;
        searchBottomSpace: PropType<SpaceProps>;
        tableSpace: PropType<SpaceProps>;
        searchFormSpace: PropType<SpaceProps>;
        searchInputProps: PropType<InputProps>;
        dataTableProps: PropType<DataTableProps>;
        paginationProps: PropType<PaginationProps>;
        pageConfig: {
            type: PropType<
                ExtractPublicPropTypes<{
                    page: number;
                    size: number;
                }>
            >;
            default: () => {
                page: number;
                size: number;
            };
        };
        searchProps: {
            type: PropType<
                ExtractPublicPropTypes<{
                    show: boolean;
                    showInput: boolean;
                    inputWidth: number | string;
                    showSearch: boolean;
                    showReset: boolean;
                    showHandle: boolean;
                    showAdd: boolean;
                    showPageTotal: boolean;
                    showDeleteSelect: boolean;
                    searchText: string;
                    searchInputPlaceholder: string;
                    resetText: string;
                    addText: string;
                    deleteSelectText: string;
                    leftMaxWidth: string;
                    leftMinWidth: string;
                    rightMaxWidth: string;
                    rightMinWidth: string;
                }>
            >;
            default: () => {
                show: boolean;
                showInput: boolean;
                inputWidth: string;
                showSearch: boolean;
                showReset: boolean;
                showHandle: boolean;
                showAdd: boolean;
                showDeleteSelect: boolean;
                showTotal: boolean;
                showPageTotal: boolean;
                searchText: string;
                searchInputPlaceholder: string;
                resetText: string;
                addText: string;
                deleteSelectText: string;
                leftMaxWidth: string;
                leftMinWidth: string;
                rightMaxWidth: string;
                rightMinWidth: string;
            };
        };
        tableProps: {
            type: PropType<
                ExtractPublicPropTypes<{
                    show: boolean;
                    showTable: boolean;
                    showPagination: boolean;
                    showTotal: boolean;
                }>
            >;
            default: {
                show: boolean;
                showTable: boolean;
                showPagination: boolean;
                showTotal: boolean;
            };
        };
        dataApi: PropType<(data: any) => Promise<any>>;
        params: PropType<Record<string, any>>;
        dataField: {
            type: StringConstructor;
            default: string;
        };
        searchField: {
            type: StringConstructor;
            default: string;
        };
        pageField: {
            type: StringConstructor;
            default: string;
        };
        sizeField: {
            type: StringConstructor;
            default: string;
        };
        totalField: {
            type: StringConstructor;
            default: string;
        };
        noPageField: {
            type: StringConstructor;
            default: string;
        };
        padding: {
            type: StringConstructor;
            default: string;
        };
        hasBackgroundColor: {
            type: BooleanConstructor;
            default: boolean;
        };
        backgroundColor: {
            type: StringConstructor;
            default: null;
        };
        tag: {
            type: PropType<keyof HTMLElementTagNameMap>;
            default: string;
        };
        theme: PropType<
            import('../../../_mixins').Theme<
                'SearchTablePage',
                {
                    baseColor: string;
                },
                any
            >
        >;
        themeOverrides: PropType<
            import('../../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../../_mixins').Theme<
                    'SearchTablePage',
                    {
                        baseColor: string;
                    },
                    any
                >
            >
        >;
        builtinThemeOverrides: PropType<
            import('../../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../../_mixins').Theme<
                    'SearchTablePage',
                    {
                        baseColor: string;
                    },
                    any
                >
            >
        >;
    },
    {
        cssVarsRef: globalThis.ComputedRef<{
            '--n-background-color': string;
            padding: string;
        }>;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        searchVal: globalThis.Ref<string>;
        currentPage: globalThis.Ref<Number | undefined>;
        pageSize: globalThis.Ref<Number | undefined>;
        pageTotal: globalThis.Ref<Number | undefined>;
        tableData: globalThis.Ref<never[]>;
        tableRef: globalThis.Ref<any>;
        initData: (page?: number) => Promise<void>;
        unCheckAll: () => void;
    },
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {
        search: () => true;
        reset: () => true;
        add: () => true;
        deleteSelect: () => true;
    },
    string,
    import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
    Readonly<
        import('vue').ExtractPropTypes<{
            searchTableSpace: PropType<SpaceProps>;
            searchSpace: PropType<SpaceProps>;
            searchBottomSpace: PropType<SpaceProps>;
            tableSpace: PropType<SpaceProps>;
            searchFormSpace: PropType<SpaceProps>;
            searchInputProps: PropType<InputProps>;
            dataTableProps: PropType<DataTableProps>;
            paginationProps: PropType<PaginationProps>;
            pageConfig: {
                type: PropType<
                    ExtractPublicPropTypes<{
                        page: number;
                        size: number;
                    }>
                >;
                default: () => {
                    page: number;
                    size: number;
                };
            };
            searchProps: {
                type: PropType<
                    ExtractPublicPropTypes<{
                        show: boolean;
                        showInput: boolean;
                        inputWidth: number | string;
                        showSearch: boolean;
                        showReset: boolean;
                        showHandle: boolean;
                        showAdd: boolean;
                        showPageTotal: boolean;
                        showDeleteSelect: boolean;
                        searchText: string;
                        searchInputPlaceholder: string;
                        resetText: string;
                        addText: string;
                        deleteSelectText: string;
                        leftMaxWidth: string;
                        leftMinWidth: string;
                        rightMaxWidth: string;
                        rightMinWidth: string;
                    }>
                >;
                default: () => {
                    show: boolean;
                    showInput: boolean;
                    inputWidth: string;
                    showSearch: boolean;
                    showReset: boolean;
                    showHandle: boolean;
                    showAdd: boolean;
                    showDeleteSelect: boolean;
                    showTotal: boolean;
                    showPageTotal: boolean;
                    searchText: string;
                    searchInputPlaceholder: string;
                    resetText: string;
                    addText: string;
                    deleteSelectText: string;
                    leftMaxWidth: string;
                    leftMinWidth: string;
                    rightMaxWidth: string;
                    rightMinWidth: string;
                };
            };
            tableProps: {
                type: PropType<
                    ExtractPublicPropTypes<{
                        show: boolean;
                        showTable: boolean;
                        showPagination: boolean;
                        showTotal: boolean;
                    }>
                >;
                default: {
                    show: boolean;
                    showTable: boolean;
                    showPagination: boolean;
                    showTotal: boolean;
                };
            };
            dataApi: PropType<(data: any) => Promise<any>>;
            params: PropType<Record<string, any>>;
            dataField: {
                type: StringConstructor;
                default: string;
            };
            searchField: {
                type: StringConstructor;
                default: string;
            };
            pageField: {
                type: StringConstructor;
                default: string;
            };
            sizeField: {
                type: StringConstructor;
                default: string;
            };
            totalField: {
                type: StringConstructor;
                default: string;
            };
            noPageField: {
                type: StringConstructor;
                default: string;
            };
            padding: {
                type: StringConstructor;
                default: string;
            };
            hasBackgroundColor: {
                type: BooleanConstructor;
                default: boolean;
            };
            backgroundColor: {
                type: StringConstructor;
                default: null;
            };
            tag: {
                type: PropType<keyof HTMLElementTagNameMap>;
                default: string;
            };
            theme: PropType<
                import('../../../_mixins').Theme<
                    'SearchTablePage',
                    {
                        baseColor: string;
                    },
                    any
                >
            >;
            themeOverrides: PropType<
                import('../../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../../_mixins').Theme<
                        'SearchTablePage',
                        {
                            baseColor: string;
                        },
                        any
                    >
                >
            >;
            builtinThemeOverrides: PropType<
                import('../../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../../_mixins').Theme<
                        'SearchTablePage',
                        {
                            baseColor: string;
                        },
                        any
                    >
                >
            >;
        }>
    > & {
        onReset?: (() => any) | undefined;
        onSearch?: (() => any) | undefined;
        onAdd?: (() => any) | undefined;
        onDeleteSelect?: (() => any) | undefined;
    },
    {
        tag: keyof HTMLElementTagNameMap;
        backgroundColor: string;
        padding: string;
        tableProps: ExtractPublicPropTypes<{
            show: boolean;
            showTable: boolean;
            showPagination: boolean;
            showTotal: boolean;
        }>;
        pageConfig: ExtractPublicPropTypes<{
            page: number;
            size: number;
        }>;
        searchProps: ExtractPublicPropTypes<{
            show: boolean;
            showInput: boolean;
            inputWidth: number | string;
            showSearch: boolean;
            showReset: boolean;
            showHandle: boolean;
            showAdd: boolean;
            showPageTotal: boolean;
            showDeleteSelect: boolean;
            searchText: string;
            searchInputPlaceholder: string;
            resetText: string;
            addText: string;
            deleteSelectText: string;
            leftMaxWidth: string;
            leftMinWidth: string;
            rightMaxWidth: string;
            rightMinWidth: string;
        }>;
        dataField: string;
        searchField: string;
        pageField: string;
        sizeField: string;
        totalField: string;
        noPageField: string;
        hasBackgroundColor: boolean;
    },
    {}
>;
export default SearchTablePage;
