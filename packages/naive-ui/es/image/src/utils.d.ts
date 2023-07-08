import { Ref } from 'vue';
export type IntersectionObserverOptions = Omit<
    IntersectionObserverInit,
    'root'
> & {
    root?: Element | Document | null | string;
};
export declare const resolveOptionsAndHash: (
    options?: IntersectionObserverOptions | undefined
) => {
    hash: string;
    options: Omit<IntersectionObserverInit, 'root'> & {
        root: Element | Document;
    };
};
export declare const observeIntersection: (
    el: HTMLElement | null,
    options: IntersectionObserverOptions | undefined,
    shouldStartLoadingRef: Ref<boolean>
) => () => void;
