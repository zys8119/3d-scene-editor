import { cB, c } from '../../../../_utils/cssr';
export default c([
    cB('scroll-list', {
        width: '100%',
        overflow: 'auto',
        position: 'relative',
        height: 'var(--n-height)',
    }),
    cB('scroll-list-hidden', {
        overflow: 'hidden !important',
    }),
    cB('scroll-list-cell', {
        transition: 'all var(--n-duration, 2s)',
        display: 'flow-root',
        width: '100%',
        paddingBottom: 'var(--n-space)',
        cursor: 'pointer',
    }),
    cB('scroll-list-cell.linear ', {
        transitionTimingFunction: 'linear',
    }),
    cB('scroll-flip-leave-to', {
        transform: 'translateY(-100%)',
    }),
    cB('scroll-flip-reverse-enter-from', {
        transform: 'translateY(-100%)',
    }),
    cB('scroll-flip-enter-from', {
        transform: 'translateY(-100%)',
    }),
    cB('scroll-flip-reverse-leave-to', {
        transform: 'translateY(-100%)',
    }),
    cB('scroll-flip-leave-active', {
        position: 'absolute',
    }),
    cB('scroll-flip-reverse-leave-active', {
        position: 'absolute',
    }),
    cB('scroll-fade-leave-to', {
        opacity: '.5',
        transition: '0s',
    }),
    cB('scroll-fade-enter-from', {
        opacity: '.5',
    }),
]);
