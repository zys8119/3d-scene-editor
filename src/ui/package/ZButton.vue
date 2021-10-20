<template>
    <el-button class="ZButton"
               :disabled="config.disabled"
               :type="config.type || 'success'"
               :size="config.size"
               :plain="config.plain"
               :round="config.round"
               :circle="config.circle"
               :loading="config.loading"
               :icon="config.icon"
               :autofocus="config.autofocus"
               :native-type="config.nativeType"><span v-if="config.iconfont" v-html="config.iconfont" class="iconfont"></span>{{config.name}}</el-button>
</template>

<script>
export default {
    name: "ZButton",
    props:{
        config:{
            type:[Object,String],
            default:Object
        },
    },
}
</script>

<style scoped lang="less">
.ZButton{
    span{
        margin-right: @unit15;
        font-size: 14px !important;
        font-weight: initial;
    }
}
</style>