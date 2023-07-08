var __createBinding =
    (this && this.__createBinding) ||
    (Object.create
        ? function (o, m, k, k2) {
              if (k2 === void 0) k2 = k;
              var desc = Object.getOwnPropertyDescriptor(m, k);
              if (
                  !desc ||
                  ('get' in desc
                      ? !m.__esModule
                      : desc.writable || desc.configurable)
              ) {
                  desc = {
                      enumerable: true,
                      get: function () {
                          return m[k];
                      },
                  };
              }
              Object.defineProperty(o, k2, desc);
          }
        : function (o, m, k, k2) {
              if (k2 === void 0) k2 = k;
              o[k2] = m[k];
          });
var __setModuleDefault =
    (this && this.__setModuleDefault) ||
    (Object.create
        ? function (o, v) {
              Object.defineProperty(o, 'default', {
                  enumerable: true,
                  value: v,
              });
          }
        : function (o, v) {
              o['default'] = v;
          });
var __importStar =
    (this && this.__importStar) ||
    function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
            for (var k in mod)
                if (
                    k !== 'default' &&
                    Object.prototype.hasOwnProperty.call(mod, k)
                )
                    __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.popoverProps = exports.popoverBaseProps = void 0;
const vue_1 = require('vue');
const vueuc_1 = require('vueuc');
const vooks_1 = require('vooks');
const vdirs_1 = require('vdirs');
const _utils_1 = require('../../_utils');
const _mixins_1 = require('../../_mixins');
const PopoverBody_1 = __importStar(require('./PopoverBody'));
const bodyPropKeys = Object.keys(PopoverBody_1.popoverBodyProps);
const triggerEventMap = {
    focus: ['onFocus', 'onBlur'],
    click: ['onClick'],
    hover: ['onMouseenter', 'onMouseleave'],
    manual: [],
    nested: ['onFocus', 'onBlur', 'onMouseenter', 'onMouseleave', 'onClick'],
};
function appendEvents(vNode, trigger, events) {
    triggerEventMap[trigger].forEach((eventName) => {
        if (!vNode.props) vNode.props = {};
        else {
            vNode.props = Object.assign({}, vNode.props);
        }
        const originalHandler = vNode.props[eventName];
        const handler = events[eventName];
        if (!originalHandler) vNode.props[eventName] = handler;
        else {
            vNode.props[eventName] = (...args) => {
                originalHandler(...args);
                handler(...args);
            };
        }
    });
}
const textVNodeType = (0, vue_1.createTextVNode)('').type;
exports.popoverBaseProps = {
    show: {
        type: Boolean,
        default: void 0,
    },
    defaultShow: Boolean,
    showArrow: {
        type: Boolean,
        default: true,
    },
    trigger: {
        type: String,
        default: 'hover',
    },
    delay: {
        type: Number,
        default: 100,
    },
    duration: {
        type: Number,
        default: 100,
    },
    raw: Boolean,
    placement: {
        type: String,
        default: 'top',
    },
    x: Number,
    y: Number,
    arrowPointToCenter: Boolean,
    disabled: Boolean,
    getDisabled: Function,
    displayDirective: {
        type: String,
        default: 'if',
    },
    arrowStyle: [String, Object],
    flip: {
        type: Boolean,
        default: true,
    },
    animated: {
        type: Boolean,
        default: true,
    },
    width: {
        type: [Number, String],
        default: void 0,
    },
    overlap: Boolean,
    keepAliveOnHover: {
        type: Boolean,
        default: true,
    },
    zIndex: Number,
    to: _utils_1.useAdjustedTo.propTo,
    scrollable: Boolean,
    contentStyle: [Object, String],
    headerStyle: [Object, String],
    footerStyle: [Object, String],
    onClickoutside: Function,
    'onUpdate:show': [Function, Array],
    onUpdateShow: [Function, Array],
    internalDeactivateImmediately: Boolean,
    internalSyncTargetWithParent: Boolean,
    internalInheritedEventHandlers: {
        type: Array,
        default: () => [],
    },
    internalTrapFocus: Boolean,
    internalExtraClass: {
        type: Array,
        default: () => [],
    },
    onShow: [Function, Array],
    onHide: [Function, Array],
    arrow: {
        type: Boolean,
        default: void 0,
    },
    minWidth: Number,
    maxWidth: Number,
};
exports.popoverProps = Object.assign(
    Object.assign(
        Object.assign({}, _mixins_1.useTheme.props),
        exports.popoverBaseProps
    ),
    { internalOnAfterLeave: Function, internalRenderBody: Function }
);
exports.default = (0, vue_1.defineComponent)({
    name: 'Popover',
    inheritAttrs: false,
    props: exports.popoverProps,
    __popover__: true,
    setup(props) {
        if (process.env.NODE_ENV !== 'production') {
            (0, vue_1.watchEffect)(() => {
                if (props.maxWidth !== void 0) {
                    (0, _utils_1.warnOnce)(
                        'popover',
                        '`max-width` is deprecated, please use `style` instead.'
                    );
                }
                if (props.minWidth !== void 0) {
                    (0, _utils_1.warnOnce)(
                        'popover',
                        '`min-width` is deprecated, please use `style` instead.'
                    );
                }
                if (props.arrow !== void 0) {
                    (0, _utils_1.warnOnce)(
                        'popover',
                        '`arrow` is deprecated, please use `showArrow` instead.'
                    );
                }
                if (props.onHide !== void 0) {
                    (0, _utils_1.warnOnce)(
                        'popover',
                        '`on-hide` is deprecated, please use `on-update:show` instead.'
                    );
                }
                if (props.onShow !== void 0) {
                    (0, _utils_1.warnOnce)(
                        'popover',
                        '`on-show` is deprecated, please use `on-update:show` instead.'
                    );
                }
            });
        }
        const isMountedRef = (0, vooks_1.useIsMounted)();
        const binderInstRef = (0, vue_1.ref)(null);
        const controlledShowRef = (0, vue_1.computed)(() => props.show);
        const uncontrolledShowRef = (0, vue_1.ref)(props.defaultShow);
        const mergedShowWithoutDisabledRef = (0, vooks_1.useMergedState)(
            controlledShowRef,
            uncontrolledShowRef
        );
        const mergedShowConsideringDisabledPropRef = (0, vooks_1.useMemo)(
            () => {
                if (props.disabled) return false;
                return mergedShowWithoutDisabledRef.value;
            }
        );
        const getMergedDisabled = () => {
            if (props.disabled) return true;
            const { getDisabled } = props;
            if (
                getDisabled === null || getDisabled === void 0
                    ? void 0
                    : getDisabled()
            )
                return true;
            return false;
        };
        const getMergedShow = () => {
            if (getMergedDisabled()) return false;
            return mergedShowWithoutDisabledRef.value;
        };
        const compatibleShowArrowRef = (0, vooks_1.useCompitable)(props, [
            'arrow',
            'showArrow',
        ]);
        const mergedShowArrowRef = (0, vue_1.computed)(() => {
            if (props.overlap) return false;
            return compatibleShowArrowRef.value;
        });
        let bodyInstance = null;
        const showTimerIdRef = (0, vue_1.ref)(null);
        const hideTimerIdRef = (0, vue_1.ref)(null);
        const positionManuallyRef = (0, vooks_1.useMemo)(() => {
            return props.x !== void 0 && props.y !== void 0;
        });
        function doUpdateShow(value) {
            const {
                'onUpdate:show': _onUpdateShow,
                onUpdateShow,
                onShow,
                onHide,
            } = props;
            uncontrolledShowRef.value = value;
            if (_onUpdateShow) {
                (0, _utils_1.call)(_onUpdateShow, value);
            }
            if (onUpdateShow) {
                (0, _utils_1.call)(onUpdateShow, value);
            }
            if (value && onShow) {
                (0, _utils_1.call)(onShow, true);
            }
            if (value && onHide) {
                (0, _utils_1.call)(onHide, false);
            }
        }
        function syncPosition() {
            if (bodyInstance) {
                bodyInstance.syncPosition();
            }
        }
        function clearShowTimer() {
            const { value: showTimerId } = showTimerIdRef;
            if (showTimerId) {
                window.clearTimeout(showTimerId);
                showTimerIdRef.value = null;
            }
        }
        function clearHideTimer() {
            const { value: hideTimerId } = hideTimerIdRef;
            if (hideTimerId) {
                window.clearTimeout(hideTimerId);
                hideTimerIdRef.value = null;
            }
        }
        function handleFocus() {
            const mergedDisabled = getMergedDisabled();
            if (props.trigger === 'focus' && !mergedDisabled) {
                if (getMergedShow()) return;
                doUpdateShow(true);
            }
        }
        function handleBlur() {
            const mergedDisabled = getMergedDisabled();
            if (props.trigger === 'focus' && !mergedDisabled) {
                if (!getMergedShow()) return;
                doUpdateShow(false);
            }
        }
        function handleMouseEnter() {
            const mergedDisabled = getMergedDisabled();
            if (props.trigger === 'hover' && !mergedDisabled) {
                clearHideTimer();
                if (showTimerIdRef.value !== null) return;
                if (getMergedShow()) return;
                const delayCallback = () => {
                    doUpdateShow(true);
                    showTimerIdRef.value = null;
                };
                const { delay } = props;
                if (delay === 0) {
                    delayCallback();
                } else {
                    showTimerIdRef.value = window.setTimeout(
                        delayCallback,
                        delay
                    );
                }
            }
        }
        function handleMouseLeave() {
            const mergedDisabled = getMergedDisabled();
            if (props.trigger === 'hover' && !mergedDisabled) {
                clearShowTimer();
                if (hideTimerIdRef.value !== null) return;
                if (!getMergedShow()) return;
                const delayedCallback = () => {
                    doUpdateShow(false);
                    hideTimerIdRef.value = null;
                };
                const { duration } = props;
                if (duration === 0) {
                    delayedCallback();
                } else {
                    hideTimerIdRef.value = window.setTimeout(
                        delayedCallback,
                        duration
                    );
                }
            }
        }
        function handleMouseMoveOutside() {
            handleMouseLeave();
        }
        function handleClickOutside(e) {
            var _a;
            if (!getMergedShow()) return;
            if (props.trigger === 'click') {
                clearShowTimer();
                clearHideTimer();
                doUpdateShow(false);
            }
            (_a = props.onClickoutside) === null || _a === void 0
                ? void 0
                : _a.call(props, e);
        }
        function handleClick() {
            if (props.trigger === 'click' && !getMergedDisabled()) {
                clearShowTimer();
                clearHideTimer();
                const nextShow = !getMergedShow();
                doUpdateShow(nextShow);
            }
        }
        function handleKeydown(e) {
            if (!props.internalTrapFocus) return;
            if (e.key === 'Escape') {
                clearShowTimer();
                clearHideTimer();
                doUpdateShow(false);
            }
        }
        function setShow(value) {
            uncontrolledShowRef.value = value;
        }
        function getTriggerElement() {
            var _a;
            return (_a = binderInstRef.value) === null || _a === void 0
                ? void 0
                : _a.targetRef;
        }
        function setBodyInstance(value) {
            bodyInstance = value;
        }
        (0, vue_1.provide)('NPopover', {
            getTriggerElement,
            handleKeydown,
            handleMouseEnter,
            handleMouseLeave,
            handleClickOutside,
            handleMouseMoveOutside,
            setBodyInstance,
            positionManuallyRef,
            isMountedRef,
            zIndexRef: (0, vue_1.toRef)(props, 'zIndex'),
            extraClassRef: (0, vue_1.toRef)(props, 'internalExtraClass'),
            internalRenderBodyRef: (0, vue_1.toRef)(
                props,
                'internalRenderBody'
            ),
        });
        (0, vue_1.watchEffect)(() => {
            if (mergedShowWithoutDisabledRef.value && getMergedDisabled()) {
                doUpdateShow(false);
            }
        });
        return {
            binderInstRef,
            positionManually: positionManuallyRef,
            mergedShowConsideringDisabledProp:
                mergedShowConsideringDisabledPropRef,
            uncontrolledShow: uncontrolledShowRef,
            mergedShowArrow: mergedShowArrowRef,
            getMergedShow,
            setShow,
            handleClick,
            handleMouseEnter,
            handleMouseLeave,
            handleFocus,
            handleBlur,
            syncPosition,
        };
    },
    render() {
        var _a;
        const { positionManually, $slots: slots } = this;
        let triggerVNode;
        let popoverInside = false;
        if (!positionManually) {
            if (slots.activator) {
                triggerVNode = (0, _utils_1.getFirstSlotVNode)(
                    slots,
                    'activator'
                );
            } else {
                triggerVNode = (0, _utils_1.getFirstSlotVNode)(
                    slots,
                    'trigger'
                );
            }
            if (triggerVNode) {
                triggerVNode = (0, vue_1.cloneVNode)(triggerVNode);
                triggerVNode =
                    triggerVNode.type === textVNodeType
                        ? (0, vue_1.h)('span', [triggerVNode])
                        : triggerVNode;
                const handlers = {
                    onClick: this.handleClick,
                    onMouseenter: this.handleMouseEnter,
                    onMouseleave: this.handleMouseLeave,
                    onFocus: this.handleFocus,
                    onBlur: this.handleBlur,
                };
                if (
                    (_a = triggerVNode.type) === null || _a === void 0
                        ? void 0
                        : _a.__popover__
                ) {
                    popoverInside = true;
                    if (!triggerVNode.props) {
                        triggerVNode.props = {
                            internalSyncTargetWithParent: true,
                            internalInheritedEventHandlers: [],
                        };
                    }
                    triggerVNode.props.internalSyncTargetWithParent = true;
                    if (!triggerVNode.props.internalInheritedEventHandlers) {
                        triggerVNode.props.internalInheritedEventHandlers = [
                            handlers,
                        ];
                    } else {
                        triggerVNode.props.internalInheritedEventHandlers = [
                            handlers,
                            ...triggerVNode.props
                                .internalInheritedEventHandlers,
                        ];
                    }
                } else {
                    const { internalInheritedEventHandlers } = this;
                    const ascendantAndCurrentHandlers = [
                        handlers,
                        ...internalInheritedEventHandlers,
                    ];
                    const mergedHandlers = {
                        onBlur: (e) => {
                            ascendantAndCurrentHandlers.forEach((_handlers) => {
                                _handlers.onBlur(e);
                            });
                        },
                        onFocus: (e) => {
                            ascendantAndCurrentHandlers.forEach((_handlers) => {
                                _handlers.onFocus(e);
                            });
                        },
                        onClick: (e) => {
                            ascendantAndCurrentHandlers.forEach((_handlers) => {
                                _handlers.onClick(e);
                            });
                        },
                        onMouseenter: (e) => {
                            ascendantAndCurrentHandlers.forEach((_handlers) => {
                                _handlers.onMouseenter(e);
                            });
                        },
                        onMouseleave: (e) => {
                            ascendantAndCurrentHandlers.forEach((_handlers) => {
                                _handlers.onMouseleave(e);
                            });
                        },
                    };
                    appendEvents(
                        triggerVNode,
                        internalInheritedEventHandlers
                            ? 'nested'
                            : positionManually
                            ? 'manual'
                            : this.trigger,
                        mergedHandlers
                    );
                }
            }
        }
        return (0, vue_1.h)(
            vueuc_1.VBinder,
            {
                ref: 'binderInstRef',
                syncTarget: !popoverInside,
                syncTargetWithParent: this.internalSyncTargetWithParent,
            },
            {
                default: () => {
                    void this.mergedShowConsideringDisabledProp;
                    const mergedShow = this.getMergedShow();
                    return [
                        this.internalTrapFocus && mergedShow
                            ? (0, vue_1.withDirectives)(
                                  (0, vue_1.h)('div', {
                                      style: { position: 'fixed', inset: 0 },
                                  }),
                                  [
                                      [
                                          vdirs_1.zindexable,
                                          {
                                              enabled: mergedShow,
                                              zIndex: this.zIndex,
                                          },
                                      ],
                                  ]
                              )
                            : null,
                        positionManually
                            ? null
                            : (0, vue_1.h)(vueuc_1.VTarget, null, {
                                  default: () => triggerVNode,
                              }),
                        (0, vue_1.h)(
                            PopoverBody_1.default,
                            (0, _utils_1.keep)(
                                this.$props,
                                bodyPropKeys,
                                Object.assign(Object.assign({}, this.$attrs), {
                                    showArrow: this.mergedShowArrow,
                                    show: mergedShow,
                                })
                            ),
                            {
                                default: () => {
                                    var _a2, _b;
                                    return (_b = (_a2 = this.$slots)
                                        .default) === null || _b === void 0
                                        ? void 0
                                        : _b.call(_a2);
                                },
                                header: () => {
                                    var _a2, _b;
                                    return (_b = (_a2 = this.$slots).header) ===
                                        null || _b === void 0
                                        ? void 0
                                        : _b.call(_a2);
                                },
                                footer: () => {
                                    var _a2, _b;
                                    return (_b = (_a2 = this.$slots).footer) ===
                                        null || _b === void 0
                                        ? void 0
                                        : _b.call(_a2);
                                },
                            }
                        ),
                    ];
                },
            }
        );
    },
});
