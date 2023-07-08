"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.preprocessor = void 0;
const utils_1 = __importDefault(require("./utils"));
function preprocessor(data, maps, clear = true) {
    if (Object.prototype.toString.call(data) !== '[object Object]')
        return data;
    const dataBackup = Object.assign({}, data);
    if (maps) {
        for (const key in maps) {
            const map = maps[key];
            if (typeof map === 'string') {
                dataBackup[key] = utils_1.default[map](data[key]);
                continue;
            }
            if (Array.isArray(map)) {
                map.forEach((item, index) => {
                    var _a;
                    dataBackup[item] = (_a = data[key]) === null || _a === void 0 ? void 0 : _a[index];
                });
                if (clear && !map.includes(key)) {
                    delete dataBackup[key];
                }
                continue;
            }
            dataBackup[key] = map === null || map === void 0 ? void 0 : map(data[key]);
        }
    }
    if (clear) {
        for (const key in dataBackup) {
            if (typeof dataBackup[key] === 'undefined' || dataBackup[key] === null) {
                delete dataBackup[key];
            }
        }
    }
    return dataBackup;
}
exports.preprocessor = preprocessor;
exports.default = preprocessor;
