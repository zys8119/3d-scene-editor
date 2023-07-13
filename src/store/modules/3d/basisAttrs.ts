import {
    Attrs,
    AttrsItemChild,
    AttrsItemChildConfig,
} from '@/store/modules/3d/attrs';
import { get as _get, set as _set, merge as _merge } from 'lodash';
import { BufferGeometry } from 'three/src/core/BufferGeometry';
import { Layer } from '@/store/modules/3d';
import { BaseThreeClass } from 'naive-ui';
import BasisAttrsPathsPreview from '@/views/scene/components/BasisAttrsPathsPreview.vue';
import FontsAssetsPanel from '@/views/scene/components/FontsAssetsPanel.vue';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import useWatchStore from '@/utils/watchStore';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
const downloadFontsMap = new Map<string, boolean>();
const createValue = (keyPath: string, defaultValue: any = 0) => {
    return computed({
        get() {
            return _get(
                window.store.store3d.layerActiveGetters,
                keyPath,
                defaultValue
            );
        },
        set(v) {
            _set(window.store.store3d.layerActiveGetters, keyPath, v);
        },
    });
};
const downloadFonts = async (
    three: BaseThreeClass,
    layer: Layer,
    fontName: string
) => {
    if (!three.fonts.get(fontName)) {
        if (downloadFontsMap.has(fontName)) {
            await new Promise((resolve) => {
                setTimeout(resolve);
            });
            await downloadFonts(three, layer, fontName);
        } else {
            downloadFontsMap.set(fontName, true);
            await three.downloadFonts(layer.fontUrl as string, fontName);
            downloadFontsMap.delete(fontName);
        }
    }
};
export const optionsGeometry = [
    {
        label: 'BoxGeometry',
        value: 'BoxGeometry',
        name: '立方缓冲几何体',
        box(three: BaseThreeClass, layer: Layer) {
            return new three.THREE.BoxGeometry(
                layer.width,
                layer.height,
                layer.depth,
                layer.widthSegments,
                layer.heightSegments,
                layer.depthSegments
            );
        },
    },
    {
        label: 'CapsuleGeometry',
        value: 'CapsuleGeometry',
        name: '胶囊图形几何体',
        box(three: BaseThreeClass, layer: Layer) {
            return new three.THREE.CapsuleGeometry(
                layer.radius,
                layer.length,
                layer.capSegments,
                layer.radialSegments
            );
        },
    },
    {
        label: 'CircleGeometry',
        value: 'CircleGeometry',
        name: '圆形缓冲几何体',
        box(three: BaseThreeClass, layer: Layer) {
            return new three.THREE.CircleGeometry(
                layer.radius,
                layer.segments,
                layer.thetaStart,
                layer.thetaLength
            );
        },
    },
    {
        label: 'ConeGeometry',
        value: 'ConeGeometry',
        name: '圆锥缓冲几何体',
        box(three: BaseThreeClass, layer: Layer) {
            return new three.THREE.ConeGeometry(
                layer.radius,
                layer.height,
                layer.radialSegments,
                layer.heightSegments,
                layer.openEnded,
                layer.thetaStart,
                layer.thetaLength
            );
        },
    },
    {
        label: 'CylinderGeometry',
        value: 'CylinderGeometry',
        name: '圆柱缓冲几何体',
        box(three: BaseThreeClass, layer: Layer) {
            return new three.THREE.CylinderGeometry(
                layer.radiusTop,
                layer.radiusBottom,
                layer.height,
                layer.radialSegments,
                layer.heightSegments,
                layer.openEnded,
                layer.thetaStart,
                layer.thetaLength
            );
        },
    },
    {
        label: 'DodecahedronGeometry',
        value: 'DodecahedronGeometry',
        name: '十二面缓冲几何体',
        box(three: BaseThreeClass, layer: Layer) {
            return new three.THREE.DodecahedronGeometry(
                layer.radius,
                layer.detail
            );
        },
    },
    {
        label: 'EdgesGeometry',
        value: 'EdgesGeometry',
        name: '边缘几何体',
        box(three: BaseThreeClass, layer: Layer) {
            return new three.THREE.EdgesGeometry(
                new three.THREE.BoxGeometry(
                    layer.width,
                    layer.height,
                    layer.depth
                )
            );
        },
    },
    {
        label: 'ExtrudeGeometry',
        value: 'ExtrudeGeometry',
        name: '挤压缓冲几何体',
        box(three: BaseThreeClass, layer: Layer) {
            const shape = new three.THREE.Shape();
            if (
                Object.prototype.toString.call(layer.paths) === '[object Array]'
            ) {
                layer.paths?.forEach((item: any) => {
                    item.forEach(([x, y]: any, k: number) => {
                        if (k === 0) {
                            shape.moveTo(x, y);
                        } else {
                            shape.lineTo(x, y);
                        }
                    });
                });
            } else {
                shape.moveTo(0, 0);
                shape.lineTo(0, layer.width as number);
                shape.lineTo(layer.length as number, layer.width as number);
                shape.lineTo(layer.length as number, 0);
                shape.lineTo(0, 0);
            }
            const extrudeSettings = {
                steps: layer.steps,
                depth: layer.depth,
                curveSegments: layer.curveSegments,
                bevelEnabled: layer.bevelEnabled,
                bevelThickness: layer.bevelThickness,
                bevelSize: layer.bevelSize,
                bevelOffset: layer.bevelOffset,
                bevelSegments: layer.bevelSegments,
            };
            return new three.THREE.ExtrudeGeometry(shape, extrudeSettings);
        },
    },
    {
        label: 'IcosahedronGeometry',
        value: 'IcosahedronGeometry',
        name: '二十面缓冲几何体',
        box(three: BaseThreeClass, layer: Layer) {
            return new three.THREE.IcosahedronGeometry(
                layer.radius,
                layer.detail
            );
        },
    },
    {
        label: 'LatheGeometry',
        value: 'LatheGeometry',
        name: '车削缓冲几何体',
        box(three: BaseThreeClass, layer: Layer) {
            const points: any = [];
            layer.paths?.forEach((e: any) => {
                if (typeof e[0] === 'number') {
                    return points.push(new three.THREE.Vector2(e[0], e[1]));
                }
                e.forEach(([x, y]: [number, number]) => {
                    points.push(new three.THREE.Vector2(x, y));
                });
            });
            return new three.THREE.LatheGeometry(
                points,
                layer.segments,
                layer.phiStart,
                layer.phiLength
            );
        },
    },
    {
        label: 'OctahedronGeometry',
        value: 'OctahedronGeometry',
        name: '八面缓冲几何体',
        box(three: BaseThreeClass, layer: Layer) {
            return new three.THREE.OctahedronGeometry(
                layer.radius,
                layer.detail
            );
        },
    },
    {
        label: 'PlaneGeometry',
        value: 'PlaneGeometry',
        name: '平面缓冲几何体',
        box(three: BaseThreeClass, layer: Layer) {
            return new three.THREE.PlaneGeometry(
                layer.width,
                layer.height,
                layer.widthSegments,
                layer.heightSegments
            );
        },
    },
    {
        label: 'PolyhedronGeometry',
        value: 'PolyhedronGeometry',
        name: '多面缓冲几何体',
        box(three: BaseThreeClass, layer: Layer) {
            const verticesOfCube = _get(layer, 'paths[0]', []);
            const indicesOfFaces = _get(layer, 'paths[1]', []);
            return new three.THREE.PolyhedronGeometry(
                verticesOfCube,
                indicesOfFaces,
                layer.radius,
                layer.detail
            );
        },
    },
    {
        label: 'RingGeometry',
        value: 'RingGeometry',
        name: '圆环缓冲几何体',
        box(three: BaseThreeClass, layer: Layer) {
            return new three.THREE.RingGeometry(
                layer.innerRadius,
                layer.outerRadius,
                layer.thetaSegments,
                layer.phiSegments,
                layer.thetaStart,
                layer.thetaLength
            );
        },
    },
    {
        label: 'ShapeGeometry',
        value: 'ShapeGeometry',
        name: '形状缓冲几何体',
        box(three: BaseThreeClass, layer: Layer) {
            try {
                const isObject =
                    Object.prototype.toString.call(layer.paths) ===
                    '[object Object]';
                const heartShape = isObject
                    ? layer.paths
                    : new three.THREE.Shape((layer.paths || []) as any);
                return new three.THREE.ShapeGeometry(
                    heartShape,
                    layer.curveSegments
                );
            } catch (e) {
                console.log(e.message);
            }
        },
    },
    {
        label: 'SphereGeometry',
        value: 'SphereGeometry',
        name: '球缓冲几何体',
        box(three: BaseThreeClass, layer: Layer) {
            return new three.THREE.SphereGeometry(
                layer.radius,
                layer.widthSegments,
                layer.heightSegments,
                layer.phiStart,
                layer.phiLength,
                layer.thetaStart,
                layer.thetaLength
            );
        },
    },
    {
        label: 'TetrahedronGeometry',
        value: 'TetrahedronGeometry',
        name: '四面缓冲几何体',
        box(three: BaseThreeClass, layer: Layer) {
            return new three.THREE.TetrahedronGeometry(
                layer.radius,
                layer.detail
            );
        },
    },
    {
        label: 'TorusGeometry',
        value: 'TorusGeometry',
        name: '圆环缓冲几何体',
        box(three: BaseThreeClass, layer: Layer) {
            return new three.THREE.TorusGeometry(
                layer.radius,
                layer.tube,
                layer.radialSegments,
                layer.tubularSegments,
                layer.arc
            );
        },
    },
    {
        label: 'TorusKnotGeometry',
        value: 'TorusKnotGeometry',
        name: '圆环缓冲扭结几何体',
        box(three: BaseThreeClass, layer: Layer) {
            return new three.THREE.TorusKnotGeometry(
                layer.radius,
                layer.tube,
                layer.tubularSegments,
                layer.radialSegments,
                layer.p,
                layer.q
            );
        },
    },
    {
        label: 'TubeGeometry',
        value: 'TubeGeometry',
        name: '管道缓冲几何体',
        box(three: BaseThreeClass, layer: Layer) {
            class CustomSinCurve extends three.THREE.Curve {
                constructor(public scale = 1) {
                    super();
                }

                getPoint(
                    t: number,
                    optionalTarget = new three.THREE.Vector3()
                ) {
                    const tx = t * 3 - 1.5;
                    const ty = Math.sin(2 * Math.PI * t);
                    const tz = 0;

                    return optionalTarget
                        .set(tx, ty, tz)
                        .multiplyScalar(this.scale);
                }
            }

            const path: any = new CustomSinCurve(10);
            return new three.THREE.TubeGeometry(
                path,
                layer.tubularSegments,
                layer.radius,
                layer.radialSegments,
                layer.closed
            );
        },
    },
    {
        label: 'TextGeometry',
        value: 'TextGeometry',
        name: '文字模型',
        async box(three: BaseThreeClass, layer: Layer) {
            const fontName =
                typeof layer.fontName === 'string'
                    ? layer.fontName
                    : '智加科技';
            await downloadFonts(three, layer, fontName);
            return new TextGeometry(
                typeof layer.text === 'string' ? layer.text : '智加科技',
                {
                    font: three.fonts.get(fontName)?.font as any,
                    size: layer.size,
                    height: layer.depth,
                    curveSegments: layer.curveSegments,
                    bevelEnabled: layer.bevelEnabled,
                    bevelThickness: layer.bevelThickness,
                    bevelSize: layer.bevelSize,
                    bevelSegments: layer.bevelSegments,
                }
            );
        },
    },
    {
        label: 'SVG',
        value: 'SVG',
        name: 'SVG',
        async box({ THREE }: BaseThreeClass, layer: Layer) {
            const loader = new SVGLoader();
            const { paths } = await loader.loadAsync(layer.modelUrl as string);
            const group = new THREE.Group();

            for (let i = 0; i < paths.length; i++) {
                const path = paths[i];

                const material = new THREE.MeshBasicMaterial({
                    color: path.color as any,
                    side: THREE.DoubleSide,
                    depthWrite: false,
                });

                const shapes = SVGLoader.createShapes(path);

                for (let j = 0; j < shapes.length; j++) {
                    const shape = shapes[j];
                    const geometry = new THREE.ShapeGeometry(shape);
                    const mesh = new THREE.Mesh(geometry, material);
                    group.add(mesh);
                }
            }
            return group;
        },
    },
] as const;
export type OptionsGeometryItemType = Omit<
    (typeof optionsGeometry)[number],
    'box'
> & {
    box(three: BaseThreeClass, layer: Layer): BufferGeometry;
};
export type GeometryType = OptionsGeometryItemType extends {
    value: infer A;
}
    ? A
    : string;
export const filterMap = {
    CapsuleGeometry: ['radius', 'length', 'capSegments', 'radialSegments'],
    BoxGeometry: [
        'width',
        'height',
        'depth',
        'widthSegments',
        'heightSegments',
        'depthSegments',
    ],
    CircleGeometry: ['radius', 'segments', 'thetaStart', 'thetaLength'],
    ConeGeometry: [
        'radius',
        'height',
        'radialSegments',
        'heightSegments',
        'openEnded',
        'thetaStart',
        'thetaLength',
    ],
    CylinderGeometry: [
        'radiusTop',
        'radiusBottom',
        'height',
        'radialSegments',
        'heightSegments',
        'openEnded',
        'thetaStart',
        'thetaLength',
    ],
    DodecahedronGeometry: ['radius', 'detail'],
    EdgesGeometry: ['width', 'height', 'depth'],
    ExtrudeGeometry: [
        'width',
        'length',
        'depth',
        'steps',
        'bevelEnabled',
        'bevelThickness',
        'bevelSize',
        'bevelOffset',
        'bevelSegments',
        'bevelSegments',
        'curveSegments',
        'paths',
    ],
    IcosahedronGeometry: ['radius', 'detail'],
    LatheGeometry: ['segments', 'phiStart', 'phiLength', 'paths'],
    OctahedronGeometry: ['radius', 'detail'],
    PlaneGeometry: ['width', 'height', 'widthSegments', 'heightSegments'],
    PolyhedronGeometry: ['vertices', 'indices', 'radius', 'detail'],
    RingGeometry: [
        'innerRadius',
        'outerRadius',
        'thetaSegments',
        'phiSegments',
        'thetaStart',
        'thetaLength',
    ],
    ShapeGeometry: ['curveSegments', 'paths'],
    SphereGeometry: [
        'radius',
        'widthSegments',
        'heightSegments',
        'phiStart',
        'phiLength',
        'thetaStart',
        'thetaLength',
    ],
    TetrahedronGeometry: ['radius', 'detail'],
    TorusGeometry: [
        'radius',
        'tube',
        'radialSegments',
        'tubularSegments',
        'arc',
    ],
    TorusKnotGeometry: [
        'radius',
        'tube',
        'radialSegments',
        'tubularSegments',
        'p',
        'q',
    ],
    TubeGeometry: ['radius', 'radialSegments', 'tubularSegments', 'closed'],
    TextGeometry: [
        'size',
        'depth',
        'curveSegments',
        'bevelEnabled',
        'bevelThickness',
        'bevelSize',
        'bevelSegments',
        'text',
        'fontName',
    ],
    SVG: ['customMaterial'],
} as Record<GeometryType, string[]>;
export const fieldsGeometryTypeMap = Object.entries(filterMap).reduce<
    Record<string, string[]>
>((a, [type, fields]) => {
    fields.forEach((k) => {
        a[k] = a[k] || [];
        a[k].push(type);
    });
    return a;
}, {});
export default [
    {
        title: 'Basis',
        show: true,
        filter() {
            return (
                !!this.layerActiveGetters &&
                this.layerActiveGetters?.type === 'geometry'
            );
        },
        child: [
            {
                path: 'geometryType',
                defaultValue: 'BoxGeometry',
                config: {
                    type: 'select',
                    cursorGj: null as unknown,
                    props: {
                        filterable: true,
                        options: optionsGeometry.map((e: any) => ({
                            ...e,
                            label: e.name || e.label,
                        })),
                    },
                } as AttrsItemChildConfig,
            },
            {
                path: 'fontName',
                defaultValue: 'BoxGeometry',
                base: {
                    showMore: true,
                    more(): VNode {
                        return h(FontsAssetsPanel);
                    },
                } as AttrsItemChild,
                config: {
                    type: 'select',
                    cursorGj: null as unknown,
                    props: {
                        filterable: true,
                        options: (function () {
                            const opts = ref<any>([]);
                            const store = useWatchStore();
                            watchEffect(() => {
                                opts.value =
                                    store.value?.store3d?.fontNameOptions;
                            });
                            return opts;
                        })(),
                    },
                } as AttrsItemChildConfig,
            },
            {
                path: 'text',
                config: {
                    type: 'input',
                    cursorGj: null as unknown,
                },
                defaultValue: '',
            },
            { path: 'radius', defaultValue: 1 },
            { path: 'length', defaultValue: 1 },
            { path: 'capSegments', defaultValue: 4 },
            { path: 'radialSegments', defaultValue: 8 },
            { path: 'width' },
            { path: 'height' },
            { path: 'depth' },
            { path: 'widthSegments', defaultValue: 1 },
            { path: 'heightSegments', defaultValue: 1 },
            { path: 'depthSegments', defaultValue: 1 },
            { path: 'segments', defaultValue: 32 },
            { path: 'detail', defaultValue: 0 },
            { path: 'radiusTop', defaultValue: 1 },
            { path: 'radiusBottom', defaultValue: 1 },
            { path: 'steps', defaultValue: 1 },
            { path: 'curveSegments', defaultValue: 12 },
            { path: 'bevelThickness', defaultValue: 0.2 },
            { path: 'bevelSize', defaultValue: 0.1 },
            { path: 'bevelOffset', defaultValue: 0 },
            { path: 'bevelSegments', defaultValue: 3 },
            { path: 'innerRadius', defaultValue: 0.5 },
            { path: 'outerRadius', defaultValue: 1 },
            { path: 'tube', defaultValue: 0.4 },
            { path: 'tubularSegments', defaultValue: 48 },
            { path: 'p', defaultValue: 2 },
            { path: 'q', defaultValue: 3 },
            { path: 'size', defaultValue: 3 },
            {
                path: 'closed',
                config: { type: 'switch' },
                defaultValue: false,
            },
            {
                path: 'thetaSegments',
                defaultValue: 32,
                config: { props: { min: 3, max: Infinity } },
            },
            {
                path: 'phiSegments',
                defaultValue: 8,
                config: { props: { min: 1, max: Infinity } },
            },
            {
                path: 'paths',
                base: {
                    showMore: true,
                    more(): VNode {
                        return h(BasisAttrsPathsPreview, {
                            edit: true,
                        });
                    },
                } as AttrsItemChild,
                config: {
                    cursorGj: null,
                    type: 'VNode',
                    renderVNode: h(BasisAttrsPathsPreview, {
                        edit: false,
                    }),
                },
            },
            {
                path: 'bevelEnabled',
                defaultValue: true,
                config: { type: 'switch' },
            },
            {
                path: 'openEnded',
                defaultValue: false,
                config: { type: 'switch' },
            },
            {
                path: 'thetaStart',
                defaultValue: 0,
                config: {
                    cursorGj: 0.001,
                    props: {
                        step: 0.01,
                        min: 0,
                        max: 2 * Math.PI,
                    },
                },
            },
            {
                path: 'arc',
                defaultValue: 2 * Math.PI,
                config: {
                    cursorGj: 0.001,
                    props: {
                        step: 0.01,
                        min: 0,
                        max: 2 * Math.PI,
                    },
                },
            },
            {
                path: 'thetaLength',
                defaultValue: 2 * Math.PI,
                config: {
                    cursorGj: 0.001,
                    props: {
                        step: 0.01,
                        min: 0,
                        max: 2 * Math.PI,
                    },
                },
            },
            {
                path: 'phiStart',
                defaultValue: 0,
                config: {
                    cursorGj: 0.001,
                    props: {
                        step: 0.01,
                        min: 0,
                        max: 2 * Math.PI,
                    },
                },
            },
            {
                path: 'phiLength',
                defaultValue: 2 * Math.PI,
                config: {
                    cursorGj: 0.001,
                    props: {
                        step: 0.01,
                        min: 0,
                        max: 2 * Math.PI,
                    },
                },
            },
            {
                path: 'wireframe',
                config: { type: 'switch' },
                defaultValue: false,
            },
            { path: 'Mesh.position.x' },
            { path: 'Mesh.position.y' },
            { path: 'Mesh.position.z' },
            { path: 'Mesh.rotation.x' },
            { path: 'Mesh.rotation.y' },
            { path: 'Mesh.rotation.z' },
            {
                path: 'Mesh.scale.x',
                config: {
                    cursorGj: 0.001,
                    props: {
                        step: 0.01,
                        min: 0,
                        max: Infinity,
                    },
                },
            },
            {
                path: 'Mesh.scale.y',
                config: {
                    cursorGj: 0.001,
                    props: {
                        step: 0.01,
                        min: 0,
                        max: Infinity,
                    },
                },
            },
            {
                path: 'Mesh.scale.z',
                config: {
                    cursorGj: 0.001,
                    props: {
                        step: 0.01,
                        min: 0,
                        max: Infinity,
                    },
                },
            },
            {
                path: 'Mesh.castShadow',
                config: { type: 'switch' },
                defaultValue: true,
            },
            {
                path: 'Mesh.receiveShadow',
                config: { type: 'switch' },
                defaultValue: true,
            },
            {
                path: 'visible',
                config: { type: 'switch' },
                defaultValue: true,
            },
            {
                path: 'customMaterial',
                config: { type: 'switch' },
                defaultValue: false,
            },
        ].map((label: any) => {
            const isObject =
                Object.prototype.toString.call(label) === '[object Object]';
            const _label = isObject ? label.path : label;
            const defaultValue = isObject ? label.defaultValue : 0;
            return {
                label: _label
                    .replace(/Material\./g, '')
                    .replace(/^./, (m: string) => m.toUpperCase()),
                ...(label?.base || {}),
                filter() {
                    if (
                        typeof _get(label?.base || {}, 'filter') === 'function'
                    ) {
                        return label?.base?.filter?.call?.(this);
                    }
                    if (
                        fieldsGeometryTypeMap[_label] &&
                        fieldsGeometryTypeMap[_label].length > 0
                    ) {
                        const geometryType =
                            this.layerActiveGetters.geometryType ||
                            'BoxGeometry';
                        return fieldsGeometryTypeMap[_label].includes(
                            geometryType
                        );
                    }
                    return true;
                },
                config: _merge(
                    {
                        type: 'number',
                        cursorGj: true,
                        props: {
                            value: createValue(_label, defaultValue),
                        },
                    },
                    isObject ? label?.config || {} : {}
                ),
            };
        }),
    },
] as Attrs;
