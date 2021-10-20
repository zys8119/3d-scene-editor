<template>
    <div class="Tree" :class="{isTop:isTop,lazyLoading:!lazyLoading}">
        <div class="TreeSearchBox" v-if="searchShow && isTop">
            <el-input class="TreeSearch" v-model="currentSearch"
                      prefix-icon="el-icon-search"
                      :placeholder="placeholder">
            </el-input>
        </div>
        <slot name="header"></slot>
        <slot name="expand" :vm="_"></slot>
        <div class="TreeBox">
            <TreeItem
                @draggable="(...args)=>draggable(args[0],level,parentNode,args[1],args[2])"
                :draggableMove="draggableMove"
                :showNameField="showNameField"
                :options="currentOptions" :isdraggable="isdraggable && draggableFilter(_)">
                <template #default="{item,index}">
                    <div  class="node_row" :style="{
                height:!lazyLoading ? clacHeight(item)*nodeHeight + 'px':false,
                transition:`height ${atf} ${attime}ms`,
            }"  v-if="searchChange(currentSearch,item)">
                        <div class="node"
                             :style="{
                    paddingLeft:paddingLeft,
                    height:!lazyLoading ? nodeHeight+'px':false,
                    lineHeight:nodeHeight+'px',
                }" :class="{
                    node_parent:!!item[childrenField] && item[childrenField].length > 0,
                    node_child:!item[childrenField],
                    node_top:(isTop && index === 0),
                    checked:checkedMap === ((keyMap)?`${keyMap},${index}`:`${index}`),
                    checked_parent:(checkedMapArr[level] == index) && !!item[childrenField] && item[childrenField].length > 0
                }" @click="toggleClick(item, index,{
                    data:item,
                    key:index,
                    keyMap:(keyMap)?`${keyMap},${index}`:`${index}`,
                    parent:parentNode,
                    node_parent:!!item[childrenField] && item[childrenField].length > 0,
                    node_child:!item[childrenField],
                    node_top:(isTop && index === 0),
                    node_open:!item.node_open,
                    level:level,
                    checked:checkedMap === ((keyMap)?`${keyMap},${index}`:`${index}`),
                })">
                            <slot :data="item" :node="{
                    data:item,
                    key:index,
                    keyMap:(keyMap)?`${keyMap},${index}`:`${index}`,
                    parent:parentNode,
                    node_parent:!!item[childrenField] && item[childrenField].length > 0,
                    node_child:!item[childrenField],
                    node_top:(isTop && index === 0),
                    node_open:!item.node_open,
                    level:level,
                    checked:checkedMap === ((keyMap)?`${keyMap},${index}`:`${index}`),
                }" :self="_">{{item[showNameField]}}</slot>
                        </div>
                        <z-tree v-if="item[childrenField] && (item.node_open || !lazyLoading)"
                                :options="item[childrenField]"
                                :optionsAll="optionsAll"
                                :isTop="false"
                                :indent="indent"
                                :indentIndex="indentIndex+1"
                                :showNameField="showNameField"
                                :childrenField="childrenField"
                                :nodeHeight="nodeHeight"
                                :keyMap="(keyMap)?`${keyMap},${index}`:`${index}`"
                                :parentNode="item"
                                :atf="atf"
                                :attime="attime"
                                @parent="emitParent"
                                @child="emitChild"
                                @node="emitNode"
                                @checked="emitChecked"
                                :checked="checkedMap"
                                :level= "level + 1"
                                :search="currentSearch"
                                :searchShow="searchShow"
                                :searchChange="searchChange"
                                :isdraggable="isdraggable"
                                :draggableFilter="draggableFilter"
                                @draggable="(...args)=>draggable(args[0],args[1],args[2],false,args[4])"
                                :draggableMove="draggableMove"
                                :lazyLoading="lazyLoading"
                                :self="self"
                                :ref="`tree${index}`"
                                :class="{
                                node_open_show:item.node_open_show,
                                node_open_hide:item.node_open_hide,
                                lazyLoading:!lazyLoading
                            }"
                        >
                            <template #default="{node, data, self}">
                                <slot :node="node" :data="data" :self="self">{{data[showNameField]}}</slot>
                            </template>
                        </z-tree>
                    </div>
                </template>
            </TreeItem>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "z-tree",
    props:{
        // 树结构数据
        options: {
            type: Array,
            default: ()=>[]
        },
        // 树结构全部数据
        optionsAll: {
            type: Array,
            default: ()=>[]
        },
        // 是否为顶级组件
        isTop: {
            type: Boolean,
            default: true
        },
        // 缩进单位
        indent: {
            type: Number,
            default: 20
        },
        // 缩进级别
        indentIndex: {
            type: Number,
            default: 0
        },
        // 指定显示字段
        showNameField: {
            type: String,
            default: "name"
        },
        // 指定子节点父级字段
        childrenField: {
            type: String,
            default: "children"
        },
        // 节点路径
        keyMap: {
            type: String,
            default: null
        },
        // 节点高度
        nodeHeight: {
            type: Number,
            default: 50
        },
        // 父级节点
        parentNode: {
            type: Object,
            default: null
        },
        // 动画曲线
        atf: {
            type: String,
            default: "ease"
        },
        // 动画时间
        attime: {
            type: Number,
            default: 300
        },
        // 选中key
        checked: {
            type: String,
            default: null
        },
        // 级别
        level: {
            type: Number,
            default: 0
        },
        // 是否可搜索
        searchShow: {
            type: Boolean,
            default: false
        },
        // 搜索内容
        search:{
            type:String,
            default:"",
        },
        // 搜索内容回调
        searchChange:{
            type:Function,
            default:()=>true,
        },
        // 搜索内容回调
        placeholder:{
            type:String,
            default:"请输入关键字",
        },
        // 是否拖拽
        isdraggable:{
            type:Boolean,
            default:false,
        },
        // 拖拽过滤，可用于具体层级的拖拽启用
        draggableFilter:{
            type:Function,
            default:()=>true,
        },
        // 当前树组件
        self:{
            type:Object,
            default:Object,
        },
        // 拖拽移动处理回调
        draggableMove:{
            type:Function,
            default:()=>true,
        },
        // 懒加载组件
        lazyLoading:{
            type:Boolean,
            default:false,
        }
    },
    data() {
        return {
            currentOptions: [],
            checkedMap: null,
            currentSearch:"",
        }
    },
    computed:{
        // 缩进计算
        paddingLeft() {
            return this.indent*this.indentIndex+"px";
        },
        // checkedMap数组
        checkedMapArr(){
            return this.checkedMap?this.checkedMap.split(","):[];
        }
    },
    watch: {
        options() {
            this.initChecked();
            this.initOptions();
        },
        checked(){
            this.initChecked();
        },
        search(){
            this.initSearch();
        }
    },
    mounted() {
        this.initChecked();
        this.initOptions();
        this.initSearch();
    },
    methods: {
        getParentNodeList(_this,result){
            result = result || [];
            if(_this.parentNode){
                result.push(_this.currentOptions);
            }
            if(!_this.isTop){
                result = this.getParentNodeList(_this.$parent,result)
            }else {
                result.push(_this.currentOptions);
            }
            return result;
        },
        draggable(data,level,parentNode,bool,ev){
            if(bool){
                let coypData = JSON.parse(JSON.stringify(data));
                coypData.forEach((item,key)=>{
                    this.currentOptions[key] = item;
                });
                this.$nextTick(()=>{
                    if(this.keyMap){
                        this.getParentNodeList(this).slice(1).forEach((e,index)=>{
                            let findObj = null;
                            eval("findObj = e["+this.keyMap.split(",").reverse().slice(0,index+1).reverse().join(`].${this.childrenField}[`)+"].children");
                            // console.log(findObj);
                            coypData.forEach((item,key)=>{
                                if(findObj){
                                    findObj[key] = item;
                                }
                            });
                        });
                    }
                })
            }
            this.$emit('draggable',data,level,parentNode,bool,ev);
        },
        // 初始化搜索
        initSearch(){
            this.currentSearch = this.search;
        },
        // 获取节点路径的总个数，包含本身
        getNodeIndex(item) {
            let index = 1;
            if(item[this.childrenField] && item.node_open) {
                item[this.childrenField].forEach((e) => {
                    index += this.clacHeight(e);
                });
            }
            return  index;
        },
        // 高度计算
        clacHeight(item){
            return !this.searchChange(this.currentSearch,item)? 0 : this.getNodeIndex(item);
        },
        // 初始化checked状态
        initChecked() {
            // 拷贝数据
            this.checkedMap = this.checked;
        },
        // 初始化选项
        initOptions() {
            // 拷贝数据
            this.currentOptions = this.options;
            if (this.optionsAll.length > 0) {
                if (this.$store.state.layout.TreeOpenedKeys && this.$store.state.layout.TreeOpenedKeys.length > 0) {
                    this.$store.state.layout.TreeOpenedKeys.forEach(v => {
                        let k = v.split('-');
                        let obj = null;
                        for (let i = 0; i < k.length; i++) {
                            if (i === 0) obj = this.optionsAll[k[i]];
                            else if (obj[this.childrenField]) obj = obj[this.childrenField][k[i]];
                        }
                        if (obj) obj.node_open = true
                    })
                }
            }
        },
        // 点击切换
        toggleClick(item, key, node) {
            if(!node.node_parent){
                this.emitChecked(node.keyMap);
            }
            if(this.lazyLoading){
                item.node_open_show = false;
                item.node_open_hide = false;
                if(item.node_open){
                    item.node_open_show = false;
                    item.node_open_hide = true;
                    item.node_open = false;
                }else {
                    item.node_open_show = true;
                    item.node_open_hide = false;
                    item.node_open = true;
                }
            }else {
                item.node_open = !item.node_open
            }
            this.currentOptions[key] = item;
            if(node.node_parent){
                // 父节点切换
                this.emitParent(node);
            } else {
                // 子节点切换
                this.emitChild(node);
            }
            // 节点切换
            this.emitNode(node);
            // 获取节点打开的keys
            if (this.optionsAll.length > 0) {
                this.resetOpenKeys();
                this.getOpenKeys(this.optionsAll, null);
            }
        },
        // 获取节点打开的keys
        getOpenKeys(arr, k) {
            arr.forEach((a, b) => {
                if (a.node_open) {
                    let key = k !== null ? k + '-' + b : b;
                    this.$store.commit('setTreeOpenedKeys', key.toString());
                    if (a[this.childrenField] && a[this.childrenField].length > 0) this.getOpenKeys(a[this.childrenField], key);
                }
            })
        },
        // 重置节点打开的keys
        resetOpenKeys() {
            this.$store.commit('setTreeOpenedKeys', null);
        },
        // 父节点切换
        emitParent(node){
            this.$emit('parent',node);
        },
        // 子节点切换
        emitChild(node){
            this.$emit('child',node);
        },
        // 节点切换
        emitNode(node){
            this.$emit('node',node);
        },
        // 节点checked状态判断
        emitChecked(keyMap){
            if(this.isTop){
                this.checkedMap = keyMap;
                return;
            }
            this.$emit('checked',keyMap);
        }
    },
}
</script>

<style scoped lang="less">
.Tree {
    width: 500px;
    margin: auto;
    transition: height 300ms ease-in;
    overflow: hidden;
    &.isTop{
        margin-top: 10px;
        position: relative;
    }
    &.node_open_show{

    }
    .nodeStyles(){
        cursor: pointer;
    }
    .node_row{
        overflow: hidden;
        .node{
            .nodeStyles();
            &.node_top{
                margin-top: 0;
            }
        }
    }
    .TreeSearchBox{
        height: 40px + @unit15;
        .TreeSearch{
            position: absolute;
            width: 100%;
            left: 0;
            top: 0;
        }
    }

}
</style>
