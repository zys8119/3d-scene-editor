Object.defineProperty(exports, '__esModule', { value: true });
const viVN = {
    name: 'vi-VN',
    global: {
        undo: 'Ho\xE0n t\xE1c',
        redo: 'L\xE0m l\u1EA1i',
        confirm: 'X\xE1c nh\u1EADn',
        clear: 'x\xF3a',
    },
    Popconfirm: {
        positiveText: 'X\xE1c nh\u1EADn',
        negativeText: 'H\u1EE7y',
    },
    Cascader: {
        placeholder: 'Vui l\xF2ng ch\u1ECDn',
        loading: '\u0110ang t\u1EA3i',
        loadingRequiredMessage: (label) =>
            `Vui l\xF2ng t\u1EA3i t\u1EA5t c\u1EA3 th\xF4ng tin con c\u1EE7a ${label} tr\u01B0\u1EDBc.`,
    },
    Time: {
        dateFormat: '',
        dateTimeFormat: 'HH:mm:ss dd-MM-yyyy',
    },
    DatePicker: {
        yearFormat: 'yyyy',
        monthFormat: 'MMM',
        dayFormat: 'eeeeee',
        yearTypeFormat: 'yyyy',
        monthTypeFormat: 'MM-yyyy',
        dateFormat: 'dd-MM-yyyy',
        dateTimeFormat: 'HH:mm:ss dd-MM-yyyy',
        quarterFormat: 'qqq-yyyy',
        clear: 'X\xF3a',
        now: 'H\xF4m nay',
        confirm: 'X\xE1c nh\u1EADn',
        selectTime: 'Ch\u1ECDn gi\u1EDD',
        selectDate: 'Ch\u1ECDn ng\xE0y',
        datePlaceholder: 'Ch\u1ECDn ng\xE0y',
        datetimePlaceholder: 'Ch\u1ECDn ng\xE0y gi\u1EDD',
        monthPlaceholder: 'Ch\u1ECDn th\xE1ng',
        yearPlaceholder: 'Ch\u1ECDn n\u0103m',
        quarterPlaceholder: 'Ch\u1ECDn qu\xFD',
        startDatePlaceholder: 'Ng\xE0y b\u1EAFt \u0111\u1EA7u',
        endDatePlaceholder: 'Ng\xE0y k\u1EBFt th\xFAc',
        startDatetimePlaceholder: 'Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u',
        endDatetimePlaceholder: 'Th\u1EDDi gian k\u1EBFt th\xFAc',
        startMonthPlaceholder: 'Th\xE1ng b\u1EAFt \u0111\u1EA7u',
        endMonthPlaceholder: 'Th\xE1ng k\u1EBFt th\xFAc',
        monthBeforeYear: true,
        firstDayOfWeek: 0,
        today: 'H\xF4m nay',
    },
    DataTable: {
        checkTableAll: 'Ch\u1ECDn t\u1EA5t c\u1EA3 c\xF3 trong b\u1EA3ng',
        uncheckTableAll:
            'B\u1ECF ch\u1ECDn t\u1EA5t c\u1EA3 c\xF3 trong b\u1EA3ng',
        confirm: 'X\xE1c nh\u1EADn',
        clear: 'X\xF3a',
    },
    LegacyTransfer: {
        sourceTitle: 'Ngu\u1ED3n',
        targetTitle: '\u0110\xEDch',
    },
    Transfer: {
        selectAll: 'Ch\u1ECDn t\u1EA5t c\u1EA3',
        unselectAll: 'B\u1ECF ch\u1ECDn t\u1EA5t c\u1EA3',
        clearAll: 'Xo\xE1 t\u1EA5t c\u1EA3',
        total: (num) => `T\u1ED5ng c\u1ED9ng ${num} m\u1EE5c`,
        selected: (num) => `${num} m\u1EE5c \u0111\u01B0\u1EE3c ch\u1ECDn`,
    },
    Empty: {
        description: 'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u',
    },
    Select: {
        placeholder: 'Vui l\xF2ng ch\u1ECDn',
    },
    TimePicker: {
        placeholder: 'Ch\u1ECDn th\u1EDDi gian',
        positiveText: 'OK',
        negativeText: 'H\u1EE7y',
        now: 'Hi\u1EC7n t\u1EA1i',
    },
    Pagination: {
        goto: '\u0110i \u0111\u1EBFn trang',
        selectionSuffix: 'trang',
    },
    DynamicTags: {
        add: 'Th\xEAm',
    },
    Log: {
        loading: '\u0110ang t\u1EA3i',
    },
    Input: {
        placeholder: 'Vui l\xF2ng nh\u1EADp',
    },
    InputNumber: {
        placeholder: 'Vui l\xF2ng nh\u1EADp',
    },
    DynamicInput: {
        create: 'T\u1EA1o',
    },
    ThemeEditor: {
        title: 'T\xF9y ch\u1EC9nh giao di\u1EC7n',
        clearAllVars: 'X\xF3a t\u1EA5t c\u1EA3 c\xE1c bi\u1EBFn',
        clearSearch: 'X\xF3a t\xECm ki\u1EBFm',
        filterCompName: 'L\u1ECDc t\xEAn component',
        filterVarName: 'L\u1ECDc t\xEAn bi\u1EBFn',
        import: 'Nh\u1EADp',
        export: 'Xu\u1EA5t',
        restore: '\u0110\u1EB7t l\u1EA1i m\u1EB7c \u0111\u1ECBnh',
    },
    Image: {
        tipPrevious: 'H\xECnh tr\u01B0\u1EDBc (\u2190)',
        tipNext: 'H\xECnh ti\u1EBFp (\u2192)',
        tipCounterclockwise: 'Counterclockwise',
        tipClockwise: 'Chi\u1EC1u kim \u0111\u1ED3ng h\u1ED3',
        tipZoomOut: 'Thu nh\u1ECF',
        tipZoomIn: 'Ph\xF3ng to',
        tipClose: '\u0110\xF3ng (Esc)',
        tipOriginalSize: 'Xem k\xEDch th\u01B0\u1EDBc g\u1ED1c',
    },
};
exports.default = viVN;
