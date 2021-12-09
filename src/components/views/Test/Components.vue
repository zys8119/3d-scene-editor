<template>
    <h1>间隙 Space</h1>
    <space :size="slider">
        <div>
            <el-button>
                按钮1
            </el-button>
        </div>
        <div>
            <el-button>
                按钮2
            </el-button>
        </div>
        <div>
            <el-button>
                按钮3
            </el-button>
        </div>
    </space>
    <space :size="slider" justify="end">
        <el-button>
            取消
        </el-button>
        <el-button type="primary">
            确认
        </el-button>
    </space>
    <space :size="slider" justify="end" vertical>
        <el-button>
            取消
        </el-button>
        <el-button type="primary">
            确认
        </el-button>
    </space>
    <space :size="slider" justify="space-around">
        <div>
            <el-button>
                按钮1
            </el-button>
        </div>
        <div>
            <el-button>
                按钮2
            </el-button>
        </div>
        <div>
            <el-button>
                按钮3
            </el-button>
        </div>
    </space>
    <el-slider v-model="slider"></el-slider>
    <h1>布局 Grid</h1>
    <grid class="grid-demo" :default-span="6" :gap="[20, slider2]">
        <grid-item>
            我占六格
        </grid-item>
        <grid-item>
            我占六格
        </grid-item>
        <grid-item>
            我占六格
        </grid-item>
        <grid-item>
            我占六格
        </grid-item>
        <grid-item>
            我占六格
        </grid-item>
        <grid-item>
            我占六格
        </grid-item>
        <grid-item>
            我占六格
        </grid-item>
        <grid-item>
            我占六格
        </grid-item>
        <grid-item :span="6">
            我占六格
        </grid-item>
        <grid-item :offset="5">
            我占四格，左边有五格
        </grid-item>
        <grid-item :offset-right="5" :span="6">
            我占六格，右边有五格
        </grid-item>
        <grid-item :span="6">
            我占六格
        </grid-item>
        <grid-item :span="24">
            我占二十四格
        </grid-item>
    </grid>
    <el-slider v-model="slider2" :max="60"></el-slider>
    <h1>折叠渐变 CollapseTransition</h1>
    <el-button @click="show = !show">{{ show ? '折叠' : '展示' }}</el-button>
    <CollapseTransition>
        <div v-if="show" class="demo">
            <p>行宫</p>
            <p>元稹 〔唐代〕</p>

            <p>寥落古行宫，宫花寂寞红。</p>
            <p>白头宫女在，闲坐说玄宗。</p>
        </div>
    </CollapseTransition>
    <div>我是折叠的下一行</div>
</template>

<script lang="ts" setup>
import Space from '@/components/common/Space'
import Grid from '@/components/common/Grid'
import GridItem from '@/components/common/GridItem'
import CollapseTransition from '@/components/common/CollapseTransition'

import { ref } from 'vue'

const show = ref(true)
const slider = ref(20)
const slider2 = ref(20)
</script>

<style lang="less" scoped>
.demo {
    p { 
        line-height: 25px;
    }
}
.grid-demo {
    :deep(.wp-grid-item) {
        color: #fff;
        background-color: #469;
        padding: 10px 20px;
        border-radius: 5px;
    }
}
</style>