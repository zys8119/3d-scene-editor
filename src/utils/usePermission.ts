import { RouteLocationNormalizedLoaded } from 'vue-router'

export const hasPermissions = (
    route: RouteLocationNormalizedLoaded,
    ...args: (string | string[])[]
): boolean => {
    if (
        !route.meta.permissions ||
        route.meta.permissions.length === 0
    ) return false
    const flatArgs = args.flat()
    return route.meta.permissions.some(permission => flatArgs.includes(permission))
}

export const hasAllPermissions = (route: RouteLocationNormalizedLoaded, ...args: (string | string[])[]): boolean => {
    if (
        !route.meta.permissions ||
        route.meta.permissions.length === 0
    ) return false
    const flatArgs = args.flat()
    return route.meta.permissions.every(permission => flatArgs.includes(permission))
}

export const usePermission = () => {
    const route = useRoute()
    return {
        route,
        has: (...args: (string | string[])[]) => hasPermissions(route, ...args),
        hasAll: (...args: (string | string[])[]) => hasAllPermissions(route, ...args),
        permissions: route.meta.permissions || []
    }
}