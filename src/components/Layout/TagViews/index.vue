<template>
    <div class="tag-views">
        <wp-x-scroll ref="xScroll" smooth>
            <wp-space :wrap="false" :size="0">
                <wp-tag
                    v-for="tag in store.tags"
                    :id="`tagview_${tag.fullPath}`"
                    :key="tag.fullPath || ''"
                    :class="store.active === tag.fullPath ? 'tag-active' : null"
                    :closable="!tag.meta.fixed"
                    :color="store.active !== tag.fullPath ? ['#000', '#fff'] : ['var(--primary-color)', 'rgb(240, 240, 240)']"
                    @click="$router.push(tag)"
                    @close="store.remove(tag.fullPath)"
                    @click.middle="!tag.meta.fixed && store.remove(tag.fullPath)"
                    @click.right.prevent="store.refresh(tag)"
                >
                    {{ tag.meta.tagTitle || tag.meta.title || tag.name }}
                </wp-tag>
            </wp-space>
        </wp-x-scroll>
    </div>
</template>

<script lang="ts" setup>
import useStore from '@/store/modules/tagViews'
import type { WpXScroll } from 'wisdom-plus'

const store = useStore()

const xScroll = ref<InstanceType<typeof WpXScroll> | null>(null)

watch(() => store.active, () => {
    nextTick(() => {
        const element = document.querySelector(`#tagview_${store.active}`) as HTMLDivElement
        if (!element || !xScroll.value) return
        const boundingRect = element.getBoundingClientRect()
        const deltaX = boundingRect.x - xScroll.value.$el.offsetLeft
        if (
            deltaX < 0 ||
            xScroll.value.$el.offsetWidth - deltaX < boundingRect.width
        ) {
            xScroll.value?.scrollTo({
                left: element.offsetLeft - xScroll.value.$el.offsetWidth / 2 + boundingRect.width / 2,
                behavior: 'smooth'
            })
        }
    })
})
</script>

<style lang="less" scoped>
.tag-views {
    .wp-tag {
        cursor: pointer;
        --wp-tag-padding-top-bottom: 15px;
        --wp-tag-padding-left-right: 15px;
        &.tag-active {
            border-color: #ccc;
        }
        :deep(.wp-tag--close) {
            margin-left: 6px;
        }
    }
}
</style>