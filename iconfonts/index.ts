import { launch } from 'puppeteer';
import { writeFileSync, watch } from 'fs';
import { resolve } from 'path';
import compressing from 'compressing';
import fs from 'fs-extra';

(async () => {
    const browser = await launch({
        timeout: 0,
        // headless: false,
        // devtools: true
    });
    const page = await browser.newPage();
    await page.goto('https://www.iconfont.cn/login');
    await page.waitForSelector('#userid', { timeout: 1000 });
    await page.type('#userid', '15372618221');
    await page.type('#password', 'xy598491063');
    await page.tap('#login-form button[type=submit]');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const page2 = await browser.newPage();
    const client = await page2.target().createCDPSession();
    await client.send('Page.setDownloadBehavior', {
        behavior: 'allow',
        downloadPath: './',
    });
    let bool = true;
    page2.on('response', async (data) => {
        if (bool && /myprojects\.json/.test(data.url())) {
            bool = false;
            const res = await page2.evaluateHandle(async () => {
                return await (
                    await fetch(
                        'https://www.iconfont.cn/api/project/detail.json?pid=3923406'
                    )
                ).json();
            });
            const json = await res.jsonValue();
            console.log('svg资源下载中...');
            json.data.icons.forEach((v: any) => {
                writeFileSync(
                    resolve(
                        process.cwd(),
                        '../src/icons/svgs',
                        v.font_class + '.svg'
                    ),
                    v.show_svg
                );
            });
            console.log('svg资源下载成功');
        }
    });
    await page2.goto(
        'https://www.iconfont.cn/manage/index?manage_type=myprojects'
    );
    await page2.evaluateHandle(() => {
        window.open(
            'https://www.iconfont.cn/api/project/download.zip?pid=3923406'
        );
    });
    await watch(
        './',
        {
            persistent: true,
        },
        async (...res) => {
            if (res[1] === 'download.zip') {
                await compressing.zip.uncompress(
                    './download.zip',
                    '../src/icons/iconfont'
                );
            }
        }
    );

    const watcher2 = await watch(
        '../src/icons/iconfont',
        {
            persistent: true,
        },
        async (...res) => {
            if (
                (
                    await fs.stat(
                        `../src/icons/iconfont/${res[res.length - 1]}`
                    )
                ).isDirectory()
            ) {
                let paths = fs.readdirSync(
                    `../src/icons/iconfont/${res[res.length - 1]}`
                );
                paths.forEach((v) => {
                    console.log(`${v}解压中...`);
                    fs.moveSync(
                        `../src/icons/iconfont/${res[res.length - 1]}/${v}`,
                        `../src/icons/iconfont/${v}`
                    );
                });
                await (() => {
                    console.log('iconfronts资源解压成功');
                    watcher2.close();
                    fs.removeSync(
                        `../src/icons/iconfont/${res[res.length - 1]}`
                    );
                    fs.removeSync('./download.zip');
                    process.exit();
                })();
            }
        }
    );
})();
