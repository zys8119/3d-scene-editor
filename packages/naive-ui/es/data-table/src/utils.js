import { depx } from 'seemly';
import { formatLength } from '../../_utils';
export const SELECTION_COL_WIDTH = 40;
export const EXPAND_COL_WIDTH = 40;
export function getNumberColWidth(col) {
    if (col.type === 'selection') {
        return col.width === void 0 ? SELECTION_COL_WIDTH : depx(col.width);
    }
    if (col.type === 'expand') {
        return col.width === void 0 ? EXPAND_COL_WIDTH : depx(col.width);
    }
    if ('children' in col) return void 0;
    if (typeof col.width === 'string') {
        return depx(col.width);
    }
    return col.width;
}
export function getStringColWidth(col) {
    var _a, _b;
    if (col.type === 'selection') {
        return formatLength(
            (_a = col.width) !== null && _a !== void 0
                ? _a
                : SELECTION_COL_WIDTH
        );
    }
    if (col.type === 'expand') {
        return formatLength(
            (_b = col.width) !== null && _b !== void 0 ? _b : EXPAND_COL_WIDTH
        );
    }
    if ('children' in col) {
        return void 0;
    }
    return formatLength(col.width);
}
export function getColKey(col) {
    if (col.type === 'selection') return '__n_selection__';
    if (col.type === 'expand') return '__n_expand__';
    return col.key;
}
export function createShallowClonedObject(object) {
    if (!object) return object;
    if (typeof object === 'object') {
        return Object.assign({}, object);
    }
    return object;
}
export function getFlagOfOrder(order) {
    if (order === 'ascend') return 1;
    else if (order === 'descend') return -1;
    return 0;
}
export function clampValueFollowCSSRules(value, min, max) {
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
export function createCustomWidthStyle(column, resizedWidth) {
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
        minWidth: formatLength(minWidth) || width,
        maxWidth: formatLength(maxWidth),
    };
}
export function createRowClassName(row, index, rowClassName) {
    if (typeof rowClassName === 'function') return rowClassName(row, index);
    return rowClassName || '';
}
export function shouldUseArrayInSingleMode(column) {
    return (
        column.filterOptionValues !== void 0 ||
        (column.filterOptionValue === void 0 &&
            column.defaultFilterOptionValues !== void 0)
    );
}
export function isColumnSortable(column) {
    if ('children' in column) return false;
    return !!column.sorter;
}
export function isColumnResizable(column) {
    if ('children' in column && !!column.children.length) return false;
    return !!column.resizable;
}
export function isColumnFilterable(column) {
    if ('children' in column) return false;
    return (
        !!column.filter && (!!column.filterOptions || !!column.renderFilterMenu)
    );
}
function getNextOrderOf(order) {
    if (!order) return 'descend';
    else if (order === 'descend') return 'ascend';
    return false;
}
export function createNextSorter(column, currentSortState) {
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
export function isColumnSorting(column, mergedSortState) {
    return (
        mergedSortState.find(
            (state) => state.columnKey === column.key && state.order
        ) !== void 0
    );
}
