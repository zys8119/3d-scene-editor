export interface Config {
    enable: boolean;
    appTitle: string;
    bid: string;
}

export interface ZLBUserPage {
    userId?: string | null;
    userNick?: string | null;
    url?: string | null;
    enterPageTime?: number | null;
    leavePageTime?: number | null;
    loadTime?: number | null;
    responseTime?: string | null;
}
