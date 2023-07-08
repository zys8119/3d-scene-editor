Object.defineProperty(exports, '__esModule', {
    value: true,
});
const cssr_1 = require('../../../_utils/cssr');
exports.default = (0, cssr_1.c)([
    (0, cssr_1.c)(
        '@keyframes textAnim',
        `
 0% {
 transform: translateX(var(--n-notification-bar-transform-width));
 }
 100% {
 transform: translateX(-100%);
 }
 `
    ),
    (0, cssr_1.cB)(
        'notification-bar',
        {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '5px 0',
            lineHeight: '25px',
        },
        []
    ),
    (0, cssr_1.cB)(
        'notification-bar-left',
        {
            flex: '1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '999',
        },
        [
            (0, cssr_1.cB)('icon', {
                width: '30px',
                fontSize: '18px',
            }),
        ]
    ),
    (0, cssr_1.cB)(
        'notification-bar-middle-content',
        {
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
            padding: '0 5px',
        },
        [
            (0, cssr_1.cB)('notification-bar-middle-scroll', {
                whiteSpace: 'nowrap',
                animation: 'textAnim linear infinite',
            }),
            (0, cssr_1.cB)('notification-bar-middle-ellipsis', {
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
            }),
        ]
    ),
    (0, cssr_1.cB)('notification-bar-right', {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '18px',
        cursor: 'pointer',
        width: '30px',
    }),
]);
