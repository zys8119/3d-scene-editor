<template>
    <div
        class="BasisAttrsPathsPreview w-126px h-126px bg-#191a1d b-rd-5px overflow-hidden flex justify-center items-center"
    >
        <canvas ref="canvasRef" :style="canvasStyle"></canvas>
    </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import useStore3d from '@/store/modules/3d';

const store = useStore3d();
const paths = computed(() => store.layerActiveGetters.paths || []);
const canvasRef = ref<HTMLCanvasElement>() as Ref<HTMLCanvasElement>;

/**
 * 根据矩阵坐标计算面积、宽高、起始坐标
 * @param matrix
 */
function calculateMaxArea(matrix: Array<[number, number]>) {
    const paths = matrix.flat();
    let minX = 0;
    let maxX = 0;
    let minY = 0;
    let maxY = 0;
    paths.forEach(([x, y]: any) => {
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
    });
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
    return {
        transform: `scale(${Math.min(
            126 / pathsInfo.value.width,
            126 / pathsInfo.value.height
        )})`,
    };
});

const init = async () => {
    if (canvasRef.value) {
        const canvas = canvasRef.value;
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
        canvas.width = pathsInfo.value.width;
        canvas.height = pathsInfo.value.height;
        ctx.fillStyle = '#ffff';
        paths.value.forEach((item) => {
            item.forEach(([x, y], k) => {
                if (k === 0) {
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            });
        });
        ctx.fill();
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
