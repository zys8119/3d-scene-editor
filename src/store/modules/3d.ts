import tools, { toolsActiveType } from './3d/tools';
import attrs, { AttrsItem } from './3d/attrs';
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
    label: string;
    width: number;
    height: number;
    depth: number;
    Box: any;
    Material: any;
    Mesh: any;
    $isEdit: boolean;
};
export interface Store3Dstate {
    [key: string]: any;
    toolsActive: toolsActiveType;
    tools: typeof tools;
    layers: Layer[];
    layerBaseName: string;
    config: typeof config;
    attrs: typeof attrs;
}
export interface Store3DGetters {
    [key: string]: any;
    toolsFlatMap(): Record<string, ToolItem>;
    toolActiveInfo(): ToolItem | null;
    layerBaseNameReg(): RegExp;
    layersGetters(): Array<Layer & { tool: ToolItem }>;
    attrsGetters(): Array<AttrsItem>;
}
export interface Store3DActions {
    [key: string]: any;
    setToolActive(type: toolsActiveType): void;
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
            config,
            toolsActive: null,
            tools,
            layerBaseName: 'RedrawObject3D',
            layers: [
                {
                    label: '物体1',
                    type: 'cube',
                    width: 100,
                    height: 100,
                    depth: 100,
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
                e.tool = this.toolsFlatMap[e.type as string];
                return e;
            });
        },
        attrsGetters() {
            return this.attrs;
        },
    },
    actions: {
        setToolActive(type) {
            this.toolsActive = type;
        },
    },
});
export default useStore3d;
