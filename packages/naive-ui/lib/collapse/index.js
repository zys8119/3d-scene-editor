var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.collapseItemProps =
    exports.NCollapseItem =
    exports.collapseProps =
    exports.NCollapse =
        void 0;
var Collapse_1 = require('./src/Collapse');
Object.defineProperty(exports, 'NCollapse', {
    enumerable: true,
    get: function () {
        return __importDefault(Collapse_1).default;
    },
});
Object.defineProperty(exports, 'collapseProps', {
    enumerable: true,
    get: function () {
        return Collapse_1.collapseProps;
    },
});
var CollapseItem_1 = require('./src/CollapseItem');
Object.defineProperty(exports, 'NCollapseItem', {
    enumerable: true,
    get: function () {
        return __importDefault(CollapseItem_1).default;
    },
});
Object.defineProperty(exports, 'collapseItemProps', {
    enumerable: true,
    get: function () {
        return CollapseItem_1.collapseItemProps;
    },
});
