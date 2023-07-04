import { VNode } from 'vue';
import cameraAttrs from './cameraAttrs';
import transformAttrs from './transformAttrs';
import {
    Store3Dstate,
    Store3DGetters,
    Store3DActions,
} from '@/store/modules/3d';
import { Store } from 'pinia';
const attrs = cameraAttrs.concat(transformAttrs);
export default attrs;
export type AttrsType =
    | 'input'
    | 'number'
    | 'switch'
    | 'select'
    | 'radio'
    | 'color'
    | 'slider';
export type AttrsFilter = (
    this: Store<string, Store3Dstate, Store3DGetters, Store3DActions>
) => boolean;
export type Attrs = Array<{
    title: string; // 分组标题
    showMore?: boolean; // 是否显示更多
    show?: boolean; // 是否可控显示
    showAdd?: boolean; // 是否显示添加按钮
    contentMore?: any; // 显示更多内容
    more?(): VNode; // 更多面板
    filter?: AttrsFilter; // 动态过滤
    child: Array<{
        label: string; // 属性标题
        showMore?: boolean; // 属性更多
        more?(): VNode; // 更多内容
        filter?: AttrsFilter; // 动态过滤
        config: {
            // 属性配置
            type: AttrsType; // 控件类型
            cursorGj: boolean | number; // 是否开启鼠标水平无限滚动
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
