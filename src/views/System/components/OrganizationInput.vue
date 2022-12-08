<template>
    <div class="organization-input" v-bind="$attrs" @click="handleShow">
        <wp-input :size="size" readonly :model-value="name" placeholder="" />
        <wp-button type="text">修改</wp-button>
    </div>
    <wp-modal v-model="show" :show-close="false" width="400px">
        <div class="organization-input-select">
            <organization-select v-model="active" :init-value="false" @change="item => activeName = item.title" />
        </div>
        <template #footer>
            <wp-space justify="space-between">
                <wp-button size="medium" plain @click="show = false">
                    取消
                </wp-button>
                <wp-space>
                    <wp-button size="medium" plain @click="active = void 0, activeName = ''">
                        重置
                    </wp-button>
                    <wp-button type="primary" size="medium" @click="handleConfirm">
                        确认
                    </wp-button>
                </wp-space>
            </wp-space>
        </template>
    </wp-modal>
</template>

<script setup lang="ts">
import OrganizationSelect from './OrganizationSelect.vue'

const props = defineProps<{
    size?: string,
    modelValue?: string,
    name?: string
}>()
const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
    (e: 'update:name', value: string): void
}>()

const id = useVModel(props, 'modelValue', emit)
const name = useVModel(props, 'name', emit)
const show = ref(false)

const active = ref(id.value)
const activeName = ref(name.value)

watch(id, () => active.value = id.value)
watch(name, () => activeName.value = name.value || '')

async function handleShow() {
    active.value = id.value
    activeName.value = name.value || ''
    show.value = true
}

async function handleConfirm() {
    id.value = active.value
    name.value = activeName.value
    show.value = false
}
</script>

<style lang="less" scoped>
.organization-input {
    display: flex;
    flex: 1;
    .wp-input {
        margin-right: 10px;
        flex: 1;
        overflow: hidden;
        width: 100%;
    }
}
.organization-input-select {
    height: 350px;
    overflow: auto;
    :deep(.wp-input) {
        position: sticky;
        top: 0;
        background: #fff;
        z-index: 1;
    }
}
</style>