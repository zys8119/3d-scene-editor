import {DefineComponent, Prop, VNode} from "vue"
import {SwiperOptions} from "swiper"
const Swiper:DefineComponent<{
    config?:Prop<SwiperOptions, any>;
},any,any,any, {
    init():void
}, {
    default?():VNode | VNode[]
},any, {
},any,any,any, any> = {};
export default Swiper;