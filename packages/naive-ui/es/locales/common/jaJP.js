const jaJP = {
    name: 'ja-JP',
    global: {
        undo: '\u5143\u306B\u623B\u3059',
        redo: '\u3084\u308A\u76F4\u3059',
        confirm: 'OK',
        clear: '\u30AF\u30EA\u30A2',
    },
    Popconfirm: {
        positiveText: 'OK',
        negativeText: '\u30AD\u30E3\u30F3\u30BB\u30EB',
    },
    Cascader: {
        placeholder: '\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044',
        loading: '\u30ED\u30FC\u30C9\u4E2D',
        loadingRequiredMessage: (label) =>
            `\u3059\u3079\u3066\u306E ${label} \u30B5\u30D6\u30CE\u30FC\u30C9\u3092\u30ED\u30FC\u30C9\u3057\u3066\u304B\u3089\u9078\u629E\u3067\u304D\u307E\u3059\u3002`,
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
        clear: '\u30AF\u30EA\u30A2',
        now: '\u73FE\u5728',
        confirm: 'OK',
        selectTime: '\u6642\u9593\u3092\u9078\u629E',
        selectDate: '\u65E5\u4ED8\u3092\u9078\u629E',
        datePlaceholder: '\u65E5\u4ED8\u3092\u9078\u629E',
        datetimePlaceholder: '\u9078\u629E',
        monthPlaceholder: '\u6708\u3092\u9078\u629E',
        yearPlaceholder: '\u5E74\u3092\u9078\u629E',
        quarterPlaceholder: '\u56DB\u534A\u671F\u3092\u9078\u629E',
        startDatePlaceholder: '\u958B\u59CB\u65E5',
        endDatePlaceholder: '\u7D42\u4E86\u65E5',
        startDatetimePlaceholder: '\u958B\u59CB\u6642\u9593',
        endDatetimePlaceholder: '\u7D42\u4E86\u6642\u9593',
        startMonthPlaceholder: 'Start Month',
        endMonthPlaceholder: 'End Month',
        monthBeforeYear: false,
        firstDayOfWeek: 0,
        today: '\u4ECA\u65E5',
    },
    DataTable: {
        checkTableAll: '\u5168\u9078\u629E',
        uncheckTableAll: '\u5168\u9078\u629E\u53D6\u6D88',
        confirm: 'OK',
        clear: '\u30EA\u30BB\u30C3\u30C8',
    },
    LegacyTransfer: {
        sourceTitle: '\u5143',
        targetTitle: '\u5148',
    },
    Transfer: {
        selectAll: 'Select all',
        unselectAll: 'Unselect all',
        clearAll: 'Clear',
        total: (num) => `Total ${num} items`,
        selected: (num) => `${num} items selected`,
    },
    Empty: {
        description: '\u30C7\u30FC\u30BF\u306A\u3057',
    },
    Select: {
        placeholder: '\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044',
    },
    TimePicker: {
        placeholder: '\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044',
        positiveText: 'OK',
        negativeText: '\u30AD\u30E3\u30F3\u30BB\u30EB',
        now: '\u73FE\u5728',
    },
    Pagination: {
        goto: '\u30DA\u30FC\u30B8\u30B8\u30E3\u30F3\u30D7',
        selectionSuffix: '\u30DA\u30FC\u30B8',
    },
    DynamicTags: {
        add: '\u8FFD\u52A0',
    },
    Log: {
        loading: '\u30ED\u30FC\u30C9\u4E2D',
    },
    Input: {
        placeholder: '\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044',
    },
    InputNumber: {
        placeholder: '\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044',
    },
    DynamicInput: {
        create: '\u8FFD\u52A0',
    },
    ThemeEditor: {
        title: '\u30C6\u30FC\u30DE\u30A8\u30C7\u30A3\u30BF',
        clearAllVars: '\u5168\u4EF6\u5909\u6570\u30AF\u30EA\u30A2',
        clearSearch: '\u691C\u7D22\u30AF\u30EA\u30A2',
        filterCompName:
            '\u30B3\u30F3\u30DD\u30CD\u30F3\u30C8\u540D\u3092\u30D5\u30A3\u30EB\u30BF',
        filterVarName: '\u5909\u6570\u3092\u30D5\u30A3\u30EB\u30BF',
        import: '\u30A4\u30F3\u30DD\u30FC\u30C8',
        export: '\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8',
        restore: '\u30C7\u30D5\u30A9\u30EB\u30C8',
    },
    Image: {
        tipPrevious: '\u524D\u306E\u753B\u50CF (\u2190)',
        tipNext: '\u6B21\u306E\u753B\u50CF (\u2192)',
        tipCounterclockwise: '\u5DE6\u306B\u56DE\u8EE2',
        tipClockwise: '\u53F3\u306B\u56DE\u8EE2',
        tipZoomOut: '\u7E2E\u5C0F',
        tipZoomIn: '\u62E1\u5927',
        tipClose: '\u9589\u3058\u308B (Esc)',
        tipOriginalSize: 'Zoom to original size',
    },
};
export default jaJP;
