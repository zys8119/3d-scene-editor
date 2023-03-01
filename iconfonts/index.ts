import { launch } from 'puppeteer';
import { writeFileSync } from 'fs';
import { resolve } from 'path';
(async () => {
    const browser = await launch({
        timeout: 0,
    });
    const page = await browser.newPage();
    await page.goto('https://www.iconfont.cn/login');
    await page.waitForSelector('#userid', { timeout: 1000 });
    await page.type('#userid', '15372618221');
    await page.type('#password', 'xy598491063');
    await page.tap('#login-form button[type=submit]');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const page2 = await browser.newPage();
    let bool = true;
    page2.on('response', async (data) => {
        if (bool && /myprojects\.json/.test(data.url())) {
            bool = false;
            const res = await page2.evaluateHandle(async () => {
                return await (
                    await fetch(
                        'https://www.iconfont.cn/api/project/detail.json?pid=3920512'
                    )
                ).json();
            });
            const json = await res.jsonValue();
            await browser.close();
            json.data.icons.forEach((v: any) => {
                writeFileSync(
                    resolve(
                        process.cwd(),
                        '../src/icons/test',
                        v.font_class + '.svg'
                    ),
                    v.show_svg
                );
            });
        }
    });
    await page2.goto(
        'https://www.iconfont.cn/manage/index?manage_type=myprojects'
    );
})();
