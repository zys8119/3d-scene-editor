<template>
    <div class="iconfonts">
        <div class="search">
            <n-input v-model:value="search" placeholder="请输入" clearable />
        </div>
        <div class="content">
            <div class="list-con">
                <div
                    class="list"
                    v-for="(item, key) in iconsList.filter(
                        (v) => v.name.indexOf(search) > -1
                    )"
                    :key="key"
                >
                    <div class="svg">
                        <SvgIcon :name="`svgs-${item.name}-fill`" :size="20" />
                        <span class="name" v-text="item.name"></span>
                    </div>
                    <n-popover trigger="hover">
                        <template #trigger>
                            <div class="tip">代码复制</div>
                        </template>
                        <div class="copy-con">
                            <div
                                class="l"
                                v-for="(a, b) in item.copyList"
                                :key="b"
                            >
                                <div class="t">
                                    <n-tag
                                        type="info"
                                        size="small"
                                        v-if="b === 0"
                                        >icon-</n-tag
                                    >
                                    <n-tag
                                        type="primary"
                                        size="small"
                                        v-if="b === 1"
                                        >no fill</n-tag
                                    >
                                    <n-tag
                                        type="error"
                                        size="small"
                                        v-if="b === 2"
                                        >fill</n-tag
                                    >
                                    <span class="n" v-text="a"></span>
                                </div>
                                <n-button
                                    type="primary"
                                    size="small"
                                    @click="copy(a)"
                                    >复制</n-button
                                >
                            </div>
                        </div>
                    </n-popover>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useMessage } from 'naive-ui';
import useClipboard from 'vue-clipboard3';
const { toClipboard } = useClipboard();
const message = useMessage();

const icons = import.meta.glob('@/icons/svgs/*');
const iconsList = ref<
    {
        name: string;
        copyList: string[];
    }[]
>([]);
for (const [key] of Object.entries(icons).filter(
    (v) => v[0].indexOf('fill') < 0
)) {
    let obj = {
        name: '',
        copyList: <string[]>[],
    };
    let moduleName = key.replace(/\.svg/g, '').split('/');
    obj.name = moduleName[moduleName.length - 1];
    obj.copyList.push(`<SvgIcon prefix="iconfont" name="icon-${obj.name}" />`);
    obj.copyList.push(`<SvgIcon name="svgs-${obj.name}" />`);
    obj.copyList.push(`<SvgIcon name="svgs-${obj.name}-fill" />`);
    iconsList.value.push(obj);
}

const search = ref('');

const copy = async (text: string) => {
    await toClipboard(text);
    await message.success('复制成功');
};
</script>

<style scoped lang="less">
.iconfonts {
    flex: 1;
    overflow: hidden;
    padding: 0 30px 30px 30px;
    display: flex;
    flex-flow: column;
    .search {
        margin-bottom: 10px;
    }
    .content {
        flex: 1;
        overflow: auto;
        .list-con {
            display: flex;
            flex-flow: wrap;
            .list {
                border: 1px solid #cccccc;
                border-radius: 5px;
                margin: 5px;
                text-align: center;
                .svg {
                    padding: 10px 20px 5px;
                    display: flex;
                    flex-flow: column;
                    justify-content: center;
                    align-items: center;
                    .name {
                        margin-top: 5px;
                    }
                }
                .tip {
                    font-size: 12px;
                    border-top: 1px solid #cccccc;
                    color: #ffffff;
                    cursor: pointer;
                    background: #f18989;
                    &:hover {
                        background: #f86262;
                    }
                }
            }
        }
    }
}
.copy-con {
    .l {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        .n {
            margin: 0 15px 0 10px;
        }
        &:last-child {
            margin-bottom: 0;
        }
        &:nth-of-type(1) .n {
            color: #2080f0;
        }
        &:nth-of-type(2) .n {
            color: #18a058;
        }
        &:nth-of-type(3) .n {
            color: #d03050;
        }
    }
}
</style>
