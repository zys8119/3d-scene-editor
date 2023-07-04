const attrs = [
    {
        title: 'Camera',
        showMore: true,
        more() {
            return h('div', 'asdas');
        },
        child: [
            {
                label: 'input',
                config: {
                    type: 'input',
                    props: {},
                },
            },
            {
                label: 'radio',
                config: {
                    type: 'radio',
                    isFlex: true,
                    props: {
                        options: [
                            {
                                label: 'Yes',
                                value: 'Yes',
                            },
                            {
                                label: 'No',
                                value: 'No',
                            },
                        ],
                    },
                },
            },
            {
                label: 'select',
                config: {
                    type: 'select',
                    props: {
                        options: [
                            {
                                label: "Everybody's Got Something to Hide Except Me and My Monkey",
                                value: 'song0',
                                disabled: true,
                            },
                            {
                                label: 'Drive My Car',
                                value: 'song1',
                            },
                        ],
                    },
                },
            },
            {
                label: 'number',
                config: {
                    type: 'number',
                    props: {},
                },
            },
            {
                label: 'switch',
                config: {
                    type: 'switch',
                    props: {},
                },
            },
            {
                label: 'color',
                showMore: true,
                more() {
                    return h('div', '阿四件打算看');
                },
                config: {
                    type: 'color',
                    props: {
                        swatches: [
                            '#FFFFFF',
                            '#18A058',
                            '#2080F0',
                            '#F0A020',
                            'rgba(208, 48, 80, 1)',
                        ],
                        actions: ['clear', 'confirm'],
                    },
                },
            },
            {
                label: 'sliderasasa',
                showMore: true,
                more() {
                    return h('div', 'asdas');
                },
                config: {
                    type: 'slider',
                    cursorGj: true,
                    props: {
                        value: 0,
                    },
                },
            },
        ],
    },
];
export default attrs;

export type Attrs = typeof attrs;

export type AttrsItem = Attrs extends (infer T)[] ? T : never;

export type AttrsItemChild = AttrsItem['child'] extends (infer T)[] ? T : never;

export type AttrsItemChildConfig = AttrsItemChild['config'] extends (infer T)[]
    ? T
    : any;
