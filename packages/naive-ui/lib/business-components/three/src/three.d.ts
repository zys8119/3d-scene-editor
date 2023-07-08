import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    Mesh,
    GridHelper,
    BoxGeometry,
    MeshLambertMaterial,
    Clock,
    DirectionalLight,
    DirectionalLightHelper,
    CameraHelper,
    Line,
} from 'three';
import * as THREE from 'three';
import GUI from 'lil-gui';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
import { Font as FontLoaderToFont } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { Font } from 'opentype.js';
import { SetupContext, Prop, ComponentInternalInstance, Ref } from 'vue';
import { Vector3 } from 'three/src/math/Vector3';
import { Vector2 } from 'three/src/math/Vector2';
import { ColorRepresentation } from 'three/src/utils';
import { Texture } from 'three/src/textures/Texture';
/***
 * 获取字体格式
 * @param font
 * @param text
 * @param outJs
 */
export declare const convertFont: (
    font: Font,
    text?: string,
    outJs?: boolean
) => any;
export interface InitializationData {
    [key: string]: any;
    camera?: Partial<{
        x: number;
        y: number;
        z: number;
        step: number;
    }>;
}
/**
 * Three https://threejs.org/docs/index.html#api/zh
 */
export declare class BaseThreeClass {
    props: PropsBase;
    ctx: SetupContext<typeof emits>;
    vm: ComponentInternalInstance & {
        exposed: {
            canvas: Ref<HTMLCanvasElement>;
            baseTheeEl: Ref<HTMLDivElement>;
            baseTheeGuiEl: Ref<HTMLDivElement>;
            baseTheeStatsEl: Ref<HTMLDivElement>;
            innerWidth: Ref<number>;
            innerHeight: Ref<number>;
            initializationData: Ref<InitializationData>;
        };
    };
    THREE: typeof THREE;
    /**
     * 视图
     */
    scene: Scene;
    /**
     * 相机
     */
    camera: PerspectiveCamera;
    /**
     * 渲染器
     */
    renderer: WebGLRenderer;
    /**
     * 鼠标控制器
     */
    controls: OrbitControls;
    /**
     * 下载的字体文件
     */
    fonts: Map<
        string,
        {
            fontJson: Record<string, any>;
            font: FontLoaderToFont;
        }
    >;
    /**
     * 下载的图片
     */
    imagesTexture: Map<string, THREE.Texture>;
    /**
     * 下载的模型资源
     */
    gltfs: Map<string, GLTF>;
    /**
     * 是否渲染
     */
    isRender: boolean;
    /**
     * gui
     * 开发文档：https://lil-gui.georgealways.com/
     */
    gui: GUI;
    guiCallback: () => void;
    /**
     * 时间相关
     */
    clock: Clock;
    clockTime: number;
    /**
     * 统计
     */
    stats: Stats;
    constructor(
        props: PropsBase,
        ctx: SetupContext<typeof emits>,
        vm: ComponentInternalInstance & {
            exposed: {
                canvas: Ref<HTMLCanvasElement>;
                baseTheeEl: Ref<HTMLDivElement>;
                baseTheeGuiEl: Ref<HTMLDivElement>;
                baseTheeStatsEl: Ref<HTMLDivElement>;
                innerWidth: Ref<number>;
                innerHeight: Ref<number>;
                initializationData: Ref<InitializationData>;
            };
        }
    );
    /**
     * 设置视图
     */
    setScene(): void;
    /**
     * 设置相机
     */
    setCamera(): void;
    /**
     * 设置渲染器
     */
    setRenderer(): void;
    /**
     * 设置灯光
     */
    light?: DirectionalLight;
    lightHelper?: DirectionalLightHelper;
    cameraHelper?: CameraHelper;
    setLight(): void;
    /**
     * 鼠标控制器
     */
    setMouseController(): void;
    /**
     * 平面几何
     */
    planeGeometryMesh: Mesh;
    planeGeometry(): {
        box: THREE.PlaneGeometry;
        material: THREE.MeshPhongMaterial;
        mesh: Mesh<THREE.PlaneGeometry, THREE.MeshPhongMaterial>;
    };
    /**
     * 检查是否支持webGL
     * @param callback
     */
    checkWebGL(callback: Function): void;
    /**
     * 初始化渲染
     */
    private requestAnimationFrameIndex;
    private requestAnimationFrame;
    initRender(): void;
    render(): void;
    /**
     * 绘制线
     */
    drawLine(
        points: Vector3[] | Vector2[],
        color?: ColorRepresentation
    ): Line<THREE.BufferGeometry, THREE.LineBasicMaterial>;
    /**
     * 设置坐标线
     */
    xLine: Line;
    yLine: Line;
    zLine: Line;
    setCoordinateLine(lingMax?: number): void;
    /**
     * 添加几何体
     */
    addBoxGeometry(url?: string): {
        mesh: Mesh;
        material: MeshLambertMaterial;
        box: BoxGeometry;
    };
    /**
     * 添加文字
     */
    addText(
        text: string,
        fontName: string,
        map?: Texture
    ): Promise<{
        mesh: Mesh<TextGeometry, THREE.MeshPhongMaterial>;
        material: THREE.MeshPhongMaterial;
        box: TextGeometry;
    }>;
    /**
     * 网格帮助
     */
    gridHelper(): GridHelper;
    /**
     * 变换控制
     * @constructor
     */
    transformControls(): TransformControls;
    /**
     * 下载字体
     */
    downloadFonts(
        fontUrl: string,
        familyName?: string
    ): Promise<FontLoaderToFont | undefined>;
    /**
     * 下载图片
     */
    downloadImagesTexture(url: string, imageName?: string): Texture;
    isWatchUpDate: boolean;
    /**
     * 监听数据
     */
    watchUpDate(): void;
    /**
     * 添加GUI
     * 开发文档：https://lil-gui.georgealways.com/
     */
    isGui: boolean;
    addGUI(): GUI;
    /**
     * addGLTFLoader
     */
    addGLTFLoader(url: string, name?: string): Promise<GLTF>;
    /**
     * 设置统计
     */
    setStats(): void;
    /**
     * 重置
     */
    reset(): void;
}
export interface PropsBase {
    modelValue: BaseThreeClass;
    fov: number;
    near: number;
    far: number;
    aspect: number;
    sizeWidth: number;
    sizeHeight: number;
    initializationData: Partial<InitializationData>;
    mouseController: boolean;
    stats: boolean;
    light: boolean;
    coordinateLine: boolean;
    planeGeometry: boolean;
    fixed: boolean;
    gui: boolean;
}
export declare const propsBaseThree: {
    [key in keyof PropsBase]: Prop<PropsBase[key]>;
};
export type ThreeProps = typeof propsBaseThree;
export declare const emits: {
    load: (myThee: BaseThreeClass) => boolean;
    animation: (myThee: BaseThreeClass) => boolean;
    gui: (data: InitializationData, myThee: BaseThreeClass) => boolean;
    'update:modelValue': (myThee: BaseThreeClass) => boolean;
    'update:initialization-data': (data: InitializationData) => boolean;
};
declare const three3D: import('vue').DefineComponent<
    {
        modelValue: Prop<BaseThreeClass, BaseThreeClass>;
        fov: Prop<number, number>;
        near: Prop<number, number>;
        far: Prop<number, number>;
        aspect: Prop<number, number>;
        sizeWidth: Prop<number, number>;
        sizeHeight: Prop<number, number>;
        initializationData: Prop<
            Partial<InitializationData>,
            Partial<InitializationData>
        >;
        mouseController: Prop<boolean, boolean>;
        stats: Prop<boolean, boolean>;
        light: Prop<boolean, boolean>;
        coordinateLine: Prop<boolean, boolean>;
        planeGeometry: Prop<boolean, boolean>;
        fixed: Prop<boolean, boolean>;
        gui: Prop<boolean, boolean>;
    },
    () => JSX.Element,
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {
        load: (myThee: BaseThreeClass) => boolean;
        animation: (myThee: BaseThreeClass) => boolean;
        gui: (data: InitializationData, myThee: BaseThreeClass) => boolean;
        'update:modelValue': (myThee: BaseThreeClass) => boolean;
        'update:initialization-data': (data: InitializationData) => boolean;
    },
    string,
    import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
    Readonly<
        import('vue').ExtractPropTypes<{
            modelValue: Prop<BaseThreeClass, BaseThreeClass>;
            fov: Prop<number, number>;
            near: Prop<number, number>;
            far: Prop<number, number>;
            aspect: Prop<number, number>;
            sizeWidth: Prop<number, number>;
            sizeHeight: Prop<number, number>;
            initializationData: Prop<
                Partial<InitializationData>,
                Partial<InitializationData>
            >;
            mouseController: Prop<boolean, boolean>;
            stats: Prop<boolean, boolean>;
            light: Prop<boolean, boolean>;
            coordinateLine: Prop<boolean, boolean>;
            planeGeometry: Prop<boolean, boolean>;
            fixed: Prop<boolean, boolean>;
            gui: Prop<boolean, boolean>;
        }>
    > & {
        onLoad?: ((myThee: BaseThreeClass) => any) | undefined;
        'onUpdate:modelValue'?: ((myThee: BaseThreeClass) => any) | undefined;
        onAnimation?: ((myThee: BaseThreeClass) => any) | undefined;
        onGui?:
            | ((data: InitializationData, myThee: BaseThreeClass) => any)
            | undefined;
        'onUpdate:initialization-data'?:
            | ((data: InitializationData) => any)
            | undefined;
    },
    {},
    {}
>;
export default three3D;
