"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    ids(value) {
        if (!Array.isArray(value))
            return '';
        return value.map(item => item === null || item === void 0 ? void 0 : item.id).filter(item => item).join(',');
    },
    fileIds(value) {
        if (!Array.isArray(value))
            return '';
        return value.filter(item => !item.status).map(item => item === null || item === void 0 ? void 0 : item.id).filter(item => item).join(',');
    },
    array(value) {
        return [value];
    }
};
