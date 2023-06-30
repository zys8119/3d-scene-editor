<template>
    <div class="Attribute flex flex-col">
        <n-space justify="space-between" class="p-10px">
            <div
                class="w-30px h-30px flex justify-center items-center bg-#29c194 text-#ffffff text-12px b-rd-100%"
            >
                Zys
            </div>
            <div>icon</div>
        </n-space>

        <div class="Attribute-Content flex-1 b-t-solid b-t-1px b-t-#5c5c5e">
            <div v-for="(item, key) in 100" :key="key">{{ item }}</div>
        </div>
    </div>
</template>

<script lang="ts"></script>

<style scoped lang="less">
.Attribute {
    position: absolute;
    right: 15px;
    top: 15px;
    background: #111316;
    width: 230px;
    height: calc((100% - 15px * 2));
    border-radius: 10px;
    color: #9d9ea0;
    z-index: 1;
    overflow: hidden;
    transition: all ease-in-out 300ms;
    &-Content {
        overflow-x: hidden;
        &::-webkit-scrollbar {
            display: none;
        }
    }
}
</style>
