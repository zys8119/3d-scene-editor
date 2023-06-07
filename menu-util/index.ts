import tsNodeBuild from 'ts-node-build';
import { writeFileSync } from 'fs';
import { resolve } from 'path';
let fileStr = '';
let index = 0;
new tsNodeBuild({
    isOutDir: false,
    inputFiles: ['../src/router/modules/*.ts'],
    rules: [
        {
            rule: /\.ts/,
            outFileDir: 'dist',
            transform({ code, files }): Promise<string | void> | string | void {
                const str = code
                    .replace(/(=>)(\s|\n)*/g, '$1 ')
                    .replace(
                        /(.|\n)+RouteRecordRaw(\[|\]|\s|=)*|\]?(\s|\n)*export(\s|\n)*default(.|\n)*/g,
                        ''
                    )
                    .replace(/\(\) => import\(/g, '')
                    .replace(/'\)/g, "'")
                    .replace(/@\/views/g, '')
                    .replace(/RouterView/g, "''")
                    .replace(/\];/g, '');
                fileStr += str + `${index === files.length - 1 ? '' : ','}`;
                index++;
            },
        },
    ],
})
    .compile()
    .then(() => {
        writeFileSync(
            resolve('menus.json'),
            JSON.stringify(
                ((e) => eval(e).filter((v) => v))(`[${fileStr}]`),
                null,
                4
            )
        );
    });
