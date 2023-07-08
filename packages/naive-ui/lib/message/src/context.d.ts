import { Ref } from 'vue';
import type {
    MessageApiInjection,
    MessageProviderSetupProps,
} from './MessageProvider';
export declare const messageApiInjectionKey: globalThis.InjectionKey<MessageApiInjection>;
export declare const messageProviderInjectionKey: globalThis.InjectionKey<{
    props: MessageProviderSetupProps;
    mergedClsPrefixRef: Ref<string>;
}>;
