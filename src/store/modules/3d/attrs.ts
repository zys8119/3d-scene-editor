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
                    isflex: true,
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
