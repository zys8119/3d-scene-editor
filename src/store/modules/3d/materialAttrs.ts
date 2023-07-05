import { Attrs } from '@/store/modules/3d/attrs';
import { get as _get, set as _set } from 'lodash';
const createValue = (keyPath: string) => {
    return computed({
        get() {
            return _get(window.store.store3d.layerActiveGetters, keyPath, 0);
        },
        set(v) {
            _set(window.store.store3d.layerActiveGetters, keyPath, v);
        },
    });
};
export default [
    {
        title: 'Material',
        filter() {
            return (
                !!this.layerActiveGetters &&
                this.layerActiveGetters?.type === 'cube'
            );
        },
        child: ['width', 'height'].map((label) => ({
            label: label
                .replace(/Mesh\./g, '')
                .replace(/^./, (m) => m.toUpperCase()),
            config: {
                type: 'number',
                cursorGj: true,
                props: {
                    value: createValue(label),
                },
            },
        })),
    },
] as Attrs;
