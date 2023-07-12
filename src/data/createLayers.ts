import { get } from 'lodash';
import { Mesh, Object3D } from 'three';
import { Layer } from '@/store/modules/3d';
import provideConfig from './provideConfig';
const { three } = provideConfig();
export const getName = (layer: Layer) => {
    return `${window.store.store3d.layerBaseName}-${layer.id}-${layer.name}`;
};
const setLayerActiveId = (id: any, name: string) => {
    requestAnimationFrame(() => {
        if (window.store && three.value?.scene?.getObjectByName(name)) {
            window.store.store3d.setLayerActiveId(id, true);
        } else {
            setLayerActiveId(id, name);
        }
    });
};

/**
 * todo 创建物体图层
 */
const createLayers = async (ms: Object3D) => {
    const json = ms.toJSON();
    const name = '新物体';
    const layer = {
        width: get(json, 'geometries[0].width', 0),
        height: get(json, 'geometries[0].height', 0),
        depth: get(json, 'geometries[0].depth', 1),
        radiusBottom: get(json, 'geometries[0].radiusBottom', 1),
        radiusTop: get(json, 'geometries[0].radiusTop', 1),
        Mesh: {
            rotation: {
                x: ms.rotation.x,
            },
            position: {
                x: get(ms, 'position.x', 0),
                y: get(ms, 'position.y', 0),
                z: get(ms, 'position.z', 0),
            },
        } as Mesh,
        geometryType: 'BoxGeometry',
        type: 'geometry',
        materialType: 'MeshLambertMaterial',
        name: name,
        label: name,
        id: Date.now(),
        $isEdit: false,
    } as Layer;
    if (ms.name === 'circle') {
        layer.geometryType = 'CylinderGeometry';
        layer.Mesh.rotation.x = 0;
    }
    if (ms.name === 'text') {
        layer.geometryType = 'TextGeometry';
        layer.text = '智加科技';
        layer.fontName = '中文字体' as any;
        layer.Mesh.rotation.x = 0;
    }
    window.store.store3d.addLayer(layer);
    setLayerActiveId(layer.id, getName(layer));
};
export default createLayers;
