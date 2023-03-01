<template>
    <component :is="component" :class="className" aria-hidden="true">
        <use :href="iconName" />
    </component>
</template>

<script lang="ts" setup>
const props = withDefaults(
    defineProps<{
        prefix?: string;
        name: string;
    }>(),
    {
        prefix: 'icon',
        name: '',
    }
);

const component = computed(() => (props.prefix === 'icon' ? 'svg' : 'i'));
const iconName = computed(() => `#${props.prefix}-${props.name}`);
const className = computed(() => {
    if (props.prefix === 'icon') {
        return 'svg-icon';
    } else if (props.prefix === 'iconfont') {
        return 'iconfont icon-' + props.name;
    } else {
        return '';
    }
});
</script>

<style scoped lang="less">
.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

.svg-icon:hover {
    fill: var(--primary-color-hover);
}

.svg-external-icon {
    background-color: currentColor;
    mask-size: cover !important;
    display: inline-block;
}
</style>
