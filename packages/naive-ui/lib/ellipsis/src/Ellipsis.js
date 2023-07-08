var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.ellipsisProps = void 0;
const vue_1 = require('vue');
const tooltip_1 = require('../../tooltip');
const _mixins_1 = require('../../_mixins');
const styles_1 = require('../styles');
const index_cssr_1 = __importDefault(require('./styles/index.cssr'));
function createLineClampClass(clsPrefix) {
    return `${clsPrefix}-ellipsis--line-clamp`;
}
function createCursorClass(clsPrefix, cursor) {
    return `${clsPrefix}-ellipsis--cursor-${cursor}`;
}
exports.ellipsisProps = Object.assign(
    Object.assign({}, _mixins_1.useTheme.props),
    {
        expandTrigger: String,
        lineClamp: [Number, String],
        tooltip: {
            type: [Boolean, Object],
            default: true,
        },
    }
);
exports.default = (0, vue_1.defineComponent)({
    name: 'Ellipsis',
    inheritAttrs: false,
    props: exports.ellipsisProps,
    setup(props, { slots, attrs }) {
        const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props);
        const mergedTheme = (0, _mixins_1.useTheme)(
            'Ellipsis',
            '-ellipsis',
            index_cssr_1.default,
            styles_1.ellipsisLight,
            props,
            mergedClsPrefixRef
        );
        const triggerRef = (0, vue_1.ref)(null);
        const triggerInnerRef = (0, vue_1.ref)(null);
        const tooltipRef = (0, vue_1.ref)(null);
        const expandedRef = (0, vue_1.ref)(false);
        const ellipsisStyleRef = (0, vue_1.computed)(() => {
            const { lineClamp } = props;
            const { value: expanded } = expandedRef;
            if (lineClamp !== void 0) {
                return {
                    textOverflow: '',
                    '-webkit-line-clamp': expanded ? '' : lineClamp,
                };
            } else {
                return {
                    textOverflow: expanded ? '' : 'ellipsis',
                    '-webkit-line-clamp': '',
                };
            }
        });
        function getTooltipDisabled() {
            let tooltipDisabled = false;
            const { value: expanded } = expandedRef;
            if (expanded) return true;
            const { value: trigger } = triggerRef;
            if (trigger) {
                const { lineClamp } = props;
                syncEllipsisStyle(trigger);
                if (lineClamp !== void 0) {
                    tooltipDisabled =
                        trigger.scrollHeight <= trigger.offsetHeight;
                } else {
                    const { value: triggerInner } = triggerInnerRef;
                    if (triggerInner) {
                        tooltipDisabled =
                            triggerInner.getBoundingClientRect().width <=
                            trigger.getBoundingClientRect().width;
                    }
                }
                syncCursorStyle(trigger, tooltipDisabled);
            }
            return tooltipDisabled;
        }
        const handleClickRef = (0, vue_1.computed)(() => {
            return props.expandTrigger === 'click'
                ? () => {
                      var _a;
                      const { value: expanded } = expandedRef;
                      if (expanded) {
                          (_a = tooltipRef.value) === null || _a === void 0
                              ? void 0
                              : _a.setShow(false);
                      }
                      expandedRef.value = !expanded;
                  }
                : void 0;
        });
        (0, vue_1.onDeactivated)(() => {
            var _a;
            if (props.tooltip) {
                (_a = tooltipRef.value) === null || _a === void 0
                    ? void 0
                    : _a.setShow(false);
            }
        });
        const renderTrigger = () =>
            (0, vue_1.h)(
                'span',
                Object.assign(
                    {},
                    (0, vue_1.mergeProps)(attrs, {
                        class: [
                            `${mergedClsPrefixRef.value}-ellipsis`,
                            props.lineClamp !== void 0
                                ? createLineClampClass(mergedClsPrefixRef.value)
                                : void 0,
                            props.expandTrigger === 'click'
                                ? createCursorClass(
                                      mergedClsPrefixRef.value,
                                      'pointer'
                                  )
                                : void 0,
                        ],
                        style: ellipsisStyleRef.value,
                    }),
                    {
                        ref: 'triggerRef',
                        onClick: handleClickRef.value,
                        onMouseenter:
                            props.expandTrigger === 'click'
                                ? getTooltipDisabled
                                : void 0,
                    }
                ),
                props.lineClamp
                    ? slots
                    : (0, vue_1.h)('span', { ref: 'triggerInnerRef' }, slots)
            );
        function syncEllipsisStyle(trigger) {
            if (!trigger) return;
            const latestStyle = ellipsisStyleRef.value;
            const lineClampClass = createLineClampClass(
                mergedClsPrefixRef.value
            );
            if (props.lineClamp !== void 0) {
                syncTriggerClass(trigger, lineClampClass, 'add');
            } else {
                syncTriggerClass(trigger, lineClampClass, 'remove');
            }
            for (const key in latestStyle) {
                if (trigger.style[key] !== latestStyle[key]) {
                    trigger.style[key] = latestStyle[key];
                }
            }
        }
        function syncCursorStyle(trigger, tooltipDisabled) {
            const cursorClass = createCursorClass(
                mergedClsPrefixRef.value,
                'pointer'
            );
            if (props.expandTrigger === 'click' && !tooltipDisabled) {
                syncTriggerClass(trigger, cursorClass, 'add');
            } else {
                syncTriggerClass(trigger, cursorClass, 'remove');
            }
        }
        function syncTriggerClass(trigger, styleClass, action) {
            if (action === 'add') {
                if (!trigger.classList.contains(styleClass)) {
                    trigger.classList.add(styleClass);
                }
            } else {
                if (trigger.classList.contains(styleClass)) {
                    trigger.classList.remove(styleClass);
                }
            }
        }
        return {
            mergedTheme,
            triggerRef,
            triggerInnerRef,
            tooltipRef,
            handleClick: handleClickRef,
            renderTrigger,
            getTooltipDisabled,
        };
    },
    render() {
        var _a;
        const { tooltip, renderTrigger, $slots } = this;
        if (tooltip) {
            const { mergedTheme } = this;
            return (0, vue_1.h)(
                tooltip_1.NTooltip,
                Object.assign(
                    { ref: 'tooltipRef', placement: 'top' },
                    tooltip,
                    {
                        getDisabled: this.getTooltipDisabled,
                        theme: mergedTheme.peers.Tooltip,
                        themeOverrides: mergedTheme.peerOverrides.Tooltip,
                    }
                ),
                {
                    trigger: renderTrigger,
                    default:
                        (_a = $slots.tooltip) !== null && _a !== void 0
                            ? _a
                            : $slots.default,
                }
            );
        } else return renderTrigger();
    },
});
