import {
    defineComponent,
    h,
    ref,
    computed,
    mergeProps,
    onDeactivated,
} from 'vue';
import { NTooltip } from '../../tooltip';
import { useConfig, useTheme } from '../../_mixins';
import { ellipsisLight } from '../styles';
import style from './styles/index.cssr';
function createLineClampClass(clsPrefix) {
    return `${clsPrefix}-ellipsis--line-clamp`;
}
function createCursorClass(clsPrefix, cursor) {
    return `${clsPrefix}-ellipsis--cursor-${cursor}`;
}
export const ellipsisProps = Object.assign(Object.assign({}, useTheme.props), {
    expandTrigger: String,
    lineClamp: [Number, String],
    tooltip: {
        type: [Boolean, Object],
        default: true,
    },
});
export default defineComponent({
    name: 'Ellipsis',
    inheritAttrs: false,
    props: ellipsisProps,
    setup(props, { slots, attrs }) {
        const { mergedClsPrefixRef } = useConfig(props);
        const mergedTheme = useTheme(
            'Ellipsis',
            '-ellipsis',
            style,
            ellipsisLight,
            props,
            mergedClsPrefixRef
        );
        const triggerRef = ref(null);
        const triggerInnerRef = ref(null);
        const tooltipRef = ref(null);
        const expandedRef = ref(false);
        const ellipsisStyleRef = computed(() => {
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
        const handleClickRef = computed(() => {
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
        onDeactivated(() => {
            var _a;
            if (props.tooltip) {
                (_a = tooltipRef.value) === null || _a === void 0
                    ? void 0
                    : _a.setShow(false);
            }
        });
        const renderTrigger = () =>
            h(
                'span',
                Object.assign(
                    {},
                    mergeProps(attrs, {
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
                    : h('span', { ref: 'triggerInnerRef' }, slots)
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
            return h(
                NTooltip,
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
