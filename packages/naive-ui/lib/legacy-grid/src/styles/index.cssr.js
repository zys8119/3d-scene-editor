Object.defineProperty(exports, '__esModule', {
    value: true,
});
const cssr_1 = require('../../../_utils/cssr');
const positionStyles = Array.apply(null, {
    length: 24,
}).map((_, index) => {
    const prefixIndex = index + 1;
    const percent = `calc(100% / 24 * ${prefixIndex})`;
    return [
        (0, cssr_1.cM)(`${prefixIndex}-span`, {
            width: percent,
        }),
        (0, cssr_1.cM)(`${prefixIndex}-offset`, {
            marginLeft: percent,
        }),
        (0, cssr_1.cM)(`${prefixIndex}-push`, {
            left: percent,
        }),
        (0, cssr_1.cM)(`${prefixIndex}-pull`, {
            right: percent,
        }),
    ];
});
exports.default = (0, cssr_1.c)([
    (0, cssr_1.cB)('row', {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
    }),
    (0, cssr_1.cB)(
        'col',
        {
            verticalAlign: 'top',
            boxSizing: 'border-box',
            display: 'inline-block',
            position: 'relative',
            zIndex: 'auto',
        },
        [
            (0, cssr_1.cE)('box', {
                position: 'relative',
                zIndex: 'auto',
                width: '100%',
                height: '100%',
            }),
            positionStyles,
        ]
    ),
]);
