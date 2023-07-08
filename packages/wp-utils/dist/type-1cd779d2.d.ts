interface Config$1 {
    enable: boolean;
    bid: string;
    signkey: string;
    sapp_id: string;
    sapp_name: string;
}
interface PageConfig {
    page_id: any;
    page_name: string | undefined;
    page_url: string | undefined;
}
interface UserConfig {
    _user_nick: string | undefined;
    _user_id: string | undefined;
    _dev_id?: string | undefined;
}

interface Config {
    enable: boolean;
    appTitle: string;
    bid: string;
}
interface ZLBUserPage {
    userId?: string | null;
    userNick?: string | null;
    url?: string | null;
    enterPageTime?: number | null;
    leavePageTime?: number | null;
    loadTime?: number | null;
    responseTime?: string | null;
}

export { Config$1 as C, PageConfig as P, UserConfig as U, ZLBUserPage as Z, Config as a };
