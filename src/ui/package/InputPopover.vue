<template>
    <el-popover
        :placement="placement"
        :trigger="trigger"
        v-model:visible="visible">
        <div class="InputPopover">
            <p v-for="(v, key) in currentVerifys" :key="key">
                <i class="el-icon-circle-check" v-if="!!v.verify(currentValue, _)"></i>
                <i class="el-icon-circle-close" v-else></i>
                {{v.msg}}
            </p>
        </div>
        <template #reference v-if="$slots.default">
            <slot></slot>
        </template>
    </el-popover>
</template>

<script>
export default {
    name: "InputPopover",
    props:{
        placement:{type:String,default:"top-start"},
        trigger:{type:String,default:"hover"},
        modelValue:{type:String,default:null},
        verifys:{type:Array,default: ()=>[
            {msg:"8-20个字符", verify:val=>!!val && /^.{8,20}$/.test(val)},
            {msg:"只能包含字母、数字以及标点符号（除空格）", verify:val=>!!val && /^[^\s]{1,}$/.test(val)},
            {msg:"字母、数字和标点符号至少包含2种", verify:val=>!!val && [/\d{1,}/.test(val),/[a-zA-Z]{1,}/.test(val),/\W{1,}/.test(val)].filter(e=>e).length > 1},
        ]}
    },
    data(){
        return {
            visible:false,
            currentVerifys:[],
            currentValue:"",
            message:null
        }
    },
    watch:{
        modelValue(){
            this.init();
        },
        verifys(){
            this.verifysInit();
        },
    },
    mounted() {
        this.verifysInit();
        this.init();
    },
    methods:{
        init(){
            this.currentValue = this.modelValue;
            this.$emit("check",this.check());
        },
        verifysInit(){
            if(typeof this.verifys === 'object'){
                this.currentVerifys = this.verifys;
            }
        },
        check(){
            let data = this.verifys.map(e=>e.verify(this.currentValue ,this));
            try {
                this.message = this.verifys[data.indexOf(false)].msg;
            }catch (e) {
                this.message = null;
            }
            return data.filter(e=>e).length === this.verifys.length
        }
    }
}
</script>

<style scoped lang="less">
.InputPopover{
    .el-icon-circle-close{
        color:#f15533
    }
    .el-icon-circle-check{
        color: #0AAF38;
    }
}
</style>