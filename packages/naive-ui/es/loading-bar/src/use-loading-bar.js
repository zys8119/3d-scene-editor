import { inject } from 'vue';
import { loadingBarApiInjectionKey } from './context';
import { throwError } from '../../_utils';
export function useLoadingBar() {
    const loadingBar = inject(loadingBarApiInjectionKey, null);
    if (loadingBar === null) {
        throwError(
            'use-loading-bar',
            'No outer <n-loading-bar-provider /> founded.'
        );
    }
    return loadingBar;
}
