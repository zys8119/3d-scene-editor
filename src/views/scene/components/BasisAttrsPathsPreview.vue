<template>
    <div
        class="BasisAttrsPathsPreview w-$width h-$height bg-#191a1d b-rd-5px overflow-hidden flex justify-center items-center"
    >
        <canvas ref="canvasRef" :style="canvasStyle"></canvas>
    </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import useStore3d from '@/store/modules/3d';
import { PaperScope, Color } from 'paper';

const store = useStore3d();
const paths = computed(() => store.layerActiveGetters.paths || []);
const canvasRef = ref<HTMLCanvasElement>() as Ref<HTMLCanvasElement>;
const props = defineProps<{
    edit: boolean;
}>();
const width = computed(() => (props.edit ? 250 : 126));
const height = computed(() => (props.edit ? 250 : 126));
useCssVars(() => {
    return {
        width: `${width.value}px`,
        height: `${height.value}px`,
    };
});
/**
 * 根据矩阵坐标计算面积、宽高、起始坐标
 * @param matrix
 */
function calculateMaxArea(matrix: Array<[number, number]>) {
    const paths = typeof matrix[0]?.[0] === 'number' ? matrix : matrix.flat();
    let minX = 0;
    let maxX = 0;
    let minY = 0;
    let maxY = 0;
    try {
        paths.forEach(([x, y]: any) => {
            minX = Math.min(minX, x);
            maxX = Math.max(maxX, x);
            minY = Math.min(minY, y);
            maxY = Math.max(maxY, y);
        });
    } catch (e) {
        // err
    }

    return {
        area: (maxX - minX) * (maxY - minY),
        width: maxX - minX,
        height: maxY - minY,
        x: minX,
        y: minY,
        mx: maxX,
        my: maxY,
    };
}
const pathsInfo = computed(() => calculateMaxArea(paths.value));
const canvasStyle = computed(() => {
    return props.edit
        ? {}
        : {
              transform: `scale(${Math.min(
                  width.value / pathsInfo.value.width,
                  height.value / pathsInfo.value.height
              )})`,
          };
});

const init = async () => {
    if (canvasRef.value) {
        const canvas = canvasRef.value;
        if (props.edit) {
            canvas.width = width.value;
            canvas.height = height.value;
        } else {
            canvas.width = Math.ceil(pathsInfo.value.width);
            canvas.height = Math.ceil(pathsInfo.value.height);
        }
        const p = new PaperScope();
        p.setup(canvasRef.value);
        if (props.edit) {
            // 平面编辑
            paths.value.forEach((segments) => {
                const path = new p.Path({
                    segments,
                });
                path.closed = true;
                path.fullySelected = true;
                path.fillColor = new Color('#fff');
                path.strokeWidth = 2;
                let segment = null;
                path.onMouseDown = (ev) => {
                    const hitResult = p.project.hitTest(ev.point);
                    segment = hitResult.segment;
                };

                path.onMouseDrag = (ev) => {
                    if (segment) {
                        segment.point.x += ev.delta.x;
                        segment.point.y += ev.delta.y;
                        segments[segment.index] = [
                            segment.point.x,
                            segment.point.y,
                        ];
                    }
                };
            });
        } else {
            const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
            ctx.fillStyle = '#ffff';
            paths.value.forEach((item: any, key) => {
                if (typeof item[0] === 'string') {
                    if (key === 0) {
                        ctx.beginPath();
                        ctx.moveTo(item[0], item[1]);
                    } else {
                        ctx.lineTo(item[0], item[1]);
                    }
                } else {
                    item.forEach(([x, y], k) => {
                        if (k === 0) {
                            ctx.beginPath();
                            ctx.moveTo(x, y);
                        } else {
                            ctx.lineTo(x, y);
                        }
                    });
                }
            });
            ctx.fill();
        }
    }
};
onMounted(init);
watchEffect(async () => {
    if (paths) {
        await init();
    }
});
</script>

<style scoped lang="less">
.BasisAttrsPathsPreview {
}
</style>
