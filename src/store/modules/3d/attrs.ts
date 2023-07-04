import { VNode } from 'vue';

const attrs: Attrs = [
    {
        title: 'Camera',
        showMore: true,
        more() {
            return h('div', 'asdas');
        },
        child: [
            {
                label: 'input',
                config: {
                    type: 'input',
                    props: {},
                },
            },
            {
                label: 'radio',
                config: {
                    type: 'radio',
                    isFlex: true,
                    props: {
                        options: [
                            {
                                label: 'Yes',
                                value: 'Yes',
                            },
                            {
                                label: 'No',
                                value: 'No',
                            },
                        ],
                    },
                },
            },
            {
                label: 'select',
                config: {
                    type: 'select',
                    props: {
                        options: [
                            {
                                label: "Everybody's Got Something to Hide Except Me and My Monkey",
                                value: 'song0',
                                disabled: true,
                            },
                            {
                                label: 'Drive My Car',
                                value: 'song1',
                            },
                        ],
                    },
                },
            },
            {
                label: 'number',
                config: {
                    type: 'number',
                    props: {},
                },
            },
            {
                label: 'switch',
                config: {
                    type: 'switch',
                    props: {},
                },
            },
            {
                label: 'color',
                showMore: true,
                more() {
                    return h('div', '阿四件打算看');
                },
                config: {
                    type: 'color',
                    props: {
                        swatches: [
                            '#FFFFFF',
                            '#18A058',
                            '#2080F0',
                            '#F0A020',
                            'rgba(208, 48, 80, 1)',
                        ],
                        actions: ['clear', 'confirm'],
                    },
                },
            },
            {
                label: 'sliderasasa',
                showMore: true,
                more() {
                    return h('div', 'asdas');
                },
                config: {
                    type: 'slider',
                    cursorGj: true,
                    props: {
                        value: 0,
                    },
                },
            },
        ],
    },
] as Attrs;
export default attrs;
export type AttrsType =
    | 'input'
    | 'number'
    | 'switch'
    | 'select'
    | 'radio'
    | 'color'
    | 'slider';
export type Attrs = Array<{
    title: string; // 分组标题
    showMore?: boolean; // 是否显示更多
    show?: boolean; // 是否可控显示
    showAdd?: boolean; // 是否显示添加按钮
    contentMore?: any; // 显示更多内容
    more?(): VNode; // 更多面板
    child: Array<{
        label: string; // 属性标题
        showMore?: boolean; // 属性更多
        more?(): VNode; // 更多内容
        config: {
            // 属性配置
            type: AttrsType; // 控件类型
            cursorGj: boolean; // 是否开启鼠标水平无限滚动
            isFlex?: boolean; // 是否为flex布局，用于select控件类型
            props: any; // 控件参数
        };
    }>;
}>;

export type AttrsItem = Attrs extends (infer T)[] ? T : never;

export type AttrsItemChild = AttrsItem['child'] extends (infer T)[] ? T : never;

export type AttrsItemChildConfig = AttrsItemChild['config'] extends infer T
    ? T
    : any;
