Object.defineProperty(exports, '__esModule', { value: true });
exports.useInjectionElementCollection =
    exports.useInjectionCollection =
    exports.useInjectionInstanceCollection =
        void 0;
const vue_1 = require('vue');
function useInjectionInstanceCollection(
    injectionName,
    collectionKey,
    registerKeyRef
) {
    var _a;
    const injection = (0, vue_1.inject)(injectionName, null);
    if (injection === null) return;
    const vm =
        (_a = (0, vue_1.getCurrentInstance)()) === null || _a === void 0
            ? void 0
            : _a.proxy;
    (0, vue_1.watch)(registerKeyRef, registerInstance);
    registerInstance(registerKeyRef.value);
    (0, vue_1.onBeforeUnmount)(() => {
        registerInstance(void 0, registerKeyRef.value);
    });
    function registerInstance(key, oldKey) {
        const collection = injection[collectionKey];
        if (oldKey !== void 0) removeInstance(collection, oldKey);
        if (key !== void 0) addInstance(collection, key);
    }
    function removeInstance(collection, key) {
        if (!collection[key]) collection[key] = [];
        collection[key].splice(
            collection[key].findIndex((instance) => instance === vm),
            1
        );
    }
    function addInstance(collection, key) {
        if (!collection[key]) collection[key] = [];
        if (!~collection[key].findIndex((instance) => instance === vm)) {
            collection[key].push(vm);
        }
    }
}
exports.useInjectionInstanceCollection = useInjectionInstanceCollection;
function useInjectionCollection(injectionName, collectionKey, valueRef) {
    const injection = (0, vue_1.inject)(injectionName, null);
    if (injection === null) return;
    if (!(collectionKey in injection)) {
        injection[collectionKey] = [];
    }
    injection[collectionKey].push(valueRef.value);
    (0, vue_1.watch)(valueRef, (value, prevValue) => {
        const collectionArray = injection[collectionKey];
        const index = collectionArray.findIndex(
            (collectionValue) => collectionValue === prevValue
        );
        if (~index) collectionArray.splice(index, 1);
        collectionArray.push(value);
    });
    (0, vue_1.onBeforeUnmount)(() => {
        const collectionArray = injection[collectionKey];
        const index = collectionArray.findIndex(
            (collectionValue) => collectionValue === valueRef.value
        );
        if (~index) collectionArray.splice(index, 1);
    });
}
exports.useInjectionCollection = useInjectionCollection;
function useInjectionElementCollection(
    injectionName,
    collectionKey,
    getElement
) {
    const injection = (0, vue_1.inject)(injectionName, null);
    if (injection === null) return;
    if (!(collectionKey in injection)) {
        injection[collectionKey] = [];
    }
    (0, vue_1.onMounted)(() => {
        const el = getElement();
        if (!el) return;
        injection[collectionKey].push(el);
    });
    (0, vue_1.onBeforeUnmount)(() => {
        const collectionArray = injection[collectionKey];
        const element = getElement();
        const index = collectionArray.findIndex(
            (collectionElement) => collectionElement === element
        );
        if (~index) collectionArray.splice(index, 1);
    });
}
exports.useInjectionElementCollection = useInjectionElementCollection;
