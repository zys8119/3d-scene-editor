import { Attrs, AttrsItemChildConfig } from '@/store/modules/3d/attrs';
import { get as _get, set as _set, merge as _merge, get } from 'lodash';
import { BaseThreeClass } from 'naive-ui';
import { Light } from 'three';
const config = use3DConfig();
export const parseColor = (color: string) => {
    let opacity = 1;
    if (/#/.test(color)) {
        opacity = parseInt(`0x${color.replace(/#.{6}/, '') || 'ff'}`, 16);
        color = color.replace(/(#.{6})(.*)/, '$1');
        opacity = isNaN(opacity) ? 255 : opacity;
        opacity = opacity / 1 / 255;
    }
    if (/hsla|rgba/.test(color)) {
        opacity = Number(get(/(?:.*,\s*(.*)\)$)/.exec(color), '[1]', '1'));
        color = color.replace(new RegExp(`,\\s*${opacity}\\)$`), ')');
    }
    return {
        color,
        opacity,
    };
};
const createValue = (keyPath: string, defaultValue: any = 0) => {
    return computed({
        get() {
            return _get(config.value.global, keyPath, defaultValue);
        },
        set(v) {
            _set(config.value.global, keyPath, v);
        },
    });
};
export const optionsLight = [
    {
        label: 'AmbientLight',
        value: 'AmbientLight',
        name: '环境光',
        box({ THREE }: BaseThreeClass) {
            const light = new THREE.AmbientLight(
                new THREE.Color(
                    parseColor(_get(config.value.global.light, 'color')).color
                ),
                _get(config.value.global.light, 'intensity')
            );
            return light;
        },
    },
    {
        label: 'AmbientLightProbe',
        value: 'AmbientLightProbe',
        name: '环境光探针',
        box({ THREE }: BaseThreeClass) {
            const light = new THREE.AmbientLightProbe(
                new THREE.Color(
                    parseColor(_get(config.value.global.light, 'color')).color
                ),
                _get(config.value.global.light, 'intensity')
            );
            return light;
        },
    },
    {
        label: 'HemisphereLight',
        value: 'HemisphereLight',
        name: '半球光',
        box({ THREE }: BaseThreeClass) {
            const light = new THREE.HemisphereLight(
                new THREE.Color(
                    parseColor(_get(config.value.global.light, 'color')).color
                ),
                new THREE.Color(
                    parseColor(
                        _get(config.value.global.light, 'groundColor')
                    ).color
                ),
                _get(config.value.global.light, 'intensity')
            );
            light.position.set(
                get(config.value.global.light, 'position.x', 0),
                get(config.value.global.light, 'position.y', 0),
                get(config.value.global.light, 'position.z', 0)
            );
            return light;
        },
    },
    {
        label: 'DirectionalLight',
        value: 'DirectionalLight',
        name: '平行光',
        box({ THREE }: BaseThreeClass) {
            const light = new THREE.DirectionalLight(
                new THREE.Color(
                    parseColor(_get(config.value.global.light, 'color')).color
                ),
                _get(config.value.global.light, 'intensity')
            );
            const d = 1000;
            light.shadow.camera.left = -d;
            light.shadow.camera.right = d;
            light.shadow.camera.top = d;
            light.shadow.camera.bottom = -d;
            light.shadow.camera.near = 0.1;
            light.shadow.camera.far = 10000;
            light.castShadow = get(
                config.value.global.light,
                'castShadow',
                true
            ); // 投射阴影
            light.position.set(
                get(config.value.global.light, 'position.x', 0),
                get(config.value.global.light, 'position.y', 0),
                get(config.value.global.light, 'position.z', 0)
            );
            return light;
        },
    },
    {
        label: 'HemisphereLightProbe',
        value: 'HemisphereLightProbe',
        name: '半球光探针',
        box({ THREE }: BaseThreeClass) {
            const light = new THREE.HemisphereLightProbe(
                new THREE.Color(
                    parseColor(_get(config.value.global.light, 'color')).color
                ),
                new THREE.Color(
                    parseColor(
                        _get(config.value.global.light, 'groundColor')
                    ).color
                ),
                _get(config.value.global.light, 'intensity')
            );
            return light;
        },
    },
    {
        label: 'Light',
        value: 'Light',
        name: '光源Light',
        box({ THREE }: BaseThreeClass) {
            const light = new THREE.Light(
                new THREE.Color(
                    parseColor(_get(config.value.global.light, 'color')).color
                ) as any,
                _get(config.value.global.light, 'intensity')
            );
            return light;
        },
    },
    {
        label: 'PointLight',
        value: 'PointLight',
        name: '点光源',
        box({ THREE }: BaseThreeClass) {
            const light = new THREE.PointLight(
                new THREE.Color(
                    parseColor(_get(config.value.global.light, 'color')).color
                ) as any,
                _get(config.value.global.light, 'intensity'),
                _get(config.value.global.light, 'distance', 0),
                _get(config.value.global.light, 'decay', 2)
            );
            light.position.set(
                get(config.value.global.light, 'position.x', 0),
                get(config.value.global.light, 'position.y', 0),
                get(config.value.global.light, 'position.z', 0)
            );
            return light;
        },
    },
    {
        label: 'RectAreaLight',
        value: 'RectAreaLight',
        name: '平面光光源',
        box({ THREE }: BaseThreeClass) {
            const light = new THREE.RectAreaLight(
                new THREE.Color(
                    parseColor(_get(config.value.global.light, 'color')).color
                ) as any,
                _get(config.value.global.light, 'intensity'),
                _get(config.value.global.light, 'width', 2),
                _get(config.value.global.light, 'height', 2)
            );
            light.position.set(
                get(config.value.global.light, 'position.x', 0),
                get(config.value.global.light, 'position.y', 0),
                get(config.value.global.light, 'position.z', 0)
            );

            light.lookAt(
                get(config.value.global.light, 'lookAt.x', 0),
                get(config.value.global.light, 'lookAt.y', 0),
                get(config.value.global.light, 'lookAt.z', 0)
            );
            return light;
        },
    },
    {
        label: 'SpotLight',
        value: 'SpotLight',
        name: '聚光灯',
        box({ THREE }: BaseThreeClass) {
            const light = new THREE.SpotLight(
                new THREE.Color(
                    parseColor(_get(config.value.global.light, 'color')).color
                ) as any,
                _get(config.value.global.light, 'intensity'),
                _get(config.value.global.light, 'distance', 0),
                _get(config.value.global.light, 'angle', Math.PI / 3),
                _get(config.value.global.light, 'penumbra', 0),
                _get(config.value.global.light, 'decay', 2)
            );
            light.position.set(
                get(config.value.global.light, 'position.x', 0),
                get(config.value.global.light, 'position.y', 0),
                get(config.value.global.light, 'position.z', 0)
            );
            return light;
        },
    },
] as const;
export type OptionsLightItemType = Omit<
    (typeof optionsLight)[number],
    'box'
> & {
    box(three: BaseThreeClass): Light;
};
export type LightType = OptionsLightItemType extends {
    value: infer A;
}
    ? A
    : string;
export const filterMap = {
    DirectionalLight: ['x', 'y', 'z'],
    PointLight: ['x', 'y', 'z', 'distance', 'decay'],
    SpotLight: ['x', 'y', 'z', 'distance', 'decay', 'angle', 'penumbra'],
    HemisphereLight: ['groundColor', 'x', 'y', 'z'],
    HemisphereLightProbe: ['groundColor'],
    RectAreaLight: [
        'width',
        'height',
        'lookAt.x',
        'lookAt.y',
        'lookAt.z',
        'x',
        'y',
        'z',
    ],
} as Record<LightType, string[]>;
export const fieldsLightTypeMap = Object.entries(filterMap).reduce<
    Record<string, string[]>
>((a, [type, fields]) => {
    fields.forEach((k) => {
        a[k] = a[k] || [];
        a[k].push(type);
    });
    return a;
}, {});
export type OptionsLightMapType = Record<LightType, OptionsLightItemType>;
export const optionsLightMap = optionsLight.reduce<OptionsLightMapType>(
    (a: any, b: any) => {
        a[b.label] = b;
        return a;
    },
    {} as any
);
export default [
    {
        title: 'Global',
        show: false,
        child: [
            {
                path: 'light.type',
                defaultValue: 'DirectionalLight',
                config: {
                    type: 'select',
                    cursorGj: null as unknown,
                    props: {
                        filterable: true,
                        options: optionsLight.map((e: any) => ({
                            ...e,
                            label: e.name || e.label,
                        })),
                    },
                } as AttrsItemChildConfig,
            },
            {
                path: 'light.visible',
                config: {
                    type: 'switch',
                } as AttrsItemChildConfig,
                defaultValue: true,
            },
            {
                label: 'showLightHelper',
                path: 'lightHelper.visible',
                config: {
                    type: 'switch',
                } as AttrsItemChildConfig,
                defaultValue: false,
            },
            {
                label: 'showCameraHelper',
                path: 'cameraHelper.visible',
                config: {
                    type: 'switch',
                } as AttrsItemChildConfig,
                defaultValue: false,
            },
            {
                label: 'castShadow',
                path: 'light.castShadow',
                config: {
                    type: 'switch',
                } as AttrsItemChildConfig,
                defaultValue: true,
            },
            {
                label: 'color',
                path: 'light.color',
                config: {
                    type: 'color',
                },
                defaultValue: '#ffffff',
            },
            {
                label: 'groundColor',
                path: 'light.groundColor',
                config: {
                    type: 'color',
                },
                defaultValue: '#ffffff',
            },
            {
                label: 'intensity',
                path: 'light.intensity',
                config: {
                    cursorGj: 0.001,
                    props: {
                        step: 0.01,
                    },
                },
                defaultValue: 1,
            },
            { label: 'x', path: 'light.position.x', defaultValue: 1 },
            { label: 'y', path: 'light.position.y', defaultValue: 1 },
            { label: 'z', path: 'light.position.z', defaultValue: 1 },
            { label: 'distance', path: 'light.distance', defaultValue: 0 },
            { label: 'decay', path: 'light.decay', defaultValue: 2 },
            { label: 'width', path: 'light.width', defaultValue: 100 },
            { label: 'height', path: 'light.height', defaultValue: 100 },
            { label: 'lookAt.x', path: 'lookAt.x', defaultValue: 0 },
            { label: 'lookAt.y', path: 'lookAt.y', defaultValue: 0 },
            { label: 'lookAt.z', path: 'lookAt.z', defaultValue: 0 },
            {
                label: 'angle',
                path: 'angle',
                defaultValue: Math.PI / 3,
                config: {
                    cursorGj: 0.001,
                    props: {
                        step: 0.01,
                        min: 0,
                        max: 2 * Math.PI,
                    },
                },
            },
            { label: 'penumbra', path: 'penumbra', defaultValue: 0 },
        ].map((label: any) => {
            const isObject =
                Object.prototype.toString.call(label) === '[object Object]';
            const _label = isObject ? label.path : label;
            const defaultValue = isObject ? label.defaultValue : 0;
            const labelStr = isObject ? label.label || _label : _label;
            return {
                label: labelStr.replace(/^./, (m: string) => m.toUpperCase()),
                ...(label?.base || {}),
                filter() {
                    if (
                        typeof _get(label?.base || {}, 'filter') === 'function'
                    ) {
                        return label?.base?.filter?.call?.(this);
                    }
                    if (
                        fieldsLightTypeMap[labelStr] &&
                        fieldsLightTypeMap[labelStr].length > 0
                    ) {
                        const LightType =
                            (config.value.global.light.type as LightType) ||
                            'DirectionalLight';
                        return fieldsLightTypeMap[labelStr].includes(LightType);
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
