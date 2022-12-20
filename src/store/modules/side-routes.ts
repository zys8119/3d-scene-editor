import {RouteRecordRaw} from 'vue-router'
import {h} from 'vue'
import {NIcon} from 'naive-ui'
import SvgIcon from '@/components/layout/svg-icon/index.vue'

const useSideRoutesStore = defineStore('side-routes', {
    state() {
        return {}
    },
    actions: {
        getParentsRoutes() {
            return window.store.main.routes.filter(route => !route.meta?.hidden).map(r => {
                return {
                    ...r,
                    active: useRoute().meta?.breadcrumbs?.[0].name === r.name
                }
            })
        },
        getSideBarRoutes() {
            const currentRoute = window.store.appConfig.getLayoutMode !== 'ltr' ? window.store.main.routes.find(routing => useRoute().meta.breadcrumbs?.[0].name === routing.name)?.children || [] : window.store.main.routes
            return this.routesMapper(currentRoute)
        },
        routesMapper(routes: RouteRecordRaw[]): any[] {
            return routes.map(route => {
                return {
                    key: route.name,
                    label: route.meta?.title || route.name,
                    children: route.children && route.children.filter(r => !r.meta?.hidden).length > 0 ? this.routesMapper(route.children) : undefined,
                    info: route,
                    icon: () => h(NIcon, null, {
                        default: () =>
                            h(SvgIcon, {
                                prefix: 'icon',
                                name: route?.meta?.icon
                            }),
                    }),
                } as any
            })
        }
    },
})

export default useSideRoutesStore
