const attrs = [
    {
        title: 'Camera',
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
                label: 'slider',
                config: {
                    type: 'slider',
                    cursorGj: true,
                    props: {
                        value: 1,
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
