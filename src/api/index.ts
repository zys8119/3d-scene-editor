import { Plugin, getCurrentInstance,ComponentInternalInstance } from "vue"
import { AxiosPromise } from "axios"
import api,{apiOpt} from "./api"
class ApiProxy {
    constructor(vue, obj) {
        return new Proxy(obj,{
            get(target: Partial<apiOpt>, p: PropertyKey, receiver: any): any {
                if(Object.prototype.toString.call(target[<any>p]) === "[object Object]"){
                    return new ApiProxy(vue, <apiOpt>target[<any>p]);
                }
                if(Object.prototype.toString.call(target[<any>p]) === "[object Function]"){
                    return function (this:ComponentInternalInstance,...agrs):AxiosPromise<any>{
                        return target[<any>p].call(getCurrentInstance(),...agrs);
                    };
                }
                return target[<any>p];
            }
        });
    }
}
const plug:Plugin = {
    install(vue){
        vue.config.globalProperties.api = new ApiProxy(vue.config.globalProperties,api)
    }
}
export default plug