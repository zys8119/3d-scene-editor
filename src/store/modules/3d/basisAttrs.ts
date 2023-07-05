import { Attrs } from '@/store/modules/3d/attrs';
import { get as _get, set as _set, merge as _merge } from 'lodash';
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
        title: 'Basis',
        show: true,
        filter() {
            return (
                !!this.layerActiveGetters &&
                this.layerActiveGetters?.type === 'cube'
            );
        },
        child: [
            'width',
            'height',
            'depth',
            'Mesh.position.x',
            'Mesh.position.y',
            'Mesh.position.z',
            'Mesh.rotation.x',
            'Mesh.rotation.y',
            'Mesh.rotation.z',
            'Mesh.scale.x',
            'Mesh.scale.y',
            'Mesh.scale.z',
            { path: 'Mesh.castShadow', config: { type: 'switch' } },
            { path: 'Mesh.receiveShadow', config: { type: 'switch' } },
        ].map((label: any) => {
            const isObject =
                Object.prototype.toString.call(label) === '[object Object]';
            const _label = isObject ? label.path : label;
            return {
                label: _label
                    .replace(/Mesh\./g, '')
                    .replace(/^./, (m: string) => m.toUpperCase()),
                config: _merge(
                    {
                        type: 'number',
                        cursorGj: true,
                        props: {
                            disabled: ['width', 'height', 'depth'].includes(
                                _label
                            ),
                            value: createValue(_label),
                        },
                    },
                    isObject ? label?.config || {} : {}
                ),
            };
        }),
    },
] as Attrs;
