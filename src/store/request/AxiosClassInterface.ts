import {AxiosInstance, AxiosPromise, Method, AxiosRequestConfig} from "axios";
import { Plugin } from 'vue';

export default interface AxiosClassInterface {
    baseURL:string;// 接口地址
    isLoading:boolean;// 加载层
    isLoadingProgress:boolean;// 加载层1
    method:Method;// 请求方式
    data:any;// 请求数据
    loadingInstance:any;// 加载实例
    loadingDom:any;// 加载Dom
    options:WindowCommonAxiosRequestConfig;// 选项
    requestBody:WindowCommonAxiosRequestConfig;// 请求体
    timeout:number;// 超时时间
    service:AxiosInstance;// 请求实例
    /**
     * 初始化Data
     */
    dataInit?():void;
    /**
     * 加载层处理
     */
    loadingInit?():void;
    /**
     * 请求Body初始化
     */
    requestBodyInit?():void;
    /**
     * 初始化服务
     */
    serviceInit?():AxiosPromise;
    /**
     * 拦截器
     */
    interceptors?():void;
    /**
     * 请求拦截
     */
    interceptors_request?():void;
    /**
     * 响应拦截
     */
    interceptors_response?():void;
}


// todo Common接口类
export interface windowCommon extends Window{
    [key:string]:any;
    _this:any;
    common:windowCommonType;
}

export type windowCommonType = {
    [key:string]:any;
    postUrl?:string;
    Axios?(WindowCommonAxiosRequestConfig:WindowCommonAxiosRequestConfig):AxiosPromise;
    baseURL?():string;
}

// todo Axios配置
export interface WindowCommonAxiosRequestConfig extends AxiosRequestConfig{
    dom?:string; // 请求加载层所嵌入的Dom选择器，默认body
    loading?:boolean; // 是否需要加载层，默认true需要
    loadingProgress?:boolean; // 是否需要加载进度层，默认false不需要
    isAxiosOptions?:boolean; // 是否使用原始Axios配置，默认不使用
    isFormData?:boolean; // 是否以FormData形式请求，默认不使用
    ModuleName?:string; // 是否缓存到状态管理器，并设置对应模块名称，默认不使用
    ModuleFilter?<T=any>(res:T):Promise<T>; // 缓存到状态管理器之前的数据过滤，默认不使用
}

export type airforcePlugOptionsType  =  Plugin & {
    requestBaseOptions?:WindowCommonAxiosRequestConfig;
    [key:string]:any;
}