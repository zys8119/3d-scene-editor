import {App} from "vue"
import ContentTable from  "./ContentTable.vue"
import ContentTableItem from  "./ContentTableItem.vue"
import ZButton from  "./ZButton.vue"
import Upload from  "./Upload.vue"
import Wangeditor from  "./Wangeditor.vue"
import Echarts from  "./Echarts.vue"
import Map from  "./Map.vue"
import Signature from  "./Signature.vue"
import Swiper from  "./Swiper.vue"
import SwiperItem from  "./SwiperItem.vue"
import InputPopover from  "./InputPopover.vue"
import Tree from  "./Tree.vue"
import TreeItem from  "./TreeItem.vue"
import Icon from  "./Icon.vue"
import Print from  "./Print.vue"
import Annotation from  "./Annotation.vue"
import Transfer from  "./Transfer.vue"
import TransferTree from  "./Transfer/TransferTree.vue"
import Loading from  "./Loading.vue"
import LayoutSplit from  "./LayoutSplit.vue"
export default (vue:App)=>{
    vue.component("ContentTable", <any>ContentTable);
    vue.component("ContentTableItem", <any>ContentTableItem);
    vue.component("ZButton", <any>ZButton);
    vue.component("Upload", <any>Upload);
    vue.component("Wangeditor", <any>Wangeditor);
    vue.component("Echarts", <any>Echarts);
    vue.component("Map", <any>Map);
    vue.component("Signature", <any>Signature);
    vue.component("Swiper", <any>Swiper);
    vue.component("SwiperItem", <any>SwiperItem);
    vue.component("InputPopover", <any>InputPopover);
    vue.component("Tree", <any>Tree);
    vue.component("TreeItem", <any>TreeItem);
    vue.component("Icon", <any>Icon);
    vue.component("Print", <any>Print);
    vue.component("Annotation", <any>Annotation);
    vue.component("TransferTree", <any>TransferTree);
    vue.component("Transfer", <any>Transfer);
    vue.component("Loading", <any>Loading);
    vue.component("LayoutSplit", <any>LayoutSplit);
}

