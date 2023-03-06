<template>
    <div class="iconfonts">
        <div class="search">
            <n-input placeholder="请输入" clearable />
        </div>
        <div class="content">
            <div class="list-con">
                <div class="list" v-for="(item, key) in 100" :key="key">
                    <div class="svg">
                        <SvgIcon name="svgs-shousuo" :size="20" />
                    </div>
                    <div class="tip">复制</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="less">
.iconfonts {
    flex: 1;
    overflow: hidden;
    padding: 30px;
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
</style>
