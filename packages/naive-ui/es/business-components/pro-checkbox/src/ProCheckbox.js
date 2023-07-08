import { computed, defineComponent } from 'vue';
import { useConfig, useTheme } from '../../../_mixins';
import style from './styles/index.cssr';
import { proCheckboxLight } from '../styles';
import { NCheckbox, NCheckboxGroup } from '../../../checkbox';
import { NSpace } from '../../../space';
import { h, isRef } from 'vue';
export const proCheckboxProps = Object.assign(
    Object.assign({}, useTheme.props),
    { options: Array, space: Object }
);
export default defineComponent({
    name: 'ProCheckbox',
    props: proCheckboxProps,
    setup(props, { slots, expose }) {
        const { mergedClsPrefixRef } = useConfig(props);
        const themeRef = useTheme(
            'ProCheckbox',
            '-pro-checkbox',
            style,
            proCheckboxLight,
            props,
            mergedClsPrefixRef
        );
        const cssVarsRef = computed(() => {
            const {
                self: { padding },
            } = themeRef.value;
            return {
                '--n-padding': padding,
            };
        });
        return {
            cssVarsRef,
            mergedClsPrefix: mergedClsPrefixRef,
        };
    },
    render() {
        function renderCheckbox(opts, i) {
            return h(
                NCheckbox,
                Object.assign({ key: i }, opts, {
                    ref: (inst) =>
                        isRef(opts.ref)
                            ? (opts.ref.value = inst)
                            : (opts.ref = inst),
                }),
                {
                    default: () => {
                        var _a, _b;
                        return (
                            opts.label ||
                            ((_b =
                                (_a = opts.slots) === null || _a === void 0
                                    ? void 0
                                    : _a.default) === null || _b === void 0
                                ? void 0
                                : _b.call(_a))
                        );
                    },
                }
            );
        }
        return h(NCheckboxGroup, null, {
            default: () =>
                h(NSpace, Object.assign({}, this.space), {
                    default: () => {
                        var _a;
                        return (_a = this.options) === null || _a === void 0
                            ? void 0
                            : _a.map(renderCheckbox);
                    },
                }),
        });
    },
});
