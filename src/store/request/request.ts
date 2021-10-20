import { ElLoading as Loading } from 'element-plus';
import AxiosClassInterface,{ windowCommon, WindowCommonAxiosRequestConfig } from './AxiosClassInterface';
import axios, {Method, AxiosInstance} from 'axios'
import _ from 'lodash'
declare const window:windowCommon;
declare const Promise:any;

class AxiosClass implements AxiosClassInterface{
    public baseURL = window.common.baseURL();
    public isLoading = true;
    public isLoadingProgress = false;
    public method:Method;
    public data:any;
    public loadingInstance:any;
    public loadingDom:any;
    public options:WindowCommonAxiosRequestConfig;
    public requestBody:WindowCommonAxiosRequestConfig;
    public timeout = 150000;
    public service:AxiosInstance;

    constructor(options:WindowCommonAxiosRequestConfig) {
        this.options = options;
        this.method = options.method || 'get';
        this.loadingDom = options.dom || '';
        this.dataInit();
        this.loadingInit();
        this.requestBodyInit();
        return (<any>this.serviceInit());
    }

    dataInit(){
        this.data = this.options.data;
        // FormData处理
        if(this.options.isFormData){
            let isFormData = new FormData();
            for (let k in this.data){
                if(Object.prototype.toString.call(this.data[k]) === "[object Object]" ||
                    Object.prototype.toString.call(this.data[k]) === "[object Array]"){
                    isFormData.append(k,JSON.stringify(this.data[k]));
                }else {
                    isFormData.append(k,this.data[k]);
                }
            }
            this.data = isFormData;
        }
    }

    loadingInit(){
        if(typeof this.options.loading === "boolean"){this.isLoading = this.options.loading;}
        if(typeof this.options.loadingProgress === "boolean"){this.isLoadingProgress = this.options.loadingProgress;}
    }

    requestBodyInit(){
        this.requestBody = {
            ...this.options,
            baseURL:this.options.baseURL || this.baseURL,
            method:this.method,
            timeout: this.timeout,
        };
        if(this.method === 'get'){this.requestBody.params = this.data;}else {this.requestBody.data = this.data;}
        if(this.options.isAxiosOptions){this.requestBody = this.options;}else {
            let headers = this.options.headers || {};
            this.requestBody = {
                ...this.requestBody,
                headers:{
                    ...headers,
                    'Content-Type':headers['Content-Type'] || (this.options.isFormData) ? 'application/x-www-form-urlencoded;charset=UTF-8' : 'application/json',
                }
            };
            if (sessionStorage.getItem('userInfo')) this.requestBody.headers['AUTHORIZATION'] = JSON.parse(sessionStorage.getItem('userInfo')).token;
            if (sessionStorage.getItem('unit')) this.requestBody.headers['UNIT'] = sessionStorage.getItem('unit');
        }
    }

    serviceInit(){
        this.service =  axios.create();
        this.interceptors();
        return this.service(this.requestBody);
    }

    interceptors(){
        this.interceptors_request();
        this.interceptors_response();
    }

    interceptors_request(){
        this.service.interceptors.request.use(config => {
            if(this.isLoading){this.loadingInstance = Loading.service({target: this.loadingDom || 'body', customClass:"el-loading-mask-requestcustom-class"});}
            if (this.isLoadingProgress) window._this.$LP.show();
            return config;
        }, error => {
            window._this.$message.error('系统错误');
            return Promise.reject(error);
        });
    }

    interceptors_response(){
        this.service.interceptors.response.use(response => {
            if(this.isLoading) {this.loadingInstance.close()}
            if (this.isLoadingProgress) window._this.$LP.hide();
            if (response.data.code !== 0) window._this.$message.error(response.data.message || response.data.msg || '接口错误');
            return new Promise((resolve, reject) => {
                if (response.data.code === 0) resolve(response.data)
                else if (response.data.code === 401) {
                    sessionStorage.clear();
                    window.location.hash = '/login'
                    reject(response.data)
                }else {
                    reject(response.data);
                }
            })
        }, error => {
            if(this.isLoading) {this.loadingInstance.close()}
            if (this.isLoadingProgress) window._this.$LP.hide();
            window._this.$message.error(error.message);
            return Promise.reject(error);
        });
    }
}

export default class request{
    constructor(requestBaseOptions:WindowCommonAxiosRequestConfig) {
        window.common = {
            postUrl:"https://snpctest.zhijiasoft.com",
            Axios:(options:WindowCommonAxiosRequestConfig)=>(<any>new AxiosClass(_.merge(requestBaseOptions || {}, options))),
            baseURL(){
                // @ts-ignore
                return window.baseURL || ((import.meta.env.PROD)?'//'+window.location.host:window.common.postUrl)
            }
        };
    }
}

