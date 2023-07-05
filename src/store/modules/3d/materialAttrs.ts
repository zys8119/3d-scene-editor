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
export const wireframeLineOptions = [
    { label: 'butt', value: 'butt' },
    { label: 'round', value: 'round' },
    { label: 'square', value: 'square' },
];
/**
 * 素材贴图字段
 */
export const textureField = [
    'map',
    'alphaMap',
    'aoMap',
    'bumpMap',
    'displacementMap',
    'emissiveMap',
    'envMap',
    'lightMap',
    'normalMap',
    'specularMap',
];
export default [
    {
        title: 'Material',
        show: false,
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
            { path: 'Material.aoMapIntensity', defaultValue: 1 },
            { path: 'Material.bumpScale', defaultValue: 1 },
            { path: 'Material.combine', defaultValue: 1 },
            { path: 'Material.displacementScale', defaultValue: 0 },
            { path: 'Material.displacementBias', defaultValue: 1 },
            { path: 'Material.emissiveIntensity', defaultValue: 1 },
            { path: 'Material.lightMapIntensity', defaultValue: 1 },
            { path: 'Material.reflectivity', defaultValue: 1 },
            { path: 'Material.wireframeLinewidth', defaultValue: 1 },
            { path: 'Material.refractionRatio', defaultValue: 0.98 },
            {
                path: 'Material.wireframeLinecap',
                config: {
                    type: 'select',
                    props: { options: wireframeLineOptions },
                } as AttrsItemChildConfig,
                defaultValue: 'round',
            },
            {
                path: 'Material.wireframeLinejoin',
                config: {
                    type: 'select',
                    props: { options: wireframeLineOptions },
                } as AttrsItemChildConfig,
                defaultValue: 'round',
            },
            {
                path: 'Material.flatShading',
                config: { type: 'switch' } as AttrsItemChildConfig,
                defaultValue: false,
            },
            {
                path: 'Material.fog',
                config: { type: 'switch' } as AttrsItemChildConfig,
                defaultValue: true,
            },
            {
                path: 'Material.wireframe',
                config: { type: 'switch' } as AttrsItemChildConfig,
                defaultValue: false,
            },
        ]
            .concat(
                textureField.map<any>((keyName) => ({
                    path: `Material.${keyName}`,
                    config: {
                        type: 'VNode',
                        renderVNode: h(RenderMapVNode, { keyName }),
                    } as AttrsItemChildConfig,
                    base: {
                        showMore: true,
                        more(): VNode {
                            return h(MaterialMap, { keyName });
                        },
                    } as AttrsItemChild,
                }))
            )
            .map((label: any) => {
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
