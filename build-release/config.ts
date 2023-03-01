/**
 * 项目gitlab地址
 */
export const ProjectName = 'xuyi/testproject';

export default {
    zys8119: {
        token: 'WxGGi2y6MMcgchvGR11r',
        username: '张云山',
    },
    xy: {
        token: 'PCA83jq44xwHjzbyGYxs',
        username: '徐义',
    },
} as Record<string, Config>;

type Config = {
    token: string; // 团队成员对应的gitlab Token
    username?: string; // 成员名称
};
