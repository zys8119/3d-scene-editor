Object.defineProperty(exports, '__esModule', { value: true });
exports.dataTableInjectionKey = exports.dataTableProps = void 0;
const _mixins_1 = require('../../_mixins');
const _utils_1 = require('../../_utils');
exports.dataTableProps = Object.assign(
    Object.assign({}, _mixins_1.useTheme.props),
    {
        onUnstableColumnResize: Function,
        pagination: {
            type: [Object, Boolean],
            default: false,
        },
        paginateSinglePage: {
            type: Boolean,
            default: true,
        },
        minHeight: [Number, String],
        maxHeight: [Number, String],
        columns: {
            type: Array,
            default: () => [],
        },
        rowClassName: [String, Function],
        rowProps: Function,
        rowKey: Function,
        summary: [Function],
        data: {
            type: Array,
            default: () => [],
        },
        loading: Boolean,
        bordered: {
            type: Boolean,
            default: void 0,
        },
        bottomBordered: {
            type: Boolean,
            default: void 0,
        },
        striped: Boolean,
        scrollX: [Number, String],
        defaultCheckedRowKeys: {
            type: Array,
            default: () => [],
        },
        checkedRowKeys: Array,
        singleLine: {
            type: Boolean,
            default: true,
        },
        singleColumn: Boolean,
        size: {
            type: String,
            default: 'medium',
        },
        remote: Boolean,
        defaultExpandedRowKeys: {
            type: Array,
            default: [],
        },
        defaultExpandAll: Boolean,
        expandedRowKeys: Array,
        stickyExpandedRows: Boolean,
        virtualScroll: Boolean,
        tableLayout: {
            type: String,
            default: 'auto',
        },
        allowCheckingNotLoaded: Boolean,
        cascade: {
            type: Boolean,
            default: true,
        },
        childrenKey: {
            type: String,
            default: 'children',
        },
        indent: {
            type: Number,
            default: 16,
        },
        flexHeight: Boolean,
        summaryPlacement: {
            type: String,
            default: 'bottom',
        },
        paginationBehaviorOnFilter: {
            type: String,
            default: 'current',
        },
        scrollbarProps: Object,
        renderCell: Function,
        renderExpandIcon: Function,
        spinProps: { type: Object, default: {} },
        onLoad: Function,
        'onUpdate:page': [Function, Array],
        onUpdatePage: [Function, Array],
        'onUpdate:pageSize': [Function, Array],
        onUpdatePageSize: [Function, Array],
        'onUpdate:sorter': [Function, Array],
        onUpdateSorter: [Function, Array],
        'onUpdate:filters': [Function, Array],
        onUpdateFilters: [Function, Array],
        'onUpdate:checkedRowKeys': [Function, Array],
        onUpdateCheckedRowKeys: [Function, Array],
        'onUpdate:expandedRowKeys': [Function, Array],
        onUpdateExpandedRowKeys: [Function, Array],
        onScroll: Function,
        onPageChange: [Function, Array],
        onPageSizeChange: [Function, Array],
        onSorterChange: [Function, Array],
        onFiltersChange: [Function, Array],
        onCheckedRowKeysChange: [Function, Array],
    }
);
exports.dataTableInjectionKey = (0, _utils_1.createInjectionKey)(
    'n-data-table'
);
