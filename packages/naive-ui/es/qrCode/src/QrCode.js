import { computed, defineComponent } from 'vue';
import { useConfig, useTheme } from '../../_mixins';
import style from './styles/index.cssr';
import { qrCodeLight } from '../styles';
import QRCode from 'qrcodejs2-fixes';
import { ref, watchEffect, h } from 'vue';
export const qrCodeProps = Object.assign(Object.assign({}, useTheme.props), {
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
});
export default defineComponent({
    name: 'QrCode',
    props: qrCodeProps,
    setup(props, { slots, expose, emit }) {
        const { mergedClsPrefixRef } = useConfig(props);
        const themeRef = useTheme(
            'QrCode',
            '-qrCode',
            style,
            qrCodeLight,
            props,
            mergedClsPrefixRef
        );
        const cssVarsRef = computed(() => {
            const {
                self: { padding },
            } = themeRef.value;
            return {
                '--n-padding': padding,
            };
        });
        const correctLevelType = ref({
            L: QRCode.CorrectLevel.L,
            M: QRCode.CorrectLevel.M,
            Q: QRCode.CorrectLevel.Q,
            H: QRCode.CorrectLevel.H,
        });
        const canvasRef = ref();
        const codeDom = document.createElement('div');
        const renderCode = () => {
            const size = props.qrProps.size || 100;
            codeDom.innerHTML = '';
            if (canvasRef.value) {
                const qrcode = new QRCode(
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
        const correctLevel = computed(() => {
            const { correctLevel: correctLevel2 } = props.qrProps;
            if (props.logo) {
                return correctLevel2
                    ? correctLevelType.value[correctLevel2]
                    : QRCode.CorrectLevel.H;
            } else {
                return correctLevel2
                    ? correctLevelType.value[correctLevel2]
                    : QRCode.CorrectLevel.L;
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
