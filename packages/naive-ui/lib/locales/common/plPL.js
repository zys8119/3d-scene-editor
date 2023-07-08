Object.defineProperty(exports, '__esModule', { value: true });
const plPL = {
    name: 'pl-PL',
    global: {
        undo: 'Cofnij',
        redo: 'Pon\xF3w',
        confirm: 'Potwierd\u017A',
        clear: 'Wyczy\u015B\u0107',
    },
    Popconfirm: {
        positiveText: 'Potwierd\u017A',
        negativeText: 'Anuluj',
    },
    Cascader: {
        placeholder: 'Wybierz',
        loading: '\u0141adowanie',
        loadingRequiredMessage: (label) =>
            `Prosz\u0119 za\u0142adowa\u0107 wszystkie ${label}'s elementy przed sprawdzeniem.`,
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
        clear: 'Wyczy\u015B\u0107',
        now: 'Teraz',
        confirm: 'Potwierd\u017A',
        selectTime: 'Wybierz czas',
        selectDate: 'Wybierz dat\u0119',
        datePlaceholder: 'Wybierz dat\u0119',
        datetimePlaceholder: 'Wybierz dat\u0119 i czas',
        monthPlaceholder: 'Wybierz miesi\u0105c',
        yearPlaceholder: 'Wybierz rok',
        quarterPlaceholder: 'Wybierz kwarta\u0142',
        startDatePlaceholder: 'Data rozpocz\u0119cia',
        endDatePlaceholder: 'Data zako\u0144czenia',
        startDatetimePlaceholder: 'Data i godzina rozpocz\u0119cia',
        endDatetimePlaceholder: 'Data i godzina zako\u0144czenia',
        startMonthPlaceholder: 'Start Month',
        endMonthPlaceholder: 'End Month',
        monthBeforeYear: true,
        firstDayOfWeek: 6,
        today: 'Dzi\u015B',
    },
    DataTable: {
        checkTableAll: 'Zaznacz wszystkie w tabeli',
        uncheckTableAll: 'Odznacz wszystkie w tabeli',
        confirm: 'Potwierd\u017A',
        clear: 'Wyczy\u015B\u0107',
    },
    LegacyTransfer: {
        sourceTitle: '\u0179r\xF3d\u0142o',
        targetTitle: 'Cel',
    },
    Transfer: {
        selectAll: 'Select all',
        unselectAll: 'Unselect all',
        clearAll: 'Clear',
        total: (num) => `Total ${num} items`,
        selected: (num) => `${num} items selected`,
    },
    Empty: {
        description: 'Brak danych',
    },
    Select: {
        placeholder: 'Wybierz',
    },
    TimePicker: {
        placeholder: 'Wybierz czas',
        positiveText: 'Potwierd\u017A',
        negativeText: 'Anuluj',
        now: 'Teraz',
    },
    Pagination: {
        goto: 'Id\u017A do',
        selectionSuffix: 'strona',
    },
    DynamicTags: {
        add: 'Dodaj',
    },
    Log: {
        loading: '\u0141adowanie',
    },
    Input: {
        placeholder: 'Wprowad\u017A dane',
    },
    InputNumber: {
        placeholder: 'Wprowad\u017A dane',
    },
    DynamicInput: {
        create: 'Utw\xF3rz',
    },
    ThemeEditor: {
        title: 'Edytor motyw\xF3w',
        clearAllVars: 'Wyczy\u015B\u0107 wszystkie zmienne',
        clearSearch: 'Wyczy\u015B\u0107 wyszukiwanie',
        filterCompName: 'Nazwa komponentu filtra',
        filterVarName: 'Nazwa zmiennej filtra',
        import: 'Importuj',
        export: 'Eksportuj',
        restore: 'Przywr\xF3\u0107 ustawienia domy\u015Blne',
    },
    Image: {
        tipPrevious: 'Poprzednie zdj\u0119cie (\u2190)',
        tipNext: 'Nast\u0119pne zdj\u0119cie (\u2192)',
        tipCounterclockwise: 'Przeciwnie do ruchu wskaz\xF3wek zegara',
        tipClockwise: 'Zgodnie z ruchem wskaz\xF3wek zegara',
        tipZoomOut: 'Powi\u0119ksz',
        tipZoomIn: 'Pomniejsz',
        tipClose: 'Zamknij (Esc)',
        tipOriginalSize: 'Zoom to original size',
    },
};
exports.default = plPL;
