Object.defineProperty(exports, '__esModule', { value: true });
exports.getTitleAttribute =
    exports.largerSize =
    exports.smallerSize =
    exports.throwError =
    exports.warnOnce =
    exports.warn =
        void 0;
var warn_1 = require('./warn');
Object.defineProperty(exports, 'warn', {
    enumerable: true,
    get: function () {
        return warn_1.warn;
    },
});
Object.defineProperty(exports, 'warnOnce', {
    enumerable: true,
    get: function () {
        return warn_1.warnOnce;
    },
});
Object.defineProperty(exports, 'throwError', {
    enumerable: true,
    get: function () {
        return warn_1.throwError;
    },
});
var prop_1 = require('./prop');
Object.defineProperty(exports, 'smallerSize', {
    enumerable: true,
    get: function () {
        return prop_1.smallerSize;
    },
});
Object.defineProperty(exports, 'largerSize', {
    enumerable: true,
    get: function () {
        return prop_1.largerSize;
    },
});
var attribute_1 = require('./attribute');
Object.defineProperty(exports, 'getTitleAttribute', {
    enumerable: true,
    get: function () {
        return attribute_1.getTitleAttribute;
    },
});
