<template>
    <div class="Loading">
        <slot>
            <div class="title" v-if="title">{{title}}</div>
            <div class="load">
                <div v-for="(it,k) in arr" :key="k">{{it}}</div>
            </div>
            <div class="footer">
                <slot name="footer"></slot>
            </div>
        </slot>
    </div>
</template>

<script>
export default {
    name: "Loading",
    props:{
        title:{type:String, default:"vue3的基础框架仓库"},
        loading:{type:String, default:"加载中，请耐心等待..."},
    },
    computed:{
        arr(){
            return this.loading.split("");
        }
    },
    mounted() {

    }
}
</script>

<style scoped lang="less">
.Loading {
    position:absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    .title{
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        padding-bottom: 150px;
        font-size: 50px;
        font-weight: bold;
        text-shadow: 0 4px 3px #94979a;
        animation: focus-in-expand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    .load {
        position: fixed;
        width: 50%;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        overflow: visible;
        user-select: none;
        cursor: default;
    }
    .footer{
        position: fixed;
        width: 50%;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        overflow: visible;
        user-select: none;
        cursor: default;
        animation: focus-in-expand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 150px;
    }

    .load div {
        position: absolute;
        opacity: 0;
        font-family: Helvetica, Arial, sans-serif;
        animation: move 3s linear infinite;
        transform: rotate(180deg);
    }

    .init(@index:2) {
        .load div:nth-child(@{index}) {
            animation-delay: unit((@index - 1) * 0.2,s);
        }
    }

    .init(1);
    .init(2);
    .init(3);
    .init(4);
    .init(5);
    .init(6);
    .init(7);
    .init(8);
    .init(9);
    .init(10);
    .init(11);
    .init(12);
    .init(13);
    .init(14);
    .init(15);
    .init(16);
    .init(17);
    .init(18);
    .init(19);
    .init(20);
    .init(21);
    .init(22);

    @keyframes focus-in-expand {
        0% {
            letter-spacing: -0.5em;
            -webkit-filter: blur(12px);
            filter: blur(12px);
            opacity: 0;
        }
        100% {
            -webkit-filter: blur(0px);
            filter: blur(0px);
            opacity: 1;
        }
    }

    @keyframes move {
        0% {
            left: 0%;
            opacity: 0;
        }
        35% {
            left: 41%;
            transform: rotate(0deg);
            opacity: 1;
        }
        65% {
            left: 59%;
            transform: rotate(0deg);
            opacity: 1;
        }
        100% {
            left: 100%;
            transform: rotate(-180deg);
            opacity: 0;
        }
    }
}
</style>