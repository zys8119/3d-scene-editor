<template>
    <div>
        <slot name="title" />
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    title?: string
}>()
</script>