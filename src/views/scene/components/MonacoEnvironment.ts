import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker.js?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker.js?worker';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker.js?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker.js?worker';
import mysqlWorker from 'monaco-sql-languages/esm/languages/mysql/mysql.worker.js?worker';
import { LanguageIdEnum } from 'monaco-sql-languages';
import { Environment, languages } from 'monaco-editor';
import global from './editor-global.ts?raw';

declare global {
    interface Window {
        MonacoEnvironment?: Environment;
    }
}

self.MonacoEnvironment = <Environment>{
    getWorker: async function (moduleId, label) {
        return new ({
            less: cssWorker,
            scss: cssWorker,
            css: cssWorker,

            html: htmlWorker,
            handlebars: htmlWorker,
            razor: htmlWorker,

            json: jsonWorker,

            typescript: tsWorker,
            javascript: tsWorker,
            [LanguageIdEnum.MYSQL]: mysqlWorker,
        }[label] || editorWorker)();
    },
};

languages.typescript.typescriptDefaults.addExtraLib(global);
