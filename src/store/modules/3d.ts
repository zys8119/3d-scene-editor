import tools, { toolsActiveType } from './3d/tools';
import attrs, { AttrsItem, AttrsItemChild } from './3d/attrs';
import assets, { fontsAssets, FontsAssetsType } from './assets/index';
import { GeometryType } from '@/store/modules/3d/basisAttrs';
import { MaterialType } from '@/store/modules/3d/materialAttrs';
const config = use3DConfig();

export type ToolItemType<T> = T extends (infer R extends (typeof tools)[0])[]
    ? R['children'] extends (infer V)[]
        ? V
        : R
    : T;
export type ToolItem = ToolItemType<typeof tools>;
export type ToolsActiveType = (typeof toolsActiveType)[number] | null;
export type LayerGeometryType = GeometryType;
export type Layer = {
    [key: string]: any;
    $isEdit?: boolean;
    type: ToolsActiveType;
    geometryType: LayerGeometryType;
    materialType: MaterialType;
    id: any;
    name?: string;
    label: string;
    widthSegments?: number;
    heightSegments?: number;
    depthSegments?: number;
    Box?: any;
    Material?: any;
    Mesh?: any;
    width?: number;
    height?: number;
    depth?: number;
    radius?: number;
    length?: number;
    capSegments?: number;
    radialSegments?: number;
    segments?: number;
    thetaStart?: number;
    thetaLength?: number;
    radiusTop?: number;
    detail?: number;
    radiusBottom?: number;
    openEnded?: boolean;
    steps?: number;
    curveSegments?: number;
    bevelEnabled?: boolean;
    bevelThickness?: number;
    bevelSize?: number;
    bevelOffset?: number;
    bevelSegments?: number;
    phiStart?: number;
    phiLength?: number;
    innerRadius?: number;
    outerRadius?: number;
    thetaSegments?: number;
    phiSegments?: number;
    tube?: number;
    tubularSegments?: number;
    arc?: number;
    p?: number;
    q?: number;
    closed?: boolean;
    wireframe?: boolean;
    visible?: boolean;
    paths?: Array<Array<[number, number]> | Array<number> | number>;
    text?: string;
    fontName?: FontsAssetsType;
    fontUrl?: string;
    size?: number;
};
export interface Store3Dstate {
    [key: string]: any;
    toolsActive: ToolsActiveType;
    layerActiveId: any;
    layerActiveIdCache: any;
    tools: typeof tools;
    layers: Layer[];
    layerBaseName: string;
    config: typeof config;
    attrs: typeof attrs;
    assets: typeof assets;
    fontsAssets: typeof fontsAssets;
}
export type LayersGettersItem = Layer & { tool: ToolItem };
export interface Store3DGetters {
    [key: string]: any;
    toolsFlatMap(): Record<string, ToolItem>;
    toolActiveInfo(): ToolItem | null;
    layerBaseNameReg(): RegExp;
    layersGetters(): Array<LayersGettersItem>;
    attrsGetters(): Array<AttrsItem>;
    layerActiveGetters(): LayersGettersItem;
    /// 选择工具是否为平面
    isToolPlane(): boolean;
    isToolSelect(): boolean;
    fontNameOptions(): Array<{
        [key: string]: any;
        label: string;
        value: string;
    }>;
}
export interface Store3DActions {
    [key: string]: any;
    setToolActive(type: ToolsActiveType): void;
    setLayerActiveId(layerId: any, isCache?: boolean): void;
    setAssets(url: string): void;
    deleteAssets(index: number): void;
    delLayer(index: number): void;
    addLayer(layer: Layer): void;
    setFontsAssets(fonts: Record<string, string>): void;
}
const useStore3d = defineStore<
    string,
    Store3Dstate,
    Store3DGetters,
    Store3DActions
>('3d', {
    state() {
        return {
            attrs,
            assets,
            fontsAssets,
            config,
            toolsActive: 'select',
            layerActiveId: null,
            layerActiveIdCache: 2,
            tools,
            layerBaseName: 'RedrawObject3D',
            layers: [
                // {
                //     label: '物体1',
                //     type: 'geometry',
                //     geometryType: 'BoxGeometry',
                //     width: 100,
                //     height: 100,
                //     depth: 100,
                //     id: 1,
                //     paths: [
                //         [
                //             -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1,
                //             1, 1, -1, 1, 1, 1, 1, -1, 1, 1,
                //         ],
                //         [
                //             2, 1, 0, 0, 3, 2, 0, 4, 7, 7, 3, 0, 0, 1, 5, 5, 4,
                //             0, 1, 2, 6, 6, 5, 1, 2, 3, 7, 7, 6, 2, 4, 5, 6, 6,
                //             7, 4,
                //         ],
                //     ],
                // },
                {
                    label: '物体2',
                    type: 'geometry',
                    text: '智加科技',
                    fontName: '中文字体',
                    geometryType: 'LatheGeometry',
                    materialType: 'MeshBasicMaterial',
                    width: 100,
                    height: 100,
                    depth: 100,
                    radius: 100,
                    capSegments: 17,
                    radialSegments: 83,
                    id: 2,
                    Mesh: {
                        position: {
                            x: -100,
                            y: 50,
                        },
                    },
                    paths: [
                        [0, -500],
                        [500, 0],
                        [0, 500],
                    ],
                },
            ],
        } as Store3Dstate;
    },
    getters: {
        layerBaseNameReg() {
            return new RegExp(this.layerBaseName);
        },
        toolsFlatMap() {
            return this.tools.reduce((a, b) => {
                b.children.forEach((item) => {
                    a[item.type] = item;
                });
                return a;
            }, {} as Record<string, ToolItem>);
        },
        isToolPlane() {
            return ['rect', 'circle'].includes(this.toolsActive as string);
        },
        isToolSelect() {
            return ['play', 'select', null, undefined].includes(
                this.toolsActive as string
            );
        },
        toolActiveInfo() {
            return this.toolsFlatMap[this.toolsActive as string] || null;
        },
        layersGetters() {
            return this.layers.map<any>((e) => {
                e.name = typeof e.name === 'string' ? e.name : e.label;
                e.tool = this.toolsFlatMap[e.type as string];
                e.fontUrl = (this.fontsAssets as any)[
                    e.fontName as any
                ] as string;
                return e;
            });
        },
        attrsGetters() {
            return this.attrs.filter((e: AttrsItem | AttrsItemChild) => {
                if (typeof e.filter === 'function') {
                    return e.filter.call(this as any);
                }
                return true;
            });
        },
        layerActiveGetters() {
            return (this.layersGetters.find(
                (e) => e.id === this.layerActiveId
            ) ||
                this.layersGetters.find(
                    (e) => e.id === this.layerActiveIdCache
                )) as LayersGettersItem;
        },
        fontNameOptions() {
            return Object.entries(this.fontsAssets).map(([label, url]) => {
                return {
                    label,
                    value: label,
                    url,
                };
            });
        },
    },
    actions: {
        setToolActive(type) {
            this.toolsActive = type;
        },
        setLayerActiveId(layerId, isCache) {
            this.layerActiveId = layerId;
            if (isCache) {
                this.layerActiveIdCache = layerId;
            }
        },
        setAssets(url) {
            this.assets.push(url);
        },
        deleteAssets(index) {
            this.assets.splice(index, 1);
        },
        addLayer(layer) {
            this.layers.push(layer);
        },
        delLayer(index) {
            this.layers.splice(index, 1);
        },
        setFontsAssets(fontsAssets) {
            this.fontsAssets = fontsAssets as any;
        },
    },
});
export default useStore3d;
