export interface Config {
    enable: boolean;
    bid: string;
    signkey: string;
    sapp_id: string;
    sapp_name: string;
}

export interface PageConfig {
    page_id: any;
    page_name: string | undefined;
    page_url: string | undefined;
}

export interface UserConfig {
    _user_nick: string | undefined;
    _user_id: string | undefined;
    _dev_id?: string | undefined;
}
