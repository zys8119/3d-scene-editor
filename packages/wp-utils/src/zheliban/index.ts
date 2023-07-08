import { ZLBUserPage, Config } from './type';

let zwlog: any = null;
let pageLogMap: any = {};
let log_status = '01'; // 用户登录状态（01:未登录/ 02:单点登录）

// 初始化
let initZwlog = (userId = '', userNick = '') => {
    // @ts-ignore
    zwlog = new ZwLog({ _user_id: userId, _user_nick: userNick });
    if (userId && userNick) log_status = '02';
};

export function zwlogGlobal(config: ZLBUserPage) {
    const allConfig = config as ZLBUserPage & Config;
    console.log(allConfig);

    const userId = allConfig.userId ?? null;
    const userNick = allConfig.userNick ?? null;
    const url = allConfig.url ?? null;
    const enterPageTime = allConfig.enterPageTime ?? null;
    const leavePageTime = allConfig.leavePageTime ?? null;
    const loadTime = allConfig.loadTime ?? null;
    const responseTime = allConfig.responseTime ?? null;
    const bid = allConfig.bid;

    if (!zwlog && userId && userNick) return initZwlog(userId, userNick);
    if (!url) return;
    if (!pageLogMap[url]) {
        pageLogMap[url] = {
            enterPageTime: null,
            leavePageTime: null,
            loadTime: null,
            responseTime: null,
        };
    }
    if (enterPageTime) pageLogMap[url].enterPageTime = enterPageTime;
    if (leavePageTime) pageLogMap[url].leavePageTime = leavePageTime;
    if (loadTime) pageLogMap[url].loadTime = loadTime;
    if (responseTime) pageLogMap[url].responseTime = responseTime;

    if (
        pageLogMap[url].enterPageTime &&
        pageLogMap[url].leavePageTime &&
        pageLogMap[url].loadTime &&
        pageLogMap[url].responseTime
    ) {
        /**
         * duration: 页面停留时间
         * t2: 页面启动到加载完成的时间
         * t0: 页面启动到页面响应完成的时间
         */
        let duration =
            pageLogMap[url].leavePageTime - pageLogMap[url].enterPageTime;
        let t2 = pageLogMap[url].loadTime - pageLogMap[url].enterPageTime;
        let t0 = pageLogMap[url].responseTime - pageLogMap[url].enterPageTime;
        setTimeout(() => {
            let params = {
                miniAppId: bid,
                Page_duration: duration / 1000 + 's',
                t2: t2 / 1000 + 's',
                t0: t0 / 1000 + 's',
                log_status,
            };
            zwlog.onReady(() => {
                zwlog.sendPV(params);
                delete pageLogMap[url];
            });
        }, 500);
    }
}
