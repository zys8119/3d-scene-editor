import {
    Attrs,
    AttrsItemChild,
    AttrsItemChildConfig,
} from '@/store/modules/3d/attrs';
import RenderMapVNode from '@/views/scene/components/RenderMapVNode.vue';
import MaterialMap from '@/views/scene/components/MaterialMap.vue';
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
                config: { type: 'color' } as AttrsItemChildConfig,
                defaultValue: '#5f5f5f',
            },
            {
                path: 'Material.emissive',
                config: { type: 'color' } as AttrsItemChildConfig,
                defaultValue: '#000000',
            },
            {
                path: 'Material.map',
                config: {
                    type: 'VNode',
                    renderVNode: h(RenderMapVNode),
                } as AttrsItemChildConfig,
                base: {
                    showMore: true,
                    more(): VNode {
                        return h(MaterialMap);
                    },
                } as AttrsItemChild,
            },
        ].map((label: any) => {
            const isObject =
                Object.prototype.toString.call(label) === '[object Object]';
            const _label = isObject ? label.path : label;
            const defaultValue = isObject ? label.defaultValue : 0;
            return {
                label: _label
                    .replace(/Material\./g, '')
                    .replace(/^./, (m: string) => m.toUpperCase()),
                ...(label.base || {}),
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
