Object.defineProperty(exports, '__esModule', { value: true });
exports.usePermission = void 0;
const permissionConfig = {};
const hasPermissions = (route, method = 'some', ...args) => {
    if (!route) return false;
    const meta = route.meta;
    if (!meta.permissions || meta.permissions.length === 0) return false;
    const flatArgs = args.flat();
    return meta.permissions[method]((permission) => {
        return flatArgs.includes(
            typeof permission !== 'string'
                ? permission === null || permission === void 0
                    ? void 0
                    : permission.code
                : permission
        );
    });
};
const usePermission = (useRoute) => {
    var _a, _b;
    const route =
        (_a =
            useRoute === null || useRoute === void 0 ? void 0 : useRoute()) !==
            null && _a !== void 0
            ? _a
            : (_b = permissionConfig.useRoute) === null || _b === void 0
            ? void 0
            : _b.call(permissionConfig);
    return {
        route,
        has: (...args) => hasPermissions(route, 'some', ...args),
        hasAll: (...args) => hasPermissions(route, 'every', ...args),
        permissions:
            (route === null || route === void 0
                ? void 0
                : route.meta.permissions) || [],
    };
};
exports.usePermission = usePermission;
