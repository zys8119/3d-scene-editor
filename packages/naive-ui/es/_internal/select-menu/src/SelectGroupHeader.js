import { h, defineComponent, inject } from 'vue';
import { render } from '../../../_utils';
import { internalSelectionMenuInjectionKey } from './interface';
export default defineComponent({
    name: 'NBaseSelectGroupHeader',
    props: {
        clsPrefix: {
            type: String,
            required: true,
        },
        tmNode: {
            type: Object,
            required: true,
        },
    },
    setup() {
        const { renderLabelRef, renderOptionRef, labelFieldRef, nodePropsRef } =
            inject(internalSelectionMenuInjectionKey);
        return {
            labelField: labelFieldRef,
            nodeProps: nodePropsRef,
            renderLabel: renderLabelRef,
            renderOption: renderOptionRef,
        };
    },
    render() {
        const {
            clsPrefix,
            renderLabel,
            renderOption,
            nodeProps,
            tmNode: { rawNode },
        } = this;
        const attrs =
            nodeProps === null || nodeProps === void 0
                ? void 0
                : nodeProps(rawNode);
        const children = renderLabel
            ? renderLabel(rawNode, false)
            : render(rawNode[this.labelField], rawNode, false);
        const node = h(
            'div',
            Object.assign({}, attrs, {
                class: [
                    `${clsPrefix}-base-select-group-header`,
                    attrs === null || attrs === void 0 ? void 0 : attrs.class,
                ],
            }),
            children
        );
        return rawNode.render
            ? rawNode.render({ node, option: rawNode })
            : renderOption
            ? renderOption({ node, option: rawNode, selected: false })
            : node;
    },
});
