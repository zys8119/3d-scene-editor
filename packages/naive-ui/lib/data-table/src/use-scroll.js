Object.defineProperty(exports, '__esModule', { value: true });
exports.useScroll = void 0;
const seemly_1 = require('seemly');
const vue_1 = require('vue');
const _utils_1 = require('../../_utils');
const utils_1 = require('./utils');
function useScroll(
    props,
    { mainTableInstRef, mergedCurrentPageRef, bodyWidthRef, scrollPartRef }
) {
    let scrollLeft = 0;
    const leftActiveFixedColKeyRef = (0, vue_1.ref)(null);
    const leftActiveFixedChildrenColKeysRef = (0, vue_1.ref)([]);
    const rightActiveFixedColKeyRef = (0, vue_1.ref)(null);
    const rightActiveFixedChildrenColKeysRef = (0, vue_1.ref)([]);
    const styleScrollXRef = (0, vue_1.computed)(() => {
        return (0, _utils_1.formatLength)(props.scrollX);
    });
    const leftFixedColumnsRef = (0, vue_1.computed)(() => {
        return props.columns.filter((column) => column.fixed === 'left');
    });
    const rightFixedColumnsRef = (0, vue_1.computed)(() => {
        return props.columns.filter((column) => column.fixed === 'right');
    });
    const fixedColumnLeftMapRef = (0, vue_1.computed)(() => {
        const columns = {};
        let left = 0;
        function traverse(cols) {
            cols.forEach((col) => {
                const positionInfo = { start: left, end: 0 };
                columns[(0, utils_1.getColKey)(col)] = positionInfo;
                if ('children' in col) {
                    traverse(col.children);
                    positionInfo.end = left;
                } else {
                    left += (0, utils_1.getNumberColWidth)(col) || 0;
                    positionInfo.end = left;
                }
            });
        }
        traverse(leftFixedColumnsRef.value);
        return columns;
    });
    const fixedColumnRightMapRef = (0, vue_1.computed)(() => {
        const columns = {};
        let right = 0;
        function traverse(cols) {
            for (let i = cols.length - 1; i >= 0; --i) {
                const col = cols[i];
                const positionInfo = { start: right, end: 0 };
                columns[(0, utils_1.getColKey)(col)] = positionInfo;
                if ('children' in col) {
                    traverse(col.children);
                    positionInfo.end = right;
                } else {
                    right += (0, utils_1.getNumberColWidth)(col) || 0;
                    positionInfo.end = right;
                }
            }
        }
        traverse(rightFixedColumnsRef.value);
        return columns;
    });
    function deriveActiveLeftFixedColumn() {
        var _a, _b;
        const { value: leftFixedColumns } = leftFixedColumnsRef;
        let leftWidth = 0;
        const { value: fixedColumnLeftMap } = fixedColumnLeftMapRef;
        let leftActiveFixedColKey = null;
        for (let i = 0; i < leftFixedColumns.length; ++i) {
            const key = (0, utils_1.getColKey)(leftFixedColumns[i]);
            if (
                scrollLeft >
                (((_a = fixedColumnLeftMap[key]) === null || _a === void 0
                    ? void 0
                    : _a.start) || 0) -
                    leftWidth
            ) {
                leftActiveFixedColKey = key;
                leftWidth =
                    ((_b = fixedColumnLeftMap[key]) === null || _b === void 0
                        ? void 0
                        : _b.end) || 0;
            } else {
                break;
            }
        }
        leftActiveFixedColKeyRef.value = leftActiveFixedColKey;
    }
    function deriveActiveLeftFixedChildrenColumns() {
        leftActiveFixedChildrenColKeysRef.value = [];
        let activeLeftFixedColumn = props.columns.find(
            (col) =>
                (0, utils_1.getColKey)(col) === leftActiveFixedColKeyRef.value
        );
        while (activeLeftFixedColumn && 'children' in activeLeftFixedColumn) {
            const length = activeLeftFixedColumn.children.length;
            if (length === 0) break;
            const nextActiveLeftFixedColumn =
                activeLeftFixedColumn.children[length - 1];
            leftActiveFixedChildrenColKeysRef.value.push(
                (0, utils_1.getColKey)(nextActiveLeftFixedColumn)
            );
            activeLeftFixedColumn = nextActiveLeftFixedColumn;
        }
    }
    function deriveActiveRightFixedColumn() {
        var _a, _b;
        const { value: rightFixedColumns } = rightFixedColumnsRef;
        const scrollWidth = Number(props.scrollX);
        const { value: tableWidth } = bodyWidthRef;
        if (tableWidth === null) return;
        let rightWidth = 0;
        let rightActiveFixedColKey = null;
        const { value: fixedColumnRightMap } = fixedColumnRightMapRef;
        for (let i = rightFixedColumns.length - 1; i >= 0; --i) {
            const key = (0, utils_1.getColKey)(rightFixedColumns[i]);
            if (
                Math.round(
                    scrollLeft +
                        (((_a = fixedColumnRightMap[key]) === null ||
                        _a === void 0
                            ? void 0
                            : _a.start) || 0) +
                        tableWidth -
                        rightWidth
                ) < scrollWidth
            ) {
                rightActiveFixedColKey = key;
                rightWidth =
                    ((_b = fixedColumnRightMap[key]) === null || _b === void 0
                        ? void 0
                        : _b.end) || 0;
            } else {
                break;
            }
        }
        rightActiveFixedColKeyRef.value = rightActiveFixedColKey;
    }
    function deriveActiveRightFixedChildrenColumns() {
        rightActiveFixedChildrenColKeysRef.value = [];
        let activeRightFixedColumn = props.columns.find(
            (col) =>
                (0, utils_1.getColKey)(col) === rightActiveFixedColKeyRef.value
        );
        while (
            activeRightFixedColumn &&
            'children' in activeRightFixedColumn &&
            activeRightFixedColumn.children.length
        ) {
            const nextActiveRightFixedColumn =
                activeRightFixedColumn.children[0];
            rightActiveFixedChildrenColKeysRef.value.push(
                (0, utils_1.getColKey)(nextActiveRightFixedColumn)
            );
            activeRightFixedColumn = nextActiveRightFixedColumn;
        }
    }
    function getScrollElements() {
        const header = mainTableInstRef.value
            ? mainTableInstRef.value.getHeaderElement()
            : null;
        const body = mainTableInstRef.value
            ? mainTableInstRef.value.getBodyElement()
            : null;
        return {
            header,
            body,
        };
    }
    function scrollMainTableBodyToTop() {
        const { body } = getScrollElements();
        if (body) {
            body.scrollTop = 0;
        }
    }
    function handleTableHeaderScroll() {
        if (scrollPartRef.value === 'head') {
            (0, seemly_1.beforeNextFrameOnce)(syncScrollState);
        }
    }
    function handleTableBodyScroll(e) {
        var _a;
        (_a = props.onScroll) === null || _a === void 0
            ? void 0
            : _a.call(props, e);
        if (scrollPartRef.value === 'body') {
            (0, seemly_1.beforeNextFrameOnce)(syncScrollState);
        }
    }
    function syncScrollState() {
        const { header, body } = getScrollElements();
        if (!body) return;
        const { value: tableWidth } = bodyWidthRef;
        if (tableWidth === null) return;
        const { value: scrollPart } = scrollPartRef;
        if (props.maxHeight || props.flexHeight) {
            if (!header) return;
            if (scrollPart === 'head') {
                scrollLeft = header.scrollLeft;
                body.scrollLeft = scrollLeft;
            } else {
                scrollLeft = body.scrollLeft;
                header.scrollLeft = scrollLeft;
            }
        } else {
            scrollLeft = body.scrollLeft;
        }
        deriveActiveLeftFixedColumn();
        deriveActiveLeftFixedChildrenColumns();
        deriveActiveRightFixedColumn();
        deriveActiveRightFixedChildrenColumns();
    }
    function setHeaderScrollLeft(left) {
        const { header } = getScrollElements();
        if (!header) return;
        header.scrollLeft = left;
        syncScrollState();
    }
    (0, vue_1.watch)(mergedCurrentPageRef, () => {
        scrollMainTableBodyToTop();
    });
    return {
        styleScrollXRef,
        fixedColumnLeftMapRef,
        fixedColumnRightMapRef,
        leftFixedColumnsRef,
        rightFixedColumnsRef,
        leftActiveFixedColKeyRef,
        leftActiveFixedChildrenColKeysRef,
        rightActiveFixedColKeyRef,
        rightActiveFixedChildrenColKeysRef,
        syncScrollState,
        handleTableBodyScroll,
        handleTableHeaderScroll,
        setHeaderScrollLeft,
    };
}
exports.useScroll = useScroll;
