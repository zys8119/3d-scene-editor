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
export const optionsGeometry = [
    { label: 'BoxGeometry', value: 'BoxGeometry' },
    { label: 'CapsuleGeometry', value: 'CapsuleGeometry' },
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
