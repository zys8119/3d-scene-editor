import {
    h,
    vShow,
    withDirectives,
    Transition,
    ref,
    defineComponent,
    computed,
    mergeProps,
    inject,
    onBeforeUnmount,
    watch,
    toRef,
    provide,
    watchEffect,
    Fragment,
} from 'vue';
import { VFollower, VFocusTrap } from 'vueuc';
import { clickoutside, mousemoveoutside } from 'vdirs';
import { getPreciseEventTarget } from 'seemly';
import { NxScrollbar } from '../../_internal/scrollbar';
import { drawerBodyInjectionKey } from '../../drawer/src/interface';
import { modalBodyInjectionKey } from '../../modal/src/interface';
import { useTheme, useConfig, useThemeClass } from '../../_mixins';
import {
    formatLength,
    isSlotEmpty,
    resolveWrappedSlot,
    useAdjustedTo,
    isJsdom,
} from '../../_utils';
import { popoverLight } from '../styles';
import { popoverBodyInjectionKey } from './interface';
import style from './styles/index.cssr';
export const popoverBodyProps = Object.assign(
    Object.assign({}, useTheme.props),
    {
        to: useAdjustedTo.propTo,
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
export const renderArrow = ({ arrowStyle, clsPrefix }) => {
    return h(
        'div',
        {
            key: '__popover-arrow__',
            class: `${clsPrefix}-popover-arrow-wrapper`,
        },
        h('div', { class: `${clsPrefix}-popover-arrow`, style: arrowStyle })
    );
};
export default defineComponent({
    name: 'PopoverBody',
    inheritAttrs: false,
    props: popoverBodyProps,
    setup(props, { slots, attrs }) {
        const { namespaceRef, mergedClsPrefixRef, inlineThemeDisabled } =
            useConfig(props);
        const themeRef = useTheme(
            'Popover',
            '-popover',
            style,
            popoverLight,
            props,
            mergedClsPrefixRef
        );
        const followerRef = ref(null);
        const NPopover = inject('NPopover');
        const bodyRef = ref(null);
        const followerEnabledRef = ref(props.show);
        const displayedRef = ref(false);
        watchEffect(() => {
            const { show } = props;
            if (show && !isJsdom() && !props.internalDeactivateImmediately) {
                displayedRef.value = true;
            }
        });
        const directivesRef = computed(() => {
            const { trigger, onClickoutside } = props;
            const directives = [];
            const {
                positionManuallyRef: { value: positionManually },
            } = NPopover;
            if (!positionManually) {
                if (trigger === 'click' && !onClickoutside) {
                    directives.push([
                        clickoutside,
                        handleClickOutside,
                        void 0,
                        { capture: true },
                    ]);
                }
                if (trigger === 'hover') {
                    directives.push([mousemoveoutside, handleMouseMoveOutside]);
                }
            }
            if (onClickoutside) {
                directives.push([
                    clickoutside,
                    handleClickOutside,
                    void 0,
                    { capture: true },
                ]);
            }
            if (
                props.displayDirective === 'show' ||
                (props.animated && displayedRef.value)
            ) {
                directives.push([vShow, props.show]);
            }
            return directives;
        });
        const styleRef = computed(() => {
            const width =
                props.width === 'trigger' ? void 0 : formatLength(props.width);
            const style2 = [];
            if (width) {
                style2.push({ width });
            }
            const { maxWidth, minWidth } = props;
            if (maxWidth) {
                style2.push({ maxWidth: formatLength(maxWidth) });
            }
            if (minWidth) {
                style2.push({ maxWidth: formatLength(minWidth) });
            }
            if (!inlineThemeDisabled) {
                style2.push(cssVarsRef.value);
            }
            return style2;
        });
        const cssVarsRef = computed(() => {
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
            ? useThemeClass('popover', void 0, cssVarsRef, props)
            : void 0;
        NPopover.setBodyInstance({
            syncPosition,
        });
        onBeforeUnmount(() => {
            NPopover.setBodyInstance(null);
        });
        watch(toRef(props, 'show'), (value) => {
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
                !getTriggerElement().contains(getPreciseEventTarget(e))
            ) {
                NPopover.handleMouseMoveOutside(e);
            }
        }
        function handleClickOutside(e) {
            if (
                (props.trigger === 'click' &&
                    !getTriggerElement().contains(getPreciseEventTarget(e))) ||
                props.onClickoutside
            ) {
                NPopover.handleClickOutside(e);
            }
        }
        function getTriggerElement() {
            return NPopover.getTriggerElement();
        }
        provide(popoverBodyInjectionKey, bodyRef);
        provide(drawerBodyInjectionKey, null);
        provide(modalBodyInjectionKey, null);
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
                    !isSlotEmpty(slots.header) || !isSlotEmpty(slots.footer);
                const renderContentInnerNode = () => {
                    var _a;
                    const body = hasHeaderOrFooter
                        ? h(
                              Fragment,
                              null,
                              resolveWrappedSlot(slots.header, (children) => {
                                  return children
                                      ? h(
                                            'div',
                                            {
                                                class: `${mergedClsPrefix}-popover__header`,
                                                style: props.headerStyle,
                                            },
                                            children
                                        )
                                      : null;
                              }),
                              resolveWrappedSlot(slots.default, (children) => {
                                  return children
                                      ? h(
                                            'div',
                                            {
                                                class: `${mergedClsPrefix}-popover__content`,
                                                style: props.contentStyle,
                                            },
                                            slots
                                        )
                                      : null;
                              }),
                              resolveWrappedSlot(slots.footer, (children) => {
                                  return children
                                      ? h(
                                            'div',
                                            {
                                                class: `${mergedClsPrefix}-popover__footer`,
                                                style: props.footerStyle,
                                            },
                                            children
                                        )
                                      : null;
                              })
                          )
                        : props.scrollable
                        ? (_a = slots.default) === null || _a === void 0
                            ? void 0
                            : _a.call(slots)
                        : h(
                              'div',
                              {
                                  class: `${mergedClsPrefix}-popover__content`,
                                  style: props.contentStyle,
                              },
                              slots
                          );
                    const maybeScrollableBody = props.scrollable
                        ? h(
                              NxScrollbar,
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
                        ? renderArrow({
                              arrowStyle: props.arrowStyle,
                              clsPrefix: mergedClsPrefix,
                          })
                        : null;
                    return [maybeScrollableBody, arrow];
                };
                contentNode = h(
                    'div',
                    mergeProps(
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
                        ? h(
                              VFocusTrap,
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
            return withDirectives(contentNode, directivesRef.value);
        }
        return {
            displayed: displayedRef,
            namespace: namespaceRef,
            isMounted: NPopover.isMountedRef,
            zIndex: NPopover.zIndexRef,
            followerRef,
            adjustedTo: useAdjustedTo(props),
            followerEnabled: followerEnabledRef,
            renderContentNode,
        };
    },
    render() {
        return h(
            VFollower,
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
                teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey,
            },
            {
                default: () => {
                    return this.animated
                        ? h(
                              Transition,
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
