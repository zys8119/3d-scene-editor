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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("./utils"));
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
    expect(utils_1.default.ids(testCase.ids)).toBe('1,2,3');
}));
test('Utils 函数 ids Empty', () => __awaiter(void 0, void 0, void 0, function* () {
    const testCase = {
        ids: 'test'
    };
    expect(utils_1.default.ids(testCase.ids)).toBe('');
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
    expect(utils_1.default.fileIds(testCase.ids)).toBe('1,3');
}));
test('Utils 函数 fileIds Empty', () => __awaiter(void 0, void 0, void 0, function* () {
    const testCase = {
        ids: 'test'
    };
    expect(utils_1.default.fileIds(testCase.ids)).toBe('');
}));
test('Utils 函数 array', () => __awaiter(void 0, void 0, void 0, function* () {
    const testCase = {
        id: 0
    };
    const id = utils_1.default.array(testCase.id);
    expect(id).toContain(0);
}));
