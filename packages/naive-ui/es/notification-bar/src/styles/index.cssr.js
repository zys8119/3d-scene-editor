import { c, cB } from '../../../_utils/cssr';
export default c([
    c(
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
    cB(
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
    cB(
        'notification-bar-left',
        {
            flex: '1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '999',
        },
        [
            cB('icon', {
                width: '30px',
                fontSize: '18px',
            }),
        ]
    ),
    cB(
        'notification-bar-middle-content',
        {
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
            padding: '0 5px',
        },
        [
            cB('notification-bar-middle-scroll', {
                whiteSpace: 'nowrap',
                animation: 'textAnim linear infinite',
            }),
            cB('notification-bar-middle-ellipsis', {
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
            }),
        ]
    ),
    cB('notification-bar-right', {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '18px',
        cursor: 'pointer',
        width: '30px',
    }),
]);
