import { BaseThreeClass } from 'naive-ui';
import useStore3d, { Layer } from '@/store/modules/3d';
import { get } from 'lodash';
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

                const material = new THREE.MeshLambertMaterial({
                    map: new THREE.TextureLoader().load(
                        'https://t7.baidu.com/it/u=4036010509,3445021118&fm=193&f=GIF'
                    ),
                    transparent: true,
                });
                const mesh = new THREE.Mesh(box, material) as unknown as Mesh &
                    OnEventType;
                mesh.name = this.getName(layer);
                mesh.position.set(
                    get(layer, 'Mesh.position.x', 0),
                    get(layer, 'Mesh.position.y', 0),
                    get(layer, 'Mesh.position.z', 0)
                );
                mesh.castShadow = get(layer, 'Mesh.castShadow', true);
                mesh.receiveShadow = get(layer, 'Mesh.receiveShadow', true);
                scene.add(mesh);
                mesh.on('click', (e) => {
                    store.setLayerActiveId(this.parseName(e.name).id, true);
                    this.transform.attach(e);
                });
            })
        );
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
