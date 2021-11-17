<template>
<div class="Test">
    <div>测试内容</div>
    <div class="aa">字体大小测试</div>
    <el-button @click="szieTest">弹框字体测试</el-button>
    {{$store.getters.currentRoute}}
    <div v-for="i in 100">{{i}}</div>
</div>
</template>

<script lang="ts">
export default {
    name: "Test",
    methods:{
        szieTest(){
            this.$ZAlert.show({
                title:"弹框测试",
                props:{},
                _components:()=>import("./Alert/SizeTest.vue")
            })
        }
    }
}
</script>

<style scoped lang="less">
.Test{
    .aa{
        font-size: size(60);
        color: #f00;
    }
}
</style>
