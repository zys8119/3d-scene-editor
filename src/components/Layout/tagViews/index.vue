<template>
    <div class="tag-views">
        <el-space>
            <el-tag
                v-for="tag in store.tags"
                :key="tag.name || ''"
                :closable="!tag.meta.fixed"
                :effect="store.active !== tag.name ? 'plain' : 'dark'"
                @click="$router.push(tag)"
                @close="store.remove(String(tag.name))"
                @click.middle="!tag.meta.fixed && store.remove(String(tag.name))"
                @click.right.prevent="store.refresh(tag)"
            >
                {{ tag.meta.tagTitle || tag.meta.title || tag.name }}
            </el-tag>
        </el-space>
    </div>
</template>

<script lang="ts" setup>
import useStore from '@/store/modules/tagViews'
const store = useStore()
</script>

<style lang="less" scoped>
.tag-views {
    margin-bottom: 20px;
    .el-tag {
        cursor: default;
    }
}
</style>