import { Ref, UnwrapRef } from 'vue';
export type Size = 'tiny' | 'small' | 'medium' | 'large';
export type OnUpdateValue = (value: string & [string, string]) => void;
export type OnUpdateValueImpl = (value: string | [string, string]) => void;
export interface InputWrappedRef {
    wrapperElRef: Ref<HTMLElement | null>;
    textareaElRef: Ref<HTMLTextAreaElement | null>;
    inputElRef: Ref<HTMLInputElement | null>;
    isCompositing: Ref<boolean>;
    blur: () => void;
    focus: () => void;
    select: () => void;
    activate: () => void;
    deactivate: () => void;
    scrollTo: (options: ScrollToOptions) => void;
}
export type InputInst = UnwrapRef<InputWrappedRef>;
export declare const inputInjectionKey: globalThis.InjectionKey<{
    countGraphemesRef: Ref<((input: string) => number) | undefined>;
    mergedValueRef: Ref<string | [string, string] | null>;
    maxlengthRef: Ref<number | undefined>;
    mergedClsPrefixRef: Ref<string>;
}>;
