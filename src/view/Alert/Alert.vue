<template>
    <div class="Alert">
        我是内容{{aaa}}---{{airforce.AAA}}
        <el-button @click="test">adsada</el-button>
        <div>----{{ bb }}</div>
        <ZAlertFooter><el-button @click="test">adsada</el-button></ZAlertFooter>
    </div>
</template>

<script lang="ts">
export default {
    name: "Alert",
    props:{
        aaa:{type:String, default:null},
        bb:{type:Object,default: Object},
    },
    // emits: {
    //     save(){
    //         console.log(222)
    //     }
    // },
    mounted() {
    },
    methods:{
        test(){
            this.$emit("save-a",[1,2,3]);
            this.$ZAlert.hide()
        }
    }
}
</script>

<style scoped lang="less">
.Alert{
}
</style>