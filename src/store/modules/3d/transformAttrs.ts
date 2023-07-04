import { Attrs } from '@/store/modules/3d/attrs';
const config = use3DConfig();
const attrs = [
    {
        title: 'Transform',
        child: [
            {
                label: 'Mode',
                config: {
                    type: 'select',
                    props: {
                        options: [
                            {
                                label: 'translate',
                                value: 'translate',
                            },
                            {
                                label: 'rotate',
                                value: 'rotate',
                            },
                            {
                                label: 'scale',
                                value: 'scale',
                            },
                        ],
                        value: computed({
                            get() {
                                return config.value.transform.mode;
                            },
                            set(v) {
                                config.value.transform.mode = v;
                            },
                        }),
                    },
                },
            },
        ],
    },
] as Attrs;
export default attrs;
