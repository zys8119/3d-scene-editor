import { Attrs, AttrsItemChildConfig } from '@/store/modules/3d/attrs';
import { get as _get, set as _set, merge as _merge } from 'lodash';
import { BufferGeometry } from 'three/src/core/BufferGeometry';
import { Layer } from '@/store/modules/3d';
import { BaseThreeClass } from 'naive-ui';
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
        box(three: BaseThreeClass, layer: Layer): BufferGeometry {
            const shape = new three.THREE.Shape();
            shape.moveTo(0, 0);
            shape.lineTo(0, layer.width as number);
            shape.lineTo(layer.length as number, layer.width as number);
            shape.lineTo(layer.length as number, 0);
            shape.lineTo(0, 0);
            const extrudeSettings = {
                steps: 200,
                depth: 16,
                bevelEnabled: true,
                bevelThickness: 1,
                bevelSize: 1,
                bevelOffset: 0,
                bevelSegments: 1,
            };
            return new three.THREE.ExtrudeGeometry(shape, extrudeSettings);
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
    ExtrudeGeometry: ['width', 'length'],
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
                    props: {
                        options: optionsGeometry,
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
