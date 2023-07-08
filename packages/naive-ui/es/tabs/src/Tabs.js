import {
    h,
    ref,
    defineComponent,
    computed,
    provide,
    watch,
    toRef,
    nextTick,
    withDirectives,
    vShow,
    watchEffect,
    cloneVNode,
    TransitionGroup,
} from 'vue';
import { VResizeObserver, VXScroll } from 'vueuc';
import { throttle } from 'lodash-es';
import { useCompitable, onFontsReady, useMergedState } from 'vooks';
import { useConfig, useTheme, useThemeClass } from '../../_mixins';
import {
    createKey,
    call,
    flatten,
    warnOnce,
    resolveWrappedSlot,
} from '../../_utils';
import { tabsLight } from '../styles';
import { tabsInjectionKey } from './interface';
import Tab from './Tab';
import style from './styles/index.cssr';
export const tabsProps = Object.assign(Object.assign({}, useTheme.props), {
    value: [String, Number],
    defaultValue: [String, Number],
    trigger: {
        type: String,
        default: 'click',
    },
    type: {
        type: String,
        default: 'bar',
    },
    closable: Boolean,
    justifyContent: String,
    size: {
        type: String,
        default: 'medium',
    },
    placement: {
        type: String,
        default: 'top',
    },
    tabStyle: [String, Object],
    barWidth: Number,
    paneClass: String,
    paneStyle: [String, Object],
    addable: [Boolean, Object],
    tabsPadding: {
        type: Number,
        default: 0,
    },
    animated: Boolean,
    onBeforeLeave: Function,
    onAdd: Function,
    'onUpdate:value': [Function, Array],
    onUpdateValue: [Function, Array],
    onClose: [Function, Array],
    labelSize: String,
    activeName: [String, Number],
    onActiveNameChange: [Function, Array],
});
export default defineComponent({
    name: 'Tabs',
    props: tabsProps,
    setup(props, { slots }) {
        var _a, _b, _c, _d;
        if (process.env.NODE_ENV !== 'production') {
            watchEffect(() => {
                if (props.labelSize !== void 0) {
                    warnOnce(
                        'tabs',
                        '`label-size` is deprecated, please use `size` instead.'
                    );
                }
                if (props.activeName !== void 0) {
                    warnOnce(
                        'tabs',
                        '`active-name` is deprecated, please use `value` instead.'
                    );
                }
                if (props.onActiveNameChange !== void 0) {
                    warnOnce(
                        'tabs',
                        '`on-active-name-change` is deprecated, please use `on-update:value` instead.'
                    );
                }
            });
        }
        const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
        const themeRef = useTheme(
            'Tabs',
            '-tabs',
            style,
            tabsLight,
            props,
            mergedClsPrefixRef
        );
        const tabsElRef = ref(null);
        const barElRef = ref(null);
        const scrollWrapperElRef = ref(null);
        const addTabInstRef = ref(null);
        const xScrollInstRef = ref(null);
        const leftReachedRef = ref(true);
        const rightReachedRef = ref(true);
        const compitableSizeRef = useCompitable(props, ['labelSize', 'size']);
        const compitableValueRef = useCompitable(props, [
            'activeName',
            'value',
        ]);
        const uncontrolledValueRef = ref(
            (_b =
                (_a = compitableValueRef.value) !== null && _a !== void 0
                    ? _a
                    : props.defaultValue) !== null && _b !== void 0
                ? _b
                : slots.default
                ? (_d =
                      (_c = flatten(slots.default())[0]) === null ||
                      _c === void 0
                          ? void 0
                          : _c.props) === null || _d === void 0
                    ? void 0
                    : _d.name
                : null
        );
        const mergedValueRef = useMergedState(
            compitableValueRef,
            uncontrolledValueRef
        );
        const tabChangeIdRef = { id: 0 };
        const tabWrapperStyleRef = computed(() => {
            if (!props.justifyContent || props.type === 'card') return void 0;
            return {
                display: 'flex',
                justifyContent: props.justifyContent,
            };
        });
        watch(mergedValueRef, () => {
            tabChangeIdRef.id = 0;
            updateCurrentBarStyle();
            updateCurrentScrollPosition(true);
        });
        function getCurrentEl() {
            var _a2;
            const { value } = mergedValueRef;
            if (value === null) return null;
            const tabEl =
                (_a2 = tabsElRef.value) === null || _a2 === void 0
                    ? void 0
                    : _a2.querySelector(`[data-name="${value}"]`);
            return tabEl;
        }
        function updateBarStyle(tabEl) {
            if (props.type === 'card') return;
            const { value: barEl } = barElRef;
            if (!barEl) return;
            if (tabEl) {
                const disabledClassName = `${mergedClsPrefixRef.value}-tabs-bar--disabled`;
                const { barWidth, placement } = props;
                if (tabEl.dataset.disabled === 'true') {
                    barEl.classList.add(disabledClassName);
                } else {
                    barEl.classList.remove(disabledClassName);
                }
                if (['top', 'bottom'].includes(placement)) {
                    clearBarStyle(['top', 'maxHeight', 'height']);
                    if (
                        typeof barWidth === 'number' &&
                        tabEl.offsetWidth >= barWidth
                    ) {
                        const offsetDiffLeft =
                            Math.floor((tabEl.offsetWidth - barWidth) / 2) +
                            tabEl.offsetLeft;
                        barEl.style.left = `${offsetDiffLeft}px`;
                        barEl.style.maxWidth = `${barWidth}px`;
                    } else {
                        barEl.style.left = `${tabEl.offsetLeft}px`;
                        barEl.style.maxWidth = `${tabEl.offsetWidth}px`;
                    }
                    barEl.style.width = '8192px';
                    void barEl.offsetWidth;
                } else {
                    clearBarStyle(['left', 'maxWidth', 'width']);
                    if (
                        typeof barWidth === 'number' &&
                        tabEl.offsetHeight >= barWidth
                    ) {
                        const offsetDiffTop =
                            Math.floor((tabEl.offsetHeight - barWidth) / 2) +
                            tabEl.offsetTop;
                        barEl.style.top = `${offsetDiffTop}px`;
                        barEl.style.maxHeight = `${barWidth}px`;
                    } else {
                        barEl.style.top = `${tabEl.offsetTop}px`;
                        barEl.style.maxHeight = `${tabEl.offsetHeight}px`;
                    }
                    barEl.style.height = '8192px';
                    void barEl.offsetHeight;
                }
            }
        }
        function clearBarStyle(styleProps) {
            const { value: barEl } = barElRef;
            if (!barEl) return;
            for (const prop of styleProps) {
                barEl.style[prop] = '';
            }
        }
        function updateCurrentBarStyle() {
            if (props.type === 'card') return;
            const tabEl = getCurrentEl();
            if (tabEl) {
                updateBarStyle(tabEl);
            }
        }
        function updateCurrentScrollPosition(smooth) {
            var _a2;
            const scrollWrapperEl =
                (_a2 = xScrollInstRef.value) === null || _a2 === void 0
                    ? void 0
                    : _a2.$el;
            if (!scrollWrapperEl) return;
            const tabEl = getCurrentEl();
            if (!tabEl) return;
            const {
                scrollLeft: scrollWrapperElScrollLeft,
                offsetWidth: scrollWrapperElOffsetWidth,
            } = scrollWrapperEl;
            const {
                offsetLeft: tabElOffsetLeft,
                offsetWidth: tabElOffsetWidth,
            } = tabEl;
            if (scrollWrapperElScrollLeft > tabElOffsetLeft) {
                scrollWrapperEl.scrollTo({
                    top: 0,
                    left: tabElOffsetLeft,
                    behavior: 'smooth',
                });
            } else if (
                tabElOffsetLeft + tabElOffsetWidth >
                scrollWrapperElScrollLeft + scrollWrapperElOffsetWidth
            ) {
                scrollWrapperEl.scrollTo({
                    top: 0,
                    left:
                        tabElOffsetLeft +
                        tabElOffsetWidth -
                        scrollWrapperElOffsetWidth,
                    behavior: 'smooth',
                });
            }
        }
        const tabsPaneWrapperRef = ref(null);
        let fromHeight = 0;
        let hangingTransition = null;
        function onAnimationBeforeLeave(el) {
            const tabsPaneWrapperEl = tabsPaneWrapperRef.value;
            if (tabsPaneWrapperEl) {
                fromHeight = el.getBoundingClientRect().height;
                const fromHeightPx = `${fromHeight}px`;
                const applyFromStyle = () => {
                    tabsPaneWrapperEl.style.height = fromHeightPx;
                    tabsPaneWrapperEl.style.maxHeight = fromHeightPx;
                };
                if (!hangingTransition) {
                    hangingTransition = applyFromStyle;
                } else {
                    applyFromStyle();
                    hangingTransition();
                    hangingTransition = null;
                }
            }
        }
        function onAnimationEnter(el) {
            const tabsPaneWrapperEl = tabsPaneWrapperRef.value;
            if (tabsPaneWrapperEl) {
                const targetHeight = el.getBoundingClientRect().height;
                const applyTargetStyle = () => {
                    void document.body.offsetHeight;
                    tabsPaneWrapperEl.style.maxHeight = `${targetHeight}px`;
                    tabsPaneWrapperEl.style.height = `${Math.max(
                        fromHeight,
                        targetHeight
                    )}px`;
                };
                if (!hangingTransition) {
                    hangingTransition = applyTargetStyle;
                } else {
                    hangingTransition();
                    hangingTransition = null;
                    applyTargetStyle();
                }
            }
        }
        function onAnimationAfterEnter() {
            const tabsPaneWrapperEl = tabsPaneWrapperRef.value;
            if (tabsPaneWrapperEl) {
                tabsPaneWrapperEl.style.maxHeight = '';
                tabsPaneWrapperEl.style.height = '';
            }
        }
        const renderNameListRef = { value: [] };
        const animationDirectionRef = ref('next');
        function activateTab(panelName) {
            const currentValue = mergedValueRef.value;
            let dir = 'next';
            for (const name of renderNameListRef.value) {
                if (name === currentValue) {
                    break;
                }
                if (name === panelName) {
                    dir = 'prev';
                    break;
                }
            }
            animationDirectionRef.value = dir;
            doUpdateValue(panelName);
        }
        function doUpdateValue(panelName) {
            const {
                onActiveNameChange,
                onUpdateValue,
                'onUpdate:value': _onUpdateValue,
            } = props;
            if (onActiveNameChange) {
                call(onActiveNameChange, panelName);
            }
            if (onUpdateValue) call(onUpdateValue, panelName);
            if (_onUpdateValue) call(_onUpdateValue, panelName);
            uncontrolledValueRef.value = panelName;
        }
        function handleClose(panelName) {
            const { onClose } = props;
            if (onClose) call(onClose, panelName);
        }
        let firstTimeUpdatePosition = true;
        function updateBarPositionInstantly() {
            const { value: barEl } = barElRef;
            if (!barEl) return;
            if (!firstTimeUpdatePosition) firstTimeUpdatePosition = false;
            const disableTransitionClassName = 'transition-disabled';
            barEl.classList.add(disableTransitionClassName);
            updateCurrentBarStyle();
            barEl.classList.remove(disableTransitionClassName);
        }
        let memorizedWidth = 0;
        function _handleNavResize(entry) {
            var _a2, _b2;
            if (
                entry.contentRect.width === 0 &&
                entry.contentRect.height === 0
            ) {
                return;
            }
            if (memorizedWidth === entry.contentRect.width) {
                return;
            }
            memorizedWidth = entry.contentRect.width;
            const { type } = props;
            if (type === 'line' || type === 'bar') {
                if (
                    firstTimeUpdatePosition ||
                    ((_a2 = props.justifyContent) === null || _a2 === void 0
                        ? void 0
                        : _a2.startsWith('space'))
                ) {
                    updateBarPositionInstantly();
                }
            }
            if (type !== 'segment') {
                deriveScrollShadow(
                    (_b2 = xScrollInstRef.value) === null || _b2 === void 0
                        ? void 0
                        : _b2.$el
                );
            }
        }
        const handleNavResize = throttle(_handleNavResize, 64);
        watch([() => props.justifyContent, () => props.size], () => {
            void nextTick(() => {
                const { type } = props;
                if (type === 'line' || type === 'bar') {
                    updateBarPositionInstantly();
                }
            });
        });
        const addTabFixedRef = ref(false);
        function _handleTabsResize(entry) {
            var _a2;
            const {
                target,
                contentRect: { width },
            } = entry;
            const containerWidth = target.parentElement.offsetWidth;
            if (!addTabFixedRef.value) {
                if (containerWidth < width) {
                    addTabFixedRef.value = true;
                }
            } else {
                const { value: addTabInst } = addTabInstRef;
                if (!addTabInst) return;
                if (containerWidth - width > addTabInst.$el.offsetWidth) {
                    addTabFixedRef.value = false;
                }
            }
            deriveScrollShadow(
                (_a2 = xScrollInstRef.value) === null || _a2 === void 0
                    ? void 0
                    : _a2.$el
            );
        }
        const handleTabsResize = throttle(_handleTabsResize, 64);
        function handleAdd() {
            const { onAdd } = props;
            if (onAdd) onAdd();
            void nextTick(() => {
                const currentEl = getCurrentEl();
                const { value: xScrollInst } = xScrollInstRef;
                if (!currentEl || !xScrollInst) return;
                xScrollInst.scrollTo({
                    left: currentEl.offsetLeft,
                    top: 0,
                    behavior: 'smooth',
                });
            });
        }
        function deriveScrollShadow(el) {
            if (!el) return;
            const { scrollLeft, scrollWidth, offsetWidth } = el;
            leftReachedRef.value = scrollLeft <= 0;
            rightReachedRef.value = scrollLeft + offsetWidth >= scrollWidth;
        }
        const handleScroll = throttle((e) => {
            deriveScrollShadow(e.target);
        }, 64);
        provide(tabsInjectionKey, {
            triggerRef: toRef(props, 'trigger'),
            tabStyleRef: toRef(props, 'tabStyle'),
            paneClassRef: toRef(props, 'paneClass'),
            paneStyleRef: toRef(props, 'paneStyle'),
            mergedClsPrefixRef,
            typeRef: toRef(props, 'type'),
            closableRef: toRef(props, 'closable'),
            valueRef: mergedValueRef,
            tabChangeIdRef,
            onBeforeLeaveRef: toRef(props, 'onBeforeLeave'),
            activateTab,
            handleClose,
            handleAdd,
        });
        onFontsReady(() => {
            updateCurrentBarStyle();
            updateCurrentScrollPosition(true);
        });
        watchEffect(() => {
            const { value: el } = scrollWrapperElRef;
            if (!el || ['left', 'right'].includes(props.placement)) return;
            const { value: clsPrefix } = mergedClsPrefixRef;
            const shadowBeforeClass = `${clsPrefix}-tabs-nav-scroll-wrapper--shadow-before`;
            const shadowAfterClass = `${clsPrefix}-tabs-nav-scroll-wrapper--shadow-after`;
            if (leftReachedRef.value) {
                el.classList.remove(shadowBeforeClass);
            } else {
                el.classList.add(shadowBeforeClass);
            }
            if (rightReachedRef.value) {
                el.classList.remove(shadowAfterClass);
            } else {
                el.classList.add(shadowAfterClass);
            }
        });
        const tabsRailElRef = ref(null);
        watch(mergedValueRef, () => {
            if (props.type === 'segment') {
                const tabsRailEl = tabsRailElRef.value;
                if (tabsRailEl) {
                    void nextTick(() => {
                        tabsRailEl.classList.add('transition-disabled');
                        void tabsRailEl.offsetWidth;
                        tabsRailEl.classList.remove('transition-disabled');
                    });
                }
            }
        });
        const exposedMethods = {
            syncBarPosition: () => {
                updateCurrentBarStyle();
            },
        };
        const cssVarsRef = computed(() => {
            const { value: size } = compitableSizeRef;
            const { type } = props;
            const typeSuffix = {
                card: 'Card',
                bar: 'Bar',
                line: 'Line',
                segment: 'Segment',
            }[type];
            const sizeType = `${size}${typeSuffix}`;
            const {
                self: {
                    barColor,
                    closeIconColor,
                    closeIconColorHover,
                    closeIconColorPressed,
                    tabColor,
                    tabBorderColor,
                    paneTextColor,
                    tabFontWeight,
                    tabBorderRadius,
                    tabFontWeightActive,
                    colorSegment,
                    fontWeightStrong,
                    tabColorSegment,
                    closeSize,
                    closeIconSize,
                    closeColorHover,
                    closeColorPressed,
                    closeBorderRadius,
                    [createKey('panePadding', size)]: panePadding,
                    [createKey('tabPadding', sizeType)]: tabPadding,
                    [createKey('tabPaddingVertical', sizeType)]:
                        tabPaddingVertical,
                    [createKey('tabGap', sizeType)]: tabGap,
                    [createKey('tabTextColor', type)]: tabTextColor,
                    [createKey('tabTextColorActive', type)]: tabTextColorActive,
                    [createKey('tabTextColorHover', type)]: tabTextColorHover,
                    [createKey('tabTextColorDisabled', type)]:
                        tabTextColorDisabled,
                    [createKey('tabFontSize', size)]: tabFontSize,
                },
                common: { cubicBezierEaseInOut },
            } = themeRef.value;
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-color-segment': colorSegment,
                '--n-bar-color': barColor,
                '--n-tab-font-size': tabFontSize,
                '--n-tab-text-color': tabTextColor,
                '--n-tab-text-color-active': tabTextColorActive,
                '--n-tab-text-color-disabled': tabTextColorDisabled,
                '--n-tab-text-color-hover': tabTextColorHover,
                '--n-pane-text-color': paneTextColor,
                '--n-tab-border-color': tabBorderColor,
                '--n-tab-border-radius': tabBorderRadius,
                '--n-close-size': closeSize,
                '--n-close-icon-size': closeIconSize,
                '--n-close-color-hover': closeColorHover,
                '--n-close-color-pressed': closeColorPressed,
                '--n-close-border-radius': closeBorderRadius,
                '--n-close-icon-color': closeIconColor,
                '--n-close-icon-color-hover': closeIconColorHover,
                '--n-close-icon-color-pressed': closeIconColorPressed,
                '--n-tab-color': tabColor,
                '--n-tab-font-weight': tabFontWeight,
                '--n-tab-font-weight-active': tabFontWeightActive,
                '--n-tab-padding': tabPadding,
                '--n-tab-padding-vertical': tabPaddingVertical,
                '--n-tab-gap': tabGap,
                '--n-pane-padding': panePadding,
                '--n-font-weight-strong': fontWeightStrong,
                '--n-tab-color-segment': tabColorSegment,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass(
                  'tabs',
                  computed(() => {
                      return `${compitableSizeRef.value[0]}${props.type[0]}`;
                  }),
                  cssVarsRef,
                  props
              )
            : void 0;
        return Object.assign(
            {
                mergedClsPrefix: mergedClsPrefixRef,
                mergedValue: mergedValueRef,
                renderedNames: /* @__PURE__ */ new Set(),
                tabsRailElRef,
                tabsPaneWrapperRef,
                tabsElRef,
                barElRef,
                addTabInstRef,
                xScrollInstRef,
                scrollWrapperElRef,
                addTabFixed: addTabFixedRef,
                tabWrapperStyle: tabWrapperStyleRef,
                handleNavResize,
                mergedSize: compitableSizeRef,
                handleScroll,
                handleTabsResize,
                cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
                themeClass:
                    themeClassHandle === null || themeClassHandle === void 0
                        ? void 0
                        : themeClassHandle.themeClass,
                animationDirection: animationDirectionRef,
                renderNameListRef,
                onAnimationBeforeLeave,
                onAnimationEnter,
                onAnimationAfterEnter,
                onRender:
                    themeClassHandle === null || themeClassHandle === void 0
                        ? void 0
                        : themeClassHandle.onRender,
            },
            exposedMethods
        );
    },
    render() {
        const {
            mergedClsPrefix,
            type,
            placement,
            addTabFixed,
            addable,
            mergedSize,
            renderNameListRef,
            onRender,
            $slots: {
                default: defaultSlot,
                prefix: prefixSlot,
                suffix: suffixSlot,
            },
        } = this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        const tabPaneChildren = defaultSlot
            ? flatten(defaultSlot()).filter((v) => {
                  return v.type.__TAB_PANE__ === true;
              })
            : [];
        const tabChildren = defaultSlot
            ? flatten(defaultSlot()).filter((v) => {
                  return v.type.__TAB__ === true;
              })
            : [];
        const showPane = !tabChildren.length;
        const isCard = type === 'card';
        const isSegment = type === 'segment';
        const mergedJustifyContent =
            !isCard && !isSegment && this.justifyContent;
        renderNameListRef.value = [];
        const scrollContent = () => {
            const tabs = h(
                'div',
                {
                    style: this.tabWrapperStyle,
                    class: [`${mergedClsPrefix}-tabs-wrapper`],
                },
                mergedJustifyContent
                    ? null
                    : h('div', {
                          class: `${mergedClsPrefix}-tabs-scroll-padding`,
                          style: { width: `${this.tabsPadding}px` },
                      }),
                showPane
                    ? tabPaneChildren.map((tabPaneVNode, index) => {
                          renderNameListRef.value.push(tabPaneVNode.props.name);
                          return justifyTabDynamicProps(
                              h(
                                  Tab,
                                  Object.assign({}, tabPaneVNode.props, {
                                      internalCreatedByPane: true,
                                      internalLeftPadded:
                                          index !== 0 &&
                                          (!mergedJustifyContent ||
                                              mergedJustifyContent ===
                                                  'center' ||
                                              mergedJustifyContent ===
                                                  'start' ||
                                              mergedJustifyContent === 'end'),
                                  }),
                                  tabPaneVNode.children
                                      ? {
                                            default: tabPaneVNode.children.tab,
                                        }
                                      : void 0
                              )
                          );
                      })
                    : tabChildren.map((tabVNode, index) => {
                          renderNameListRef.value.push(tabVNode.props.name);
                          if (index !== 0 && !mergedJustifyContent) {
                              return justifyTabDynamicProps(
                                  createLeftPaddedTabVNode(tabVNode)
                              );
                          } else {
                              return justifyTabDynamicProps(tabVNode);
                          }
                      }),
                !addTabFixed && addable && isCard
                    ? createAddTag(
                          addable,
                          (showPane
                              ? tabPaneChildren.length
                              : tabChildren.length) !== 0
                      )
                    : null,
                mergedJustifyContent
                    ? null
                    : h('div', {
                          class: `${mergedClsPrefix}-tabs-scroll-padding`,
                          style: { width: `${this.tabsPadding}px` },
                      })
            );
            return h(
                'div',
                {
                    ref: 'tabsElRef',
                    class: `${mergedClsPrefix}-tabs-nav-scroll-content`,
                },
                isCard && addable
                    ? h(
                          VResizeObserver,
                          { onResize: this.handleTabsResize },
                          {
                              default: () => tabs,
                          }
                      )
                    : tabs,
                isCard
                    ? h('div', { class: `${mergedClsPrefix}-tabs-pad` })
                    : null,
                isCard
                    ? null
                    : h('div', {
                          ref: 'barElRef',
                          class: `${mergedClsPrefix}-tabs-bar`,
                      })
            );
        };
        return h(
            'div',
            {
                class: [
                    `${mergedClsPrefix}-tabs`,
                    this.themeClass,
                    `${mergedClsPrefix}-tabs--${type}-type`,
                    `${mergedClsPrefix}-tabs--${mergedSize}-size`,
                    mergedJustifyContent && `${mergedClsPrefix}-tabs--flex`,
                    `${mergedClsPrefix}-tabs--${placement}`,
                ],
                style: this.cssVars,
            },
            h(
                'div',
                {
                    class: [
                        `${mergedClsPrefix}-tabs-nav--${type}-type`,
                        `${mergedClsPrefix}-tabs-nav--${placement}`,
                        `${mergedClsPrefix}-tabs-nav`,
                    ],
                },
                resolveWrappedSlot(
                    prefixSlot,
                    (children) =>
                        children &&
                        h(
                            'div',
                            { class: `${mergedClsPrefix}-tabs-nav__prefix` },
                            children
                        )
                ),
                isSegment
                    ? h(
                          'div',
                          {
                              class: `${mergedClsPrefix}-tabs-rail`,
                              ref: 'tabsRailElRef',
                          },
                          showPane
                              ? tabPaneChildren.map((tabPaneVNode, index) => {
                                    renderNameListRef.value.push(
                                        tabPaneVNode.props.name
                                    );
                                    return h(
                                        Tab,
                                        Object.assign({}, tabPaneVNode.props, {
                                            internalCreatedByPane: true,
                                            internalLeftPadded: index !== 0,
                                        }),
                                        tabPaneVNode.children
                                            ? {
                                                  default:
                                                      tabPaneVNode.children.tab,
                                              }
                                            : void 0
                                    );
                                })
                              : tabChildren.map((tabVNode, index) => {
                                    renderNameListRef.value.push(
                                        tabVNode.props.name
                                    );
                                    if (index === 0) {
                                        return tabVNode;
                                    } else {
                                        return createLeftPaddedTabVNode(
                                            tabVNode
                                        );
                                    }
                                })
                      )
                    : h(
                          VResizeObserver,
                          { onResize: this.handleNavResize },
                          {
                              default: () =>
                                  h(
                                      'div',
                                      {
                                          class: `${mergedClsPrefix}-tabs-nav-scroll-wrapper`,
                                          ref: 'scrollWrapperElRef',
                                      },
                                      ['top', 'bottom'].includes(placement)
                                          ? h(
                                                VXScroll,
                                                {
                                                    ref: 'xScrollInstRef',
                                                    onScroll: this.handleScroll,
                                                },
                                                {
                                                    default: scrollContent,
                                                }
                                            )
                                          : h(
                                                'div',
                                                {
                                                    class: `${mergedClsPrefix}-tabs-nav-y-scroll`,
                                                },
                                                scrollContent()
                                            )
                                  ),
                          }
                      ),
                addTabFixed && addable && isCard
                    ? createAddTag(addable, true)
                    : null,
                resolveWrappedSlot(
                    suffixSlot,
                    (children) =>
                        children &&
                        h(
                            'div',
                            { class: `${mergedClsPrefix}-tabs-nav__suffix` },
                            children
                        )
                )
            ),
            showPane &&
                (this.animated
                    ? h(
                          'div',
                          {
                              ref: 'tabsPaneWrapperRef',
                              class: `${mergedClsPrefix}-tabs-pane-wrapper`,
                          },
                          filterMapTabPanes(
                              tabPaneChildren,
                              this.mergedValue,
                              this.renderedNames,
                              this.onAnimationBeforeLeave,
                              this.onAnimationEnter,
                              this.onAnimationAfterEnter,
                              this.animationDirection
                          )
                      )
                    : filterMapTabPanes(
                          tabPaneChildren,
                          this.mergedValue,
                          this.renderedNames
                      ))
        );
    },
});
function filterMapTabPanes(
    tabPaneVNodes,
    value,
    renderedNames,
    onBeforeLeave,
    onEnter,
    onAfterEnter,
    animationDirection
) {
    const children = [];
    tabPaneVNodes.forEach((vNode) => {
        const {
            name,
            displayDirective,
            'display-directive': _displayDirective,
        } = vNode.props;
        const matchDisplayDirective = (directive) =>
            displayDirective === directive || _displayDirective === directive;
        const show = value === name;
        if (vNode.key !== void 0) {
            vNode.key = name;
        }
        if (
            show ||
            matchDisplayDirective('show') ||
            (matchDisplayDirective('show:lazy') && renderedNames.has(name))
        ) {
            if (!renderedNames.has(name)) {
                renderedNames.add(name);
            }
            const useVShow = !matchDisplayDirective('if');
            children.push(
                useVShow ? withDirectives(vNode, [[vShow, show]]) : vNode
            );
        }
    });
    if (!animationDirection) {
        return children;
    }
    return h(
        TransitionGroup,
        {
            name: `${animationDirection}-transition`,
            onBeforeLeave,
            onEnter,
            onAfterEnter,
        },
        { default: () => children }
    );
}
function createAddTag(addable, internalLeftPadded) {
    return h(Tab, {
        ref: 'addTabInstRef',
        key: '__addable',
        name: '__addable',
        internalCreatedByPane: true,
        internalAddable: true,
        internalLeftPadded,
        disabled: typeof addable === 'object' && addable.disabled,
    });
}
function createLeftPaddedTabVNode(tabVNode) {
    const modifiedVNode = cloneVNode(tabVNode);
    if (modifiedVNode.props) {
        modifiedVNode.props.internalLeftPadded = true;
    } else {
        modifiedVNode.props = {
            internalLeftPadded: true,
        };
    }
    return modifiedVNode;
}
function justifyTabDynamicProps(tabVNode) {
    if (Array.isArray(tabVNode.dynamicProps)) {
        if (!tabVNode.dynamicProps.includes('internalLeftPadded')) {
            tabVNode.dynamicProps.push('internalLeftPadded');
        }
    } else {
        tabVNode.dynamicProps = ['internalLeftPadded'];
    }
    return tabVNode;
}
