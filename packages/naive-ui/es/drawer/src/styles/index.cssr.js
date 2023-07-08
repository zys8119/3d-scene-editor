import { c, cB, cE, cM } from '../../../_utils/cssr';
import { slideInFromRightTransition } from '../../../_styles/transitions/slide-in-from-right';
import { slideInFromLeftTransition } from '../../../_styles/transitions/slide-in-from-left';
import { slideInFromTopTransition } from '../../../_styles/transitions/slide-in-from-top';
import { slideInFromBottomTransition } from '../../../_styles/transitions/slide-in-from-bottom';
import { fadeInTransition } from '../../../_styles/transitions/fade-in.cssr';
export default c([
    cB(
        'drawer',
        `
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,
        [
            slideInFromRightTransition(),
            slideInFromLeftTransition(),
            slideInFromTopTransition(),
            slideInFromBottomTransition(),
            cM(
                'unselectable',
                `
 user-select: none; 
 -webkit-user-select: none;
 `
            ),
            cM('native-scrollbar', [
                cB(
                    'drawer-content-wrapper',
                    `
 overflow: auto;
 height: 100%;
 `
                ),
            ]),
            cE(
                'resize-trigger',
                `
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,
                [
                    cM(
                        'hover',
                        `
 background-color: var(--n-resize-trigger-color-hover);
 `
                    ),
                ]
            ),
            cB(
                'drawer-content-wrapper',
                `
 box-sizing: border-box;
 `
            ),
            cB(
                'drawer-content',
                `
 height: 100%;
 display: flex;
 flex-direction: column;
 `,
                [
                    cM('native-scrollbar', [
                        cB(
                            'drawer-body-content-wrapper',
                            `
 height: 100%;
 overflow: auto;
 `
                        ),
                    ]),
                    cB(
                        'drawer-body',
                        `
 flex: 1 0 0;
 overflow: hidden;
 `
                    ),
                    cB(
                        'drawer-body-content-wrapper',
                        `
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `
                    ),
                    cB(
                        'drawer-header',
                        `
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,
                        [
                            cE(
                                'close',
                                `
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `
                            ),
                        ]
                    ),
                    cB(
                        'drawer-footer',
                        `
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `
                    ),
                ]
            ),
            cM(
                'right-placement',
                `
 top: 0;
 bottom: 0;
 right: 0;
 `,
                [
                    cE(
                        'resize-trigger',
                        `
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `
                    ),
                ]
            ),
            cM(
                'left-placement',
                `
 top: 0;
 bottom: 0;
 left: 0;
 `,
                [
                    cE(
                        'resize-trigger',
                        `
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `
                    ),
                ]
            ),
            cM(
                'top-placement',
                `
 top: 0;
 left: 0;
 right: 0;
 `,
                [
                    cE(
                        'resize-trigger',
                        `
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `
                    ),
                ]
            ),
            cM(
                'bottom-placement',
                `
 left: 0;
 bottom: 0;
 right: 0;
 `,
                [
                    cE(
                        'resize-trigger',
                        `
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `
                    ),
                ]
            ),
        ]
    ),
    c('body', [
        c('>', [
            cB('drawer-container', {
                position: 'fixed',
            }),
        ]),
    ]),
    cB(
        'drawer-container',
        `
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,
        [
            c('> *', {
                pointerEvents: 'all',
            }),
        ]
    ),
    cB(
        'drawer-mask',
        `
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,
        [
            cM(
                'invisible',
                `
 background-color: rgba(0, 0, 0, 0)
 `
            ),
            fadeInTransition({
                enterDuration: '0.2s',
                leaveDuration: '0.2s',
                enterCubicBezier: 'var(--n-bezier-in)',
                leaveCubicBezier: 'var(--n-bezier-out)',
            }),
        ]
    ),
]);
