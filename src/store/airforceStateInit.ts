import {GetterTree} from "vuex"
import {userInfo} from "os";
export default <airforceStateInit>{
    test(...args) {
        console.log(...args)
    },
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
    userInfo:{},
}

export interface airforceStateInit {
    test?(...args:any[]):void;// 测试函数.
    docTitle?:string;// 文档标题.
    navMenusConfig: navMenusConfig;// 左侧菜单配置
    userInfo:userInfo;// 用户信息
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
        return  s?.userInfo?.data?.menus || []
    }
}
