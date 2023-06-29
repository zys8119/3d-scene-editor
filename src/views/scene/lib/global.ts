import { CameraHelper, DirectionalLightHelper } from 'three';
import { BaseThreeClass } from 'naive-ui';
const config = use3DConfig();
/**
 * 全局初始化
 * @param three
 */
export function use3DGlobalInit(three: BaseThreeClass) {
    const { THREE, scene } = three;
    // 关闭灯光帮助
    const lightHelper: DirectionalLightHelper =
        three.lightHelper as DirectionalLightHelper;
    lightHelper.visible = false;
    // 关闭相机帮助
    const cameraHelper: CameraHelper = three.cameraHelper as CameraHelper;
    cameraHelper.visible = false;
    // 创建网格
    const gridSize = 10000; // 网格大小
    const gridSpacing = 30; // 网格间距
    const gridColor = '#bebebe'; // 网格颜色
    const gridGeometry = new THREE.PlaneGeometry(
        gridSize,
        gridSize,
        gridSize / gridSpacing,
        gridSize / gridSpacing
    );
    const gridMaterial = new THREE.MeshBasicMaterial({
        color: gridColor,
        wireframe: true,
    });
    const gridMesh = new THREE.Mesh(gridGeometry, gridMaterial);
    gridMesh.name = 'sceneGridMesh';
    gridMesh.rotation.set(
        config.value.grid.x,
        config.value.grid.y,
        config.value.grid.z
    );
    scene.add(gridMesh);
}
