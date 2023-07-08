Object.defineProperty(exports, '__esModule', { value: true });
exports.useNotification = void 0;
const vue_1 = require('vue');
const NotificationProvider_1 = require('./NotificationProvider');
const _utils_1 = require('../../_utils');
function useNotification() {
    const api = (0, vue_1.inject)(
        NotificationProvider_1.notificationApiInjectionKey,
        null
    );
    if (api === null) {
        (0, _utils_1.throwError)(
            'use-notification',
            'No outer `n-notification-provider` found.'
        );
    }
    return api;
}
exports.useNotification = useNotification;
