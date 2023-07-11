import { LightType } from '@/store/modules/3d/0-globalAttrs';
const config = {
    global: {
        light: {
            visible: true,
            type: 'DirectionalLight' as LightType,
            position: {
                x: 1000,
                y: 1000,
                z: 1000,
            },
            lookAt: {
                x: 0,
                y: 0,
                z: 0,
            },
            color: '#ffffff',
            groundColor: '#ffffff',
            intensity: 1,
            distance: 0,
            decay: 2,
            angle: Math.PI / 3,
            penumbra: 0,
            width: 100,
            height: 100,
            castShadow: true,
        },
        lightHelper: {
            visible: false,
        },
        cameraHelper: {
            visible: false,
        },
    } as any,
    // 相机配置
    camera: {
        x: 400,
        y: 400,
        z: 400,
        step: 0.01,
        max: 1000,
        min: 1,
        rotation: {
            x: -0.7853981633974483,
            y: 0.6154797086703874,
            z: 0.5235987755982989,
        },
        zoom: 1,
        scale: {
            x: 1,
            y: 1,
            z: 1,
        },
    },
    grid: {
        x: Math.PI * 0.5,
        y: 0,
        z: 0,
    },
    statsShow: false,
    transform: {
        mode: null as any,
    },
};
const configRef = ref(config);
/**
 * 全局配置
 */
export function use3DConfig() {
    return configRef;
}

export type Use3DConfigType = typeof config;
