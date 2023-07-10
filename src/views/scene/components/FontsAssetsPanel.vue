<template>
    <div class="FontsAssetsPanel p-15px min-w-120px flex flex-col gap-10px">
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
        {{ $store.store3d.fontsAssets }}
        <n-dynamic-input
            v-model:value="value"
            preset="pair"
            key-placeholder="字体名称"
            value-placeholder="字体在线资源url路径"
        />
        <n-button class="m-t-15px" type="primary" @click="save">保存</n-button>
    </div>
</template>

<script setup lang="ts">
const $moreContent = inject('$moreContent');
const value = ref([]);
const change = (e: Event & { target: HTMLInputElement }) => {
    const file = e.target.files?.[0];
    value.value.push({
        key: file?.name,
        value: URL.createObjectURL(file as any),
    });
    e.target.value = '';
};
onMounted(() => {
    value.value = window.store.store3d.fontNameOptions.map((e) => ({
        key: e.label,
        value: e.url,
    }));
});
const save = async () => {
    window.store.store3d.setFontsAssets(
        value.value
            .filter(
                (e) => typeof e.key === 'string' && typeof e.value === 'string'
            )
            .reduce<any>((a, b) => {
                a[b.key] = b.value;
                return a;
            }, {}) as any
    );
    $moreContent.value = null;
};
</script>

<style scoped lang="less">
.FontsAssetsPanel {
    min-width: 500px;
}
</style>
