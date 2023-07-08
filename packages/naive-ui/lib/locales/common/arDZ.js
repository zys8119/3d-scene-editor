Object.defineProperty(exports, '__esModule', { value: true });
const arDZ = {
    name: 'ar-DZ',
    global: {
        undo: '\u062A\u0631\u0627\u062C\u0639',
        redo: '\u0625\u0639\u0627\u062F\u0629',
        confirm: '\u062A\u0623\u0643\u064A\u062F',
        clear: '\u0645\u0633\u062D',
    },
    Popconfirm: {
        positiveText: '\u062A\u0623\u0643\u064A\u062F',
        negativeText: '\u0625\u0644\u063A\u0627\u0621',
    },
    Cascader: {
        placeholder:
            '\u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u062D\u062F\u064A\u062F',
        loading:
            '\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644',
        loadingRequiredMessage: (label) =>
            `\u064A\u0631\u062C\u0649 \u062A\u062D\u0645\u064A\u0644 \u062C\u0645\u064A\u0639 \u0627\u0644\u0640 ${label} \u0627\u0644\u0641\u0631\u0639\u064A\u0629 \u0642\u0628\u0644 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646\u0647\u0627.`,
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
        clear: '\u0645\u0633\u062D',
        now: '\u0627\u0644\u0622\u0646',
        confirm: '\u062A\u0623\u0643\u064A\u062F',
        selectTime:
            '\u0625\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0648\u0642\u062A',
        selectDate:
            '\u0625\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u062A\u0627\u0631\u064A\u062E',
        datePlaceholder:
            '\u0625\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u062A\u0627\u0631\u064A\u062E',
        datetimePlaceholder:
            '\u0625\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u062A\u0627\u0631\u064A\u062E \u0648\u0627\u0644\u0648\u0642\u062A',
        monthPlaceholder:
            '\u0625\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0634\u0647\u0631',
        yearPlaceholder:
            '\u0625\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0633\u0646\u0629',
        quarterPlaceholder:
            '\u0625\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0631\u0628\u0639',
        startDatePlaceholder:
            '\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0621',
        endDatePlaceholder:
            '\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0646\u062A\u0647\u0627\u0621',
        startDatetimePlaceholder:
            '\u062A\u0627\u0631\u064A\u062E \u0648\u0648\u0642\u062A \u0627\u0644\u0628\u062F\u0621',
        endDatetimePlaceholder:
            '\u062A\u0627\u0631\u064A\u062E \u0648\u0648\u0642\u062A \u0627\u0644\u0625\u0646\u062A\u0647\u0627\u0621',
        startMonthPlaceholder:
            '\u0634\u0647\u0631 \u0627\u0644\u0628\u062F\u0621',
        endMonthPlaceholder:
            '\u0634\u0647\u0631 \u0627\u0644\u0625\u0646\u062A\u0647\u0627\u0621',
        monthBeforeYear: true,
        firstDayOfWeek: 6,
        today: '\u0627\u0644\u064A\u0648\u0645',
    },
    DataTable: {
        checkTableAll:
            '\u062A\u062D\u062F\u064A\u062F \u0643\u0644 \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0641\u064A \u0627\u0644\u062C\u062F\u0648\u0644',
        uncheckTableAll:
            '\u0625\u0644\u063A\u0627\u0621 \u062A\u062D\u062F\u064A\u062F \u0643\u0644 \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0641\u064A \u0627\u0644\u062C\u062F\u0648\u0644',
        confirm: '\u062A\u0623\u0643\u064A\u062F',
        clear: '\u0645\u0633\u062D',
    },
    LegacyTransfer: {
        sourceTitle: '\u0627\u0644\u0645\u0635\u062F\u0631',
        targetTitle: '\u0627\u0644\u0647\u062F\u0641',
    },
    Transfer: {
        selectAll: '\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0643\u0644',
        unselectAll:
            '\u0625\u0644\u063A\u0627\u0621 \u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0643\u0644',
        clearAll: '\u0645\u0633\u062D',
        total: (num) =>
            `\u0625\u062C\u0645\u0627\u0644\u064A ${num} \u0639\u0646\u0635\u0631`,
        selected: (num) =>
            `${num} \u0639\u0646\u0635\u0631 \u0645\u062D\u062F\u062F`,
    },
    Empty: {
        description:
            '\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A',
    },
    Select: {
        placeholder:
            '\u064A\u0631\u062C\u0649 \u0627\u0644\u0625\u062E\u062A\u064A\u0627\u0631',
    },
    TimePicker: {
        placeholder:
            '\u0625\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0648\u0642\u062A',
        positiveText: '\u062A\u0623\u0643\u064A\u062F',
        negativeText: '\u0625\u0644\u063A\u0627\u0621',
        now: '\u0627\u0644\u0622\u0646',
    },
    Pagination: {
        goto: '\u0625\u0630\u0647\u0628 \u0625\u0644\u0649',
        selectionSuffix: '\u0635\u0641\u062D\u0629',
    },
    DynamicTags: {
        add: '\u0625\u0636\u0627\u0641\u0629',
    },
    Log: {
        loading:
            '\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644',
    },
    Input: {
        placeholder:
            '\u064A\u0631\u062C\u0649 \u0627\u0644\u0625\u062F\u062E\u0627\u0644',
    },
    InputNumber: {
        placeholder:
            '\u064A\u0631\u062C\u0649 \u0627\u0644\u0625\u062F\u062E\u0627\u0644',
    },
    DynamicInput: {
        create: '\u0625\u0646\u0634\u0627\u0621',
    },
    ThemeEditor: {
        title: '\u0645\u062D\u0631\u0631 \u0627\u0644\u0646\u0645\u0637',
        clearAllVars:
            '\u0645\u0633\u062D \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u062A\u063A\u064A\u0631\u0627\u062A',
        clearSearch: '\u0645\u0633\u062D \u0627\u0644\u0628\u062D\u062B',
        filterCompName:
            '\u062A\u0635\u0641\u064A\u0629 \u0625\u0633\u0645 \u0627\u0644\u0645\u0643\u0648\u0646',
        filterVarName:
            '\u062A\u0635\u0641\u064A\u0629 \u0625\u0633\u0645 \u0627\u0644\u0645\u062A\u063A\u064A\u0631',
        import: '\u0625\u0633\u062A\u064A\u0631\u0627\u062F',
        export: '\u062A\u0635\u062F\u064A\u0631',
        restore:
            '\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0625\u0644\u0649 \u0627\u0644\u0625\u0641\u062A\u0631\u0627\u0636\u064A',
    },
    Image: {
        tipPrevious:
            '(\u2192) \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629',
        tipNext:
            '(\u2190) \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629',
        tipCounterclockwise:
            '\u0639\u0643\u0633 \u0639\u0642\u0627\u0631\u0628 \u0627\u0644\u0633\u0627\u0639\u0629',
        tipClockwise:
            '\u0625\u062A\u062C\u0627\u0647 \u0639\u0642\u0627\u0631\u0628 \u0627\u0644\u0633\u0627\u0639\u0629',
        tipZoomOut: '\u062A\u0643\u0628\u064A\u0631',
        tipZoomIn: '\u062A\u0635\u063A\u064A\u0631',
        tipClose: '\u0625\u063A\u0644\u0627\u0642 (Esc \u0632\u0631)',
        tipOriginalSize:
            '\u062A\u0643\u0628\u064A\u0631 \u0625\u0644\u0649 \u0627\u0644\u062D\u062C\u0645 \u0627\u0644\u0623\u0635\u0644\u064A',
    },
};
exports.default = arDZ;
