import { h, defineComponent, ref, inject } from 'vue';
import { render } from '../../_utils';
import { treeInjectionKey } from './interface';
export default defineComponent({
    name: 'TreeNodeContent',
    props: {
        clsPrefix: {
            type: String,
            required: true,
        },
        disabled: Boolean,
        checked: Boolean,
        selected: Boolean,
        onClick: Function,
        onDragstart: Function,
        tmNode: {
            type: Object,
            required: true,
        },
        nodeProps: Object,
    },
    setup(props) {
        const {
            renderLabelRef,
            renderPrefixRef,
            renderSuffixRef,
            labelFieldRef,
        } = inject(treeInjectionKey);
        const selfRef = ref(null);
        function doClick(e) {
            const { onClick } = props;
            if (onClick) onClick(e);
        }
        function handleClick(e) {
            doClick(e);
        }
        return {
            selfRef,
            renderLabel: renderLabelRef,
            renderPrefix: renderPrefixRef,
            renderSuffix: renderSuffixRef,
            labelField: labelFieldRef,
            handleClick,
        };
    },
    render() {
        var _a, _b, _c, _d;
        const {
            clsPrefix,
            labelField,
            nodeProps,
            checked = false,
            selected = false,
            renderLabel,
            renderPrefix,
            renderSuffix,
            handleClick,
            onDragstart,
            tmNode: {
                rawNode,
                rawNode: { prefix, suffix, [labelField]: label },
            },
        } = this;
        return h(
            'span',
            Object.assign({}, nodeProps, {
                ref: 'selfRef',
                class: [
                    `${clsPrefix}-tree-node-content`,
                    nodeProps === null || nodeProps === void 0
                        ? void 0
                        : nodeProps.class,
                ],
                onClick: handleClick,
                draggable: onDragstart === void 0 ? void 0 : true,
                onDragstart,
            }),
            (_b = (_a = this.$slots).prefix) === null || _b === void 0
                ? void 0
                : _b.call(_a, this.tmNode),
            renderPrefix || prefix
                ? h(
                      'div',
                      { class: `${clsPrefix}-tree-node-content__prefix` },
                      renderPrefix
                          ? renderPrefix({
                                option: rawNode,
                                selected,
                                checked,
                            })
                          : render(prefix)
                  )
                : null,
            h(
                'div',
                { class: `${clsPrefix}-tree-node-content__text` },
                renderLabel
                    ? renderLabel({
                          option: rawNode,
                          selected,
                          checked,
                      })
                    : render(label)
            ),
            (_d = (_c = this.$slots).suffix) === null || _d === void 0
                ? void 0
                : _d.call(_c, this.tmNode),
            renderSuffix || suffix
                ? h(
                      'div',
                      { class: `${clsPrefix}-tree-node-content__suffix` },
                      renderSuffix
                          ? renderSuffix({
                                option: rawNode,
                                selected,
                                checked,
                            })
                          : render(suffix)
                  )
                : null
        );
    },
});
