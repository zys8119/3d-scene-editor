const { ref, provide, toRef, watchEffect, h } = require('vue');
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.tourProps = void 0;
const vue_1 = require('vue');
const _mixins_1 = require('../../../_mixins');
const index_cssr_1 = __importDefault(require('./styles/index.cssr'));
const styles_1 = require('../styles');
const button_1 = require('../../../button');
const space_1 = require('../../../space');
const popover_1 = require('../../../popover');
const interface_1 = require('./interface');
const vooks_1 = require('vooks');
const _utils_1 = require('../../../_utils');
const TourDots_1 = __importDefault(require('./TourDots'));
const _internal_1 = require('../../../_internal');
const naive_ui_1 = require('naive-ui');
exports.tourProps = Object.assign(Object.assign({}, _mixins_1.useTheme.props), {
    mask: {
        type: Boolean,
        default: true,
    },
    steps: Array,
    stepType: {
        type: String,
        default: 'dot',
    },
    show: {
        type: Boolean,
        default: false,
    },
    closable: {
        type: Boolean,
        default: false,
    },
    preText: {
        type: String,
        default: '\u4E0A\u4E00\u6B65',
    },
    nextText: {
        type: String,
        default: '\u4E0B\u4E00\u6B65',
    },
    finishText: {
        type: String,
        default: '\u7ED3\u675F',
    },
    'onUpdate:show': [Function, Array],
    onUpdateShow: [Function, Array],
    internalAppear: {
        type: Boolean,
        default: void 0,
    },
    transformOrigin: {
        type: String,
        default: 'mouse',
    },
});
exports.default = (0, vue_1.defineComponent)({
    name: 'Tour',
    props: exports.tourProps,
    setup(props, { slots, expose }) {
        const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props);
        const step = ref({
            x: 0,
            y: 0,
            title: '',
            description: '',
            placement: 'top',
            boxWidth: 0,
            boxHeight: 0,
            boxX: 0,
            boxY: 0,
        });
        const currentStep = ref(0);
        const totalStep = ref(0);
        const themeRef = (0, _mixins_1.useTheme)(
            'Tour',
            '-tour',
            index_cssr_1.default,
            styles_1.tourLight,
            props,
            mergedClsPrefixRef
        );
        const isMountedRef = (0, vooks_1.useIsMounted)();
        provide(interface_1.tourInjectionKey, {
            getMousePosition: () => {
                return null;
            },
            mergedClsPrefixRef,
            mergedThemeRef: themeRef,
            isMountedRef,
            appearRef: toRef(props, 'internalAppear'),
            transformOriginRef: toRef(props, 'transformOrigin'),
        });
        const cssVarsRef = (0, vue_1.computed)(() => {
            const {
                common: { cubicBezierEaseIn, cubicBezierEaseOut },
                self: {
                    dotSize,
                    dotColor,
                    dotColorActive,
                    dotColorFocus,
                    boxColor,
                },
            } = themeRef.value;
            return {
                '--n-tour-bezier-out': cubicBezierEaseOut,
                '--n-tour-bezier-in': cubicBezierEaseIn,
                '--n-tour-dot-color': dotColor,
                '--n-tour-dot-color-focus': dotColorFocus,
                '--n-tour-dot-color-active': dotColorActive,
                '--n-tour-dot-size': dotSize,
                '--n-tour-dot-box-color': boxColor,
            };
        });
        function doUpdateShow(show) {
            const { onUpdateShow, 'onUpdate:show': _onUpdateShow } = props;
            if (onUpdateShow) (0, _utils_1.call)(onUpdateShow, show);
            if (_onUpdateShow) (0, _utils_1.call)(_onUpdateShow, show);
        }
        function handlePreStep() {
            if (currentStep.value > 0) {
                currentStep.value -= 1;
            }
        }
        function handleNextStep() {
            currentStep.value += 1;
        }
        function handleEndStep() {
            doUpdateShow(false);
            if (props.steps) {
                props.steps[
                    currentStep.value
                ].target.value.$el.style.zIndex = 0;
            }
            setTimeout(() => {
                currentStep.value = 0;
            }, 1e3);
        }
        watchEffect(() => {
            var _a, _b;
            if (props.show) {
                totalStep.value =
                    ((_a = props.steps) === null || _a === void 0
                        ? void 0
                        : _a.length) || 0;
                (_b = props.steps) === null || _b === void 0
                    ? void 0
                    : _b.forEach((v, i) => {
                          if (currentStep.value === i) {
                              const { x, y, width, height } =
                                  v.target.value.$el.getBoundingClientRect();
                              step.value.title = v.title;
                              step.value.description = v.description;
                              step.value.placement = v.placement;
                              step.value.boxWidth = width + 10;
                              step.value.boxHeight = height + 10;
                              step.value.boxX = x - 5;
                              step.value.boxY = y - 5;
                              if (v.placement === 'bottom') {
                                  step.value.x = x + width / 2;
                                  step.value.y = y + height;
                              } else if (v.placement === 'left') {
                                  step.value.x = x;
                                  step.value.y = y + height / 2;
                              } else if (v.placement === 'right') {
                                  step.value.x = x + width;
                                  step.value.y = y + height / 2;
                              } else {
                                  step.value.x = x + width / 2;
                                  step.value.y = y;
                              }
                              v.target.value.$el.style.zIndex = 10001;
                          } else {
                              v.target.value.$el.style.zIndex = 0;
                          }
                      });
            }
        });
        return {
            cssVars: cssVarsRef,
            isMounted: isMountedRef,
            mergedClsPrefix: mergedClsPrefixRef,
            step,
            currentStep,
            totalStep,
            handlePreStep,
            handleNextStep,
            handleEndStep,
        };
    },
    render() {
        const {
            mergedClsPrefix,
            show,
            step,
            currentStep,
            totalStep,
            closable,
            mask,
            stepType,
        } = this;
        return h(
            'div',
            { class: `${mergedClsPrefix}-tour`, style: this.cssVars },
            h('div', { class: `${mergedClsPrefix}-tour` }),
            h(
                vue_1.Transition,
                { name: 'fade-in-transition', key: 'mask' },
                {
                    default: () => {
                        return show
                            ? h('div', {
                                  'aria-hidden': true,
                                  ref: 'containerRef',
                                  class: [
                                      `${mergedClsPrefix}-tour-mask`,
                                      !mask &&
                                          `${mergedClsPrefix}-tour-mask-hide`,
                                  ],
                              })
                            : null;
                    },
                }
            ),
            mask
                ? h('div', {
                      class: show
                          ? `${mergedClsPrefix}-tour-box`
                          : `${mergedClsPrefix}-tour-box-none`,
                      style: {
                          left: step.boxX + 'px',
                          top: step.boxY + 'px',
                          width: step.boxWidth + 'px',
                          height: step.boxHeight + 'px',
                      },
                  })
                : null,
            h(
                popover_1.NPopover,
                {
                    show,
                    x: step.x,
                    y: step.y,
                    flip: false,
                    placement: step.placement,
                    trigger: 'manual',
                },
                {
                    default: () =>
                        h(
                            'div',
                            {
                                class: `${mergedClsPrefix}-tour-pop`,
                                style: this.cssVars,
                            },
                            closable
                                ? h(_internal_1.NBaseClose, {
                                      clsPrefix: mergedClsPrefix,
                                      class: `${mergedClsPrefix}-tour-pop__close`,
                                      onClick: this.handleEndStep,
                                  })
                                : null,
                            h(
                                'div',
                                { class: `${mergedClsPrefix}-tour-inner` },
                                h(
                                    'div',
                                    {
                                        class: `${mergedClsPrefix}-tour-inner-title`,
                                    },
                                    step.title
                                ),
                                h(
                                    'div',
                                    {
                                        class: `${mergedClsPrefix}-tour-inner-description`,
                                    },
                                    step.description
                                )
                            ),
                            h(
                                'div',
                                { class: `${mergedClsPrefix}-tour-footer` },
                                h(
                                    'div',
                                    {
                                        class: `${mergedClsPrefix}-tour-footer-step`,
                                    },
                                    stepType === 'dot'
                                        ? h(TourDots_1.default, {
                                              key: step.title,
                                              total: totalStep,
                                              currentIndex: currentStep,
                                          })
                                        : h(naive_ui_1.NText, null, {
                                              default: () =>
                                                  `${
                                                      currentStep + 1
                                                  }/${totalStep}`,
                                          })
                                ),
                                h(
                                    'div',
                                    {
                                        class: `${mergedClsPrefix}-tour-footer-button`,
                                    },
                                    h(
                                        space_1.NSpace,
                                        { justify: 'center' },
                                        {
                                            default: () =>
                                                h(
                                                    vue_1.Fragment,
                                                    null,
                                                    currentStep > 0 &&
                                                        h(
                                                            button_1.NButton,
                                                            {
                                                                type: 'default',
                                                                size: 'small',
                                                                onClick:
                                                                    this
                                                                        .handlePreStep,
                                                            },
                                                            {
                                                                default: () =>
                                                                    this
                                                                        .preText,
                                                            }
                                                        ),
                                                    totalStep >
                                                        currentStep + 1 &&
                                                        h(
                                                            button_1.NButton,
                                                            {
                                                                type: 'primary',
                                                                size: 'small',
                                                                onClick:
                                                                    this
                                                                        .handleNextStep,
                                                            },
                                                            {
                                                                default: () =>
                                                                    this
                                                                        .nextText,
                                                            }
                                                        ),
                                                    totalStep ===
                                                        currentStep + 1 &&
                                                        h(
                                                            button_1.NButton,
                                                            {
                                                                type: 'primary',
                                                                size: 'small',
                                                                onClick:
                                                                    this
                                                                        .handleEndStep,
                                                            },
                                                            {
                                                                default: () =>
                                                                    this
                                                                        .finishText,
                                                            }
                                                        )
                                                ),
                                        }
                                    )
                                )
                            )
                        ),
                }
            )
        );
    },
});
