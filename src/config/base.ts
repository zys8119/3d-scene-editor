import { BaseConfig } from './typings';

export default {
    /**
     * 基础地址，router和vite均会采用此项配置
     * 使用空字符串设置可以使用相对地址
     * 如果使用 history apis，可能需要配置此项
     */
    base: '',
    /**
     * 唯一识别码，用于 token, userinfo 的前缀
     * 避免不同项目在统一域名下互相覆盖的问题
     */
    unique: '',
    /**
     * 全局标题，改变这里的标题会最终改变 index.html 的标题
     */
    title: '后台管理系统',
    company: '浙江智加信息科技有限公司',
    lang: 'zh-cn',
    /**
     * 在编译时，是否启用文件名 hash
     * 暂时默认关闭因为有时候会因为同名相互覆盖
     */
    filenameHash: false,
    /**
     * 右上角是否需要单位切换
     */
    hasUnitChange: false,
    /**
     * 是否是H5模式
     */
    isH5: false,
} as BaseConfig;
