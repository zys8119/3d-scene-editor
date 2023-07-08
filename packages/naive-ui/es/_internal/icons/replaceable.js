import { upperFirst } from 'lodash-es';
import { defineComponent, inject } from 'vue';
import { configProviderInjectionKey } from '../../config-provider/src/context';
export function replaceable(name, icon) {
    return defineComponent({
        name: upperFirst(name),
        setup() {
            var _a;
            const mergedIconsRef =
                (_a = inject(configProviderInjectionKey, null)) === null ||
                _a === void 0
                    ? void 0
                    : _a.mergedIconsRef;
            return () => {
                var _a2;
                const iconOverride =
                    (_a2 =
                        mergedIconsRef === null || mergedIconsRef === void 0
                            ? void 0
                            : mergedIconsRef.value) === null || _a2 === void 0
                        ? void 0
                        : _a2[name];
                return iconOverride ? iconOverride() : icon;
            };
        },
    });
}
