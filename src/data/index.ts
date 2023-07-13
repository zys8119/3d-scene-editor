/*eslint-disable*/
// @ts-ignore
import createLayers_import from "@/data/createLayers"
// @ts-ignore
import getName_import from "@/data/getName"
// @ts-ignore
import provideConfig_import from "@/data/provideConfig"

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

export const $apiData = {
    createLayers: createLayers_import,
    getName: getName_import,
    provideConfig: provideConfig_import
}

export const createLayers = createLayers_import
export const getName = getName_import
export const provideConfig = provideConfig_import

export default $apiData

declare global {
    const $data: typeof $apiData
}