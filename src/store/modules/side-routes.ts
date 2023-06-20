import { RouteLocationNormalized, RouteRecordRaw } from 'vue-router';
import { h } from 'vue';
import { NIcon } from 'naive-ui';
import SvgIcon from '@/components/layout/svg-icon/index.vue';
import { SystemRouteRow } from '@/typings';
import config from '@/config/config';
import { get, uniqBy } from 'lodash';
import router from '@/router';

export default defineStore('side-routes', {
    state() {
        return {
            historyRoutes: [] as RouteLocationNormalized[],
        };
    },
    getters: {
        keepAliveInclude(): any {
            return config.router.keepAlive
                ? /./
                : router
                      .getRoutes()
                      .map((r) => {
                          return r.meta?.keepAlive
                              ? get(
                                    r,
                                    'components.default.name',
                                    get(r, 'components.name', get(r, 'name'))
                                )
                              : null;
                      })
                      .filter((e) => e)
                      .join(',') || /^$/;
        },
    },
    actions: {
        getSideBarRoutes() {
            const currentRoute =
                window.store.appConfig.getLayoutMode !== 'ltr'
                    ? window.store.main.routes.find(
                          (routing) =>
                              useRoute().meta.breadcrumbs?.[0].name ===
                              routing.name
                      )?.children || []
                    : window.store.main.routes;
            return this.routesMapper(currentRoute);
        },
        routesMapper(routes: RouteRecordRaw[]): SystemRouteRow[] {
            return routes
                .filter((v) => !v.meta?.hidden)
                .map((route) => {
                    return {
                        key: route.name,
                        label: route.meta?.title || route.name,
                        children:
                            route.children &&
                            route.children.filter((r) => !r.meta?.hidden)
                                .length > 0
                                ? this.routesMapper(route.children)
                                : undefined,
                        info: route,
                        icon:
                            config.router.needSideMenuIcon && route?.meta?.icon
                                ? () =>
                                      h(NIcon, null, {
                                          default: () =>
                                              h(SvgIcon, {
                                                  prefix: 'icon',
                                                  name: route?.meta?.icon,
                                              }),
                                      })
                                : null,
                    } as any;
                });
        },
        setHistoryRoutes(
            to: RouteLocationNormalized | null,
            from?: RouteLocationNormalized | null
        ) {
            if (!to || !from) this.historyRoutes = [];
            else {
                const lastRoute =
                    this.historyRoutes[this.historyRoutes.length - 1] || null;
                if (lastRoute && lastRoute.fullPath === to.fullPath)
                    this.historyRoutes.pop();
                else this.historyRoutes.push(from);
                this.historyRoutes = uniqBy(this.historyRoutes, 'fullPath');
            }
        },
    },
});
