<template>
    <div class="Icon">
        <svg class="icon" aria-hidden="true">
            <use :xlink:href="href"></use>
        </svg>
    </div>
</template>

<script>
export default {
    name: "Icon",
    props:{
        size:{
            type:[Number,String],
            default:24,
        },
        unit:{
            type:String,
            default:"px",
        }
    },
    watch:{
        size(){
            this.initSize();
        },
        unit(){
            this.initSize();
        }
    },
    computed:{
        href(){
            try {
                return "#"+this.$slots.default[0].text;
            }catch (e){
                return null;
            }
        }
    },
    mounted() {
        this.initSize();
    },
    methods:{
        initSize(){
            let svg = this.$el.querySelector("svg");
            svg.style.width = this.size + this.unit;
            svg.style.height = this.size + this.unit;
        }
    }
}
</script>

<style scoped lang="less">
.Icon{
}
</style>