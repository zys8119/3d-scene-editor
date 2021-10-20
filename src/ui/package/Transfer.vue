<template>
    <div class="Transfer">
        <TransferTree :options="currentOptions"
                      transferType="left"
                      :height="leftHeight"
                      :selectionFilter="nodeType"
                      :filterInit="filterInit"
                      ref="left"
                      :nodeId="nodeId"
                      :showSearch="showSearch"
                      :showCheckbox="showCheckbox"
                      :searchPlaceholder="searchPlaceholder"
                      :fieldName="fieldName"
                      :childrenFieldName="childrenFieldName">
            <template #default="scoped">
                <slot v-bind:="{...scoped,type:'left',index:0}">
                    <span class="arrow-down-up">
                        <span>{{ scoped.data[fieldName] }}</span>
                        <i class="el-icon-arrow-down" v-if="scoped.data[childrenFieldName] && scoped.data[childrenFieldName].length > 0 && scoped.node_open"></i>
                        <i class="el-icon-arrow-up" v-if="scoped.data[childrenFieldName] && scoped.data[childrenFieldName].length > 0 && !scoped.node_open"></i>
                    </span>
                </slot>
            </template>
        </TransferTree>
        <div class="TransferRightContent">
            <template v-for="i in index" :key="i">
                <div class="TransferRightContentItem">
                    <div class="arrow">
                        <div class="arrowContent">
                            <div class="arrowContentItem">
                                <el-button icon="el-icon-arrow-right" @click="arrowRight(i)"></el-button>
                            </div>
                            <div class="arrowContentItem">
                                <el-button icon="el-icon-arrow-left" @click="arrowLeft(i)"></el-button>
                            </div>
                        </div>
                    </div>
                    <TransferTree :ref="`right${i}`"
                                  transferType="right"
                                  :height="height"
                                  :single="single"
                                  :selectionFilter="({data},node)=>nodeType(data,node)"
                                  :fieldName="`data.${fieldName}`"
                                  :nodeId="nodeId"
                                  :showSearch="showSearch"
                                  :showCheckbox="showCheckbox"
                                  :searchPlaceholder="searchPlaceholder"
                                  :options="optionsMap[i.toString()] || []"
                                  :childrenFieldName="childrenFieldName">
                        <template #default="scoped">
                            <slot v-bind:="{...scoped,...scoped.data,type:'right',index:i}">
                                <span>
                                    {{ scoped.data.data[fieldName] }}
                                </span>
                            </slot>
                        </template>
                    </TransferTree>
                </div>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import TransferTree from "./Transfer/TransferTree.vue"
import options from "./data/options.json"
export default {
    name: "Transfer",
    components:{TransferTree},
    props:{
        modelValue: {type:Array,default:()=>[]},
        fieldName:{type:String,default:"node_name"},
        nodeId:{type:String,default:"node_id"},
        childrenFieldName:{type:String,default:"children"},
        nodeType:{type:Function,default:(node)=>node.data.node_type === 0},
        index:{type:Number,default:2},
        // 默认不开启去重，避免资源开销
        single:{type:Boolean,default:true},
        height:{type:Number,default:500},
        showSearch:{type:Boolean,default:true},
        showCheckbox:{type:Boolean,default:true},
        searchPlaceholder:{type:String,default:"请输入关键字"},
    },
    data(){
        return {
            optionsMap:{},
            options:options
        }
    },
    computed:{
        leftHeight(){
            let height = this.height;
            if(this.showCheckbox && this.showSearch){
                height = this.height + 70;
            }else
            if(this.showSearch){
                height = this.height + 40;
            }else
            if(this.showCheckbox){
                height = this.height + 30;
            }
            return height*this.index;
        },
        currentOptions(){
            this.optionsMap = {};
            return this.options
        },
        modelValueMap(){
            return (this.modelValue || []).reduce((a, b, i) => {
                if(this.index === 1){
                    a[b] = true;
                }else {
                    a[i+1] = (b || []).reduce((c,d)=>(c[d] = true) && c , {})
                }
                return a;
            }, {});
        },
        optionsMapDeep(){
            return Object.keys(this.optionsMap)
                .reduce((a,b)=>{
                    (this.optionsMap[b] || []).forEach(it=>{
                        a[JSON.stringify(it.deep)] = true;
                    })
                    return a;
                },{});
        }
    },
    watch:{
        modelValue(val,old){
            if(JSON.stringify(val) !== JSON.stringify(old)){
                this.initValue();
            }
        },
    },
    mounted() {
        this.initValue();
    },
    methods:{
        updateModelValue(){
            this.$nextTick(()=>{
                if(this.index === 1){
                    this.$emit("update:modelValue",this.optionsMap[1].map(it=>it.data[this.nodeId]))
                }else {
                    this.$emit("update:modelValue",Object.keys(this.optionsMap).map(k=>(this.optionsMap[k] || []).map(it=>it.data[this.nodeId])))
                }
            })
        },
        initValue(){
            if(this.index === 1){
                this.arrowRight(1,this.$refs.left.currentOptions.filter(e=>{
                    return this.modelValueMap[e.deep[e.deep.length-1]];
                }));
            }else {
                new Array(this.index).fill(0).forEach((e,k)=>{
                    this.arrowRight(k+1,this.$refs.left.currentOptions.filter(e=>{
                        return (this.modelValueMap[k+1] || {})[e.deep[e.deep.length-1]];
                    }));
                })
            }
        },
        filterInit(node){
            const nodeDeepStr = JSON.stringify(node.deep);
            return !this.optionsMapDeep[nodeDeepStr];
        },
        arrowRight(i,getSelection){
            const trf = this.$refs[`right${i}`];
            if(trf) {
                getSelection = getSelection || this.$refs.left.getSelection();
                this.optionsMap[i.toString()] = (this.optionsMap[i.toString()] || []).concat(getSelection);
                this.$refs.left.checkboxAll = false;
                this.$refs.left.selected = 0;
                this.$refs.left.search = null;
                this.$refs.left.$nextTick(() => {
                    this.$refs.left.$forceUpdate
                }).then(()=>{
                    this.updateModelValue();
                })
            }
        },
        arrowLeft(i){
            const trf = this.$refs[`right${i}`];
            if(trf){
                const getSelection = trf.getSelection().reverse();
                const currentOptions = (this.optionsMap[i.toString()] || []);
                const currentOptionsDeep = currentOptions.map(e=>JSON.stringify(e.deep));
                getSelection.forEach(it=>{
                    const index = currentOptionsDeep.indexOf(JSON.stringify(it.data.deep))
                    if(index > -1){
                        currentOptions.splice(index,1);
                    }
                })
                trf.selected = 0;
                trf.checkboxAll = false;
                trf.search = null;
                trf.$nextTick(()=>{
                    trf.$forceUpdate();
                }).then(()=>{
                    this.updateModelValue();
                })
            }
        }
    }
}
</script>

<style lang="less">
.Transfer{
    display: flex;
    .TransferTree{
        flex: 1;
        .TransferTreeNodeContent{
            height: 300px;
            overflow-x: hidden;
        }
    }
    .TransferRightContent{
        flex: 1;
        .TransferRightContentItem{
            display: flex;
            &+.TransferRightContentItem{
                margin-top: @unit15;
            }
            .arrow{
                width: 120px;
                display: flex;
                justify-content: center;
                align-items: center;
                .arrowContent{
                    .arrowContentItem{
                        &+.arrowContentItem{
                            margin-top: 30px;
                        }
                    }
                }
            }
        }
    }
    .TransferTreeNodeRow{
        display: flex;
        .arrow-down-up{
            flex: 1;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>