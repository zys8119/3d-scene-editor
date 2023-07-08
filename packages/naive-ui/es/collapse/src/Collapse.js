import { computed, h, defineComponent, provide, ref } from 'vue';
import { useMergedState } from 'vooks';
import { useConfig, useTheme, useThemeClass } from '../../_mixins';
import { call, createInjectionKey, warn } from '../../_utils';
import { collapseLight } from '../styles';
import style from './styles/index.cssr';
import { useRtl } from '../../_mixins/use-rtl';
export const collapseProps = Object.assign(Object.assign({}, useTheme.props), {
    defaultExpandedNames: {
        type: [Array, String],
        default: null,
    },
    expandedNames: [Array, String],
    arrowPlacement: {
        type: String,
        default: 'left',
    },
    accordion: {
        type: Boolean,
        default: false,
    },
    displayDirective: {
        type: String,
        default: 'if',
    },
    onItemHeaderClick: [Function, Array],
    'onUpdate:expandedNames': [Function, Array],
    onUpdateExpandedNames: [Function, Array],
    onExpandedNamesChange: {
        type: [Function, Array],
        validator: () => {
            if (process.env.NODE_ENV !== 'production') {
                warn(
                    'collapse',
                    '`on-expanded-names-change` is deprecated, please use `on-update:expanded-names` instead.'
                );
            }
            return true;
        },
        default: void 0,
    },
});
export const collapseInjectionKey = createInjectionKey('n-collapse');
export default defineComponent({
    name: 'Collapse',
    props: collapseProps,
    setup(props, { slots }) {
        const { mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } =
            useConfig(props);
        const uncontrolledExpandedNamesRef = ref(props.defaultExpandedNames);
        const controlledExpandedNamesRef = computed(() => props.expandedNames);
        const mergedExpandedNamesRef = useMergedState(
            controlledExpandedNamesRef,
            uncontrolledExpandedNamesRef
        );
        const themeRef = useTheme(
            'Collapse',
            '-collapse',
            style,
            collapseLight,
            props,
            mergedClsPrefixRef
        );
        function doUpdateExpandedNames(names) {
            const {
                'onUpdate:expandedNames': _onUpdateExpandedNames,
                onUpdateExpandedNames,
                onExpandedNamesChange,
            } = props;
            if (onUpdateExpandedNames) {
                call(onUpdateExpandedNames, names);
            }
            if (_onUpdateExpandedNames) {
                call(_onUpdateExpandedNames, names);
            }
            if (onExpandedNamesChange) {
                call(onExpandedNamesChange, names);
            }
            uncontrolledExpandedNamesRef.value = names;
        }
        function doItemHeaderClick(info) {
            const { onItemHeaderClick } = props;
            if (onItemHeaderClick) {
                call(onItemHeaderClick, info);
            }
        }
        function toggleItem(collapse, name, event) {
            const { accordion } = props;
            const { value: expandedNames } = mergedExpandedNamesRef;
            if (accordion) {
                if (collapse) {
                    doUpdateExpandedNames([name]);
                    doItemHeaderClick({ name, expanded: true, event });
                } else {
                    doUpdateExpandedNames([]);
                    doItemHeaderClick({ name, expanded: false, event });
                }
            } else {
                if (!Array.isArray(expandedNames)) {
                    doUpdateExpandedNames([name]);
                    doItemHeaderClick({ name, expanded: true, event });
                } else {
                    const activeNames = expandedNames.slice();
                    const index = activeNames.findIndex(
                        (activeName) => name === activeName
                    );
                    if (~index) {
                        activeNames.splice(index, 1);
                        doUpdateExpandedNames(activeNames);
                        doItemHeaderClick({ name, expanded: false, event });
                    } else {
                        activeNames.push(name);
                        doUpdateExpandedNames(activeNames);
                        doItemHeaderClick({ name, expanded: true, event });
                    }
                }
            }
        }
        provide(collapseInjectionKey, {
            props,
            mergedClsPrefixRef,
            expandedNamesRef: mergedExpandedNamesRef,
            slots,
            toggleItem,
        });
        const rtlEnabledRef = useRtl(
            'Collapse',
            mergedRtlRef,
            mergedClsPrefixRef
        );
        const cssVarsRef = computed(() => {
            const {
                common: { cubicBezierEaseInOut },
                self: {
                    titleFontWeight,
                    dividerColor,
                    titleTextColor,
                    titleTextColorDisabled,
                    textColor,
                    arrowColor,
                    fontSize,
                    titleFontSize,
                    arrowColorDisabled,
                    itemMargin,
                },
            } = themeRef.value;
            return {
                '--n-font-size': fontSize,
                '--n-bezier': cubicBezierEaseInOut,
                '--n-text-color': textColor,
                '--n-divider-color': dividerColor,
                '--n-title-font-size': titleFontSize,
                '--n-title-text-color': titleTextColor,
                '--n-title-text-color-disabled': titleTextColorDisabled,
                '--n-title-font-weight': titleFontWeight,
                '--n-arrow-color': arrowColor,
                '--n-arrow-color-disabled': arrowColorDisabled,
                '--n-item-margin': itemMargin,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass('collapse', void 0, cssVarsRef, props)
            : void 0;
        return {
            rtlEnabled: rtlEnabledRef,
            mergedTheme: themeRef,
            mergedClsPrefix: mergedClsPrefixRef,
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
            'div',
            {
                class: [
                    `${this.mergedClsPrefix}-collapse`,
                    this.rtlEnabled && `${this.mergedClsPrefix}-collapse--rtl`,
                    this.themeClass,
                ],
                style: this.cssVars,
            },
            this.$slots
        );
    },
});
