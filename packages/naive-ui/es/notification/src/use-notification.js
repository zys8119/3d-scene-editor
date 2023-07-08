import { inject } from 'vue';
import { notificationApiInjectionKey } from './NotificationProvider';
import { throwError } from '../../_utils';
export function useNotification() {
    const api = inject(notificationApiInjectionKey, null);
    if (api === null) {
        throwError(
            'use-notification',
            'No outer `n-notification-provider` found.'
        );
    }
    return api;
}
