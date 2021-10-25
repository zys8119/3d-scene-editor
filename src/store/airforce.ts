import {Module} from "vuex"
import store from "./index"
import _ from "lodash"
import airforceStateInit,{getters} from "./airforceStateInit"
import {windowCommon,WindowCommonAxiosRequestConfig} from "./request/AxiosClassInterface"
declare const window:windowCommon;
export type airforceStateType =  {
    /**
     * 设置状态数据
     * @param ModuleName 模块名称
     * @param keyPathName 路径名称
     * @param value 路径值
     * @param replace 强制替换，当数据类型为object时候生效
     */
    input(ModuleName:string, keyPathName:any,value?:any,replace?:boolean):void;
} & Partial<any>;
export default <Module<any,any>>{
    state:<airforceStateType>{
        ...airforceStateInit,

        input(ModuleName:string, keyPathName:any,value:any,replace:boolean){
            let goods = _.set({},keyPathName,value);
            let isMerge = true;
            if(undefined === value){
                goods = keyPathName;
                isMerge = false;
            }
            store.commit("airforceSet",{
                goods,
                ModuleName,
                isMerge,
                value,
                keyPathName,
                replace
            })
        }
    },
    mutations:{
        airforceSet(state, {goods,ModuleName,isMerge,value,keyPathName,replace}){
            switch (Object.prototype.toString.call(goods)){
                case "[object Object]":
                    if(isMerge){
                        let Obj = _.merge((state[ModuleName] || {}),goods)
                        state[ModuleName] = Obj;
                        if(replace){
                            state[ModuleName] = _.set(Obj,keyPathName,value);
                        }
                    }else {
                        state[ModuleName] = goods;
                    }
                    break;
                default:
                    state[ModuleName] = goods;
                    break;
            }
        }
    },
    actions:{
        axios(injectee,options:WindowCommonAxiosRequestConfig){
            return window.common.Axios(options).then(res=>{
                if(options.ModuleName){
                    injectee.state.input(options.ModuleName, null);
                    if(options.ModuleFilter){
                        const ModuleFilterRes = options.ModuleFilter(res);
                        if(Object.prototype.toString.call(ModuleFilterRes) === "[object Promise]"){
                            ModuleFilterRes.then(resNext=>{
                                injectee.state.input(options.ModuleName, resNext);
                            }).catch(()=>{
                                injectee.state.input(options.ModuleName, null);
                            })
                        }else{
                            injectee.state.input(options.ModuleName, ModuleFilterRes);
                        }
                    }else {
                        injectee.state.input(options.ModuleName, res);
                    }
                }
                return res;
            }).catch(err=>{
                if(options.ModuleName){
                    injectee.state.input(options.ModuleName, undefined);
                }
                return Promise.reject(err);
            })
        }
    },
    getters:getters || {}
}
