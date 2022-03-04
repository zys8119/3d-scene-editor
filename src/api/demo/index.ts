import common from './common'

export default {
    common,
    list(data: object, page: PageMap) {
        return window.common.axios({
            url: '/demo/list',
            method: 'get',
            params: {
                page_no: page.page,
                page_size: page.size,
                ...data
            }
        })
    }
}