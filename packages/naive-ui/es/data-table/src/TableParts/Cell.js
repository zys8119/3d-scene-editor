import { defineComponent, h } from 'vue';
import { get } from 'lodash-es';
import { NEllipsis } from '../../../ellipsis';
export default defineComponent({
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
                    ? renderCell(get(row, key), row, column)
                    : get(row, key);
            }
        }
        if (ellipsis) {
            if (typeof ellipsis === 'object') {
                const { mergedTheme } = this;
                return h(
                    NEllipsis,
                    Object.assign({}, ellipsis, {
                        theme: mergedTheme.peers.Ellipsis,
                        themeOverrides: mergedTheme.peerOverrides.Ellipsis,
                    }),
                    { default: () => cell }
                );
            } else {
                return h(
                    'span',
                    { class: `${this.clsPrefix}-data-table-td__ellipsis` },
                    cell
                );
            }
        }
        return cell;
    },
});
