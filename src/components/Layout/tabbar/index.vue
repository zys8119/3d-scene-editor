<template>
    <div class="vaw-tab-bar-container">
        asdfasf
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
.vaw-tab-bar-container {
    position: relative;
    height: var(--tab-height);
    line-height: calc(var(--tab-height) - 3px);
    box-sizing: border-box;
    white-space: nowrap;
    box-shadow: 10px 5px 10px rgb(0 0 0 / 10%);

    .contex-menu-wrapper {
        position: absolute;
        width: 130px;
        z-index: 999;
        list-style: none;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
        background-color: var(--base-color);
        padding-left: 0;

        & > li {
            width: 100%;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            padding: 5px 0;
        }

        & > li:hover {
            color: var(--primary-color);
        }
    }

    .humburger-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .tab-humburger-wrapper {
        margin-left: 40px;
        transition: margin-left var(--transition-time);
    }

    .tab-no-humburger-wrapper {
        margin-left: 0;
        transition: margin-left var(--transition-time);
    }

    .tab-item {
        padding: 7px 10px;
        cursor: pointer;

        .icon-item {
            margin-left: 0;
            width: 0;
            height: 0;
            transition: all 0.2s ease-in-out;
            overflow: hidden;
        }

        &:hover {
            .icon-item {
                display: inline;
                width: 14px;
                height: 14px;
                margin-left: 5px;
                font-size: 12px;
                background-color: rgba(0, 0, 0, 0.12);
                border-radius: 50%;
                padding: 1px;
                transition: all 0.2s ease-in-out;
            }
        }
    }

    .tab-item + .tab-item {
        margin-left: 10px;
    }

    .arrow-wrapper {
        cursor: pointer;
        font-size: 20px;
        margin: 0 8px;
    }

    .arrow-wrapper__disabled {
        cursor: not-allowed;
        color: #b9b9b9;
    }
}
</style>
