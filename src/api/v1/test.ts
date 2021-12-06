const host = 'http://student.cyanzoy.top'

interface CellInfo {
    id: string;
    item_id: string;
    name: string;
    value: string;
}

export default {
    getTestInfo() {
        // 代表履职
        const nodeID = '006a6d06-50c0-11ec-8059-00163e01019b'
        return window.common.axios<CellInfo[][]>({
            url: `${host}/data/searchSheetDataByKey/`,
            params: {
                'node_id': nodeID
            },
            method: 'get'
        })
    }
}