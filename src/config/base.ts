import { BaseConfig } from './typings'

export default {
    /**
     * 基础地址，router和vite均会采用此项配置
     * 使用空字符串设置可以使用相对地址
     * 如果使用 history api，可能需要配置此项
     */
    base: '',
    /**
     * 全局标题，改变这里的标题会最终改变 index.html 的标题
     */
    title: '无纸化',
    lang: 'zh-cn',
    favicon: 'favicon.ico'
} as BaseConfig