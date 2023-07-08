const koKR = {
    name: 'ko-KR',
    global: {
        undo: '\uC2E4\uD589 \uCDE8\uC18C',
        redo: '\uB2E4\uC2DC \uC2E4\uD589',
        confirm: '\uD655\uC778',
        clear: '\uC9C0\uC6B0\uAE30',
    },
    Popconfirm: {
        positiveText: '\uD655\uC778',
        negativeText: '\uCDE8\uC18C',
    },
    Cascader: {
        placeholder: '\uC120\uD0DD\uD574 \uC8FC\uC138\uC694',
        loading: '\uBD88\uB7EC\uC624\uB294 \uC911',
        loadingRequiredMessage: (label) =>
            `${label}\uC758 \uBAA8\uB4E0 \uD558\uC704 \uD56D\uBAA9\uC744 \uBD88\uB7EC\uC628 \uB4A4\uC5D0 \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`,
    },
    Time: {
        dateFormat: 'yyyy-MM-dd',
        dateTimeFormat: 'yyyy-MM-dd HH:mm:ss',
    },
    DatePicker: {
        yearFormat: 'yyyy\uB144',
        monthFormat: 'MMM',
        dayFormat: 'eeeeee',
        yearTypeFormat: 'yyyy',
        monthTypeFormat: 'yyyy-MM',
        dateFormat: 'yyyy-MM-dd',
        dateTimeFormat: 'yyyy-MM-dd HH:mm:ss',
        quarterFormat: 'yyyy-qqq',
        clear: '\uC9C0\uC6B0\uAE30',
        now: '\uD604\uC7AC',
        confirm: '\uD655\uC778',
        selectTime: '\uC2DC\uAC04 \uC120\uD0DD',
        selectDate: '\uB0A0\uC9DC \uC120\uD0DD',
        datePlaceholder: '\uB0A0\uC9DC \uC120\uD0DD',
        datetimePlaceholder: '\uB0A0\uC9DC \uBC0F \uC2DC\uAC04 \uC120\uD0DD',
        monthPlaceholder: '\uC6D4 \uC120\uD0DD',
        yearPlaceholder: '\uB144 \uC120\uD0DD',
        quarterPlaceholder: '\uBD84\uAE30 \uC120\uD0DD',
        startDatePlaceholder: '\uC2DC\uC791 \uB0A0\uC9DC',
        endDatePlaceholder: '\uC885\uB8CC \uB0A0\uC9DC',
        startDatetimePlaceholder:
            '\uC2DC\uC791 \uB0A0\uC9DC \uBC0F \uC2DC\uAC04',
        endDatetimePlaceholder: '\uC885\uB8CC \uB0A0\uC9DC \uBC0F \uC2DC\uAC04',
        startMonthPlaceholder: '\uC2DC\uC791 \uC6D4',
        endMonthPlaceholder: '\uC885\uB8CC \uC6D4',
        monthBeforeYear: false,
        firstDayOfWeek: 6,
        today: '\uC624\uB298',
    },
    DataTable: {
        checkTableAll: '\uBAA8\uB450 \uC120\uD0DD',
        uncheckTableAll: '\uBAA8\uB450 \uC120\uD0DD \uD574\uC81C',
        confirm: '\uD655\uC778',
        clear: '\uC9C0\uC6B0\uAE30',
    },
    LegacyTransfer: {
        sourceTitle: '\uC6D0\uBCF8',
        targetTitle: '\uD0C0\uAE43',
    },
    Transfer: {
        selectAll: '\uC804\uCCB4 \uC120\uD0DD',
        unselectAll: '\uC804\uCCB4 \uD574\uC81C',
        clearAll: '\uC804\uCCB4 \uC0AD\uC81C',
        total: (num) => `\uCD1D ${num} \uAC1C`,
        selected: (num) => `${num} \uAC1C \uC120\uD0DD`,
    },
    Empty: {
        description: '\uB370\uC774\uD130 \uC5C6\uC74C',
    },
    Select: {
        placeholder: '\uC120\uD0DD\uD574 \uC8FC\uC138\uC694',
    },
    TimePicker: {
        placeholder: '\uC2DC\uAC04 \uC120\uD0DD',
        positiveText: '\uD655\uC778',
        negativeText: '\uCDE8\uC18C',
        now: '\uD604\uC7AC \uC2DC\uAC04',
    },
    Pagination: {
        goto: '\uC774\uB3D9',
        selectionSuffix: '\uD398\uC774\uC9C0',
    },
    DynamicTags: {
        add: '\uCD94\uAC00',
    },
    Log: {
        loading: '\uBD88\uB7EC\uC624\uB294 \uC911',
    },
    Input: {
        placeholder: '\uC785\uB825\uD574 \uC8FC\uC138\uC694',
    },
    InputNumber: {
        placeholder: '\uC785\uB825\uD574 \uC8FC\uC138\uC694',
    },
    DynamicInput: {
        create: '\uCD94\uAC00',
    },
    ThemeEditor: {
        title: '\uD14C\uB9C8 \uD3B8\uC9D1\uAE30',
        clearAllVars: '\uBAA8\uB4E0 \uBCC0\uC218 \uC9C0\uC6B0\uAE30',
        clearSearch: '\uAC80\uC0C9 \uC9C0\uC6B0\uAE30',
        filterCompName: '\uAD6C\uC131 \uC694\uC18C \uC774\uB984 \uD544\uD130',
        filterVarName: '\uBCC0\uC218 \uC774\uB984 \uD544\uD130',
        import: '\uAC00\uC838\uC624\uAE30',
        export: '\uB0B4\uBCF4\uB0B4\uAE30',
        restore: '\uAE30\uBCF8\uC73C\uB85C \uC7AC\uC124\uC815',
    },
    Image: {
        tipPrevious: '\uC774\uC804 (\u2190)',
        tipNext: '\uB2E4\uC74C (\u2192)',
        tipCounterclockwise:
            '\uC2DC\uACC4 \uBC18\uB300 \uBC29\uD5A5\uC73C\uB85C \uD68C\uC804',
        tipClockwise: '\uC2DC\uACC4 \uBC29\uD5A5\uC73C\uB85C \uD68C\uC804',
        tipZoomOut: '\uCD95\uC18C',
        tipZoomIn: '\uD655\uB300',
        tipClose: '\uB2EB\uAE30 (Esc)',
        tipOriginalSize: '\uC6D0\uBCF8 \uD06C\uAE30\uB85C \uD655\uB300',
    },
};
export default koKR;
