/*eslint-disable*/
// @ts-ignore
import test_index_import from '@/api/apis/test/index';

// @ts-ignore
export function getApi<
    T extends
        | {
              default: any;
          }
        | Record<any, any>,
    V = T extends {
        default: any;
    }
        ? T['default']
        : T
>(data: T): V {
    if (Object.keys(data).includes('default')) {
        return data.default;
    } else {
        return data as unknown as V;
    }
}

export const $apiData = {
    test: {
        index: test_index_import,
    },
};

export const test_index = test_index_import;

export default $apiData;

declare global {
    const $apis: typeof $apiData;
}
