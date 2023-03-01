<template>
    <div />
</template>

<script lang="ts" setup>
const route = useRoute();
const router = useRouter();

if (route.query?.url) {
    router.replace(String(route.query?.url));
} else {
    router.replace('/');
}
</script>
