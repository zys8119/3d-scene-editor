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
var __setModuleDefault =
    (this && this.__setModuleDefault) ||
    (Object.create
        ? function (o, v) {
              Object.defineProperty(o, 'default', {
                  enumerable: true,
                  value: v,
              });
          }
        : function (o, v) {
              o['default'] = v;
          });
var __importStar =
    (this && this.__importStar) ||
    function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
            for (var k in mod)
                if (
                    k !== 'default' &&
                    Object.prototype.hasOwnProperty.call(mod, k)
                )
                    __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.formItemRowProps = void 0;
const vue_1 = require('vue');
const Row_1 = __importStar(require('../../legacy-grid/src/Row'));
const _utils_1 = require('../../_utils');
const FormItemCol_1 = __importStar(require('./FormItemCol'));
exports.formItemRowProps = Object.assign(
    Object.assign({}, Row_1.rowProps),
    FormItemCol_1.formItemColProps
);
exports.default = (0, vue_1.defineComponent)({
    name: 'FormItemRow',
    props: exports.formItemRowProps,
    setup() {
        const formItemColInstRef = (0, vue_1.ref)(null);
        const validate = (...args) => {
            const { value } = formItemColInstRef;
            if (value) {
                return value.validate(...args);
            }
        };
        const restoreValidation = () => {
            const { value } = formItemColInstRef;
            if (value) {
                return value.restoreValidation();
            }
        };
        return {
            formItemColInstRef,
            validate,
            restoreValidation,
        };
    },
    render() {
        return (0, vue_1.h)(
            Row_1.default,
            (0, _utils_1.keep)(this.$props, Row_1.rowPropKeys),
            {
                default: () => {
                    const colProps = (0, _utils_1.keep)(
                        this.$props,
                        FormItemCol_1.formItemColPropKeys
                    );
                    return (0, vue_1.h)(
                        FormItemCol_1.default,
                        Object.assign(
                            Object.assign(
                                { ref: 'formItemColInstRef' },
                                colProps
                            ),
                            { span: 24 }
                        ),
                        this.$slots
                    );
                },
            }
        );
    },
});
