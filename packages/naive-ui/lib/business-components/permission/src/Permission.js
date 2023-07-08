const { computed } = require('vue');
Object.defineProperty(exports, '__esModule', { value: true });
exports.permissionProps = void 0;
const vue_1 = require('vue');
const vue_router_1 = require('vue-router');
const UsePermission_1 = require('./UsePermission');
exports.permissionProps = {
    useRoute: {
        type: Function,
    },
    has: {
        type: [String, Array],
    },
    hasAll: {
        type: [String, Array],
    },
};
const Permission = (0, vue_1.defineComponent)({
    name: 'Permission',
    props: exports.permissionProps,
    setup(props) {
        const { has, hasAll, permissions } = (0, UsePermission_1.usePermission)(
            props.useRoute || vue_router_1.useRoute
        );
        const hasComputed = computed(() => {
            if (!props.has) return true;
            return has(props.has);
        });
        const hasAllComputed = computed(() => {
            if (!props.hasAll) return true;
            return hasAll(props.hasAll);
        });
        return {
            hasComputed,
            hasAllComputed,
            permissions,
        };
    },
    render() {
        var _a, _b;
        return this.hasComputed && this.hasAllComputed
            ? (_b = (_a = this.$slots).default) === null || _b === void 0
                ? void 0
                : _b.call(_a, this.permissions)
            : void 0;
    },
});
exports.default = Permission;
