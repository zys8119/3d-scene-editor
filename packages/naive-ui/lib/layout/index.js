var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.layoutSiderProps =
    exports.NLayoutSider =
    exports.layoutFooterProps =
    exports.NLayoutFooter =
    exports.layoutHeaderProps =
    exports.NLayoutHeader =
    exports.NLayoutContent =
    exports.layoutContentProps =
    exports.layoutProps =
    exports.NLayout =
        void 0;
var Layout_1 = require('./src/Layout');
Object.defineProperty(exports, 'NLayout', {
    enumerable: true,
    get: function () {
        return __importDefault(Layout_1).default;
    },
});
Object.defineProperty(exports, 'layoutProps', {
    enumerable: true,
    get: function () {
        return Layout_1.layoutProps;
    },
});
Object.defineProperty(exports, 'layoutContentProps', {
    enumerable: true,
    get: function () {
        return Layout_1.layoutProps;
    },
});
var LayoutContent_1 = require('./src/LayoutContent');
Object.defineProperty(exports, 'NLayoutContent', {
    enumerable: true,
    get: function () {
        return __importDefault(LayoutContent_1).default;
    },
});
var LayoutHeader_1 = require('./src/LayoutHeader');
Object.defineProperty(exports, 'NLayoutHeader', {
    enumerable: true,
    get: function () {
        return __importDefault(LayoutHeader_1).default;
    },
});
Object.defineProperty(exports, 'layoutHeaderProps', {
    enumerable: true,
    get: function () {
        return LayoutHeader_1.headerProps;
    },
});
var LayoutFooter_1 = require('./src/LayoutFooter');
Object.defineProperty(exports, 'NLayoutFooter', {
    enumerable: true,
    get: function () {
        return __importDefault(LayoutFooter_1).default;
    },
});
Object.defineProperty(exports, 'layoutFooterProps', {
    enumerable: true,
    get: function () {
        return LayoutFooter_1.layoutFooterProps;
    },
});
var LayoutSider_1 = require('./src/LayoutSider');
Object.defineProperty(exports, 'NLayoutSider', {
    enumerable: true,
    get: function () {
        return __importDefault(LayoutSider_1).default;
    },
});
Object.defineProperty(exports, 'layoutSiderProps', {
    enumerable: true,
    get: function () {
        return LayoutSider_1.layoutSiderProps;
    },
});
