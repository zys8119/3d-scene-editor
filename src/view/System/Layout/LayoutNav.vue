<template>
    <div class="LayoutNav">
        <div class="LayoutNavBox">
            左侧菜单
            <div v-for="i in 100">{{i}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LayoutNav"
}
</script>

<style scoped lang="less">
.LayoutNav{
    position: fixed;
    left: 0;
    top:  @LayoutHeader;
    height: calc(100% -  @LayoutHeader);
    width: @LayoutNav;
    overflow-x: hidden;
    .LayoutNavBox{

    }
}
</style>