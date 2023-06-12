<template>
    <div id="Mescroll">
        <mescroll-vue
            ref="mescroll"
            :down="mescrollDown"
            :up="mescrollUp"
            @init="mescrollInit"
        >
            <div class="mescroll-contain">
                <slot></slot>
            </div>
        </mescroll-vue>
    </div>
</template>

<script setup lang="ts">
import MescrollVue from 'mescroll.js/mescroll.vue';
import noData from '@/assets/images/no-data.png';
import toTop from '@/assets/images/to-top.png';
import loading from '@/assets/images/loading/fire.svg';
import loadingDna from '@/assets/images/loading/dna.svg';

const emits = defineEmits(['loadData']);

// mescroll 实例对象
const mescroll = ref(null);

// 下拉刷新的配置
const mescrollDown = ref({
    htmlContent: `<img height="50px" src='${loading}' />`,
});

// 上拉加载的配置
const mescrollUp = ref<any>({
    page: {
        num: 0,
        size: 10,
    },
    htmlNodata: '<p class="nodata">-- 暂无更多数据 --</p>',
    htmlLoading: `<img height="50px" src='${loadingDna}' />`,
    noMoreSize: 5, // 如果列表已无数据,可设置列表的总数量要大于5才显示无更多数据
    toTop: {
        warpId: 'Mescroll',
        src: toTop,
        offset: 800,
    },
    empty: {
        warpId: 'Mescroll',
        icon: noData,
        tip: '~暂无相关数据~',
    },
});

// 初始化
const mescrollInit = (mescroll) => {
    mescroll.value = mescroll;
};

// 刷新数据
mescrollUp.value.callback = (page, mescroll) => {
    emits('loadData', page, mescroll);
};
</script>

<style lang="less">
#Mescroll {
    position: relative;
    min-height: 100%;
    overflow: hidden;
    .mescroll {
        position: absolute;
        top: 0;
        bottom: 0;
        height: auto;
        .nodata {
            color: #999999;
        }
    }
    .mescroll-totop {
        position: absolute;
    }
}
</style>
