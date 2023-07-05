import { BaseThreeClass } from 'naive-ui';
import useStore3d, { Layer } from '@/store/modules/3d';
import { get, set } from 'lodash';
import { Mesh, Object3D } from 'three';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
const store = useStore3d();
interface OnEventType {
    on(
        event: 'hover' | 'click' | 'gaze',
        callback: (object: Object3D) => void
    ): void;
}
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
    async draw() {
        const { THREE, scene } = this.three;
        // 清除绘制场景
        await Promise.all(
            store.layers.map(async (layer) => {
                const box = new THREE.BoxGeometry(
                    layer.width,
                    layer.height,
                    layer.depth
                );

                const material = new THREE.MeshLambertMaterial();
                const mesh = new THREE.Mesh(box, material) as unknown as Mesh &
                    OnEventType;
                mesh.name = this.getName(layer);
                scene.add(mesh);
                mesh.on('click', (e) => {
                    store.setLayerActiveId(this.parseName(e.name).id, true);
                    this.transform.attach(e);
                    window.$draw3dSceneEditorObject3DClick = true;
                    setTimeout(() => {
                        window.$draw3dSceneEditorObject3DClick = false;
                    }, 500);
                });
                const watchReset = () => {
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
                    material.emissive = new THREE.Color(
                        this.parseColor(
                            get(layer, 'Material.emissive', '#000000')
                        ).color
                    );
                    material.transparent = true;
                    const materialMap = get(layer, 'Material.map');
                    if (typeof materialMap === 'string') {
                        material.map = new THREE.TextureLoader().load(
                            materialMap
                        );
                    } else {
                        material.map = null;
                    }
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
