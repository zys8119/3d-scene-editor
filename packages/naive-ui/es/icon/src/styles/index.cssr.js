import { c, cB, cM } from '../../../_utils/cssr';
export default cB(
    'icon',
    `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,
    [
        cM('color-transition', {
            transition: 'color .3s var(--n-bezier)',
        }),
        cM(
            'depth',
            {
                color: 'var(--n-color)',
            },
            [
                c('svg', {
                    opacity: 'var(--n-opacity)',
                    transition: 'opacity .3s var(--n-bezier)',
                }),
            ]
        ),
        c('svg', {
            height: '1em',
            width: '1em',
        }),
    ]
);
