//todo 过滤器组件
export default {
    default:{
        input:true,
        placeholder:"请输入关键字",
        search:"search",
        searchText:"搜索",
        reset:"reset",
        resetText:"重置",
        rightBtns:[
            {
                name:'导出',
                emit:"Export",
            },
            {
                name:'新建角色',
                emit:"NewRole",
            },
        ]
    },
    init:{
        input:true,
        placeholder:"请输入关键字",
        search:"search",
        searchText:"搜索",
        reset:"reset",
        resetText:"重置",
        rightBtns:[
            {
                name:'新增绑定',
                emit:"add",
            },
        ]
    },
    right:{
        input:false,
        searchText:false,
        resetText:false
    },
    none:{
        input:false,
        searchText:false,
        resetText:false,
        rightBtns:[],
    },
    btn:{
        input:true,
        placeholder:"请输入关键字",
        search:"search",
        searchText:"搜索",
        reset:"reset",
        resetText:"重置",
        rightBtns:[]
    }
}

//todo 表格默认分页参数
export const pageConfig = {
    pageSize:10,
    layout:"total, sizes, prev, pager, next, jumper",
    noPage:false,
    total:0,
};