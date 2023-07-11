import { Attrs, AttrsItemChildConfig } from '@/store/modules/3d/attrs';
import { get as _get, set as _set, merge as _merge, get } from 'lodash';
import { BufferLight } from 'three/src/core/BufferLight';
import { BaseThreeClass } from 'naive-ui';
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
            return new THREE.AmbientLight(0x404040, 5);
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
            light.target.position.set(-0, -0, -0);
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
] as const;
export type OptionsLightItemType = Omit<
    (typeof optionsLight)[number],
    'box'
> & {
    box(three: BaseThreeClass): BufferLight;
};
export type LightType = OptionsLightItemType extends {
    value: infer A;
}
    ? A
    : string;
export const filterMap = {} as Record<LightType, string[]>;
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
    (a, b) => {
        a[b.label] = b;
        return a;
    },
    {} as any
);
export default [
    {
        title: 'Global',
        show: true,
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
        ].map((label: any) => {
            const isObject =
                Object.prototype.toString.call(label) === '[object Object]';
            const _label = isObject ? label.path : label;
            const defaultValue = isObject ? label.defaultValue : 0;
            return {
                label: isObject
                    ? label.label || _label
                    : _label.replace(/^./, (m: string) => m.toUpperCase()),
                ...(label?.base || {}),
                filter() {
                    if (
                        typeof _get(label?.base || {}, 'filter') === 'function'
                    ) {
                        return label?.base?.filter?.call?.(this);
                    }
                    if (
                        fieldsLightTypeMap[_label] &&
                        fieldsLightTypeMap[_label].length > 0
                    ) {
                        const LightType =
                            this.layerActiveGetters.LightType ||
                            'DirectionalLight';
                        return fieldsLightTypeMap[_label].includes(LightType);
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
