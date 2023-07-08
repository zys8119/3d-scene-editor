Object.defineProperty(exports, '__esModule', { value: true });
const vue_1 = require('vue');
const lodash_1 = require('lodash');
const ellipsis_1 = require('../../../ellipsis');
exports.default = (0, vue_1.defineComponent)({
    name: 'DataTableCell',
    props: {
        clsPrefix: {
            type: String,
            required: true,
        },
        row: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
        column: {
            type: Object,
            required: true,
        },
        isSummary: Boolean,
        mergedTheme: {
            type: Object,
            required: true,
        },
        renderCell: Function,
    },
    render() {
        const { isSummary, column, row, renderCell } = this;
        let cell;
        const { render, key, ellipsis } = column;
        if (render && !isSummary) {
            cell = render(row, this.index);
        } else {
            if (isSummary) {
                cell = row[key].value;
            } else {
                cell = renderCell
                    ? renderCell((0, lodash_1.get)(row, key), row, column)
                    : (0, lodash_1.get)(row, key);
            }
        }
        if (ellipsis) {
            if (typeof ellipsis === 'object') {
                const { mergedTheme } = this;
                return (0, vue_1.h)(
                    ellipsis_1.NEllipsis,
                    Object.assign({}, ellipsis, {
                        theme: mergedTheme.peers.Ellipsis,
                        themeOverrides: mergedTheme.peerOverrides.Ellipsis,
                    }),
                    { default: () => cell }
                );
            } else {
                return (0, vue_1.h)(
                    'span',
                    { class: `${this.clsPrefix}-data-table-td__ellipsis` },
                    cell
                );
            }
        }
        return cell;
    },
});
