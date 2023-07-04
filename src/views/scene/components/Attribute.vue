<template>
    <div class="Attribute flex flex-col">
        <n-space justify="space-between" class="p-10px">
            <div
                class="w-30px h-30px flex justify-center items-center bg-#29c194 text-#ffffff text-12px b-rd-100%"
            >
                Zys
            </div>
            <div>icon</div>
        </n-space>

        <div class="Attribute-Content flex-1 b-t-solid b-t-1px b-t-#5c5c5e">
            <attr-card-3d
                v-model:show="item.show"
                v-model:showMore="item.showMore"
                v-model:showAdd="item.showAdd"
                v-model:contentMore="item.contentMore"
                :title="item.title"
                :list="item.child"
                v-for="(item, key) in $store.store3d.attrsGetters"
                :key="key"
                @more="(v) => more(v, item)"
                @add="add(item)"
            ></attr-card-3d>
        </div>
        <div
            ref="moreRef"
            class="AttributeMore"
            v-if="moreContent !== null && moreContent !== undefined"
        >
            <AttributeMoreVnode :content="moreContent" />
        </div>
    </div>
</template>

<script setup lang="ts">
import AttributeMoreVnode from './AttributeMoreVnode';
const moreRef = ref();
const moreContent = ref(null);
const more = async (v: any, item: any) => {
    if (typeof v === 'string') {
        moreContent.value = await item.more?.();
    } else {
        moreContent.value = await v.more?.();
    }
};
const add = async (v: any) => {
    await v.onAadd?.();
};
const { isOutside } = useMouseInElement(moreRef);
window.addEventListener('click', () => {
    if (isOutside.value) {
        moreContent.value = null;
    }
});
</script>

<style scoped lang="less">
.Attribute {
    position: absolute;
    right: 15px;
    top: 15px;
    background: #111316;
    width: 230px;
    height: calc((100% - 15px * 2));
    border-radius: 10px;
    color: #9d9ea0;
    z-index: 1;
    transition: all ease-in-out 300ms;
    &-Content {
        overflow-x: hidden;
        &::-webkit-scrollbar {
            display: none;
        }
    }
    .AttributeMore {
        position: absolute;
        transform: translateX(-100%);
        top: 0;
        left: -10px;
        background: #111316;
        height: 100%;
        overflow-x: hidden;
        z-index: 2;
        border-radius: 10px;
        color: #9d9ea0;
        &::-webkit-scrollbar {
            display: none;
        }
    }
}
</style>
