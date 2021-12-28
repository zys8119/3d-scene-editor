<template>
    <div class="tag-views">
        <el-space>
            <el-tag
                v-for="tag in tagViewsStore.tags"
                :key="tag.name || ''"
                :closable="!tag.meta.fixed"
                :effect="tagViewsStore.active !== tag.name ? 'plain' : 'dark'"
                @click="$router.push(tag)"
                @close="tagViewsStore.remove(String(tag.name))"
                @click.middle="!tag.meta.fixed && tagViewsStore.remove(String(tag.name))"
            >
                {{ tag.meta.title || tag.name }}
            </el-tag>
        </el-space>
    </div>
</template>

<script lang="ts" setup>
import useTagViewsStore from '@/store/modules/tagViews'
const tagViewsStore = useTagViewsStore()
</script>

<style lang="less" scoped>
.tag-views {
    margin-bottom: 20px;
}
</style>