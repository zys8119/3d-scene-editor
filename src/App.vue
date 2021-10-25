<template>
    <div class="App" :class="{
        hideNav:airforce.hideNav,
        hideHeader:airforce.hideHeader,
    }">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
export default {
    name: "App",
    data(){
        return {
            a:1222
        }
    },
    created() {
        window._this = this;
    },
}
</script>

<style scoped lang="less">
.App{

}
</style>
