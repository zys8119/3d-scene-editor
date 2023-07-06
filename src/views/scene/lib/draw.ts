import { BaseThreeClass } from 'naive-ui';
import useStore3d, { Layer } from '@/store/modules/3d';
import { get, set } from 'lodash';
import { Object3D } from 'three';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
import { textureField } from '@/store/modules/3d/materialAttrs';
import { BufferGeometry } from 'three/src/core/BufferGeometry';
import {
    optionsGeometry,
    OptionsGeometryItemType,
} from '@/store/modules/3d/basisAttrs';
import { Intersection } from 'three/src/core/Raycaster';
const store = useStore3d();
export interface Object3DEventListener {
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
class Redraw {
    transform: TransformControls;
    constructor(public three: BaseThreeClass) {
        this.transform = (three as any).transform as any;
        this.init();
    }
    async init() {
        await this.draw();
    }
    getName(layer: Layer) {
        return `${store.layerBaseName}-${layer.id}-${layer.name}`;
    }
    parseName(name: string) {
        const [layerBaseName, layerId, layerName] = name.split('-');
        return {
            layerBaseName,
            id: Number(layerId),
            name: layerName,
        };
    }
    parseColor(color: string) {
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
    }
    generateGeometry(layer: Layer): BufferGeometry {
        const geometryType = layer.geometryType || 'BoxGeometry';
        return (
            optionsGeometry.find(
                (e) => e.value === geometryType
            ) as OptionsGeometryItemType
        ).box(this.three, layer);
    }
    async draw() {
        const { THREE, scene } = this.three;
        // 事件注册
        const eventsMap = {
            dblclick: (object) => {
                store.setLayerActiveId(this.parseName(object.name).id, true);
                this.transform.attach(object);
                window.$draw3dSceneEditorObject3DClick = true;
                setTimeout(() => {
                    window.$draw3dSceneEditorObject3DClick = false;
                }, 500);
            },
        } as Object3DEventMapType;
        Object.entries(eventsMap).forEach(([eventType, listener]) => {
            const fn = (e: MouseEvent) => {
                const raycaster = new this.three.THREE.Raycaster();
                const mouse = new this.three.THREE.Vector2();
                mouse.x =
                    (e.clientX / this.three.renderer.domElement.clientWidth) *
                        2 -
                    1;
                mouse.y =
                    -(
                        (e.clientY /
                            this.three.renderer.domElement.clientHeight) *
                        2
                    ) + 1;
                raycaster.setFromCamera(mouse, this.three.camera);
                const intersects = raycaster
                    .intersectObjects(this.three.scene.children, true)
                    .map((e) => e.object)
                    .filter((e) => store.layerBaseNameReg.test(e.name));
                const object = intersects[intersects.length - 1];
                if (object) {
                    listener?.(object, intersects as any, e);
                }
            };
            this.three.renderer.domElement.removeEventListener(
                eventType as any,
                fn
            );
            this.three.renderer.domElement.addEventListener(
                eventType as any,
                fn
            );
        });
        // 清除绘制场景
        await Promise.all(
            store.layers.map(async (layer) => {
                let box = this.generateGeometry(layer);
                const material = new THREE.MeshLambertMaterial();
                material.needsUpdate = true;
                const mesh = new THREE.Mesh(box, material);
                mesh.name = this.getName(layer);
                scene.add(mesh);
                const watchReset = async () => {
                    mesh.geometry.dispose();
                    box = this.generateGeometry(layer);
                    mesh.geometry = box;
                    mesh.castShadow = get(layer, 'Mesh.castShadow', true);
                    mesh.receiveShadow = get(layer, 'Mesh.receiveShadow', true);
                    mesh.position.set(
                        get(layer, 'Mesh.position.x', 0),
                        get(layer, 'Mesh.position.y', 0),
                        get(layer, 'Mesh.position.z', 0)
                    );
                    mesh.rotation.set(
                        get(layer, 'Mesh.rotation.x', 0),
                        get(layer, 'Mesh.rotation.y', 0),
                        get(layer, 'Mesh.rotation.z', 0)
                    );
                    mesh.scale.set(
                        get(layer, 'Mesh.scale.x', 1),
                        get(layer, 'Mesh.scale.y', 1),
                        get(layer, 'Mesh.scale.z', 1)
                    );
                    const materialColor = this.parseColor(
                        get(layer, 'Material.color', '#5f5f5f')
                    );
                    material.color = new THREE.Color(materialColor.color);
                    material.opacity = materialColor.opacity;
                    material.needsUpdate = true;
                    material.setValues({
                        aoMapIntensity: get(
                            layer,
                            'Material.aoMapIntensity',
                            1
                        ),
                        bumpScale: get(layer, 'Material.bumpScale', 1),
                        combine: get(layer, 'Material.combine', 1),
                        displacementScale: get(
                            layer,
                            'Material.displacementScale',
                            1
                        ),
                        displacementBias: get(
                            layer,
                            'Material.displacementScale',
                            0
                        ),
                        emissiveIntensity: get(
                            layer,
                            'Material.emissiveIntensity',
                            1
                        ),
                        lightMapIntensity: get(
                            layer,
                            'Material.lightMapIntensity',
                            1
                        ),
                        reflectivity: get(layer, 'Material.reflectivity', 1),
                        wireframeLinewidth: get(
                            layer,
                            'Material.wireframeLinewidth',
                            1
                        ),
                        refractionRatio: get(
                            layer,
                            'Material.refractionRatio',
                            0.98
                        ),
                        wireframeLinecap: get(
                            layer,
                            'Material.wireframeLinecap',
                            'round'
                        ),
                        wireframeLinejoin: get(
                            layer,
                            'Material.wireframeLinejoin',
                            'round'
                        ),
                        flatShading: get(layer, 'Material.flatShading', false),
                        fog: get(layer, 'Material.fog', true),
                        wireframe: get(layer, 'Material.wireframe', false),
                    });
                    material.emissive = new THREE.Color(
                        this.parseColor(
                            get(layer, 'Material.emissive', '#000000')
                        ).color
                    );
                    material.transparent = true;
                    material.needsUpdate = false;
                    const updateTexture = async (path: string) => {
                        const materialMap = get(layer, path);
                        const keyName: string = (/(?:\.(.*)$)/.exec(path) ||
                            [])[1];
                        if (typeof materialMap === 'string') {
                            if (
                                (material as any)[keyName as any]?.image.src !==
                                materialMap
                            ) {
                                material.needsUpdate = true;
                                const texture = new THREE.TextureLoader().load(
                                    materialMap
                                );
                                material.setValues({
                                    [keyName]: texture,
                                });
                            }
                        } else {
                            material.needsUpdate = true;
                            material.setValues({
                                [keyName]: null,
                            });
                        }
                    };
                    // 更新贴图
                    textureField.forEach((keyName) => {
                        updateTexture(`Material.${keyName}`);
                    });
                };
                watchReset();
                watch(layer, watchReset, { deep: true });
            })
        );
        this.transform.addEventListener('change', () => {
            set(
                store.layerActiveGetters,
                'Mesh.position.x',
                this.transform.object?.position.x
            );
            set(
                store.layerActiveGetters,
                'Mesh.position.y',
                this.transform.object?.position.y
            );
            set(
                store.layerActiveGetters,
                'Mesh.position.z',
                this.transform.object?.position.z
            );
            set(
                store.layerActiveGetters,
                'Mesh.rotation.x',
                this.transform.object?.rotation.x
            );
            set(
                store.layerActiveGetters,
                'Mesh.rotation.y',
                this.transform.object?.rotation.y
            );
            set(
                store.layerActiveGetters,
                'Mesh.rotation.z',
                this.transform.object?.rotation.z
            );
            set(
                store.layerActiveGetters,
                'Mesh.scale.x',
                this.transform.object?.scale.x
            );
            set(
                store.layerActiveGetters,
                'Mesh.scale.y',
                this.transform.object?.scale.y
            );
            set(
                store.layerActiveGetters,
                'Mesh.scale.z',
                this.transform.object?.scale.z
            );
        });
        // 监听激活对象
        watchEffect(() => {
            if (store.layerActiveGetters) {
                const name = this.getName(store.layerActiveGetters);
                const object = scene.getObjectByName(name);
                this.transform.attach(object as Object3D);
            } else {
                this.transform.detach();
            }
        });
    }
}
export function use3DDraw(three: BaseThreeClass) {
    return new Redraw(three);
}
