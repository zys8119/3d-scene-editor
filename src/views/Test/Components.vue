<template>
    <h1>间隙 Space</h1>
    <o-space :size="slider">
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
    </o-space>
    <o-space :size="slider" justify="end">
        <el-button>
            取消
        </el-button>
        <el-button type="primary" @click="testText = testText === '点我' ? '我变了' : '点我'">
            {{ testText }}
        </el-button>
        <el-button type="primary">
            确认
        </el-button>
    </o-space>
    <o-space :size="slider" justify="end" vertical>
        <el-button>
            取消
        </el-button>
        <el-button type="primary">
            确认
        </el-button>
    </o-space>
    <o-space :size="slider" justify="space-around">
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
    </o-space>
    <el-slider v-model="slider"></el-slider>
    <h1>布局 Grid</h1>
    <o-g class="grid-demo" :default-span="6" :gap="[slider2, 20]" :dense="dense">
        <o-gi>
            我占六格
        </o-gi>
        <o-gi>
            我占六格
        </o-gi>
        <o-gi>
            我占六格
        </o-gi>
        <o-gi>
            我占六格
        </o-gi>
        <o-gi>
            我占六格
        </o-gi>
        <o-gi>
            我占六格
        </o-gi>
        <o-gi>
            我占六格
        </o-gi>
        <o-gi>
            我占六格
        </o-gi>
        <o-gi :span="6" :row-span="2">
            我占六格，竖着占两格
        </o-gi>
        <o-gi :offset="5">
            我占四格，左边有五格
        </o-gi>
        <o-gi :offset-right="5" :span="6">
            我占六格，右边有五格
        </o-gi>
        <o-gi :span="6">
            我占六格
        </o-gi>
        <o-gi :span="24">
            我占二十四格
        </o-gi>
        <o-gi :span="7">
            我占奇数格
        </o-gi>
    </o-g>
    <el-slider v-model="slider2" :max="60"></el-slider>
    稠密 <el-switch v-model="dense" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const slider = ref(20)
const slider2 = ref(20)

const testText = ref('点我')
const dense = ref(false)
</script>

<style lang="less" scoped>
.demo {
    p { 
        line-height: 25px;
    }
}
.grid-demo {
    :deep(.wp-o-gi) {
        color: #fff;
        background-color: #469;
        padding: 10px 20px;
        border-radius: 5px;
    }
}
</style>