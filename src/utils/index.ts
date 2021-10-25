import $utilsOptions from "./Interface"
import lodash from "lodash"
export default <$utilsOptions>{
    lodash,
    isNumber(val){
        return !/^(([0-9]*)|([0-9]*\.[0-9]*))$/.test(val);
    },
    is_S(val,lng,isSatrt){
        if((<any>Object).prototype.toString.call(val) === '[object Object]'){
            return false;
        }
        if((<any>Object).prototype.toString.call(val) === '[object Array]'){
            if(typeof lng === "number"){
                return  val.length < lng;
            }else {
                return  false
            }
        }
        let is_SS = !(val && /^\S{1,}|^\s{1,}\S{1,}/.test(val));
        if(typeof lng === "boolean" || isSatrt === true){
            is_SS = !(val && /\S{1,}/.test(val));
        }
        let result = is_SS || ((val && val.length && typeof val.length == "number" && typeof lng == "number")?(val && val.length && val.length < lng):false);
        return result
    },
    isPhone(val){
        return this.is_S(val) || !/^1\d{10}$/.test(val);
    },
    //数字转中文
    number_chinese(strObj) {
        //如果数字含有小数部分，那么可以将小数部分单独取出
//将小数部分的数字转换为字符串的方法：

        var chnNumChar = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
        var chnUnitSection = ['', '万', '亿', '万亿', '亿亿'];
        var chnUnitChar = ['', '十', '百', '千'];

        var numToChn = function (num) {
            var index = num.toString().indexOf('.');
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
        }

//定义在每个小节的内部进行转化的方法，其他部分则与小节内部转化方法相同
        function sectionToChinese(section) {
            var str = '', chnstr = '', zero = false, count = 0;   //zero为是否进行补零， 第一次进行取余由于为个位数，默认不补零
            while (section > 0) {
                var v = section % 10;  //对数字取余10，得到的数即为个位数
                if (v == 0) {                    //如果数字为零，则对字符串进行补零
                    if (zero) {
                        zero = false;        //如果遇到连续多次取余都是0，那么只需补一个零即可
                        chnstr = chnNumChar[v] + chnstr;
                    }
                } else {
                    zero = true;           //第一次取余之后，如果再次取余为零，则需要补零
                    str = chnNumChar[v];
                    str += chnUnitChar[count];
                    chnstr = str + chnstr;
                }
                count++;
                section = Math.floor(section / 10);
            }
            return chnstr;
        }
        //定义整个数字全部转换的方法，需要依次对数字进行10000为单位的取余，然后分成小节，按小节计算，当每个小节的数不足1000时，则需要进行补零
        function TransformToChinese(num) {
            var a = numToChn(num);
            num = Math.floor(num);
            var unitPos = 0;
            var strIns = '', chnStr = '';
            var needZero = false;

            if (num === 0) {
                return chnNumChar[0];
            }
            while (num > 0) {
                var section = num % 10000;
                if (needZero) {
                    chnStr = chnNumChar[0] + chnStr;
                }
                strIns = sectionToChinese(section);
                strIns += (section !== 0) ? chnUnitSection[unitPos] : chnUnitSection[0];
                chnStr = strIns + chnStr;
                needZero = (section < 1000) && (section > 0);
                num = Math.floor(num / 10000);
                unitPos++;
            }

            return chnStr + a;
        }

        return TransformToChinese(strObj)
    },
    dateFormat(newDate?:any,Format?:string){
        newDate = newDate || new Date();
        Format = Format || "YYYY-MM-DD HH:mm:ss week sc";
        let type = Object.prototype.toString.call(newDate);
        if(type === "[object String]"){
            Format = newDate;
            newDate = new Date();
        }
        if(type === "[object Number]"){
            let now = new Date();
            now.setTime(newDate);
            let nowTime = now.toLocaleString().replace(/[\u2E80-\u9FFF]{1,}/,"/");
            let week = now.getDay(); //星期
            let hour = now.getHours(); //小时
            //判断星期几
            let weeks = ["日","一","二","三","四","五","六"];
            let getWeek = "星期" + weeks[week];
            //"YYYY-MM-DD HH:mm:ss week sc"
            //{ nowTime: '2019-7-7 13:18:29', getWeek: '星期日', sc: '中午' }
            let nowTimeArr:any = nowTime.replace(/\s/,"-").split("-").map(e=>e.split(/:|\//).map(item=>{
                if(item.length == 1){
                    return `0${item}`;
                }
                return item;
            })).toString().split(",");
            let sc;
            //判断是AM or PM
            if(hour >= 0 && hour < 5){
                sc = '凌晨';
            }
            else if(hour > 5 && hour <= 7){
                sc = '早上';
            }
            else if(hour > 7 && hour <= 11){
                sc = '上午';
            }
            else if(hour > 11 && hour <= 13){
                sc = '中午';
            }
            else if(hour> 13 && hour <= 18){
                sc = '下午';
            }
            else if(hour > 18 && hour <= 23){
                sc = '晚上';
            }
            nowTimeArr[3] = hour > 9? `${hour}` : `0${hour}`;
            try {
                Format = Format.replace(/week/g,getWeek);
                Format = Format.replace(/sc/g,sc);
                Format = Format.replace(/Y{4}/g,nowTimeArr[0].slice(0,4));
                Format = Format.replace(/Y{3}/g,nowTimeArr[0].slice(0,3));
                Format = Format.replace(/Y{2}/g,nowTimeArr[0].slice(0,2));
                Format = Format.replace(/Y{1}/g,nowTimeArr[0].slice(0,1));
                Format = Format.replace(/M{2}/g,nowTimeArr[1].slice(0,2));
                Format = Format.replace(/M{1}/g,nowTimeArr[1].slice(0,1));
                Format = Format.replace(/D{2}/g,nowTimeArr[2].slice(0,2));
                Format = Format.replace(/D{1}/g,nowTimeArr[2].slice(0,1));
                Format = Format.replace(/H{2}/g,nowTimeArr[3].slice(0,2));
                Format = Format.replace(/H{1}/g,nowTimeArr[3].slice(0,1));
                Format = Format.replace(/m{2}/g,nowTimeArr[4].slice(0,2));
                Format = Format.replace(/m{1}/g,nowTimeArr[4].slice(0,1));
                Format = Format.replace(/s{2}/g,nowTimeArr[5].slice(0,2));
                Format = Format.replace(/s{1}/g,nowTimeArr[5].slice(0,1));
            }catch (e) {
                // err
            }

        }else if (type === "[object Date]" || type === "[object String]"){
            return this.dateFormat(new Date(newDate).getTime(),Format);
        }
        return Format;
    },
    addJs(src:string){
        return new Promise(resolve => {
            if(document.getElementById(src)){
                // @ts-ignore
                resolve();
                return ;
            }
            const js = document.createElement("script");
            js.id = src;
            js.src = src;
            document.body.appendChild(js)
            js.onload = ()=>{
                setTimeout(()=>{
                    // @ts-ignore
                    resolve();
                });
            }
            js.onerror = ()=>{
                this.addJs(src).then(()=>{
                    setTimeout(()=> {
                        // @ts-ignore
                        resolve();
                    });
                })
            }
        })
    },
    MD5(string:string){
        function md5_RotateLeft(lValue, iShiftBits) {
            return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
        }
        function md5_AddUnsigned(lX, lY) {
            var lX4, lY4, lX8, lY8, lResult;
            lX8 = (lX & 0x80000000);
            lY8 = (lY & 0x80000000);
            lX4 = (lX & 0x40000000);
            lY4 = (lY & 0x40000000);
            lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
            if (lX4 & lY4) {
                return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
            }
            if (lX4 | lY4) {
                if (lResult & 0x40000000) {
                    return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
                } else {
                    return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
                }
            } else {
                return (lResult ^ lX8 ^ lY8);
            }
        }
        function md5_F(x, y, z) {
            return (x & y) | ((~x) & z);
        }
        function md5_G(x, y, z) {
            return (x & z) | (y & (~z));
        }
        function md5_H(x, y, z) {
            return (x ^ y ^ z);
        }
        function md5_I(x, y, z) {
            return (y ^ (x | (~z)));
        }
        function md5_FF(a, b, c, d, x, s, ac) {
            a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_F(b, c, d), x), ac));
            return md5_AddUnsigned(md5_RotateLeft(a, s), b);
        };
        function md5_GG(a, b, c, d, x, s, ac) {
            a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_G(b, c, d), x), ac));
            return md5_AddUnsigned(md5_RotateLeft(a, s), b);
        };
        function md5_HH(a, b, c, d, x, s, ac) {
            a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_H(b, c, d), x), ac));
            return md5_AddUnsigned(md5_RotateLeft(a, s), b);
        };
        function md5_II(a, b, c, d, x, s, ac) {
            a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_I(b, c, d), x), ac));
            return md5_AddUnsigned(md5_RotateLeft(a, s), b);
        };
        function md5_ConvertToWordArray(string) {
            var lWordCount;
            var lMessageLength = string.length;
            var lNumberOfWords_temp1 = lMessageLength + 8;
            var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
            var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
            var lWordArray = Array(lNumberOfWords - 1);
            var lBytePosition = 0;
            var lByteCount = 0;
            while (lByteCount < lMessageLength) {
                lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                lBytePosition = (lByteCount % 4) * 8;
                lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
                lByteCount++;
            }
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
            lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
            lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
            return lWordArray;
        };
        function md5_WordToHex(lValue) {
            var WordToHexValue = "",
                WordToHexValue_temp = "",
                lByte, lCount;
            for (lCount = 0; lCount <= 3; lCount++) {
                lByte = (lValue >>> (lCount * 8)) & 255;
                WordToHexValue_temp = "0" + lByte.toString(16);
                WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
            }
            return WordToHexValue;
        };
        function md5_Utf8Encode(string) {
            string = string.replace(/\r\n/g, "\n");
            var utftext = "";
            for (var n = 0; n < string.length; n++) {
                var c = string.charCodeAt(n);
                if (c < 128) {
                    utftext += String.fromCharCode(c);
                } else if ((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                } else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
            }
            return utftext;
        };
        var x = Array();
        var k, AA, BB, CC, DD, a, b, c, d;
        var S11 = 7,
            S12 = 12,
            S13 = 17,
            S14 = 22;
        var S21 = 5,
            S22 = 9,
            S23 = 14,
            S24 = 20;
        var S31 = 4,
            S32 = 11,
            S33 = 16,
            S34 = 23;
        var S41 = 6,
            S42 = 10,
            S43 = 15,
            S44 = 21;
        string = md5_Utf8Encode(string);
        x = md5_ConvertToWordArray(string);
        a = 0x67452301;
        b = 0xEFCDAB89;
        c = 0x98BADCFE;
        d = 0x10325476;
        for (k = 0; k < x.length; k += 16) {
            AA = a;
            BB = b;
            CC = c;
            DD = d;
            a = md5_FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
            d = md5_FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
            c = md5_FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
            b = md5_FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
            a = md5_FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
            d = md5_FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
            c = md5_FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
            b = md5_FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
            a = md5_FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
            d = md5_FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
            c = md5_FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
            b = md5_FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
            a = md5_FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
            d = md5_FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
            c = md5_FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
            b = md5_FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
            a = md5_GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
            d = md5_GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
            c = md5_GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
            b = md5_GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
            a = md5_GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
            d = md5_GG(d, a, b, c, x[k + 10], S22, 0x2441453);
            c = md5_GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
            b = md5_GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
            a = md5_GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
            d = md5_GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
            c = md5_GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
            b = md5_GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
            a = md5_GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
            d = md5_GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
            c = md5_GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
            b = md5_GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
            a = md5_HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
            d = md5_HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
            c = md5_HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
            b = md5_HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
            a = md5_HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
            d = md5_HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
            c = md5_HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
            b = md5_HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
            a = md5_HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
            d = md5_HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
            c = md5_HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
            b = md5_HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
            a = md5_HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
            d = md5_HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
            c = md5_HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
            b = md5_HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
            a = md5_II(a, b, c, d, x[k + 0], S41, 0xF4292244);
            d = md5_II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
            c = md5_II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
            b = md5_II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
            a = md5_II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
            d = md5_II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
            c = md5_II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
            b = md5_II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
            a = md5_II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
            d = md5_II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
            c = md5_II(c, d, a, b, x[k + 6], S43, 0xA3014314);
            b = md5_II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
            a = md5_II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
            d = md5_II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
            c = md5_II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
            b = md5_II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
            a = md5_AddUnsigned(a, AA);
            b = md5_AddUnsigned(b, BB);
            c = md5_AddUnsigned(c, CC);
            d = md5_AddUnsigned(d, DD);
        }
        return (md5_WordToHex(a) + md5_WordToHex(b) + md5_WordToHex(c) + md5_WordToHex(d)).toLowerCase();
    },
    findPath(options,criteria,optionsOld,parent,resDataAll,childName='children'){
        if(typeof optionsOld == 'string'){
            childName = optionsOld;
            optionsOld = null;
        }
        optionsOld = optionsOld || options;
        let resData = null;
        resDataAll = resDataAll || [];
        options.forEach((item,$findPathIndex)=>{
            if(!resData){
                let bool = true;
                for(let key in criteria){
                    if(criteria[key] != item[key]){
                        bool = false;
                    }
                }
                if(bool){
                    resData = item;
                    resDataAll.unshift({
                        ...item,
                        $findPathIndex
                    });
                    if(optionsOld && parent){
                        this.findPath(optionsOld,parent,optionsOld,null,resDataAll,childName);
                    }
                }
                if(item[childName] && item[childName].length > 0){
                    this.findPath(item[childName],criteria,optionsOld,item,resDataAll,childName);
                }
            }
        });
        if(resDataAll.length > 0){
            return resDataAll;
        }
        return null;
    },

    getOption(data,callback = Function, keyName = "children"){
        let result = [];
        data.forEach((e,k)=>{
            if(e[keyName] && e[keyName].length > 0){
                // @ts-ignore
                e[keyName] = this.getOption(e[keyName], ...[...new Set(arguments)].slice(1))
            }
            result.push(callback(e,k))
        });
        return result;
    }
}
