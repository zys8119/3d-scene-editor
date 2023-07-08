import {
    h,
    computed,
    defineComponent,
    inject,
    toRef,
    watch,
    nextTick,
    watchEffect,
} from 'vue';
import { createTreeMate } from 'treemate';
import { happensIn } from 'seemly';
import { createTmOptions } from '../../select/src/utils';
import { useConfig, useTheme, useThemeClass } from '../../_mixins';
import { NInternalSelectMenu } from '../../_internal';
import { call, keysOf, warn } from '../../_utils';
import { popselectLight } from '../styles';
import { popselectInjectionKey } from './interface';
import style from './styles/index.cssr';
export const panelProps = {
    multiple: Boolean,
    value: {
        type: [String, Number, Array],
        default: null,
    },
    cancelable: Boolean,
    options: {
        type: Array,
        default: () => [],
    },
    size: {
        type: String,
        default: 'medium',
    },
    scrollable: Boolean,
    'onUpdate:value': [Function, Array],
    onUpdateValue: [Function, Array],
    onMouseenter: Function,
    onMouseleave: Function,
    renderLabel: Function,
    showCheckmark: {
        type: Boolean,
        default: void 0,
    },
    nodeProps: Function,
    virtualScroll: Boolean,
    onChange: [Function, Array],
};
export const panelPropKeys = keysOf(panelProps);
export default defineComponent({
    name: 'PopselectPanel',
    props: panelProps,
    setup(props) {
        if (process.env.NODE_ENV !== 'production') {
            watchEffect(() => {
                if (props.onChange !== void 0) {
                    warn(
                        'popselect',
                        '`on-change` is deprecated, please use `on-update:value` instead.'
                    );
                }
            });
        }
        const NPopselect = inject(popselectInjectionKey);
        const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
        const themeRef = useTheme(
            'Popselect',
            '-pop-select',
            style,
            popselectLight,
            NPopselect.props,
            mergedClsPrefixRef
        );
        const treeMateRef = computed(() => {
            return createTreeMate(
                props.options,
                createTmOptions('value', 'children')
            );
        });
        function doUpdateValue(value, option) {
            const {
                onUpdateValue,
                'onUpdate:value': _onUpdateValue,
                onChange,
            } = props;
            if (onUpdateValue) call(onUpdateValue, value, option);
            if (_onUpdateValue) {
                call(_onUpdateValue, value, option);
            }
            if (onChange) call(onChange, value, option);
        }
        function handleToggle(tmNode) {
            toggle(tmNode.key);
        }
        function handleMenuMousedown(e) {
            if (!happensIn(e, 'action')) e.preventDefault();
        }
        function toggle(value) {
            const {
                value: { getNode },
            } = treeMateRef;
            if (props.multiple) {
                if (Array.isArray(props.value)) {
                    const newValue = [];
                    const newOptions = [];
                    let shouldAddValue = true;
                    props.value.forEach((v) => {
                        if (v === value) {
                            shouldAddValue = false;
                            return;
                        }
                        const tmNode = getNode(v);
                        if (tmNode) {
                            newValue.push(tmNode.key);
                            newOptions.push(tmNode.rawNode);
                        }
                    });
                    if (shouldAddValue) {
                        newValue.push(value);
                        newOptions.push(getNode(value).rawNode);
                    }
                    doUpdateValue(newValue, newOptions);
                } else {
                    const tmNode = getNode(value);
                    if (tmNode) {
                        doUpdateValue([value], [tmNode.rawNode]);
                    }
                }
            } else {
                if (props.value === value && props.cancelable) {
                    doUpdateValue(null, null);
                } else {
                    const tmNode = getNode(value);
                    if (tmNode) {
                        doUpdateValue(value, tmNode.rawNode);
                    }
                    const { 'onUpdate:show': _onUpdateShow, onUpdateShow } =
                        NPopselect.props;
                    if (_onUpdateShow) call(_onUpdateShow, false);
                    if (onUpdateShow) call(onUpdateShow, false);
                    NPopselect.setShow(false);
                }
            }
            void nextTick(() => {
                NPopselect.syncPosition();
            });
        }
        watch(toRef(props, 'options'), () => {
            void nextTick(() => {
                NPopselect.syncPosition();
            });
        });
        const cssVarsRef = computed(() => {
            const {
                self: { menuBoxShadow },
            } = themeRef.value;
            return {
                '--n-menu-box-shadow': menuBoxShadow,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass('select', void 0, cssVarsRef, NPopselect.props)
            : void 0;
        return {
            mergedTheme: NPopselect.mergedThemeRef,
            mergedClsPrefix: mergedClsPrefixRef,
            treeMate: treeMateRef,
            handleToggle,
            handleMenuMousedown,
            cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
            themeClass:
                themeClassHandle === null || themeClassHandle === void 0
                    ? void 0
                    : themeClassHandle.themeClass,
            onRender:
                themeClassHandle === null || themeClassHandle === void 0
                    ? void 0
                    : themeClassHandle.onRender,
        };
    },
    render() {
        var _a;
        (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
        return h(
            NInternalSelectMenu,
            {
                clsPrefix: this.mergedClsPrefix,
                focusable: true,
                nodeProps: this.nodeProps,
                class: [
                    `${this.mergedClsPrefix}-popselect-menu`,
                    this.themeClass,
                ],
                style: this.cssVars,
                theme: this.mergedTheme.peers.InternalSelectMenu,
                themeOverrides:
                    this.mergedTheme.peerOverrides.InternalSelectMenu,
                multiple: this.multiple,
                treeMate: this.treeMate,
                size: this.size,
                value: this.value,
                virtualScroll: this.virtualScroll,
                scrollable: this.scrollable,
                renderLabel: this.renderLabel,
                onToggle: this.handleToggle,
                onMouseenter: this.onMouseenter,
                onMouseleave: this.onMouseenter,
                onMousedown: this.handleMenuMousedown,
                showCheckmark: this.showCheckmark,
            },
            {
                action: () => {
                    var _a2, _b;
                    return (
                        ((_b = (_a2 = this.$slots).action) === null ||
                        _b === void 0
                            ? void 0
                            : _b.call(_a2)) || []
                    );
                },
                empty: () => {
                    var _a2, _b;
                    return (
                        ((_b = (_a2 = this.$slots).empty) === null ||
                        _b === void 0
                            ? void 0
                            : _b.call(_a2)) || []
                    );
                },
            }
        );
    },
});
