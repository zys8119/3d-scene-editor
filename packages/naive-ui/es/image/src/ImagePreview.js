import {
    h,
    defineComponent,
    Fragment,
    ref,
    withDirectives,
    Transition,
    vShow,
    watch,
    computed,
    toRef,
    onBeforeUnmount,
    inject,
    normalizeStyle,
} from 'vue';
import { zindexable } from 'vdirs';
import { useIsMounted } from 'vooks';
import { LazyTeleport } from 'vueuc';
import { on, off } from 'evtd';
import { beforeNextFrameOnce } from 'seemly';
import { kebabCase } from 'lodash-es';
import {
    RotateClockwiseIcon,
    RotateCounterclockwiseIcon,
    ZoomInIcon,
    ZoomOutIcon,
    ResizeSmallIcon,
} from '../../_internal/icons';
import { useConfig, useLocale, useTheme, useThemeClass } from '../../_mixins';
import { NBaseIcon } from '../../_internal';
import { NTooltip } from '../../tooltip';
import { imageLight } from '../styles';
import { prevIcon, nextIcon, closeIcon } from './icons';
import { imageContextKey, imagePreviewSharedProps } from './interface';
import style from './styles/index.cssr';
const BLEEDING = 32;
export default defineComponent({
    name: 'ImagePreview',
    props: Object.assign(Object.assign({}, imagePreviewSharedProps), {
        onNext: Function,
        onPrev: Function,
        clsPrefix: {
            type: String,
            required: true,
        },
    }),
    setup(props) {
        const themeRef = useTheme(
            'Image',
            '-image',
            style,
            imageLight,
            props,
            toRef(props, 'clsPrefix')
        );
        let thumbnailEl = null;
        const previewRef = ref(null);
        const previewWrapperRef = ref(null);
        const previewSrcRef = ref(void 0);
        const showRef = ref(false);
        const displayedRef = ref(false);
        const { localeRef } = useLocale('Image');
        function syncTransformOrigin() {
            const { value: previewWrapper } = previewWrapperRef;
            if (!thumbnailEl || !previewWrapper) return;
            const { style: style2 } = previewWrapper;
            const tbox = thumbnailEl.getBoundingClientRect();
            const tx = tbox.left + tbox.width / 2;
            const ty = tbox.top + tbox.height / 2;
            style2.transformOrigin = `${tx}px ${ty}px`;
        }
        function handleKeydown(e) {
            var _a, _b;
            switch (e.key) {
                case ' ':
                    e.preventDefault();
                    break;
                case 'ArrowLeft':
                    (_a = props.onPrev) === null || _a === void 0
                        ? void 0
                        : _a.call(props);
                    break;
                case 'ArrowRight':
                    (_b = props.onNext) === null || _b === void 0
                        ? void 0
                        : _b.call(props);
                    break;
                case 'Escape':
                    toggleShow();
                    break;
            }
        }
        watch(showRef, (value) => {
            if (value) {
                on('keydown', document, handleKeydown);
            } else off('keydown', document, handleKeydown);
        });
        onBeforeUnmount(() => {
            off('keydown', document, handleKeydown);
        });
        let startX = 0;
        let startY = 0;
        let offsetX = 0;
        let offsetY = 0;
        let startOffsetX = 0;
        let startOffsetY = 0;
        let mouseDownClientX = 0;
        let mouseDownClientY = 0;
        let dragging = false;
        function handleMouseMove(e) {
            const { clientX, clientY } = e;
            offsetX = clientX - startX;
            offsetY = clientY - startY;
            beforeNextFrameOnce(derivePreviewStyle);
        }
        function getMoveStrategy(opts) {
            const {
                mouseUpClientX,
                mouseUpClientY,
                mouseDownClientX: mouseDownClientX2,
                mouseDownClientY: mouseDownClientY2,
            } = opts;
            const deltaHorizontal = mouseDownClientX2 - mouseUpClientX;
            const deltaVertical = mouseDownClientY2 - mouseUpClientY;
            const moveVerticalDirection = `vertical${
                deltaVertical > 0 ? 'Top' : 'Bottom'
            }`;
            const moveHorizontalDirection = `horizontal${
                deltaHorizontal > 0 ? 'Left' : 'Right'
            }`;
            return {
                moveVerticalDirection,
                moveHorizontalDirection,
                deltaHorizontal,
                deltaVertical,
            };
        }
        function getDerivedOffset(moveStrategy) {
            const { value: preview } = previewRef;
            if (!preview) return { offsetX: 0, offsetY: 0 };
            const pbox = preview.getBoundingClientRect();
            const {
                moveVerticalDirection,
                moveHorizontalDirection,
                deltaHorizontal,
                deltaVertical,
            } = moveStrategy || {};
            let nextOffsetX = 0;
            let nextOffsetY = 0;
            if (pbox.width <= window.innerWidth) {
                nextOffsetX = 0;
            } else if (pbox.left > 0) {
                nextOffsetX = (pbox.width - window.innerWidth) / 2;
            } else if (pbox.right < window.innerWidth) {
                nextOffsetX = -(pbox.width - window.innerWidth) / 2;
            } else if (moveHorizontalDirection === 'horizontalRight') {
                nextOffsetX = Math.min(
                    (pbox.width - window.innerWidth) / 2,
                    startOffsetX -
                        (deltaHorizontal !== null && deltaHorizontal !== void 0
                            ? deltaHorizontal
                            : 0)
                );
            } else {
                nextOffsetX = Math.max(
                    -((pbox.width - window.innerWidth) / 2),
                    startOffsetX -
                        (deltaHorizontal !== null && deltaHorizontal !== void 0
                            ? deltaHorizontal
                            : 0)
                );
            }
            if (pbox.height <= window.innerHeight) {
                nextOffsetY = 0;
            } else if (pbox.top > 0) {
                nextOffsetY = (pbox.height - window.innerHeight) / 2;
            } else if (pbox.bottom < window.innerHeight) {
                nextOffsetY = -(pbox.height - window.innerHeight) / 2;
            } else if (moveVerticalDirection === 'verticalBottom') {
                nextOffsetY = Math.min(
                    (pbox.height - window.innerHeight) / 2,
                    startOffsetY -
                        (deltaVertical !== null && deltaVertical !== void 0
                            ? deltaVertical
                            : 0)
                );
            } else {
                nextOffsetY = Math.max(
                    -((pbox.height - window.innerHeight) / 2),
                    startOffsetY -
                        (deltaVertical !== null && deltaVertical !== void 0
                            ? deltaVertical
                            : 0)
                );
            }
            return {
                offsetX: nextOffsetX,
                offsetY: nextOffsetY,
            };
        }
        function handleMouseUp(e) {
            off('mousemove', document, handleMouseMove);
            off('mouseup', document, handleMouseUp);
            const { clientX: mouseUpClientX, clientY: mouseUpClientY } = e;
            dragging = false;
            const moveStrategy = getMoveStrategy({
                mouseUpClientX,
                mouseUpClientY,
                mouseDownClientX,
                mouseDownClientY,
            });
            const offset = getDerivedOffset(moveStrategy);
            offsetX = offset.offsetX;
            offsetY = offset.offsetY;
            derivePreviewStyle();
        }
        const imageContext = inject(imageContextKey, null);
        function handlePreviewMousedown(e) {
            var _a, _b;
            (_b =
                (_a =
                    imageContext === null || imageContext === void 0
                        ? void 0
                        : imageContext.previewedImgPropsRef.value) === null ||
                _a === void 0
                    ? void 0
                    : _a.onMousedown) === null || _b === void 0
                ? void 0
                : _b.call(_a, e);
            if (e.button !== 0) return;
            const { clientX, clientY } = e;
            dragging = true;
            startX = clientX - offsetX;
            startY = clientY - offsetY;
            startOffsetX = offsetX;
            startOffsetY = offsetY;
            mouseDownClientX = clientX;
            mouseDownClientY = clientY;
            derivePreviewStyle();
            on('mousemove', document, handleMouseMove);
            on('mouseup', document, handleMouseUp);
        }
        function handlePreviewDblclick(e) {
            var _a, _b;
            (_b =
                (_a =
                    imageContext === null || imageContext === void 0
                        ? void 0
                        : imageContext.previewedImgPropsRef.value) === null ||
                _a === void 0
                    ? void 0
                    : _a.onDblclick) === null || _b === void 0
                ? void 0
                : _b.call(_a, e);
            const originalImageSizeScale = getOrignalImageSizeScale();
            scale =
                scale === originalImageSizeScale ? 1 : originalImageSizeScale;
            derivePreviewStyle();
        }
        const scaleRadix = 1.5;
        let scaleExp = 0;
        let scale = 1;
        let rotate = 0;
        function resetScale() {
            scale = 1;
            scaleExp = 0;
        }
        function handleSwitchPrev() {
            var _a;
            resetScale();
            rotate = 0;
            (_a = props.onPrev) === null || _a === void 0
                ? void 0
                : _a.call(props);
        }
        function handleSwitchNext() {
            var _a;
            resetScale();
            rotate = 0;
            (_a = props.onNext) === null || _a === void 0
                ? void 0
                : _a.call(props);
        }
        function rotateCounterclockwise() {
            rotate -= 90;
            derivePreviewStyle();
        }
        function rotateClockwise() {
            rotate += 90;
            derivePreviewStyle();
        }
        function getMaxScale() {
            const { value: preview } = previewRef;
            if (!preview) return 1;
            const { innerWidth, innerHeight } = window;
            const heightMaxScale = Math.max(
                1,
                preview.naturalHeight / (innerHeight - BLEEDING)
            );
            const widthMaxScale = Math.max(
                1,
                preview.naturalWidth / (innerWidth - BLEEDING)
            );
            return Math.max(3, heightMaxScale * 2, widthMaxScale * 2);
        }
        function getOrignalImageSizeScale() {
            const { value: preview } = previewRef;
            if (!preview) return 1;
            const { innerWidth, innerHeight } = window;
            const heightScale =
                preview.naturalHeight / (innerHeight - BLEEDING);
            const widthScale = preview.naturalWidth / (innerWidth - BLEEDING);
            if (heightScale < 1 && widthScale < 1) {
                return 1;
            }
            return Math.max(heightScale, widthScale);
        }
        function zoomIn() {
            const maxScale = getMaxScale();
            if (scale < maxScale) {
                scaleExp += 1;
                scale = Math.min(maxScale, Math.pow(scaleRadix, scaleExp));
                derivePreviewStyle();
            }
        }
        function zoomOut() {
            if (scale > 0.5) {
                const originalScale = scale;
                scaleExp -= 1;
                scale = Math.max(0.5, Math.pow(scaleRadix, scaleExp));
                const diff = originalScale - scale;
                derivePreviewStyle(false);
                const offset = getDerivedOffset();
                scale += diff;
                derivePreviewStyle(false);
                scale -= diff;
                offsetX = offset.offsetX;
                offsetY = offset.offsetY;
                derivePreviewStyle();
            }
        }
        function derivePreviewStyle(transition = true) {
            var _a;
            const { value: preview } = previewRef;
            if (!preview) return;
            const { style: style2 } = preview;
            const controlledStyle = normalizeStyle(
                (_a =
                    imageContext === null || imageContext === void 0
                        ? void 0
                        : imageContext.previewedImgPropsRef.value) === null ||
                    _a === void 0
                    ? void 0
                    : _a.style
            );
            let controlledStyleString = '';
            if (typeof controlledStyle === 'string') {
                controlledStyleString = controlledStyle + ';';
            } else {
                for (const key in controlledStyle) {
                    controlledStyleString += `${kebabCase(key)}: ${
                        controlledStyle[key]
                    };`;
                }
            }
            const transformStyle = `transform-origin: center; transform: translateX(${offsetX}px) translateY(${offsetY}px) rotate(${rotate}deg) scale(${scale});`;
            if (dragging) {
                style2.cssText =
                    controlledStyleString +
                    'cursor: grabbing; transition: none;' +
                    transformStyle;
            } else {
                style2.cssText =
                    controlledStyleString +
                    'cursor: grab;' +
                    transformStyle +
                    (transition ? '' : 'transition: none;');
            }
            if (!transition) {
                void preview.offsetHeight;
            }
        }
        function toggleShow() {
            showRef.value = !showRef.value;
            displayedRef.value = true;
        }
        function resizeToOrignalImageSize() {
            scale = getOrignalImageSizeScale();
            scaleExp = Math.ceil(Math.log(scale) / Math.log(scaleRadix));
            offsetX = 0;
            offsetY = 0;
            derivePreviewStyle();
        }
        const exposedMethods = {
            setPreviewSrc: (src) => {
                previewSrcRef.value = src;
            },
            setThumbnailEl: (el) => {
                thumbnailEl = el;
            },
            toggleShow,
        };
        function withTooltip(node, tooltipKey) {
            if (props.showToolbarTooltip) {
                const { value: theme } = themeRef;
                return h(
                    NTooltip,
                    {
                        to: false,
                        theme: theme.peers.Tooltip,
                        themeOverrides: theme.peerOverrides.Tooltip,
                        keepAliveOnHover: false,
                    },
                    {
                        default: () => {
                            return localeRef.value[tooltipKey];
                        },
                        trigger: () => node,
                    }
                );
            } else {
                return node;
            }
        }
        const cssVarsRef = computed(() => {
            const {
                common: { cubicBezierEaseInOut },
                self: {
                    toolbarIconColor,
                    toolbarBorderRadius,
                    toolbarBoxShadow,
                    toolbarColor,
                },
            } = themeRef.value;
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-toolbar-icon-color': toolbarIconColor,
                '--n-toolbar-color': toolbarColor,
                '--n-toolbar-border-radius': toolbarBorderRadius,
                '--n-toolbar-box-shadow': toolbarBoxShadow,
            };
        });
        const { inlineThemeDisabled } = useConfig();
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass('image-preview', void 0, cssVarsRef, props)
            : void 0;
        return Object.assign(
            {
                previewRef,
                previewWrapperRef,
                previewSrc: previewSrcRef,
                show: showRef,
                appear: useIsMounted(),
                displayed: displayedRef,
                previewedImgProps:
                    imageContext === null || imageContext === void 0
                        ? void 0
                        : imageContext.previewedImgPropsRef,
                handleWheel(e) {
                    e.preventDefault();
                },
                handlePreviewMousedown,
                handlePreviewDblclick,
                syncTransformOrigin,
                handleAfterLeave: () => {
                    resetScale();
                    rotate = 0;
                    displayedRef.value = false;
                },
                handleDragStart: (e) => {
                    var _a, _b;
                    (_b =
                        (_a =
                            imageContext === null || imageContext === void 0
                                ? void 0
                                : imageContext.previewedImgPropsRef.value) ===
                            null || _a === void 0
                            ? void 0
                            : _a.onDragstart) === null || _b === void 0
                        ? void 0
                        : _b.call(_a, e);
                    e.preventDefault();
                },
                zoomIn,
                zoomOut,
                rotateCounterclockwise,
                rotateClockwise,
                handleSwitchPrev,
                handleSwitchNext,
                withTooltip,
                resizeToOrignalImageSize,
                cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
                themeClass:
                    themeClassHandle === null || themeClassHandle === void 0
                        ? void 0
                        : themeClassHandle.themeClass,
                onRender:
                    themeClassHandle === null || themeClassHandle === void 0
                        ? void 0
                        : themeClassHandle.onRender,
            },
            exposedMethods
        );
    },
    render() {
        var _a, _b;
        const { clsPrefix } = this;
        return h(
            Fragment,
            null,
            (_b = (_a = this.$slots).default) === null || _b === void 0
                ? void 0
                : _b.call(_a),
            h(
                LazyTeleport,
                { show: this.show },
                {
                    default: () => {
                        var _a2;
                        if (!(this.show || this.displayed)) {
                            return null;
                        }
                        (_a2 = this.onRender) === null || _a2 === void 0
                            ? void 0
                            : _a2.call(this);
                        return withDirectives(
                            h(
                                'div',
                                {
                                    class: [
                                        `${clsPrefix}-image-preview-container`,
                                        this.themeClass,
                                    ],
                                    style: this.cssVars,
                                    onWheel: this.handleWheel,
                                },
                                h(
                                    Transition,
                                    {
                                        name: 'fade-in-transition',
                                        appear: this.appear,
                                    },
                                    {
                                        default: () =>
                                            this.show
                                                ? h('div', {
                                                      class: `${clsPrefix}-image-preview-overlay`,
                                                      onClick: this.toggleShow,
                                                  })
                                                : null,
                                    }
                                ),
                                this.showToolbar
                                    ? h(
                                          Transition,
                                          {
                                              name: 'fade-in-transition',
                                              appear: this.appear,
                                          },
                                          {
                                              default: () => {
                                                  if (!this.show) return null;
                                                  const { withTooltip } = this;
                                                  return h(
                                                      'div',
                                                      {
                                                          class: `${clsPrefix}-image-preview-toolbar`,
                                                      },
                                                      this.onPrev
                                                          ? h(
                                                                Fragment,
                                                                null,
                                                                withTooltip(
                                                                    h(
                                                                        NBaseIcon,
                                                                        {
                                                                            clsPrefix,
                                                                            onClick:
                                                                                this
                                                                                    .handleSwitchPrev,
                                                                        },
                                                                        {
                                                                            default:
                                                                                () =>
                                                                                    prevIcon,
                                                                        }
                                                                    ),
                                                                    'tipPrevious'
                                                                ),
                                                                withTooltip(
                                                                    h(
                                                                        NBaseIcon,
                                                                        {
                                                                            clsPrefix,
                                                                            onClick:
                                                                                this
                                                                                    .handleSwitchNext,
                                                                        },
                                                                        {
                                                                            default:
                                                                                () =>
                                                                                    nextIcon,
                                                                        }
                                                                    ),
                                                                    'tipNext'
                                                                )
                                                            )
                                                          : null,
                                                      withTooltip(
                                                          h(
                                                              NBaseIcon,
                                                              {
                                                                  clsPrefix,
                                                                  onClick:
                                                                      this
                                                                          .rotateCounterclockwise,
                                                              },
                                                              {
                                                                  default: () =>
                                                                      h(
                                                                          RotateCounterclockwiseIcon,
                                                                          null
                                                                      ),
                                                              }
                                                          ),
                                                          'tipCounterclockwise'
                                                      ),
                                                      withTooltip(
                                                          h(
                                                              NBaseIcon,
                                                              {
                                                                  clsPrefix,
                                                                  onClick:
                                                                      this
                                                                          .rotateClockwise,
                                                              },
                                                              {
                                                                  default: () =>
                                                                      h(
                                                                          RotateClockwiseIcon,
                                                                          null
                                                                      ),
                                                              }
                                                          ),
                                                          'tipClockwise'
                                                      ),
                                                      withTooltip(
                                                          h(
                                                              NBaseIcon,
                                                              {
                                                                  clsPrefix,
                                                                  onClick:
                                                                      this
                                                                          .resizeToOrignalImageSize,
                                                              },
                                                              {
                                                                  default:
                                                                      () => {
                                                                          return h(
                                                                              ResizeSmallIcon,
                                                                              null
                                                                          );
                                                                      },
                                                              }
                                                          ),
                                                          'tipOriginalSize'
                                                      ),
                                                      withTooltip(
                                                          h(
                                                              NBaseIcon,
                                                              {
                                                                  clsPrefix,
                                                                  onClick:
                                                                      this
                                                                          .zoomOut,
                                                              },
                                                              {
                                                                  default: () =>
                                                                      h(
                                                                          ZoomOutIcon,
                                                                          null
                                                                      ),
                                                              }
                                                          ),
                                                          'tipZoomOut'
                                                      ),
                                                      withTooltip(
                                                          h(
                                                              NBaseIcon,
                                                              {
                                                                  clsPrefix,
                                                                  onClick:
                                                                      this
                                                                          .zoomIn,
                                                              },
                                                              {
                                                                  default: () =>
                                                                      h(
                                                                          ZoomInIcon,
                                                                          null
                                                                      ),
                                                              }
                                                          ),
                                                          'tipZoomIn'
                                                      ),
                                                      withTooltip(
                                                          h(
                                                              NBaseIcon,
                                                              {
                                                                  clsPrefix,
                                                                  onClick:
                                                                      this
                                                                          .toggleShow,
                                                              },
                                                              {
                                                                  default: () =>
                                                                      closeIcon,
                                                              }
                                                          ),
                                                          'tipClose'
                                                      )
                                                  );
                                              },
                                          }
                                      )
                                    : null,
                                h(
                                    Transition,
                                    {
                                        name: 'fade-in-scale-up-transition',
                                        onAfterLeave: this.handleAfterLeave,
                                        appear: this.appear,
                                        onEnter: this.syncTransformOrigin,
                                        onBeforeLeave: this.syncTransformOrigin,
                                    },
                                    {
                                        default: () => {
                                            const { previewedImgProps = {} } =
                                                this;
                                            return withDirectives(
                                                h(
                                                    'div',
                                                    {
                                                        class: `${clsPrefix}-image-preview-wrapper`,
                                                        ref: 'previewWrapperRef',
                                                    },
                                                    h(
                                                        'img',
                                                        Object.assign(
                                                            {},
                                                            previewedImgProps,
                                                            {
                                                                draggable: false,
                                                                onMousedown:
                                                                    this
                                                                        .handlePreviewMousedown,
                                                                onDblclick:
                                                                    this
                                                                        .handlePreviewDblclick,
                                                                class: [
                                                                    `${clsPrefix}-image-preview`,
                                                                    previewedImgProps.class,
                                                                ],
                                                                key: this
                                                                    .previewSrc,
                                                                src: this
                                                                    .previewSrc,
                                                                ref: 'previewRef',
                                                                onDragstart:
                                                                    this
                                                                        .handleDragStart,
                                                            }
                                                        )
                                                    )
                                                ),
                                                [[vShow, this.show]]
                                            );
                                        },
                                    }
                                )
                            ),
                            [[zindexable, { enabled: this.show }]]
                        );
                    },
                }
            )
        );
    },
});
