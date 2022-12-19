<template>
    <div class="vaw-tab-bar-container">
        <n-icon
            class="arrow-wrapper"
            :class="{ 'arrow-wrapper__disabled': leftArrowDisabled }"
            @click="leftArrowClick"
        >
            <ChevronBack />
        </n-icon>
        <n-scrollbar ref="scrollbarRef" :x-scrollable="true" :size="0">
            <n-button
                v-for="item of store.tags"
                :key="item.fullPath"
                :type="route.fullPath === item.fullPath ? 'primary' : 'default'"
                class="tab-item"
                strong
                secondary
                :data="item.fullPath"
                @click.self="itemClick(item)"
            >
                <span class="text-item" @click.self="itemClick(item)">
                    {{ item.meta ? item.meta.tabTitle || item.meta.title || item.name : '页面' }}
                </span>
                <n-icon v-if="!item.meta?.fixed && store.tags.length > 1" class="icon-item" @click="store.remove(item.fullPath)">
                    <Close />
                </n-icon>
            </n-button>
        </n-scrollbar>
        <n-icon
            class="arrow-wrapper arrow-wrapper-right"
            :class="{ 'arrow-wrapper__disabled': rightArrowDisabled }"
            @click="rightArrowClick"
        >
            <ChevronBack />
        </n-icon>
        <n-dropdown :options="contextMenuOptions" placement="left-start" @select="onDropDownSelect">
            <n-icon class="arrow-wrapper" @click="rightArrowClick">
                <Menu />
            </n-icon>
        </n-dropdown>
    </div>
</template>

<script lang="ts" setup>
import { Close, ChevronBack, Refresh, ArrowBack, ArrowForward, Menu } from '@vicons/ionicons5'
import useStoreTabViews from '@/store/modules/tabViews'
import {NIcon, NScrollbar} from 'naive-ui'
import {onMounted} from 'vue'

const route = useRoute()
const router = useRouter()
const store = useStoreTabViews()

const itemClick = (row: any) => {
    router.push(row.fullPath || '/')
}

// 左边箭头
const leftArrowDisabled = ref(false)
const leftArrowClick = () => {
    const scrollbar = scrollbarRef.value as InstanceType<typeof NScrollbar>
    const scrollX = scrollbar.scrollbarInstRef?.containerRef?.scrollLeft || 0
    scrollbar.scrollTo({
        left: Math.max(0, scrollX - 200),
        debounce: true,
        behavior: 'smooth',
    } as any, 0)
    isDisabledArrow()
}

// 右边箭头
const rightArrowDisabled = ref(false)
const rightArrowClick = () => {
    const scrollbar = scrollbarRef.value as InstanceType<typeof NScrollbar>
    const scrollX = scrollbar.scrollbarInstRef?.containerRef?.scrollLeft || 0
    scrollbar.scrollTo({
        left: scrollX + 200,
        debounce: false,
        behavior: 'smooth',
    } as any, 0)
    isDisabledArrow()
}

// 判断箭头是否有效
const isDisabledArrow = () => {
    setTimeout(() => {
        const scrollbar = scrollbarRef.value as InstanceType<typeof NScrollbar>
        const { scrollLeft, scrollWidth, clientWidth } = scrollbar.scrollbarInstRef?.containerRef as HTMLElement
        leftArrowDisabled.value = scrollLeft === 0
        rightArrowDisabled.value = scrollLeft === scrollWidth - clientWidth
    }, 100)
}

// 最右边功能按钮
const contextMenuOptions = ref([
        {
            label: '刷新页面',
            key: 'refresh',
            icon: () => h(NIcon, null, {default: () => h(Refresh)})
        },
        {
            label: '关闭其他所有页签',
            key: 'close',
            icon: () => h(NIcon, null, {default: () => h(Close)})
        },
    ])
const onDropDownSelect = (key: string) => {
    switch (key) {
        case 'refresh': store.refresh(); break
        case 'close': store.closeOthers(); break
    }
}

onMounted(() => {
    nextTick(() => isDisabledArrow())
})

const scrollbarRef = ref()
</script>

<style lang="less" scoped>
.vaw-tab-bar-container {
    position: relative;
    height: var(--tab-height);
    line-height: calc(var(--tab-height) - 3px);
    box-sizing: border-box;
    white-space: nowrap;
    box-shadow: 10px 5px 10px rgb(0 0 0 / 10%);
    display: flex;
    align-items: center;
    :deep(.n-scrollbar-content) {
        height: 100%;
        display: flex;
        align-items: center;
    }
    .tab-item {
        padding: 7px 10px;
        cursor: pointer;
        height: 24px;
        font-weight: 200;

        .text-item {
            font-size: 12px;
            margin-top: 2px;
        }

        .icon-item {
            margin-left: 0;
            width: 0;
            height: 0;
            transition: all 0.2s ease-in-out;
            overflow: hidden;
        }

        &:hover {
            .icon-item {
                display: inline;
                width: 14px;
                height: 14px;
                margin-left: 5px;
                font-size: 12px;
                background-color: rgba(0, 0, 0, 0.12);
                border-radius: 50%;
                padding: 1px;
                transition: all 0.2s ease-in-out;
            }
        }
    }

    .tab-item + .tab-item {
        margin-left: 10px;
    }

    .arrow-wrapper {
        cursor: pointer;
        font-size: 20px;
        margin: 0 8px;

        &-right {
            transform: rotate(180deg);
        }
    }

    .arrow-wrapper__disabled {
        cursor: not-allowed;
        color: #b9b9b9;
    }
}
</style>
