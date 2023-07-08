Object.defineProperty(exports, '__esModule', {
    value: true,
});
const cssr_1 = require('../../../../_utils/cssr');
exports.default = (0, cssr_1.c)([
    (0, cssr_1.c)(
        '@keyframes rotate-album',
        `
 0% {
 offset-distance: 0%;
 z-index: 1;
 }
 50% {
 offset-distance: 50%;
 }
 100% {
 offset-distance: 100%;
 }
 `
    ),
    (0, cssr_1.cB)(
        'rotate-album',
        `
 width: 100%;
 height: 100%;
 box-sizing: border-box;
 pointer-events: none;
 position: relative;
 `
    ),
    (0, cssr_1.cB)('rotate-album--hover-to-stop', [
        (0, cssr_1.c)('&:hover', [
            (0, cssr_1.cB)(
                'rotate-album-cell',
                `
 animation-play-state: paused;
 cursor: pointer
 `
            ),
        ]),
    ]),
    (0, cssr_1.cB)('rotate-album-path', [
        `
 position: absolute;
 `,
    ]),
    (0, cssr_1.cB)(
        'rotate-album-cell',
        `
 position: absolute;
 animation: rotate-album var(--n-rotate-album-duration) linear infinite;
 offset-rotate: 0deg;
 offset-path: var(--n-rotate-album-offset-path);
 pointer-events: all;
 `
    ),
    (0, cssr_1.c)(
        '@keyframes rotate-album-3d',
        `
 from{
 transform: rotateX(var(--n-rotate-album-3d-x-deg, -5deg)) rotateY(0deg);
 }
 to{
 transform: rotateX(var(--n-rotate-album-3d-x-deg, -5deg)) rotateY(360deg);
 }
 `
    ),
    (0, cssr_1.cB)(
        'rotate-album-3d',
        `
 width: 100%;
 height: 100%;
 transform-style: preserve-3d;
 animation: rotate-album-3d var(--n-rotate-album-3d-duration) linear infinite;
 position: relative;
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: default;
 `
    ),
    (0, cssr_1.cB)('rotate-album-3d--hover-to-stop', [
        (0, cssr_1.c)(
            '&:hover',
            `
 animation-play-state: paused;
 `
        ),
    ]),
    (0, cssr_1.cB)(
        'rotate-album-3d-cell',
        `
 position: absolute;
 `
    ),
]);
