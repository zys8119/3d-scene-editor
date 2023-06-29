import { Use3DConfigType } from './config';
import { BaseThreeClass } from 'naive-ui';

/**
 * Gui 配置
 */
export function use3DGui() {
    return (config: Use3DConfigType, three: BaseThreeClass) => {
        const step = config.camera.step;
        const cameraFolder = three.gui.addFolder('相机');
        cameraFolder
            .add(config.camera, 'x', config.camera.min, config.camera.max)
            .step(step);
        cameraFolder
            .add(config.camera, 'y', config.camera.min, config.camera.max)
            .step(step);
        cameraFolder
            .add(config.camera, 'z', config.camera.min, config.camera.max)
            .step(step);

        return () => {
            three.camera.position.set(
                config.camera.x,
                config.camera.y,
                config.camera.z
            );
        };
    };
}
