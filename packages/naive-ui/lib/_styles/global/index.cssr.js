var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule
            ? mod
            : {
                  default: mod,
              };
    };
Object.defineProperty(exports, '__esModule', {
    value: true,
});
const cssr_1 = require('../../_utils/cssr');
const _common_1 = __importDefault(require('../common/_common'));
const { fontSize, fontFamily, lineHeight } = _common_1.default;
exports.default = (0, cssr_1.c)(
    'body',
    `
 margin: 0;
 font-size: ${fontSize};
 font-family: ${fontFamily};
 line-height: ${lineHeight};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,
    [
        (0, cssr_1.c)(
            'input',
            `
 font-family: inherit;
 font-size: inherit;
 `
        ),
    ]
);
