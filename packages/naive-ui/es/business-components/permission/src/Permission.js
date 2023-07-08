import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { usePermission } from './UsePermission';
import { computed } from 'vue';
export const permissionProps = {
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
const Permission = defineComponent({
    name: 'Permission',
    props: permissionProps,
    setup(props) {
        const { has, hasAll, permissions } = usePermission(
            props.useRoute || useRoute
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
export default Permission;
