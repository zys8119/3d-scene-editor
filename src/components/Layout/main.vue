<template>
    <router-view v-slot="{ Component, route }">
        <transition :name="appConfig.pageAnim + '-transform'" mode="out-in" appear>
            <keep-alive>
                <component :is="Component" :key="route.fullPath"/>
            </keep-alive>
        </transition>
    </router-view>
</template>

<script lang="ts" setup>
import useAppConfigStore from '@/store/modules/app-config'
const appConfig = useAppConfigStore()
</script>
