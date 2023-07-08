var __awaiter = function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P
            ? value
            : new P(function (resolve) {
                  resolve(value);
              });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator['throw'](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done
                ? resolve(result.value)
                : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Scene, PerspectiveCamera, WebGLRenderer, Clock } from 'three';
import * as THREE from 'three';
import { merge } from 'lodash-es';
import WebGL from 'three/examples/jsm/capabilities/WebGL.js';
import GUI from 'lil-gui';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
import { VertexNormalsHelper } from 'three/examples/jsm/helpers/VertexNormalsHelper.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { parse as parseFont } from 'opentype.js';
import { getCurrentInstance, defineComponent } from 'vue';
import { useConfig, useTheme } from '../../../_mixins';
import style from './styles/index.cssr';
import { threeLight } from '../styles';
import { ref, watchEffect, nextTick, watch, computed, onMounted, h } from 'vue';
import { useWindowSize, useElementSize } from '@vueuse/core';
export const convertFont = function (font, text, outJs) {
    const fintGlyphs = font.glyphs.glyphs;
    const scale = (1e3 * 100) / ((font.unitsPerEm || 2048) * 72);
    const result = {};
    result.glyphs = {};
    const restriction = {
        range: null,
        set: null,
    };
    if (text) {
        const restrictContent = text;
        const rangeSeparator = '-';
        if (restrictContent.includes(rangeSeparator)) {
            const rangeParts = restrictContent.split(rangeSeparator);
            if (
                rangeParts.length === 2 &&
                !isNaN(rangeParts[0]) &&
                !isNaN(rangeParts[1])
            ) {
                restriction.range = [
                    parseInt(rangeParts[0]),
                    parseInt(rangeParts[1]),
                ];
            }
        }
        if (restriction.range === null) {
            restriction.set = restrictContent;
        }
    }
    for (const k in fintGlyphs) {
        const glyph = fintGlyphs[k];
        if (glyph.unicode !== void 0) {
            const glyphCharacter = String.fromCharCode(glyph.unicode);
            let needToExport = true;
            if (restriction.range !== null) {
                needToExport =
                    glyph.unicode >= restriction.range[0] &&
                    glyph.unicode <= restriction.range[1];
            } else if (restriction.set !== null) {
                needToExport =
                    text === null || text === void 0
                        ? void 0
                        : text.includes(glyphCharacter);
            }
            if (needToExport) {
                const token = {};
                token.ha = Math.round(glyph.advanceWidth * scale);
                token.x_min = Math.round(glyph.xMin * scale);
                token.x_max = Math.round(glyph.xMax * scale);
                token.o = '';
                glyph.path.commands.forEach(function (command) {
                    if (command.type.toLowerCase() === 'c') {
                        command.type = 'b';
                    }
                    token.o += command.type.toLowerCase();
                    token.o += ' ';
                    if (command.x !== void 0 && command.y !== void 0) {
                        token.o += Math.round(command.x * scale);
                        token.o += ' ';
                        token.o += Math.round(command.y * scale);
                        token.o += ' ';
                    }
                    if (command.x1 !== void 0 && command.y1 !== void 0) {
                        token.o += Math.round(command.x1 * scale);
                        token.o += ' ';
                        token.o += Math.round(command.y1 * scale);
                        token.o += ' ';
                    }
                    if (command.x2 !== void 0 && command.y2 !== void 0) {
                        token.o += Math.round(command.x2 * scale);
                        token.o += ' ';
                        token.o += Math.round(command.y2 * scale);
                        token.o += ' ';
                    }
                });
                result.glyphs[String.fromCharCode(glyph.unicode)] = token;
            }
        }
    }
    result.ascender = Math.round(font.ascender * scale);
    result.descender = Math.round(font.descender * scale);
    result.underlinePosition = Math.round(
        font.tables.post.underlinePosition * scale
    );
    result.underlineThickness = Math.round(
        font.tables.post.underlineThickness * scale
    );
    result.boundingBox = {
        yMin: Math.round(font.tables.head.yMin * scale),
        xMin: Math.round(font.tables.head.xMin * scale),
        yMax: Math.round(font.tables.head.yMax * scale),
        xMax: Math.round(font.tables.head.xMax * scale),
    };
    result.resolution = 1e3;
    try {
        result.familyName = font.names.fullName.en;
        result.original_font_information = font.tables.name;
        if (font.names.fullName.en.toLowerCase().includes('bold')) {
            result.cssFontWeight = 'bold';
        } else {
            result.cssFontWeight = 'normal';
        }
        if (font.names.fullName.en.toLowerCase().includes('italic')) {
            result.cssFontStyle = 'italic';
        } else {
            result.cssFontStyle = 'normal';
        }
    } catch (e) {}
    if (outJs) {
        return (
            'if (_typeface_js && _typeface_js.loadFace) _typeface_js.loadFace(' +
            JSON.stringify(result) +
            ');'
        );
    } else {
        return result;
    }
};
export class BaseThreeClass {
    constructor(props, ctx, vm) {
        this.props = props;
        this.ctx = ctx;
        this.vm = vm;
        this.THREE = THREE;
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.controls = null;
        this.fonts = /* @__PURE__ */ new Map();
        this.imagesTexture = /* @__PURE__ */ new Map();
        this.gltfs = /* @__PURE__ */ new Map();
        this.isRender = false;
        this.gui = null;
        this.guiCallback = null;
        this.clock = null;
        this.clockTime = null;
        this.stats = null;
        this.light = null;
        this.lightHelper = null;
        this.cameraHelper = null;
        this.planeGeometryMesh = null;
        this.requestAnimationFrameIndex = null;
        this.xLine = null;
        this.yLine = null;
        this.zLine = null;
        this.isWatchUpDate = false;
        this.isGui = false;
        this.reset();
    }
    setScene() {
        this.scene = new Scene();
    }
    setCamera() {
        this.camera = new PerspectiveCamera(
            this.props.fov,
            this.props.aspect ||
                this.vm.exposed.innerWidth.value /
                    this.vm.exposed.innerHeight.value,
            this.props.near,
            this.props.far
        );
        this.camera.lookAt(0, 0, 0);
        this.camera.position.set(
            this.vm.exposed.initializationData.value.camera.x,
            this.vm.exposed.initializationData.value.camera.y,
            this.vm.exposed.initializationData.value.camera.z
        );
    }
    setRenderer() {
        this.renderer = new WebGLRenderer({
            canvas: this.vm.exposed.canvas.value,
            alpha: true,
            antialias: true,
        });
        this.renderer.setSize(
            this.props.sizeWidth || this.vm.exposed.innerWidth.value,
            this.props.sizeHeight || this.vm.exposed.innerHeight.value
        );
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }
    setLight() {
        var _a, _b, _c, _d;
        const light = new THREE.DirectionalLight(16777215, 2);
        light.castShadow = true;
        light.position.set(1e3, 1e3, 1e3);
        light.target.position.set(-0, -0, -0);
        const d = 1e3;
        light.shadow.camera.left = -d;
        light.shadow.camera.right = d;
        light.shadow.camera.top = d;
        light.shadow.camera.bottom = -d;
        light.shadow.camera.near = 0.1;
        light.shadow.camera.far = 1e4;
        this.light = light;
        (_a = this.scene) === null || _a === void 0 ? void 0 : _a.add(light);
        (_b = this.scene) === null || _b === void 0
            ? void 0
            : _b.add(light.target);
        const helper = new THREE.DirectionalLightHelper(light);
        this.lightHelper = helper;
        (_c = this.scene) === null || _c === void 0 ? void 0 : _c.add(helper);
        const cameraHelper = new THREE.CameraHelper(light.shadow.camera);
        this.cameraHelper = cameraHelper;
        (_d = this.scene) === null || _d === void 0
            ? void 0
            : _d.add(cameraHelper);
    }
    setMouseController() {
        this.controls = new OrbitControls(
            this.camera,
            this.renderer.domElement
        );
        this.controls.update();
    }
    planeGeometry() {
        const size = 1500;
        const groundGeometry = new THREE.PlaneGeometry(size, size);
        const groundMaterial = new THREE.MeshPhongMaterial({
            color: 13404262,
            side: THREE.DoubleSide,
            map: this.downloadImagesTexture(
                'https://img2.baidu.com/it/u=3539900690,2292901709&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'
            ),
        });
        const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
        groundMesh.rotation.x = Math.PI * -0.5;
        groundMesh.receiveShadow = true;
        this.scene.add(groundMesh);
        this.planeGeometryMesh = groundMesh;
        return {
            box: groundGeometry,
            material: groundMaterial,
            mesh: groundMesh,
        };
    }
    checkWebGL(callback) {
        if (WebGL.isWebGLAvailable()) {
            callback();
        } else {
            this.vm.exposed.baseTheeEl.value.appendChild(
                WebGL.getWebGLErrorMessage()
            );
        }
    }
    requestAnimationFrame(fn) {
        cancelAnimationFrame(this.requestAnimationFrameIndex);
        this.requestAnimationFrameIndex = requestAnimationFrame(() => {
            fn === null || fn === void 0 ? void 0 : fn();
            this.requestAnimationFrame(fn);
        });
    }
    initRender() {
        if (this.isWatchUpDate) {
            this.clock = new Clock();
            this.ctx.emit('load', this);
            this.requestAnimationFrame(() => {
                this.clockTime = this.clock.getDelta();
                this.ctx.emit('animation', this);
                this.render();
            });
            this.render();
        }
    }
    render() {
        var _a, _b;
        this.isRender = true;
        (_b =
            (_a = this.stats) === null || _a === void 0
                ? void 0
                : _a.update) === null || _b === void 0
            ? void 0
            : _b.call(_a);
        this.renderer.render(this.scene, this.camera);
    }
    drawLine(points, color = 16777215) {
        const material = new THREE.LineBasicMaterial({ color, linewidth: 50 });
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, material);
        this.scene.add(line);
        return line;
    }
    setCoordinateLine(lingMax = 100) {
        this.xLine = this.drawLine(
            [new THREE.Vector3(0, 0, 0), new THREE.Vector3(lingMax, 0, 0)],
            '#ff0000'
        );
        this.yLine = this.drawLine(
            [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, lingMax, 0)],
            '#00ff3a'
        );
        this.zLine = this.drawLine(
            [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, lingMax)],
            '#250bc7'
        );
        const geometry = new THREE.BoxGeometry(10, 10, 10, 2, 2, 2);
        const material = new THREE.MeshBasicMaterial({ color: 16711680 });
        const box = new THREE.Mesh(geometry, material);
        const helper1 = new VertexNormalsHelper(box, 2, 65280);
        this.scene.add(box);
        this.scene.add(helper1);
    }
    addBoxGeometry(url) {
        const box = new THREE.BoxGeometry(100, 100, 100);
        const material = new THREE.MeshLambertMaterial({
            map: url ? this.downloadImagesTexture(url) : null,
            transparent: true,
        });
        const mesh = new THREE.Mesh(box, material);
        mesh.position.set(0, 50, 0);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        this.scene.add(mesh);
        return {
            box,
            material,
            mesh,
        };
    }
    addText(text, fontName, map) {
        return __awaiter(this, void 0, void 0, function* () {
            const box = new TextGeometry(text, {
                font: this.fonts.get(fontName).font,
                size: 80,
                height: 5,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 10,
                bevelSize: 0,
                bevelSegments: 5,
            });
            const material = new THREE.MeshPhongMaterial({
                flatShading: true,
                color: '#00a6ff',
                map: map || null,
            });
            const mesh = new THREE.Mesh(box, material);
            mesh.castShadow = true;
            this.scene.add(mesh);
            return {
                mesh,
                material,
                box,
            };
        });
    }
    gridHelper() {
        const G = new THREE.GridHelper(1e3, 10, 8947848, 4473924);
        this.scene.add(G);
        return G;
    }
    transformControls() {
        const control = new TransformControls(
            this.camera,
            this.renderer.domElement
        );
        control.addEventListener('change', () => {
            this.render();
        });
        control.addEventListener('dragging-changed', (event) => {
            this.controls.enabled = !event.value;
        });
        this.scene.add(control);
        return control;
    }
    downloadFonts(fontUrl, familyName) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (this.fonts.has(familyName)) {
                return (_a = this.fonts.get(familyName)) === null ||
                    _a === void 0
                    ? void 0
                    : _a.font;
            }
            if (this.fonts.has(fontUrl)) {
                return (_b = this.fonts.get(fontUrl)) === null || _b === void 0
                    ? void 0
                    : _b.font;
            }
            const fontArrayBuffer = parseFont(
                yield fetch(fontUrl).then((res) =>
                    __awaiter(this, void 0, void 0, function* () {
                        return yield res.arrayBuffer();
                    })
                )
            );
            const fontJson = convertFont(fontArrayBuffer);
            const fontInfo = {
                fontJson,
                font: new FontLoader().parse(fontJson),
            };
            this.fonts.set(
                familyName || fontJson.familyName || fontUrl,
                fontInfo
            );
            return fontInfo.font;
        });
    }
    downloadImagesTexture(url, imageName) {
        if (this.imagesTexture.has(imageName)) {
            return this.imagesTexture.get(imageName);
        }
        const texture = new THREE.TextureLoader().load(url);
        this.imagesTexture.set(
            imageName || url,
            new THREE.TextureLoader().load(url)
        );
        return texture;
    }
    watchUpDate() {
        if (!this.isWatchUpDate) {
            let el = { width: ref(0), height: ref(0) };
            let stop = null;
            watchEffect(() => {
                if (this.props.fixed) {
                    el = useWindowSize();
                } else {
                    el = useElementSize(this.vm.vnode.el);
                }
                stop === null || stop === void 0 ? void 0 : stop();
                stop = watchEffect(() => {
                    this.vm.exposed.innerWidth.value = el.width.value;
                    this.vm.exposed.innerHeight.value = el.height.value;
                    if (
                        this.vm.exposed.innerWidth.value > 0 &&
                        this.vm.exposed.innerHeight.value
                    ) {
                        this.isWatchUpDate = true;
                        nextTick(() => {
                            this.reset();
                        });
                    }
                });
            });
            watchEffect(() => {
                this.vm.exposed.initializationData.value = merge(
                    this.vm.exposed.initializationData.value,
                    this.props.initializationData
                );
            });
            watchEffect(() => {
                if (this.props.gui) {
                    this.addGUI();
                }
            });
            this.ctx.emit(
                'update:initialization-data',
                this.vm.exposed.initializationData.value
            );
            watch(
                this.vm.exposed.initializationData,
                () => {
                    this.ctx.emit(
                        'update:initialization-data',
                        this.vm.exposed.initializationData.value
                    );
                },
                { deep: true }
            );
            watchEffect(() => {
                var _a;
                (_a = this.guiCallback) === null || _a === void 0
                    ? void 0
                    : _a.call(this);
                this.render();
            });
        }
    }
    addGUI() {
        var _a, _b;
        if (!this.isGui) {
            this.isGui = true;
            if (this.gui) {
                this.gui.destroy();
            }
            this.gui = new GUI({
                container: this.vm.exposed.baseTheeGuiEl.value,
            });
            this.gui.title('\u5168\u5C40\u6570\u636E\u914D\u7F6E');
            try {
                this.guiCallback =
                    (_b = (_a = this.vm.vnode.props).onGui) === null ||
                    _b === void 0
                        ? void 0
                        : _b.call(
                              _a,
                              this.vm.exposed.initializationData.value,
                              this
                          );
            } catch (e) {}
        }
        return this.gui;
    }
    addGLTFLoader(url, name) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.gltfs.has(name)) {
                return this.gltfs.get(name);
            }
            if (this.gltfs.has(url)) {
                return this.gltfs.get(url);
            }
            const gltf = yield new GLTFLoader().loadAsync(url);
            this.gltfs.set(name || url, gltf);
            return gltf;
        });
    }
    setStats() {
        if (!this.stats) {
            this.stats = Stats();
            this.vm.exposed.baseTheeStatsEl.value.appendChild(this.stats.dom);
        }
    }
    reset() {
        this.checkWebGL(() => {
            this.setScene();
            this.setCamera();
            this.setRenderer();
            this.watchUpDate();
            if (this.props.mouseController) {
                this.setMouseController();
            }
            if (this.props.stats) {
                this.setStats();
            }
            if (this.props.light) {
                this.setLight();
            }
            if (this.props.coordinateLine) {
                this.setCoordinateLine();
            }
            if (this.props.planeGeometry) {
                this.planeGeometry();
            }
            this.initRender();
        });
    }
}
export const propsBaseThree = {
    modelValue: {},
    fov: {},
    near: {},
    far: {},
    aspect: {},
    sizeWidth: {},
    sizeHeight: {},
    initializationData: {},
    mouseController: { default: true },
    stats: {},
    light: { default: true },
    coordinateLine: {},
    planeGeometry: {},
    fixed: {},
    gui: {},
};
export const emits = {
    load: (myThee) => true,
    animation: (myThee) => true,
    gui: (data, myThee) => true,
    'update:modelValue': (myThee) => true,
    'update:initialization-data': (data) => true,
};
const three3D = defineComponent({
    name: 'Three',
    props: propsBaseThree,
    emits,
    setup(props, ctx) {
        const { mergedClsPrefixRef } = useConfig(props);
        useTheme(
            'Three',
            '-three',
            style,
            threeLight,
            props,
            mergedClsPrefixRef
        );
        const cssVarsRef = computed(() => {
            return {};
        });
        const initializationData = ref({
            camera: {
                x: 400,
                y: 400,
                z: 400,
                step: 10,
            },
        });
        const canvas = ref();
        const baseTheeEl = ref();
        const baseTheeGuiEl = ref();
        const baseTheeStatsEl = ref();
        const innerWidth = ref(0);
        const innerHeight = ref(0);
        const { slots, expose } = ctx;
        const vm = getCurrentInstance();
        expose({
            canvas,
            baseTheeEl,
            baseTheeGuiEl,
            baseTheeStatsEl,
            innerWidth,
            innerHeight,
            initializationData,
            vm,
        });
        onMounted(() => {
            const myThree = new BaseThreeClass(props, ctx, vm);
            ctx.emit('update:modelValue', myThree);
        });
        return () => {
            var _a;
            return h(
                'div',
                {
                    style: cssVarsRef.value,
                    class: `${mergedClsPrefixRef.value}-base-three`,
                    ref: baseTheeEl,
                },
                h('canvas', {
                    class: `${mergedClsPrefixRef.value}-base-three__canvas`,
                    ref: canvas,
                }),
                slots.panel
                    ? h(
                          'div',
                          {
                              class: `${mergedClsPrefixRef.value}-base-three__panel`,
                          },
                          (_a = slots.panel) === null || _a === void 0
                              ? void 0
                              : _a.call(slots, initializationData.value)
                      )
                    : null,
                h('div', {
                    class: `${mergedClsPrefixRef.value}-base-three__gui`,
                    ref: baseTheeGuiEl,
                }),
                h('div', {
                    class: `${mergedClsPrefixRef.value}-base-three__stats`,
                    ref: baseTheeStatsEl,
                })
            );
        };
    },
});
export default three3D;
