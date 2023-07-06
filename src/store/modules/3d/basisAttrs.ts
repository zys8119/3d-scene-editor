import {
    Attrs,
    AttrsItemChild,
    AttrsItemChildConfig,
} from '@/store/modules/3d/attrs';
import { get as _get, set as _set, merge as _merge } from 'lodash';
import { BufferGeometry } from 'three/src/core/BufferGeometry';
import { Layer } from '@/store/modules/3d';
import { BaseThreeClass } from 'naive-ui';
import BasisAttrsPathsPreview from '@/views/scene/components/BasisAttrsPathsPreview.vue';
import { label } from 'three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements';
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
export const optionsGeometry = [
    {
        label: 'BoxGeometry',
        value: 'BoxGeometry',
        name: '立方缓冲几何体',
        box(three: BaseThreeClass, layer: Layer): BufferGeometry {
            return new three.THREE.BoxGeometry(
                layer.width,
                layer.height,
                layer.depth,
                layer.widthSegments,
                layer.heightSegments,
                layer.depthSegments
            );
        },
    },
    {
        label: 'CapsuleGeometry',
        value: 'CapsuleGeometry',
        name: '胶囊图形几何体',
        box(three: BaseThreeClass, layer: Layer): BufferGeometry {
            return new three.THREE.CapsuleGeometry(
                layer.radius,
                layer.length,
                layer.capSegments,
                layer.radialSegments
            );
        },
    },
    {
        label: 'CircleGeometry',
        value: 'CircleGeometry',
        name: '圆形缓冲几何体',
        box(three: BaseThreeClass, layer: Layer): BufferGeometry {
            return new three.THREE.CircleGeometry(
                layer.radius,
                layer.segments,
                layer.thetaStart,
                layer.thetaLength
            );
        },
    },
    {
        label: 'ConeGeometry',
        value: 'ConeGeometry',
        name: '圆锥缓冲几何体',
        box(three: BaseThreeClass, layer: Layer): BufferGeometry {
            return new three.THREE.ConeGeometry(
                layer.radius,
                layer.height,
                layer.radialSegments,
                layer.heightSegments,
                layer.openEnded,
                layer.thetaStart,
                layer.thetaLength
            );
        },
    },
    {
        label: 'CylinderGeometry',
        value: 'CylinderGeometry',
        name: '圆柱缓冲几何体',
        box(three: BaseThreeClass, layer: Layer): BufferGeometry {
            return new three.THREE.CylinderGeometry(
                layer.radiusTop,
                layer.radiusBottom,
                layer.height,
                layer.radialSegments,
                layer.heightSegments,
                layer.openEnded,
                layer.thetaStart,
                layer.thetaLength
            );
        },
    },
    {
        label: 'DodecahedronGeometry',
        value: 'DodecahedronGeometry',
        name: '十二面缓冲几何体',
        box(three: BaseThreeClass, layer: Layer): BufferGeometry {
            return new three.THREE.DodecahedronGeometry(
                layer.radius,
                layer.detail
            );
        },
    },
    {
        label: 'EdgesGeometry',
        value: 'EdgesGeometry',
        name: '边缘几何体',
        box(three: BaseThreeClass, layer: Layer): BufferGeometry {
            return new three.THREE.EdgesGeometry(
                new three.THREE.BoxGeometry(
                    layer.width,
                    layer.height,
                    layer.depth
                )
            );
        },
    },
    {
        label: 'ExtrudeGeometry',
        value: 'ExtrudeGeometry',
        name: '挤压缓冲几何体',
        box(three: BaseThreeClass, layer: Layer): BufferGeometry {
            const shape = new three.THREE.Shape();
            if (
                Object.prototype.toString.call(layer.paths) === '[object Array]'
            ) {
                layer.paths?.forEach((item) => {
                    item.forEach(([x, y], k) => {
                        if (k === 0) {
                            shape.moveTo(x, y);
                        } else {
                            shape.lineTo(x, y);
                        }
                    });
                });
            } else {
                shape.moveTo(0, 0);
                shape.lineTo(0, layer.width as number);
                shape.lineTo(layer.length as number, layer.width as number);
                shape.lineTo(layer.length as number, 0);
                shape.lineTo(0, 0);
            }
            const extrudeSettings = {
                steps: layer.steps,
                depth: layer.depth,
                curveSegments: layer.curveSegments,
                bevelEnabled: layer.bevelEnabled,
                bevelThickness: layer.bevelThickness,
                bevelSize: layer.bevelSize,
                bevelOffset: layer.bevelOffset,
                bevelSegments: layer.bevelSegments,
            };
            return new three.THREE.ExtrudeGeometry(shape, extrudeSettings);
        },
    },
    {
        label: 'IcosahedronGeometry',
        value: 'IcosahedronGeometry',
        name: '二十面缓冲几何体',
        box(three: BaseThreeClass, layer: Layer): BufferGeometry {
            return new three.THREE.IcosahedronGeometry(
                layer.radius,
                layer.detail
            );
        },
    },
] as const;
export type GeometryType = (typeof optionsGeometry)[number] extends {
    value: infer A;
}
    ? A
    : string;
export const filterMap = {
    CapsuleGeometry: ['radius', 'length', 'capSegments', 'radialSegments'],
    BoxGeometry: [
        'width',
        'height',
        'depth',
        'widthSegments',
        'heightSegments',
        'depthSegments',
    ],
    CircleGeometry: ['radius', 'segments', 'thetaStart', 'thetaLength'],
    ConeGeometry: [
        'radius',
        'height',
        'radialSegments',
        'heightSegments',
        'openEnded',
        'thetaStart',
        'thetaLength',
    ],
    CylinderGeometry: [
        'radiusTop',
        'radiusBottom',
        'height',
        'radialSegments',
        'heightSegments',
        'openEnded',
        'thetaStart',
        'thetaLength',
    ],
    DodecahedronGeometry: ['radius', 'detail'],
    EdgesGeometry: ['width', 'height', 'depth'],
    ExtrudeGeometry: [
        'width',
        'length',
        'depth',
        'steps',
        'bevelEnabled',
        'bevelThickness',
        'bevelSize',
        'bevelSegments',
        'bevelSegments',
        'curveSegments',
        'paths',
    ],
    IcosahedronGeometry: ['radius', 'detail'],
} as Record<GeometryType, string[]>;
export const fieldsGeometryTypeMap = Object.entries(filterMap).reduce<
    Record<string, string[]>
>((a, [type, fields]) => {
    fields.forEach((k) => {
        a[k] = a[k] || [];
        a[k].push(type);
    });
    return a;
}, {});
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
            {
                path: 'geometryType',
                defaultValue: 'BoxGeometry',
                config: {
                    type: 'select',
                    cursorGj: null as unknown,
                    props: {
                        options: optionsGeometry.map((e: any) => ({
                            ...e,
                            label: e.name || e.label,
                        })),
                    },
                } as AttrsItemChildConfig,
            },
            { path: 'radius', defaultValue: 1 },
            { path: 'length', defaultValue: 1 },
            { path: 'capSegments', defaultValue: 4 },
            { path: 'radialSegments', defaultValue: 8 },
            { path: 'width' },
            { path: 'height' },
            { path: 'depth' },
            { path: 'widthSegments', defaultValue: 1 },
            { path: 'heightSegments', defaultValue: 1 },
            { path: 'depthSegments', defaultValue: 1 },
            { path: 'segments', defaultValue: 32 },
            { path: 'detail', defaultValue: 0 },
            { path: 'radiusTop', defaultValue: 1 },
            { path: 'radiusBottom', defaultValue: 1 },
            { path: 'steps', defaultValue: 1 },
            { path: 'curveSegments', defaultValue: 12 },
            { path: 'bevelThickness', defaultValue: 0.2 },
            { path: 'bevelSize', defaultValue: 0.1 },
            { path: 'bevelOffset', defaultValue: 0 },
            { path: 'bevelSegments', defaultValue: 3 },
            {
                path: 'paths',
                base: {
                    showMore: true,
                    more(): VNode {
                        return h(BasisAttrsPathsPreview, {
                            edit: true,
                        });
                    },
                } as AttrsItemChild,
                config: {
                    cursorGj: null,
                    type: 'VNode',
                    renderVNode: h(BasisAttrsPathsPreview, {
                        edit: false,
                    }),
                },
            },
            {
                path: 'bevelEnabled',
                defaultValue: true,
                config: { type: 'switch' },
            },
            {
                path: 'openEnded',
                defaultValue: false,
                config: { type: 'switch' },
            },
            {
                path: 'thetaStart',
                defaultValue: 0,
                config: {
                    cursorGj: 0.001,
                    props: {
                        step: 0.01,
                        min: 0,
                        max: 2 * Math.PI,
                    },
                },
            },
            {
                path: 'thetaLength',
                defaultValue: 2 * Math.PI,
                config: {
                    cursorGj: 0.001,
                    props: {
                        step: 0.01,
                        min: 0,
                        max: 2 * Math.PI,
                    },
                },
            },
            { path: 'Mesh.position.x' },
            { path: 'Mesh.position.y' },
            { path: 'Mesh.position.z' },
            { path: 'Mesh.rotation.x' },
            { path: 'Mesh.rotation.y' },
            { path: 'Mesh.rotation.z' },
            { path: 'Mesh.scale.x' },
            { path: 'Mesh.scale.y' },
            { path: 'Mesh.scale.z' },
            {
                path: 'Mesh.castShadow',
                config: { type: 'switch' },
                defaultValue: true,
            },
            {
                path: 'Mesh.receiveShadow',
                config: { type: 'switch' },
                defaultValue: true,
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
                ...(label?.base || {}),
                filter() {
                    if (
                        typeof _get(label?.base || {}, 'filter') === 'function'
                    ) {
                        return label?.base?.filter?.call?.(this);
                    }
                    if (
                        fieldsGeometryTypeMap[_label] &&
                        fieldsGeometryTypeMap[_label].length > 0
                    ) {
                        const geometryType =
                            this.layerActiveGetters.geometryType ||
                            'BoxGeometry';
                        return fieldsGeometryTypeMap[_label].includes(
                            geometryType
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
