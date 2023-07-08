Object.defineProperty(exports, '__esModule', { value: true });
const vue_1 = require('vue');
const _internal_1 = require('../../_internal');
const icons_1 = require('../../_internal/icons');
const iconMap = {
    success: (0, vue_1.h)(icons_1.SuccessIcon, null),
    error: (0, vue_1.h)(icons_1.ErrorIcon, null),
    warning: (0, vue_1.h)(icons_1.WarningIcon, null),
    info: (0, vue_1.h)(icons_1.InfoIcon, null),
};
exports.default = (0, vue_1.defineComponent)({
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
            return (0, vue_1.h)(
                'div',
                { class: `${clsPrefix}-progress-content`, role: 'none' },
                (0, vue_1.h)(
                    'div',
                    {
                        class: `${clsPrefix}-progress-graph`,
                        'aria-hidden': true,
                    },
                    (0, vue_1.h)(
                        'div',
                        {
                            class: `${clsPrefix}-progress-graph-circle`,
                            style: {
                                transform: gapOffsetDegree
                                    ? `rotate(${gapOffsetDegree}deg)`
                                    : void 0,
                            },
                        },
                        (0, vue_1.h)(
                            'svg',
                            { viewBox: `0 0 ${viewBoxSize} ${viewBoxSize}` },
                            (0, vue_1.h)(
                                'g',
                                null,
                                (0, vue_1.h)('path', {
                                    class: `${clsPrefix}-progress-graph-circle-rail`,
                                    d: railPathString,
                                    'stroke-width': strokeWidth,
                                    'stroke-linecap': 'round',
                                    fill: 'none',
                                    style: railPathStyle,
                                })
                            ),
                            (0, vue_1.h)(
                                'g',
                                null,
                                (0, vue_1.h)('path', {
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
                    ? (0, vue_1.h)(
                          'div',
                          null,
                          slots.default
                              ? (0, vue_1.h)(
                                    'div',
                                    {
                                        class: `${clsPrefix}-progress-custom-content`,
                                        role: 'none',
                                    },
                                    slots.default()
                                )
                              : status !== 'default'
                              ? (0, vue_1.h)(
                                    'div',
                                    {
                                        class: `${clsPrefix}-progress-icon`,
                                        'aria-hidden': true,
                                    },
                                    (0, vue_1.h)(
                                        _internal_1.NBaseIcon,
                                        { clsPrefix },
                                        {
                                            default: () => iconMap[status],
                                        }
                                    )
                                )
                              : (0, vue_1.h)(
                                    'div',
                                    {
                                        class: `${clsPrefix}-progress-text`,
                                        style: {
                                            color: indicatorTextColor,
                                        },
                                        role: 'none',
                                    },
                                    (0, vue_1.h)(
                                        'span',
                                        {
                                            class: `${clsPrefix}-progress-text__percentage`,
                                        },
                                        percentage
                                    ),
                                    (0, vue_1.h)(
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
