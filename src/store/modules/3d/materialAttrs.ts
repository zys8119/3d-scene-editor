import { Attrs, AttrsItemChildConfig } from '@/store/modules/3d/attrs';
import { get as _get, set as _set, merge as _merge } from 'lodash';
const createValue = (keyPath: string, defaultValue: any = 0) => {
    return computed({
        get() {
            return _get(
                window.store.store3d.layerActiveGetters,
                keyPath,
                defaultValue
            );
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
        child: [
            {
                path: 'Material.color',
                config: { type: 'color' } as AttrsItemChildConfig & {
                    defaultValue: string;
                },
                defaultValue: '#5f5f5f',
            },
        ].map((label: any) => {
            const isObject =
                Object.prototype.toString.call(label) === '[object Object]';
            const _label = isObject ? label.path : label;
            const defaultValue = isObject ? label.defaultValue : 0;
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
                            value: createValue(_label, defaultValue),
                        },
                    },
                    isObject ? label?.config || {} : {}
                ),
            };
        }),
    },
] as Attrs;
