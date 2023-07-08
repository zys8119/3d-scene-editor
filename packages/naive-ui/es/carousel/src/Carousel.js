import {
    h,
    defineComponent,
    ref,
    cloneVNode,
    computed,
    onBeforeUnmount,
    watch,
    withDirectives,
    vShow,
    Transition,
    toRef,
    nextTick,
    onMounted,
    watchEffect,
    normalizeStyle,
    onUpdated,
} from 'vue';
import { VResizeObserver } from 'vueuc';
import { useMergedState } from 'vooks';
import { on, off } from 'evtd';
import { getPreciseEventTarget } from 'seemly';
import { useConfig, useTheme, useThemeClass } from '../../_mixins';
import { flatten, keep, resolveSlotWithProps } from '../../_utils';
import { carouselLight } from '../styles';
import {
    calculateSize,
    clampValue,
    resolveSpeed,
    isTouchEvent,
    getNextIndex,
    getPrevIndex,
    getDisplayIndex,
    getRealIndex,
    getDisplayTotalView,
    addDuplicateSlides,
} from './utils';
import { provideCarouselContext } from './CarouselContext';
import NCarouselDots from './CarouselDots';
import NCarouselArrow from './CarouselArrow';
import NCarouselItem, { isCarouselItem } from './CarouselItem';
import style from './styles/index.cssr';
const transitionProperties = ['transitionDuration', 'transitionTimingFunction'];
export const carouselProps = Object.assign(Object.assign({}, useTheme.props), {
    defaultIndex: {
        type: Number,
        default: 0,
    },
    currentIndex: Number,
    showArrow: Boolean,
    dotType: {
        type: String,
        default: 'dot',
    },
    dotPlacement: {
        type: String,
        default: 'bottom',
    },
    slidesPerView: {
        type: [Number, String],
        default: 1,
    },
    spaceBetween: {
        type: Number,
        default: 0,
    },
    centeredSlides: Boolean,
    direction: {
        type: String,
        default: 'horizontal',
    },
    autoplay: Boolean,
    interval: {
        type: Number,
        default: 5e3,
    },
    loop: {
        type: Boolean,
        default: true,
    },
    effect: {
        type: String,
        default: 'slide',
    },
    showDots: {
        type: Boolean,
        default: true,
    },
    trigger: {
        type: String,
        default: 'click',
    },
    transitionStyle: {
        type: Object,
        default: () => ({
            transitionDuration: '300ms',
        }),
    },
    transitionProps: Object,
    draggable: Boolean,
    prevSlideStyle: [Object, String],
    nextSlideStyle: [Object, String],
    touchable: {
        type: Boolean,
        default: true,
    },
    mousewheel: Boolean,
    keyboard: Boolean,
    'onUpdate:currentIndex': Function,
    onUpdateCurrentIndex: Function,
});
let globalDragging = false;
export default defineComponent({
    name: 'Carousel',
    props: carouselProps,
    setup(props) {
        const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
        const selfElRef = ref(null);
        const slidesElRef = ref(null);
        const slideElsRef = ref([]);
        const slideVNodesRef = { value: [] };
        const verticalRef = computed(() => props.direction === 'vertical');
        const sizeAxisRef = computed(() =>
            verticalRef.value ? 'height' : 'width'
        );
        const spaceAxisRef = computed(() =>
            verticalRef.value ? 'bottom' : 'right'
        );
        const sequenceLayoutRef = computed(() => props.effect === 'slide');
        const duplicatedableRef = computed(
            () =>
                props.loop &&
                props.slidesPerView === 1 &&
                sequenceLayoutRef.value
        );
        const userWantsControlRef = computed(() => props.effect === 'custom');
        const displaySlidesPerViewRef = computed(() =>
            !sequenceLayoutRef.value || props.centeredSlides
                ? 1
                : props.slidesPerView
        );
        const realSlidesPerViewRef = computed(() =>
            userWantsControlRef.value ? 1 : props.slidesPerView
        );
        const autoSlideSizeRef = computed(
            () =>
                displaySlidesPerViewRef.value === 'auto' ||
                (props.slidesPerView === 'auto' && props.centeredSlides)
        );
        const perViewSizeRef = ref({ width: 0, height: 0 });
        const slideSizesRef = computed(() => {
            const { value: slidesEls } = slideElsRef;
            if (!slidesEls.length) return [];
            const { value: autoSlideSize } = autoSlideSizeRef;
            if (autoSlideSize) {
                return slidesEls.map((slide) => calculateSize(slide));
            }
            const { value: slidesPerView } = realSlidesPerViewRef;
            const { value: perViewSize } = perViewSizeRef;
            const { value: axis } = sizeAxisRef;
            let axisSize = perViewSize[axis];
            if (slidesPerView !== 'auto') {
                const { spaceBetween } = props;
                const remaining = axisSize - (slidesPerView - 1) * spaceBetween;
                const percentage = 1 / Math.max(1, slidesPerView);
                axisSize = remaining * percentage;
            }
            const slideSize = Object.assign(Object.assign({}, perViewSize), {
                [axis]: axisSize,
            });
            return slidesEls.map(() => slideSize);
        });
        const slideTranlatesRef = computed(() => {
            const { value: slideSizes } = slideSizesRef;
            if (!slideSizes.length) return [];
            const { centeredSlides, spaceBetween } = props;
            const { value: axis } = sizeAxisRef;
            const { [axis]: perViewSize } = perViewSizeRef.value;
            let previousTranslate2 = 0;
            return slideSizes.map(({ [axis]: slideSize }) => {
                let translate = previousTranslate2;
                if (centeredSlides) {
                    translate += (slideSize - perViewSize) / 2;
                }
                previousTranslate2 += slideSize + spaceBetween;
                return translate;
            });
        });
        const isMountedRef = ref(false);
        const transitionStyleRef = computed(() => {
            const { transitionStyle } = props;
            return transitionStyle
                ? keep(transitionStyle, transitionProperties)
                : {};
        });
        const speedRef = computed(() =>
            userWantsControlRef.value
                ? 0
                : resolveSpeed(transitionStyleRef.value.transitionDuration)
        );
        const slideStylesRef = computed(() => {
            const { value: slidesEls } = slideElsRef;
            if (!slidesEls.length) return [];
            const useComputedSize = !(
                autoSlideSizeRef.value || realSlidesPerViewRef.value === 1
            );
            const getSlideSize = (index) => {
                if (useComputedSize) {
                    const { value: axis } = sizeAxisRef;
                    return {
                        [axis]: `${slideSizesRef.value[index][axis]}px`,
                    };
                }
            };
            if (userWantsControlRef.value) {
                return slidesEls.map((_, i) => getSlideSize(i));
            }
            const { effect, spaceBetween } = props;
            const { value: spaceAxis } = spaceAxisRef;
            return slidesEls.reduce((styles, _, i) => {
                const style2 = Object.assign(
                    Object.assign({}, getSlideSize(i)),
                    { [`margin-${spaceAxis}`]: `${spaceBetween}px` }
                );
                styles.push(style2);
                if (
                    isMountedRef.value &&
                    (effect === 'fade' || effect === 'card')
                ) {
                    Object.assign(style2, transitionStyleRef.value);
                }
                return styles;
            }, []);
        });
        const totalViewRef = computed(() => {
            const { value: slidesPerView } = displaySlidesPerViewRef;
            const { length: totalSlides } = slideElsRef.value;
            if (slidesPerView !== 'auto') {
                return Math.max(totalSlides - slidesPerView, 0) + 1;
            } else {
                const { value: slideSizes } = slideSizesRef;
                const { length } = slideSizes;
                if (!length) return totalSlides;
                const { value: translates } = slideTranlatesRef;
                const { value: axis } = sizeAxisRef;
                const perViewSize = perViewSizeRef.value[axis];
                let lastViewSize = slideSizes[slideSizes.length - 1][axis];
                let i = length;
                while (i > 1 && lastViewSize < perViewSize) {
                    i--;
                    lastViewSize += translates[i] - translates[i - 1];
                }
                return clampValue(i + 1, 1, length);
            }
        });
        const displayTotalViewRef = computed(() =>
            getDisplayTotalView(totalViewRef.value, duplicatedableRef.value)
        );
        const defaultRealIndex = getRealIndex(
            props.defaultIndex,
            duplicatedableRef.value
        );
        const uncontrolledDisplayIndexRef = ref(
            getDisplayIndex(
                defaultRealIndex,
                totalViewRef.value,
                duplicatedableRef.value
            )
        );
        const mergedDisplayIndexRef = useMergedState(
            toRef(props, 'currentIndex'),
            uncontrolledDisplayIndexRef
        );
        const realIndexRef = computed(() =>
            getRealIndex(mergedDisplayIndexRef.value, duplicatedableRef.value)
        );
        function toRealIndex(index) {
            var _a, _b;
            index = clampValue(index, 0, totalViewRef.value - 1);
            const displayIndex = getDisplayIndex(
                index,
                totalViewRef.value,
                duplicatedableRef.value
            );
            const { value: lastDisplayIndex } = mergedDisplayIndexRef;
            if (displayIndex !== mergedDisplayIndexRef.value) {
                uncontrolledDisplayIndexRef.value = displayIndex;
                (_a = props['onUpdate:currentIndex']) === null || _a === void 0
                    ? void 0
                    : _a.call(props, displayIndex, lastDisplayIndex);
                (_b = props.onUpdateCurrentIndex) === null || _b === void 0
                    ? void 0
                    : _b.call(props, displayIndex, lastDisplayIndex);
            }
        }
        function getRealPrevIndex(index = realIndexRef.value) {
            return getPrevIndex(index, totalViewRef.value, props.loop);
        }
        function getRealNextIndex(index = realIndexRef.value) {
            return getNextIndex(index, totalViewRef.value, props.loop);
        }
        function isRealPrev(slideOrIndex) {
            const index = getSlideIndex(slideOrIndex);
            return index !== null && getRealPrevIndex() === index;
        }
        function isRealNext(slideOrIndex) {
            const index = getSlideIndex(slideOrIndex);
            return index !== null && getRealNextIndex() === index;
        }
        function isRealActive(slideOrIndex) {
            return realIndexRef.value === getSlideIndex(slideOrIndex);
        }
        function isDisplayActive(index) {
            return mergedDisplayIndexRef.value === index;
        }
        function isPrevDisabled() {
            return getRealPrevIndex() === null;
        }
        function isNextDisabled() {
            return getRealNextIndex() === null;
        }
        function to(index) {
            const realIndex = clampValue(
                getRealIndex(index, duplicatedableRef.value),
                0,
                totalViewRef.value
            );
            if (
                index !== mergedDisplayIndexRef.value ||
                realIndex !== realIndexRef.value
            ) {
                toRealIndex(realIndex);
            }
        }
        function prev() {
            const prevIndex = getRealPrevIndex();
            if (prevIndex !== null) toRealIndex(prevIndex);
        }
        function next() {
            const nextIndex = getRealNextIndex();
            if (nextIndex !== null) toRealIndex(nextIndex);
        }
        function prevIfSlideTransitionEnd() {
            if (!inTransition || !duplicatedableRef.value) prev();
        }
        function nextIfSlideTransitionEnd() {
            if (!inTransition || !duplicatedableRef.value) next();
        }
        let inTransition = false;
        let previousTranslate = 0;
        const translateStyleRef = ref({});
        function updateTranslate(translate, speed = 0) {
            translateStyleRef.value = Object.assign(
                {},
                transitionStyleRef.value,
                {
                    transform: verticalRef.value
                        ? `translateY(${-translate}px)`
                        : `translateX(${-translate}px)`,
                    transitionDuration: `${speed}ms`,
                }
            );
        }
        function fixTranslate(speed = 0) {
            if (sequenceLayoutRef.value) {
                translateTo(realIndexRef.value, speed);
            } else if (previousTranslate !== 0) {
                if (!inTransition && speed > 0) {
                    inTransition = true;
                }
                updateTranslate((previousTranslate = 0), speed);
            }
        }
        function translateTo(index, speed) {
            const translate = getTranslate(index);
            if (translate !== previousTranslate && speed > 0) {
                inTransition = true;
            }
            previousTranslate = getTranslate(realIndexRef.value);
            updateTranslate(translate, speed);
        }
        function getTranslate(index) {
            let translate;
            if (index >= totalViewRef.value - 1) {
                translate = getLastViewTranslate();
            } else {
                translate = slideTranlatesRef.value[index] || 0;
            }
            return translate;
        }
        function getLastViewTranslate() {
            if (displaySlidesPerViewRef.value === 'auto') {
                const { value: axis } = sizeAxisRef;
                const { [axis]: perViewSize } = perViewSizeRef.value;
                const { value: translates } = slideTranlatesRef;
                const lastTranslate = translates[translates.length - 1];
                let overallSize;
                if (lastTranslate === void 0) {
                    overallSize = perViewSize;
                } else {
                    const { value: slideSizes } = slideSizesRef;
                    overallSize =
                        lastTranslate + slideSizes[slideSizes.length - 1][axis];
                }
                return overallSize - perViewSize;
            } else {
                const { value: translates } = slideTranlatesRef;
                return translates[totalViewRef.value - 1] || 0;
            }
        }
        const carouselContext = {
            currentIndexRef: mergedDisplayIndexRef,
            to,
            prev: prevIfSlideTransitionEnd,
            next: nextIfSlideTransitionEnd,
            isVertical: () => verticalRef.value,
            isHorizontal: () => !verticalRef.value,
            isPrev: isRealPrev,
            isNext: isRealNext,
            isActive: isRealActive,
            isPrevDisabled,
            isNextDisabled,
            getSlideIndex,
            getSlideStyle,
            addSlide,
            removeSlide,
            onCarouselItemClick,
        };
        provideCarouselContext(carouselContext);
        function addSlide(slide) {
            if (!slide) return;
            slideElsRef.value.push(slide);
        }
        function removeSlide(slide) {
            if (!slide) return;
            const index = getSlideIndex(slide);
            if (index !== -1) {
                slideElsRef.value.splice(index, 1);
            }
        }
        function getSlideIndex(slideOrIndex) {
            return typeof slideOrIndex === 'number'
                ? slideOrIndex
                : slideOrIndex
                ? slideElsRef.value.indexOf(slideOrIndex)
                : -1;
        }
        function getSlideStyle(slide) {
            const index = getSlideIndex(slide);
            if (index !== -1) {
                const styles = [slideStylesRef.value[index]];
                const isPrev = carouselContext.isPrev(index);
                const isNext = carouselContext.isNext(index);
                if (isPrev) {
                    styles.push(props.prevSlideStyle || '');
                }
                if (isNext) {
                    styles.push(props.nextSlideStyle || '');
                }
                return normalizeStyle(styles);
            }
        }
        function onCarouselItemClick(index, event) {
            let allowClick = !inTransition && !dragging && !isEffectiveDrag;
            if (props.effect === 'card' && allowClick && !isRealActive(index)) {
                to(index);
                allowClick = false;
            }
            if (!allowClick) {
                event.preventDefault();
                event.stopPropagation();
            }
        }
        let autoplayTimer = null;
        function stopAutoplay() {
            if (autoplayTimer) {
                clearInterval(autoplayTimer);
                autoplayTimer = null;
            }
        }
        function resetAutoplay() {
            stopAutoplay();
            const disabled = !props.autoplay || displayTotalViewRef.value < 2;
            if (!disabled) {
                autoplayTimer = window.setInterval(next, props.interval);
            }
        }
        let dragStartX = 0;
        let dragStartY = 0;
        let dragOffset = 0;
        let dragStartTime = 0;
        let dragging = false;
        let isEffectiveDrag = false;
        function handleTouchstart(event) {
            var _a;
            if (globalDragging) return;
            if (
                !((_a = slidesElRef.value) === null || _a === void 0
                    ? void 0
                    : _a.contains(getPreciseEventTarget(event)))
            ) {
                return;
            }
            globalDragging = true;
            dragging = true;
            isEffectiveDrag = false;
            dragStartTime = Date.now();
            stopAutoplay();
            if (
                event.type !== 'touchstart' &&
                !event.target.isContentEditable
            ) {
                event.preventDefault();
            }
            const touchEvent = isTouchEvent(event) ? event.touches[0] : event;
            if (verticalRef.value) {
                dragStartY = touchEvent.clientY;
            } else {
                dragStartX = touchEvent.clientX;
            }
            if (props.touchable) {
                on('touchmove', document, handleTouchmove, { passive: true });
                on('touchend', document, handleTouchend);
                on('touchcancel', document, handleTouchend);
            }
            if (props.draggable) {
                on('mousemove', document, handleTouchmove);
                on('mouseup', document, handleTouchend);
            }
        }
        function handleTouchmove(event) {
            const { value: vertical } = verticalRef;
            const { value: axis } = sizeAxisRef;
            const touchEvent = isTouchEvent(event) ? event.touches[0] : event;
            const offset = vertical
                ? touchEvent.clientY - dragStartY
                : touchEvent.clientX - dragStartX;
            const perViewSize = perViewSizeRef.value[axis];
            dragOffset = clampValue(offset, -perViewSize, perViewSize);
            if (event.cancelable) {
                event.preventDefault();
            }
            if (sequenceLayoutRef.value) {
                updateTranslate(previousTranslate - dragOffset, 0);
            }
        }
        function handleTouchend() {
            const { value: realIndex } = realIndexRef;
            let currentIndex = realIndex;
            if (!inTransition && dragOffset !== 0 && sequenceLayoutRef.value) {
                const currentTranslate = previousTranslate - dragOffset;
                const translates = [
                    ...slideTranlatesRef.value.slice(0, totalViewRef.value - 1),
                    getLastViewTranslate(),
                ];
                let prevOffset = null;
                for (let i = 0; i < translates.length; i++) {
                    const offset = Math.abs(translates[i] - currentTranslate);
                    if (prevOffset !== null && prevOffset < offset) {
                        break;
                    }
                    prevOffset = offset;
                    currentIndex = i;
                }
            }
            if (currentIndex === realIndex) {
                const timeElapsed = Date.now() - dragStartTime;
                const { value: axis } = sizeAxisRef;
                const perViewSize = perViewSizeRef.value[axis];
                if (
                    dragOffset > perViewSize / 2 ||
                    dragOffset / timeElapsed > 0.4
                ) {
                    currentIndex = getRealPrevIndex(realIndex);
                } else if (
                    dragOffset < -perViewSize / 2 ||
                    dragOffset / timeElapsed < -0.4
                ) {
                    currentIndex = getRealNextIndex(realIndex);
                }
            }
            if (currentIndex !== null && currentIndex !== realIndex) {
                isEffectiveDrag = true;
                toRealIndex(currentIndex);
                void nextTick(() => {
                    if (
                        !duplicatedableRef.value ||
                        uncontrolledDisplayIndexRef.value !==
                            mergedDisplayIndexRef.value
                    ) {
                        fixTranslate(speedRef.value);
                    }
                });
            } else {
                fixTranslate(speedRef.value);
            }
            resetDragStatus();
            resetAutoplay();
        }
        function resetDragStatus() {
            if (dragging) {
                globalDragging = false;
            }
            dragging = false;
            dragStartX = 0;
            dragStartY = 0;
            dragOffset = 0;
            dragStartTime = 0;
            off('touchmove', document, handleTouchmove);
            off('touchend', document, handleTouchend);
            off('touchcancel', document, handleTouchend);
            off('mousemove', document, handleTouchmove);
            off('mouseup', document, handleTouchend);
        }
        function handleTransitionEnd() {
            if (sequenceLayoutRef.value && inTransition) {
                const { value: realIndex } = realIndexRef;
                translateTo(realIndex, 0);
            } else {
                resetAutoplay();
            }
            if (sequenceLayoutRef.value) {
                translateStyleRef.value.transitionDuration = '0ms';
            }
            inTransition = false;
        }
        function handleMousewheel(event) {
            event.preventDefault();
            if (inTransition) return;
            let { deltaX, deltaY } = event;
            if (event.shiftKey && !deltaX) {
                deltaX = deltaY;
            }
            const prevMultiplier = -1;
            const nextMultiplier = 1;
            const m = (deltaX || deltaY) > 0 ? nextMultiplier : prevMultiplier;
            let rx = 0;
            let ry = 0;
            if (verticalRef.value) {
                ry = m;
            } else {
                rx = m;
            }
            const responseStep = 10;
            if (ry * deltaY >= responseStep || rx * deltaX >= responseStep) {
                if (m === nextMultiplier && !isNextDisabled()) {
                    next();
                } else if (m === prevMultiplier && !isPrevDisabled()) {
                    prev();
                }
            }
        }
        function handleResize() {
            perViewSizeRef.value = calculateSize(selfElRef.value, true);
            resetAutoplay();
        }
        function handleSlideResize() {
            var _a, _b;
            if (autoSlideSizeRef.value) {
                (_b = (_a = slideSizesRef.effect).scheduler) === null ||
                _b === void 0
                    ? void 0
                    : _b.call(_a);
                slideSizesRef.effect.run();
            }
        }
        function handleMouseenter() {
            if (props.autoplay) {
                stopAutoplay();
            }
        }
        function handleMouseleave() {
            if (props.autoplay) {
                resetAutoplay();
            }
        }
        onMounted(() => {
            watchEffect(resetAutoplay);
            requestAnimationFrame(() => (isMountedRef.value = true));
        });
        onBeforeUnmount(() => {
            resetDragStatus();
            stopAutoplay();
        });
        onUpdated(() => {
            const { value: slidesEls } = slideElsRef;
            const { value: slideVNodes } = slideVNodesRef;
            const indexMap = /* @__PURE__ */ new Map();
            const getDisplayIndex2 = (el) =>
                indexMap.has(el) ? indexMap.get(el) : -1;
            let isChanged = false;
            for (let i = 0; i < slidesEls.length; i++) {
                const index = slideVNodes.findIndex(
                    (v) => v.el === slidesEls[i]
                );
                if (index !== i) {
                    isChanged = true;
                }
                indexMap.set(slidesEls[i], index);
            }
            if (isChanged) {
                slidesEls.sort(
                    (a, b) => getDisplayIndex2(a) - getDisplayIndex2(b)
                );
            }
        });
        watch(
            realIndexRef,
            (realIndex, lastRealIndex) => {
                if (realIndex === lastRealIndex) return;
                resetAutoplay();
                if (sequenceLayoutRef.value) {
                    if (
                        duplicatedableRef.value &&
                        displayTotalViewRef.value > 2
                    ) {
                        const { value: length } = totalViewRef;
                        if (realIndex === length - 2 && lastRealIndex === 1) {
                            realIndex = 0;
                        } else if (
                            realIndex === 1 &&
                            lastRealIndex === length - 2
                        ) {
                            realIndex = length - 1;
                        }
                    }
                    translateTo(realIndex, speedRef.value);
                } else {
                    fixTranslate();
                }
            },
            { immediate: true }
        );
        watch(
            [duplicatedableRef, displaySlidesPerViewRef],
            () => void nextTick(() => toRealIndex(realIndexRef.value))
        );
        watch(
            slideTranlatesRef,
            () => sequenceLayoutRef.value && fixTranslate(),
            {
                deep: true,
            }
        );
        watch(sequenceLayoutRef, (value) => {
            if (!value) {
                inTransition = false;
                updateTranslate((previousTranslate = 0));
            } else {
                fixTranslate();
            }
        });
        const slidesControlListenersRef = computed(() => {
            return {
                onTouchstartPassive: props.touchable
                    ? handleTouchstart
                    : void 0,
                onMousedown: props.draggable ? handleTouchstart : void 0,
                onWheel: props.mousewheel ? handleMousewheel : void 0,
            };
        });
        const arrowSlotPropsRef = computed(() =>
            Object.assign(
                Object.assign(
                    {},
                    keep(carouselContext, [
                        'to',
                        'prev',
                        'next',
                        'isPrevDisabled',
                        'isNextDisabled',
                    ])
                ),
                {
                    total: displayTotalViewRef.value,
                    currentIndex: mergedDisplayIndexRef.value,
                }
            )
        );
        const dotSlotPropsRef = computed(() => ({
            total: displayTotalViewRef.value,
            currentIndex: mergedDisplayIndexRef.value,
            to: carouselContext.to,
        }));
        const caroulseExposedMethod = {
            getCurrentIndex: () => mergedDisplayIndexRef.value,
            to,
            prev,
            next,
        };
        const themeRef = useTheme(
            'Carousel',
            '-carousel',
            style,
            carouselLight,
            props,
            mergedClsPrefixRef
        );
        const cssVarsRef = computed(() => {
            const {
                common: { cubicBezierEaseInOut },
                self: {
                    dotSize,
                    dotColor,
                    dotColorActive,
                    dotColorFocus,
                    dotLineWidth,
                    dotLineWidthActive,
                    arrowColor,
                },
            } = themeRef.value;
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-dot-color': dotColor,
                '--n-dot-color-focus': dotColorFocus,
                '--n-dot-color-active': dotColorActive,
                '--n-dot-size': dotSize,
                '--n-dot-line-width': dotLineWidth,
                '--n-dot-line-width-active': dotLineWidthActive,
                '--n-arrow-color': arrowColor,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass('carousel', void 0, cssVarsRef, props)
            : void 0;
        return Object.assign(
            Object.assign(
                {
                    mergedClsPrefix: mergedClsPrefixRef,
                    selfElRef,
                    slidesElRef,
                    slideVNodes: slideVNodesRef,
                    duplicatedable: duplicatedableRef,
                    userWantsControl: userWantsControlRef,
                    autoSlideSize: autoSlideSizeRef,
                    displayIndex: mergedDisplayIndexRef,
                    realIndex: realIndexRef,
                    slideStyles: slideStylesRef,
                    translateStyle: translateStyleRef,
                    slidesControlListeners: slidesControlListenersRef,
                    handleTransitionEnd,
                    handleResize,
                    handleSlideResize,
                    handleMouseenter,
                    handleMouseleave,
                    isActive: isDisplayActive,
                    arrowSlotProps: arrowSlotPropsRef,
                    dotSlotProps: dotSlotPropsRef,
                },
                caroulseExposedMethod
            ),
            {
                cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
                themeClass:
                    themeClassHandle === null || themeClassHandle === void 0
                        ? void 0
                        : themeClassHandle.themeClass,
                onRender:
                    themeClassHandle === null || themeClassHandle === void 0
                        ? void 0
                        : themeClassHandle.onRender,
            }
        );
    },
    render() {
        var _a;
        const {
            mergedClsPrefix,
            showArrow,
            userWantsControl,
            slideStyles,
            dotType,
            dotPlacement,
            slidesControlListeners,
            transitionProps = {},
            arrowSlotProps,
            dotSlotProps,
            $slots: { default: defaultSlot, dots: dotsSlot, arrow: arrowSlot },
        } = this;
        const children = (defaultSlot && flatten(defaultSlot())) || [];
        let slides = filterCarouselItem(children);
        if (!slides.length) {
            slides = children.map((ch) =>
                h(NCarouselItem, null, {
                    default: () => cloneVNode(ch),
                })
            );
        }
        if (this.duplicatedable) {
            slides = addDuplicateSlides(slides);
        }
        this.slideVNodes.value = slides;
        if (this.autoSlideSize) {
            slides = slides.map((slide) =>
                h(
                    VResizeObserver,
                    { onResize: this.handleSlideResize },
                    {
                        default: () => slide,
                    }
                )
            );
        }
        (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
        return h(
            'div',
            Object.assign(
                {
                    ref: 'selfElRef',
                    class: [
                        this.themeClass,
                        `${mergedClsPrefix}-carousel`,
                        this.direction === 'vertical' &&
                            `${mergedClsPrefix}-carousel--vertical`,
                        this.showArrow &&
                            `${mergedClsPrefix}-carousel--show-arrow`,
                        `${mergedClsPrefix}-carousel--${dotPlacement}`,
                        `${mergedClsPrefix}-carousel--${this.direction}`,
                        `${mergedClsPrefix}-carousel--${this.effect}`,
                        userWantsControl &&
                            `${mergedClsPrefix}-carousel--usercontrol`,
                    ],
                    style: this.cssVars,
                },
                slidesControlListeners,
                {
                    onMouseenter: this.handleMouseenter,
                    onMouseleave: this.handleMouseleave,
                }
            ),
            h(
                VResizeObserver,
                { onResize: this.handleResize },
                {
                    default: () =>
                        h(
                            'div',
                            {
                                ref: 'slidesElRef',
                                class: `${mergedClsPrefix}-carousel__slides`,
                                role: 'listbox',
                                style: this.translateStyle,
                                onTransitionend: this.handleTransitionEnd,
                            },
                            userWantsControl
                                ? slides.map((slide, i) =>
                                      h(
                                          'div',
                                          { style: slideStyles[i], key: i },
                                          withDirectives(
                                              h(
                                                  Transition,
                                                  Object.assign(
                                                      {},
                                                      transitionProps
                                                  ),
                                                  {
                                                      default: () => slide,
                                                  }
                                              ),
                                              [[vShow, this.isActive(i)]]
                                          )
                                      )
                                  )
                                : slides
                        ),
                }
            ),
            this.showDots &&
                dotSlotProps.total > 1 &&
                resolveSlotWithProps(dotsSlot, dotSlotProps, () => [
                    h(NCarouselDots, {
                        key: dotType + dotPlacement,
                        total: dotSlotProps.total,
                        currentIndex: dotSlotProps.currentIndex,
                        dotType,
                        trigger: this.trigger,
                        keyboard: this.keyboard,
                    }),
                ]),
            showArrow &&
                resolveSlotWithProps(arrowSlot, arrowSlotProps, () => [
                    h(NCarouselArrow, null),
                ])
        );
    },
});
function filterCarouselItem(vnodes) {
    return vnodes.reduce((carouselItems, vnode) => {
        if (isCarouselItem(vnode)) {
            carouselItems.push(vnode);
        }
        return carouselItems;
    }, []);
}
