import { Utils } from './type';

declare const window: any;
declare const navigator: any;

export default <Utils>{
    /**
     * 验证码手机号码格式正确性
     * @param mobile
     */
    checkPhoneNumber(mobile: string) {
        const _mobile = mobile.replace(/(^\s*)|(\s*$)/g, '');
        const reg = /^(1[1-9][0-9])\d{8}$/i;
        return Boolean(reg.test(_mobile));
    },
    /**
     * 校验身份证号码是否合法
     * @param identityId
     */
    checkIdentityId(identityId: string) {
        if (identityId.length !== 18) {
            return false;
        }
        const numbers = identityId.split('').map(Number);
        const validator = numbers.pop();
        const factors = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        const toMod = factors
            .map((factor, i) => factor * numbers[i])
            .reduce((sum, item) => sum + item, 0);
        const mod = toMod % 11;
        const results = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
        return String(validator) === String(results[mod]);
    },
    /**
     * 验证是否是数字
     * @param val
     */
    isNumber(val: any) {
        return Boolean(/^[0-9]*$/.test(val));
    },
    /**
     * 数字转中文
     * @param val
     */
    numberChinese(val: number) {
        const chnNumChar = [
            '零',
            '一',
            '二',
            '三',
            '四',
            '五',
            '六',
            '七',
            '八',
            '九',
        ];
        const chnUnitSection = ['', '万', '亿', '万亿', '亿亿'];
        const chnUnitChar = ['', '十', '百', '千'];
        const numToChn = function (num: number) {
            const index = num.toString().indexOf('.');
            if (index != -1) {
                var str = num.toString().slice(index);
                var a = '点';
                for (var i = 1; i < str.length; i++) {
                    a += chnNumChar[parseInt(str[i])];
                }
                return a;
            } else {
                return '';
            }
        };
        function sectionToChinese(section: number) {
            let str = '',
                chnstr = '',
                zero = false,
                count = 0;
            while (section > 0) {
                let v = section % 10;
                if (v == 0) {
                    if (zero) {
                        zero = false;
                        chnstr = chnNumChar[v] + chnstr;
                    }
                } else {
                    zero = true;
                    str = chnNumChar[v];
                    str += chnUnitChar[count];
                    chnstr = str + chnstr;
                }
                count++;
                section = Math.floor(section / 10);
            }
            return chnstr;
        }
        function TransformToChinese(num: number) {
            const str = numToChn(num);
            num = Math.floor(num);
            let unitPos = 0;
            let strIns = '';
            let chnStr = '';
            let needZero = false;

            if (num === 0) {
                return chnNumChar[0];
            }
            while (num > 0) {
                const section = num % 10000;
                if (needZero) {
                    chnStr = chnNumChar[0] + chnStr;
                }
                strIns = sectionToChinese(section);
                strIns +=
                    section !== 0 ? chnUnitSection[unitPos] : chnUnitSection[0];
                chnStr = strIns + chnStr;
                needZero = section < 1000 && section > 0;
                num = Math.floor(num / 10000);
                unitPos++;
            }
            return chnStr + str;
        }
        return TransformToChinese(val);
    },
    /**
     * 日期格式化
     * @param nowDate
     * @param format
     */
    dateFormat(nowDate?: any, format?: string) {
        nowDate = nowDate || new Date();
        format = format || 'YYYY-MM-DD HH:mm:ss week sc';
        let type = Object.prototype.toString.call(nowDate);
        if (type === '[object Number]') {
            let now = new Date();
            now.setTime(nowDate);
            let timeStr = now.toLocaleString();
            timeStr = `${now.getFullYear()}/${
                now.getMonth() + 1
            }/${now.getDate()}上午${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
            let nowTime = timeStr.replace(/[\u2E80-\u9FFF]{1,}/, '/');
            let week = now.getDay(); //星期
            let hour = now.getHours(); //小时
            //判断星期几
            let weeks = ['日', '一', '二', '三', '四', '五', '六'];
            let getWeek = '星期' + weeks[week];
            let nowTimeArr: any = nowTime
                .replace(/\s/, '-')
                .split('-')
                .map((e) =>
                    e.split(/:|\//).map((item) => {
                        return item.length === 1 ? `0${item}` : item;
                    })
                )
                .toString()
                .split(',');
            let sc = '';
            //判断是AM or PM
            if (hour >= 0 && hour < 5) {
                sc = '凌晨';
            } else if (hour > 5 && hour <= 7) {
                sc = '早上';
            } else if (hour > 7 && hour <= 11) {
                sc = '上午';
            } else if (hour > 11 && hour <= 13) {
                sc = '中午';
            } else if (hour > 13 && hour <= 18) {
                sc = '下午';
            } else if (hour > 18 && hour <= 23) {
                sc = '晚上';
            }
            nowTimeArr[3] = hour > 9 ? `${hour}` : `0${hour}`;
            try {
                format = format.replace(/week/g, getWeek);
                format = format.replace(/sc/g, sc);
                format = format.replace(/Y{4}/g, nowTimeArr[0].slice(0, 4));
                format = format.replace(/Y{3}/g, nowTimeArr[0].slice(0, 3));
                format = format.replace(/Y{2}/g, nowTimeArr[0].slice(0, 2));
                format = format.replace(/Y{1}/g, nowTimeArr[0].slice(0, 1));
                format = format.replace(/M{2}/g, nowTimeArr[1].slice(0, 2));
                format = format.replace(/M{1}/g, nowTimeArr[1].slice(0, 1));
                format = format.replace(/D{2}/g, nowTimeArr[2].slice(0, 2));
                format = format.replace(/D{1}/g, nowTimeArr[2].slice(0, 1));
                format = format.replace(/H{2}/g, nowTimeArr[3].slice(0, 2));
                format = format.replace(/H{1}/g, nowTimeArr[3].slice(0, 1));
                format = format.replace(/m{2}/g, nowTimeArr[4].slice(0, 2));
                format = format.replace(/m{1}/g, nowTimeArr[4].slice(0, 1));
                format = format.replace(/s{2}/g, nowTimeArr[5].slice(0, 2));
                format = format.replace(/s{1}/g, nowTimeArr[5].slice(0, 1));
            } catch (e) {
                console.log(e);
            }
        } else if (type === '[object Date]' || type === '[object String]') {
            return this.dateFormat(new Date(nowDate).getTime(), format);
        }
        return format;
    },
    /**
     * 判断终端系统 1: IOS 2: Android 3: Windows 4: Mac OS 5: 其他
     */
    getOsType(): number {
        const u = navigator.userAgent;
        const isAndroid =
            u.indexOf('Android') > -1 || u.indexOf('Linux') !== -1;
        const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        const isWin = u.indexOf('Win') !== -1;
        const isMac = u.indexOf('Mac') !== -1;
        return isIOS ? 1 : isAndroid ? 2 : isWin ? 3 : isMac ? 4 : 5;
    },
    /**
     * 获取浏览器类型 1: 支付宝 2: 企业微信 3: 微信 4: 钉钉 5: 专有钉钉 6: 微信小程序 7: 其他
     */
    getBrowserType(): number {
        const u = navigator.userAgent.toLowerCase();
        if (u.indexOf('alipay') !== -1) {
            return 1;
        } else if (
            u.indexOf('micromessenger') !== -1 &&
            u.indexOf('wxwork') !== -1
        ) {
            return 2;
        } else if (u.indexOf('micromessenger') !== -1) {
            return 3;
        } else if (u.indexOf('dingtalk') !== -1) {
            return 4;
        } else if (u.indexOf('taurusapp') !== -1) {
            return 5;
        } else if (window.__wxjs_environment === 'miniprogram') {
            return 6;
        } else return 7;
    },
    /**
     * 隐藏字符串、脱敏
     * @param str
     * @param s 脱敏起始位置
     * @param len 星号长度
     */
    hideString(str: string, s?: number, len?: number) {
        const _s = s ?? 2;
        const _len = len ?? 3;
        return (
            str.slice(0, _s) +
            new Array(_len).fill('*').join('') +
            str.slice(_s + _len)
        );
    },
    /**
     * 校验数据类型
     * @param val
     */
    typeOf(val: any) {
        return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
    },
    /**
     * 字母大小写转换
     * @param str
     * @param type 1-全大写 2-全小写 3-首字母大写
     */
    turnCase(str: string, type: number): string {
        switch (type) {
            case 1:
                return str.toUpperCase();
            case 2:
                return str.toLowerCase();
            case 3:
                return str[0].toUpperCase() + str.substring(1).toLowerCase();
            default:
                return str;
        }
    },
    /**
     * 解析URL参数
     */
    getSearchParams(): object {
        const searchPar = new URLSearchParams(window.location.search);
        const paramsObj: any = {};
        for (const [key, value] of searchPar.entries()) {
            paramsObj[key] = value;
        }
        return paramsObj;
    },
    /**
     * uuid
     */
    uuid(): string {
        const temp_url = URL.createObjectURL(new Blob());
        const uuid = temp_url.toString();
        URL.revokeObjectURL(temp_url);
        return uuid.substring(uuid.lastIndexOf('/') + 1);
    },
    /**
     *
     * @param number 要格式化的数字
     * @param decimals 保留几位小数
     * @param dec_point 小数点符号
     * @param thousands_sep 千分位符号
     */
    moneyFormat(
        number: number,
        decimals: number,
        dec_point: string,
        thousands_sep: string
    ): string {
        number = Number(String(number).replace(/[^0-9+-Ee.]/g, ''));
        const n = !isFinite(+number) ? 0 : +number;
        const prec = !isFinite(+decimals) ? 2 : Math.abs(decimals);
        const sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep;
        const dec = typeof dec_point === 'undefined' ? '.' : dec_point;
        let s = [];
        const toFixedFix = function (n: number, prec: number) {
            const k = Math.pow(10, prec);
            return '' + Math.ceil(n * k) / k;
        };
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
        const re = /(-?\d+)(\d{3})/;
        while (re.test(s[0])) {
            s[0] = s[0].replace(re, '$1' + sep + '$2');
        }

        if ((s[1] || '').length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1).join('0');
        }
        return s.join(dec);
    },
    /**
     * 判断是否是暗黑模式
     */
    isDarkMode() {
        return (
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
        );
    },
    /**
     * 预览PDF文件
     * @param path：文件地址
     * @param api：文件API地址
     * @param name：浏览器显示的title
     * @param isCurrentWindow：是否在当前页预览
     */
    viewPdfFile(
        path: string,
        api?: string,
        name?: string,
        isCurrentWindow?: boolean
    ) {
        if (!path) return;
        const url = `https://pdf-viewer.zhijiasoft.com/static/v3/#/viewer?path=${path}&api=${api}&name=${name}`;
        // todo IOS浏览器打不开
        if (
            this.getOsType() === 1 &&
            (this.getBrowserType() === 4 || this.getBrowserType() === 5)
        )
            window.open(path);
        else {
            if (isCurrentWindow) {
                window.location.href = url;
            } else window.open(url);
        }
    },
};
