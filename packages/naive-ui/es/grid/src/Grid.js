import {
    h,
    defineComponent,
    computed,
    provide,
    toRef,
    mergeProps,
    ref,
    cloneVNode,
    vShow,
    onMounted,
} from 'vue';
import { useBreakpoints, useMemo } from 'vooks';
import { VResizeObserver } from 'vueuc';
import { pxfy, parseResponsivePropValue, beforeNextFrameOnce } from 'seemly';
import { defaultBreakpoints } from '../../config-provider/src/config';
import { useConfig } from '../../_mixins';
import { getSlot, flatten, isBrowser, isNodeVShowFalse } from '../../_utils';
import { defaultSpan, gridInjectionKey } from './config';
const defaultCols = 24;
const SSR_ATTR_NAME = '__ssr__';
export const gridProps = {
    layoutShiftDisabled: Boolean,
    responsive: {
        type: [String, Boolean],
        default: 'self',
    },
    cols: {
        type: [Number, String],
        default: defaultCols,
    },
    itemResponsive: Boolean,
    collapsed: Boolean,
    collapsedRows: {
        type: Number,
        default: 1,
    },
    itemStyle: [Object, String],
    xGap: {
        type: [Number, String],
        default: 0,
    },
    yGap: {
        type: [Number, String],
        default: 0,
    },
};
export default defineComponent({
    name: 'Grid',
    inheritAttrs: false,
    props: gridProps,
    setup(props) {
        const { mergedClsPrefixRef, mergedBreakpointsRef } = useConfig(props);
        const numRegex = /^\d+$/;
        const widthRef = ref(void 0);
        const breakpointsRef = useBreakpoints(
            (mergedBreakpointsRef === null || mergedBreakpointsRef === void 0
                ? void 0
                : mergedBreakpointsRef.value) || defaultBreakpoints
        );
        const isResponsiveRef = useMemo(() => {
            if (props.itemResponsive) return true;
            if (!numRegex.test(props.cols.toString())) return true;
            if (!numRegex.test(props.xGap.toString())) return true;
            if (!numRegex.test(props.yGap.toString())) return true;
            return false;
        });
        const responsiveQueryRef = computed(() => {
            if (!isResponsiveRef.value) return void 0;
            return props.responsive === 'self'
                ? widthRef.value
                : breakpointsRef.value;
        });
        const responsiveColsRef = useMemo(() => {
            var _a;
            return (_a = Number(
                parseResponsivePropValue(
                    props.cols.toString(),
                    responsiveQueryRef.value
                )
            )) !== null && _a !== void 0
                ? _a
                : defaultCols;
        });
        const responsiveXGapRef = useMemo(() =>
            parseResponsivePropValue(
                props.xGap.toString(),
                responsiveQueryRef.value
            )
        );
        const responsiveYGapRef = useMemo(() =>
            parseResponsivePropValue(
                props.yGap.toString(),
                responsiveQueryRef.value
            )
        );
        const handleResize = (entry) => {
            widthRef.value = entry.contentRect.width;
        };
        const handleResizeRaf = (entry) => {
            beforeNextFrameOnce(handleResize, entry);
        };
        const overflowRef = ref(false);
        const handleResizeRef = computed(() => {
            if (props.responsive === 'self') {
                return handleResizeRaf;
            }
            return void 0;
        });
        const isSsrRef = ref(false);
        const contentElRef = ref();
        onMounted(() => {
            const { value: contentEl } = contentElRef;
            if (contentEl) {
                if (contentEl.hasAttribute(SSR_ATTR_NAME)) {
                    contentEl.removeAttribute(SSR_ATTR_NAME);
                    isSsrRef.value = true;
                }
            }
        });
        provide(gridInjectionKey, {
            layoutShiftDisabledRef: toRef(props, 'layoutShiftDisabled'),
            isSsrRef,
            itemStyleRef: toRef(props, 'itemStyle'),
            xGapRef: responsiveXGapRef,
            overflowRef,
        });
        return {
            isSsr: !isBrowser,
            contentEl: contentElRef,
            mergedClsPrefix: mergedClsPrefixRef,
            style: computed(() => {
                if (props.layoutShiftDisabled) {
                    return {
                        width: '100%',
                        display: 'grid',
                        gridTemplateColumns: `repeat(${props.cols}, minmax(0, 1fr))`,
                        columnGap: pxfy(props.xGap),
                        rowGap: pxfy(props.yGap),
                    };
                }
                return {
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: `repeat(${responsiveColsRef.value}, minmax(0, 1fr))`,
                    columnGap: pxfy(responsiveXGapRef.value),
                    rowGap: pxfy(responsiveYGapRef.value),
                };
            }),
            isResponsive: isResponsiveRef,
            responsiveQuery: responsiveQueryRef,
            responsiveCols: responsiveColsRef,
            handleResize: handleResizeRef,
            overflow: overflowRef,
        };
    },
    render() {
        if (this.layoutShiftDisabled) {
            return h(
                'div',
                mergeProps(
                    {
                        ref: 'contentEl',
                        class: `${this.mergedClsPrefix}-grid`,
                        style: this.style,
                    },
                    this.$attrs
                ),
                this.$slots
            );
        }
        const renderContent = () => {
            var _a, _b, _c, _d, _e, _f, _g;
            this.overflow = false;
            const rawChildren = flatten(getSlot(this));
            const childrenAndRawSpan = [];
            const {
                collapsed,
                collapsedRows,
                responsiveCols,
                responsiveQuery,
            } = this;
            rawChildren.forEach((child) => {
                var _a2, _b2, _c2, _d2;
                if (
                    ((_a2 =
                        child === null || child === void 0
                            ? void 0
                            : child.type) === null || _a2 === void 0
                        ? void 0
                        : _a2.__GRID_ITEM__) !== true
                )
                    return;
                if (isNodeVShowFalse(child)) {
                    const clonedNode = cloneVNode(child);
                    if (clonedNode.props) {
                        clonedNode.props.privateShow = false;
                    } else {
                        clonedNode.props = { privateShow: false };
                    }
                    childrenAndRawSpan.push({
                        child: clonedNode,
                        rawChildSpan: 0,
                    });
                    return;
                }
                child.dirs =
                    ((_b2 = child.dirs) === null || _b2 === void 0
                        ? void 0
                        : _b2.filter(({ dir }) => dir !== vShow)) || null;
                const clonedChild = cloneVNode(child);
                const rawChildSpan = Number(
                    (_d2 = parseResponsivePropValue(
                        (_c2 = clonedChild.props) === null || _c2 === void 0
                            ? void 0
                            : _c2.span,
                        responsiveQuery
                    )) !== null && _d2 !== void 0
                        ? _d2
                        : defaultSpan
                );
                if (rawChildSpan === 0) return;
                childrenAndRawSpan.push({
                    child: clonedChild,
                    rawChildSpan,
                });
            });
            let suffixSpan = 0;
            const maybeSuffixNode =
                (_a = childrenAndRawSpan[childrenAndRawSpan.length - 1]) ===
                    null || _a === void 0
                    ? void 0
                    : _a.child;
            if (
                maybeSuffixNode === null || maybeSuffixNode === void 0
                    ? void 0
                    : maybeSuffixNode.props
            ) {
                const suffixPropValue =
                    (_b = maybeSuffixNode.props) === null || _b === void 0
                        ? void 0
                        : _b.suffix;
                if (suffixPropValue !== void 0 && suffixPropValue !== false) {
                    suffixSpan =
                        (_d =
                            (_c = maybeSuffixNode.props) === null ||
                            _c === void 0
                                ? void 0
                                : _c.span) !== null && _d !== void 0
                            ? _d
                            : defaultSpan;
                    maybeSuffixNode.props.privateSpan = suffixSpan;
                    maybeSuffixNode.props.privateColStart =
                        responsiveCols + 1 - suffixSpan;
                    maybeSuffixNode.props.privateShow =
                        (_e = maybeSuffixNode.props.privateShow) !== null &&
                        _e !== void 0
                            ? _e
                            : true;
                }
            }
            let spanCounter = 0;
            let done = false;
            for (const { child, rawChildSpan } of childrenAndRawSpan) {
                if (done) {
                    this.overflow = true;
                }
                if (!done) {
                    const childOffset = Number(
                        (_g = parseResponsivePropValue(
                            (_f = child.props) === null || _f === void 0
                                ? void 0
                                : _f.offset,
                            responsiveQuery
                        )) !== null && _g !== void 0
                            ? _g
                            : 0
                    );
                    const childSpan = Math.min(
                        rawChildSpan + childOffset,
                        responsiveCols
                    );
                    if (!child.props) {
                        child.props = {
                            privateSpan: childSpan,
                            privateOffset: childOffset,
                        };
                    } else {
                        child.props.privateSpan = childSpan;
                        child.props.privateOffset = childOffset;
                    }
                    if (collapsed) {
                        const remainder = spanCounter % responsiveCols;
                        if (childSpan + remainder > responsiveCols) {
                            spanCounter += responsiveCols - remainder;
                        }
                        if (
                            childSpan + spanCounter + suffixSpan >
                            collapsedRows * responsiveCols
                        ) {
                            done = true;
                        } else {
                            spanCounter += childSpan;
                        }
                    }
                }
                if (done) {
                    if (child.props) {
                        if (child.props.privateShow !== true) {
                            child.props.privateShow = false;
                        }
                    } else {
                        child.props = {
                            privateShow: false,
                        };
                    }
                }
            }
            return h(
                'div',
                mergeProps(
                    {
                        ref: 'contentEl',
                        class: `${this.mergedClsPrefix}-grid`,
                        style: this.style,
                        [SSR_ATTR_NAME]: this.isSsr || void 0,
                    },
                    this.$attrs
                ),
                childrenAndRawSpan.map(({ child }) => child)
            );
        };
        return this.isResponsive && this.responsive === 'self'
            ? h(
                  VResizeObserver,
                  { onResize: this.handleResize },
                  {
                      default: renderContent,
                  }
              )
            : renderContent();
    },
});
