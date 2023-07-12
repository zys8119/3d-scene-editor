import { install } from 'resize-observer';
if (!window.ResizeObserver) install();

import type { PageMap as PageMapType } from '@/typings';

import { name, version } from '../package.json';
import { MessageApiInjection } from 'naive-ui/lib/message/src/MessageProvider';
import { DialogApiInjection } from 'naive-ui/lib/dialog/src/DialogProvider';
/** 打印版本信息 */
console.log(
    `%c${name} v${version}`,
    'color: #fff; border-radius: 5px; padding: 10px 25px;background: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%)'
);

window.$modeConfig = import.meta.env.VITE_CONFIG || '{}';

declare global {
    type PageMap = PageMapType;
    interface Window {
        $modeConfig: string;
        $draw3dSceneEditorObject3DClick: boolean;
        $message: MessageApiInjection;
        $dialog: DialogApiInjection;
    }
    const $message: MessageApiInjection;
    const $dialog: DialogApiInjection;
}
