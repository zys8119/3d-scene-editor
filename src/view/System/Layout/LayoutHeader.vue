<template>
    <div class="LayoutHeader">
        <div class="Logo">
            <span>阅</span>
            无纸化会议系统
        </div>
        <div class="LayoutHeaderContent">
            <div class="LayoutHeaderContentItem">asdas</div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "LayoutHeader"
}
</script>

<style scoped lang="less">
.LayoutHeader{
    display: flex;
    justify-items: center;
    align-items: center;
    .logo{

    }
    .LayoutHeaderContent{
        flex: 1;
        display: flex;
        justify-items: center;
        align-items: center;
    }
}
</style>