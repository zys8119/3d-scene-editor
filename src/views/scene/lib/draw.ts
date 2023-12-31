import { BaseThreeClass } from 'naive-ui';
import useStore3d, { Layer } from '@/store/modules/3d';
import { get, set } from 'lodash';
import { Object3D } from 'three';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
import {
    optionsMaterial,
    textureField,
} from '@/store/modules/3d/materialAttrs';
import { BufferGeometry } from 'three/src/core/BufferGeometry';
import {
    optionsGeometry,
    OptionsGeometryItemType,
} from '@/store/modules/3d/basisAttrs';
const store = useStore3d();
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
    async generateGeometry(layer: Layer) {
        const geometryType = layer.geometryType || 'BoxGeometry';
        const geometry = await (
            optionsGeometry.find(
                (e) => e.value === geometryType
            ) as unknown as OptionsGeometryItemType
        ).box(this.three, layer);
        if (layer.wireframe) {
            // 网格几何体
            return new this.three.THREE.WireframeGeometry(
                geometry as any
            ) as unknown as BufferGeometry;
        }
        return geometry;
    }
    async generateMaterial(layer: Layer) {
        const materialType = layer.materialType || 'MeshLambertMaterial';
        const material: any = await (
            optionsMaterial.find(
                (e) => e.value === materialType
            ) as unknown as OptionsGeometryItemType
        ).box(this.three, layer);
        material.needsUpdate = true;
        return material;
    }
    async setMeshName(mesh: any, layer: Layer) {
        mesh.name = this.getName(layer);
        const objectCache = this.three.scene.getObjectByName(mesh.name);
        if (objectCache) {
            this.three.scene.remove(objectCache);
        }
        this.three.scene.add(mesh);
    }
    async setMeshBaseInfo(mesh: any, layer: Layer, isTraverse?: boolean) {
        const name = this.getName(layer);
        const objectCache = isTraverse
            ? mesh
            : this.three.scene.getObjectByName(name);
        if (objectCache) {
            objectCache.castShadow = get(layer, 'Mesh.castShadow', true);
            objectCache.receiveShadow = get(layer, 'Mesh.receiveShadow', true);
            objectCache.visible = get(layer, 'visible', true);
            objectCache.position.set(
                get(layer, 'Mesh.position.x', 0),
                get(layer, 'Mesh.position.y', 0),
                get(layer, 'Mesh.position.z', 0)
            );
            objectCache.rotation.set(
                get(layer, 'Mesh.rotation.x', 0),
                get(layer, 'Mesh.rotation.y', 0),
                get(layer, 'Mesh.rotation.z', 0)
            );
            objectCache.scale.set(
                get(layer, 'Mesh.scale.x', 1),
                get(layer, 'Mesh.scale.y', 1),
                get(layer, 'Mesh.scale.z', 1)
            );
        }
    }
    async setMeshMaterial(material: any, layer: Layer) {
        //todo 材料配置
        const materialColor = this.parseColor(
            get(layer, 'Material.color', '#5f5f5f')
        );
        material.color = new this.three.THREE.Color(materialColor.color);
        material.opacity = materialColor.opacity;
        material.needsUpdate = true;
        material.setValues({
            aoMapIntensity: get(layer, 'Material.aoMapIntensity', 1),
            bumpScale: get(layer, 'Material.bumpScale', 1),
            combine: get(layer, 'Material.combine', 1),
            displacementScale: get(layer, 'Material.displacementScale', 1),
            displacementBias: get(layer, 'Material.displacementScale', 0),
            emissiveIntensity: get(layer, 'Material.emissiveIntensity', 1),
            lightMapIntensity: get(layer, 'Material.lightMapIntensity', 1),
            reflectivity: get(layer, 'Material.reflectivity', 1),
            wireframeLinewidth: get(layer, 'Material.wireframeLinewidth', 1),
            refractionRatio: get(layer, 'Material.refractionRatio', 0.98),
            wireframeLinecap: get(layer, 'Material.wireframeLinecap', 'round'),
            wireframeLinejoin: get(
                layer,
                'Material.wireframeLinejoin',
                'round'
            ),
            flatShading: get(layer, 'Material.flatShading', false),
            fog: get(layer, 'Material.fog', true),
            wireframe: get(layer, 'Material.wireframe', false),
            emissive: new this.three.THREE.Color(
                this.parseColor(
                    get(layer, 'Material.emissive', '#000000')
                ).color
            ),
            transparent: true,
            needsUpdate: true,
        });
        const updateTexture = async (path: string) => {
            const materialMap = get(layer, path);
            const keyName: string = (/(?:\.(.*)$)/.exec(path) || [])[1];
            if (typeof materialMap === 'string') {
                if (
                    (material as any)[keyName as any]?.image?.src !==
                    materialMap
                ) {
                    material.needsUpdate = true;
                    const texture = new this.three.THREE.TextureLoader().load(
                        materialMap
                    );
                    material.setValues({
                        [keyName]: texture,
                    });
                }
            } else {
                material.needsUpdate = true;
                material.setValues({
                    [keyName]: materialMap || null,
                });
            }
        };
        // 更新贴图
        textureField.forEach((keyName) => {
            updateTexture(`Material.${keyName}`);
        });
    }
    async update() {
        const { THREE } = this.three;
        // 清除绘制场景
        this.drawWatchCache.forEach((e) => {
            e?.();
        });
        await Promise.all(
            store.layers.map(async (layer) => {
                let watchReset = null;
                const isModel = typeof layer.modelUrl === 'string';
                let box: any = await this.generateGeometry(layer);
                let material: any = await this.generateMaterial(layer);
                if (isModel) {
                    await this.setMeshName(box, layer);
                    watchReset = async () => {
                        if (layer.customMaterial) {
                            box.traverse(async (object: any) => {
                                material = await this.generateMaterial(layer);
                                object.material = material as any;
                                await this.setMeshMaterial(material, layer);
                            });
                        } else {
                            await this.setMeshBaseInfo(box, layer);
                            box = await this.generateGeometry(layer);
                            if (['SVG', 'Map'].includes(layer.geometryType)) {
                                await this.setMeshName(box, layer);
                            }
                        }
                        box.traverse(async (object: any) => {
                            await this.setMeshBaseInfo(object, layer, true);
                        });
                        await this.setMeshBaseInfo(box, layer);
                    };
                } else {
                    const mesh = new THREE.Mesh(box as any, material as any);
                    await this.setMeshName(mesh, layer);
                    watchReset = async () => {
                        mesh.geometry.dispose();
                        mesh.material = material as any;
                        box = await this.generateGeometry(layer);
                        mesh.geometry = box;
                        await this.setMeshBaseInfo(mesh, layer);
                        await this.setMeshMaterial(material, layer);
                    };
                }
                watchReset();
                this.drawWatchCache.push(
                    watch(layer, watchReset, { deep: true })
                );
            })
        ).catch((e) => {
            console.log('draw-update', e);
        });
    }
    public layersLeng = store.layers.length;
    public drawWatchCache: any[] = [];
    async draw() {
        const { scene } = this.three;
        // 清除绘制场景
        await this.update();
        watch(store.layers, async (v) => {
            if (this.layersLeng !== v.length) {
                await this.update();
                this.layersLeng = v.length;
            }
        });
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
                this.transform.attach(object as unknown as Object3D);
            } else {
                this.transform.detach();
            }

            // this.transform.visible = store.toolsActive !== 'play';
        });
    }
}
export function use3DDraw(three: BaseThreeClass) {
    return new Redraw(three);
}
