/*eslint-disable*/


// @ts-ignore
export function getApi < T extends {
    default: any
} | Record < any, any > , V = T extends {
    default: any
} ? T['default'] : T > (data: T): V {
    if (Object.keys(data).includes('default')) {
        return data.default
    } else {
        return data as unknown as V
    }
}

export const $apiData = {}



export default $apiData

declare global {
    const $apis: typeof $apiData
}