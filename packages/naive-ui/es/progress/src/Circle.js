import { h, defineComponent } from 'vue';
import { NBaseIcon } from '../../_internal';
import {
    SuccessIcon,
    ErrorIcon,
    WarningIcon,
    InfoIcon,
} from '../../_internal/icons';
const iconMap = {
    success: h(SuccessIcon, null),
    error: h(ErrorIcon, null),
    warning: h(WarningIcon, null),
    info: h(InfoIcon, null),
};
export default defineComponent({
    name: 'ProgressCircle',
    props: {
        clsPrefix: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        strokeWidth: {
            type: Number,
            required: true,
        },
        fillColor: String,
        railColor: String,
        railStyle: [String, Object],
        percentage: {
            type: Number,
            default: 0,
        },
        offsetDegree: {
            type: Number,
            default: 0,
        },
        showIndicator: {
            type: Boolean,
            required: true,
        },
        indicatorTextColor: String,
        unit: String,
        viewBoxWidth: {
            type: Number,
            required: true,
        },
        gapDegree: {
            type: Number,
            required: true,
        },
        gapOffsetDegree: {
            type: Number,
            default: 0,
        },
    },
    setup(props, { slots }) {
        function getPathStyles(percent, offsetDegree, strokeColor) {
            const { gapDegree, viewBoxWidth, strokeWidth } = props;
            const radius = 50;
            const beginPositionX = 0;
            const beginPositionY = radius;
            const endPositionX = 0;
            const endPositionY = 2 * radius;
            const centerX = 50 + strokeWidth / 2;
            const pathString = `M ${centerX},${centerX} m ${beginPositionX},${beginPositionY}
      a ${radius},${radius} 0 1 1 ${endPositionX},${-endPositionY}
      a ${radius},${radius} 0 1 1 ${-endPositionX},${endPositionY}`;
            const len = Math.PI * 2 * radius;
            const pathStyle = {
                stroke: strokeColor,
                strokeDasharray: `${(percent / 100) * (len - gapDegree)}px ${
                    viewBoxWidth * 8
                }px`,
                strokeDashoffset: `-${gapDegree / 2}px`,
                transformOrigin: offsetDegree ? 'center' : void 0,
                transform: offsetDegree ? `rotate(${offsetDegree}deg)` : void 0,
            };
            return {
                pathString,
                pathStyle,
            };
        }
        return () => {
            const {
                fillColor,
                railColor,
                strokeWidth,
                offsetDegree,
                status,
                percentage,
                showIndicator,
                indicatorTextColor,
                unit,
                gapOffsetDegree,
                clsPrefix,
            } = props;
            const { pathString: railPathString, pathStyle: railPathStyle } =
                getPathStyles(100, 0, railColor);
            const { pathString: fillPathString, pathStyle: fillPathStyle } =
                getPathStyles(percentage, offsetDegree, fillColor);
            const viewBoxSize = 100 + strokeWidth;
            return h(
                'div',
                { class: `${clsPrefix}-progress-content`, role: 'none' },
                h(
                    'div',
                    {
                        class: `${clsPrefix}-progress-graph`,
                        'aria-hidden': true,
                    },
                    h(
                        'div',
                        {
                            class: `${clsPrefix}-progress-graph-circle`,
                            style: {
                                transform: gapOffsetDegree
                                    ? `rotate(${gapOffsetDegree}deg)`
                                    : void 0,
                            },
                        },
                        h(
                            'svg',
                            { viewBox: `0 0 ${viewBoxSize} ${viewBoxSize}` },
                            h(
                                'g',
                                null,
                                h('path', {
                                    class: `${clsPrefix}-progress-graph-circle-rail`,
                                    d: railPathString,
                                    'stroke-width': strokeWidth,
                                    'stroke-linecap': 'round',
                                    fill: 'none',
                                    style: railPathStyle,
                                })
                            ),
                            h(
                                'g',
                                null,
                                h('path', {
                                    class: [
                                        `${clsPrefix}-progress-graph-circle-fill`,
                                        percentage === 0 &&
                                            `${clsPrefix}-progress-graph-circle-fill--empty`,
                                    ],
                                    d: fillPathString,
                                    'stroke-width': strokeWidth,
                                    'stroke-linecap': 'round',
                                    fill: 'none',
                                    style: fillPathStyle,
                                })
                            )
                        )
                    )
                ),
                showIndicator
                    ? h(
                          'div',
                          null,
                          slots.default
                              ? h(
                                    'div',
                                    {
                                        class: `${clsPrefix}-progress-custom-content`,
                                        role: 'none',
                                    },
                                    slots.default()
                                )
                              : status !== 'default'
                              ? h(
                                    'div',
                                    {
                                        class: `${clsPrefix}-progress-icon`,
                                        'aria-hidden': true,
                                    },
                                    h(
                                        NBaseIcon,
                                        { clsPrefix },
                                        {
                                            default: () => iconMap[status],
                                        }
                                    )
                                )
                              : h(
                                    'div',
                                    {
                                        class: `${clsPrefix}-progress-text`,
                                        style: {
                                            color: indicatorTextColor,
                                        },
                                        role: 'none',
                                    },
                                    h(
                                        'span',
                                        {
                                            class: `${clsPrefix}-progress-text__percentage`,
                                        },
                                        percentage
                                    ),
                                    h(
                                        'span',
                                        {
                                            class: `${clsPrefix}-progress-text__unit`,
                                        },
                                        unit
                                    )
                                )
                      )
                    : null
            );
        };
    },
});
