Object.defineProperty(exports, '__esModule', { value: true });
exports.isColumnSorting =
    exports.createNextSorter =
    exports.isColumnFilterable =
    exports.isColumnResizable =
    exports.isColumnSortable =
    exports.shouldUseArrayInSingleMode =
    exports.createRowClassName =
    exports.createCustomWidthStyle =
    exports.clampValueFollowCSSRules =
    exports.getFlagOfOrder =
    exports.createShallowClonedObject =
    exports.getColKey =
    exports.getStringColWidth =
    exports.getNumberColWidth =
    exports.EXPAND_COL_WIDTH =
    exports.SELECTION_COL_WIDTH =
        void 0;
const seemly_1 = require('seemly');
const _utils_1 = require('../../_utils');
exports.SELECTION_COL_WIDTH = 40;
exports.EXPAND_COL_WIDTH = 40;
function getNumberColWidth(col) {
    if (col.type === 'selection') {
        return col.width === void 0
            ? exports.SELECTION_COL_WIDTH
            : (0, seemly_1.depx)(col.width);
    }
    if (col.type === 'expand') {
        return col.width === void 0
            ? exports.EXPAND_COL_WIDTH
            : (0, seemly_1.depx)(col.width);
    }
    if ('children' in col) return void 0;
    if (typeof col.width === 'string') {
        return (0, seemly_1.depx)(col.width);
    }
    return col.width;
}
exports.getNumberColWidth = getNumberColWidth;
function getStringColWidth(col) {
    var _a, _b;
    if (col.type === 'selection') {
        return (0, _utils_1.formatLength)(
            (_a = col.width) !== null && _a !== void 0
                ? _a
                : exports.SELECTION_COL_WIDTH
        );
    }
    if (col.type === 'expand') {
        return (0, _utils_1.formatLength)(
            (_b = col.width) !== null && _b !== void 0
                ? _b
                : exports.EXPAND_COL_WIDTH
        );
    }
    if ('children' in col) {
        return void 0;
    }
    return (0, _utils_1.formatLength)(col.width);
}
exports.getStringColWidth = getStringColWidth;
function getColKey(col) {
    if (col.type === 'selection') return '__n_selection__';
    if (col.type === 'expand') return '__n_expand__';
    return col.key;
}
exports.getColKey = getColKey;
function createShallowClonedObject(object) {
    if (!object) return object;
    if (typeof object === 'object') {
        return Object.assign({}, object);
    }
    return object;
}
exports.createShallowClonedObject = createShallowClonedObject;
function getFlagOfOrder(order) {
    if (order === 'ascend') return 1;
    else if (order === 'descend') return -1;
    return 0;
}
exports.getFlagOfOrder = getFlagOfOrder;
function clampValueFollowCSSRules(value, min, max) {
    if (max !== void 0) {
        value = Math.min(
            value,
            typeof max === 'number' ? max : parseFloat(max)
        );
    }
    if (min !== void 0) {
        value = Math.max(
            value,
            typeof min === 'number' ? min : parseFloat(min)
        );
    }
    return value;
}
exports.clampValueFollowCSSRules = clampValueFollowCSSRules;
function createCustomWidthStyle(column, resizedWidth) {
    if (resizedWidth !== void 0) {
        return {
            width: resizedWidth,
            minWidth: resizedWidth,
            maxWidth: resizedWidth,
        };
    }
    const width = getStringColWidth(column);
    const { minWidth, maxWidth } = column;
    return {
        width,
        minWidth: (0, _utils_1.formatLength)(minWidth) || width,
        maxWidth: (0, _utils_1.formatLength)(maxWidth),
    };
}
exports.createCustomWidthStyle = createCustomWidthStyle;
function createRowClassName(row, index, rowClassName) {
    if (typeof rowClassName === 'function') return rowClassName(row, index);
    return rowClassName || '';
}
exports.createRowClassName = createRowClassName;
function shouldUseArrayInSingleMode(column) {
    return (
        column.filterOptionValues !== void 0 ||
        (column.filterOptionValue === void 0 &&
            column.defaultFilterOptionValues !== void 0)
    );
}
exports.shouldUseArrayInSingleMode = shouldUseArrayInSingleMode;
function isColumnSortable(column) {
    if ('children' in column) return false;
    return !!column.sorter;
}
exports.isColumnSortable = isColumnSortable;
function isColumnResizable(column) {
    if ('children' in column && !!column.children.length) return false;
    return !!column.resizable;
}
exports.isColumnResizable = isColumnResizable;
function isColumnFilterable(column) {
    if ('children' in column) return false;
    return (
        !!column.filter && (!!column.filterOptions || !!column.renderFilterMenu)
    );
}
exports.isColumnFilterable = isColumnFilterable;
function getNextOrderOf(order) {
    if (!order) return 'descend';
    else if (order === 'descend') return 'ascend';
    return false;
}
function createNextSorter(column, currentSortState) {
    if (column.sorter === void 0) return null;
    if (
        currentSortState === null ||
        currentSortState.columnKey !== column.key
    ) {
        return {
            columnKey: column.key,
            sorter: column.sorter,
            order: getNextOrderOf(false),
        };
    } else {
        return Object.assign(Object.assign({}, currentSortState), {
            order: getNextOrderOf(currentSortState.order),
        });
    }
}
exports.createNextSorter = createNextSorter;
function isColumnSorting(column, mergedSortState) {
    return (
        mergedSortState.find(
            (state) => state.columnKey === column.key && state.order
        ) !== void 0
    );
}
exports.isColumnSorting = isColumnSorting;
