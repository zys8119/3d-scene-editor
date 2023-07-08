import { h, computed, defineComponent } from 'vue';
import { useConfig, useTheme, useThemeClass } from '../../_mixins';
import { createKey } from '../../_utils';
import { progressLight } from '../styles';
import style from './styles/index.cssr';
import Line from './Line';
import Circle from './Circle';
import MultipleCircle from './MultipleCircle';
export const progressProps = Object.assign(Object.assign({}, useTheme.props), {
    processing: Boolean,
    type: {
        type: String,
        default: 'line',
    },
    gapDegree: Number,
    gapOffsetDegree: Number,
    status: {
        type: String,
        default: 'default',
    },
    railColor: [String, Array],
    railStyle: [String, Array],
    color: [String, Array],
    viewBoxWidth: {
        type: Number,
        default: 100,
    },
    strokeWidth: {
        type: Number,
        default: 7,
    },
    percentage: [Number, Array],
    unit: {
        type: String,
        default: '%',
    },
    showIndicator: {
        type: Boolean,
        default: true,
    },
    indicatorPosition: {
        type: String,
        default: 'outside',
    },
    indicatorPlacement: {
        type: String,
        default: 'outside',
    },
    indicatorTextColor: String,
    circleGap: {
        type: Number,
        default: 1,
    },
    height: Number,
    borderRadius: [String, Number],
    fillBorderRadius: [String, Number],
    offsetDegree: Number,
});
export default defineComponent({
    name: 'Progress',
    props: progressProps,
    setup(props) {
        const mergedIndicatorPlacementRef = computed(() => {
            return props.indicatorPlacement || props.indicatorPosition;
        });
        const gapDeg = computed(() => {
            if (props.gapDegree || props.gapDegree === 0) {
                return props.gapDegree;
            }
            if (props.type === 'dashboard') {
                return 75;
            }
            return void 0;
        });
        const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
        const themeRef = useTheme(
            'Progress',
            '-progress',
            style,
            progressLight,
            props,
            mergedClsPrefixRef
        );
        const cssVarsRef = computed(() => {
            const { status } = props;
            const {
                common: { cubicBezierEaseInOut },
                self: {
                    fontSize,
                    fontSizeCircle,
                    railColor,
                    railHeight,
                    iconSizeCircle,
                    iconSizeLine,
                    textColorCircle,
                    textColorLineInner,
                    textColorLineOuter,
                    lineBgProcessing,
                    fontWeightCircle,
                    [createKey('iconColor', status)]: iconColor,
                    [createKey('fillColor', status)]: fillColor,
                },
            } = themeRef.value;
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-fill-color': fillColor,
                '--n-font-size': fontSize,
                '--n-font-size-circle': fontSizeCircle,
                '--n-font-weight-circle': fontWeightCircle,
                '--n-icon-color': iconColor,
                '--n-icon-size-circle': iconSizeCircle,
                '--n-icon-size-line': iconSizeLine,
                '--n-line-bg-processing': lineBgProcessing,
                '--n-rail-color': railColor,
                '--n-rail-height': railHeight,
                '--n-text-color-circle': textColorCircle,
                '--n-text-color-line-inner': textColorLineInner,
                '--n-text-color-line-outer': textColorLineOuter,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass(
                  'progress',
                  computed(() => props.status[0]),
                  cssVarsRef,
                  props
              )
            : void 0;
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            mergedIndicatorPlacement: mergedIndicatorPlacementRef,
            gapDeg,
            cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
            themeClass:
                themeClassHandle === null || themeClassHandle === void 0
                    ? void 0
                    : themeClassHandle.themeClass,
            onRender:
                themeClassHandle === null || themeClassHandle === void 0
                    ? void 0
                    : themeClassHandle.onRender,
        };
    },
    render() {
        const {
            type,
            cssVars,
            indicatorTextColor,
            showIndicator,
            status,
            railColor,
            railStyle,
            color,
            percentage,
            viewBoxWidth,
            strokeWidth,
            mergedIndicatorPlacement,
            unit,
            borderRadius,
            fillBorderRadius,
            height,
            processing,
            circleGap,
            mergedClsPrefix,
            gapDeg,
            gapOffsetDegree,
            themeClass,
            $slots,
            onRender,
        } = this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        return h(
            'div',
            {
                class: [
                    themeClass,
                    `${mergedClsPrefix}-progress`,
                    `${mergedClsPrefix}-progress--${type}`,
                    `${mergedClsPrefix}-progress--${status}`,
                ],
                style: cssVars,
                'aria-valuemax': 100,
                'aria-valuemin': 0,
                'aria-valuenow': percentage,
                role:
                    type === 'circle' || type === 'line' || type === 'dashboard'
                        ? 'progressbar'
                        : 'none',
            },
            type === 'circle' || type === 'dashboard'
                ? h(
                      Circle,
                      {
                          clsPrefix: mergedClsPrefix,
                          status,
                          showIndicator,
                          indicatorTextColor,
                          railColor,
                          fillColor: color,
                          railStyle,
                          offsetDegree: this.offsetDegree,
                          percentage,
                          viewBoxWidth,
                          strokeWidth,
                          gapDegree:
                              gapDeg === void 0
                                  ? type === 'dashboard'
                                      ? 75
                                      : 0
                                  : gapDeg,
                          gapOffsetDegree,
                          unit,
                      },
                      $slots
                  )
                : type === 'line'
                ? h(
                      Line,
                      {
                          clsPrefix: mergedClsPrefix,
                          status,
                          showIndicator,
                          indicatorTextColor,
                          railColor,
                          fillColor: color,
                          railStyle,
                          percentage,
                          processing,
                          indicatorPlacement: mergedIndicatorPlacement,
                          unit,
                          fillBorderRadius,
                          railBorderRadius: borderRadius,
                          height,
                      },
                      $slots
                  )
                : type === 'multiple-circle'
                ? h(
                      MultipleCircle,
                      {
                          clsPrefix: mergedClsPrefix,
                          strokeWidth,
                          railColor,
                          fillColor: color,
                          railStyle,
                          viewBoxWidth,
                          percentage,
                          showIndicator,
                          circleGap,
                      },
                      $slots
                  )
                : null
        );
    },
});
