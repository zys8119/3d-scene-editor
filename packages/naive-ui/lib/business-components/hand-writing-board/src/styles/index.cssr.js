Object.defineProperty(exports, '__esModule', {
    value: true,
});
const cssr_1 = require('../../../../_utils/cssr');
exports.default = (0, cssr_1.c)([
    (0, cssr_1.cB)(
        'hand-writing-board',
        `
 background: var(--n-background-color);
 border: 1px dashed var(--n-border-color);
 position: relative;
 border-radius: 5px;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-flow: column;
 `,
        [
            (0, cssr_1.c)(
                'canvas',
                `
 z-index: 1;
 display: block;
 touch-action: manipulation;
 `
            ),
            (0, cssr_1.cB)(
                'hand-writing-board-word-tip',
                `
 position: absolute;
 left: 0;
 top: 0;
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 40px;
 color: var(--n-border-color);
 z-index: 0;
 `
            ),
        ]
    ),
]);
