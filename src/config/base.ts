import { BaseConfig } from './typings'

export default {
    /**
     * 基础地址，router和vite均会采用此项配置
     * 使用空字符串设置可以使用相对地址
     * 如果使用 history api，可能需要配置此项
     */
    base: '',
    /**
     * 唯一识别码，用于 token, userinfo 的前缀
     * 避免不同项目在统一域名下互相覆盖的问题
     */
    unique: 'ar_',
    /**
     * 全局标题，改变这里的标题会最终改变 index.html 的标题
     */
    title: '文创AR系统',
    lang: 'zh-cn'
} as BaseConfig