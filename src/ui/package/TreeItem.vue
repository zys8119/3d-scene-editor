<template>
    <div class="TreeItem">
        <template v-if="isdraggable">
            <draggable v-model="currentOptions"
                       @update="$emit('draggable',currentOptions, true,$event)"
                       :animation="500"
                       :item-key="showNameField"
                       :move="draggableMove"
            >
                <template #item="{ element,index }">
                    <div>
                        <slot :item="element" :index="index"></slot>
                    </div>
                </template>
            </draggable>
        </template>
        <template v-else>
            <template v-for="(item,key) in currentOptions" :key="key">
                <slot :item="item" :index="key"></slot>
            </template>
        </template>
    </div>
</template>

<script lang="ts">
import draggable from "vuedraggable/src/vuedraggable.js"
export default {
    name: "TreeItem",
    components:{
        draggable
    },
    props:{
        // 是否拖拽
        isdraggable:{
            type:Boolean,
            default:false,
        },
        // 是否拖拽
        showNameField:{
            type:String,
            default:null,
        },
        // 选项
        options:{
            type:Array,
            default:()=>[],
        },
        // 拖拽移动处理回调
        draggableMove:{
            type:Function,
            default:()=>true,
        }
    },
    data(){
        return {
            currentOptions:[]
        }
    },
    watch:{
        options(){
            this.initOption();
        }
    },
    mounted() {
        this.initOption();
    },
    methods:{
        initOption(){
            this.currentOptions = this.options;
        }
    }
}
</script>

<style scoped>

</style>