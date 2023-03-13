/*eslint-disable*/
import { createRouter, createWebHashHistory, RouterView } from 'vue-router';
const files = import.meta.glob('./VIEWSDIR/**/*.{vue,jsx,tsx}', {});
const pages = import.meta.glob('./VIEWSDIR/**/page.json', {
    eager: true,
    import: 'default',
});
const filesKeys = Object.keys(files);
const metaMaps = ROUTES_META;
let routes: any = [];
// 平铺路由
for (const [key, component] of Object.entries(files)) {
    const path = key.replace(/^\.\/VIEWREG|\.(vue|jsx|tsx)$/gim, '');
    const name = path
        .split('/')
        .filter((e) => e)
        .join('-');
    const fileName = (/(?:\/?([^\/]+\.(vue|jsx|tsx)$))/.exec(key) as any)[1];
    const pageJson = key.replace(fileName, 'page.json');
    const directory = key.replace('/' + fileName, '');
    const layoutRegs = directory
        .split('/')
        .map((e, i, arr) => arr.slice(0, i + 1).join('/'))
        .map((e) => new RegExp(`^${e}\/layout\\.(vue|jsx|tsx)`, 'img'));
    const layout = filesKeys.find((e) => layoutRegs.some((ee) => ee.test(e)));
    const meta = Object.assign(
        metaMaps[key] || {},
        ((pages[pageJson] || {}) as any)[fileName] || {}
    );
    // 过滤Alert
    if (!ROUTES_FILTER_REG.test(key)) {
        routes.push({
            component,
            name,
            path:
                typeof meta?.path === 'string' ? meta.path : path.toLowerCase(),
            key,
            fileName,
            layout,
            directory,
            meta,
        });
    }
}
const pathToTree = (input: string[], reg: RegExp) => {
    const currInput = input.map((e) => e.replace(/^\.\/VIEWREG\//, ''));
    const output: any[] = [];
    for (let i = 0; i < currInput.length; i++) {
        const key: any = currInput[i];
        // 过滤Alert
        if (!ROUTES_FILTER_REG.test(key)) {
            const chain = key.replace(reg, '').split('/');
            const chainJoin = chain.join('-').toLowerCase();
            const suffix = (key.match(reg) as any)[1];
            let currentNode: any = output;
            for (let j = 0; j < chain.length; j++) {
                const wantedNode = chain
                    .slice(0, j + 1)
                    .join('-')
                    .toLowerCase();
                const lastNode = currentNode;
                let k = 0;
                for (; k < currentNode.length; k++) {
                    if (currentNode[k].name == wantedNode) {
                        currentNode = currentNode[k].children;
                        break;
                    }
                }
                if (lastNode == currentNode) {
                    const directory = chainJoin !== wantedNode;
                    const path = `./VIEWSDIR/${chain
                        .slice(0, j + 1)
                        .join('/')}${directory ? '' : `.${suffix}`}`;
                    let layoutComponent: any = RouterView;
                    if (directory) {
                        const layoutPath = input.find((e) =>
                            new RegExp(
                                `^${path}\/layout\\.(vue|jsx|tsx)`,
                                'img'
                            ).test(e)
                        );
                        if (layoutPath) {
                            layoutComponent = files[layoutPath];
                        }
                    }
                    const pageJsonPath = path.replace(
                        new RegExp(`${chain[j]}\\.${suffix}$`, 'i'),
                        'page.json'
                    );
                    const directoryMeta: any =
                        pages[
                            pageJsonPath.replace(
                                new RegExp(`(${wantedNode}$)`),
                                'page.json'
                            )
                        ] || {};
                    const meta = directory
                        ? directoryMeta[wantedNode] || {}
                        : Object.assign(
                              metaMaps[path] || {},
                              (pages[pageJsonPath] || ({} as any))[
                                  `${chain[j]}.${suffix}`
                              ] || {}
                          );
                    const newNode = {
                        key,
                        name: wantedNode,
                        children: [],
                        directory,
                        suffix: directory ? null : suffix,
                        filePath: path,
                        path:
                            typeof meta?.path === 'string'
                                ? meta.path
                                : chain[j].toLowerCase(),
                        component: directory ? layoutComponent : files[path],
                        meta,
                    };
                    currentNode[k] = newNode;
                    currentNode = newNode.children;
                } else {
                    delete currentNode.children;
                }
            }
        }
    }
    return output.map((e) => ({
        ...e,
        path: `/${e.path}`,
    }));
};
// 嵌套路由
routes = routes
    .filter((e: any) => !e.layout)
    .concat(
        pathToTree(
            routes.filter((e: any) => e.layout).map((e: any) => e.key),
            /\.(vue|jsx|tsx)$/
        )
    );
export default createRouter(
    Object.assign(
        {
            history: createWebHashHistory(),
        },
        ROUTES_CUSTOM_CONFIG,
        {
            routes: routes.concat(ROUTES_CUSTOM_ROUTER),
        }
    )
);
