<template>
    <div class="AttrCardComponent">
        <n-input v-if="config.type === 'input'" clearable v-bind="config.props">
        </n-input>
        <n-input-number
            v-if="config.type === 'number'"
            clearable
            v-bind="config.props"
        >
        </n-input-number>
        <n-switch
            v-if="config.type === 'switch'"
            clearable
            v-bind="config.props"
        >
        </n-switch>
        <n-select
            v-if="config.type === 'select'"
            clearable
            :menu-props="{
                        class:'AttrCardComponent-n-select '
                  } as any"
            v-bind="config.props"
        >
        </n-select>
        <n-radio-group
            v-if="config.type === 'radio'"
            v-bind="config.props"
            v-model:value="config.props.value"
            class="attrs-n-radio-group w-100%"
        >
            <n-space
                :item-style="config.isflex ? { flex: 1 } : {}"
                class="w-100%"
            >
                <n-radio
                    v-for="song in config.props.options"
                    :key="song.value"
                    :value="song.value"
                >
                    <n-ellipsis class="w-100%">
                        <div class="flex justify-center items-center">
                            {{ song.label }}
                        </div>
                    </n-ellipsis>
                </n-radio>
            </n-space>
            <template #icon>asdas</template>
        </n-radio-group>
    </div>
</template>
<script setup lang="ts">
import { AttrsItemChildConfig } from '@/store/modules/3d/attrs';

defineProps<{
    config: AttrsItemChildConfig;
}>();
</script>

<style scoped lang="less">
.AttrCardComponent {
}
</style>
