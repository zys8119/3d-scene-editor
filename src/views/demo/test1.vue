<template>
    <div>
        <video
            class="w-100"
            src="https://platform.nbzx.gov.cn/files/video/video_20230420101433_133_3%E6%9C%8825%E6%97%A5%E8%AF%BB%E4%B9%A6%E4%BC%9A.mp4"
            controls
        ></video>
        <SvgIcon name="svgs-qita-fill" :size="20" />
        <n-permission has="a">
            <n-button>添加1</n-button>
        </n-permission>
        <n-permission>
            <n-button>添加2</n-button>
        </n-permission>
    </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
