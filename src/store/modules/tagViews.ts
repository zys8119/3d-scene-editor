import { RouteLocationNormalized } from 'vue-router'
import Router from '@/router'

export default defineStore('tagViews', {
    state: () => {
        return {
            active: '',
            tags: [] as RouteLocationNormalized[]
        }
    },
    actions: {
        push(record: RouteLocationNormalized) {
            if (!this.tags.find(tag => tag.name === record.name)) {
                this.tags.push(record)
            }
        },
        clear() {
            this.tags = []
        },
        remove(tagName: string) {
            const index = this.tags.findIndex(tag => String(tag.name) === tagName)
            this.tags.splice(index, 1)
            if (this.tags.length === 0) {
                return Router.push('/')
            } else {
                if (tagName === this.active) {
                    return Router.push(this.tags[this.tags.length - 1])
                }
            }
        },
        refresh(record: RouteLocationNormalized) {
            const routeRag = this.tags.find(tag => tag.name === record.name)
            if (!routeRag) {
                this.push(record)
            } else {
                const originNoCache = routeRag.meta.noCache
                routeRag.meta.noCache = true
                Router.replace({ name: 'redirect', query: { url: record.fullPath } })
                    .then(() => {
                        routeRag.meta.noCache = originNoCache
                    })
            }
        }
    }
})