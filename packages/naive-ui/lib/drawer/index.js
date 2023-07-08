var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.drawerContentProps =
    exports.NDrawerContent =
    exports.drawerProps =
    exports.NDrawer =
        void 0;
var Drawer_1 = require('./src/Drawer');
Object.defineProperty(exports, 'NDrawer', {
    enumerable: true,
    get: function () {
        return __importDefault(Drawer_1).default;
    },
});
Object.defineProperty(exports, 'drawerProps', {
    enumerable: true,
    get: function () {
        return Drawer_1.drawerProps;
    },
});
var DrawerContent_1 = require('./src/DrawerContent');
Object.defineProperty(exports, 'NDrawerContent', {
    enumerable: true,
    get: function () {
        return __importDefault(DrawerContent_1).default;
    },
});
Object.defineProperty(exports, 'drawerContentProps', {
    enumerable: true,
    get: function () {
        return DrawerContent_1.drawerContentProps;
    },
});
