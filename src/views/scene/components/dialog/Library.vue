<template>
    <div class="Library flex flex-col">
        <div class="flex gap-15px items-center">
            <div>Library</div>
            <div class="flex-1 flex gap-15px items-center">
                <n-radio-group
                    class="attrs-n-radio-group"
                    v-model:value="radio"
                >
                    <n-space :item-style="{ flex: 1 }">
                        <n-radio
                            v-for="song in list"
                            :key="song.value"
                            :value="song.value"
                        >
                            <n-ellipsis class="w-100%">
                                <div class="flex justify-center items-center">
                                    {{ song.label }}
                                </div>
                            </n-ellipsis>
                        </n-radio>
                    </n-space>
                </n-radio-group>
                <n-input class="flex-1 !w-auto m-r-30px"></n-input>
            </div>
        </div>
        <div class="flex gap-15px m-t-15px of-hidden h-400px">
            <n-scrollbar class="w-auto">
                <n-radio-group
                    class="attrs-n-radio-group"
                    v-model:value="radio"
                >
                    <n-space :item-style="{ flex: 1 }" vertical>
                        <n-radio
                            v-for="song in list"
                            :key="song.value"
                            :value="song.value"
                        >
                            <n-ellipsis class="w-100%">
                                <div
                                    class="flex justify-center items-center lh-40px"
                                >
                                    {{ song.label }}
                                </div>
                            </n-ellipsis>
                        </n-radio>
                    </n-space>
                </n-radio-group>
            </n-scrollbar>
            <n-scrollbar class="w-auto flex-1">
                <div class="m-b-15px" v-for="i in 100" :key="i">
                    <div class="flex items-center justify-between">
                        <div>3D Icons</div>
                        <div
                            class="text-#5c5d5f bg-#202124 p-x-15px p-y-10px b-rd-30px"
                        >
                            View all →
                        </div>
                    </div>
                    <div class="grid grid-cols-4 gap-15px m-t-15px">
                        <div v-for="i in 4" :key="i">
                            <div
                                class="bg-#ccc8fa w-100% h-100px b-rd-20px"
                            ></div>
                            <div class="text-#5c5d5f m-t-15px">asdasdasda</div>
                        </div>
                    </div>
                </div>
            </n-scrollbar>
        </div>
    </div>
</template>

<script setup lang="ts">
const radio = ref('Objects');
const list = ref([
    { label: 'Objects', value: 'Objects' },
    { label: 'Scenes', value: 'Scenes' },
]);
</script>

<style scoped lang="less">
.Library {
}
</style>
