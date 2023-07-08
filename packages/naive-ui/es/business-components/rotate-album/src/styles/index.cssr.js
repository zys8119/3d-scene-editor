import { c, cB } from '../../../../_utils/cssr';
export default c([
    c(
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
    cB(
        'rotate-album',
        `
 width: 100%;
 height: 100%;
 box-sizing: border-box;
 pointer-events: none;
 position: relative;
 `
    ),
    cB('rotate-album--hover-to-stop', [
        c('&:hover', [
            cB(
                'rotate-album-cell',
                `
 animation-play-state: paused;
 cursor: pointer
 `
            ),
        ]),
    ]),
    cB('rotate-album-path', [
        `
 position: absolute;
 `,
    ]),
    cB(
        'rotate-album-cell',
        `
 position: absolute;
 animation: rotate-album var(--n-rotate-album-duration) linear infinite;
 offset-rotate: 0deg;
 offset-path: var(--n-rotate-album-offset-path);
 pointer-events: all;
 `
    ),
    c(
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
    cB(
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
    cB('rotate-album-3d--hover-to-stop', [
        c(
            '&:hover',
            `
 animation-play-state: paused;
 `
        ),
    ]),
    cB(
        'rotate-album-3d-cell',
        `
 position: absolute;
 `
    ),
]);
