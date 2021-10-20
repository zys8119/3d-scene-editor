<template>
    <span @click="showMap">
        <slot>
            <div class="amap-page-conpont" v-if="show" :class="{relative:relative}">
                <!--搜索组件-->
                <div class="z_amapSearch">
                    <el-input class="z_amapSearch_input" v-model="search" @input="amapSearchChange" placeholder="请输入关键字">
                        <img :src="logo" alt="" slot="prefix">
                        <i slot="suffix" class="el-icon-search"></i>
                    </el-input>
                    <div ref="z_amapSearch_panel" class="z_amapSearch_panel" @click="amapSearchChange"></div>
                </div>
                <!--地图组件-->
                <div class="mapContainer" ref="mapContainer"></div>
                <!--地图组件-->
                <div class="maptrackBtns" v-if="type === 'track'">
                    <el-button size="mini" v-for="i in 6" :key="i" @click="moveAlongTrack(i*200+(i-1)*200)">{{i*2+(i-1)*2}}X</el-button>
                </div>
                <!--右侧展示-->
                <div class="toolbar">
                    <div class="addressListBox">
                        <el-row class="addressList" v-for="(item, key) in address" :key="key">
                            <el-col :span="22">
                                {{ item.address }}({{item.longitude}},{{item.latitude}})
                            </el-col>
                            <el-col :span="2" class="row_right">
                                <i class="el-icon-error" @click="deleteAddress(key, false) "></i>
                            </el-col>
                        </el-row>
                    </div>
                    <div v-if="address.length > 0" class="clear-all">
                        <span @click="clearAllFn">清空全部</span>
                    </div>
                    <div class="map-btn-group">
                        <el-button class="map-btn map-btn-cancel" @click.stop="handleCancel(level)">取消</el-button>
                        <el-button class="map-btn map-btn-submit" @click.stop="handleSure(level)" :disabled="btnStatus">确定
                        </el-button>
                    </div>
                </div>
                <!--河道搜索-->
                <div class="search-map-wrap" v-if="type === 'wadi'">
                  <div class="search-map-top">
                    <div class="map-search-box">
                      <el-input placeholder="河道信息查询" v-model="search" @change="wadiSearch(search)">
                        <template slot="append">
                          <el-button icon="el-icon-search" class="map-search-btn" @click="wadiSearch(search)"></el-button>
                        </template>
                      </el-input>

                      <ul class="menu-selection">
                        <li v-for="(item,index) in menuList"
                            :class="menuIndex==index?'menu-active':''" @click="menuIndex = index, regionTap = !regionTap">
                          {{item}}<span class="down-arrow"></span>
                        </li>
                      </ul>
                      <div class="region-box" id="region" v-if="regionTap" >
                        <section class="left-nav-box">
                          <ul class="left-nav-list">
                            <li v-if="region.length" v-for="(item,index) in  region"
                                :class="regionIndex==index?'left-nav-hover':''" @mouseover="regionIndex = index,streetIndex = -1">
                              {{item.name}}
                            </li>
                          </ul>
                        </section>
                        <section class="region-street-box">

                          <p class="region-name" v-if="region.length">{{region[regionIndex].name}}</p>
                          <ul class="region-street" v-if="region.length">
                            <li v-for="(item,index) in  region[regionIndex].boundaries"
                                :class="streetIndex==index?'street-active':''" @click="streetClick(item,index)">
                              {{item.name}}
                            </li>
                          </ul>
                        </section>
                      </div>
                    </div>
                  </div>
                  <div class="search-map-content">
                    <p class="search-map-header">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAYAAAD6S912AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAhhJREFUOI2N1U+IjlEUx/HPjFFmaBaEJQs2NAkbiZonK1lIY4GSmpKFsfCnQWmIRE0RNUVmGkks/F1IjUnXn4WIIfJn488sSBZoNDPKaCye59Uzz9z35dSt9577O9/nnnvuPW/VaGOjMjYLm7EC8zPfS/TiND6CEMYE1ZSBbcFx1Bb8S7KxPRudxcDqCGwHTkVgeZuCM2gpLlQVUl6AZxVAMZsnhNfldngkEvAL3dn4HVk/XG6H0/HJ2HP9jARvsnkDbmfa/AdnCOF7cYcNxhfpQA4GL7C/oJkoPSpF4ORxyfA44oudcX0M+C0iXBPxrY74vsaAzzFYEO7G+tx8E3YVNAN4GgMO4HpBXIML6JOmehYTCpouIQzFgNAmbgvlDj5nQwpFKgLfob0MNGYtQvhRCQit6P8P2C3pZR9jMSA0/QM2go2okyR15YB7MCqt6hPsrQDcgC/YiUFJ8rfyJWCv9B134G7mO4o7Edh5XMp+n8NJtEuSG6RvuQvN0koWX0E93mNqNv+AOfJNIgSSZFGWVUd1BmuNwEjv5srcfJVYxwmhD/uwtdQMpkVgJXskPasRvKqgm0n6Eg5KL/RDXCsjPlYBRJI0YRvaqqU3vRtX0YPlFYMLKEnSg8voFMKhUsrNuIkTuIef0tbVh7cYznSTMBeLpUWslTbltUK4wvj/FFiGdViK2VnQpGxtOPtYP+7johAe5IP/AJWWgbXHZbOoAAAAAElFTkSuQmCC" alt="">
                        <span class="nearby-channel-text">附近河道</span>
                        <span>(共{{WadiData.length}}条)</span>
                    </p>
                    <div class="nearby-list-box">
                      <ul class="nearby-list" id="my-list">
                        <li v-for="(item,index) in WadiData" @click="showMarkerInfo(item.loc[0],item.loc[1],map,item)">
                          <span>{{index+1}}. {{item.river_name}}</span>
                          <span>{{item.riverLength}}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
        </slot>
        <ul class="draggable" @click.stop="()=>{}" v-if="level === 1 && !relative">
            <draggable
                v-model="address"
                :animation = "500"
                item-key="address"
            >
                <template #item="{ element,index }">
                    <li class="address-list-items">
                        {{index+1}}-{{element.address}}
                        <i class="el-icon-error" @click.stop="deleteAddress(index,true) "></i>
                    </li>
                </template>
            </draggable>
        </ul>
        <Map v-if="currentShow && level === 1"
             :show="currentShow"
             :level="2"
             :mapCenter="mapCenter"
             :relative="relative"
             :type="type"
             :path="path"
             :icon="icon"
             :content="content"
             :zoom="zoom"
             :limit="limit"
             :getWadiData="getWadiData"
             :getWadiSearchData="getWadiSearchData"
             v-model="address"
             @closeMapPage="closeMapPage"
             @view-water-quality="(...args)=>$emit('view-water-quality',args[0],args[1])"
             @view-water-quality-attention="(...args)=>$emit('view-water-quality-attention',args[0],args[1])"
             @view-water-quality-unattention="(...args)=>$emit('view-water-quality-unattention',args[0],args[1])"
        ></Map>
    </span>
</template>
<script lang="ts">
    import region from "./data/NingboRegion.json"
    import draggable from "vuedraggable/src/vuedraggable.js"
    import maps from "./js/maps.js?raw"
    export default {
        name:"Map",
        components:{
            draggable
        },
        props: {
            mapCenter:{type:Array,default:()=>[121.622751, 29.858108]},
            searchOption:{type:Object,default:()=>({city: '宁波', citylimit: true})},
            zoom:{type:Number,default:16},
            show:{type:Boolean,default:false},
            level:{type:Number,default:1},
            modelValue: {type:Array,default:()=>[]},
            relative:{type:Boolean,default:false},
            /**
             * track：轨迹
             * wadi：河道
             */
            type:{type:String,default:null},
            path:{type:Array,default:()=>[]},
            icon:{type:String,default:null},
            content:{type:String,default:null},
            limit:{type:Number,default:null},
            getWadiData:{type:Function,default:()=>Promise},
            getWadiSearchData:{type:Function,default:()=>Promise},
        },
        data() {
            return {
                oldMarker: [],
                lng: 0,
                lat: 0,
                address: [],
                btnStatus: true,
                map:null,
                logo:"./images/login/logo.png",
                currentShow:false,
                search: "",
                valueOld:[],
                trackMarker:null,
                infoWindow:null,
                menuList: ['附近', '区域'],
                menuIndex: -1,
                WadiData:[],
                regionTap: false,
                region,
                regionIndex: 0,
                streetIndex: -1,
                src:null,
            };
        },
        beforeUnmount() {
            try {
                URL.revokeObjectURL(this.src)
            }catch (e) {
                // err
            }
        },
        methods: {
            // 初始化
            initData() {
                if(!this.currentShow){
                    return;
                }
                if(document.getElementById("amapJs")){
                    this.appendMap();
                }else {
                    this.src = URL.createObjectURL(new Blob([maps],{type:"application/javascript"}));
                    var jsapi = document.createElement('script');
                    jsapi.charset = 'utf-8';
                    jsapi.src = this.src;
                    jsapi.id = "amapJs";
                    jsapi.onload = ()=>{
                        this.appendMap()
                    };
                    document.head.appendChild(jsapi);
                }
            },
            // 初始化
            init(){
                this.valueInit();
                this.showInit();
                this.initData();
            },
            // 显示覆盖物信息
            showMarkerInfo(lng, lat, map, extData){
                let self = this;
                let isRepeat = false;
                let geocoder = new AMap.Geocoder({
                    radius: 1000,
                    extensions: "all"
                });
                geocoder.getAddress([lng, lat],  (status, result)=> {
                    if (status === 'complete' && result.info === 'OK') {
                        if (result && result.regeocode) {
                            let obj = {
                                address: result.regeocode.formattedAddress,
                                longitude: lng,
                                latitude: lat
                            }
                            let _html = "";
                            window.rd_ui_vue_map_vm_emit = (name, type) =>{
                                switch (type) {
                                    case "wadi":
                                        this.$emit(name, extData, type);
                                        break;
                                    default:
                                        self.address.map(v => {
                                            if (v.longitude === obj.longitude && v.latitude === obj.latitude) isRepeat = true
                                        })
                                        if (!isRepeat) {
                                            if (self.limit && self.address.length === self.limit) {self.$message.error(`最多可选择${self.limit}个地址`); return}
                                            self.address.push(obj)
                                        }
                                        break;
                                }
                            };
                            switch (this.type) {
                                case "wadi":
                                    let btn = `<div class="bottom" data-id="${ extData.address }" onclick="rd_ui_vue_map_vm_emit('view-water-quality-attention','wadi')">关注</div>`;
                                    if(extData.is_attention){
                                        btn = `<div class="bottom" data-id="${ extData.address }" onclick="rd_ui_vue_map_vm_emit('view-water-quality-unattention','wadi')">取消关注</div>`;
                                    }
                                    _html = `
                                    <div class="map-marker-tip-content wadi">
                                        <div class="list title"><span class="name"><h4>${ extData.river_name }</h4></span><span class="content btn" onclick="rd_ui_vue_map_vm_emit('view-water-quality','wadi')">查看水质</span></div>
                                        <div class="list"><span class="name">河道起点：</span><span class="content">${ extData.start_point }</span></div>
                                        <div class="list"><span class="name">河道终点：</span><span class="content">${ extData.end_point }</span></div>
                                        <div class="list"><span class="name">执行河长：</span><span class="content">${ extData.charge_person }</span></div>
                                        <div class="list"><span class="name">河道等级：</span><span class="content">${ extData.level }</span></div>
                                        <div class="list"><span class="name">河道长度：</span><span class="content">${ extData.river_len }</span></div>
                                        ${btn}
                                    </div>
                                `
                                    break;
                                default:
                                    _html = `
                                    <div class="map-marker-tip-content">
                                        <div class="list"><span class="name">地址：</span><h4 class="content">${ obj.address }</h4></div>
                                        <div class="list"><span class="name">经纬度：</span><span class="content">${ obj.longitude },${ obj.latitude }</span></div>
                                        <div class="bottom" address="${ obj.address }" longitude="${ obj.longitude }" latitude="${ obj.latitude }" onclick="rd_ui_vue_map_vm_emit(null,null)">确认选择</div>
                                    </div>
                                `
                                    break;
                            }
                            this.infoWindow = new AMap.InfoWindow({
                                offset: new AMap.Pixel(0, -30),
                                content: _html,
                            })
                            this.infoWindow.open(map, [lng, lat])
                        }
                    }
                })
            },
            // 添加覆盖物
            addMarker(lng, lat, extData) {
                this.getAmap(map => {
                    switch (this.type) {
                        case "wadi":
                            // 创建覆盖物
                            let MarkerObj = new AMap.Marker({
                                position: [lng, lat],
                                map: map,
                                extData,
                            });
                            // 注册点击事件
                            MarkerObj.on("click",(e)=>{
                                if(this.infoWindow){
                                    this.infoWindow.close()
                                }
                                this.showMarkerInfo(e.lnglat.lng, e.lnglat.lat, map, e.target.getExtData());
                            })
                            // 存储覆盖物
                            this.oldMarker.push(MarkerObj)
                            break;
                        default:
                            if (this.oldMarker.length > 0) {
                                map.remove(this.oldMarker)
                            }
                            this.oldMarker[0] = new AMap.Marker({
                                position: [lng, lat],
                                map: map
                            });
                            this.showMarkerInfo(lng, lat, map);
                            break;
                    }
                })
            },
            //取消
            handleCancel() {
                this.address = this.valueOld;
                this.$emit('update:modelValue', this.address)
                this.$emit('closeMapPage')
            },
            //确认
            handleSure() {
                this.$emit('closeMapPage')
                this.$emit('update:modelValue', this.address)
                this.$parent.$emit('update:modelValue', this.$parent.address)
            },
            // 删除地址
            deleteAddress(index,bool) {
                this.address.splice(index, 1);
                if(bool){
                    this.$emit('update:modelValue', this.address)
                }
            },
            // 添加地图实例化
            appendMap(){
                // @ts-ignore
                if(window.AMap && this.$refs.mapContainer){
                    AMap.plugin([
                        'AMap.ToolBar',
                        'AMap.Scale',
                        'AMap.Geocoder',
                        'AMap.Autocomplete',
                        'AMap.PlaceSearch'
                    ]);
                    this.map = new AMap.Map(this.$refs.mapContainer, {
                        zoom:this.zoom,//级别
                        center:this.mapCenter,//中心点坐标
                    });
                    this.initType();
                }else {
                    setTimeout(()=>{
                        this.appendMap();
                    },300)
                }
            },
            // 重置轨迹
            moveAlongTrack(s){
                if(this.trackMarker){
                    this.trackMarker.moveAlong(this.path, s);
                }
            },
            // 初始化轨迹
            initTrack(){
                this.moveAlongTrack();
                this.trackMarker = new AMap.Marker({
                    map: this.map,
                    position: this.mapCenter,
                    icon: this.icon,
                    content:this.content,
                    offset: new AMap.Pixel(0,-40),
                    autoRotation: false,
                    angle:0,
                });
                new AMap.Polyline({
                    map: this.map,
                    path: this.path,
                    showDir:true,
                    strokeColor: "#28F",  //线颜色
                    // strokeOpacity: 1,     //线透明度
                    strokeWeight: 6,      //线宽
                    // strokeStyle: "solid"  //线样式
                });
                const passedPolyline = new AMap.Polyline({
                    map: this.map,
                    // path: lineArr,
                    strokeColor: "#AF5",  //线颜色
                    // strokeOpacity: 1,     //线透明度
                    strokeWeight: 6,      //线宽
                    // strokeStyle: "solid"  //线样式
                });
                this.trackMarker.on('moving',  (e)=>{
                    passedPolyline.setPath(e.passedPath);
                });
                this.map.setFitView();
                //  开始轨迹动画
                this.moveAlongTrack(100);
            },
            // 初始化类型
            initType(){
                switch (this.type) {
                    case "track":
                        this.initTrack();
                        break;
                    case "wadi":
                        this.map.on("click",this.nearbyChannelClick);
                        break;
                    default:
                        this.map.on("click",this.markerClick);
                        break;
                }
            },
            // 河道重置
            oldMarkerRemoveWadi(){
                // 清除覆盖物
                this.map.remove(this.oldMarker);
                this.oldMarker = [];
                // 关闭显示信息
                if(this.infoWindow){
                    this.infoWindow.close()
                }
                // 清除数据
                this.WadiData = [];
            },
            // 河道点击事件
            nearbyChannelClick(e){
                let {lng,lat} = e.lnglat;
                // 河道重置
                this.oldMarkerRemoveWadi();
                // 获取覆盖物
                this.getWadiData({lng, lat}, e).then(res=>{
                    this.WadiData = res.data;
                    this.WadiData.forEach(e=>{
                        this.addMarker(e.loc[0], e.loc[1], e);
                    });
                });
            },
            // 河道搜索
            wadiSearch(river_name){
                // 河道重置
                this.oldMarkerRemoveWadi();
                // 获取覆盖物
                this.getWadiSearchData({river_name}).then(res=>{
                    this.WadiData = res.data;
                    this.WadiData.forEach(e=>{
                        this.addMarker(e.loc[0], e.loc[1], e);
                    });
                })
            },
            // 街道点击
            streetClick(item, index) {
                // 河道重置
                this.oldMarkerRemoveWadi();
                this.streetIndex = index;
                this.menuIndex = -1;
                this.regionTap = false;
                this.map.setZoomAndCenter(16, [item.center.lng, item.center.lat]);
                //获取附近河道
                this.getWadiData({lng:item.center.lng, lat:item.center.lat}, item).then(res=>{
                    this.streetIndex = -1;
                    this.WadiData = res.data;
                    this.WadiData.forEach(e=>{
                        this.addMarker(e.loc[0], e.loc[1], e);
                    });
                });
            },
            // 获取地图amap实例对象
            getAmap(callback = new Function()) {
                try {
                    if (this.map) {
                        callback(this.map);
                        return
                    }
                } catch (e) {// err
                }
                setTimeout(() => {
                    this.getAmap(callback)
                }, 500);
            },
            // 搜索回调
            amapSearchChange() {
                let self = this
                this.getAmap(map => {
                    if (!this.search) {
                        this.$refs.z_amapSearch_panel.innerHTML = ''
                        map.clearMap()
                        return
                    }
                    AMap.service(["AMap.PlaceSearch"], () => {
                        //构造地点查询类
                        var placeSearch = new AMap.PlaceSearch({
                            pageSize: 10, // 单页显示结果条数
                            pageIndex: 1, // 页码
                            city: "宁波", // 兴趣点城市
                            citylimit: true,  //是否强制限制在设置的城市内搜索
                            map: map, // 展现结果的地图实例
                            panel: this.$refs.z_amapSearch_panel, // 结果列表将在此容器中进行展示。
                            autoFitView: true, // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
                        });
                        // 监听搜索列表点击、搜索结果 map marker 点击  重写点击事件
                        AMap.event.addListener(placeSearch, "listElementClick", function (e) {
                            self.addMarker(e.data.location.lng, e.data.location.lat)
                        })
                        AMap.event.addListener(placeSearch, "markerClick", function (e) {
                            self.addMarker(e.data.location.lng, e.data.location.lat)
                        })
                        placeSearch.search(this.search)
                    });
                })
            },
            // 覆盖物点击事件
            markerClick(e) {
                let {lng, lat} = e.lnglat;
                this.lng = lng;
                this.lat = lat;
                this.addMarker(lng, lat)
            },
            //清空全部
            clearAllFn() {
                this.address = []
            },
            // 显示map
            showMap(){
                if(this.level === 1 && !this.currentShow){
                    this.currentShow = true;
                }
            },
            closeMapPage(){
                this.$emit('closeMapPage');
                this.currentShow = false;
            },
            showInit(){
                this.currentShow = this.show;
                if(this.relative){
                    this.currentShow = true;
                }
            },
            valueInit(){
                let val = this.modelValue || [];
                this.valueOld = JSON.parse(JSON.stringify(val));
                this.address = JSON.parse(JSON.stringify(val));
            }
        },
        mounted() {
            this.init();
        },
        watch: {
            // 监听地址
            address: function (val) {
                if (val) {
                    this.btnStatus = false
                }
            },
            show(){
                this.showInit();
            },
            modelValue(){
                this.valueInit();
            },
            path(){
                this.init();
            }
        }
    };
</script>
<style lang="less">
    .amap-page-conpont {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 100000;
        .search-box {
            position: absolute;
            top: 25px;
            left: 20px;
        }
        .toolbar {
            position: absolute;
            right: 27px;
            width: 284px;
            top: 6vh;
            background: #fff;
            height: 68vh;
            padding: 20px;
            box-sizing: border-box;

            .map-btn-group {
                position: absolute;
                bottom: 20px;

                .map-btn {
                    width: 110px;
                    height: 37px;
                    border-radius: 2px;
                    outline: none;
                    border: none;
                    color: #fff;

                    &.map-btn-cancel {
                        background: #c2c2c2;
                        margin-right: 10px;
                    }

                    &.map-btn-submit {
                        background: #0AAF38;
                    }
                }
            }

            .clear-all {
                text-align: center;
                color: #bbbbbb;

                span {
                    cursor: pointer;
                    padding: 0 10px;
                }
            }
        }
        .z_amapSearch {
            position: fixed;
            left: 15px;
            top: 15px;
            width: 360px;
            z-index: 100001;

            .z_amapSearch_input {
                box-shadow: 0 2px 2px rgba(0, 0, 0, .15);
                background-color: #ffffff;
                border: none;
                height: 45px;
                line-height: 45px;

                input {
                    border: none;
                    border-radius: 0;
                    margin-left: 10px;
                    width: 325px
                }

                .el-input__prefix {
                    img {
                        margin-top: 10px;
                    }
                }

                .el-input__suffix {
                    width: 45px;
                    height: 45px;

                    .el-input__suffix-inner {
                        width: 45px;
                        height: 45px;
                        display: block;

                        .el-icon-search {
                            width: 45px;
                            height: 45px;
                            font-size: 18px;
                            display: block;
                            line-height: 45px;
                            cursor: pointer;

                            &:hover {
                                color: #b51c22;
                            }
                        }
                    }

                }
            }

            .z_amapSearch_panel {
                margin-top: 4px;

                .amap_lib_placeSearch {
                    border: none;
                    box-shadow: 1px 2px 1px rgba(0, 0, 0, .15);
                }

                .amap_lib_placeSearch_poi {
                    background: transparent;
                    color: #565656;
                }
            }
        }
        .maptrackBtns{
            position: absolute;
            right: 0;
            bottom: 0;
            background-color: rgba(255,255,255,0.5);
            padding:10px;
            box-shadow: 0 0 5px rgba(0,0,0,0.2);
        }
        .addressListBox {
            max-height: ~"calc(100% - 55px)";
            overflow-x: hidden;

            .addressList {
                padding-bottom: 10px;
                padding-top: 10px;
                padding-right: 10px;
                line-height: initial !important;

                .row_right {
                    text-align: right;

                    .el-icon-error {
                        cursor: pointer;
                        color: #999999;

                        &:hover {
                            color: #000000;
                        }
                    }
                }

                & + .addressList {
                    border-top: 1px dashed #999999;
                }

            }
        }
        .map-marker-tip-content {
            padding: 10px 0;

            .list {
                margin-top: 10px;
                overflow: hidden;

                .name {
                    display: block;
                    width: 80px;
                    text-align: right;
                    color: #909090;
                    float: left;
                }

                .content {
                    margin-left: 90px;
                    display: block;
                    float: none;
                }
            }

            .bottom {
                width: 150px;
                text-align: center;
                line-height: 30px;
                -webkit-border-radius: 20px;
                -moz-border-radius: 20px;
                border-radius: 20px;
                background: #495dff;
                cursor: pointer;
                color: #ffffff;
                margin: 20px auto 0;
            }
            &.wadi{
                width:300px;
                .list {
                    .name{
                        text-align: left;
                    }
                    &.title{
                        position: relative;
                        height: 22px;
                        .name{
                            width: 100%;
                            h4{
                                color: #000000;
                                text-align: left;
                            }
                        }
                        .content {
                            position: absolute;
                            right:0;
                            top:50%;
                            transform: translateY(-50%);
                            background: #FE560D;
                            display: block;
                            padding: 0 14px;
                            line-height: 22px;
                            color: #fff;
                            font-size: 12px;
                            -webkit-border-radius: 20px;
                            -moz-border-radius: 20px;
                            border-radius: 20px;
                            min-width: 34px;
                            max-height: 22px;
                            cursor: pointer;
                        }
                    }
                }
                .bottom{
                    width: 100px;
                    height: 28px;
                    background: rgba(255,64,64,1);
                    cursor: pointer;
                    box-shadow: 0px 4px 10px 0px rgba(255, 101, 101, 0.35);
                    border-radius: 4px;
                    border: none;
                    color: #fff;
                    bottom: 20px;
                }
            }
        }
        .mapContainer{
            width: 100%;
            height: 100%;
            background-color: #ffffff;
        }
        .search-map-wrap {
            position: absolute;
            right: 10px;
            top: 20px;
            width: 242px;
            height: ~"calc(100% - 40px)";
            z-index: 200;
            .search-map-top {
                width: 100%;
                height: 104px;
                background: #fff;
                padding: 10px;
                box-sizing: border-box;
                .map-search-btn {
                    padding: 13px !important;
                    background: #0AAF38;
                    color: #fff;
                    border-radius: 0;
                }
                .menu-selection {
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    width: 100%;
                    margin-top: 20px;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    > li {
                        text-align: center;
                        height: 20px;
                        line-height: 20px;
                        width: 100%;
                        cursor: pointer;
                        // 下箭头
                        .down-arrow {
                            position: relative;
                        }
                        .down-arrow::after {
                            content: " ";
                            height: 6px;
                            width: 6px;
                            border-width: 2px 2px 0 0;
                            border-color: #666;
                            border-style: solid;
                            -webkit-transform: rotate(135deg);
                            transform: rotate(135deg);
                            position: absolute;
                            margin-top: -4px;
                            top: 50%;
                            right: -15px;
                        }

                    }
                    > li:first-child {
                        border-right: 1px solid #ccc;
                    }
                    .menu-active {
                        color: #FF4040;
                        // 加上active旋转成 上箭头
                        .down-arrow::after {
                            transform-origin: center;
                            transform: rotate(-45deg);
                            transition: transform .3s;
                            top: 11px;
                        }
                    }
                }

                .map-search-box {
                    .region-box {
                        width: 395px;
                        height: 317px;
                        z-index: 12;
                        position: relative;
                        background: #fff;
                        border: 1px solid rgba(240, 240, 240, 1);
                        left: 110px;
                        top: 10px;
                        display: flex;
                        flex-direction: row;
                        .left-nav-box {
                            overflow: hidden;
                            width: 73px;
                            .left-nav-list {
                                width: 73px;
                                height: 100%;
                                background: #F0F0F0;
                                overflow-y: scroll;
                                padding-right: 13px;
                                li {
                                    width: 100%;
                                    height: 28px;
                                    line-height: 28px;
                                    text-align: center;
                                    cursor: pointer;
                                }
                                li:hover {
                                    background: #fff;
                                }
                                .left-nav-hover {
                                    background: #fff;
                                }
                            }
                        }
                        .region-street-box {
                            width: 100%;
                            height: 100%;
                            padding: 20px 10px;
                            box-sizing: border-box;
                            .region-name {
                                padding-left: 13px;
                                margin-bottom: 15px;
                            }
                            .region-street {
                                li {
                                    padding: 0 13px;
                                    position: relative;
                                    display: inline-block;
                                    margin-bottom: 15px;
                                    color: #333;
                                    cursor: pointer;
                                }
                                li:after {
                                    content: ' ';
                                    display: block;
                                    width: 1px;
                                    height: 14px;
                                    background: #ccc;
                                    position: absolute;
                                    right: 0;
                                    top: 0;
                                }
                                .street-active {
                                    color: #FF4040;
                                }
                                li:hover {
                                    cursor: pointer;
                                    text-decoration: underline;
                                }
                            }
                        }
                    }
                }
            }
            .search-map-content {
                margin-top: 10px;
                width: 100%;
                height: 200px;
                height: ~"calc(100% - 104px)";
                box-sizing: border-box;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                overflow: hidden;
                position: relative;
                .search-map-header {
                    background: #fff;
                    padding: 20px;
                    img {
                        vertical-align: middle;
                    }
                    span {
                        color: #666;
                    }
                    .nearby-channel-text {
                        font-size: 16px;
                        margin: 0 14px;
                    }
                }
                .nearby-list-box {
                    background: #fff;
                    max-height: 217px;
                    max-height:  ~"calc(100% - 24px - 40px)";
                    position: absolute;
                    overflow-y: scroll;
                    width: 100%;
                    padding-right: 30px;
                    .nearby-list {
                        margin-top: 10px;
                        li {
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: space-between;
                            border-bottom: 1px solid #F5F5F5;
                            padding: 10px 20px;
                            position: relative;
                            cursor: pointer;
                            > span:first-child {
                                color: #333;
                            }
                            > span:last-child {
                                padding-right: 10px;
                            }
                        }
                        li:after {
                            content: " ";
                            height: 6px;
                            width: 6px;
                            border-width: 1px 1px 0 0;
                            border-color: #666;
                            border-style: solid;
                            -webkit-transform: rotate(45deg);
                            transform: rotate(45deg);
                            position: absolute;
                            margin-top: -3px;
                            top: 50%;
                            right: 20px;
                        }
                    }

                }
            }

        }
        &.relative{
            position: absolute;
            z-index: initial;
            .toolbar,.z_amapSearch{
                display: none;
            }
        }
    }
    .draggable{
        cursor: pointer;
        margin-top: @unit15;
        li{
            line-height: 40px;
            padding:0 @unit15;
            &:hover{
                background-color: #d8d8d8;
            }
            .el-icon-error{
                float: right;
                font-size: 16px;
                color: #ababab;
                line-height: 40px;
                &:hover{
                    color: #000000;
                }
            }
        }
    }
</style>
