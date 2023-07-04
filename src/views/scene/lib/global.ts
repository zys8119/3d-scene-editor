import { CameraHelper, DirectionalLightHelper } from 'three';
import { BaseThreeClass } from 'naive-ui';
import onEvent from 'three-onevent-esm';
const config = use3DConfig();
const { Shift } = useMagicKeys({
    onEventFired(e) {
        console.log(e.code);
    },
});
/**
 * 全局初始化
 * @param three
 */
export function use3DGlobalInit(three: BaseThreeClass) {
    const { THREE, scene, controls, camera } = three;
    // 初始化事件交互
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    new onEvent(three.scene, three.camera, three.vm.exposed.canvas.value);
    // 初始化变形设置
    const transform = ((three as any).transform = three.transformControls());
    // 相机设置
    camera.position.x = config.value.camera.x;
    camera.position.y = config.value.camera.y;
    camera.position.z = config.value.camera.z;
    camera.rotation.x = config.value.camera.rotation.x;
    camera.rotation.y = config.value.camera.rotation.y;
    camera.rotation.z = config.value.camera.rotation.z;
    camera.scale.x = config.value.camera.scale.x;
    camera.scale.y = config.value.camera.scale.y;
    camera.scale.z = config.value.camera.scale.z;
    camera.zoom = config.value.camera.zoom;
    // 关闭灯光帮助
    const lightHelper: DirectionalLightHelper =
        three.lightHelper as DirectionalLightHelper;
    lightHelper.visible = false;
    // 关闭相机帮助
    const cameraHelper: CameraHelper = three.cameraHelper as CameraHelper;
    cameraHelper.visible = false;
    // 创建网格
    const gridSize = 10000; // 网格大小
    const gridSpacing = 50; // 网格间距
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
    // 控制器
    controls.addEventListener('change', () => {
        config.value.camera.x = three.camera.position.x;
        config.value.camera.y = three.camera.position.y;
        config.value.camera.z = three.camera.position.z;
        config.value.camera.rotation.x = three.camera.rotation.x;
        config.value.camera.rotation.y = three.camera.rotation.y;
        config.value.camera.rotation.z = three.camera.rotation.z;
        config.value.camera.zoom = three.camera.zoom;
        config.value.camera.scale.x = three.camera.scale.x;
        config.value.camera.scale.y = three.camera.scale.y;
        config.value.camera.scale.z = three.camera.scale.z;
    });
    watchEffect(() => {
        if (Shift.value) {
            controls.rotateSpeed = 5;
        } else {
            controls.rotateSpeed = 1;
        }
    });
    watchEffect(() => {
        camera.scale.set(
            config.value.camera.scale.x,
            config.value.camera.scale.y,
            config.value.camera.scale.z
        );
        camera.rotation.set(
            config.value.camera.rotation.x,
            config.value.camera.rotation.y,
            config.value.camera.rotation.z
        );
        camera.position.set(
            config.value.camera.x,
            config.value.camera.y,
            config.value.camera.z
        );
        camera.zoom = config.value.camera.zoom;
        gridMesh.rotation.set(
            config.value.grid.x,
            config.value.grid.y,
            config.value.grid.z
        );
        transform.setMode(config.value.transform.mode || transform.getMode());
        config.value.transform.mode = transform.getMode();
    });
    window.addEventListener('click', () => {
        if (!window.$draw3dSceneEditorObject3DClick) {
            window.store.store3d.setLayerActiveId(null, true);
        }
    });
    // controls.listenToKeyEvents(window);
}
