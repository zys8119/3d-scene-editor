Object.defineProperty(exports, '__esModule', {
    value: true,
});
const cssr_1 = require('../../../../_utils/cssr');
exports.default = (0, cssr_1.c)([
    (0, cssr_1.cB)('scroll-list', {
        width: '100%',
        overflow: 'auto',
        position: 'relative',
        height: 'var(--n-height)',
    }),
    (0, cssr_1.cB)('scroll-list-hidden', {
        overflow: 'hidden !important',
    }),
    (0, cssr_1.cB)('scroll-list-cell', {
        transition: 'all var(--n-duration, 2s)',
        display: 'flow-root',
        width: '100%',
        paddingBottom: 'var(--n-space)',
        cursor: 'pointer',
    }),
    (0, cssr_1.cB)('scroll-list-cell.linear ', {
        transitionTimingFunction: 'linear',
    }),
    (0, cssr_1.cB)('scroll-flip-leave-to', {
        transform: 'translateY(-100%)',
    }),
    (0, cssr_1.cB)('scroll-flip-reverse-enter-from', {
        transform: 'translateY(-100%)',
    }),
    (0, cssr_1.cB)('scroll-flip-enter-from', {
        transform: 'translateY(-100%)',
    }),
    (0, cssr_1.cB)('scroll-flip-reverse-leave-to', {
        transform: 'translateY(-100%)',
    }),
    (0, cssr_1.cB)('scroll-flip-leave-active', {
        position: 'absolute',
    }),
    (0, cssr_1.cB)('scroll-flip-reverse-leave-active', {
        position: 'absolute',
    }),
    (0, cssr_1.cB)('scroll-fade-leave-to', {
        opacity: '.5',
        transition: '0s',
    }),
    (0, cssr_1.cB)('scroll-fade-enter-from', {
        opacity: '.5',
    }),
]);
