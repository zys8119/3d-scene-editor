const { watchEffect, watch, onMounted, onUnmounted, h } = require('vue');
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected);
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            );
        });
    };
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.mapProps = void 0;
const vue_1 = require('vue');
const _mixins_1 = require('../../../_mixins');
const index_cssr_1 = __importDefault(require('./styles/index.cssr'));
const styles_1 = require('../styles');
const vooks_1 = require('vooks');
const vue_router_1 = require('vue-router');
const input_1 = require('../../../input');
const button_1 = require('../../../button');
const space_1 = require('../../../space');
const icon_1 = require('../../../icon');
const ionicons4_1 = require('@vicons/ionicons4');
const layout_1 = require('../../../layout');
const lodash_1 = require('lodash');
const core_1 = require('@vueuse/core');
exports.mapProps = Object.assign(Object.assign({}, _mixins_1.useTheme.props), {
    mapJsUrl: {
        type: String,
        default: 'https://webapi.amap.com/maps?v=2.0',
    },
    mapJsUrlParams: Object,
    webServerKey: {
        type: String,
        default: '410d4d222206abddd5d0fd0f24abc1ec',
    },
    jsApiKey: {
        type: String,
        default: '61a496760aa7ea804b0ec46d9b7bee45',
    },
    jsApiSecret: {
        type: String,
        default: '82df1d59e4b23a3f2d39c335b4fde725',
    },
    width: {
        type: String,
        default: '100%',
    },
    height: {
        type: String,
        default: '300px',
    },
    zoom: {
        type: Number,
        default: 15,
    },
    center: {
        type: Array || null,
        default: null,
    },
    selfMapStyle: {
        type: String || null,
        default: null,
    },
    mapStyle: {
        type: String,
        default: 'normal',
    },
    markers: {
        type: Array,
        default: () => [],
    },
    isSelect: {
        type: Boolean,
        default: false,
    },
    pointIcon: {
        type: String,
        default:
            'https://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
    },
    pointIconWidth: {
        type: Number,
        default: 25,
    },
    pointIconHeight: {
        type: Number,
        default: 30,
    },
    pointIconOffsetLeft: {
        type: Number,
        default: -12,
    },
    pointIconOffsetTop: {
        type: Number,
        default: -15,
    },
    radius: {
        type: Number,
        default: 300,
    },
    showLabel: {
        type: Boolean,
        default: true,
    },
    tag: {
        type: String,
        default: 'div',
    },
    showSearch: {
        type: Boolean,
        default: false,
    },
    showPanel: {
        type: Boolean,
        default: false,
    },
    modelValue: {
        type: Array,
        default: () => [],
    },
});
exports.default = (0, vue_1.defineComponent)({
    name: 'Map',
    props: exports.mapProps,
    emits: {
        load: (map) => map,
        getCurrentAddress: (info) => info,
        move: (point, info) => ({
            point,
            info,
        }),
        searchClick: (info) => true,
        closePanel: () => true,
        savePanel: (info) => true,
        'update:modelValue': (info) => true,
    },
    setup(props, { slots, expose, emit }) {
        const container = (0, vue_1.ref)();
        const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props);
        const route = (0, vue_router_1.useRoute)();
        const searchChangeList = (0, vue_1.ref)([]);
        const searchChange = (v) =>
            __awaiter(this, void 0, void 0, function* () {
                placeSearchServe.value.search(v, (status, res) => {
                    searchChangeList.value = (0, lodash_1.get)(
                        res,
                        'poiList.pois',
                        []
                    );
                });
            });
        const panelListSet = (0, vue_1.ref)(/* @__PURE__ */ new Map());
        const panelList = (0, vue_1.computed)(() => [
            ...panelListSet.value.values(),
        ]);
        const deletePanelList = (c, ev) => {
            ev.stopPropagation();
            panelListSet.value.delete(
                [c.location.lng, c.location.lat].toString()
            );
            emit('update:modelValue', panelList.value);
        };
        const searchClick = (c, notSetCenter, move) =>
            __awaiter(this, void 0, void 0, function* () {
                const center = [c.location.lng, c.location.lat];
                if (move) {
                    return map.value.setCenter(center);
                }
                panelListSet.value.set(center.toString(), c);
                if (!notSetCenter) {
                    map.value.setCenter(center);
                    emit('searchClick', c);
                    emit('update:modelValue', panelList.value);
                }
            });
        watchEffect(() => {
            if (props.modelValue) {
                panelListSet.value.clear();
                if (
                    Object.prototype.toString.call(props.modelValue) ===
                    '[object Array]'
                ) {
                    props.modelValue.forEach((e) => {
                        searchClick(e, true);
                    });
                }
            }
        });
        const searchElRef = (0, vue_1.ref)();
        const { isOutside } = (0, core_1.useMouseInElement)(container);
        const getAddress = (lnglat) => {
            map.value.setCenter(lnglat);
            geocoderServe.value.getAddress(lnglat, (status, res) => {
                emit('move', lnglat, res.regeocode);
                searchChangeList.value = (0, lodash_1.get)(
                    res,
                    'regeocode.pois',
                    []
                );
            });
        };
        const themeName = (0, vue_1.computed)(
            () => (0, vooks_1.useMemo)(() => route.params.theme).value
        );
        const placeSearchServe = (0, vue_1.ref)();
        const geocoderServe = (0, vue_1.ref)();
        const loadMapJs = () => {
            window._AMapSecurityConfig = {
                securityJsCode: props.jsApiSecret,
            };
            let _url = props.mapJsUrl.includes('?')
                ? `${props.mapJsUrl}&key=${props.jsApiKey}`
                : `${props.mapJsUrl}?key=${props.jsApiKey}`;
            if (props.mapJsUrlParams) {
                const str = Object.keys(props.mapJsUrlParams)
                    .map((k) => {
                        var _a;
                        return `${k}=${
                            (_a = props.mapJsUrlParams) === null ||
                            _a === void 0
                                ? void 0
                                : _a[k]
                        }`;
                    })
                    .join('&');
                _url = _url + `&${str}`;
            }
            (function isAMap() {
                if (window.AMap) initMap();
                else {
                    setTimeout(() => {
                        isAMap();
                    }, 100);
                }
            })();
            if (document.getElementById('mapScript')) return;
            const jsapi = document.createElement('script');
            jsapi.src = _url;
            jsapi.id = 'mapScript';
            document.head.appendChild(jsapi);
        };
        const map = (0, vue_1.ref)();
        const currentAddressInfo = (0, vue_1.ref)(null);
        const showTipPoint = (0, vue_1.ref)(false);
        function initMap() {
            var _a;
            (_a = map.value) === null || _a === void 0 ? void 0 : _a.destroy();
            map.value = new AMap.Map(container.value, {
                resizeEnable: true,
                zoom: props.zoom,
                center: props.center,
                mapStyle:
                    props.selfMapStyle ||
                    `amap://styles/${
                        themeName.value === 'dark' ? 'dark' : props.mapStyle
                    }`,
                showLabel: props.showLabel,
            });
            map.value.on('complete', () => {
                emit('load', map.value);
                if (props.isSelect) initCenterPoint();
                if (props.markers.length > 0) setMarkers();
            });
            if (props.isSelect) {
                map.value.on('click', (ev) => {
                    getAddress(ev.lnglat);
                });
            }
            AMap.plugin(
                [
                    'AMap.Geolocation',
                    'AMap.CitySearch',
                    'AMap.Geocoder',
                    'AMap.PlaceSearch',
                ],
                function () {
                    const geolocation = new AMap.Geolocation();
                    geolocation.getCurrentPosition((status, res) => {
                        if (status === 'error') {
                            const citysearch = new AMap.CitySearch();
                            citysearch.getLocalCity((status2, res2) => {
                                if (status2 === 'complete') {
                                    currentAddressInfo.value = res2;
                                    emit(
                                        'getCurrentAddress',
                                        currentAddressInfo.value
                                    );
                                }
                            });
                        } else currentAddressInfo.value = res;
                    });
                    placeSearchServe.value = new AMap.PlaceSearch({
                        extensions: 'all',
                    });
                    geocoderServe.value = new AMap.Geocoder({
                        extensions: 'all',
                    });
                }
            );
        }
        function initCenterPoint() {
            const getMapCenterPoint = () => {
                map.value.clearMap();
                const centerPoint = map.value.getCenter();
                new AMap.Marker({
                    icon: new AMap.Icon({
                        image: props.pointIcon,
                        imageSize: new AMap.Size(
                            props.pointIconWidth,
                            props.pointIconHeight
                        ),
                    }),
                    position: [centerPoint.lng, centerPoint.lat],
                    offset: new AMap.Pixel(
                        props.pointIconOffsetLeft,
                        props.pointIconOffsetTop
                    ),
                    map: map.value,
                });
                getAddress(centerPoint);
            };
            const movestartFn = () => {
                showTipPoint.value = true;
                map.value.clearMap();
            };
            const moveendFn = () => {
                showTipPoint.value = false;
                getMapCenterPoint();
            };
            const mapBindFn = () => {
                map.value.on('movestart', movestartFn);
                map.value.on('moveend', moveendFn);
                map.value.on('mapmove', movestartFn);
                map.value.on('mouseup', () => {
                    showTipPoint.value = false;
                });
                map.value.on('mouseout', () => {
                    showTipPoint.value = false;
                });
                map.value.on('touchend', () => {
                    showTipPoint.value = false;
                });
                map.value.on('zoomchange', () => {
                    showTipPoint.value = false;
                });
            };
            getMapCenterPoint();
            mapBindFn();
        }
        function setMarkers() {
            for (let i = 0; i < props.markers.length; i++) {
                new AMap.Marker({
                    icon: new AMap.Icon({
                        image: props.pointIcon,
                        imageSize: new AMap.Size(
                            props.pointIconWidth,
                            props.pointIconHeight
                        ),
                    }),
                    position: props.markers[i],
                    map: map.value,
                });
                map.value.setFitView(null, false);
            }
        }
        watch(themeName, () => initMap());
        const themeRef = (0, _mixins_1.useTheme)(
            'Map',
            '-map',
            index_cssr_1.default,
            styles_1.mapLight,
            props,
            mergedClsPrefixRef
        );
        const cssVarsRef = (0, vue_1.computed)(() => {
            const {
                self: { padding },
            } = themeRef.value;
            return {
                '--n-padding': padding,
                width: props.width,
                height: props.height,
            };
        });
        onMounted(() => {
            loadMapJs();
        });
        onUnmounted(() => {
            var _a;
            (_a = map.value) === null || _a === void 0 ? void 0 : _a.destroy();
        });
        return {
            container,
            initMap,
            cssVarsRef,
            mergedClsPrefix: mergedClsPrefixRef,
            map,
            currentAddressInfo,
            showTipPoint,
            searchChange,
            searchClick,
            searchElRef,
            isOutside,
            searchChangeList,
            deletePanelList,
            panelList,
        };
    },
    render() {
        const { tag: Component, mergedClsPrefix } = this;
        const renderSearchList = () => {
            return !this.isOutside
                ? h(
                      'div',
                      { class: `${mergedClsPrefix}-map-search__list` },
                      this.searchChangeList.length === 0
                          ? h(
                                'div',
                                {
                                    class: `${mergedClsPrefix}-map-search__not-data`,
                                },
                                '\u6682\u65E0\u6570\u636E\uFF01'
                            )
                          : this.searchChangeList.map((e) => {
                                var _a, _b;
                                return (
                                    ((_b = (_a = this.$slots).search) ===
                                        null || _b === void 0
                                        ? void 0
                                        : _b.call(_a, e)) ||
                                    h(
                                        'div',
                                        {
                                            class: `${mergedClsPrefix}-map-search__item`,
                                            onClick: () =>
                                                __awaiter(
                                                    this,
                                                    void 0,
                                                    void 0,
                                                    function* () {
                                                        return yield this.searchClick(
                                                            e
                                                        );
                                                    }
                                                ),
                                        },
                                        h(
                                            'div',
                                            {
                                                class: `${mergedClsPrefix}-map-search__item__label`,
                                            },
                                            e.name
                                        ),
                                        h(
                                            'div',
                                            {
                                                class: `${mergedClsPrefix}-map-search__item__value`,
                                            },
                                            e.address
                                        )
                                    )
                                );
                            })
                  )
                : null;
        };
        return h(
            Component,
            {
                ref: 'container',
                class: `${mergedClsPrefix}-map`,
                style: this.cssVarsRef,
            },
            this.showTipPoint
                ? h(
                      'div',
                      { class: `${mergedClsPrefix}-tip-point` },
                      h('img', {
                          style: {
                              width: `${this.$props.pointIconWidth}px`,
                              height: `${this.$props.pointIconHeight}px`,
                          },
                          src: 'https://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png',
                          alt: '',
                      })
                  )
                : null,
            this.$props.showSearch
                ? h(
                      'div',
                      {
                          class: `${mergedClsPrefix}-map-search`,
                          ref: 'searchElRef',
                      },
                      h(input_1.NInput, {
                          round: true,
                          'onUpdate:value': this.searchChange,
                          clearable: true,
                      }),
                      renderSearchList()
                  )
                : null,
            this.$props.showPanel
                ? h(
                      'div',
                      { class: `${mergedClsPrefix}-map-panel` },
                      h(
                          layout_1.NLayout,
                          { position: 'absolute', nativeScrollbar: false },
                          {
                              default: () => [
                                  h(
                                      layout_1.NLayoutContent,
                                      { 'content-style': 'padding: 24px;' },
                                      {
                                          default: () =>
                                              this.panelList.length > 0
                                                  ? this.panelList.map((e) =>
                                                        h(
                                                            'div',
                                                            {
                                                                class: `${mergedClsPrefix}-map-panel__row`,
                                                                onClick: () =>
                                                                    __awaiter(
                                                                        this,
                                                                        void 0,
                                                                        void 0,
                                                                        function* () {
                                                                            return yield this.searchClick(
                                                                                e,
                                                                                false,
                                                                                true
                                                                            );
                                                                        }
                                                                    ),
                                                            },
                                                            h(
                                                                'div',
                                                                {
                                                                    class: `${mergedClsPrefix}-map-panel__row__name`,
                                                                },
                                                                e.name
                                                            ),
                                                            h(
                                                                'div',
                                                                {
                                                                    class: `${mergedClsPrefix}-map-panel__row__location`,
                                                                },
                                                                '(',
                                                                e.location.lng,
                                                                ' - ',
                                                                e.location.lat,
                                                                ')'
                                                            ),
                                                            h(
                                                                'div',
                                                                {
                                                                    class: `${mergedClsPrefix}-map-panel__row__address`,
                                                                },
                                                                e.address
                                                            ),
                                                            h(
                                                                icon_1.NIcon,
                                                                {
                                                                    class: `${mergedClsPrefix}-map-panel__row__icon`,
                                                                    onClick:
                                                                        this.deletePanelList.bind(
                                                                            null,
                                                                            e
                                                                        ),
                                                                },
                                                                {
                                                                    default:
                                                                        () =>
                                                                            h(
                                                                                ionicons4_1.MdCloseCircle,
                                                                                null
                                                                            ),
                                                                }
                                                            )
                                                        )
                                                    )
                                                  : h(
                                                        'div',
                                                        {
                                                            class: `${mergedClsPrefix}-map-panel__not-data`,
                                                        },
                                                        '\u6682\u65E0\u6570\u636E\uFF01'
                                                    ),
                                      }
                                  ),
                                  h(
                                      layout_1.NLayoutFooter,
                                      {
                                          position: 'absolute',
                                          bordered: true,
                                          class: `${mergedClsPrefix}-map-panel__footer`,
                                      },
                                      {
                                          default: () =>
                                              h(
                                                  space_1.NSpace,
                                                  { justify: 'space-between' },
                                                  {
                                                      default: () => [
                                                          h(
                                                              button_1.NButton,
                                                              {
                                                                  onClick: () =>
                                                                      this.$emit(
                                                                          'closePanel'
                                                                      ),
                                                              },
                                                              {
                                                                  default: () =>
                                                                      '\u5173\u95ED',
                                                              }
                                                          ),
                                                          h(
                                                              button_1.NButton,
                                                              {
                                                                  onClick: () =>
                                                                      this.$emit(
                                                                          'savePanel',
                                                                          this
                                                                              .panelList
                                                                      ),
                                                                  type: 'primary',
                                                              },
                                                              {
                                                                  default: () =>
                                                                      '\u786E\u5B9A',
                                                              }
                                                          ),
                                                      ],
                                                  }
                                              ),
                                      }
                                  ),
                              ],
                          }
                      )
                  )
                : null
        );
    },
});
