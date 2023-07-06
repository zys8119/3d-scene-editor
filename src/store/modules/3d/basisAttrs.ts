import {
    Attrs,
    AttrsItemChild,
    AttrsItemChildConfig,
} from '@/store/modules/3d/attrs';
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
];
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
            {
                path: 'radius',
                defaultValue: 1,
                base: {
                    filter() {
                        return ['CapsuleGeometry'].includes(
                            this.layerActiveGetters.geometryType
                        );
                    },
                } as AttrsItemChild,
            },
            {
                path: 'length',
                defaultValue: 1,
                base: {
                    filter() {
                        return ['CapsuleGeometry'].includes(
                            this.layerActiveGetters.geometryType
                        );
                    },
                } as AttrsItemChild,
            },
            {
                path: 'capSegments',
                defaultValue: 4,
                base: {
                    filter() {
                        return ['CapsuleGeometry'].includes(
                            this.layerActiveGetters.geometryType
                        );
                    },
                } as AttrsItemChild,
            },
            {
                path: 'radialSegments',
                defaultValue: 8,
                base: {
                    filter() {
                        return ['CapsuleGeometry'].includes(
                            this.layerActiveGetters.geometryType
                        );
                    },
                } as AttrsItemChild,
            },
            {
                path: 'width',
                base: {
                    filter() {
                        return ['BoxGeometry', undefined, null].includes(
                            this.layerActiveGetters.geometryType
                        );
                    },
                } as AttrsItemChild,
            },
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
                ...(label.base || {}),
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
