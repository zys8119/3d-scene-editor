<script lang="ts">
import { ElTableColumn } from "element-plus"
import { h } from "vue"
export default {
    name: "ContentTableItem",
    props:{
        item:{type:Object,default:Object}
    },
    render(){
        if(this.item.columns){
            return h(
                ElTableColumn,
                {
                    label:this.item.label,
                    align:this.item.align,
                    fixed:this.item.fixed,
                    width:this.item.width,
                },
                {
                    default:()=>this.item.columns.map(e=>{
                        return this.$slots.default({
                            item:e
                        })
                    })
                }
            )
        }
        return this.$slots.default({
            item:this.item
        })
    }
}
</script>

<style scoped lang="less">
.ContentTableItem{
}
</style>