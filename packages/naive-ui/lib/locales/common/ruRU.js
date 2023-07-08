Object.defineProperty(exports, '__esModule', { value: true });
const ruRu = {
    name: 'ru-RU',
    global: {
        undo: '\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C',
        redo: '\u0412\u0435\u0440\u043D\u0443\u0442\u044C',
        confirm:
            '\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C',
        clear: '\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C',
    },
    Popconfirm: {
        positiveText:
            '\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C',
        negativeText: '\u041E\u0442\u043C\u0435\u043D\u0430',
    },
    Cascader: {
        placeholder: '\u0412\u044B\u0431\u0440\u0430\u0442\u044C',
        loading: '\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430',
        loadingRequiredMessage: (label) =>
            `\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0432\u0441\u0435 \u0434\u043E\u0447\u0435\u0440\u043D\u0438\u0435 \u0443\u0437\u043B\u044B ${label} \u043F\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043C \u043E\u043D\u0438 \u0441\u0442\u0430\u043D\u0443\u0442 \u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C\u0438`,
    },
    Time: {
        dateFormat: 'yyyy-MM-dd',
        dateTimeFormat: 'yyyy-MM-dd HH:mm:ss',
    },
    DatePicker: {
        yearFormat: 'yyyy',
        monthFormat: 'MMM',
        dayFormat: 'eeeeee',
        yearTypeFormat: 'yyyy',
        monthTypeFormat: 'yyyy-MM',
        dateFormat: 'yyyy-MM-dd',
        dateTimeFormat: 'yyyy-MM-dd HH:mm:ss',
        quarterFormat: 'yyyy-qqq',
        clear: '\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C',
        now: '\u0421\u0435\u0439\u0447\u0430\u0441',
        confirm:
            '\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C',
        selectTime:
            '\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0440\u0435\u043C\u044F',
        selectDate:
            '\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u0430\u0442\u0443',
        datePlaceholder:
            '\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u0430\u0442\u0443',
        datetimePlaceholder:
            '\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u0430\u0442\u0443 \u0438 \u0432\u0440\u0435\u043C\u044F',
        monthPlaceholder:
            '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u0435\u0441\u044F\u0446',
        yearPlaceholder: 'Select Year',
        quarterPlaceholder: 'Select Quarter',
        startDatePlaceholder:
            '\u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u0430',
        endDatePlaceholder:
            '\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F',
        startDatetimePlaceholder:
            '\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F \u043D\u0430\u0447\u0430\u043B\u0430',
        endDatetimePlaceholder:
            '\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F',
        startMonthPlaceholder: 'Start Month',
        endMonthPlaceholder: 'End Month',
        monthBeforeYear: true,
        firstDayOfWeek: 0,
        today: '\u0421\u0435\u0433\u043E\u0434\u043D\u044F',
    },
    DataTable: {
        checkTableAll:
            '\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435 \u0432 \u0442\u0430\u0431\u043B\u0438\u0446\u0435',
        uncheckTableAll:
            '\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0432\u0441\u0435 \u0432 \u0442\u0430\u0431\u043B\u0438\u0446\u0435',
        confirm:
            '\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C',
        clear: '\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C',
    },
    LegacyTransfer: {
        sourceTitle: '\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A',
        targetTitle:
            '\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435',
    },
    Transfer: {
        selectAll: 'Select all',
        unselectAll: 'Unselect all',
        clearAll: 'Clear',
        total: (num) => `Total ${num} items`,
        selected: (num) => `${num} items selected`,
    },
    Empty: {
        description: '\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445',
    },
    Select: {
        placeholder: '\u0412\u044B\u0431\u0440\u0430\u0442\u044C',
    },
    TimePicker: {
        placeholder:
            '\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0440\u0435\u043C\u044F',
        positiveText: 'OK',
        negativeText: '\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C',
        now: '\u0421\u0435\u0439\u0447\u0430\u0441',
    },
    Pagination: {
        goto: '\u041F\u0435\u0440\u0435\u0439\u0442\u0438',
        selectionSuffix: '\u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430',
    },
    DynamicTags: {
        add: '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C',
    },
    Log: {
        loading: '\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430',
    },
    Input: {
        placeholder: '\u0412\u0432\u0435\u0441\u0442\u0438',
    },
    InputNumber: {
        placeholder: '\u0412\u0432\u0435\u0441\u0442\u0438',
    },
    DynamicInput: {
        create: '\u0421\u043E\u0437\u0434\u0430\u0442\u044C',
    },
    ThemeEditor: {
        title: '\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440 \u0442\u0435\u043C\u044B',
        clearAllVars:
            '\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0432\u0441\u0435',
        clearSearch:
            '\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u0438\u0441\u043A',
        filterCompName:
            '\u0424\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E \u0438\u043C\u0435\u043D\u0438 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430',
        filterVarName:
            '\u0424\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C \u0438\u043C\u0435\u043D\u0430 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445',
        import: '\u0418\u043C\u043F\u043E\u0440\u0442',
        export: '\u042D\u043A\u0441\u043F\u043E\u0440\u0442',
        restore: '\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C',
    },
    Image: {
        tipPrevious: 'Previous picture (\u2190)',
        tipNext: 'Next picture (\u2192)',
        tipCounterclockwise: 'Counterclockwise',
        tipClockwise: 'Clockwise',
        tipZoomOut: 'Zoom out',
        tipZoomIn: 'Zoom in',
        tipClose: 'Close (Esc)',
        tipOriginalSize: 'Zoom to original size',
    },
};
exports.default = ruRu;
