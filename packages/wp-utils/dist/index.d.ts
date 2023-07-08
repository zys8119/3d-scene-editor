import { P as PageConfig, U as UserConfig, Z as ZLBUserPage } from './type-1cd779d2.js';

interface Utils {
    checkPhoneNumber(phone: string): boolean;
    isNumber(val: any): boolean;
    numberChinese(val: number): string;
    dateFormat(nowDate?: any, format?: string): string;
    getOsType(): number;
    getBrowserType(): number;
    hideString(str: string, s?: number, len?: number): string;
    typeOf(val: any): string;
    turnCase(str: string, type: number): string;
    getSearchParams(): object;
    uuid(): string;
    moneyFormat(number: number, decimals: number, dec_point: string, thousands_sep: string): string;
    checkIdentityId(identityId: string): boolean;
    isDarkMode(): boolean;
    viewPdfFile(path: string, api?: string, name?: string, isCurrentWindow?: boolean): void;
}

declare const _default$1: Utils;

declare function createBaseBurialPoint(config: PageConfig): void;
declare function createUserInfoBurialPoint(config: UserConfig): void;
declare function getAuthCode(): Promise<unknown>;

declare function zwlogGlobal(config: ZLBUserPage): void;

declare const _default: {
    utils: Utils;
    createBaseBurialPointZzd: typeof createBaseBurialPoint;
    createUserInfoBurialPointZzd: typeof createUserInfoBurialPoint;
    getAuthCodeZzd: typeof getAuthCode;
    zwlogGlobalZlb: typeof zwlogGlobal;
};

export { createBaseBurialPoint as createBaseBurialPointZzd, createUserInfoBurialPoint as createUserInfoBurialPointZzd, _default as default, getAuthCode as getAuthCodeZzd, _default$1 as utils, zwlogGlobal as zwlogGlobalZlb };
