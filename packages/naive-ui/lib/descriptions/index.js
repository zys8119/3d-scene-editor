var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.descriptionsItemProps =
    exports.NDescriptionsItem =
    exports.descriptionsProps =
    exports.NDescriptions =
        void 0;
var Descriptions_1 = require('./src/Descriptions');
Object.defineProperty(exports, 'NDescriptions', {
    enumerable: true,
    get: function () {
        return __importDefault(Descriptions_1).default;
    },
});
Object.defineProperty(exports, 'descriptionsProps', {
    enumerable: true,
    get: function () {
        return Descriptions_1.descriptionsProps;
    },
});
var DescriptionsItem_1 = require('./src/DescriptionsItem');
Object.defineProperty(exports, 'NDescriptionsItem', {
    enumerable: true,
    get: function () {
        return __importDefault(DescriptionsItem_1).default;
    },
});
Object.defineProperty(exports, 'descriptionsItemProps', {
    enumerable: true,
    get: function () {
        return DescriptionsItem_1.descriptionsItemProps;
    },
});
