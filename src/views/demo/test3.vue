<template>
    <div id="Test3">
        下拉刷新，上拉加载的DEMO
        <div class="test">
            <mescroll @loadData="loadData">
                <div class="list" v-for="item in list" :key="item">
                    {{ item }}
                </div>
            </mescroll>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Mescroll from '@/components/mescroll.vue';

const list = ref<any>([]);
const loadData = (page, mescroll) => {
    console.log(page);
    console.log(mescroll);

    try {
        if (page.num === 1) list.value = [];
        const res =
            list.value.length > 20
                ? []
                : Array.from({ length: 10 }, () => Math.random());
        // const res = []
        list.value = list.value.concat(res);
        setTimeout(() => {
            mescroll.endSuccess(res.length);
        }, 1000);
    } catch (e) {
        mescroll.endErr();
    }
};
</script>

<style scoped lang="less">
#Test3 {
    .test {
        height: 400px;
        border: 1px solid red;
    }
}
</style>
