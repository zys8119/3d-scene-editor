import { CameraHelper, DirectionalLightHelper, Object3D } from 'three';
import { BaseThreeClass } from 'naive-ui';
import useStore3d from '@/store/modules/3d';
import { Intersection } from 'three/src/core/Raycaster';
import { Vector3 } from 'three/src/math/Vector3';
import { Vector2 } from 'three/src/math/Vector2';
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
    (object: Object3D | null | undefined): void;
    (
        object: Object3D | null | undefined,
        intersects: Array<Intersection<Object3D>>
    ): void;
    (
        object: Object3D | null | undefined,
        intersects: Array<Intersection<Object3D>>,
        event: {
            event: MouseEvent;
            mouse: Vector2;
            intersects: Array<Intersection<Object3D>>;
            point: Vector3 | null | undefined;
        }
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
    const raycaster = new three.THREE.Raycaster(
        new three.THREE.Vector3(
            config.value.camera.x,
            config.value.camera.y,
            config.value.camera.z
        ),
        new three.THREE.Vector3(
            config.value.camera.x,
            config.value.camera.y,
            config.value.camera.z
        )
    );
    const mouse = new three.THREE.Vector2();
    mouse.x = (e.clientX / three.renderer.domElement.clientWidth) * 2 - 1;
    mouse.y = -((e.clientY / three.renderer.domElement.clientHeight) * 2) + 1;
    raycaster.setFromCamera(mouse, three.camera);
    const intersects = raycaster.intersectObjects(three.scene.children, true);
    let point = null;
    const objectFilters = intersects.filter((e) => {
        if (e.object.name === 'sceneGridMesh') {
            point = e.point;
        }
        return store.layerBaseNameReg.test(e.object.name);
    });
    listener?.(objectFilters[0]?.object, objectFilters as any, {
        event: e,
        mouse,
        intersects,
        point: point,
    });
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
    const createGrid = (bool: boolean) => {
        const gridSize = 1; // 网格大小
        const gridSpacing = 200; // 网格间距
        const gridScale = 8000; // 网格放大倍数
        const gridColor = '#bebebe'; // 网格颜色
        const gridGeometry = new THREE.PlaneGeometry(
            gridSize,
            gridSize,
            gridSpacing,
            gridSpacing
        );
        const gridMaterial = new THREE.MeshBasicMaterial({
            color: gridColor,
            wireframe: true,
        });
        const gridMesh = new THREE.Mesh(gridGeometry, gridMaterial);
        gridMesh.name = 'sceneGridMesh';
        gridMesh.rotation.set(
            bool ? config.value.grid.x : Math.PI * 2 - config.value.grid.x,
            config.value.grid.y,
            config.value.grid.z
        );
        gridMesh.scale.set(gridScale, gridScale, 1);
        scene.add(gridMesh);
        return gridMesh;
    };
    // 防止射线无法照射另一面，所以创建两次
    const gridMeshs = [
        // 正向
        createGrid(true),
        // 反向
        createGrid(false),
    ];

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
        // 是否启用控制器
        controls.enabled = store.isToolSelect;
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
        gridMeshs.forEach((gridM, k) => {
            gridM.rotation.set(
                k === 0
                    ? config.value.grid.x
                    : Math.PI * 2 - config.value.grid.x,
                config.value.grid.y,
                config.value.grid.z
            );
        });

        transform.setMode(config.value.transform.mode || transform.getMode());
        config.value.transform.mode = transform.getMode();
    });
    // 事件注册
    // todo 鼠标创建几何体配置
    const boxW = 1;
    const boxH = 1;
    const boxD = 1;
    let msX = 0;
    let msY = 0;
    let msZ = 0;
    const m = new THREE.MeshLambertMaterial({
        color: new THREE.Color('#f00'),
        transparent: true,
        map: new THREE.TextureLoader().load(
            'http://localhost:3000/%E5%9B%BE%E7%89%87:%E8%A7%86%E9%A2%91/%E9%98%BF%E7%8B%B8%20cosplay%E7%BE%8E%E5%A5%B34k%E9%AB%98%E6%B8%85%E5%A3%81%E7%BA%B8_%E5%BD%BC%E5%B2%B8%E5%9B%BE%E7%BD%91.jpg'
        ),
        // alphaMap:new THREE.TextureLoader().load('http://localhost:3000/%E5%9B%BE%E7%89%87:%E8%A7%86%E9%A2%91/%E9%98%BF%E7%8B%B8%20cosplay%E7%BE%8E%E5%A5%B34k%E9%AB%98%E6%B8%85%E5%A3%81%E7%BA%B8_%E5%BD%BC%E5%B2%B8%E5%9B%BE%E7%BD%91.jpg'),
    });
    const ms = new THREE.Mesh(
        new THREE.BoxGeometry(boxW - 1, boxH - 1, boxD - 1),
        m
    );
    m.needsUpdate = true;
    ms.visible = false;
    scene.add(ms);
    // todo 鼠标标记位置
    const mousePosBox = new THREE.BoxGeometry(100, 100, 1);
    const mousePosMaterial = new THREE.MeshLambertMaterial({
        color: new THREE.Color('#f00'),
        transparent: true,
        opacity: 0.5,
    });
    const mousePosMesh = new THREE.Mesh(mousePosBox, mousePosMaterial);
    mousePosMesh.rotateX(Math.PI * 0.5);
    mousePosMesh.visible = false;
    scene.add(mousePosMesh);
    /**
     * todo 创建物体图层
     */
    const createLayers = () => {
        console.log(ms);
    };
    const eventsMap = {
        dblclick(object) {
            if (object) {
                if (!store.isToolSelect) {
                    store.setLayerActiveId(parseName(object.name).id, true);
                    transform.attach(object);
                    window.$draw3dSceneEditorObject3DClick = true;
                    setTimeout(() => {
                        window.$draw3dSceneEditorObject3DClick = false;
                    }, 500);
                }
            }
        },
        mousedown(object, ints, { point }) {
            if (point) {
                if (!store.isToolSelect) {
                    ms.geometry = new THREE.BoxGeometry(
                        boxW - 1,
                        boxH - 1,
                        boxD - 1
                    );
                    ms.visible = true;
                    msX = point.x;
                    msY = point.y;
                    msZ = point.z;
                    ms.position.set(msX, msY, msZ);
                }
            }
        },
        mouseup() {
            if (!store.isToolSelect) {
                msX = 0;
                msY = 0;
                msZ = 0;
                ms.visible = false;
                store.setToolActive('select');
                createLayers();
            }
        },
        mousemove(object, ints, { point }) {
            if (point) {
                if (ms.visible) {
                    if (!store.isToolSelect) {
                        const offsetW = point.x - msX;
                        const offsetH = point.y - msY;
                        const offsetZ = point.z - msZ;
                        if (store.isToolPlane) {
                            ms.rotation.x = -Math.PI * 0.5;
                            ms.position.set(
                                msX + offsetW * 0.5,
                                msY + offsetH * 0.5,
                                msZ + offsetZ * 0.5
                            );
                            ms.geometry = new THREE.BoxGeometry(
                                Math.abs(boxW + offsetW),
                                Math.abs(boxH + offsetZ),
                                boxD
                            );
                        } else {
                            ms.rotation.x = 0;
                            const depth = Math.abs(offsetZ);
                            ms.position.set(
                                msX + offsetW * 0.5,
                                msY + offsetH * 0.5 + Math.abs(depth * 0.5),
                                msZ + offsetZ * 0.5
                            );
                            ms.geometry = new THREE.BoxGeometry(
                                Math.abs(boxW + offsetW),
                                Math.abs(boxH + offsetZ),
                                boxD + depth
                            );
                        }
                    }
                }
                if (!store.isToolSelect) {
                    mousePosMesh.position.set(point.x, point.y, point.z);
                    if (ms.visible) {
                        mousePosMesh.visible = false;
                    } else {
                        mousePosMesh.visible = true;
                    }
                }
            }
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
