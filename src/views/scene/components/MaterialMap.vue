<template>
    <div class="MaterialMap p-15px min-w-120px">
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
    </div>
</template>

<script setup lang="ts">
import { set } from 'lodash';
const change = (e: Event & { target: HTMLInputElement }) => {
    const file = e.target.files?.[0];
    const fr = new FileReader();
    fr.onload = (ev) => {
        set(
            window.store.store3d,
            'layerActiveGetters.Material.map',
            ev.target?.result
        );
        e.target.value = '';
    };
    fr.readAsDataURL(file as File);
};
</script>

<style scoped lang="less">
.MaterialMap {
}
</style>
