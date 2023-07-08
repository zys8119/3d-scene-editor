const { ref, watchEffect, h } = require('vue');
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.qrCodeProps = void 0;
const vue_1 = require('vue');
const _mixins_1 = require('../../_mixins');
const index_cssr_1 = __importDefault(require('./styles/index.cssr'));
const styles_1 = require('../styles');
const qrcodejs2_fixes_1 = __importDefault(require('qrcodejs2-fixes'));
exports.qrCodeProps = Object.assign(
    Object.assign({}, _mixins_1.useTheme.props),
    {
        modelValue: {
            type: String,
            default: '',
        },
        qrProps: {
            type: Object,
            default: () => ({}),
        },
        padding: {
            type: Number,
            default: 10,
        },
        logo: {
            type: String,
            default: '',
        },
        logoSize: {
            type: Number,
            default: 50,
        },
        logoRound: {
            type: Boolean,
            default: false,
        },
        downloadFileName: {
            type: String,
            default: '\u4E8C\u7EF4\u7801',
        },
        border: {
            type: Boolean,
            default: false,
        },
        borderSize: {
            type: Number,
            default: 2,
        },
        borderColor: {
            type: String,
            default: '#ccc',
        },
    }
);
exports.default = (0, vue_1.defineComponent)({
    name: 'QrCode',
    props: exports.qrCodeProps,
    setup(props, { slots, expose, emit }) {
        const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props);
        const themeRef = (0, _mixins_1.useTheme)(
            'QrCode',
            '-qrCode',
            index_cssr_1.default,
            styles_1.qrCodeLight,
            props,
            mergedClsPrefixRef
        );
        const cssVarsRef = (0, vue_1.computed)(() => {
            const {
                self: { padding },
            } = themeRef.value;
            return {
                '--n-padding': padding,
            };
        });
        const correctLevelType = ref({
            L: qrcodejs2_fixes_1.default.CorrectLevel.L,
            M: qrcodejs2_fixes_1.default.CorrectLevel.M,
            Q: qrcodejs2_fixes_1.default.CorrectLevel.Q,
            H: qrcodejs2_fixes_1.default.CorrectLevel.H,
        });
        const canvasRef = ref();
        const codeDom = document.createElement('div');
        const renderCode = () => {
            const size = props.qrProps.size || 100;
            codeDom.innerHTML = '';
            if (canvasRef.value) {
                const qrcode = new qrcodejs2_fixes_1.default(
                    codeDom,
                    Object.assign(
                        Object.assign(
                            { text: props.modelValue },
                            props.qrProps
                        ),
                        {
                            width: size,
                            height: size,
                            correctLevel: correctLevel.value,
                        }
                    )
                );
                const image = qrcode._el.children[1];
                image.setAttribute('crossOrigin', 'Anonymous');
                const canvas = canvasRef.value;
                const cxt = canvas.getContext('2d');
                image.onload = () => {
                    try {
                        cxt.fillStyle = '#FFFFFF';
                        cxt.fillRect(0, 0, size, size);
                        cxt.drawImage(
                            image,
                            props.padding,
                            props.padding,
                            size - props.padding * 2,
                            size - props.padding * 2
                        );
                        if (props.border) {
                            cxt.lineWidth = props.borderSize;
                            cxt.strokeStyle = props.borderColor;
                            cxt.strokeRect(0, 0, size, size);
                        }
                        if (props.logo) {
                            const logoImg = new Image();
                            logoImg.src = props.logo;
                            logoImg.setAttribute('crossOrigin', 'Anonymous');
                            logoImg.onload = () => {
                                const x = (size - props.logoSize) / 2;
                                const y = (size - props.logoSize) / 2;
                                cxt.fillStyle = '#FFFFFF';
                                if (props.logoRound) {
                                    cxt.beginPath();
                                    cxt.arc(
                                        x + props.logoSize / 2,
                                        y + props.logoSize / 2,
                                        props.logoSize / 2 + 5,
                                        0,
                                        2 * Math.PI
                                    );
                                    cxt.closePath();
                                    cxt.fill();
                                    cxt.beginPath();
                                    cxt.arc(
                                        x + props.logoSize / 2,
                                        y + props.logoSize / 2,
                                        props.logoSize / 2,
                                        0,
                                        2 * Math.PI
                                    );
                                    cxt.closePath();
                                    cxt.clip();
                                }
                                cxt.fillRect(
                                    x - 5,
                                    y - 5,
                                    props.logoSize + 10,
                                    props.logoSize + 10
                                );
                                cxt.drawImage(
                                    logoImg,
                                    x,
                                    y,
                                    props.logoSize,
                                    props.logoSize
                                );
                                cxt.restore();
                            };
                        }
                    } catch (e) {
                        console.log(e);
                    }
                };
            }
        };
        const correctLevel = (0, vue_1.computed)(() => {
            const { correctLevel: correctLevel2 } = props.qrProps;
            if (props.logo) {
                return correctLevel2
                    ? correctLevelType.value[correctLevel2]
                    : qrcodejs2_fixes_1.default.CorrectLevel.H;
            } else {
                return correctLevel2
                    ? correctLevelType.value[correctLevel2]
                    : qrcodejs2_fixes_1.default.CorrectLevel.L;
            }
        });
        const download = () => {
            if (canvasRef.value) {
                const url = canvasRef.value.toDataURL();
                const a = document.createElement('a');
                a.download = `${props.downloadFileName}.png`;
                a.href = url;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }
        };
        watchEffect(() => {
            if (props.modelValue) renderCode();
        });
        return {
            cssVarsRef,
            mergedClsPrefix: mergedClsPrefixRef,
            canvasRef,
            download,
            renderCode,
        };
    },
    render() {
        const { mergedClsPrefix, $props } = this;
        return h(
            h(
                'div',
                {
                    class: [`${mergedClsPrefix}-qr-code`],
                    style: {
                        width: $props.qrProps.size || 100 + 'px',
                        height: $props.qrProps.size || 100 + 'px',
                    },
                },
                h('canvas', {
                    ref: 'canvasRef',
                    width: $props.qrProps.size || 100,
                    height: $props.qrProps.size || 100,
                })
            )
        );
    },
});
