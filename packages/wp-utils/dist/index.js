// src/utils/index.ts
var utils_default = {
  /**
   * 验证码手机号码格式正确性
   * @param mobile
   */
  checkPhoneNumber(mobile) {
    const _mobile = mobile.replace(/(^\s*)|(\s*$)/g, "");
    const reg = /^(1[1-9][0-9])\d{8}$/i;
    return Boolean(reg.test(_mobile));
  },
  /**
   * 校验身份证号码是否合法
   * @param identityId
   */
  checkIdentityId(identityId) {
    if (identityId.length !== 18) {
      return false;
    }
    const numbers = identityId.split("").map(Number);
    const validator = numbers.pop();
    const factors = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const toMod = factors.map((factor, i) => factor * numbers[i]).reduce((sum, item) => sum + item, 0);
    const mod = toMod % 11;
    const results = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
    return String(validator) === String(results[mod]);
  },
  /**
   * 验证是否是数字
   * @param val
   */
  isNumber(val) {
    return Boolean(/^[0-9]*$/.test(val));
  },
  /**
   * 数字转中文
   * @param val
   */
  numberChinese(val) {
    const chnNumChar = ["\u96F6", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D"];
    const chnUnitSection = ["", "\u4E07", "\u4EBF", "\u4E07\u4EBF", "\u4EBF\u4EBF"];
    const chnUnitChar = ["", "\u5341", "\u767E", "\u5343"];
    const numToChn = function(num) {
      const index = num.toString().indexOf(".");
      if (index != -1) {
        var str = num.toString().slice(index);
        var a = "\u70B9";
        for (var i = 1; i < str.length; i++) {
          a += chnNumChar[parseInt(str[i])];
        }
        return a;
      } else {
        return "";
      }
    };
    function sectionToChinese(section) {
      let str = "", chnstr = "", zero = false, count = 0;
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
    function TransformToChinese(num) {
      const str = numToChn(num);
      num = Math.floor(num);
      let unitPos = 0;
      let strIns = "";
      let chnStr = "";
      let needZero = false;
      if (num === 0) {
        return chnNumChar[0];
      }
      while (num > 0) {
        const section = num % 1e4;
        if (needZero) {
          chnStr = chnNumChar[0] + chnStr;
        }
        strIns = sectionToChinese(section);
        strIns += section !== 0 ? chnUnitSection[unitPos] : chnUnitSection[0];
        chnStr = strIns + chnStr;
        needZero = section < 1e3 && section > 0;
        num = Math.floor(num / 1e4);
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
  dateFormat(nowDate, format) {
    nowDate = nowDate || /* @__PURE__ */ new Date();
    format = format || "YYYY-MM-DD HH:mm:ss week sc";
    let type = Object.prototype.toString.call(nowDate);
    if (type === "[object Number]") {
      let now = /* @__PURE__ */ new Date();
      now.setTime(nowDate);
      let timeStr = now.toLocaleString();
      timeStr = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}\u4E0A\u5348${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
      let nowTime = timeStr.replace(/[\u2E80-\u9FFF]{1,}/, "/");
      let week = now.getDay();
      let hour = now.getHours();
      let weeks = ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"];
      let getWeek = "\u661F\u671F" + weeks[week];
      let nowTimeArr = nowTime.replace(/\s/, "-").split("-").map((e) => e.split(/:|\//).map((item) => {
        return item.length === 1 ? `0${item}` : item;
      })).toString().split(",");
      let sc = "";
      if (hour >= 0 && hour < 5) {
        sc = "\u51CC\u6668";
      } else if (hour > 5 && hour <= 7) {
        sc = "\u65E9\u4E0A";
      } else if (hour > 7 && hour <= 11) {
        sc = "\u4E0A\u5348";
      } else if (hour > 11 && hour <= 13) {
        sc = "\u4E2D\u5348";
      } else if (hour > 13 && hour <= 18) {
        sc = "\u4E0B\u5348";
      } else if (hour > 18 && hour <= 23) {
        sc = "\u665A\u4E0A";
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
    } else if (type === "[object Date]" || type === "[object String]") {
      return this.dateFormat(new Date(nowDate).getTime(), format);
    }
    return format;
  },
  /**
   * 判断终端系统 1: IOS 2: Android 3: Windows 4: Mac OS 5: 其他
   */
  getOsType() {
    const u = navigator.userAgent;
    const isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") !== -1;
    const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    const isWin = u.indexOf("Win") !== -1;
    const isMac = u.indexOf("Mac") !== -1;
    return isIOS ? 1 : isAndroid ? 2 : isWin ? 3 : isMac ? 4 : 5;
  },
  /**
   * 获取浏览器类型 1: 支付宝 2: 企业微信 3: 微信 4: 钉钉 5: 专有钉钉 6: 微信小程序 7: 其他
   */
  getBrowserType() {
    const u = navigator.userAgent.toLowerCase();
    if (u.indexOf("alipay") !== -1) {
      return 1;
    } else if (u.indexOf("micromessenger") !== -1 && u.indexOf("wxwork") !== -1) {
      return 2;
    } else if (u.indexOf("micromessenger") !== -1) {
      return 3;
    } else if (u.indexOf("dingtalk") !== -1) {
      return 4;
    } else if (u.indexOf("taurusapp") !== -1) {
      return 5;
    } else if (window.__wxjs_environment === "miniprogram") {
      return 6;
    } else
      return 7;
  },
  /**
   * 隐藏字符串、脱敏
   * @param str
   * @param s 脱敏起始位置
   * @param len 星号长度
   */
  hideString(str, s, len) {
    const _s = s != null ? s : 2;
    const _len = len != null ? len : 3;
    return str.slice(0, _s) + new Array(_len).fill("*").join("") + str.slice(_s + _len);
  },
  /**
   * 校验数据类型
   * @param val
   */
  typeOf(val) {
    return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
  },
  /**
   * 字母大小写转换
   * @param str
   * @param type 1-全大写 2-全小写 3-首字母大写
   */
  turnCase(str, type) {
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
  getSearchParams() {
    const searchPar = new URLSearchParams(window.location.search);
    const paramsObj = {};
    for (const [key, value] of searchPar.entries()) {
      paramsObj[key] = value;
    }
    return paramsObj;
  },
  /**
   * uuid
   */
  uuid() {
    const temp_url = URL.createObjectURL(new Blob());
    const uuid = temp_url.toString();
    URL.revokeObjectURL(temp_url);
    return uuid.substring(uuid.lastIndexOf("/") + 1);
  },
  /**
   *
   * @param number 要格式化的数字
   * @param decimals 保留几位小数
   * @param dec_point 小数点符号
   * @param thousands_sep 千分位符号
   */
  moneyFormat(number, decimals, dec_point, thousands_sep) {
    number = Number(String(number).replace(/[^0-9+-Ee.]/g, ""));
    const n = !isFinite(+number) ? 0 : +number;
    const prec = !isFinite(+decimals) ? 2 : Math.abs(decimals);
    const sep = typeof thousands_sep === "undefined" ? "," : thousands_sep;
    const dec = typeof dec_point === "undefined" ? "." : dec_point;
    let s = [];
    const toFixedFix = function(n2, prec2) {
      const k = Math.pow(10, prec2);
      return "" + Math.ceil(n2 * k) / k;
    };
    s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
    const re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
      s[0] = s[0].replace(re, "$1" + sep + "$2");
    }
    if ((s[1] || "").length < prec) {
      s[1] = s[1] || "";
      s[1] += new Array(prec - s[1].length + 1).join("0");
    }
    return s.join(dec);
  },
  /**
   * 判断是否是暗黑模式
   */
  isDarkMode() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  },
  /**
   * 预览PDF文件
   * @param path：文件地址
   * @param api：文件API地址
   * @param name：浏览器显示的title
   * @param isCurrentWindow：是否在当前页预览
   */
  viewPdfFile(path, api, name, isCurrentWindow) {
    if (!path)
      return;
    const url = `https://pdf-viewer.zhijiasoft.com/static/v3/#/viewer?path=${path}&api=${api}&name=${name}`;
    if (this.getOsType() === 1 && (this.getBrowserType() === 4 || this.getBrowserType() === 5))
      window.open(path);
    else {
      if (isCurrentWindow) {
        window.location.href = url;
      } else
        window.open(url);
    }
  }
};

// src/zhezhengding/index.ts
import dd from "gdt-jsapi";
function createBaseBurialPoint(config) {
  const allConfig = config;
  if (!allConfig.enable)
    return;
  try {
    aplus_queue.push({
      action: "aplus.setMetaInfo",
      arguments: ["aplus-waiting", "MAN"]
    });
    aplus_queue.push({
      "action": "aplus.sendPV",
      "arguments": [{
        is_auto: false
      }, {
        sapp_id: allConfig.sapp_id,
        sapp_name: allConfig.sapp_name,
        page_id: allConfig.page_id,
        page_name: allConfig.page_name,
        page_url: allConfig.page_url
      }]
    });
  } catch (e) {
    console.log(e);
  }
}
function createUserInfoBurialPoint(config) {
  const allConfig = config;
  if (!allConfig.enable)
    return;
  try {
    aplus_queue.push({
      action: "aplus.setMetaInfo",
      arguments: ["_hold", "BLOCK"]
    });
    aplus_queue.push({
      action: "aplus.setMetaInfo",
      arguments: ["_user_nick", allConfig._user_nick]
    });
    aplus_queue.push({
      action: "aplus.setMetaInfo",
      arguments: ["_user_id", allConfig._user_id]
    });
    if (allConfig._dev_id) {
      aplus_queue.push({
        action: "aplus.setMetaInfo",
        arguments: ["_dev_id", allConfig._dev_id]
      });
    }
    aplus_queue.push({
      action: "aplus.setMetaInfo",
      arguments: ["_hold", "START"]
    });
  } catch (e) {
    console.log(e);
  }
}
function getAuthCode() {
  let code = null;
  return new Promise((resolve, reject) => {
    try {
      dd.ready(() => {
        dd.getAuthCode({}).then(async (result) => {
          if (result) {
            code = result.code || result.auth_code;
            resolve(code);
          }
        }).catch((err) => {
          reject(err);
        });
      });
    } catch (e) {
      reject(e);
    }
  });
}

// src/zheliban/index.ts
var zwlog = null;
var pageLogMap = {};
var log_status = "01";
var initZwlog = (userId = "", userNick = "") => {
  zwlog = new ZwLog({ _user_id: userId, _user_nick: userNick });
  if (userId && userNick)
    log_status = "02";
};
function zwlogGlobal(config) {
  var _a, _b, _c, _d, _e, _f, _g;
  const allConfig = config;
  console.log(allConfig);
  const userId = (_a = allConfig.userId) != null ? _a : null;
  const userNick = (_b = allConfig.userNick) != null ? _b : null;
  const url = (_c = allConfig.url) != null ? _c : null;
  const enterPageTime = (_d = allConfig.enterPageTime) != null ? _d : null;
  const leavePageTime = (_e = allConfig.leavePageTime) != null ? _e : null;
  const loadTime = (_f = allConfig.loadTime) != null ? _f : null;
  const responseTime = (_g = allConfig.responseTime) != null ? _g : null;
  const bid = allConfig.bid;
  if (!zwlog && userId && userNick)
    return initZwlog(userId, userNick);
  if (!url)
    return;
  if (!pageLogMap[url]) {
    pageLogMap[url] = {
      enterPageTime: null,
      leavePageTime: null,
      loadTime: null,
      responseTime: null
    };
  }
  if (enterPageTime)
    pageLogMap[url].enterPageTime = enterPageTime;
  if (leavePageTime)
    pageLogMap[url].leavePageTime = leavePageTime;
  if (loadTime)
    pageLogMap[url].loadTime = loadTime;
  if (responseTime)
    pageLogMap[url].responseTime = responseTime;
  if (pageLogMap[url].enterPageTime && pageLogMap[url].leavePageTime && pageLogMap[url].loadTime && pageLogMap[url].responseTime) {
    let duration = pageLogMap[url].leavePageTime - pageLogMap[url].enterPageTime;
    let t2 = pageLogMap[url].loadTime - pageLogMap[url].enterPageTime;
    let t0 = pageLogMap[url].responseTime - pageLogMap[url].enterPageTime;
    setTimeout(() => {
      let params = {
        miniAppId: bid,
        Page_duration: duration / 1e3 + "s",
        t2: t2 / 1e3 + "s",
        t0: t0 / 1e3 + "s",
        log_status
      };
      zwlog.onReady(() => {
        zwlog.sendPV(params);
        delete pageLogMap[url];
      });
    }, 500);
  }
}

// src/index.ts
var src_default = {
  utils: utils_default,
  createBaseBurialPointZzd: createBaseBurialPoint,
  createUserInfoBurialPointZzd: createUserInfoBurialPoint,
  getAuthCodeZzd: getAuthCode,
  zwlogGlobalZlb: zwlogGlobal
};
export {
  createBaseBurialPoint as createBaseBurialPointZzd,
  createUserInfoBurialPoint as createUserInfoBurialPointZzd,
  src_default as default,
  getAuthCode as getAuthCodeZzd,
  utils_default as utils,
  zwlogGlobal as zwlogGlobalZlb
};
