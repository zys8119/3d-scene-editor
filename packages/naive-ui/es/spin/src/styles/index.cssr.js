import { c, cM, cB } from '../../../_utils/cssr';
import { fadeInTransition } from '../../../_styles/transitions/fade-in.cssr';
export default c([
    c(
        '@keyframes spin-rotate',
        `
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `
    ),
    cB(
        'spin-container',
        {
            position: 'relative',
            background: 'var(--n-mask-color)',
        },
        [
            cB(
                'spin-body',
                `
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,
                [fadeInTransition()]
            ),
        ]
    ),
    cB('spin-fullscreen', {
        width: '100%',
        height: '100%',
        zIndex: '10000',
        display: 'inline-block',
        position: 'fixed',
        left: 0,
        top: 0,
    }),
    cB(
        'spin-body',
        `
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `
    ),
    cB(
        'spin',
        `
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,
        [
            cM(
                'rotate',
                `
 animation: spin-rotate 2s linear infinite;
 `
            ),
        ]
    ),
    cB(
        'spin-description',
        `
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `
    ),
    cB(
        'spin-content',
        `
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,
        [
            cM(
                'spinning',
                `
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity:var(--n-mask-opacity);
 `
            ),
        ]
    ),
]);
