export default [
    'http://localhost:3000/%E5%9B%BE%E7%89%87:%E8%A7%86%E9%A2%91/%E9%98%BF%E7%8B%B8%20cosplay%E7%BE%8E%E5%A5%B34k%E9%AB%98%E6%B8%85%E5%A3%81%E7%BA%B8_%E5%BD%BC%E5%B2%B8%E5%9B%BE%E7%BD%91.jpg',
];

export const fontsAssets = {
    中文字体: '//at.alicdn.com/wf/webfont/iQpk1VomXl8H/Y3Y07iTzcU5I.woff',
} as const;

export type FontsAssetsType = keyof typeof fontsAssets;
