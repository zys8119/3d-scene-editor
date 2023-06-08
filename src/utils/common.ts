import { showToast } from 'vant';
import 'vant/es/toast/style';

export function commonToast(msg: string, duration?: number) {
    showToast({
        message: msg,
        duration: duration ?? 3000,
    });
}
