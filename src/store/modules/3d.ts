import tools, { toolsActiveType } from './3d/tools';
import attrs, { AttrsItem, AttrsItemChild } from './3d/attrs';
import assets from './assets/index';
const config = use3DConfig();

export type ToolItemType<T> = T extends (infer R extends (typeof tools)[0])[]
    ? R['children'] extends (infer V)[]
        ? V
        : R
    : T;
export type ToolItem = ToolItemType<typeof tools>;
export type toolsActiveType = (typeof toolsActiveType)[number] | null;
export type Layer = {
    [key: string]: any;
    type: toolsActiveType;
    id: any;
    name?: string;
    label: string;
    width: number;
    height: number;
    depth: number;
    widthSegments: number;
    heightSegments: number;
    depthSegments: number;
    Box: any;
    Material: any;
    Mesh: any;
    $isEdit: boolean;
};
export interface Store3Dstate {
    [key: string]: any;
    toolsActive: toolsActiveType;
    layerActiveId: any;
    layerActiveIdCache: any;
    tools: typeof tools;
    layers: Layer[];
    layerBaseName: string;
    config: typeof config;
    attrs: typeof attrs;
    assets: typeof assets;
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
}
export interface Store3DActions {
    [key: string]: any;
    setToolActive(type: toolsActiveType): void;
    setLayerActiveId(layerId: any, isCache?: boolean): void;
    setAssets(url: string): void;
    deleteAssets(index: number): void;
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
            config,
            toolsActive: null,
            layerActiveId: null,
            layerActiveIdCache: null,
            tools,
            layerBaseName: 'RedrawObject3D',
            layers: [
                {
                    label: '物体1',
                    type: 'cube',
                    width: 100,
                    height: 100,
                    depth: 100,
                    id: 1,
                },
                {
                    label: '物体2',
                    type: 'cube',
                    width: 100,
                    height: 100,
                    depth: 50,
                    Mesh: {
                        position: {
                            x: 100,
                            y: 100,
                        },
                    },
                    id: 2,
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
        toolActiveInfo() {
            return this.toolsFlatMap[this.toolsActive as string] || null;
        },
        layersGetters() {
            return this.layers.map<any>((e) => {
                e.name = typeof e.name === 'string' ? e.name : e.label;
                e.tool = this.toolsFlatMap[e.type as string];
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
    },
});
export default useStore3d;
