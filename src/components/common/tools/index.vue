<template>
    <div class="index">
        <div class="con">
            <div
                class="list"
                @click="changeComponent(key)"
                v-for="(item, key) in list"
                :key="key"
                v-text="item.name"
            ></div>
        </div>
        <div
            class="components-con"
            v-if="list.filter((v) => v.isActive).length > 0"
        >
            <div class="close">
                <n-icon @click="changeComponent(null)"><CloseCircle /></n-icon>
            </div>
            <component
                :is="list.filter((v) => v.isActive)[0].component"
            ></component>
        </div>
    </div>
</template>

<script lang="ts" setup>
import iconfonts from './components/iconfonts.vue';
import { CloseCircle } from '@vicons/ionicons5';

const list = ref([
    {
        name: 'iconfont 图标',
        component: shallowRef(iconfonts),
        isActive: false,
    },
    {
        name: 'wisdom-naive',
        component: 'https://wisdom-naive.zhijiasoft.com/',
        isActive: false,
    },
    {
        name: '智加文档',
        component: 'https://zjdoc.zhijiasoft.com/',
        isActive: false,
    },
]);

const changeComponent = (k: number | null) => {
    if (typeof list.value[k || 0].component === 'string')
        return window.open(list.value[k || 0].component);
    list.value.forEach((v, i) => {
        v.isActive = i === k;
    });
};
</script>

<style scoped lang="less">
.index {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    .con {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: wrap;
        .list {
            background: #02efb4;
            margin: 20px;
            padding: 20px 40px;
            border-radius: 10px;
            color: #ffffff;
            font-size: 30px;
            cursor: pointer;
            &:hover {
                background: #03e0ab;
            }
        }
    }
    .components-con {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        background: #ffffff;
        display: flex;
        flex-flow: column;
        .close {
            text-align: right;
            font-size: 30px;
            padding: 10px;
            .n-icon {
                cursor: pointer;
                color: #cccccc;
                &:hover {
                    color: #000000;
                }
            }
        }
    }
}
</style>
