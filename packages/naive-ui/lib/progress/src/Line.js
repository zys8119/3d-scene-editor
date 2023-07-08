Object.defineProperty(exports, '__esModule', { value: true });
const vue_1 = require('vue');
const _utils_1 = require('../../_utils');
const _internal_1 = require('../../_internal');
const icons_1 = require('../../_internal/icons');
const iconMap = {
    success: (0, vue_1.h)(icons_1.SuccessIcon, null),
    error: (0, vue_1.h)(icons_1.ErrorIcon, null),
    warning: (0, vue_1.h)(icons_1.WarningIcon, null),
    info: (0, vue_1.h)(icons_1.InfoIcon, null),
};
exports.default = (0, vue_1.defineComponent)({
    name: 'ProgressLine',
    props: {
        clsPrefix: {
            type: String,
            required: true,
        },
        percentage: {
            type: Number,
            default: 0,
        },
        railColor: String,
        railStyle: [String, Object],
        fillColor: [String, Array],
        status: {
            type: String,
            required: true,
        },
        indicatorPlacement: {
            type: String,
            required: true,
        },
        indicatorTextColor: String,
        unit: {
            type: String,
            default: '%',
        },
        processing: {
            type: Boolean,
            required: true,
        },
        showIndicator: {
            type: Boolean,
            required: true,
        },
        height: [String, Number],
        railBorderRadius: [String, Number],
        fillBorderRadius: [String, Number],
    },
    setup(props, { slots }) {
        const styleHeightRef = (0, vue_1.computed)(() => {
            return (0, _utils_1.formatLength)(props.height);
        });
        const styleRailBorderRadiusRef = (0, vue_1.computed)(() => {
            if (props.railBorderRadius !== void 0) {
                return (0, _utils_1.formatLength)(props.railBorderRadius);
            }
            if (props.height !== void 0) {
                return (0, _utils_1.formatLength)(props.height, { c: 0.5 });
            }
            return '';
        });
        const styleFillBorderRadiusRef = (0, vue_1.computed)(() => {
            if (props.fillBorderRadius !== void 0) {
                return (0, _utils_1.formatLength)(props.fillBorderRadius);
            }
            if (props.railBorderRadius !== void 0) {
                return (0, _utils_1.formatLength)(props.railBorderRadius);
            }
            if (props.height !== void 0) {
                return (0, _utils_1.formatLength)(props.height, { c: 0.5 });
            }
            return '';
        });
        const styleFillColorRef = (0, vue_1.computed)(() => {
            const color = props.fillColor;
            if (Array.isArray(color)) {
                return `linear-gradient(90deg, ${color[0]} 0%, ${color[1]} 100%)`;
            } else {
                return color;
            }
        });
        return () => {
            const {
                indicatorPlacement,
                railColor,
                railStyle,
                percentage,
                unit,
                indicatorTextColor,
                status,
                showIndicator,
                processing,
                clsPrefix,
            } = props;
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
                            class: [
                                `${clsPrefix}-progress-graph-line`,
                                {
                                    [`${clsPrefix}-progress-graph-line--indicator-${indicatorPlacement}`]: true,
                                },
                            ],
                        },
                        (0, vue_1.h)(
                            'div',
                            {
                                class: `${clsPrefix}-progress-graph-line-rail`,
                                style: [
                                    {
                                        backgroundColor: railColor,
                                        height: styleHeightRef.value,
                                        borderRadius:
                                            styleRailBorderRadiusRef.value,
                                    },
                                    railStyle,
                                ],
                            },
                            (0, vue_1.h)(
                                'div',
                                {
                                    class: [
                                        `${clsPrefix}-progress-graph-line-fill`,
                                        processing &&
                                            `${clsPrefix}-progress-graph-line-fill--processing`,
                                    ],
                                    style: {
                                        maxWidth: `${props.percentage}%`,
                                        background: styleFillColorRef.value,
                                        height: styleHeightRef.value,
                                        lineHeight: styleHeightRef.value,
                                        borderRadius:
                                            styleFillBorderRadiusRef.value,
                                    },
                                },
                                indicatorPlacement === 'inside'
                                    ? (0, vue_1.h)(
                                          'div',
                                          {
                                              class: `${clsPrefix}-progress-graph-line-indicator`,
                                              style: {
                                                  color: indicatorTextColor,
                                              },
                                          },
                                          percentage,
                                          unit
                                      )
                                    : null
                            )
                        )
                    )
                ),
                showIndicator && indicatorPlacement === 'outside'
                    ? (0, vue_1.h)(
                          'div',
                          null,
                          slots.default
                              ? (0, vue_1.h)(
                                    'div',
                                    {
                                        class: `${clsPrefix}-progress-custom-content`,
                                        style: {
                                            color: indicatorTextColor,
                                        },
                                        role: 'none',
                                    },
                                    slots.default()
                                )
                              : status === 'default'
                              ? (0, vue_1.h)(
                                    'div',
                                    {
                                        role: 'none',
                                        class: `${clsPrefix}-progress-icon ${clsPrefix}-progress-icon--as-text`,
                                        style: {
                                            color: indicatorTextColor,
                                        },
                                    },
                                    percentage,
                                    unit
                                )
                              : (0, vue_1.h)(
                                    'div',
                                    {
                                        class: `${clsPrefix}-progress-icon`,
                                        'aria-hidden': true,
                                    },
                                    (0, vue_1.h)(
                                        _internal_1.NBaseIcon,
                                        { clsPrefix },
                                        { default: () => iconMap[status] }
                                    )
                                )
                      )
                    : null
            );
        };
    },
});
