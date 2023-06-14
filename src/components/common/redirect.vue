<template>
    <div />
</template>

<script lang="ts" setup>
const route = useRoute();
const router = useRouter();

if (route.query?.url) {
    router.replace({
        path: String(route.query?.url),
        query: JSON.parse(<string>route.query?.params),
    });
} else {
    router.replace('/');
}
</script>
