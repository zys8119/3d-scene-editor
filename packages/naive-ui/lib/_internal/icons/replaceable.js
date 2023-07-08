Object.defineProperty(exports, '__esModule', { value: true });
exports.replaceable = void 0;
const lodash_1 = require('lodash');
const vue_1 = require('vue');
const context_1 = require('../../config-provider/src/context');
function replaceable(name, icon) {
    return (0, vue_1.defineComponent)({
        name: (0, lodash_1.upperFirst)(name),
        setup() {
            var _a;
            const mergedIconsRef =
                (_a = (0, vue_1.inject)(
                    context_1.configProviderInjectionKey,
                    null
                )) === null || _a === void 0
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
exports.replaceable = replaceable;
