<template>
    <div class="tag-views">
        <wp-x-scroll smooth>
            <wp-space :wrap="false">
                <wp-tag
                    v-for="tag in store.tags"
                    :key="tag.name || ''"
                    :closable="!tag.meta.fixed"
                    :color="store.active !== tag.name ? ['#000', '#fff'] : ['rgb(99, 111, 190)', 'rgb(237, 233, 233)']"
                    @click="$router.push(tag)"
                    @close="store.remove(String(tag.name))"
                    @click.middle="!tag.meta.fixed && store.remove(String(tag.name))"
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
const store = useStore()
</script>

<style lang="less" scoped>
.tag-views {
    margin-bottom: 20px;
    .wp-tag {
        cursor: default;
    }
}
</style>