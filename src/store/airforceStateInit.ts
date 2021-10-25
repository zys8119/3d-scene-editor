import {GetterTree} from "vuex"
import {userInfo} from "os";
export default <airforceStateInit>{
    test(...args) {
        console.log(...args)
    },
    logo:"阅",
    docTitle:"vue3的基础框架仓库",
    navMenusConfig:{
        prop:{
            label:"name",
            children:"children",
        },
        showArrow:false,
        showIcon:true,
        bind:{
            "default-expand-all":true,
            "node-key":'id',
        }
    },
    LayoutHeaderConfig:{
        btns:[
            {icon:"&#xe607;", click(){
                console.log(this)
            }},
        ],
        dropdown:[
            {name(){return this.airforce.userInfo.name}},
            {name:"退出登录", divided:true, click(args: any[]) {
                console.log(args)
            }}
        ]
    },
    userInfo:{},
    routePath:[],
    hideHeader:false,
    hideNav:false,
    reload:true,
}

export interface airforceStateInit {
    test?(...args:any[]):void;// 测试函数.
    docTitle?:string;// 文档标题.
    navMenusConfig: navMenusConfig;// 左侧菜单配置
    LayoutHeaderConfig: LayoutHeaderConfig;// 头部配置
    userInfo:userInfo;// 用户信息
    logo:string;// 标志
    routePath:any[];// 当前路由深度
    hideHeader:boolean;// 是否显示头部
    hideNav:boolean;// 是否显示菜单导航
    reload:boolean;// 是否重新加载入口
}

export interface LayoutHeaderConfig {
    btns:LayoutHeaderConfigBtns[]
    dropdown:LayoutHeaderConfigDropdown[]
}

export interface LayoutHeaderConfigBtns{
    icon?:string;
    click?(this:any, args:any[]):void;
    show?:((this:any, args:any[])=>any);
}

export  interface LayoutHeaderConfigDropdown  extends  LayoutHeaderConfigBtns{
    divided?:boolean;
    name?:string | ((this:any, args:any[])=>any);
}

export interface userInfo{
    [key:string]:any;
    id?:string;// 用户id
    token?:string;// 令牌
    name?:string;// 用户名称
    menus?:any[];// 菜单
    avatar?:string;// 头像
}

export type navMenusConfig = {
    [key:string]:any;
    // 数据映射
    prop:{
        [key:string]:any;
    }
    showArrow:boolean;// 是否显示下拉箭头
    showIcon:boolean;// 是否显示图标
    // 树形组件参数配置
    bind:{
        [key:string]:any;
    };
}

export const getters:GetterTree<any,any> = {
    navMenus(s){
        return  s?.userInfo?.menus || []
    },
    currentRoute(s){
        const routePath = s.routePath || [];
        return routePath[routePath.length - 1]
    }
}
