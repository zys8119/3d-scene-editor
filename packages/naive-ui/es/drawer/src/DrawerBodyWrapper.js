import {
    h,
    Transition,
    defineComponent,
    ref,
    computed,
    watchEffect,
    provide,
    inject,
    withDirectives,
    vShow,
    mergeProps,
    watch,
    onBeforeUnmount,
} from 'vue';
import { VFocusTrap } from 'vueuc';
import { clickoutside } from 'vdirs';
import { useConfig, useRtl } from '../../_mixins';
import { popoverBodyInjectionKey } from '../../popover/src/interface';
import { modalBodyInjectionKey } from '../../modal/src/interface';
import { NScrollbar } from '../../_internal';
import { useLockHtmlScroll } from '../../_utils';
import { drawerBodyInjectionKey, drawerInjectionKey } from './interface';
export default defineComponent({
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
        const displayedRef = ref(!!props.show);
        const bodyRef = ref(null);
        const NDrawer = inject(drawerInjectionKey);
        let startPosition = 0;
        let memoizedBodyStyleCursor = '';
        let hoverTimerId = null;
        const isHoverOnResizeTriggerRef = ref(false);
        const isDraggingRef = ref(false);
        const isVertical = computed(() => {
            return props.placement === 'top' || props.placement === 'bottom';
        });
        const { mergedClsPrefixRef, mergedRtlRef } = useConfig(props);
        const rtlEnabledRef = useRtl(
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
        watchEffect(() => {
            if (props.show) displayedRef.value = true;
        });
        watch(
            () => props.show,
            (value) => {
                if (!value) {
                    handleBodyMouseup();
                }
            }
        );
        onBeforeUnmount(() => {
            handleBodyMouseup();
        });
        const bodyDirectivesRef = computed(() => {
            const { show } = props;
            const directives = [[vShow, show]];
            if (!props.showMask) {
                directives.push([
                    clickoutside,
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
        useLockHtmlScroll(
            computed(() => props.blockScroll && displayedRef.value)
        );
        provide(drawerBodyInjectionKey, bodyRef);
        provide(popoverBodyInjectionKey, null);
        provide(modalBodyInjectionKey, null);
        return {
            bodyRef,
            rtlEnabled: rtlEnabledRef,
            mergedClsPrefix: NDrawer.mergedClsPrefixRef,
            isMounted: NDrawer.isMountedRef,
            mergedTheme: NDrawer.mergedThemeRef,
            displayed: displayedRef,
            transitionName: computed(() => {
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
            ? withDirectives(
                  h(
                      'div',
                      { role: 'none' },
                      h(
                          VFocusTrap,
                          {
                              disabled: !this.showMask || !this.trapFocus,
                              active: this.show,
                              autoFocus: this.autoFocus,
                              onEsc: this.onEsc,
                          },
                          {
                              default: () =>
                                  h(
                                      Transition,
                                      {
                                          name: this.transitionName,
                                          appear: this.isMounted,
                                          onAfterEnter: this.onAfterEnter,
                                          onAfterLeave: this.handleAfterLeave,
                                      },
                                      {
                                          default: () =>
                                              withDirectives(
                                                  h(
                                                      'div',
                                                      mergeProps(this.$attrs, {
                                                          role: 'dialog',
                                                          ref: 'bodyRef',
                                                          'aria-modal': 'true',
                                                          class: [
                                                              `${mergedClsPrefix}-drawer`,
                                                              this.rtlEnabled &&
                                                                  `${mergedClsPrefix}-drawer--rtl`,
                                                              `${mergedClsPrefix}-drawer--${this.placement}-placement`,
                                                              this.isDragging &&
                                                                  `${mergedClsPrefix}-drawer--unselectable`,
                                                              this
                                                                  .nativeScrollbar &&
                                                                  `${mergedClsPrefix}-drawer--native-scrollbar`,
                                                          ],
                                                      }),
                                                      [
                                                          this.resizable
                                                              ? h('div', {
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
                                                                })
                                                              : null,
                                                          this.nativeScrollbar
                                                              ? h(
                                                                    'div',
                                                                    {
                                                                        class: `${mergedClsPrefix}-drawer-content-wrapper`,
                                                                        style: this
                                                                            .contentStyle,
                                                                        role: 'none',
                                                                    },
                                                                    $slots
                                                                )
                                                              : h(
                                                                    NScrollbar,
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
                          vShow,
                          this.displayDirective === 'if' ||
                              this.displayed ||
                              this.show,
                      ],
                  ]
              )
            : null;
    },
});
