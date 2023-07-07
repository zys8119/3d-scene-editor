import { CameraHelper, DirectionalLightHelper, Object3D } from 'three';
import { BaseThreeClass } from 'naive-ui';
import useStore3d from '@/store/modules/3d';
import { Intersection } from 'three/src/core/Raycaster';
const config = use3DConfig();
const { Shift } = useMagicKeys({
    onEventFired(e) {
        console.log(e.code);
    },
});
const store = useStore3d();
export const parseName = (name: string) => {
    const [layerBaseName, layerId, layerName] = name.split('-');
    return {
        layerBaseName,
        id: Number(layerId),
        name: layerName,
    };
};

export interface Object3DEventListener {
    (): void;
    (object: Object3D): void;
    (object: Object3D, intersects: Array<Intersection<Object3D>>): void;
    (
        object: Object3D,
        intersects: Array<Intersection<Object3D>>,
        event: MouseEvent
    ): void;
}
export type Object3DEventMapType = Record<
    keyof HTMLElementEventMap,
    Object3DEventListener
>;
export const listenerCallback = (
    three: BaseThreeClass,
    listener: Object3DEventListener,
    e: MouseEvent
) => {
    const raycaster = new three.THREE.Raycaster();
    const mouse = new three.THREE.Vector2();
    mouse.x = (e.clientX / three.renderer.domElement.clientWidth) * 2 - 1;
    mouse.y = -((e.clientY / three.renderer.domElement.clientHeight) * 2) + 1;
    raycaster.setFromCamera(mouse, three.camera);
    const intersects = raycaster
        .intersectObjects(three.scene.children, true)
        .map((e) => e.object)
        .filter((e) => store.layerBaseNameReg.test(e.name));
    const object = intersects[0];
    listener?.(object, intersects as any, e);
};
/**
 * 全局初始化
 * @param three
 */
export function use3DGlobalInit(three: BaseThreeClass) {
    const { THREE, scene, controls, camera } = three;
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
    // 事件注册
    const eventsMap = {
        dblclick(object) {
            if (object) {
                store.setLayerActiveId(parseName(object.name).id, true);
                transform.attach(object);
                window.$draw3dSceneEditorObject3DClick = true;
                setTimeout(() => {
                    window.$draw3dSceneEditorObject3DClick = false;
                }, 500);
            }
        },
        mousemove() {
            console.log(111);
        },
    } as Object3DEventMapType;
    Object.entries(eventsMap).forEach(([eventType, listener]) => {
        three.renderer.domElement.removeEventListener(
            eventType as any,
            listenerCallback.bind(null, three, listener)
        );
        three.renderer.domElement.addEventListener(
            eventType as any,
            listenerCallback.bind(null, three, listener)
        );
    });
    window.addEventListener('click', () => {
        if (!window.$draw3dSceneEditorObject3DClick) {
            // window.store.store3d.setLayerActiveId(null, true);
        }
    });
    // controls.listenToKeyEvents(window);
}
