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
import { h, defineComponent, ref, computed } from 'vue';
import { useConfig, useTheme } from '../../../_mixins';
import { useElementSize } from '@vueuse/core';
import style from '../../hand-writing-board/src/styles/index.cssr';
import handWritingBoardLight from '../styles/light';
import { useResizeObserver, useEventListener } from '@vueuse/core';
import { watchEffect } from 'vue';
export const handWritingBoardProp = Object.assign(
    Object.assign({}, useTheme.props),
    {
        lineWidth: {
            type: Number,
            default: 4,
        },
        lineColor: {
            type: String,
            default: '#f00f00',
        },
        disabled: Boolean,
        height: {
            type: Number,
            default: 300,
        },
        wordTip: {
            type: String || null,
            default: '\u624B\u5199\u677F',
        },
        exportType: {
            type: String,
            default: 'image/png',
        },
        tag: {
            type: String,
            default: 'div',
        },
    }
);
const HandWritingBoard = defineComponent({
    name: 'HandWritingBoard',
    props: handWritingBoardProp,
    setup(props) {
        const { mergedClsPrefixRef } = useConfig(props);
        const containRef = ref();
        const { width, height } = useElementSize(containRef);
        const canvas = ref();
        const hasDrew = ref(false);
        const points = ref([]);
        const context = ref(null);
        const startX = ref(0);
        const startY = ref(0);
        const isDrawing = ref(false);
        const rate = ref(1);
        const drawing = ref(false);
        let historyObj = { x: -1, y: -1 };
        let historyWidth = 0;
        let historyTime = 0;
        const drawStartPoint = ref([0, 0]);
        const drawMovePoint = ref([0, 0]);
        function $_resizeHandler() {
            if (!canvas.value) return;
            const realw = parseFloat(
                window.getComputedStyle(canvas.value).width
            );
            context.value = canvas.value.getContext('2d');
            if (!context.value) return;
            context.value.scale(1 * rate.value, 1 * rate.value);
            rate.value = realw / width.value;
            context.value.scale(1 / rate.value, 1 / rate.value);
        }
        function mouseDown(e) {
            if (props.disabled || e.button !== 0) return;
            e.preventDefault();
            isDrawing.value = true;
            hasDrew.value = true;
            const obj = {
                x: e.offsetX,
                y: e.offsetY,
            };
            drawStart(obj);
        }
        function mouseMove(e) {
            if (props.disabled) return;
            e.preventDefault();
            if (isDrawing.value) {
                const obj = {
                    x: e.offsetX,
                    y: e.offsetY,
                };
                drawMove(obj);
            }
        }
        function mouseUp(e) {
            if (props.disabled) return;
            if (!isDrawing.value) return;
            e.preventDefault();
            const obj = {
                x: e.offsetX,
                y: e.offsetY,
            };
            drawEnd(obj);
            isDrawing.value = false;
        }
        function touchStart(e) {
            if (props.disabled) return;
            if (!canvas.value) return;
            e.preventDefault();
            hasDrew.value = true;
            if (e.touches.length === 1) {
                const obj = {
                    x:
                        e.targetTouches[0].clientX -
                        canvas.value.getBoundingClientRect().left,
                    y:
                        e.targetTouches[0].clientY -
                        canvas.value.getBoundingClientRect().top,
                };
                drawStart(obj);
            }
        }
        function touchMove(e) {
            if (props.disabled) return;
            if (!canvas.value) return;
            e.preventDefault();
            if (e.touches.length === 1) {
                const obj = {
                    x:
                        e.targetTouches[0].clientX -
                        canvas.value.getBoundingClientRect().left,
                    y:
                        e.targetTouches[0].clientY -
                        canvas.value.getBoundingClientRect().top,
                };
                drawMove(obj);
            }
        }
        function touchEnd(e) {
            if (props.disabled) return;
            if (!canvas.value) return;
            e.preventDefault();
            const obj = {
                x: drawMovePoint.value[0],
                y: drawMovePoint.value[1],
            };
            drawEnd(obj);
        }
        function drawStart(obj) {
            startX.value = obj.x;
            startY.value = obj.y;
            drawStartPoint.value = [obj.x, obj.y];
            drawMovePoint.value = [obj.x, obj.y];
            drawing.value = true;
            if (!context.value) return;
            historyObj = obj;
            historyTime = performance.now();
            historyWidth = props.lineWidth * rate.value;
            points.value.push(obj);
        }
        function drawMove(obj) {
            penDrawMove(obj);
            drawMovePoint.value = [obj.x, obj.y];
            startY.value = obj.y;
            startX.value = obj.x;
            points.value.push(obj);
        }
        function penDrawMove(obj) {
            if (!context.value) return;
            context.value.beginPath();
            context.value.moveTo(startX.value, startY.value);
            context.value.lineTo(obj.x, obj.y);
            context.value.strokeStyle = props.lineColor;
            context.value.lineWidth = props.lineWidth * rate.value;
            if (historyObj.x !== -1) {
                const speed =
                    Math.sqrt(
                        Math.pow(obj.x - historyObj.x, 2) +
                            Math.pow(obj.y - historyObj.y, 2)
                    ) /
                    (performance.now() - historyTime);
                const scale = speed > 2 ? 1 : speed / 2;
                context.value.lineWidth =
                    historyWidth * 0.9 +
                    props.lineWidth *
                        rate.value *
                        0.1 *
                        (0.1 + 0.9 - scale * 0.9);
            }
            historyWidth = context.value.lineWidth;
            historyObj = obj;
            historyTime = performance.now();
            context.value.lineCap = 'round';
            context.value.lineJoin = 'round';
            context.value.stroke();
            context.value.closePath();
        }
        function drawEnd(obj) {
            if (!context.value) return;
            drawing.value = false;
            historyTime = 0;
            historyWidth = 0;
            historyObj = { x: -1, y: -1 };
        }
        function reset() {
            if (!context.value || !canvas.value) return;
            context.value.clearRect(
                0,
                0,
                canvas.value.width * rate.value,
                canvas.value.height * rate.value
            );
            points.value = [];
            hasDrew.value = false;
        }
        function getCanvasContent() {
            return __awaiter(this, void 0, void 0, function* () {
                return yield new Promise((resolve, reject) => {
                    var _a;
                    const obj = {
                        file: null,
                        url: null,
                    };
                    try {
                        (_a = canvas.value) === null || _a === void 0
                            ? void 0
                            : _a.toBlob((res) => {
                                  obj.file = res;
                                  obj.url = obj.file
                                      ? URL.createObjectURL(obj.file)
                                      : null;
                                  resolve(obj);
                              }, props.exportType);
                    } catch (e) {
                        console.log(e);
                        reject(e);
                    }
                });
            });
        }
        useResizeObserver(canvas, $_resizeHandler);
        useEventListener('mouseup', (e) => {
            mouseUp(e);
            drawing.value = false;
            isDrawing.value = false;
        });
        watchEffect(() => {
            if (canvas.value && width.value > 0 && height.value > 0) {
                canvas.value.width = width.value - 10;
                canvas.value.height = height.value - 10;
                reset();
            }
        });
        const themeRef = useTheme(
            'HandWritingBoard',
            '-hand-writing-board',
            style,
            handWritingBoardLight,
            props,
            mergedClsPrefixRef
        );
        const cssVarsRef = computed(() => {
            const {
                self: { baseColor, borderColor },
            } = themeRef.value;
            return {
                height: `${props.height}px`,
                cursor: `${props.disabled ? 'not-allowed' : 'crosshair'}`,
                '--n-background-color': baseColor,
                '--n-border-color': borderColor,
            };
        });
        return {
            cssVarsRef,
            mergedClsPrefix: mergedClsPrefixRef,
            canvas,
            containRef,
            mouseDown,
            mouseMove,
            mouseUp,
            touchStart,
            touchMove,
            touchEnd,
            reset,
            getCanvasContent,
        };
    },
    render() {
        const { tag: Component, mergedClsPrefix } = this;
        return h(
            Component,
            {
                class: `${mergedClsPrefix}-hand-writing-board`,
                style: this.cssVarsRef,
                ref: 'containRef',
            },
            h('canvas', {
                ref: 'canvas',
                onMousedown: this.mouseDown,
                onMousemove: this.mouseMove,
                onMouseup: this.mouseUp,
                onTouchstart: this.touchStart,
                onTouchmove: this.touchMove,
                onTouchend: this.touchEnd,
            }),
            this.wordTip
                ? h(
                      Component,
                      {
                          class: `${mergedClsPrefix}-hand-writing-board-word-tip`,
                      },
                      this.wordTip
                  )
                : ''
        );
    },
});
export default HandWritingBoard;
