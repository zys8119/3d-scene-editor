<script lang="ts">
import {SwiperOptions} from "swiper";
import Swiper from "swiper/swiper-bundle.esm.browser.js";
import "swiper/swiper-bundle.css";
import {h} from "vue";
export default {
    name: "Swiper",
    props:{
        config:{type:Object,default:()=>({})}
    },
    render() {
        return h("div",{
            class:"swiper-containe"
        },[
            h("div",{class:"swiper-wrapper"},this.$slots.default?this.$slots.default().map(e=>h("div",{class:"swiper-slide"},[e])):null),
            this.currentConfig.pagination && this.currentConfig.pagination.el ? h("div",{class:"swiper-pagination"}): null,
            this.currentConfig.navigation && this.currentConfig.navigation.prevEl ? h("div",{class:"swiper-button-prev"}) : null,
            this.currentConfig.navigation && this.currentConfig.navigation.nextEl ? h("div",{class:"swiper-button-next"}) : null,
            this.currentConfig.swiperScrollbar? h("div",{class:"swiper-scrollbar"}) : null,
        ])
    },
    data(){
        return {
            Swiper:null,
            initConfig:<SwiperOptions>{
                loop: true, // 循环模式选项

                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination'
                },
                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
        }
    },
    watch:{
        config(){
            this.init();
        }
    },
    computed:{
        currentConfig(){
            return this.$utils.lodash.merge(this.initConfig,this.config)
        }
    },
    updated() {
        this.init();
    },
    mounted() {
        this.init();
    },
    methods:{
        // 初始化
        init(){
            this.$nextTick(()=>{
                this.Swiper = new Swiper('.swiper-containe',this.currentConfig);
            });
        }
    }
}
</script>

<style scoped lang="less">
.swiper-containe{
    overflow: hidden;
    position: relative;
    min-height: 300px;
}
</style>