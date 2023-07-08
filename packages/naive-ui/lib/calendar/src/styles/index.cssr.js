Object.defineProperty(exports, '__esModule', {
    value: true,
});
const cssr_1 = require('../../../_utils/cssr');
exports.default = (0, cssr_1.c)([
    (0, cssr_1.cB)(
        'calendar',
        `
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 height: 720px;
 display: flex;
 flex-direction: column;
 `,
        [
            (0, cssr_1.cB)(
                'calendar-prev-btn',
                `
 cursor: pointer;
 `
            ),
            (0, cssr_1.cB)(
                'calendar-next-btn',
                `
 cursor: pointer;
 `
            ),
            (0, cssr_1.cB)(
                'calendar-header',
                `
 display: flex;
 align-items: center;
 line-height: 1;
 font-size: var(--n-title-font-size);
 padding: 0 0 18px 0;
 justify-content: space-between;
 `,
                [
                    (0, cssr_1.cE)(
                        'title',
                        `
 color: var(--n-title-text-color);
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 `
                    ),
                    (0, cssr_1.cE)(
                        'extra',
                        `
 display: flex;
 align-items: center;
 `
                    ),
                ]
            ),
            (0, cssr_1.cB)(
                'calendar-main',
                `
 display: flex;
 flex: 1;
 `
            ),
            (0, cssr_1.cB)(
                'calendar-dates',
                `
 flex: 1;
 display: grid;
 grid-template-columns: repeat(7, minmax(0, 1fr));
 grid-auto-rows: 1fr;
 border-radius: var(--n-border-radius);
 flex: 1;
 border-top: 1px solid;
 border-left: 1px solid;
 border-color: var(--n-border-color);
 transition: border-color .3s var(--n-bezier);
 `
            ),
            (0, cssr_1.cB)(
                'calendar-card',
                `
 display: flex;
 justify-content: flex-start;
 flex-direction: column;
 text-align: center;
 width: 16%;
 min-width: 116px;
 padding: 10px;
 border: 1px solid;
 border-radius: 4px;
 box-sizing: border-box;
 border-color: var(--n-border-color);
 `,
                [
                    (0, cssr_1.cB)('date', ''),
                    (0, cssr_1.cE)(
                        'date-time',
                        `
 font-size: 18px;
 color: var(--n-date-color-current);
 line-height: 52px;
 font-weight: bold;
 white-space: nowrap;
 `
                    ),
                    (0, cssr_1.cE)(
                        'date-day',
                        `
 font-size: 42px;
 background: var(--n-date-color-current);
 border-radius: 10px;
 width: 60%;
 min-width: 72px;
 max-width: 124px;
 margin: 10px auto;
 color: var(--n-date-text-color-current);
 font-weight: bold;
 padding: 5px;
 position: relative;
 `
                    ),
                    (0, cssr_1.cE)(
                        'date-day-now',
                        `
 font-size: 12px;
 font-weight: 200;
 position: absolute;
 bottom: 0;
 left: 50%;
 transform: translateX(-50%);
 `
                    ),
                    (0, cssr_1.cE)(
                        'date-info',
                        `
 line-height: 28px;
 `
                    ),
                    (0, cssr_1.cE)(
                        'date-info-festival',
                        `
 color: var(--n-date-color-current);
 `
                    ),
                    (0, cssr_1.cE)(
                        'remarks',
                        `
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 line-height: 24px;
 margin-top: 20px;
 overflow-wrap: break-word;
 text-align: start;
 `
                    ),
                ]
            ),
            (0, cssr_1.cB)(
                'calendar-cell',
                `
 box-sizing: border-box;
 padding: 10px;
 border-right: 1px solid;
 border-bottom: 1px solid;
 border-color: var(--n-border-color);
 cursor: pointer;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,
                [
                    (0, cssr_1.c)(
                        '&:nth-child(7)',
                        `
 border-top-right-radius: var(--n-border-radius);
 `
                    ),
                    (0, cssr_1.c)(
                        '&:nth-last-child(7)',
                        `
 border-bottom-left-radius: var(--n-border-radius);
 `
                    ),
                    (0, cssr_1.c)(
                        '&:last-child',
                        `
 border-bottom-right-radius: var(--n-border-radius);
 `
                    ),
                    (0, cssr_1.c)(
                        '&:hover',
                        `
 background-color: var(--n-cell-color-hover);
 `
                    ),
                    (0, cssr_1.cE)(
                        'bar',
                        `
 position: absolute;
 left: 0;
 right: 0;
 bottom: -1px;
 height: 3px;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `
                    ),
                    (0, cssr_1.cM)('selected', [
                        (0, cssr_1.cE)(
                            'bar',
                            `
 background-color: var(--n-bar-color);
 `
                        ),
                    ]),
                    (0, cssr_1.cB)(
                        'calendar-date',
                        `
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 color: var(--n-text-color);
 `,
                        [
                            (0, cssr_1.cE)(
                                'date',
                                `
 color: var(--n-text-color);
 `
                            ),
                        ]
                    ),
                    (0, cssr_1.cM)(
                        'disabled, other-month',
                        `
 color: var(--n-day-text-color);
 `,
                        [
                            (0, cssr_1.cB)('calendar-date', [
                                (0, cssr_1.cE)(
                                    'date',
                                    `
 color: var(--n-day-text-color);
 `
                                ),
                            ]),
                        ]
                    ),
                    (0, cssr_1.cM)(
                        'disabled',
                        `
 cursor: not-allowed;
 `
                    ),
                    (0, cssr_1.cM)('current', [
                        (0, cssr_1.cB)('calendar-date', [
                            (0, cssr_1.cE)(
                                'date',
                                `
 color: var(--n-date-text-color-current);
 background-color: var(--n-date-color-current);
 `
                            ),
                        ]),
                    ]),
                    (0, cssr_1.cB)(
                        'calendar-date',
                        `
 position: relative;
 line-height: 1;
 display: flex;
 align-items: center;
 height: 1em;
 justify-content: space-between;
 padding-bottom: .75em;
 `,
                        [
                            (0, cssr_1.cE)(
                                'date',
                                `
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 margin-left: -0.4em;
 width: 1.8em;
 height: 1.8em;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `
                            ),
                            (0, cssr_1.cE)(
                                'day',
                                `
 color: var(--n-day-text-color);
 transition: color .3s var(--n-bezier);
 `
                            ),
                        ]
                    ),
                    (0, cssr_1.cB)(
                        'calendar-slot',
                        `
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 font-size: var(--n-font-size);
 overflow: auto;
 max-height: 80px;
 `
                    ),
                    (0, cssr_1.cB)('calendar-slot-hidden', [
                        (0, cssr_1.c)('> div', [
                            (0, cssr_1.c)(
                                '&:nth-child(n+3)',
                                `
 display: none;
 `
                            ),
                        ]),
                    ]),
                ]
            ),
        ]
    ),
    (0, cssr_1.insideModal)(
        (0, cssr_1.cB)('calendar', [
            (0, cssr_1.cB)(
                'calendar-dates',
                `
 border-color: var(--n-border-color-modal);
 `
            ),
            (0, cssr_1.cB)(
                'calendar-cell',
                `
 border-color: var(--n-border-color-modal);
 `,
                [
                    (0, cssr_1.c)(
                        '&:hover',
                        `
 background-color: var(--n-cell-color-hover-modal);
 `
                    ),
                ]
            ),
        ])
    ),
    (0, cssr_1.insidePopover)(
        (0, cssr_1.cB)('calendar', [
            (0, cssr_1.cB)(
                'calendar-dates',
                `
 border-color: var(--n-border-color-popover);
 `
            ),
            (0, cssr_1.cB)(
                'calendar-cell',
                `
 border-color: var(--n-border-color-popover);
 `,
                [
                    (0, cssr_1.c)(
                        '&:hover',
                        `
 background-color: var(--n-cell-color-hover-popover);
 `
                    ),
                ]
            ),
        ])
    ),
]);
