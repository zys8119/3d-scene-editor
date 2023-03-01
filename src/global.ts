import { install } from 'resize-observer';
if (!window.ResizeObserver) install();

import type { PageMap as PageMapType } from '@/typings';

import { name, version } from '../package.json';
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
    }
}
