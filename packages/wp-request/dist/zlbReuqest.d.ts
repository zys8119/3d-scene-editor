import { AxiosRequestConfig, Canceler } from "axios";
import { Options, RequestResponseType } from "./typings";
import { RequestPromise } from "./utils";
export declare function request<T = any, Config extends AxiosRequestConfig = {}>(config: AxiosRequestConfig, setLoading: boolean, options: Options, cancel: Canceler): RequestPromise<RequestResponseType<Config, T>>;
declare module 'wp-zheliban-request/types/mgop/type' {
    interface IMgopParams {
        type?: string;
        dataType?: string;
    }
}
