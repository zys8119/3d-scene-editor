<template>
    <div class="MaterialMap p-15px min-w-120px flex flex-col gap-10px">
        <label>
            <div
                class="bg-#1a191d h-40px b-rd-10px text-12px justify-center items-center flex hover:color-#478cf9"
            >
                <svg
                    t="1688536022702"
                    class="icon w-100% h-100% fill-current"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2307"
                    width="200"
                    height="200"
                >
                    <path
                        d="M801.171 483.589H544V226.418c0-17.673-14.327-32-32-32s-32 14.327-32 32v257.171H222.83c-17.673 0-32 14.327-32 32s14.327 32 32 32H480v257.17c0 17.673 14.327 32 32 32s32-14.327 32-32v-257.17h257.171c17.673 0 32-14.327 32-32s-14.327-32-32-32z"
                        fill=""
                        p-id="2308"
                    ></path>
                </svg>
            </div>
            <input hidden type="file" @change="change" />
        </label>
        <div
            class="bg-#1a191d w-100px h-100px b-rd-10px overflow-hidden relative"
            v-for="(item, key) in $store.store3d.assets"
            :key="key"
        >
            <n-image
                class="w-100% h-100%"
                width="100"
                height="100"
                object-fit="cover"
                preview-disabled
                :src="item"
                @click="setMap(item)"
            >
            </n-image>
            <span
                @click.stop="$store.store3d.deleteAssets(key)"
                class="absolute top-5px right-5px w-20px h-20px b-rd-10px overflow-hidden bg-#fff flex justify-center items-center opacity-20% hover:opacity-100% cursor-pointer"
            >
                <svg
                    t="1688545193928"
                    class="icon w-80% h-80%"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="4210"
                    width="200"
                    height="200"
                >
                    <path
                        d="M568.96 512.064l326.336-326.336a39.232 39.232 0 1 0-55.552-55.552L513.408 456.512l-326.4-326.336a39.232 39.232 0 1 0-55.552 55.552l326.4 326.336L131.584 838.4a39.232 39.232 0 1 0 55.552 55.552l326.336-326.336 326.336 326.336c15.36 15.232 40.192 15.232 55.552 0a39.36 39.36 0 0 0 0-55.552l-326.4-326.336z"
                        p-id="4211"
                    ></path>
                </svg>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { set } from 'lodash';
const change = (e: Event & { target: HTMLInputElement }) => {
    const file = e.target.files?.[0];
    const fr = new FileReader();
    fr.onload = (ev) => {
        window.store.store3d.setAssets(ev.target?.result as string);
        e.target.value = '';
    };
    fr.readAsDataURL(file as File);
};
const setMap = (item) => {
    set(window.store.store3d, 'layerActiveGetters.Material.map', item);
};
</script>

<style scoped lang="less">
.MaterialMap {
}
</style>
