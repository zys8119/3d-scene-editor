<template>
    <div class="ContentTable" ref="contentTable_el_table">
        <slot>
            <el-table
                :data="ContentTableData"
                @select-all="selectAll"
                @select="(...args)=>$emit('select',args[0], args[1])"
                @selection-change="(...args)=>$emit('selection-change',args[0])"
                @sort-change="(...args)=>$emit('sort-change',args[0])"
                @filter-change="(...args)=>$emit('filter-change',args[0])"
                @cell-mouse-enter="(...args)=>$emit('cell-mouse-enter',args[0],args[1],args[2],args[3])"
                @cell-mouse-leave="(...args)=>$emit('cell-mouse-leave',args[0],args[1],args[2],args[3])"
                @header-dragend="(...args)=>$emit('header-dragend',args[0],args[1],args[2],args[3])"
                @cell-click="(...args)=>$emit('cell-click',args[0],args[1],args[2],args[3])"
                @cell-dblclick="(...args)=>$emit('cell-dblclick',args[0],args[1],args[2],args[3])"
                @row-click="(...args)=>$emit('row-click',args[0],args[1],args[2])"
                @row-contextmenu="(...args)=>$emit('row-contextmenu',args[0],args[1],args[2])"
                @row-dblclick="(...args)=>$emit('row-dblclick',args[0],args[1],args[2])"
                @header-click="(...args)=>$emit('header-click',args[0],args[1],args[2])"
                @header-contextmenu="(...args)=>$emit('header-contextmenu',args[0],args[1],args[2])"
                @current-change="(...args)=>$emit('current-change',args[0],args[1])"
                @expand-change="(...args)=>$emit('expand-change',args[0],args[1])"
                :height="config.height"
                :max-height="config.maxHeight"
                :stripe="typeof config.border == 'boolean' ? config.stripe : true"
                :border="typeof config.border == 'boolean' ? config.border : true"
                :size="config.size"
                :fit="config.fit"
                :show-header="config.showHeader"
                :highlight-current-row="config.highlightCurrentRow"
                :current-row-key="config.currentRowKey"
                :row-class-name="config.rowClassName"
                :row-style="config.rowStyle"
                :cell-class-name="config.cellClassName"
                :cell-style="config.cellStyle"
                :header-row-class-name="config.headerRowClassName"
                :header-row-style="config.headerRowStyle"
                :header-cell-style="config.headerCellStyle"
                :row-key="config.rowKey"
                :empty-text="config.emptyText"
                :default-expand-all="config.defaultExpandAll"
                :expand-row-keys="config.expandRowKeys"
                :default-sort="config.defaultSort"
                :tooltip-effect="config.tooltipEffect"
                :show-summary="config.showSummary"
                :sum-text="config.sumText"
                :summary-method="config.summaryMethod"
                :span-method="config.spanMethod"
                :select-on-indeterminate="config.selectOnIndeterminate"
                :indent="config.indent"
                :lazy="config.lazy"
                :load="config.load"
                :tree-props="config.treeProps"
                ref="table"
            >
                <ContentTableItem :item="item" v-for="(item,key) in columns" :key="key">
                    <template #default="{item}">
                        <el-table-column
                            :label="item.label"
                            :width="widthInit(item)"
                            :prop="item.prop"
                            :show-overflow-tooltip="item.showOverflowTooltip"
                            :type="item.type"
                            :sortable="item.sortable"
                            :min-width="item.minWidth"
                            :fixed="item.fixed"
                            :align="item.align"
                        >
                            <template #header="{columnheader, $indexheader}" v-if="$slots.header">
                                <slot name="header" :column="columnheader" :index="$indexheader"></slot>
                            </template>
                            <template #default="{row,$index}">
                                <!--选择-->
                                <template v-if="['selection'].includes(item.type)">
                                    <el-checkbox @change="checkboxRowChange" v-model="row.$ContentTableDataCheckbox"></el-checkbox>
                                </template>
                                <!--操作-->
                                <template v-if="['operate'].includes(item.type)">
                                    <template v-for="(it,k) in item.btns" :key="k">
                                        <ZButton
                                            @click="emitInit(it.emit,row,it, item)"
                                            :class="classNameInit(it,row,item)"
                                            v-if="item.btns && (typeof it.show === 'function' ? it.show(row,item,it) : true)"
                                            :config="it">
                                        </ZButton>
                                    </template>
                                </template>
                                <!--序号-->
                                <template v-else-if="['number'].includes(item.type)">
                        <span class="textType"
                              @click="emitInit(item.emit,row, item)"
                              :class="classNameInit(item,row, item)">
                            {{$index+1}}
                        </span>
                                </template>
                                <!--快捷编辑-->
                                <template v-else-if="['edit'].includes(item.type)">
                                    <el-popover
                                        :placement="item.popover_placement || 'bottom'"
                                        :title="`【${item.label}】快捷修改`"
                                        popper-class="contentTable-el-popover"
                                        trigger="click"
                                        v-model:visible="row[getKey($index,item.prop,key)]">
                                        <template #reference>
                                <span class="textType" @click="popoverClick(item,row)">
                                    {{textInit(row,item)}}
                                    <i class="el-icon-edit-outline"></i>
                                </span>
                                        </template>
                                        <i class="el-icon-close" @click="row[getKey($index,item.prop,key)] = !row[getKey($index,item.prop,key)]"></i>
                                        <el-input placeholder="请输入关键字" v-model="popoverValue"
                                                  @change="row[getKey($index,item.prop,key)] = false , emitInit(item.emit,popoverValue,row, item)"></el-input>
                                        <z-button :config="{name:(item.applyText || '应用')}"
                                                  @click="row[getKey($index,item.prop,key)] = false , emitInit(item.emit,popoverValue,row, item)"></z-button>
                                    </el-popover>
                                </template>
                                <!--tooltip-->
                                <template v-else-if="['tooltip'].includes(item.type)">
                                    <el-tooltip class="item" effect="dark" placement="top">
                                        <template #content>
                                            {{textInit(row,item)}}
                                        </template>
                                        <span class="textType"
                                              @click="emitInit(item.emit,row, item)"
                                              :class="classNameInit(item,row, item)">
                                {{textInit(row,item)}}
                            </span>
                                    </el-tooltip>
                                </template>
                                <!--popover-->
                                <template v-else-if="['popover'].includes(item.type)">
                                    <el-popover
                                        @show="emitInit('popover-show',row, item)"
                                        :placement="item.popover_placement || 'top'"
                                        :title="item.popover_title"
                                        popper-class="contentTable-el-popover"
                                        :trigger="item.popover_trigger || 'hover'">
                                        <slot name="popover" :column="item" :index="$index" :row="row" :key="key">
                                            <component :is="item.popoverComponent"
                                                       v-if="item.popoverComponent"
                                                       :column="item" :index="$index" :row="row" :key="key"></component>
                                        </slot>
                                        <template #reference>
                                <span class="textType" :class="classNameInit(item,row, item)"
                                      @click="emitInit(item.emit,row, item)">
                                    {{textInit(row,item)}}
                                </span>
                                        </template>
                                    </el-popover>
                                </template>
                                <!--下拉选择-->
                                <template v-else-if="['select'].includes(item.type)">
                                    <el-select :model-value="textInit(row,item)"
                                               :clearable="item.clearable"
                                               @change="emitInit(item.emit,$event, row, item)"
                                               :placeholder="item.placeholder || '请选择'">
                                        <el-option
                                            v-for="item in (item.selectData||[])"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </template>
                                <!--开关-->
                                <template v-else-if="['switch'].includes(item.type)">
                                    <slot name="switch-append" :column="item" :index="$index" :row="row" :key="key"></slot>
                                    <el-switch :model-value="textInit(row,item)" @change="emitInit(item.emit,$event, row, item)"></el-switch>
                                    <slot name="switch-end" :column="item" :index="$index" :row="row" :key="key"></slot>
                                </template>
                                <!--开关-->
                                <template v-else-if="['custom'].includes(item.type)">
                                    <slot name="custom" :column="item" :index="$index" :row="row" :key="key"></slot>
                                </template>
                                <!--默认-->
                                <template v-else>
                        <span class="textType"
                              @click="emitInit(item.emit,row, item)"
                              :class="classNameInit(item,row, item)">
                            {{textInit(row,item)}}
                        </span>
                                </template>
                            </template>
                        </el-table-column>
                    </template>
                </ContentTableItem>
                <template #empty>
                    <slot name="empty"></slot>
                </template>
                <template #append>
                    <slot name="append"></slot>
                </template>
            </el-table>
            <el-pagination  class="el-pagination bottom" v-if="pagePosition == 'bottom' && !_currentPagination.noPage"
                            @size-change="_ContentTable_pagination_currentPaginationChange"
                            @current-change="_ContentTable_pagination_currentPaginationChange"
                            :current-page.sync="currentPagination_pageNo"
                            :page-sizes="[_currentPagination.pageSize]"
                            :page-size="_currentPagination.pageSize"
                            :layout="_currentPagination.layout"
                            :total="currentPaginationTotal">
            </el-pagination>
        </slot>
    </div>
</template>

<script lang="ts">
export default{
    props:{
        columns:{
            type:Array,
            default:Array,
            required:true,
            validator(value){
                return ["[object Array]"].includes(Object.prototype.toString.call(value))
            }
        },
        data:{
            type:Array,
            default:null,
            required:false,
            validator(value){
                return ["[object Array]"].includes(Object.prototype.toString.call(value))
            }
        },
        pagePosition:{
            type:String,
            default:"bottom"
        },
        pageConfig:{
            type:Object,
            default:null
        },
        apiPath:{
            type:[String,Object,Function],
            default:null
        },
        url:{
            type:String,
            default:null
        },
        params:{
            type:Object,
            default:null
        },
        config:{
            type:Object,
            default:()=>({})
        },
    },
    name: "ContentTable",
    data(){
        return {
            popoverValue:null,
        }
    },
    mounted() {
    },
    methods:{
        getKey($index,prop,key){
            return `contentTable-el-popover-${$index}-${prop}-${key}`;
        },
        popoverClick(columns,row){
            if(columns.applyValue){
                this.popoverValue = row[columns.prop];
                return;
            }
            this.popoverValue = null;
        },
        selectAll(v){
            if(v.length === 0){
                this.ContentTableData.forEach(it=>{
                    it.$ContentTableDataCheckbox = false;
                });
            }else {
                v.forEach(it =>{
                    it.$ContentTableDataCheckbox = true;
                });
            }
            this.$emit("on-selection", this.ContentTableData.filter(e=>e.$ContentTableDataCheckbox))
        },
        checkboxRowChange(){
            if(this.ContentTableData.filter(e=>e.$ContentTableDataCheckbox).length < this.ContentTableData.length){
                this.$refs.table.clearSelection()
            }
            this.$emit("on-selection", this.ContentTableData.filter(e=>e.$ContentTableDataCheckbox))
        },
        widthInit(item){
            return {
                selection:item.width || "50px",
                number:item.width || "50",
            }[item.type] || item.width
        },
        textInit(row,item){
            if(typeof item.filter === 'function'){
                return item.filter(this.$utils.lodash.get(row,item.prop),row,item);
            }
            return this.$utils.lodash.get(row,item.prop);
        },
        classNameInit(it,row, item){
            return this.$utils.lodash.merge({
                "ellipsis-1":it.ellipsis1,
                "ellipsis-2":it.ellipsis2,
                "ellipsis-3":it.ellipsis3,
            },(it.className || "").split(" ").filter(e=>e).reduce((a,b)=>(a[b] = true) && a,{}),typeof it.classNameFilter === 'function' ? it.classNameFilter(row, item) || {} :{});
        },
        emitInit(emit,...args){
            return emit ? this.$emit(emit,...args) : ()=>void (0);
        }
    }
}
</script>

<style scoped lang="less">
.ContentTable{
    .ZButton{
        .colorInit();
    }
    .textType{
        .colorInit();
    }
    .el-pagination{
        overflow-y: hidden;
        &.bottom{
            text-align: right;
            margin-top: @unit15;
        }
    }
}
</style>