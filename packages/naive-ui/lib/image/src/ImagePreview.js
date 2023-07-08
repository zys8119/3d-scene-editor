var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const vue_1 = require('vue');
const vdirs_1 = require('vdirs');
const vooks_1 = require('vooks');
const vueuc_1 = require('vueuc');
const evtd_1 = require('evtd');
const seemly_1 = require('seemly');
const lodash_1 = require('lodash');
const icons_1 = require('../../_internal/icons');
const _mixins_1 = require('../../_mixins');
const _internal_1 = require('../../_internal');
const tooltip_1 = require('../../tooltip');
const styles_1 = require('../styles');
const icons_2 = require('./icons');
const interface_1 = require('./interface');
const index_cssr_1 = __importDefault(require('./styles/index.cssr'));
const BLEEDING = 32;
exports.default = (0, vue_1.defineComponent)({
    name: 'ImagePreview',
    props: Object.assign(
        Object.assign({}, interface_1.imagePreviewSharedProps),
        {
            onNext: Function,
            onPrev: Function,
            clsPrefix: {
                type: String,
                required: true,
            },
        }
    ),
    setup(props) {
        const themeRef = (0, _mixins_1.useTheme)(
            'Image',
            '-image',
            index_cssr_1.default,
            styles_1.imageLight,
            props,
            (0, vue_1.toRef)(props, 'clsPrefix')
        );
        let thumbnailEl = null;
        const previewRef = (0, vue_1.ref)(null);
        const previewWrapperRef = (0, vue_1.ref)(null);
        const previewSrcRef = (0, vue_1.ref)(void 0);
        const showRef = (0, vue_1.ref)(false);
        const displayedRef = (0, vue_1.ref)(false);
        const { localeRef } = (0, _mixins_1.useLocale)('Image');
        function syncTransformOrigin() {
            const { value: previewWrapper } = previewWrapperRef;
            if (!thumbnailEl || !previewWrapper) return;
            const { style } = previewWrapper;
            const tbox = thumbnailEl.getBoundingClientRect();
            const tx = tbox.left + tbox.width / 2;
            const ty = tbox.top + tbox.height / 2;
            style.transformOrigin = `${tx}px ${ty}px`;
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
        (0, vue_1.watch)(showRef, (value) => {
            if (value) {
                (0, evtd_1.on)('keydown', document, handleKeydown);
            } else (0, evtd_1.off)('keydown', document, handleKeydown);
        });
        (0, vue_1.onBeforeUnmount)(() => {
            (0, evtd_1.off)('keydown', document, handleKeydown);
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
            (0, seemly_1.beforeNextFrameOnce)(derivePreviewStyle);
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
            (0, evtd_1.off)('mousemove', document, handleMouseMove);
            (0, evtd_1.off)('mouseup', document, handleMouseUp);
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
        const imageContext = (0, vue_1.inject)(
            interface_1.imageContextKey,
            null
        );
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
            (0, evtd_1.on)('mousemove', document, handleMouseMove);
            (0, evtd_1.on)('mouseup', document, handleMouseUp);
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
            const { style } = preview;
            const controlledStyle = (0, vue_1.normalizeStyle)(
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
                    controlledStyleString += `${(0, lodash_1.kebabCase)(
                        key
                    )}: ${controlledStyle[key]};`;
                }
            }
            const transformStyle = `transform-origin: center; transform: translateX(${offsetX}px) translateY(${offsetY}px) rotate(${rotate}deg) scale(${scale});`;
            if (dragging) {
                style.cssText =
                    controlledStyleString +
                    'cursor: grabbing; transition: none;' +
                    transformStyle;
            } else {
                style.cssText =
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
                return (0, vue_1.h)(
                    tooltip_1.NTooltip,
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
        const cssVarsRef = (0, vue_1.computed)(() => {
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
        const { inlineThemeDisabled } = (0, _mixins_1.useConfig)();
        const themeClassHandle = inlineThemeDisabled
            ? (0, _mixins_1.useThemeClass)(
                  'image-preview',
                  void 0,
                  cssVarsRef,
                  props
              )
            : void 0;
        return Object.assign(
            {
                previewRef,
                previewWrapperRef,
                previewSrc: previewSrcRef,
                show: showRef,
                appear: (0, vooks_1.useIsMounted)(),
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
        return (0, vue_1.h)(
            vue_1.Fragment,
            null,
            (_b = (_a = this.$slots).default) === null || _b === void 0
                ? void 0
                : _b.call(_a),
            (0, vue_1.h)(
                vueuc_1.LazyTeleport,
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
                        return (0, vue_1.withDirectives)(
                            (0, vue_1.h)(
                                'div',
                                {
                                    class: [
                                        `${clsPrefix}-image-preview-container`,
                                        this.themeClass,
                                    ],
                                    style: this.cssVars,
                                    onWheel: this.handleWheel,
                                },
                                (0, vue_1.h)(
                                    vue_1.Transition,
                                    {
                                        name: 'fade-in-transition',
                                        appear: this.appear,
                                    },
                                    {
                                        default: () =>
                                            this.show
                                                ? (0, vue_1.h)('div', {
                                                      class: `${clsPrefix}-image-preview-overlay`,
                                                      onClick: this.toggleShow,
                                                  })
                                                : null,
                                    }
                                ),
                                this.showToolbar
                                    ? (0, vue_1.h)(
                                          vue_1.Transition,
                                          {
                                              name: 'fade-in-transition',
                                              appear: this.appear,
                                          },
                                          {
                                              default: () => {
                                                  if (!this.show) return null;
                                                  const { withTooltip } = this;
                                                  return (0, vue_1.h)(
                                                      'div',
                                                      {
                                                          class: `${clsPrefix}-image-preview-toolbar`,
                                                      },
                                                      this.onPrev
                                                          ? (0, vue_1.h)(
                                                                vue_1.Fragment,
                                                                null,
                                                                withTooltip(
                                                                    (0,
                                                                    vue_1.h)(
                                                                        _internal_1.NBaseIcon,
                                                                        {
                                                                            clsPrefix,
                                                                            onClick:
                                                                                this
                                                                                    .handleSwitchPrev,
                                                                        },
                                                                        {
                                                                            default:
                                                                                () =>
                                                                                    icons_2.prevIcon,
                                                                        }
                                                                    ),
                                                                    'tipPrevious'
                                                                ),
                                                                withTooltip(
                                                                    (0,
                                                                    vue_1.h)(
                                                                        _internal_1.NBaseIcon,
                                                                        {
                                                                            clsPrefix,
                                                                            onClick:
                                                                                this
                                                                                    .handleSwitchNext,
                                                                        },
                                                                        {
                                                                            default:
                                                                                () =>
                                                                                    icons_2.nextIcon,
                                                                        }
                                                                    ),
                                                                    'tipNext'
                                                                )
                                                            )
                                                          : null,
                                                      withTooltip(
                                                          (0, vue_1.h)(
                                                              _internal_1.NBaseIcon,
                                                              {
                                                                  clsPrefix,
                                                                  onClick:
                                                                      this
                                                                          .rotateCounterclockwise,
                                                              },
                                                              {
                                                                  default: () =>
                                                                      (0,
                                                                      vue_1.h)(
                                                                          icons_1.RotateCounterclockwiseIcon,
                                                                          null
                                                                      ),
                                                              }
                                                          ),
                                                          'tipCounterclockwise'
                                                      ),
                                                      withTooltip(
                                                          (0, vue_1.h)(
                                                              _internal_1.NBaseIcon,
                                                              {
                                                                  clsPrefix,
                                                                  onClick:
                                                                      this
                                                                          .rotateClockwise,
                                                              },
                                                              {
                                                                  default: () =>
                                                                      (0,
                                                                      vue_1.h)(
                                                                          icons_1.RotateClockwiseIcon,
                                                                          null
                                                                      ),
                                                              }
                                                          ),
                                                          'tipClockwise'
                                                      ),
                                                      withTooltip(
                                                          (0, vue_1.h)(
                                                              _internal_1.NBaseIcon,
                                                              {
                                                                  clsPrefix,
                                                                  onClick:
                                                                      this
                                                                          .resizeToOrignalImageSize,
                                                              },
                                                              {
                                                                  default:
                                                                      () => {
                                                                          return (0,
                                                                          vue_1.h)(
                                                                              icons_1.ResizeSmallIcon,
                                                                              null
                                                                          );
                                                                      },
                                                              }
                                                          ),
                                                          'tipOriginalSize'
                                                      ),
                                                      withTooltip(
                                                          (0, vue_1.h)(
                                                              _internal_1.NBaseIcon,
                                                              {
                                                                  clsPrefix,
                                                                  onClick:
                                                                      this
                                                                          .zoomOut,
                                                              },
                                                              {
                                                                  default: () =>
                                                                      (0,
                                                                      vue_1.h)(
                                                                          icons_1.ZoomOutIcon,
                                                                          null
                                                                      ),
                                                              }
                                                          ),
                                                          'tipZoomOut'
                                                      ),
                                                      withTooltip(
                                                          (0, vue_1.h)(
                                                              _internal_1.NBaseIcon,
                                                              {
                                                                  clsPrefix,
                                                                  onClick:
                                                                      this
                                                                          .zoomIn,
                                                              },
                                                              {
                                                                  default: () =>
                                                                      (0,
                                                                      vue_1.h)(
                                                                          icons_1.ZoomInIcon,
                                                                          null
                                                                      ),
                                                              }
                                                          ),
                                                          'tipZoomIn'
                                                      ),
                                                      withTooltip(
                                                          (0, vue_1.h)(
                                                              _internal_1.NBaseIcon,
                                                              {
                                                                  clsPrefix,
                                                                  onClick:
                                                                      this
                                                                          .toggleShow,
                                                              },
                                                              {
                                                                  default: () =>
                                                                      icons_2.closeIcon,
                                                              }
                                                          ),
                                                          'tipClose'
                                                      )
                                                  );
                                              },
                                          }
                                      )
                                    : null,
                                (0, vue_1.h)(
                                    vue_1.Transition,
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
                                            return (0, vue_1.withDirectives)(
                                                (0, vue_1.h)(
                                                    'div',
                                                    {
                                                        class: `${clsPrefix}-image-preview-wrapper`,
                                                        ref: 'previewWrapperRef',
                                                    },
                                                    (0, vue_1.h)(
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
                                                [[vue_1.vShow, this.show]]
                                            );
                                        },
                                    }
                                )
                            ),
                            [[vdirs_1.zindexable, { enabled: this.show }]]
                        );
                    },
                }
            )
        );
    },
});
