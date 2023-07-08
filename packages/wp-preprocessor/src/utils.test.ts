import utils from './utils';

test('Utils 函数 ids', async () => {
    const testCase = {
        ids: [
            {
                id: 1,
            },
            {
                id: 2,
            },
            {
                id: 3,
            },
        ],
    };
    expect(utils.ids(testCase.ids)).toBe('1,2,3');
});

test('Utils 函数 ids Empty', async () => {
    const testCase = {
        ids: 'test',
    };
    expect(utils.ids(testCase.ids)).toBe('');
});

test('Utils 函数 fileIds', async () => {
    const testCase = {
        ids: [
            {
                status: 0,
                id: 1,
            },
            {
                status: 1,
                id: 2,
            },
            {
                id: 3,
            },
        ],
    };
    expect(utils.fileIds(testCase.ids)).toBe('1,3');
});

test('Utils 函数 fileIds Empty', async () => {
    const testCase = {
        ids: 'test',
    };
    expect(utils.fileIds(testCase.ids)).toBe('');
});

test('Utils 函数 array', async () => {
    const testCase = {
        id: 0,
    };
    const id = utils.array(testCase.id);
    expect(id).toContain(0);
});
