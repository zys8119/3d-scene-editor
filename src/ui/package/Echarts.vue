<template>
    <div v-if="show" class="echartsContentView" ref="echartsContentView" :style="{height:height}"></div>
</template>

<script lang="ts">
import echartsMaps from "../../assets/js/echartsMaps"
import * as echarts from "echarts"
import tr from "element-plus/packages/locale/lang/tr";
export default {
    name: "Echarts",
    props:{
        // 图表数据
        data:{
            type:Object,
            default:()=>({})
        },
        // 图表类型，如不需要内置类型，可为customize类型，自定义配置
        type:{
            type:String,
            default:"line"
        },
        // 图表初始化选项，将会覆盖对应类型配置
        options:{
            type:Object,
            default:()=>({})
        },
        // 图表初始化选项，将会覆盖对应类型配置
        height:{
            type:[String,Boolean],
            default:false
        }
    },
    data(){
        return {
            myChart:null,
            show:true,
        }
    },
    watch:{
        data(){
            this.echartsInit();
        }
    },
    mounted() {
        this.echartsInit();
        let WinOnResize = window.onresize;
        window.onresize = ()=>{
            this.show = false;
            this.$nextTick(()=>{
                this.show = true;
                this.$nextTick(()=> {
                    this.echartsInit();
                })
            })
            if(WinOnResize) (<any>WinOnResize)();
        }
    },
    methods:{
        echartsInit(){
            // 基于准备好的dom，初始化echarts实例
            this.myChart = echarts.init(this.$refs.echartsContentView);
            let option = {};
            switch (this.type) {
            case "customize" :
                try {
                    option = this.options;
                }catch (e) {
                    // err
                }
                break;
            default:
                try {
                    option = Object.assign(echartsMaps[this.type](this.data), this.options);
                }catch (e) {
                    // err
                }
                break;
            }
            this.myChart.setOption(option);
        },
    }
}
</script>

<style scoped lang="less">
.echartsContentView{

}
</style>