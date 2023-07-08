var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.NFormItemRow =
    exports.NFormItemCol =
    exports.formItemGridItemProps =
    exports.formItemGiProps =
    exports.NFormItemGi =
    exports.NFormItemGridItem =
    exports.formItemProps =
    exports.NFormItem =
    exports.formProps =
    exports.NForm =
        void 0;
var Form_1 = require('./src/Form');
Object.defineProperty(exports, 'NForm', {
    enumerable: true,
    get: function () {
        return __importDefault(Form_1).default;
    },
});
Object.defineProperty(exports, 'formProps', {
    enumerable: true,
    get: function () {
        return Form_1.formProps;
    },
});
var FormItem_1 = require('./src/FormItem');
Object.defineProperty(exports, 'NFormItem', {
    enumerable: true,
    get: function () {
        return __importDefault(FormItem_1).default;
    },
});
Object.defineProperty(exports, 'formItemProps', {
    enumerable: true,
    get: function () {
        return FormItem_1.formItemProps;
    },
});
var FormItemGridItem_1 = require('./src/FormItemGridItem');
Object.defineProperty(exports, 'NFormItemGridItem', {
    enumerable: true,
    get: function () {
        return __importDefault(FormItemGridItem_1).default;
    },
});
Object.defineProperty(exports, 'NFormItemGi', {
    enumerable: true,
    get: function () {
        return __importDefault(FormItemGridItem_1).default;
    },
});
Object.defineProperty(exports, 'formItemGiProps', {
    enumerable: true,
    get: function () {
        return FormItemGridItem_1.formItemGiProps;
    },
});
Object.defineProperty(exports, 'formItemGridItemProps', {
    enumerable: true,
    get: function () {
        return FormItemGridItem_1.formItemGiProps;
    },
});
var FormItemCol_1 = require('./src/FormItemCol');
Object.defineProperty(exports, 'NFormItemCol', {
    enumerable: true,
    get: function () {
        return __importDefault(FormItemCol_1).default;
    },
});
var FormItemRow_1 = require('./src/FormItemRow');
Object.defineProperty(exports, 'NFormItemRow', {
    enumerable: true,
    get: function () {
        return __importDefault(FormItemRow_1).default;
    },
});
