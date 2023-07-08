"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
test('非 Object 返回自身', () => __awaiter(void 0, void 0, void 0, function* () {
    const testArray = [0, 1];
    expect((0, index_1.preprocessor)(testArray)).toBe(testArray);
}));
test('Object 返回自身拷贝', () => __awaiter(void 0, void 0, void 0, function* () {
    const testObject = {
        a: 'test',
        b: 'test'
    };
    expect(Object.is((0, index_1.preprocessor)(testObject), testObject)).toBe(false);
}));
test('数组解构', () => __awaiter(void 0, void 0, void 0, function* () {
    const testCase = {
        time: ['now', 'ago']
    };
    expect((0, index_1.preprocessor)(testCase, {
        time: ['now', 'ago']
    })).toMatchObject({
        now: testCase.time[0],
        ago: testCase.time[1]
    });
}));
test('自定义函数', () => __awaiter(void 0, void 0, void 0, function* () {
    const testCase = {
        time: ['now', 'ago']
    };
    expect((0, index_1.preprocessor)(testCase, {
        time: (time) => {
            return time.join();
        }
    })).toMatchObject({
        time: 'now,ago'
    });
}));
test('数组解构并且不清理', () => __awaiter(void 0, void 0, void 0, function* () {
    const testCase = {
        time: ['now', 'ago']
    };
    expect((0, index_1.preprocessor)(testCase, {
        time: ['now', 'ago']
    }, false)).toMatchObject(Object.assign(Object.assign({}, testCase), { now: testCase.time[0], ago: testCase.time[1] }));
}));
test('自动清理', () => __awaiter(void 0, void 0, void 0, function* () {
    const testCase = {
        time: 'a',
        some: undefined,
        null: null
    };
    expect((0, index_1.preprocessor)(testCase, {})).toMatchObject({
        time: 'a'
    });
}));
test('自动清理2', () => __awaiter(void 0, void 0, void 0, function* () {
    const testCase = {
        time: 'a',
        some: 'some'
    };
    expect((0, index_1.preprocessor)(testCase, {
        some: () => undefined
    })).toMatchObject({
        time: 'a'
    });
}));
test('Utils 函数 ids', () => __awaiter(void 0, void 0, void 0, function* () {
    const testCase = {
        ids: [{
                id: 1
            }, {
                id: 2
            }, {
                id: 3
            }]
    };
    expect((0, index_1.preprocessor)(testCase, {
        ids: 'ids'
    })).toMatchObject({ ids: '1,2,3' });
}));
test('Utils 函数 fileIds', () => __awaiter(void 0, void 0, void 0, function* () {
    const testCase = {
        ids: [{
                status: 0,
                id: 1
            }, {
                status: 1,
                id: 2
            }, {
                id: 3
            }]
    };
    expect((0, index_1.preprocessor)(testCase, {
        ids: 'fileIds'
    })).toMatchObject({ ids: '1,3' });
}));
test('Utils 函数 array', () => __awaiter(void 0, void 0, void 0, function* () {
    const testCase = {
        id: 0
    };
    const { id } = (0, index_1.preprocessor)(testCase, {
        id: 'array'
    });
    expect(id).toContain(0);
}));
