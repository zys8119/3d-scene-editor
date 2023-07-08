import { computed, defineComponent, Transition, Fragment } from 'vue';
import { useConfig, useTheme } from '../../../_mixins';
import style from './styles/index.cssr';
import { tourLight } from '../styles';
import { NButton } from '../../../button';
import { NSpace } from '../../../space';
import { NPopover } from '../../../popover';
import { tourInjectionKey } from './interface';
import { useIsMounted } from 'vooks';
import { call } from '../../../_utils';
import NTourDots from './TourDots';
import { NBaseClose } from '../../../_internal';
import { NText } from 'naive-ui';
import { ref, provide, toRef, watchEffect, h } from 'vue';
export const tourProps = Object.assign(Object.assign({}, useTheme.props), {
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
export default defineComponent({
    name: 'Tour',
    props: tourProps,
    setup(props, { slots, expose }) {
        const { mergedClsPrefixRef } = useConfig(props);
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
        const themeRef = useTheme(
            'Tour',
            '-tour',
            style,
            tourLight,
            props,
            mergedClsPrefixRef
        );
        const isMountedRef = useIsMounted();
        provide(tourInjectionKey, {
            getMousePosition: () => {
                return null;
            },
            mergedClsPrefixRef,
            mergedThemeRef: themeRef,
            isMountedRef,
            appearRef: toRef(props, 'internalAppear'),
            transformOriginRef: toRef(props, 'transformOrigin'),
        });
        const cssVarsRef = computed(() => {
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
            if (onUpdateShow) call(onUpdateShow, show);
            if (_onUpdateShow) call(_onUpdateShow, show);
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
                Transition,
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
                NPopover,
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
                                ? h(NBaseClose, {
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
                                        ? h(NTourDots, {
                                              key: step.title,
                                              total: totalStep,
                                              currentIndex: currentStep,
                                          })
                                        : h(NText, null, {
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
                                        NSpace,
                                        { justify: 'center' },
                                        {
                                            default: () =>
                                                h(
                                                    Fragment,
                                                    null,
                                                    currentStep > 0 &&
                                                        h(
                                                            NButton,
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
                                                            NButton,
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
                                                            NButton,
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
