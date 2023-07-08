Object.defineProperty(exports, '__esModule', { value: true });
const thTH = {
    name: 'thTH',
    global: {
        undo: '\u0E40\u0E25\u0E34\u0E01\u0E17\u0E33',
        redo: '\u0E17\u0E33\u0E0B\u0E49\u0E33',
        confirm: '\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19',
        clear: '\u0E25\u0E49\u0E32\u0E07',
    },
    Popconfirm: {
        positiveText: '\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19',
        negativeText: '\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01',
    },
    Cascader: {
        placeholder:
            '\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01',
        loading: '\u0E01\u0E33\u0E25\u0E31\u0E07\u0E42\u0E2B\u0E25\u0E14',
        loadingRequiredMessage: (label) =>
            `Please load all ${label}'s descendants before checking it.`,
    },
    Time: {
        dateFormat: 'dd-MMMM-yyyy',
        dateTimeFormat: 'dd-MMMM-yyyy HH:mm:ss',
    },
    DatePicker: {
        yearFormat: 'yyyy',
        monthFormat: 'MMM',
        dayFormat: 'eeeeee',
        yearTypeFormat: 'yyyy',
        monthTypeFormat: 'yyyy-MM',
        dateFormat: 'dd/MMMM/yyyy',
        dateTimeFormat: 'dd/MMMM/yyyy HH:mm:ss',
        quarterFormat: 'yyyy-qqq',
        clear: '\u0E25\u0E49\u0E32\u0E07',
        now: '\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49',
        confirm: '\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19',
        selectTime: '\u0E40\u0E27\u0E25\u0E32',
        selectDate: '\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48',
        datePlaceholder: '\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48',
        datetimePlaceholder:
            '\u0E40\u0E27\u0E25\u0E32-\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48',
        monthPlaceholder: '\u0E40\u0E14\u0E37\u0E2D\u0E19',
        yearPlaceholder: '\u0E1B\u0E35',
        quarterPlaceholder: '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A',
        startDatePlaceholder:
            '\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19',
        endDatePlaceholder:
            '\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14',
        startDatetimePlaceholder:
            '\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E41\u0E25\u0E30\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14',
        endDatetimePlaceholder:
            '\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14\u0E41\u0E25\u0E30\u0E40\u0E27\u0E25\u0E32',
        startMonthPlaceholder: 'Start Month',
        endMonthPlaceholder: 'End Month',
        monthBeforeYear: true,
        firstDayOfWeek: 6,
        today: '\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49',
    },
    DataTable: {
        checkTableAll:
            '\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14',
        uncheckTableAll:
            '\u0E44\u0E21\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14',
        confirm: '\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19',
        clear: '\u0E25\u0E49\u0E32\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25',
    },
    LegacyTransfer: {
        sourceTitle: 'Source',
        targetTitle: 'Target',
    },
    Transfer: {
        selectAll: 'Select all',
        unselectAll: 'Unselect all',
        clearAll: 'Clear',
        total: (num) => `Total ${num} items`,
        selected: (num) => `${num} items selected`,
    },
    Empty: {
        description:
            '\u0E44\u0E21\u0E48\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25',
    },
    Select: {
        placeholder:
            '\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01',
    },
    TimePicker: {
        placeholder: '\u0E40\u0E27\u0E25\u0E32',
        positiveText: '\u0E15\u0E01\u0E25\u0E07',
        negativeText: '\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01',
        now: '\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49',
    },
    Pagination: {
        goto: '\u0E44\u0E1B\u0E22\u0E31\u0E07',
        selectionSuffix: '\u0E2B\u0E19\u0E49\u0E32',
    },
    DynamicTags: {
        add: '\u0E40\u0E1E\u0E34\u0E48\u0E21',
    },
    Log: {
        loading: '\u0E01\u0E33\u0E25\u0E31\u0E07\u0E42\u0E2B\u0E25\u0E14',
    },
    Input: {
        placeholder: '\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01',
    },
    InputNumber: {
        placeholder: '\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01',
    },
    DynamicInput: {
        create: '\u0E2A\u0E23\u0E49\u0E32\u0E07',
    },
    ThemeEditor: {
        title: '\u0E41\u0E01\u0E49\u0E44\u0E02\u0E18\u0E35\u0E21',
        clearAllVars:
            '\u0E25\u0E49\u0E32\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E31\u0E27\u0E41\u0E1B\u0E23',
        clearSearch:
            '\u0E25\u0E49\u0E32\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E04\u0E49\u0E19\u0E2B\u0E32',
        filterCompName:
            '\u0E01\u0E23\u0E2D\u0E07\u0E42\u0E14\u0E22\u0E0A\u0E37\u0E48\u0E2D Component',
        filterVarName:
            '\u0E01\u0E23\u0E2D\u0E07\u0E42\u0E14\u0E22\u0E0A\u0E37\u0E48\u0E2D\u0E15\u0E31\u0E27\u0E41\u0E1B\u0E23',
        import: '\u0E19\u0E33\u0E40\u0E02\u0E49\u0E32',
        export: '\u0E2A\u0E48\u0E07\u0E2D\u0E2D\u0E01',
        restore: '\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15',
    },
    Image: {
        tipPrevious:
            '\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32 (\u2190)',
        tipNext: '\u0E16\u0E31\u0E14\u0E44\u0E1B (\u2192)',
        tipCounterclockwise: '\u0E2B\u0E21\u0E38\u0E19 (\u21BA)',
        tipClockwise: '\u0E2B\u0E21\u0E38\u0E19 (\u21BB)',
        tipZoomOut: '\u0E0B\u0E39\u0E21\u0E2D\u0E2D\u0E01',
        tipZoomIn: '\u0E0B\u0E39\u0E21\u0E40\u0E02\u0E49\u0E32',
        tipClose: '\u0E1B\u0E34\u0E14 (Esc)',
        tipOriginalSize: 'Zoom to original size',
    },
};
exports.default = thTH;
