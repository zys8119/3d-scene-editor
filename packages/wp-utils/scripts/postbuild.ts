import { resolve } from 'node:path';
import { promises as fs } from 'node:fs';
import { basename } from 'node:path/posix';
import { fileURLToPath } from 'node:url';
import fg from 'fast-glob';
import fse from 'fs-extra';

async function run() {
    // fix cjs exports
    const files = await fg('*.cjs', {
        ignore: ['chunk-*'],
        absolute: true,
        cwd: resolve(fileURLToPath(import.meta.url), '../../dist'),
    });
    for (const file of files) {
        console.log('[postbuild]', basename(file));
        let code = await fs.readFile(file, 'utf8');
        code = code.replace('exports.default =', 'module.exports =');
        code += 'exports.default = module.exports;';
        await fs.writeFile(file, code);
    }

    // copy file
    await fse.copySync(
        resolve(
            fileURLToPath(import.meta.url),
            '../../src/zhezhengding/zzd.html'
        ),
        resolve(fileURLToPath(import.meta.url), '../../dist/zzd.html')
    );
    await fse.copySync(
        resolve(fileURLToPath(import.meta.url), '../../src/zheliban/zlb.html'),
        resolve(fileURLToPath(import.meta.url), '../../dist/zlb.html')
    );
}

run();
