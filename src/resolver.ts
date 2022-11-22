import { ComponentResolver, ComponentResolveResult } from 'unplugin-vue-components'
function resolveComponent(name: string) {
    if (!name.match(/^Wp[A-Z]/))
        return
    if (name === 'WpG') name = 'WpGrid'
    if (name === 'WpGi') name = 'WpGridItem'
    if (name.match(/^WpIconFont[A-Z]/)) {
        return {
            importName: name,
            path: '@iconfont/icon'
        }
    }
    return {
        name,
        from: 'wisdom-plus/es'
    } as ComponentResolveResult
}
export function WisdomPlusResolver(): ComponentResolver[] {
    return [
        {
            type: 'component',
            resolve: async(name) => {
                return resolveComponent(name) as ComponentResolveResult
            }
        }
    ]
}
