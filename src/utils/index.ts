export * from './vite/htmlTransform'
export * from './usePromise'

/**
 * 中划线字符驼峰
 * @param {*} str 要转换的字符串
 * @returns 返回值
 */
export function toHump(str: string): string {
    if (!str) return str
    return str.replace(/-(\w)/g, function(all, letter) {
        return letter.toUpperCase()
    }).replace(/(\s|^)[a-z]/g, function(char) {
        return char.toUpperCase()
    })
}