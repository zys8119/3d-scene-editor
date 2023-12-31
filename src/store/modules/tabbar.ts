import Router from '@/router';
import { SystemTabbarRouteRow } from '@/typings';

const useTabbarStore = defineStore('tabbar', {
    state: () => {
        return {
            active: '',
            tags: [] as SystemTabbarRouteRow[],
        };
    },
    actions: {
        push(record: SystemTabbarRouteRow) {
            const index = this.tags.findIndex(
                (tag) => tag.fullPath === record.fullPath
            );
            if (index === -1) {
                this.tags.push(record);
            } else {
                this.tags[index] = record;
            }
        },
        clear() {
            this.tags = [];
        },
        closeOthers() {
            const currentRoute = this.tags.filter(
                (tag) => tag.fullPath === this.active
            );
            this.clear();
            this.tags = currentRoute;
        },
        remove(tagName: string) {
            const index = this.tags.findIndex(
                (tag) => tag.fullPath === tagName
            );
            this.tags.splice(index, 1);
            if (this.tags.length === 0) {
                return Router.push('/');
            } else {
                if (tagName === this.active) {
                    return Router.push(this.tags[this.tags.length - 1]);
                }
            }
        },
        refresh() {
            Router.replace({
                path: '/redirect',
                query: {
                    url: this.active,
                    params: JSON.stringify(Router.currentRoute.value.query),
                },
            });
        },
    },
});

export default useTabbarStore;
