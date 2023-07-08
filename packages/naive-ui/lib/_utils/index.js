var __createBinding =
    (this && this.__createBinding) ||
    (Object.create
        ? function (o, m, k, k2) {
              if (k2 === void 0) k2 = k;
              var desc = Object.getOwnPropertyDescriptor(m, k);
              if (
                  !desc ||
                  ('get' in desc
                      ? !m.__esModule
                      : desc.writable || desc.configurable)
              ) {
                  desc = {
                      enumerable: true,
                      get: function () {
                          return m[k];
                      },
                  };
              }
              Object.defineProperty(o, k2, desc);
          }
        : function (o, m, k, k2) {
              if (k2 === void 0) k2 = k;
              o[k2] = m[k];
          });
var __exportStar =
    (this && this.__exportStar) ||
    function (m, exports2) {
        for (var p in m)
            if (
                p !== 'default' &&
                !Object.prototype.hasOwnProperty.call(exports2, p)
            )
                __createBinding(exports2, m, p);
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.markEventEffectPerformed =
    exports.eventEffectNotPerformed =
    exports.isBrowser =
    exports.isJsdom =
    exports.createKey =
    exports.color2Class =
    exports.formatLength =
    exports.getTitleAttribute =
    exports.largerSize =
    exports.smallerSize =
    exports.throwError =
    exports.warnOnce =
    exports.warn =
    exports.Wrapper =
    exports.resolveWrappedSlotWithProps =
    exports.isNodeVShowFalse =
    exports.mergeEventHandlers =
    exports.isSlotEmpty =
    exports.resolveWrappedSlot =
    exports.resolveSlotWithProps =
    exports.resolveSlot =
    exports.createInjectionKey =
    exports.createRefSetter =
    exports.createDataKey =
    exports.getFirstSlotVNode =
    exports.render =
    exports.keysOf =
    exports.getVNodeChildren =
    exports.getSlot =
    exports.flatten =
    exports.omit =
    exports.keep =
    exports.call =
        void 0;
var vue_1 = require('./vue');
Object.defineProperty(exports, 'call', {
    enumerable: true,
    get: function () {
        return vue_1.call;
    },
});
Object.defineProperty(exports, 'keep', {
    enumerable: true,
    get: function () {
        return vue_1.keep;
    },
});
Object.defineProperty(exports, 'omit', {
    enumerable: true,
    get: function () {
        return vue_1.omit;
    },
});
Object.defineProperty(exports, 'flatten', {
    enumerable: true,
    get: function () {
        return vue_1.flatten;
    },
});
Object.defineProperty(exports, 'getSlot', {
    enumerable: true,
    get: function () {
        return vue_1.getSlot;
    },
});
Object.defineProperty(exports, 'getVNodeChildren', {
    enumerable: true,
    get: function () {
        return vue_1.getVNodeChildren;
    },
});
Object.defineProperty(exports, 'keysOf', {
    enumerable: true,
    get: function () {
        return vue_1.keysOf;
    },
});
Object.defineProperty(exports, 'render', {
    enumerable: true,
    get: function () {
        return vue_1.render;
    },
});
Object.defineProperty(exports, 'getFirstSlotVNode', {
    enumerable: true,
    get: function () {
        return vue_1.getFirstSlotVNode;
    },
});
Object.defineProperty(exports, 'createDataKey', {
    enumerable: true,
    get: function () {
        return vue_1.createDataKey;
    },
});
Object.defineProperty(exports, 'createRefSetter', {
    enumerable: true,
    get: function () {
        return vue_1.createRefSetter;
    },
});
Object.defineProperty(exports, 'createInjectionKey', {
    enumerable: true,
    get: function () {
        return vue_1.createInjectionKey;
    },
});
Object.defineProperty(exports, 'resolveSlot', {
    enumerable: true,
    get: function () {
        return vue_1.resolveSlot;
    },
});
Object.defineProperty(exports, 'resolveSlotWithProps', {
    enumerable: true,
    get: function () {
        return vue_1.resolveSlotWithProps;
    },
});
Object.defineProperty(exports, 'resolveWrappedSlot', {
    enumerable: true,
    get: function () {
        return vue_1.resolveWrappedSlot;
    },
});
Object.defineProperty(exports, 'isSlotEmpty', {
    enumerable: true,
    get: function () {
        return vue_1.isSlotEmpty;
    },
});
Object.defineProperty(exports, 'mergeEventHandlers', {
    enumerable: true,
    get: function () {
        return vue_1.mergeEventHandlers;
    },
});
Object.defineProperty(exports, 'isNodeVShowFalse', {
    enumerable: true,
    get: function () {
        return vue_1.isNodeVShowFalse;
    },
});
Object.defineProperty(exports, 'resolveWrappedSlotWithProps', {
    enumerable: true,
    get: function () {
        return vue_1.resolveWrappedSlotWithProps;
    },
});
Object.defineProperty(exports, 'Wrapper', {
    enumerable: true,
    get: function () {
        return vue_1.Wrapper;
    },
});
var naive_1 = require('./naive');
Object.defineProperty(exports, 'warn', {
    enumerable: true,
    get: function () {
        return naive_1.warn;
    },
});
Object.defineProperty(exports, 'warnOnce', {
    enumerable: true,
    get: function () {
        return naive_1.warnOnce;
    },
});
Object.defineProperty(exports, 'throwError', {
    enumerable: true,
    get: function () {
        return naive_1.throwError;
    },
});
Object.defineProperty(exports, 'smallerSize', {
    enumerable: true,
    get: function () {
        return naive_1.smallerSize;
    },
});
Object.defineProperty(exports, 'largerSize', {
    enumerable: true,
    get: function () {
        return naive_1.largerSize;
    },
});
Object.defineProperty(exports, 'getTitleAttribute', {
    enumerable: true,
    get: function () {
        return naive_1.getTitleAttribute;
    },
});
var css_1 = require('./css');
Object.defineProperty(exports, 'formatLength', {
    enumerable: true,
    get: function () {
        return css_1.formatLength;
    },
});
Object.defineProperty(exports, 'color2Class', {
    enumerable: true,
    get: function () {
        return css_1.color2Class;
    },
});
var cssr_1 = require('./cssr');
Object.defineProperty(exports, 'createKey', {
    enumerable: true,
    get: function () {
        return cssr_1.createKey;
    },
});
var is_jsdom_1 = require('./env/is-jsdom');
Object.defineProperty(exports, 'isJsdom', {
    enumerable: true,
    get: function () {
        return is_jsdom_1.isJsdom;
    },
});
var is_browser_1 = require('./env/is-browser');
Object.defineProperty(exports, 'isBrowser', {
    enumerable: true,
    get: function () {
        return is_browser_1.isBrowser;
    },
});
var event_1 = require('./event');
Object.defineProperty(exports, 'eventEffectNotPerformed', {
    enumerable: true,
    get: function () {
        return event_1.eventEffectNotPerformed;
    },
});
Object.defineProperty(exports, 'markEventEffectPerformed', {
    enumerable: true,
    get: function () {
        return event_1.markEventEffectPerformed;
    },
});
__exportStar(require('./composable'), exports);
__exportStar(require('./dom'), exports);
