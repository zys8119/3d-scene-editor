import { App, Component } from 'vue';
import { ConfigProviderProps } from '../../config-provider';
import { DialogApi } from '../../dialog';
import { LoadingBarApi } from '../../loading-bar';
import { MessageApi } from '../../message';
import { NotificationApi } from '../../notification';
import { DiscreteApiType, MaybeRef } from './interface';
export type Provider<P = any> = new (...args: any[]) => {
    $props: P;
};
export type ProviderProps<C> = C extends Provider<infer P> ? P : unknown;
export interface DiscreteAppOptions {
    providersAndProps: Array<{
        type: DiscreteApiType;
        Provider: Component;
        props: any;
    }>;
    configProviderProps?: MaybeRef<ConfigProviderProps>;
}
export interface DiscreteApp {
    unmount: () => void;
    app: App;
    message?: MessageApi;
    notification?: NotificationApi;
    dialog?: DialogApi;
    loadingBar?: LoadingBarApi;
}
export declare function createDiscreteApp({
    providersAndProps,
    configProviderProps,
}: DiscreteAppOptions): DiscreteApp;
