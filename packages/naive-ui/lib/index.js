var __createBinding =
    (this && this.__createBinding) ||
    (Object.create
        ? function (o, m, k, k2) {
              if (k2 === void 0) k2 = k;
              var desc = Object.getOwnPropertyDescriptor(m, k);
              if (
                  !desc ||
                  ('get' in desc
                      ? !m.__esModule
                      : desc.writable || desc.configurable)
              ) {
                  desc = {
                      enumerable: true,
                      get: function () {
                          return m[k];
                      },
                  };
              }
              Object.defineProperty(o, k2, desc);
          }
        : function (o, m, k, k2) {
              if (k2 === void 0) k2 = k;
              o[k2] = m[k];
          });
var __exportStar =
    (this && this.__exportStar) ||
    function (m, exports2) {
        for (var p in m)
            if (
                p !== 'default' &&
                !Object.prototype.hasOwnProperty.call(exports2, p)
            )
                __createBinding(exports2, m, p);
    };
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.NThemeEditor =
    exports.version =
    exports.cNotM =
    exports.cB =
    exports.cM =
    exports.cE =
    exports.c =
    exports.createTheme =
    exports.lightTheme =
    exports.darkTheme =
    exports.create =
    exports.useOsTheme =
    exports.install =
    exports.default =
        void 0;
var preset_1 = require('./preset');
Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
        return __importDefault(preset_1).default;
    },
});
Object.defineProperty(exports, 'install', {
    enumerable: true,
    get: function () {
        return preset_1.install;
    },
});
var vooks_1 = require('vooks');
Object.defineProperty(exports, 'useOsTheme', {
    enumerable: true,
    get: function () {
        return vooks_1.useOsTheme;
    },
});
var create_1 = require('./create');
Object.defineProperty(exports, 'create', {
    enumerable: true,
    get: function () {
        return __importDefault(create_1).default;
    },
});
__exportStar(require('./locales'), exports);
__exportStar(require('./components'), exports);
__exportStar(require('./composables'), exports);
__exportStar(require('./styles'), exports);
var themes_1 = require('./themes');
Object.defineProperty(exports, 'darkTheme', {
    enumerable: true,
    get: function () {
        return themes_1.darkTheme;
    },
});
Object.defineProperty(exports, 'lightTheme', {
    enumerable: true,
    get: function () {
        return themes_1.lightTheme;
    },
});
Object.defineProperty(exports, 'createTheme', {
    enumerable: true,
    get: function () {
        return themes_1.createTheme;
    },
});
var cssr_1 = require('./_utils/cssr');
Object.defineProperty(exports, 'c', {
    enumerable: true,
    get: function () {
        return cssr_1.c;
    },
});
Object.defineProperty(exports, 'cE', {
    enumerable: true,
    get: function () {
        return cssr_1.cE;
    },
});
Object.defineProperty(exports, 'cM', {
    enumerable: true,
    get: function () {
        return cssr_1.cM;
    },
});
Object.defineProperty(exports, 'cB', {
    enumerable: true,
    get: function () {
        return cssr_1.cB;
    },
});
Object.defineProperty(exports, 'cNotM', {
    enumerable: true,
    get: function () {
        return cssr_1.cNotM;
    },
});
var version_1 = require('./version');
Object.defineProperty(exports, 'version', {
    enumerable: true,
    get: function () {
        return __importDefault(version_1).default;
    },
});
var theme_editor_1 = require('./theme-editor');
Object.defineProperty(exports, 'NThemeEditor', {
    enumerable: true,
    get: function () {
        return theme_editor_1.NThemeEditor;
    },
});
