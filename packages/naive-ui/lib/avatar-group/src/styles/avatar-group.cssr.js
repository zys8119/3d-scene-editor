Object.defineProperty(exports, '__esModule', {
    value: true,
});
const index_1 = require('../../../_utils/cssr/index');
exports.default = (0, index_1.cB)(
    'avatar-group',
    `
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,
    [
        (0, index_1.cNotM)(
            'vertical',
            {
                flexDirection: 'row',
            },
            [
                (0, index_1.cB)('avatar', [
                    (0, index_1.c)(
                        '&:not(:first-child)',
                        `
 margin-left: var(--n-gap);
 `
                    ),
                ]),
            ]
        ),
        (0, index_1.cM)(
            'vertical',
            {
                flexDirection: 'column',
            },
            [
                (0, index_1.cB)('avatar', [
                    (0, index_1.c)(
                        '&:not(:first-child)',
                        `
 margin-top: var(--n-gap);
 `
                    ),
                ]),
            ]
        ),
    ]
);
