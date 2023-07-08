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
            right: percent,
            left: 'unset',
        }),
        (0, cssr_1.cM)(`${prefixIndex}-pull`, {
            left: percent,
            right: 'unset',
        }),
    ];
});
exports.default = (0, cssr_1.cB)('row', [
    (0, cssr_1.cM)(
        'rtl',
        `
 direction: rtl;
 `,
        [(0, cssr_1.cB)('col', positionStyles)]
    ),
]);
