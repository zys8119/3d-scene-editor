<template>
    <div class="SizeTest">
        <div class="aa">移动端字体大小测试</div>
        <div>asdaasdasd5545646464646499999</div>
        {{css__rem__base}}
        <el-button class="aa" @click="$emit('aaa',4556)">{{ airforce.aaa }}</el-button>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
const css__rem__base = ref(477)
// export default {
//     name: "SizeTest",
//     data(){
//         return {
//             __remBase__:477
//         }
//     }
// }
</script>

<style scoped lang="less">
.SizeTest {
    .aa{
        font-size: size(14);
    }
}
</style>