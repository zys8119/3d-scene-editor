const config = {
    // 相机配置
    camera: {
        x: 400,
        y: 400,
        z: 400,
        step: 0.01,
        max: 1000,
        min: 1,
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
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
