<template>
    <el-select v-bind="selectProps">
        <el-option v-for="option in props.options" :key="option.value" v-bind="option" />
    </el-select>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

const props = defineProps({
    ...ElSelect.props,
    options: {
        type: Array as PropType<ExtractProps<typeof ElOption>[]>,
        default: () => []
    }
})

const attrs = useAttrs()

const selectProps = computed(() => {
    const propsTemp = { ...props, ...attrs }
    delete propsTemp.options
    return propsTemp
})
</script>