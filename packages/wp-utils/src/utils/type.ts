export interface Utils {
    checkPhoneNumber(phone: string): boolean; // 验证码手机号码格式正确性
    isNumber(val: any): boolean; // 验证是否是数字
    numberChinese(val: number): string; // 数字转中文
    dateFormat(nowDate?: any, format?: string): string; // 日期格式化
    getOsType(): number; // 判断终端系统
    getBrowserType(): number; // 获取浏览器类型
    hideString(str: string, s?: number, len?: number): string; // 隐藏字符串、脱敏
    typeOf(val: any): string; // 校验数据类型
    turnCase(str: string, type: number): string; // 字母大小写转换  type：1-全大写 2-全小写 3-首字母大写
    getSearchParams(): object; // 解析URL参数
    uuid(): string; // uuid
    moneyFormat(
        number: number,
        decimals: number,
        dec_point: string,
        thousands_sep: string
    ): string; // 金额格式化
    checkIdentityId(identityId: string): boolean; // 校验身份证号码是否合法
    isDarkMode(): boolean; // 判断是否是暗黑模式
    viewPdfFile(
        path: string,
        api?: string,
        name?: string,
        isCurrentWindow?: boolean
    ): void; // 预览PDF文件
}
