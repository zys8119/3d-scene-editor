import { c, cB, cM, cE } from '../../../../_utils/cssr';
import { fadeInTransition } from '../../../../_styles/transitions/fade-in.cssr';
export default c([
    cB(
        'tour',
        `
 position: relative;
 `
    ),
    cB(
        'tour-mask',
        `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 z-index: 1;
 `,
        [
            fadeInTransition({
                enterDuration: '.25s',
                leaveDuration: '.25s',
                enterCubicBezier: 'var(--n-tour-bezier-in)',
                leaveCubicBezier: 'var(--n-tour-bezier-out)',
            }),
        ]
    ),
    cB(
        'tour-mask-hide',
        `
 background-color: transparent;
 `
    ),
    cB(
        'tour-box',
        `
 position: fixed;
 display: block;
 z-index: 10000;
 background-color: var(--n-tour-dot-box-color);
 `
    ),
    cB(
        'tour-box-none',
        `
 display: none;
 `
    ),
    cB(
        'tour-pop',
        `
 min-width: 200px;
 display: flex;
 flex-direction: column;
 `,
        [
            cE(
                'close',
                `
 position: absolute;
 right: 10px;
 `
            ),
        ]
    ),
    cB(
        'tour-inner',
        `
 font-size: 14px;
 flex: 1;
 display: flex;
 flex-direction: column;
 padding: 0 0 15px 0;
 `
    ),
    cB(
        'tour-inner-title',
        `
 line-height: 1.5;
 font-size: 16px;
 font-weight: 800;
 margin-right: 20px;
 `
    ),
    cB(
        'tour-inner-description',
        `
 padding: 5px 0;
 line-height: 1.5;
 word-wrap: break-word;
 `
    ),
    cB(
        'tour-footer',
        `
 display: flex;
 justify-content: space-between;
 align-items: center;
 `
    ),
    cB(
        'tour-footer-step',
        `
 margin-right: 40px;
 `
    ),
    cB(
        'tour-dots',
        `
 display: flex;
 flex-wrap: nowrap;
 `
    ),
    cB(
        'tour-dot',
        `
 height: 8px;
 width: 8px;
 margin: 0 2px;
 background-color: var(--n-tour-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-tour-bezier),
 background-color .3s var(--n-tour-bezier);
 outline: none;
 `,
        [
            c(
                '&:focus',
                `
 background-color: var(--n-tour-dot-color-focus);
 `
            ),
            cM(
                'active',
                `
 background-color: var(--n-tour-dot-color-active);
 `
            ),
        ]
    ),
]);
