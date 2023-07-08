import { c, cB, cE } from '../../../../_utils/cssr';
export default cB(
    'base-three',
    {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222222',
    },
    [
        cE('canvas', {
            width: '100%',
            height: '100%',
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 1,
        }),
        c('#webglmessage', {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, 50%)',
            zIndex: '1',
            margin: '0 !important',
        }),
        cE('panel', {
            position: 'absolute',
            left: 0,
            bottom: 0,
            background: '#202124',
            zIndex: 3,
            minHeight: '50px',
            width: '100%',
            color: '#fff',
        }),
        cE('gui', {
            position: 'absolute',
            right: 0,
            top: 0,
            background: '#202124',
            zIndex: 3,
            minHeight: '50px',
        }),
        cE(
            'stats',
            {
                position: 'absolute',
                left: 0,
                top: 0,
                background: '#202124',
                zIndex: 3,
                minHeight: '50px',
            },
            [
                c('div', {
                    position: 'absolute !important',
                }),
            ]
        ),
    ]
);
