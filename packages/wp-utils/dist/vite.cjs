"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/zhezhengding/init.ts
var _lodash = require('lodash'); var _lodash2 = _interopRequireDefault(_lodash);
var _fs = require('fs');
var _path = require('path');
var functionNames = ["createBaseBurialPointZzd", "createUserInfoBurialPointZzd"];
async function init(config) {
  if (!config.enable)
    return false;
  const scriptTemplate = _lodash2.default.template(_fs.readFileSync.call(void 0, _path.resolve.call(void 0, __dirname, "./zzd.html"), "utf-8"))(config);
  return {
    enforce: "post",
    transformIndexHtml(html) {
      return html.replace(/(<\/head>)/, `${scriptTemplate}$1`);
    },
    transform(code, id) {
      const isTransformFile = new RegExp(functionNames.join("|"), "i").test(code) && !/node_modules/.test(id) && /\.(vue|tsx|ts|js)/.test(id);
      const regFunction = new RegExp(`((${functionNames.join("|")})\\()([^\\)]*)(\\))`, "ig");
      if (isTransformFile) {
        const newCode = code.replace(regFunction, function(m, $1, $2, $3, $4) {
          try {
            const data = Object.assign(new Function(`return ${$3}`)() || {}, config);
            return `${$1}${JSON.stringify(data)}${$4}`;
          } catch (e) {
            return m;
          }
        });
        return newCode;
      }
      return code;
    }
  };
}

// src/zheliban/init.ts



var functionNames2 = ["zwlogGlobalZlb"];
async function init2(config) {
  if (!config.enable)
    return false;
  const scriptTemplate = _lodash2.default.template(_fs.readFileSync.call(void 0, _path.resolve.call(void 0, __dirname, "./zlb.html"), "utf-8"))(config);
  return {
    enforce: "post",
    transformIndexHtml(html) {
      return html.replace(/(<\/head>)/, `${scriptTemplate}$1`);
    },
    transform(code, id) {
      const isTransformFile = new RegExp(functionNames2.join("|"), "i").test(code) && !/node_modules/.test(id) && /\.(vue|tsx|ts|js)/.test(id);
      const regFunction = new RegExp(`((${functionNames2.join("|")})\\()([^\\)]*)(\\))`, "ig");
      if (isTransformFile) {
        const newCode = code.replace(regFunction, function(m, $1, $2, $3, $4) {
          try {
            const data = Object.assign(new Function(`return ${$3}`)() || {}, config);
            return `${$1}${JSON.stringify(data)}${$4}`;
          } catch (e) {
            return m;
          }
        });
        return newCode;
      }
      return code;
    }
  };
}

// src/vite.ts
var vite_default = {
  initZhezhengding: (config) => init(config),
  initZheliban: (config) => init2(config)
};


module.exports = vite_default;
exports.default = module.exports;