import { BaseThreeClass } from 'naive-ui';
import useStore3d from '@/store/modules/3d';
import { get } from 'lodash';
const store = useStore3d();
class Redraw {
    constructor(public three: BaseThreeClass) {
        this.init();
    }
    async init() {
        await this.draw();
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
                const mesh = new THREE.Mesh(box, material);
                mesh.name = `RedrawObject3D-${layer.id}-${layer.name}`;
                mesh.position.set(
                    get(layer, 'Mesh.position.x', 0),
                    get(layer, 'Mesh.position.y', 0),
                    get(layer, 'Mesh.position.z', 0)
                );
                mesh.castShadow = get(layer, 'Mesh.castShadow', true);
                mesh.receiveShadow = get(layer, 'Mesh.receiveShadow', true);
                scene.add(mesh);
            })
        );
    }
}
export function use3DDraw(three: BaseThreeClass) {
    return new Redraw(three);
}
