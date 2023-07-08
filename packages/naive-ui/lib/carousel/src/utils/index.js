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
exports.resolveSpeed = exports.clampValue = exports.calculateSize = void 0;
__exportStar(require('./duplicatedLogic'), exports);
__exportStar(require('./event'), exports);
function calculateSize(element, innerOnly) {
    let { offsetWidth: width, offsetHeight: height } = element;
    if (innerOnly) {
        const style = getComputedStyle(element);
        width =
            width -
            parseFloat(style.getPropertyValue('padding-left')) -
            parseFloat(style.getPropertyValue('padding-right'));
        height =
            height -
            parseFloat(style.getPropertyValue('padding-top')) -
            parseFloat(style.getPropertyValue('padding-bottom'));
    }
    return { width, height };
}
exports.calculateSize = calculateSize;
function clampValue(value, min, max) {
    return value < min ? min : value > max ? max : value;
}
exports.clampValue = clampValue;
function resolveSpeed(value) {
    if (value === void 0) return 0;
    if (typeof value === 'number') return value;
    const timeRE = /^((\d+)?\.?\d+?)(ms|s)?$/;
    const match = value.match(timeRE);
    if (match) {
        const [, number, , unit = 'ms'] = match;
        return Number(number) * (unit === 'ms' ? 1 : 1e3);
    }
    return 0;
}
exports.resolveSpeed = resolveSpeed;
