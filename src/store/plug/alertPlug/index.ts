import ZXDialogAlert from './ZXDialogAlert.vue'
import ZAlertFooter from './ZAlertFooter.vue';
import {$ZAlert, $ZAlertOptions} from "./Interface";
import { Plugin, createApp } from "vue"
import ElementPlus from 'element-plus';
import airforcePlug from '../airforcePlug';
import store from '../../index';
import uiPlug from '../../../ui';
import rem from 'vitejs-plugin-rem-px';
const optsInitData:$ZAlertOptions = {
    _components:null,
    _props: {},
    _event: {},
    content: null,
    title: null,
    width: "50%",
    fullscreen: null,
    top: "15vh",
    modal: true,
    modalAppendToBody: true,
    appendToBody:  false,
    lockScroll: true,
    customClass:  null,
    closeOnClickModal:  false,
    closeOnPressEscape:  true,
    showClose:  true,
    beforeClose:  null,
    center:  false,
    destroyOnClose:  false,
    slotTitle:  null,
    slotFooter: null,
    maxHeight:  1,
    layout: "conter",
}
const plugin:Plugin = {
    install (vue) {
        vue.component("ZAlertFooter", <any>ZAlertFooter);
        const $ZXDialogAlert = <$ZAlert>{
            show:(opts:$ZAlertOptions)=>{
                opts = (<any>Object).assign(<$ZAlertOptions>optsInitData,opts);
                opts._props = opts._props || {};
                opts._event = opts._event || {};
                opts.content = opts.content || null;
                opts._components = opts._components || null;
                let FilterField = {
                    onShow:true,
                    onHide:true,
                    onOpened:true,
                    onClosed:true,
                    _event:true,
                };
                for(let i in opts){
                    if(!FilterField[i]){
                        (<any>ZXDialogAlert).props[i] = (<any>ZXDialogAlert).props[i] || {};
                        (<any>ZXDialogAlert).props[i].default = opts[i]
                    }
                }
                let $vm;
                if (!$vm) {
                    const container = document.createElement('div');
                    $vm = createApp(<any>ZXDialogAlert)
                        .use(ElementPlus)
                        .use(store)
                        .use(airforcePlug)
                        .use(uiPlug)
                        .use(rem, {plug:true, base:1440})
                        .use({
                            install($vmVue){
                                $vmVue.config.globalProperties.$ZAlert = $ZXDialogAlert;
                            }
                        })
                        .component("ZAlertFooter", <any>ZAlertFooter)
                        .mount(container);
                    document.body.appendChild(container);
                }
                vue.config.globalProperties.$ZAlert.vm[vue.config.globalProperties.$ZAlert.index] = $vm;
                vue.config.globalProperties.$ZAlert.index += 1;
                $vm.show = false;
                $vm.showBox = false;
                for(var i in opts){
                    if(FilterField[i]){
                        if(typeof opts[i] === "function"){
                            $vm[i] = (function (key,callback) {
                                return function () {
                                    callback.call(this);
                                    opts[key].call(this);
                                }
                            })(i,$vm[i]);
                        }else {
                            $vm[i] = opts[i];
                        }
                    }
                }
                $vm.show = true;
                $vm.showBox = true;
                return vue.config.globalProperties.$ZAlert.index-1;
            },
            alert:function (opts){
                opts = opts || {};
                return this.show((<any>Object).assign({
                    layout:"right",
                    width:"90%"
                }, opts));
            },
            hide(){
                if(vue.config.globalProperties.$ZAlert.index <= 0){
                    return;
                }
                vue.config.globalProperties.$ZAlert.index -= 1;
                let $vm = vue.config.globalProperties.$ZAlert.vm[vue.config.globalProperties.$ZAlert.index];
                if($vm){
                    $vm.show = false;
                    $vm.showBox = false;
                }
                return new Promise(resolve=>{
                    $vm.$nextTick(()=>{
                        // @ts-ignore
                        resolve();
                    })
                });
            },
            hideAll(){
                return new Promise(resolve=> {
                    let $vmAll = vue.config.globalProperties.$ZAlert.vm;
                    for(let k in $vmAll){
                        let $vm = $vmAll[k];
                        if($vm){
                            $vm.show = false;
                            $vm.showBox = false;
                        }
                    }
                    setTimeout(()=>{
                        // @ts-ignore
                        resolve();
                    })
                })
            },
            vm:{},
            index:0,
        };
        if(!vue.config.globalProperties.$ZAlert){
            vue.config.globalProperties.$ZAlert =  $ZXDialogAlert;
        }
    }
}
export default plugin
export const install = plugin.install
