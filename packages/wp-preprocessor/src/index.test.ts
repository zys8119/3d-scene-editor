import { preprocessor } from './index';

test('非 Object 返回自身', async () => {
    const testArray = [0, 1];
    expect(preprocessor(testArray)).toBe(testArray);

    const testFunction = () => {};
    expect(preprocessor(testFunction)).toBe(testFunction);
});

test('Object 返回自身拷贝', async () => {
    const testObject = {
        a: 'test',
        b: 'test',
    };
    expect(Object.is(preprocessor(testObject), testObject)).toBe(false);
});

test('数组解构', async () => {
    const testCase = {
        time: ['now', 'ago'],
    };
    expect(
        preprocessor(testCase, {
            time: ['now', 'ago'],
        })
    ).toMatchObject({
        now: testCase.time[0],
        ago: testCase.time[1],
    });
});

test('自定义函数', async () => {
    const testCase = {
        time: ['now', 'ago'],
    };
    expect(
        preprocessor(testCase, {
            time: (time) => {
                return time.join();
            },
        })
    ).toMatchObject({
        time: 'now,ago',
    });
});

test('数组解构并且不清理', async () => {
    const testCase = {
        time: ['now', 'ago'],
    };
    expect(
        preprocessor(
            testCase,
            {
                time: ['now', 'ago'],
            },
            false
        )
    ).toMatchObject({
        ...testCase,
        now: testCase.time[0],
        ago: testCase.time[1],
    });
});

test('自动清理', async () => {
    const testCase = {
        time: 'a',
        some: undefined,
        null: null,
    };
    expect(preprocessor(testCase, {})).toMatchObject({
        time: 'a',
    });
});

test('自动清理2', async () => {
    const testCase = {
        time: 'a',
        some: 'some',
    };
    expect(
        preprocessor(testCase, {
            some: () => undefined,
        })
    ).toMatchObject({
        time: 'a',
    });
});

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
    expect(
        preprocessor(testCase, {
            ids: 'ids',
        })
    ).toMatchObject({ ids: '1,2,3' });
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
    expect(
        preprocessor(testCase, {
            ids: 'fileIds',
        })
    ).toMatchObject({ ids: '1,3' });
});

test('Utils 函数 array', async () => {
    const testCase = {
        id: 0,
    };
    const { id } = preprocessor(testCase, {
        id: 'array',
    });
    expect(id).toContain(0);
});
