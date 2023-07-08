import { RouteLocationNormalizedLoaded } from 'vue-router';
export declare const usePermission: (
    useRoute?: () => RouteLocationNormalizedLoaded
) => {
    route: RouteLocationNormalizedLoaded | undefined;
    has: (...args: Array<string | string[]>) => boolean;
    hasAll: (...args: Array<string | string[]>) => boolean;
    permissions: {};
};
