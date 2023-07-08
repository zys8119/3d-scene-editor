var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.renderArrow = exports.popoverBodyProps = void 0;
const vue_1 = require('vue');
const vueuc_1 = require('vueuc');
const vdirs_1 = require('vdirs');
const seemly_1 = require('seemly');
const scrollbar_1 = require('../../_internal/scrollbar');
const interface_1 = require('../../drawer/src/interface');
const interface_2 = require('../../modal/src/interface');
const _mixins_1 = require('../../_mixins');
const _utils_1 = require('../../_utils');
const styles_1 = require('../styles');
const interface_3 = require('./interface');
const index_cssr_1 = __importDefault(require('./styles/index.cssr'));
exports.popoverBodyProps = Object.assign(
    Object.assign({}, _mixins_1.useTheme.props),
    {
        to: _utils_1.useAdjustedTo.propTo,
        show: Boolean,
        trigger: String,
        showArrow: Boolean,
        delay: Number,
        duration: Number,
        raw: Boolean,
        arrowPointToCenter: Boolean,
        arrowStyle: [String, Object],
        displayDirective: String,
        x: Number,
        y: Number,
        flip: Boolean,
        overlap: Boolean,
        placement: String,
        width: [Number, String],
        keepAliveOnHover: Boolean,
        scrollable: Boolean,
        contentStyle: [Object, String],
        headerStyle: [Object, String],
        footerStyle: [Object, String],
        internalDeactivateImmediately: Boolean,
        animated: Boolean,
        onClickoutside: Function,
        internalTrapFocus: Boolean,
        internalOnAfterLeave: Function,
        minWidth: Number,
        maxWidth: Number,
    }
);
const renderArrow = ({ arrowStyle, clsPrefix }) => {
    return (0, vue_1.h)(
        'div',
        {
            key: '__popover-arrow__',
            class: `${clsPrefix}-popover-arrow-wrapper`,
        },
        (0, vue_1.h)('div', {
            class: `${clsPrefix}-popover-arrow`,
            style: arrowStyle,
        })
    );
};
exports.renderArrow = renderArrow;
exports.default = (0, vue_1.defineComponent)({
    name: 'PopoverBody',
    inheritAttrs: false,
    props: exports.popoverBodyProps,
    setup(props, { slots, attrs }) {
        const { namespaceRef, mergedClsPrefixRef, inlineThemeDisabled } = (0,
        _mixins_1.useConfig)(props);
        const themeRef = (0, _mixins_1.useTheme)(
            'Popover',
            '-popover',
            index_cssr_1.default,
            styles_1.popoverLight,
            props,
            mergedClsPrefixRef
        );
        const followerRef = (0, vue_1.ref)(null);
        const NPopover = (0, vue_1.inject)('NPopover');
        const bodyRef = (0, vue_1.ref)(null);
        const followerEnabledRef = (0, vue_1.ref)(props.show);
        const displayedRef = (0, vue_1.ref)(false);
        (0, vue_1.watchEffect)(() => {
            const { show } = props;
            if (
                show &&
                !(0, _utils_1.isJsdom)() &&
                !props.internalDeactivateImmediately
            ) {
                displayedRef.value = true;
            }
        });
        const directivesRef = (0, vue_1.computed)(() => {
            const { trigger, onClickoutside } = props;
            const directives = [];
            const {
                positionManuallyRef: { value: positionManually },
            } = NPopover;
            if (!positionManually) {
                if (trigger === 'click' && !onClickoutside) {
                    directives.push([
                        vdirs_1.clickoutside,
                        handleClickOutside,
                        void 0,
                        { capture: true },
                    ]);
                }
                if (trigger === 'hover') {
                    directives.push([
                        vdirs_1.mousemoveoutside,
                        handleMouseMoveOutside,
                    ]);
                }
            }
            if (onClickoutside) {
                directives.push([
                    vdirs_1.clickoutside,
                    handleClickOutside,
                    void 0,
                    { capture: true },
                ]);
            }
            if (
                props.displayDirective === 'show' ||
                (props.animated && displayedRef.value)
            ) {
                directives.push([vue_1.vShow, props.show]);
            }
            return directives;
        });
        const styleRef = (0, vue_1.computed)(() => {
            const width =
                props.width === 'trigger'
                    ? void 0
                    : (0, _utils_1.formatLength)(props.width);
            const style = [];
            if (width) {
                style.push({ width });
            }
            const { maxWidth, minWidth } = props;
            if (maxWidth) {
                style.push({ maxWidth: (0, _utils_1.formatLength)(maxWidth) });
            }
            if (minWidth) {
                style.push({ maxWidth: (0, _utils_1.formatLength)(minWidth) });
            }
            if (!inlineThemeDisabled) {
                style.push(cssVarsRef.value);
            }
            return style;
        });
        const cssVarsRef = (0, vue_1.computed)(() => {
            const {
                common: {
                    cubicBezierEaseInOut,
                    cubicBezierEaseIn,
                    cubicBezierEaseOut,
                },
                self: {
                    space,
                    spaceArrow,
                    padding,
                    fontSize,
                    textColor,
                    dividerColor,
                    color,
                    boxShadow,
                    borderRadius,
                    arrowHeight,
                    arrowOffset,
                    arrowOffsetVertical,
                },
            } = themeRef.value;
            return {
                '--n-box-shadow': boxShadow,
                '--n-bezier': cubicBezierEaseInOut,
                '--n-bezier-ease-in': cubicBezierEaseIn,
                '--n-bezier-ease-out': cubicBezierEaseOut,
                '--n-font-size': fontSize,
                '--n-text-color': textColor,
                '--n-color': color,
                '--n-divider-color': dividerColor,
                '--n-border-radius': borderRadius,
                '--n-arrow-height': arrowHeight,
                '--n-arrow-offset': arrowOffset,
                '--n-arrow-offset-vertical': arrowOffsetVertical,
                '--n-padding': padding,
                '--n-space': space,
                '--n-space-arrow': spaceArrow,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? (0, _mixins_1.useThemeClass)('popover', void 0, cssVarsRef, props)
            : void 0;
        NPopover.setBodyInstance({
            syncPosition,
        });
        (0, vue_1.onBeforeUnmount)(() => {
            NPopover.setBodyInstance(null);
        });
        (0, vue_1.watch)((0, vue_1.toRef)(props, 'show'), (value) => {
            if (props.animated) return;
            if (value) {
                followerEnabledRef.value = true;
            } else {
                followerEnabledRef.value = false;
            }
        });
        function syncPosition() {
            var _a;
            (_a = followerRef.value) === null || _a === void 0
                ? void 0
                : _a.syncPosition();
        }
        function handleMouseEnter(e) {
            if (
                props.trigger === 'hover' &&
                props.keepAliveOnHover &&
                props.show
            ) {
                NPopover.handleMouseEnter(e);
            }
        }
        function handleMouseLeave(e) {
            if (props.trigger === 'hover' && props.keepAliveOnHover) {
                NPopover.handleMouseLeave(e);
            }
        }
        function handleMouseMoveOutside(e) {
            if (
                props.trigger === 'hover' &&
                !getTriggerElement().contains(
                    (0, seemly_1.getPreciseEventTarget)(e)
                )
            ) {
                NPopover.handleMouseMoveOutside(e);
            }
        }
        function handleClickOutside(e) {
            if (
                (props.trigger === 'click' &&
                    !getTriggerElement().contains(
                        (0, seemly_1.getPreciseEventTarget)(e)
                    )) ||
                props.onClickoutside
            ) {
                NPopover.handleClickOutside(e);
            }
        }
        function getTriggerElement() {
            return NPopover.getTriggerElement();
        }
        (0, vue_1.provide)(interface_3.popoverBodyInjectionKey, bodyRef);
        (0, vue_1.provide)(interface_1.drawerBodyInjectionKey, null);
        (0, vue_1.provide)(interface_2.modalBodyInjectionKey, null);
        function renderContentNode() {
            themeClassHandle === null || themeClassHandle === void 0
                ? void 0
                : themeClassHandle.onRender();
            const shouldRenderDom =
                props.displayDirective === 'show' ||
                props.show ||
                (props.animated && displayedRef.value);
            if (!shouldRenderDom) {
                return null;
            }
            let contentNode;
            const renderBody = NPopover.internalRenderBodyRef.value;
            const { value: mergedClsPrefix } = mergedClsPrefixRef;
            if (!renderBody) {
                const { value: extraClass } = NPopover.extraClassRef;
                const { internalTrapFocus } = props;
                const hasHeaderOrFooter =
                    !(0, _utils_1.isSlotEmpty)(slots.header) ||
                    !(0, _utils_1.isSlotEmpty)(slots.footer);
                const renderContentInnerNode = () => {
                    var _a;
                    const body = hasHeaderOrFooter
                        ? (0, vue_1.h)(
                              vue_1.Fragment,
                              null,
                              (0, _utils_1.resolveWrappedSlot)(
                                  slots.header,
                                  (children) => {
                                      return children
                                          ? (0, vue_1.h)(
                                                'div',
                                                {
                                                    class: `${mergedClsPrefix}-popover__header`,
                                                    style: props.headerStyle,
                                                },
                                                children
                                            )
                                          : null;
                                  }
                              ),
                              (0, _utils_1.resolveWrappedSlot)(
                                  slots.default,
                                  (children) => {
                                      return children
                                          ? (0, vue_1.h)(
                                                'div',
                                                {
                                                    class: `${mergedClsPrefix}-popover__content`,
                                                    style: props.contentStyle,
                                                },
                                                slots
                                            )
                                          : null;
                                  }
                              ),
                              (0, _utils_1.resolveWrappedSlot)(
                                  slots.footer,
                                  (children) => {
                                      return children
                                          ? (0, vue_1.h)(
                                                'div',
                                                {
                                                    class: `${mergedClsPrefix}-popover__footer`,
                                                    style: props.footerStyle,
                                                },
                                                children
                                            )
                                          : null;
                                  }
                              )
                          )
                        : props.scrollable
                        ? (_a = slots.default) === null || _a === void 0
                            ? void 0
                            : _a.call(slots)
                        : (0, vue_1.h)(
                              'div',
                              {
                                  class: `${mergedClsPrefix}-popover__content`,
                                  style: props.contentStyle,
                              },
                              slots
                          );
                    const maybeScrollableBody = props.scrollable
                        ? (0, vue_1.h)(
                              scrollbar_1.NxScrollbar,
                              {
                                  contentClass: hasHeaderOrFooter
                                      ? void 0
                                      : `${mergedClsPrefix}-popover__content`,
                                  contentStyle: hasHeaderOrFooter
                                      ? void 0
                                      : props.contentStyle,
                              },
                              {
                                  default: () => body,
                              }
                          )
                        : body;
                    const arrow = props.showArrow
                        ? (0, exports.renderArrow)({
                              arrowStyle: props.arrowStyle,
                              clsPrefix: mergedClsPrefix,
                          })
                        : null;
                    return [maybeScrollableBody, arrow];
                };
                contentNode = (0, vue_1.h)(
                    'div',
                    (0, vue_1.mergeProps)(
                        {
                            class: [
                                `${mergedClsPrefix}-popover`,
                                `${mergedClsPrefix}-popover-shared`,
                                themeClassHandle === null ||
                                themeClassHandle === void 0
                                    ? void 0
                                    : themeClassHandle.themeClass.value,
                                extraClass.map(
                                    (v) => `${mergedClsPrefix}-${v}`
                                ),
                                {
                                    [`${mergedClsPrefix}-popover--scrollable`]:
                                        props.scrollable,
                                    [`${mergedClsPrefix}-popover--show-header-or-footer`]:
                                        hasHeaderOrFooter,
                                    [`${mergedClsPrefix}-popover--raw`]:
                                        props.raw,
                                    [`${mergedClsPrefix}-popover-shared--overlap`]:
                                        props.overlap,
                                    [`${mergedClsPrefix}-popover-shared--show-arrow`]:
                                        props.showArrow,
                                    [`${mergedClsPrefix}-popover-shared--center-arrow`]:
                                        props.arrowPointToCenter,
                                },
                            ],
                            ref: bodyRef,
                            style: styleRef.value,
                            onKeydown: NPopover.handleKeydown,
                            onMouseenter: handleMouseEnter,
                            onMouseleave: handleMouseLeave,
                        },
                        attrs
                    ),
                    internalTrapFocus
                        ? (0, vue_1.h)(
                              vueuc_1.VFocusTrap,
                              { active: props.show, autoFocus: true },
                              { default: renderContentInnerNode }
                          )
                        : renderContentInnerNode()
                );
            } else {
                contentNode = renderBody(
                    [
                        `${mergedClsPrefix}-popover-shared`,
                        themeClassHandle === null || themeClassHandle === void 0
                            ? void 0
                            : themeClassHandle.themeClass.value,
                        props.overlap &&
                            `${mergedClsPrefix}-popover-shared--overlap`,
                        props.showArrow &&
                            `${mergedClsPrefix}-popover-shared--show-arrow`,
                        props.arrowPointToCenter &&
                            `${mergedClsPrefix}-popover-shared--center-arrow`,
                    ],
                    bodyRef,
                    styleRef.value,
                    handleMouseEnter,
                    handleMouseLeave
                );
            }
            return (0, vue_1.withDirectives)(contentNode, directivesRef.value);
        }
        return {
            displayed: displayedRef,
            namespace: namespaceRef,
            isMounted: NPopover.isMountedRef,
            zIndex: NPopover.zIndexRef,
            followerRef,
            adjustedTo: (0, _utils_1.useAdjustedTo)(props),
            followerEnabled: followerEnabledRef,
            renderContentNode,
        };
    },
    render() {
        return (0, vue_1.h)(
            vueuc_1.VFollower,
            {
                ref: 'followerRef',
                zIndex: this.zIndex,
                show: this.show,
                enabled: this.followerEnabled,
                to: this.adjustedTo,
                x: this.x,
                y: this.y,
                flip: this.flip,
                placement: this.placement,
                containerClass: this.namespace,
                overlap: this.overlap,
                width: this.width === 'trigger' ? 'target' : void 0,
                teleportDisabled:
                    this.adjustedTo === _utils_1.useAdjustedTo.tdkey,
            },
            {
                default: () => {
                    return this.animated
                        ? (0, vue_1.h)(
                              vue_1.Transition,
                              {
                                  name: 'popover-transition',
                                  appear: this.isMounted,
                                  onEnter: () => {
                                      this.followerEnabled = true;
                                  },
                                  onAfterLeave: () => {
                                      var _a;
                                      (_a = this.internalOnAfterLeave) ===
                                          null || _a === void 0
                                          ? void 0
                                          : _a.call(this);
                                      this.followerEnabled = false;
                                      this.displayed = false;
                                  },
                              },
                              {
                                  default: this.renderContentNode,
                              }
                          )
                        : this.renderContentNode();
                },
            }
        );
    },
});
