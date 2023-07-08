Object.defineProperty(exports, '__esModule', { value: true });
const vue_1 = require('vue');
const vueuc_1 = require('vueuc');
const vdirs_1 = require('vdirs');
const _mixins_1 = require('../../_mixins');
const interface_1 = require('../../popover/src/interface');
const interface_2 = require('../../modal/src/interface');
const _internal_1 = require('../../_internal');
const _utils_1 = require('../../_utils');
const interface_3 = require('./interface');
exports.default = (0, vue_1.defineComponent)({
    name: 'NDrawerContent',
    inheritAttrs: false,
    props: {
        blockScroll: Boolean,
        show: {
            type: Boolean,
            default: void 0,
        },
        displayDirective: {
            type: String,
            required: true,
        },
        placement: {
            type: String,
            required: true,
        },
        contentStyle: [Object, String],
        nativeScrollbar: {
            type: Boolean,
            required: true,
        },
        scrollbarProps: Object,
        trapFocus: {
            type: Boolean,
            default: true,
        },
        autoFocus: {
            type: Boolean,
            default: true,
        },
        showMask: {
            type: [Boolean, String],
            required: true,
        },
        resizable: Boolean,
        onClickoutside: Function,
        onAfterLeave: Function,
        onAfterEnter: Function,
        onEsc: Function,
    },
    setup(props) {
        const displayedRef = (0, vue_1.ref)(!!props.show);
        const bodyRef = (0, vue_1.ref)(null);
        const NDrawer = (0, vue_1.inject)(interface_3.drawerInjectionKey);
        let startPosition = 0;
        let memoizedBodyStyleCursor = '';
        let hoverTimerId = null;
        const isHoverOnResizeTriggerRef = (0, vue_1.ref)(false);
        const isDraggingRef = (0, vue_1.ref)(false);
        const isVertical = (0, vue_1.computed)(() => {
            return props.placement === 'top' || props.placement === 'bottom';
        });
        const { mergedClsPrefixRef, mergedRtlRef } = (0, _mixins_1.useConfig)(
            props
        );
        const rtlEnabledRef = (0, _mixins_1.useRtl)(
            'Drawer',
            mergedRtlRef,
            mergedClsPrefixRef
        );
        const handleMousedownResizeTrigger = (e) => {
            isDraggingRef.value = true;
            startPosition = isVertical.value ? e.clientY : e.clientX;
            memoizedBodyStyleCursor = document.body.style.cursor;
            document.body.style.cursor = isVertical.value
                ? 'ns-resize'
                : 'ew-resize';
            document.body.addEventListener('mousemove', handleBodyMousemove);
            document.body.addEventListener('mouseleave', handleBodyMouseleave);
            document.body.addEventListener('mouseup', handleBodyMouseup);
        };
        const handleMouseenterResizeTrigger = () => {
            if (hoverTimerId !== null) {
                window.clearTimeout(hoverTimerId);
                hoverTimerId = null;
            }
            if (isDraggingRef.value) {
                isHoverOnResizeTriggerRef.value = true;
            } else {
                hoverTimerId = window.setTimeout(() => {
                    isHoverOnResizeTriggerRef.value = true;
                }, 300);
            }
        };
        const handleMouseleaveResizeTrigger = () => {
            if (hoverTimerId !== null) {
                window.clearTimeout(hoverTimerId);
                hoverTimerId = null;
            }
            isHoverOnResizeTriggerRef.value = false;
        };
        const { doUpdateHeight, doUpdateWidth } = NDrawer;
        const handleBodyMousemove = (e) => {
            var _a, _b;
            if (isDraggingRef.value) {
                if (isVertical.value) {
                    let height =
                        ((_a = bodyRef.value) === null || _a === void 0
                            ? void 0
                            : _a.offsetHeight) || 0;
                    const increment = startPosition - e.clientY;
                    height +=
                        props.placement === 'bottom' ? increment : -increment;
                    doUpdateHeight(height);
                    startPosition = e.clientY;
                } else {
                    let width =
                        ((_b = bodyRef.value) === null || _b === void 0
                            ? void 0
                            : _b.offsetWidth) || 0;
                    const increment = startPosition - e.clientX;
                    width +=
                        props.placement === 'right' ? increment : -increment;
                    doUpdateWidth(width);
                    startPosition = e.clientX;
                }
            }
        };
        const handleBodyMouseup = () => {
            if (isDraggingRef.value) {
                startPosition = 0;
                isDraggingRef.value = false;
                document.body.style.cursor = memoizedBodyStyleCursor;
                document.body.removeEventListener(
                    'mousemove',
                    handleBodyMousemove
                );
                document.body.removeEventListener('mouseup', handleBodyMouseup);
                document.body.removeEventListener(
                    'mouseleave',
                    handleBodyMouseleave
                );
            }
        };
        const handleBodyMouseleave = handleBodyMouseup;
        (0, vue_1.watchEffect)(() => {
            if (props.show) displayedRef.value = true;
        });
        (0, vue_1.watch)(
            () => props.show,
            (value) => {
                if (!value) {
                    handleBodyMouseup();
                }
            }
        );
        (0, vue_1.onBeforeUnmount)(() => {
            handleBodyMouseup();
        });
        const bodyDirectivesRef = (0, vue_1.computed)(() => {
            const { show } = props;
            const directives = [[vue_1.vShow, show]];
            if (!props.showMask) {
                directives.push([
                    vdirs_1.clickoutside,
                    props.onClickoutside,
                    void 0,
                    { capture: true },
                ]);
            }
            return directives;
        });
        function handleAfterLeave() {
            var _a;
            displayedRef.value = false;
            (_a = props.onAfterLeave) === null || _a === void 0
                ? void 0
                : _a.call(props);
        }
        (0, _utils_1.useLockHtmlScroll)(
            (0, vue_1.computed)(() => props.blockScroll && displayedRef.value)
        );
        (0, vue_1.provide)(interface_3.drawerBodyInjectionKey, bodyRef);
        (0, vue_1.provide)(interface_1.popoverBodyInjectionKey, null);
        (0, vue_1.provide)(interface_2.modalBodyInjectionKey, null);
        return {
            bodyRef,
            rtlEnabled: rtlEnabledRef,
            mergedClsPrefix: NDrawer.mergedClsPrefixRef,
            isMounted: NDrawer.isMountedRef,
            mergedTheme: NDrawer.mergedThemeRef,
            displayed: displayedRef,
            transitionName: (0, vue_1.computed)(() => {
                return {
                    right: 'slide-in-from-right-transition',
                    left: 'slide-in-from-left-transition',
                    top: 'slide-in-from-top-transition',
                    bottom: 'slide-in-from-bottom-transition',
                }[props.placement];
            }),
            handleAfterLeave,
            bodyDirectives: bodyDirectivesRef,
            handleMousedownResizeTrigger,
            handleMouseenterResizeTrigger,
            handleMouseleaveResizeTrigger,
            isDragging: isDraggingRef,
            isHoverOnResizeTrigger: isHoverOnResizeTriggerRef,
        };
    },
    render() {
        const { $slots, mergedClsPrefix } = this;
        return this.displayDirective === 'show' || this.displayed || this.show
            ? (0, vue_1.withDirectives)(
                  (0, vue_1.h)(
                      'div',
                      { role: 'none' },
                      (0, vue_1.h)(
                          vueuc_1.VFocusTrap,
                          {
                              disabled: !this.showMask || !this.trapFocus,
                              active: this.show,
                              autoFocus: this.autoFocus,
                              onEsc: this.onEsc,
                          },
                          {
                              default: () =>
                                  (0, vue_1.h)(
                                      vue_1.Transition,
                                      {
                                          name: this.transitionName,
                                          appear: this.isMounted,
                                          onAfterEnter: this.onAfterEnter,
                                          onAfterLeave: this.handleAfterLeave,
                                      },
                                      {
                                          default: () =>
                                              (0, vue_1.withDirectives)(
                                                  (0, vue_1.h)(
                                                      'div',
                                                      (0, vue_1.mergeProps)(
                                                          this.$attrs,
                                                          {
                                                              role: 'dialog',
                                                              ref: 'bodyRef',
                                                              'aria-modal':
                                                                  'true',
                                                              class: [
                                                                  `${mergedClsPrefix}-drawer`,
                                                                  this
                                                                      .rtlEnabled &&
                                                                      `${mergedClsPrefix}-drawer--rtl`,
                                                                  `${mergedClsPrefix}-drawer--${this.placement}-placement`,
                                                                  this
                                                                      .isDragging &&
                                                                      `${mergedClsPrefix}-drawer--unselectable`,
                                                                  this
                                                                      .nativeScrollbar &&
                                                                      `${mergedClsPrefix}-drawer--native-scrollbar`,
                                                              ],
                                                          }
                                                      ),
                                                      [
                                                          this.resizable
                                                              ? (0, vue_1.h)(
                                                                    'div',
                                                                    {
                                                                        class: [
                                                                            `${mergedClsPrefix}-drawer__resize-trigger`,
                                                                            (this
                                                                                .isDragging ||
                                                                                this
                                                                                    .isHoverOnResizeTrigger) &&
                                                                                `${mergedClsPrefix}-drawer__resize-trigger--hover`,
                                                                        ],
                                                                        onMouseenter:
                                                                            this
                                                                                .handleMouseenterResizeTrigger,
                                                                        onMouseleave:
                                                                            this
                                                                                .handleMouseleaveResizeTrigger,
                                                                        onMousedown:
                                                                            this
                                                                                .handleMousedownResizeTrigger,
                                                                    }
                                                                )
                                                              : null,
                                                          this.nativeScrollbar
                                                              ? (0, vue_1.h)(
                                                                    'div',
                                                                    {
                                                                        class: `${mergedClsPrefix}-drawer-content-wrapper`,
                                                                        style: this
                                                                            .contentStyle,
                                                                        role: 'none',
                                                                    },
                                                                    $slots
                                                                )
                                                              : (0, vue_1.h)(
                                                                    _internal_1.NScrollbar,
                                                                    Object.assign(
                                                                        {},
                                                                        this
                                                                            .scrollbarProps,
                                                                        {
                                                                            contentStyle:
                                                                                this
                                                                                    .contentStyle,
                                                                            contentClass: `${mergedClsPrefix}-drawer-content-wrapper`,
                                                                            theme: this
                                                                                .mergedTheme
                                                                                .peers
                                                                                .Scrollbar,
                                                                            themeOverrides:
                                                                                this
                                                                                    .mergedTheme
                                                                                    .peerOverrides
                                                                                    .Scrollbar,
                                                                        }
                                                                    ),
                                                                    $slots
                                                                ),
                                                      ]
                                                  ),
                                                  this.bodyDirectives
                                              ),
                                      }
                                  ),
                          }
                      )
                  ),
                  [
                      [
                          vue_1.vShow,
                          this.displayDirective === 'if' ||
                              this.displayed ||
                              this.show,
                      ],
                  ]
              )
            : null;
    },
});
