Object.defineProperty(exports, '__esModule', { value: true });
exports.useDialogReactiveList =
    exports.useDialog =
    exports.dialogProviderProps =
    exports.NDialogProvider =
    exports.dialogProps =
    exports.NDialog =
        void 0;
var Dialog_1 = require('./src/Dialog');
Object.defineProperty(exports, 'NDialog', {
    enumerable: true,
    get: function () {
        return Dialog_1.NDialog;
    },
});
var dialogProps_1 = require('./src/dialogProps');
Object.defineProperty(exports, 'dialogProps', {
    enumerable: true,
    get: function () {
        return dialogProps_1.dialogProps;
    },
});
var DialogProvider_1 = require('./src/DialogProvider');
Object.defineProperty(exports, 'NDialogProvider', {
    enumerable: true,
    get: function () {
        return DialogProvider_1.NDialogProvider;
    },
});
Object.defineProperty(exports, 'dialogProviderProps', {
    enumerable: true,
    get: function () {
        return DialogProvider_1.dialogProviderProps;
    },
});
var composables_1 = require('./src/composables');
Object.defineProperty(exports, 'useDialog', {
    enumerable: true,
    get: function () {
        return composables_1.useDialog;
    },
});
Object.defineProperty(exports, 'useDialogReactiveList', {
    enumerable: true,
    get: function () {
        return composables_1.useDialogReactiveList;
    },
});
