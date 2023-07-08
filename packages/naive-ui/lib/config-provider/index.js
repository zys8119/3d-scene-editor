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
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.configProviderProps = exports.NConfigProvider = void 0;
var ConfigProvider_1 = require('./src/ConfigProvider');
Object.defineProperty(exports, 'NConfigProvider', {
    enumerable: true,
    get: function () {
        return __importDefault(ConfigProvider_1).default;
    },
});
Object.defineProperty(exports, 'configProviderProps', {
    enumerable: true,
    get: function () {
        return ConfigProvider_1.configProviderProps;
    },
});
__exportStar(require('./src/interface'), exports);
