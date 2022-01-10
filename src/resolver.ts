import { ComponentResolver } from 'unplugin-vue-components'
function resolveComponent(name: string) {
    if (!name.match(/^Wp[A-Z]/))
        return
    return {
        importName: name,
        path: 'wisdom-plus/es'
    }
}
export function WisdomPlusResolver(): ComponentResolver[] {
    return [
        {
            type: 'component',
            resolve: async(name) => {
                return resolveComponent(name)
            }
        }
    ]
}