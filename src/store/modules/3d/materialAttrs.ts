import {
    Attrs,
    AttrsItemChild,
    AttrsItemChildConfig,
} from '@/store/modules/3d/attrs';
import RenderMapVNode from '@/views/scene/components/RenderMapVNode.vue';
import MaterialMap from '@/views/scene/components/MaterialMap.vue';
import { get as _get, set as _set, merge as _merge } from 'lodash';
import { BaseThreeClass } from 'naive-ui';
import { Material } from 'three';
import { Layer } from '@/store/modules/3d';
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
export const optionsMaterial = [
    {
        label: 'LineBasicMaterial',
        value: 'LineBasicMaterial',
        name: '基础线条材质',
        box({ THREE }: BaseThreeClass) {
            const material = new THREE.LineBasicMaterial({
                color: 0xffffff,
                linewidth: 1,
                linecap: 'round', //ignored by WebGLRenderer
                linejoin: 'round', //ignored by WebGLRenderer
            });
            return material;
        },
    },
    {
        label: 'LineDashedMaterial',
        value: 'LineDashedMaterial',
        name: '虚线材质',
        box({ THREE }: BaseThreeClass) {
            const material = new THREE.LineDashedMaterial();
            return material;
        },
    },
    {
        label: 'Material',
        value: 'Material',
        name: '材质',
        box({ THREE }: BaseThreeClass) {
            const material = new THREE.Material();
            return material;
        },
    },
    {
        label: 'MeshBasicMaterial',
        value: 'MeshBasicMaterial',
        name: '基础网格材质',
        box({ THREE }: BaseThreeClass) {
            const material = new THREE.MeshBasicMaterial();
            return material;
        },
    },
    {
        label: 'MeshDepthMaterial',
        value: 'MeshDepthMaterial',
        name: '深度网格材质',
        box({ THREE }: BaseThreeClass) {
            const material = new THREE.MeshDepthMaterial();
            return material;
        },
    },
    {
        label: 'MeshDistanceMaterial',
        value: 'MeshDistanceMaterial',
        name: 'MeshDistanceMaterial',
        box({ THREE }: BaseThreeClass) {
            const material = new THREE.MeshDistanceMaterial();
            return material;
        },
    },
    {
        label: 'MeshLambertMaterial',
        value: 'MeshLambertMaterial',
        name: '网格材质',
        box({ THREE }: BaseThreeClass) {
            const material = new THREE.MeshLambertMaterial();
            return material;
        },
    },
    {
        label: 'MeshMatcapMaterial',
        value: 'MeshMatcapMaterial',
        name: '材质捕捉',
        box({ THREE }: BaseThreeClass) {
            const material = new THREE.MeshMatcapMaterial();
            return material;
        },
    },
    {
        label: 'MeshNormalMaterial',
        value: 'MeshNormalMaterial',
        name: '法线网格材质',
        box({ THREE }: BaseThreeClass) {
            const material = new THREE.MeshNormalMaterial();
            return material;
        },
    },
    {
        label: 'MeshPhongMaterial',
        value: 'MeshPhongMaterial',
        name: 'Phong网格材质',
        box({ THREE }: BaseThreeClass) {
            const material = new THREE.MeshPhongMaterial();
            return material;
        },
    },
    {
        label: 'MeshPhysicalMaterial',
        value: 'MeshPhysicalMaterial',
        name: '物理网格材质',
        box({ THREE }: BaseThreeClass) {
            const material = new THREE.MeshPhysicalMaterial();
            return material;
        },
    },
    {
        label: 'MeshStandardMaterial',
        value: 'MeshStandardMaterial',
        name: '标准网格材质',
        box({ THREE }: BaseThreeClass) {
            const material = new THREE.MeshStandardMaterial();
            return material;
        },
    },
    {
        label: 'MeshToonMaterial',
        value: 'MeshToonMaterial',
        name: '卡通着色材质',
        box({ THREE }: BaseThreeClass) {
            const material = new THREE.MeshToonMaterial();
            return material;
        },
    },
    {
        label: 'PointsMaterial',
        value: 'PointsMaterial',
        name: '点材质',
        box({ THREE }: BaseThreeClass) {
            const material = new THREE.PointsMaterial();
            return material;
        },
    },
    {
        label: 'RawShaderMaterial',
        value: 'RawShaderMaterial',
        name: '原始着色器材质',
        box({ THREE }: BaseThreeClass) {
            const material = new THREE.RawShaderMaterial();
            return material;
        },
    },
    {
        label: 'ShaderMaterial',
        value: 'ShaderMaterial',
        name: '着色器材质',
        box({ THREE }: BaseThreeClass) {
            const material = new THREE.ShaderMaterial();
            return material;
        },
    },
    {
        label: 'ShadowMaterial',
        value: 'ShadowMaterial',
        name: '阴影材质',
        box({ THREE }: BaseThreeClass) {
            const material = new THREE.ShadowMaterial();
            return material;
        },
    },
    {
        label: 'SpriteMaterial',
        value: 'SpriteMaterial',
        name: '点精灵材质',
        box({ THREE }: BaseThreeClass) {
            const material = new THREE.SpriteMaterial();
            return material;
        },
    },
] as const;
export type OptionsMaterialItemType = Omit<
    (typeof optionsMaterial)[number],
    'box'
> & {
    box(three: BaseThreeClass, layer: Layer): Material;
};
export type MaterialType = OptionsMaterialItemType extends {
    value: infer A;
}
    ? A
    : string;
export const filterMap = {} as Record<MaterialType, string[]>;
export const fieldsMaterialTypeMap = Object.entries(filterMap).reduce<
    Record<string, string[]>
>((a, [type, fields]) => {
    fields.forEach((k) => {
        a[k] = a[k] || [];
        a[k].push(type);
    });
    return a;
}, {});
export type OptionsMaterialMapType = Record<
    MaterialType,
    OptionsMaterialItemType
>;
export const optionsMaterialMap =
    optionsMaterial.reduce<OptionsMaterialMapType>((a: any, b: any) => {
        a[b.label] = b;
        return a;
    }, {} as any);
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
    'MaterialMap',
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
                this.layerActiveGetters?.type === 'geometry'
            );
        },
        child: [
            {
                label: 'materialType',
                path: 'materialType',
                defaultValue: 'MeshLambertMaterial',
                config: {
                    type: 'select',
                    cursorGj: null as unknown,
                    props: {
                        filterable: true,
                        options: optionsMaterial.map((e: any) => ({
                            ...e,
                            label: e.name || e.label,
                        })),
                    },
                } as AttrsItemChildConfig,
            },
            {
                label: 'color',
                path: 'Material.color',
                config: { type: 'color' } as AttrsItemChildConfig,
                defaultValue: '#5f5f5f',
            },
            {
                label: 'emissive',
                path: 'Material.emissive',
                config: { type: 'color' } as AttrsItemChildConfig,
                defaultValue: '#000000',
            },
            {
                label: 'aoMapIntensity',
                path: 'Material.aoMapIntensity',
                defaultValue: 1,
            },
            { label: 'bumpScale', path: 'Material.bumpScale', defaultValue: 1 },
            { label: 'combine', path: 'Material.combine', defaultValue: 1 },
            {
                label: 'displacementScale',
                path: 'Material.displacementScale',
                defaultValue: 0,
            },
            {
                label: 'displacementBias',
                path: 'Material.displacementBias',
                defaultValue: 1,
            },
            {
                label: 'emissiveIntensity',
                path: 'Material.emissiveIntensity',
                defaultValue: 1,
            },
            {
                label: 'MaterialMapIntensity',
                path: 'Material.MaterialMapIntensity',
                defaultValue: 1,
            },
            {
                label: 'reflectivity',
                path: 'Material.reflectivity',
                defaultValue: 1,
            },
            {
                label: 'wireframeLinewidth',
                path: 'Material.wireframeLinewidth',
                defaultValue: 1,
            },
            {
                label: 'refractionRatio',
                path: 'Material.refractionRatio',
                defaultValue: 0.98,
            },
            {
                label: 'wireframeLinecap',
                path: 'Material.wireframeLinecap',
                config: {
                    type: 'select',
                    props: { options: wireframeLineOptions },
                } as AttrsItemChildConfig,
                defaultValue: 'round',
            },
            {
                label: 'wireframeLinejoin',
                path: 'Material.wireframeLinejoin',
                config: {
                    type: 'select',
                    props: { options: wireframeLineOptions },
                } as AttrsItemChildConfig,
                defaultValue: 'round',
            },
            {
                label: 'flatShading',
                path: 'Material.flatShading',
                config: { type: 'switch' } as AttrsItemChildConfig,
                defaultValue: false,
            },
            {
                label: 'fog',
                path: 'Material.fog',
                config: { type: 'switch' } as AttrsItemChildConfig,
                defaultValue: true,
            },
            {
                label: 'wireframe',
                path: 'Material.wireframe',
                config: { type: 'switch' } as AttrsItemChildConfig,
                defaultValue: false,
            },
        ]
            .concat(
                textureField.map<any>((keyName) => ({
                    path: `Material.${keyName}`,
                    label: keyName,
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
                const labelStr = isObject ? label.label || _label : _label;
                return {
                    label: labelStr.replace(/^./, (m: string) =>
                        m.toUpperCase()
                    ),
                    ...(label?.base || {}),
                    filter() {
                        if (
                            typeof _get(label?.base || {}, 'filter') ===
                            'function'
                        ) {
                            return label?.base?.filter?.call?.(this);
                        }
                        if (
                            fieldsMaterialTypeMap[labelStr] &&
                            fieldsMaterialTypeMap[labelStr].length > 0
                        ) {
                            const MaterialType =
                                (this.layerActiveGetters
                                    .materialType as MaterialType) ||
                                'DirectionalMaterial';
                            return fieldsMaterialTypeMap[labelStr].includes(
                                MaterialType
                            );
                        }
                        return true;
                    },
                    config: _merge(
                        {
                            type: 'number',
                            cursorGj: true,
                            props: {
                                value: createValue(_label, defaultValue),
                            },
                        },
                        isObject ? label?.config || {} : {}
                    ),
                };
            }),
    },
] as Attrs;
