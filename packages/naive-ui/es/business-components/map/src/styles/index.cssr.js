import { c, cB, cE } from '../../../../_utils/cssr';
export default c([
    cB(
        'map',
        `
 position: relative;
 `,
        [
            c(
                '.amap-logo',
                `
 display: none!important;
 opacity: 0!important;
 `
            ),
            c(
                '.amap-copyright',
                `
 display: none!important;
 opacity: 0!important;
 `
            ),
            cB(
                'tip-point',
                `
 position: absolute;
 width: 30px;
 height: 30px;
 left: calc(50% - 15px);
 top: calc(50% - 15px);
 z-index: 1;
 `,
                [
                    c(
                        'img',
                        `
 display: block;
 margin: auto;
 animation: 1s tip-point-zd linear infinite reverse;
 `
                    ),
                ]
            ),
            cB(
                'map-search',
                {
                    position: 'absolute',
                    left: '15px',
                    top: '15px',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    width: '25%',
                    maxWidth: '250px',
                    minWidth: '150px',
                },
                [
                    c('.n-input', {
                        width: '100%',
                    }),
                    cE('list', {
                        maxHeight: '150px',
                        overflowX: 'hidden',
                        backgroundColor: '#ffff',
                        padding: '15px',
                        marginTop: '10px',
                        fontSize: '14px',
                        border: '1px solid #d8d8d8',
                        borderRadius: '10px',
                        boxShadow: '0 0 5px #999',
                    }),
                    cE('list::-webkit-scrollbar', {
                        display: 'none',
                    }),
                    cE('not-data', {
                        color: '#999',
                        fontSize: '12px',
                    }),
                    cE(
                        'item',
                        {
                            marginBottom: '5px',
                            marginTop: '5px',
                            borderBottom: '1px solid #dedede',
                            cursor: 'pointer',
                            padding: '10px',
                        },
                        [
                            c('&:hover', {
                                backgroundColor: '#efefef',
                                borderRadius: '5px',
                            }),
                        ]
                    ),
                    cE('item__label', {
                        fontWeight: 'bold',
                        fontSize: '18px',
                    }),
                    cE('item__value', {
                        color: '#999',
                        fontSize: '12px',
                    }),
                ]
            ),
            cB(
                'map-panel',
                {
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    zIndex: 1,
                    height: '100%',
                    width: '300px',
                    maxWidth: '30%',
                },
                [
                    cE('not-data', {
                        color: '#999',
                        fontSize: '12px',
                        justifyContent: 'center',
                        display: 'flex',
                    }),
                    cE(
                        'row',
                        {
                            padding: '10px 15px',
                            borderRadius: '4px',
                            border: '1px solid #eee',
                            position: 'relative',
                            cursor: 'pointer',
                        },
                        [
                            c('& + *', {
                                marginTop: '5px',
                            }),
                            c('&:hover', {
                                backgroundColor: '#e5e5e5',
                            }),
                            c('&__name', {
                                fontSize: '16px',
                                fontWeight: 'bold',
                            }),
                            c('&__address,&__location', {
                                fontSize: '12px',
                                color: '#999',
                            }),
                            c(
                                '&__icon',
                                {
                                    position: 'absolute',
                                    right: '-9px',
                                    top: '-9px',
                                    color: '#999',
                                    fontSize: '18px',
                                    cursor: 'pointer',
                                    userSelect: 'none',
                                    display: 'none',
                                },
                                [
                                    c('&:hover', {
                                        color: '#f00',
                                    }),
                                ]
                            ),
                            c('&:hover', [
                                cB('map-panel__row__icon', {
                                    display: 'block',
                                }),
                            ]),
                        ]
                    ),
                    cE('footer', {
                        padding: '10px 15px',
                    }),
                ]
            ),
        ]
    ),
    c(
        '@keyframes tip-point-zd',
        `
 0%, 20%, 40%, 60%, 100% {
 transform: translateY(0);
 }
 10% {
 transform: translateY(-5px);
 }
 30% {
 transform: translateY(-3px);
 }
 50% {
 transform: translateY(-1px);
 }
 `
    ),
]);
