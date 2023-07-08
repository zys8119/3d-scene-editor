Object.defineProperty(exports, '__esModule', {
    value: true,
});
const cssr_1 = require('../../../_utils/cssr');
exports.default = (0, cssr_1.c)([
    (0, cssr_1.cB)(
        'code',
        `
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,
        [
            (0, cssr_1.cM)(
                'show-line-numbers',
                `
 display: flex;
 `
            ),
            (0, cssr_1.cE)(
                'line-numbers',
                `
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `
            ),
            (0, cssr_1.cM)('word-wrap', [
                (0, cssr_1.c)(
                    'pre',
                    `
 white-space: pre-wrap;
 word-break: break-all;
 `
                ),
            ]),
            (0, cssr_1.c)(
                'pre',
                `
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `
            ),
            (0, cssr_1.c)(
                '[class^=hljs]',
                `
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `
            ),
        ]
    ),
    ({ props }) => {
        const codeClass = `${props.bPrefix}code`;
        return [
            `${codeClass} .hljs-comment,
 ${codeClass} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,
            `${codeClass} .hljs-doctag,
 ${codeClass} .hljs-keyword,
 ${codeClass} .hljs-formula {
 color: var(--n-hue-3);
 }`,
            `${codeClass} .hljs-section,
 ${codeClass} .hljs-name,
 ${codeClass} .hljs-selector-tag,
 ${codeClass} .hljs-deletion,
 ${codeClass} .hljs-subst {
 color: var(--n-hue-5);
 }`,
            `${codeClass} .hljs-literal {
 color: var(--n-hue-1);
 }`,
            `${codeClass} .hljs-string,
 ${codeClass} .hljs-regexp,
 ${codeClass} .hljs-addition,
 ${codeClass} .hljs-attribute,
 ${codeClass} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,
            `${codeClass} .hljs-built_in,
 ${codeClass} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,
            `${codeClass} .hljs-attr,
 ${codeClass} .hljs-variable,
 ${codeClass} .hljs-template-variable,
 ${codeClass} .hljs-type,
 ${codeClass} .hljs-selector-class,
 ${codeClass} .hljs-selector-attr,
 ${codeClass} .hljs-selector-pseudo,
 ${codeClass} .hljs-number {
 color: var(--n-hue-6);
 }`,
            `${codeClass} .hljs-symbol,
 ${codeClass} .hljs-bullet,
 ${codeClass} .hljs-link,
 ${codeClass} .hljs-meta,
 ${codeClass} .hljs-selector-id,
 ${codeClass} .hljs-title {
 color: var(--n-hue-2);
 }`,
            `${codeClass} .hljs-emphasis {
 font-style: italic;
 }`,
            `${codeClass} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,
            `${codeClass} .hljs-link {
 text-decoration: underline;
 }`,
        ];
    },
]);
