import { Ref } from 'vue';
import type { LoadingBarProviderSetupProps } from './LoadingBarProvider';
export declare const loadingBarProviderInjectionKey: globalThis.InjectionKey<{
    props: LoadingBarProviderSetupProps;
    mergedClsPrefixRef: Ref<string>;
}>;
export declare const loadingBarApiInjectionKey: globalThis.InjectionKey<
    import('./LoadingBarProvider').LoadingBarInst
>;
