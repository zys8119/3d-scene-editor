<template>
    <div class="attr-card-3d">
        <div class="text-12px font-bold color-#cacbcb" v-if="title">
            <n-space justify="space-between">
                <n-space align="center">
                    {{ title }}
                    <span
                        class="attr-card-3d-more"
                        v-if="showMore"
                        @click.stop="more(title)"
                    ></span>
                </n-space>
                <n-space align="center">
                    <n-space
                        align="center"
                        class="!gap-0"
                        v-if="contentMore || showAdd"
                    >
                        <n-popover
                            trigger="hover"
                            placement="bottom"
                            v-if="!!contentMore"
                        >
                            <template #trigger>
                                <div class="attr-card-3d-more-icon">
                                    <svg
                                        t="1688434906417"
                                        class="icon"
                                        viewBox="0 0 1024 1024"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        p-id="4272"
                                        width="200"
                                        height="200"
                                    >
                                        <path
                                            d="M415.930119 223.790358c0-52.980346 43.003528-95.983874 95.983874-95.983874s95.983874 43.003528 95.983874 95.983874-43.003528 95.983874-95.983874 95.983874S415.930119 276.770704 415.930119 223.790358z"
                                            fill="#575B66"
                                            p-id="4273"
                                        ></path>
                                        <path
                                            d="M415.930119 511.741979c0-52.980346 43.003528-95.983874 95.983874-95.983874s95.983874 43.003528 95.983874 95.983874-43.003528 95.983874-95.983874 95.983874S415.930119 564.722325 415.930119 511.741979z"
                                            fill="#575B66"
                                            p-id="4274"
                                        ></path>
                                        <path
                                            d="M415.930119 799.865614c0-52.980346 43.003528-95.983874 95.983874-95.983874s95.983874 43.003528 95.983874 95.983874-43.003528 95.983874-95.983874 95.983874S415.930119 852.673946 415.930119 799.865614z"
                                            fill="#575B66"
                                            p-id="4275"
                                        ></path>
                                    </svg>
                                </div>
                            </template>
                            <AttributeMoreVnode
                                :content="contentMore"
                            ></AttributeMoreVnode>
                        </n-popover>
                        <div class="attr-card-3d-more-icon" @click="add">
                            <svg
                                t="1688434920527"
                                class="icon"
                                viewBox="0 0 1024 1024"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                p-id="5274"
                                width="200"
                                height="200"
                            >
                                <path
                                    d="M801.171 483.589H544V226.418c0-17.673-14.327-32-32-32s-32 14.327-32 32v257.171H222.83c-17.673 0-32 14.327-32 32s14.327 32 32 32H480v257.17c0 17.673 14.327 32 32 32s32-14.327 32-32v-257.17h257.171c17.673 0 32-14.327 32-32s-14.327-32-32-32z"
                                    fill=""
                                    p-id="5275"
                                ></path>
                            </svg>
                        </div>
                    </n-space>
                    <n-switch
                        v-if="typeof show === 'boolean'"
                        v-model:value="show"
                    ></n-switch>
                </n-space>
            </n-space>
        </div>
        <n-collapse-transition :show="typeof show === 'boolean' ? show : true">
            <template v-for="(item, key) in list" :key="key">
                <div
                    v-if="filter(item)"
                    class="attr-card-3d-value flex justify-center items-center gap-15px"
                >
                    <div
                        class="attr-card-3d-value__label text-12px w-60px flex items-center"
                        v-if="typeof item.label === 'string'"
                    >
                        <n-ellipsis class="flex-1">
                            {{ item.label }}
                        </n-ellipsis>
                        <span
                            class="attr-card-3d-more"
                            v-if="item.showMore"
                            @click.stop="more(item)"
                        ></span>
                    </div>
                    <div class="value flex-1">
                        <attr-card-component-3d
                            :config="item.config"
                            class="w-100%"
                        ></attr-card-component-3d>
                    </div>
                </div>
            </template>
        </n-collapse-transition>
    </div>
</template>

<script setup lang="ts">
import { AttrsItemChild } from '@/store/modules/3d/attrs';
import AttributeMoreVnode from './AttributeMoreVnode';
import useStore3d from '@/store/modules/3d';
const store = useStore3d();

const props = defineProps<{
    title: string;
    show: boolean | null | undefined;
    showMore: boolean | null | undefined;
    showAdd: boolean | null | undefined;
    contentMore: any;
    list: Array<AttrsItemChild>;
}>();
const emits = defineEmits<{
    (e: 'update:show', v: boolean): void;
    (e: 'more', v: any): void;
    (e: 'add'): void;
}>();
const show = useVModel(props, 'show', emits);
const more = (v: any) => {
    emits('more', v);
};
const add = () => {
    emits('add');
};
const filter = (item: any) => {
    if (typeof item.filter === 'function') {
        return item.filter?.(store);
    }
    return true;
};
</script>

<style scoped lang="less">
.attr-card-3d {
    padding: 15px;

    & + .attr-card-3d {
        border-top: 1px solid #1c1d20;
    }

    .label {
        color: #696a6c;
    }

    display: flex;
    flex-direction: column;
    gap: 4px;

    .attr-card-3d-value {
        margin-top: 4px;
    }

    .attr-card-3d-more {
        @color: #96979a;
        @size: 15px;
        @size2: 3px;
        @gap: calc((@size - @size2 * 2) / 3);
        width: @size;
        height: @size;
        position: relative;
        overflow: hidden;
        display: block;
        cursor: pointer;

        &:before {
            content: '';
            position: absolute;
            left: @gap;
            top: @gap;
            width: @size2;
            height: @size2;
            background-color: @color;
            color: @color;
            border-radius: 100%;
            box-shadow: calc(@gap + @size2) 0px,
                calc(@gap + @size2) calc(@gap + @size2), 0px calc(@gap + @size2);
        }

        &:hover {
            &:before {
                background-color: tint(@color, 80%);
                color: tint(@color, 80%);
            }
        }
    }

    .attr-card-3d-more-icon {
        width: 20px;
        height: 20px;
        color: #6d6d6f;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            color: #ffffff;
        }
        svg {
            fill: currentColor;
            width: 100%;
            height: 100%;
            path {
                fill: currentColor !important;
            }
        }
    }
}
</style>
