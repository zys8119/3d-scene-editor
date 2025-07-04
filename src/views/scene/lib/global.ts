import { Object3D } from 'three';
import { BaseThreeClass } from 'naive-ui';
import useStore3d from '@/store/modules/3d';
import { Intersection } from 'three/src/core/Raycaster';
import { Vector3 } from 'three/src/math/Vector3';
import { Vector2 } from 'three/src/math/Vector2';
import { LightType, optionsLightMap } from '@/store/modules/3d/0-globalAttrs';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';

const config = use3DConfig();
const { Shift } = useMagicKeys({
    // onEventFired(e) {
    //     console.log(e.code);
    // },
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
    listener?.(objectFilters[0]?.object as any, objectFilters as any, {
        event: e,
        mouse: mouse as any,
        intersects: intersects as any,
        point: point,
    });
};
export type GlobalOptions = {
    // 物体鼠标右键
    objectRightButtonCallback(object: Object3D, event: MouseEvent): void;
};
/**
 * 全局初始化
 * @param three
 */
export function use3DGlobalInit(
    three: BaseThreeClass,
    options: GlobalOptions = {} as GlobalOptions
) {
    const { THREE, scene, controls, camera } = three;
    RectAreaLightUniformsLib.init();
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
    const cameraHelper = new THREE.CameraHelper(camera);
    scene.add(cameraHelper);
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
    const createLight = async () => {
        // 灯光
        const lightName = 'light';
        const lightCache = scene.getObjectByName(lightName);
        if (lightCache) {
            scene.remove(lightCache);
        }
        const light =
            optionsLightMap[config.value.global.light.type as LightType].box(
                three
            );
        light.name = lightName;
        light.visible = config.value.global.light.visible;
        scene.add(light as any);
        // 灯光帮助
        const lightHelperName = 'lightHelper';
        const lightHelperCache = scene.getObjectByName(lightHelperName);
        if (lightHelperCache) {
            scene.remove(lightHelperCache);
        }
        if (['DirectionalLight'].includes(config.value.global.light.type)) {
            const lightHelper = new THREE.DirectionalLightHelper(light as any);
            lightHelper.name = lightHelperName;
            lightHelper.visible = config.value.global.lightHelper.visible;
            scene.add(lightHelper);
        }
        // 平面灯光帮助
        const rectAreaLightHelperName = 'rectAreaLightHelper';
        const rectAreaLightHelperCache = scene.getObjectByName(
            rectAreaLightHelperName
        );
        if (rectAreaLightHelperCache) {
            scene.remove(rectAreaLightHelperCache);
        }
        if (['RectAreaLight'].includes(config.value.global.light.type)) {
            const rectLightHelper = new RectAreaLightHelper(light as any);
            scene.add(rectLightHelper as any);
        }
    };
    const watchEffectCallBack = () => {
        //todo 灯光配置
        if (config.value.global.light.type) {
            createLight();
        }
        //todo 相机配置
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
        cameraHelper.visible = config.value.global.cameraHelper.visible;
        //todo 网格配置
        gridMeshs.forEach((gridM, k) => {
            gridM.rotation.set(
                k === 0
                    ? config.value.grid.x
                    : Math.PI * 2 - config.value.grid.x,
                config.value.grid.y,
                config.value.grid.z
            );
        });
        //todo 转换配置
        transform.setMode(config.value.transform.mode || transform.getMode());
        config.value.transform.mode = transform.getMode();
    };

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

    watchEffect(watchEffectCallBack);
    // 事件注册
    // todo 鼠标创建几何体配置
    const boxW = 1;
    const boxH = 1;
    const boxD = 1;
    let msX = 0;
    let msY = 0;
    let msZ = 0;
    const m = new THREE.MeshLambertMaterial({
        color: new THREE.Color('#478cf9'),
        transparent: true,
        // map: new THREE.TextureLoader().load(
        //     'http://localhost:3000/%E5%9B%BE%E7%89%87:%E8%A7%86%E9%A2%91/%E9%98%BF%E7%8B%B8%20cosplay%E7%BE%8E%E5%A5%B34k%E9%AB%98%E6%B8%85%E5%A3%81%E7%BA%B8_%E5%BD%BC%E5%B2%B8%E5%9B%BE%E7%BD%91.jpg'
        // ),
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

    const eventsMap = {
        dblclick(object) {
            if (object) {
                if (store.isToolSelect) {
                    store.setLayerActiveId(parseName(object.name).id, true);
                    transform.attach(object as any);
                    window.$draw3dSceneEditorObject3DClick = true;
                    setTimeout(() => {
                        window.$draw3dSceneEditorObject3DClick = false;
                    }, 500);
                }
            }
        },
        mousedown(object, ints, { point, event }) {
            if (point) {
                if (
                    !store.isToolSelect &&
                    !['play'].includes(store.toolsActive as string)
                ) {
                    ms.name = store.toolsActive as any;
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
                } else {
                    if (object && event.button === 2) {
                        // 鼠标右键
                        options.objectRightButtonCallback?.(object, event);
                    }
                }
            }
            if (!object) {
                // store.setLayerActiveId(null, true);
            }
        },
        mouseup() {
            if (!store.isToolSelect) {
                msX = 0;
                msY = 0;
                msZ = 0;
                store.setToolActive('select');
                if (ms.visible) {
                    $data.createLayers(ms as any);
                }
                ms.visible = false;
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
                            if (store.toolsActive === 'circle') {
                                const radius =
                                    Math.max(
                                        Math.abs(boxW + offsetW),
                                        Math.abs(boxH + offsetZ)
                                    ) / 2;
                                ms.geometry = new THREE.CylinderGeometry(
                                    radius,
                                    radius,
                                    boxD
                                ) as any;
                                ms.rotation.x = 0;
                            } else {
                                ms.geometry = new THREE.BoxGeometry(
                                    Math.abs(boxW + offsetW),
                                    Math.abs(boxH + offsetZ),
                                    boxD
                                );
                            }
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
                } else {
                    ms.visible = false;
                    mousePosMesh.visible = false;
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
    window.addEventListener('mouseup', eventsMap.mouseup);
    // controls.listenToKeyEvents(window);
}
