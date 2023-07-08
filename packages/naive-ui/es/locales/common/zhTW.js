const zhTW = {
    name: 'zh-TW',
    global: {
        undo: '\u64A4\u92B7',
        redo: '\u91CD\u505A',
        confirm: '\u78BA\u8A8D',
        clear: '\u6E05\u9664',
    },
    Popconfirm: {
        positiveText: '\u78BA\u8A8D',
        negativeText: '\u53D6\u6D88',
    },
    Cascader: {
        placeholder: '\u8ACB\u9078\u64C7',
        loading: '\u8F09\u5165\u4E2D',
        loadingRequiredMessage: (label) =>
            `\u8F09\u5165\u5168\u90E8 ${label} \u7684\u5B50\u7BC0\u9EDE\u5F8C\u624D\u53EF\u9078\u4E2D`,
    },
    Time: {
        dateFormat: 'yyyy-MM-dd',
        dateTimeFormat: 'yyyy-MM-dd HH:mm:ss',
    },
    DatePicker: {
        yearFormat: 'yyyy\u5E74',
        monthFormat: 'MMM',
        dayFormat: 'eeeeee',
        yearTypeFormat: 'yyyy',
        monthTypeFormat: 'yyyy-MM',
        dateFormat: 'yyyy-MM-dd',
        dateTimeFormat: 'yyyy-MM-dd HH:mm:ss',
        quarterFormat: 'yyyy-qqq',
        clear: '\u6E05\u9664',
        now: '\u6B64\u523B',
        confirm: '\u78BA\u8A8D',
        selectTime: '\u9078\u64C7\u6642\u9593',
        selectDate: '\u9078\u64C7\u65E5\u671F',
        datePlaceholder: '\u9078\u64C7\u65E5\u671F',
        datetimePlaceholder: '\u9078\u64C7\u65E5\u671F\u6642\u9593',
        monthPlaceholder: '\u9078\u64C7\u6708\u4EFD',
        yearPlaceholder: '\u9078\u64C7\u5E74\u4EFD',
        quarterPlaceholder: '\u9078\u64C7\u5B63\u5EA6',
        startDatePlaceholder: '\u958B\u59CB\u65E5\u671F',
        endDatePlaceholder: '\u7D50\u675F\u65E5\u671F',
        startDatetimePlaceholder: '\u958B\u59CB\u65E5\u671F\u6642\u9593',
        endDatetimePlaceholder: '\u7D50\u675F\u65E5\u671F\u6642\u9593',
        startMonthPlaceholder: '\u958B\u59CB\u6708\u4EFD',
        endMonthPlaceholder: '\u7D50\u675F\u6708\u4EFD',
        monthBeforeYear: false,
        firstDayOfWeek: 0,
        today: '\u4ECA\u5929',
    },
    DataTable: {
        checkTableAll: '\u9078\u64C7\u5168\u90E8\u8868\u683C\u8CC7\u6599',
        uncheckTableAll:
            '\u53D6\u6D88\u9078\u64C7\u5168\u90E8\u8868\u683C\u8CC7\u6599',
        confirm: '\u78BA\u8A8D',
        clear: '\u91CD\u7F6E',
    },
    LegacyTransfer: {
        sourceTitle: '\u6E90\u9805',
        targetTitle: '\u76EE\u6A19\u9805',
    },
    Transfer: {
        selectAll: '\u5168\u9078',
        unselectAll: '\u53D6\u6D88\u5168\u9078',
        clearAll: '\u6E05\u9664',
        total: (num) => `\u5171 ${num} \u9805`,
        selected: (num) => `\u5DF2\u9078 ${num} \u9805`,
    },
    Empty: {
        description: '\u7121\u8CC7\u6599',
    },
    Select: {
        placeholder: '\u8ACB\u9078\u64C7',
    },
    TimePicker: {
        placeholder: '\u8ACB\u9078\u64C7\u6642\u9593',
        positiveText: '\u78BA\u8A8D',
        negativeText: '\u53D6\u6D88',
        now: '\u6B64\u523B',
    },
    Pagination: {
        goto: '\u8DF3\u81F3',
        selectionSuffix: '\u9801',
    },
    DynamicTags: {
        add: '\u65B0\u589E',
    },
    Log: {
        loading: '\u8F09\u5165\u4E2D',
    },
    Input: {
        placeholder: '\u8ACB\u8F38\u5165',
    },
    InputNumber: {
        placeholder: '\u8ACB\u8F38\u5165',
    },
    DynamicInput: {
        create: '\u65B0\u589E',
    },
    ThemeEditor: {
        title: '\u4E3B\u984C\u7DE8\u8F2F\u5668',
        clearAllVars: '\u6E05\u9664\u5168\u90E8\u8B8A\u6578',
        clearSearch: '\u6E05\u9664\u641C\u5C0B',
        filterCompName: '\u904E\u6FFE\u7D44\u4EF6\u540D',
        filterVarName: '\u904E\u6FFE\u8B8A\u6578\u540D',
        import: '\u5C0E\u5165',
        export: '\u532F\u51FA',
        restore: '\u6062\u5FA9\u9810\u8A2D',
    },
    Image: {
        tipPrevious: '\u4E0A\u4E00\u5F35\uFF08\u2190\uFF09',
        tipNext: '\u4E0B\u4E00\u5F35\uFF08\u2192\uFF09',
        tipCounterclockwise: '\u5411\u5DE6\u65CB\u8F49',
        tipClockwise: '\u5411\u53F3\u65CB\u8F49',
        tipZoomOut: '\u7E2E\u5C0F',
        tipZoomIn: '\u653E\u5927',
        tipClose: '\u95DC\u9589\uFF08Esc\uFF09',
        tipOriginalSize: '\u7E2E\u653E\u5230\u539F\u59CB\u5C3A\u5BF8',
    },
};
export default zhTW;
