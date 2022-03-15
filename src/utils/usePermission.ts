import { RouteLocationNormalizedLoaded } from 'vue-router'

export const hasPermissions = (
    route: RouteLocationNormalizedLoaded,
    method: 'some' | 'every',
    ...args: (string | string[])[]
): boolean => {
    if (
        !route.meta.permissions ||
        route.meta.permissions.length === 0
    ) return false
    const flatArgs = args.flat()
    return route.meta.permissions[method](permission => flatArgs.includes(permission))
}

export const usePermission = () => {
    const route = useRoute()
    return {
        route,
        has: (...args: (string | string[])[]) => hasPermissions(route, 'some', ...args),
        hasAll: (...args: (string | string[])[]) => hasPermissions(route, 'every', ...args),
        permissions: route.meta.permissions || []
    }
}