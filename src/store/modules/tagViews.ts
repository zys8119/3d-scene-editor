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
            const index = this.tags.findIndex(tag => tag.fullPath === record.fullPath)
            if (index === -1) {
                this.tags.push(record)
            } else {
                this.tags[index] = record
            }
        },
        clear() {
            this.tags = []
        },
        remove(tagName: string) {
            const index = this.tags.findIndex(tag => tag.fullPath === tagName)
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
            const routeRag = this.tags.find(tag => tag.fullPath === record.fullPath)
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