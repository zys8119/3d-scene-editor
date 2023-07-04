import { Attrs } from '@/store/modules/3d/attrs';
export default [
    {
        title: 'Cube',
        filter() {
            return (
                !!this.layerActiveGetters &&
                this.layerActiveGetters?.type === 'cube'
            );
        },
        child: [
            {
                label: 'Width',
                config: {
                    type: 'number',
                    cursorGj: true,
                    props: {
                        value: computed({
                            get() {
                                return window.store.store3d.layerActiveGetters
                                    .width;
                            },
                            set(v) {
                                window.store.store3d.layerActiveGetters.width =
                                    v;
                            },
                        }),
                    },
                },
            },
        ],
    },
] as Attrs;
