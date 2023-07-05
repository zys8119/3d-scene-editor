import { Attrs } from '@/store/modules/3d/attrs';
const config = use3DConfig();
const optionsMode = [
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
];
const attrs = [
    {
        title: 'Transform',
        filter() {
            return !!this.layerActiveGetters;
        },
        child: [
            {
                label: 'Mode',
                config: {
                    type: 'select',
                    props: {
                        options: optionsMode,
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

const { Control, KeyT } = useMagicKeys();
watchEffect(() => {
    if (
        Control.value &&
        KeyT.value &&
        !!window.store.store3d.layerActiveGetters
    ) {
        let index =
            optionsMode.findIndex(
                (e) => e.value === config.value.transform.mode
            ) + 1;
        if (index < 0 || index >= optionsMode.length) {
            index = 0;
        }
        config.value.transform.mode = optionsMode[index].value;
    }
});
export default attrs;
