<template>
    <div class="Home">
        <div class="globalStyle">全局样式测试</div>
        <el-divider>Transfer</el-divider>
        <Transfer v-model="trfValue"></Transfer>
        <el-divider>Annotation</el-divider>
        <Annotation>
            <div>按时打卡i哈克斯的爱上了多久啊是</div>
            <div>按时打卡i哈克斯的爱上了多久啊是卡萨丁拉萨的</div>
            <div>按时打卡i哈克斯的爱上了多久啊是卡萨丁拉萨的</div>
            <div>按时打卡i哈克斯的
                <div>asdasda</div>
                <span>asdasd</span>爱上了多久啊是卡萨丁拉萨的两岸三地啊</div>
            <div>按时打卡i哈克斯的爱上了多久啊是卡萨丁拉萨的两岸三地啊</div>
        </Annotation>
        <el-divider>Print</el-divider>
        <Print>
            <el-button>点击打印</el-button>
            <template #content>
                <div>我是打印内容</div>
            </template>
        </Print>
        <el-divider>Icon</el-divider>
        <Icon></Icon>
        <el-divider>Tree</el-divider>
        <Tree :options="options" isdraggable searchShow :searchChange="(val,node)=>new RegExp(val,'img').test(node.name)">
<!--            <template #default="{node,data}">-->
<!--                <div>-->
<!--                    {{data.name}}-自定义内容-{{node.key}}-{{node.node_open}}-->
<!--                </div>-->
<!--            </template>-->
        </Tree>
        <el-divider>InputPopover</el-divider>
        <InputPopover v-model="InputPopover">
            <el-input v-model="InputPopover"></el-input>
        </InputPopover>
        <el-divider>Swiper</el-divider>
        <Swiper>
            <SwiperItem>BBBBB</SwiperItem>
            <SwiperItem>AAAAAAAAA</SwiperItem>
            <SwiperItem>CCCCC</SwiperItem>
        </Swiper>
        <el-divider>Signature</el-divider>
        <Signature @save="selection" base64="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABYUAAAEsCAYAAACc6dzsAAAgAElEQVR4Xu3dS4glV/0H8JNMO90Z83AkopOgIAmKCxFBXGR2agzBIHngW1eCUbJS1AhuRFBUAi4kiApufAQVJlEMwRjdJRvBB4KgGOLCJIiaxEwy6e503/lT/fe2NdV17617b1X96vGZjWGm7vmd8/mdO8i3z5y66Pz58+eTXwQIECBAgAABAgQIECBAgAABAgQIECAwCoGLhMKj6LNFEiBAgAABAgQIECBAgAABAgQIECBA4EBAKGwjECBAgAABAgQIECBAgAABAgQIECBAYEQCQuERNdtSCRAgQIAAAQIECBAgQIAAAQIECBAgIBS2BwgQIECAAAECBAgQIECAAAECBAgQIDAiAaHwiJptqQQIECBAgAABAgQIECBAgAABAgQIEBAK2wMECBAgQIAAAQIECBAgQIAAAQIECBAYkYBQeETNtlQCBAgQIDAmgYsuuuhguefPnx/Tsq2VAAECBAgQIECAAAECCwWEwguJPECAAAECBAj0UUAo3MeumTMBAgQIECBAgAABAm0ICIXbUFaDAAECBAgQaF1AKNw6uYIECBAgQIAAAQIECPREQCjck0aZJgECBAgQILCcgFB4OS9PEyBAgAABAgQIECAwHgGh8Hh6baUECBAgQGBUAkLhUbXbYgkQIECAAAECBAgQWEJAKLwElkcJECBAgACB/ggIhfvTKzMlQIAAAQIECBAgQKBdAaFwu96qESBAgAABAi0JCIVbglaGAAECBAgQIECAAIHeCQiFe9cyEyZAgAABAgSqCAiFqyh5hgABAgQIECBAgACBMQoIhcfYdWsmQIAAAQIjEBAKj6DJlkiAAAECBAgQIECAwEoCQuGV2HyIAAECBAgQ6LqAULjrHTI/AgQIECBAgAABAgSiBITCUfLqEiBAgAABAo0KCIUb5TU4AQIECBAgQIAAAQI9FhAK97h5pk6AAAECBAjMFhAK2x0ECBAgQIAAAQIECBAoFxAK2xkECBAgQIDAIAWEwoNsq0URIECAAAECBAgQIFCDgFC4BkRDECBAgAABAt0TEAp3rydmRIAAAQIECBAgQIBANwSEwt3og1kQIECAAAECNQsIhWsGNRwBAgQIECBAgAABAoMREAoPppUWQoAAAQIECOQFhML2AwECBAgQIECAAAEC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ECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgSEAoHwStLgAABAgQIECBAgAABAgQIECBAgACBCAGhcIS6mgQIECBAgAABAgQIECBAgAABAgQIEAgS+D9Ekx6L2e1OCQAAAABJRU5ErkJggg=="></Signature>
        <el-divider>Map</el-divider>
        {{aaa}}
        <Map v-model="aaa">
            <el-button>选择位置</el-button>
        </Map>
        <el-divider>ZAlert</el-divider>
        <el-button @click="aa">打开弹框</el-button>
        <el-divider>Upload</el-divider>
        <Upload>
            <el-button type="success">文件上传</el-button>
        </Upload>
        <el-divider>Wangeditor</el-divider>
        {{value}}
        <Wangeditor v-model="value"></Wangeditor>
        <el-divider>Echarts</el-divider>
        <Echarts type="line" height="500px" :data="{
            legend_data:['q','w','e'],
            x_data:[1,2,3],
            series:[
                {name:'q',data:[1,2,30]},
                {name:'w',data:[6,2,3]},
                {name:'e',data:[8,6,60]},
            ]
        }"></Echarts>
        <el-divider>content-table</el-divider>
        <content-table
            @test="test"
            @dataChange="dataChange"
            :columns="columns"
            ref="table"
            :apiPath="api.test"
            @on-selection="selection"
            :config="{
                rowKey:'b',
            }"
        >
        </content-table>
    </div>
</template>

<script lang="ts">
import {columns} from "../ui/package/UiTypes/ContentTable";
import {h, shallowRef} from "vue"
export default {
    name: "Home",
    data(){
        return {
            InputPopover:null,
            aaa:[],
            value:"",
            trfValue:[
                // "02e9f7c4-f571-11e9-a328-00163e0ccf3e",
                // "714bd388-a720-11eb-9f7d-00163e09d694",
                // "71d3a60a-392b-11ea-b261-00163e0ccf3e"
            ],
            options:[
                {name:"ASdada",node_id:"asd"},
                {name:"ASdada",node_id:"asd"},
                {name:"ASdada",node_id:"asd"},
                {name:"有孩子",node_id:"asd",children:[
                    {name:"as"},
                    {name:"as"},
                    {name:"as666",children:[
                            {name:"a87"},
                            {name:"a87"},
                            {name:"a88787"},
                            {name:"a87"},
                            {name:"a87879"},
                    ]},
                    {name:"as625"},
                ]},
                {name:"ASdada",node_id:"asd"},
            ],
            columns:<Array<columns>>[
                {type:"selection"},
                {label:"数字", type:"number"},
                {label:"普通数据", prop:"name"},
                {label:"tooltip", prop:"b",ellipsis3:true, type:"tooltip"},
                {label:"样式过滤", prop:"c.b.a", emit:"test", className:"primary_link", classNameFilter(row: any, column: any): any {
                    return {
                        orange:row.name === "A"
                    }
                }},
                {
                    label:"操作",
                    type:"operate",
                    btns:[
                    {
                        name:"Asd",
                        type:"text",
                        className:"delete_link",
                        emit:'test'
                    },
                    {name:"Asd", type:"text", className:"primary", show:row=>row.c},
                ]},
                {
                    type:"edit",
                    label:"快捷编辑",
                    prop:"name",
                    applyValue:true,
                    emit:"test"
                },
                {
                    type:"edit",
                    label:"快捷编辑",
                    prop:"name",
                    emit:"test"
                },
                {
                    type:"popover",
                    label:"弹出框",
                    prop:"name",
                    emit:"test",
                    popover_placement:"left",
                    popoverComponent:shallowRef({
                        props:{
                          row:{}
                        },
                        render(){
                            return h("div",this.row.name)
                        },
                    })
                },
                {
                    type:"select",
                    label:"下拉选择",
                    prop:"name",
                    selectData:[
                        {
                            label:"asdad",
                            value:"A"
                        },
                        {
                            label:"asa",
                            value:"B"
                        }
                    ],
                    emit:"on-selection"
                },
                {
                    label:"开关",
                    prop:"name1",
                    type:"switch",
                    emit:"on-selection"
                },
                {
                    label:"合并表头",
                    align:"center",
                    columns:[
                        {
                            label:"合并表头子集",
                            prop:"name"
                        },
                        {
                            label:"合并表头子集",
                            prop:"name"
                        },
                        {
                            label:"合并表头子集",
                            prop:"name"
                        }
                    ]
                }
            ]
        }
    },
    mounted() {
        // this.$refs.table.ContentTableData = [
        //     {name:"asdada",b:"测试数据"},
        //     {name:"A",b:"测试数据",c:{b:{a:"阿萨大大"}}},
        //     {name:"asdada", b:"阿松大萨达阿萨阿松大萨达阿萨阿松大萨达阿萨阿松大萨达阿萨阿松大萨达阿萨阿松大萨达阿萨阿松大萨达阿萨",c:{b:{a:"阿萨大大"}}},
        // ];
        this.$refs.table.init();
        this.axios({
            url:"/aaa",
        })
    },
    methods:{
        selection(v,row,item){
            if(row){
                row[item.prop] = v;
            }
            console.log(v)
        },
        aa() {
            this.$ZAlert.show({
                title:"adsa",
                _components:()=>import("./Alert/Alert.vue"),
                _event:{
                    onSaveA:val=>{
                        console.log(val,2)
                    }
                },
                _props:{},
            })
        },
        dataChange(d){
            // console.log(d)
            return true
        },
        test(e){
            console.log(e,11)
        }
    }
}
</script>

<style scoped lang="less">
.Home{
    padding: @unit15;
    .globalStyle{
        color: @themeColor;
        font-size: @unit15;
    }
}
</style>