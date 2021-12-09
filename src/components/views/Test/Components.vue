<template>
    <space :size="[20, 30]">
        <div>
            <el-button>
                sdds
            </el-button>
        </div>
        <div>
            <el-button>
                sdds
            </el-button>
        </div>
        <div>
            <el-button>
                sdds
            </el-button>
        </div>
    </space>
    <grid :default-span="4" :gap="[20, 50]">
        <grid-item :span="6">
            sdds
        </grid-item>
        <grid-item :offset="5">
            sdds
        </grid-item>
        <grid-item :offset-right="5" :span="6">
            sdds
        </grid-item>
        <grid-item :span="6">
            sdds
        </grid-item>
        <grid-item :span="6">
            sdds
        </grid-item>
    </grid>
    sd
</template>

<script lang="ts" setup>
import Space from '@/components/common/Space'
import Grid from '@/components/common/Grid'
import GridItem from '@/components/common/GridItem'
</script>