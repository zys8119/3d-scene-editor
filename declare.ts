import {$ZAlert} from "./src/store/plug/alertPlug/Interface"
import {windowCommon, WindowCommonAxiosRequestConfig} from "./src/store/request/AxiosClassInterface";
import {AxiosPromise} from "axios";
import $utilsOptions from "./src/utils/Interface";
import { airforceStateType } from "./src/store/airforce";
declare module '@vue/runtime-core'  {
    export interface ComponentCustomProperties {
        $ZAlert:$ZAlert;
        axios(options:WindowCommonAxiosRequestConfig):AxiosPromise<any>;
        $utils:$utilsOptions;
        airforce:airforceStateType;
    }
}
declare global {
    interface ImportMeta {
        url:string;
        env: {
            BASE_URL?: string;
            DEV: boolean;
            MODE: "development" | "production";
            PROD: boolean;
            SSR: boolean;
        };
    }
    const AMap:any;
    // @ts-ignore
    const window:Window &  Partial<windowCommon> & Partial<WindowInterface> & typeof globalThis;
}

declare interface WindowInterface {
    devicePixelRatio:number;
    rd_ui_vue_map_vm_emit?(name:string,type:string):void;
    AMap:any;
    URL: {
        prototype: URL;
        new(url: string, base?: string | URL): URL;
        createObjectURL(object: any): string;
        revokeObjectURL(url: string): void;
    };
}