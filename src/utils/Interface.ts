export default interface $utilsOptions {
    [key:string]:any;
    lodash:any;
    /**
     * 是否为数字
     * @param val 校验数据

     */
    isNumber?(val:any):boolean;
    /**
     * 是否为空
     * @param val 校验数据
     * @param lng 数据长度限制，至少lng
     * @param isSatrt 是否允许空格开头，true为允许
     */
    is_S?(val:any, lng?:number|boolean, isSatrt?:boolean):boolean;
    /**
     * 是否为手机号码
     * @param val 校验数据
     */
    isPhone?(val:any):boolean;
    /**
     * 数字转中文
     * @param strObj 字符串
     */
    number_chinese?(strObj:number):string;

    /**
     * 时间格式转化
     * @param newDate {string | Date} 时间数据
     * @param Format {string} 时间格式 例如："YYYY-MM-DD HH:mm:ss week sc"
     */
    dateFormat?(newDate?:any,Format?:string):string;

    /**
     * 添加外部js
     * @param string
     */
    addJs?(string: string):Promise<any>;

    /**
     * MD5加密
     * @param string
     */
    MD5?(string: string):string;

    /**
     * 多维数组根据条件查找元素的路径
     * @param options 数据源
     * @param criteria 查询条件
     * @param optionsOld 原始数据源
     * @param parent 当前元素的父级
     * @param resDataAll 返回结果
     * @param childName 子集字段名称
     * @returns {*}
     *
     * 使用：
     * this.findPath(data,{fieldId: "14000000"},"child")
     */
    findPath?(options,criteria,optionsOld,parent,resDataAll,childName):object[];
}
