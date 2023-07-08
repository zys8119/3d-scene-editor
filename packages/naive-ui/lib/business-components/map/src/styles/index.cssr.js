Object.defineProperty(exports, '__esModule', {
    value: true,
});
const cssr_1 = require('../../../../_utils/cssr');
exports.default = (0, cssr_1.c)([
    (0, cssr_1.cB)(
        'map',
        `
 position: relative;
 `,
        [
            (0, cssr_1.c)(
                '.amap-logo',
                `
 display: none!important;
 opacity: 0!important;
 `
            ),
            (0, cssr_1.c)(
                '.amap-copyright',
                `
 display: none!important;
 opacity: 0!important;
 `
            ),
            (0, cssr_1.cB)(
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
                    (0, cssr_1.c)(
                        'img',
                        `
 display: block;
 margin: auto;
 animation: 1s tip-point-zd linear infinite reverse;
 `
                    ),
                ]
            ),
            (0, cssr_1.cB)(
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
                    (0, cssr_1.c)('.n-input', {
                        width: '100%',
                    }),
                    (0, cssr_1.cE)('list', {
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
                    (0, cssr_1.cE)('list::-webkit-scrollbar', {
                        display: 'none',
                    }),
                    (0, cssr_1.cE)('not-data', {
                        color: '#999',
                        fontSize: '12px',
                    }),
                    (0, cssr_1.cE)(
                        'item',
                        {
                            marginBottom: '5px',
                            marginTop: '5px',
                            borderBottom: '1px solid #dedede',
                            cursor: 'pointer',
                            padding: '10px',
                        },
                        [
                            (0, cssr_1.c)('&:hover', {
                                backgroundColor: '#efefef',
                                borderRadius: '5px',
                            }),
                        ]
                    ),
                    (0, cssr_1.cE)('item__label', {
                        fontWeight: 'bold',
                        fontSize: '18px',
                    }),
                    (0, cssr_1.cE)('item__value', {
                        color: '#999',
                        fontSize: '12px',
                    }),
                ]
            ),
            (0, cssr_1.cB)(
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
                    (0, cssr_1.cE)('not-data', {
                        color: '#999',
                        fontSize: '12px',
                        justifyContent: 'center',
                        display: 'flex',
                    }),
                    (0, cssr_1.cE)(
                        'row',
                        {
                            padding: '10px 15px',
                            borderRadius: '4px',
                            border: '1px solid #eee',
                            position: 'relative',
                            cursor: 'pointer',
                        },
                        [
                            (0, cssr_1.c)('& + *', {
                                marginTop: '5px',
                            }),
                            (0, cssr_1.c)('&:hover', {
                                backgroundColor: '#e5e5e5',
                            }),
                            (0, cssr_1.c)('&__name', {
                                fontSize: '16px',
                                fontWeight: 'bold',
                            }),
                            (0, cssr_1.c)('&__address,&__location', {
                                fontSize: '12px',
                                color: '#999',
                            }),
                            (0, cssr_1.c)(
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
                                    (0, cssr_1.c)('&:hover', {
                                        color: '#f00',
                                    }),
                                ]
                            ),
                            (0, cssr_1.c)('&:hover', [
                                (0, cssr_1.cB)('map-panel__row__icon', {
                                    display: 'block',
                                }),
                            ]),
                        ]
                    ),
                    (0, cssr_1.cE)('footer', {
                        padding: '10px 15px',
                    }),
                ]
            ),
        ]
    ),
    (0, cssr_1.c)(
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
