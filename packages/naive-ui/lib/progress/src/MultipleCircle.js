Object.defineProperty(exports, '__esModule', { value: true });
const vue_1 = require('vue');
function circlePath(r, sw, vw = 100) {
    return `m ${vw / 2} ${vw / 2 - r} a ${r} ${r} 0 1 1 0 ${
        2 * r
    } a ${r} ${r} 0 1 1 0 -${2 * r}`;
}
exports.default = (0, vue_1.defineComponent)({
    name: 'ProgressMultipleCircle',
    props: {
        clsPrefix: {
            type: String,
            required: true,
        },
        viewBoxWidth: {
            type: Number,
            required: true,
        },
        percentage: {
            type: Array,
            default: [0],
        },
        strokeWidth: {
            type: Number,
            required: true,
        },
        circleGap: {
            type: Number,
            required: true,
        },
        showIndicator: {
            type: Boolean,
            required: true,
        },
        fillColor: {
            type: Array,
            default: () => [],
        },
        railColor: {
            type: Array,
            default: () => [],
        },
        railStyle: {
            type: Array,
            default: () => [],
        },
    },
    setup(props, { slots }) {
        const strokeDasharrayRef = (0, vue_1.computed)(() => {
            const strokeDasharrays = props.percentage.map(
                (v, i) =>
                    `${
                        ((Math.PI * v) / 100) *
                        (props.viewBoxWidth / 2 -
                            (props.strokeWidth / 2) * (1 + 2 * i) -
                            props.circleGap * i) *
                        2
                    }, ${props.viewBoxWidth * 8}`
            );
            return strokeDasharrays;
        });
        return () => {
            const {
                viewBoxWidth,
                strokeWidth,
                circleGap,
                showIndicator,
                fillColor,
                railColor,
                railStyle,
                percentage,
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
                        { class: `${clsPrefix}-progress-graph-circle` },
                        (0, vue_1.h)(
                            'svg',
                            { viewBox: `0 0 ${viewBoxWidth} ${viewBoxWidth}` },
                            percentage.map((p, index) => {
                                return (0, vue_1.h)(
                                    'g',
                                    { key: index },
                                    (0, vue_1.h)('path', {
                                        class: `${clsPrefix}-progress-graph-circle-rail`,
                                        d: circlePath(
                                            viewBoxWidth / 2 -
                                                (strokeWidth / 2) *
                                                    (1 + 2 * index) -
                                                circleGap * index,
                                            strokeWidth,
                                            viewBoxWidth
                                        ),
                                        'stroke-width': strokeWidth,
                                        'stroke-linecap': 'round',
                                        fill: 'none',
                                        style: [
                                            {
                                                strokeDashoffset: 0,
                                                stroke: railColor[index],
                                            },
                                            railStyle[index],
                                        ],
                                    }),
                                    (0, vue_1.h)('path', {
                                        class: [
                                            `${clsPrefix}-progress-graph-circle-fill`,
                                            p === 0 &&
                                                `${clsPrefix}-progress-graph-circle-fill--empty`,
                                        ],
                                        d: circlePath(
                                            viewBoxWidth / 2 -
                                                (strokeWidth / 2) *
                                                    (1 + 2 * index) -
                                                circleGap * index,
                                            strokeWidth,
                                            viewBoxWidth
                                        ),
                                        'stroke-width': strokeWidth,
                                        'stroke-linecap': 'round',
                                        fill: 'none',
                                        style: {
                                            strokeDasharray:
                                                strokeDasharrayRef.value[index],
                                            strokeDashoffset: 0,
                                            stroke: fillColor[index],
                                        },
                                    })
                                );
                            })
                        )
                    )
                ),
                showIndicator && slots.default
                    ? (0, vue_1.h)(
                          'div',
                          null,
                          (0, vue_1.h)(
                              'div',
                              { class: `${clsPrefix}-progress-text` },
                              slots.default()
                          )
                      )
                    : null
            );
        };
    },
});
