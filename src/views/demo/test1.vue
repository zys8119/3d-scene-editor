<template>
    <div>
        <SvgIcon name="svgs-qita-fill" :size="20" />
        <n-permission :has="['a', 'b']">
            <n-button>添加</n-button>
        </n-permission>
        <n-permission>
            <n-button>添加</n-button>
        </n-permission>
    </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
