<template>
    <n-breadcrumb>
        <transition-group name="breadcrumb">
            <n-breadcrumb-item
                v-for="(item, key) of routeMatchedMap"
                :key="key"
            >
                <span>{{ item.title }}</span>
            </n-breadcrumb-item>
        </transition-group>
    </n-breadcrumb>
</template>

<script lang="ts" setup>
const route = useRoute();
const routeMatchedMap = computed(() => {
    return (
        route.meta.breadcrumbs?.map((item) => {
            return {
                title: String(item.meta?.title || item.name),
            };
        }) || []
    );
});
</script>
