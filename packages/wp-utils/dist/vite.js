// src/zhezhengding/init.ts
import lodash from "lodash";
import { readFileSync } from "fs";
import { resolve } from "path";
var functionNames = ["createBaseBurialPointZzd", "createUserInfoBurialPointZzd"];
async function init(config) {
  if (!config.enable)
    return false;
  const scriptTemplate = lodash.template(readFileSync(resolve(__dirname, "./zzd.html"), "utf-8"))(config);
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
import lodash2 from "lodash";
import { readFileSync as readFileSync2 } from "fs";
import { resolve as resolve2 } from "path";
var functionNames2 = ["zwlogGlobalZlb"];
async function init2(config) {
  if (!config.enable)
    return false;
  const scriptTemplate = lodash2.template(readFileSync2(resolve2(__dirname, "./zlb.html"), "utf-8"))(config);
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
export {
  vite_default as default
};
