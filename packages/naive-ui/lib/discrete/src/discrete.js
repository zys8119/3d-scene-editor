Object.defineProperty(exports, '__esModule', { value: true });
exports.createDiscreteApi = void 0;
const message_1 = require('../../message');
const dialog_1 = require('../../dialog');
const notification_1 = require('../../notification');
const loading_bar_1 = require('../../loading-bar');
const discreteApp_1 = require('./discreteApp');
function createDiscreteApi(
    includes,
    {
        configProviderProps,
        messageProviderProps,
        dialogProviderProps,
        notificationProviderProps,
        loadingBarProviderProps,
    } = {}
) {
    const providersAndProps = [];
    includes.forEach((type) => {
        switch (type) {
            case 'message':
                providersAndProps.push({
                    type,
                    Provider: message_1.NMessageProvider,
                    props: messageProviderProps,
                });
                break;
            case 'notification':
                providersAndProps.push({
                    type,
                    Provider: notification_1.NNotificationProvider,
                    props: notificationProviderProps,
                });
                break;
            case 'dialog':
                providersAndProps.push({
                    type,
                    Provider: dialog_1.NDialogProvider,
                    props: dialogProviderProps,
                });
                break;
            case 'loadingBar':
                providersAndProps.push({
                    type,
                    Provider: loading_bar_1.NLoadingBarProvider,
                    props: loadingBarProviderProps,
                });
                break;
        }
    });
    const discreteApp = (0, discreteApp_1.createDiscreteApp)({
        providersAndProps,
        configProviderProps,
    });
    return discreteApp;
}
exports.createDiscreteApi = createDiscreteApi;
