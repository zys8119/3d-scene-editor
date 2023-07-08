var __awaiter = function (thisArg, _arguments, P, generator) {
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
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { computed, defineComponent, ref } from 'vue';
import { useConfig, useTheme } from '../../../_mixins';
import style from './styles/index.cssr';
import { mapLight } from '../styles';
import { useMemo } from 'vooks';
import { useRoute } from 'vue-router';
import { NInput } from '../../../input';
import { NButton } from '../../../button';
import { NSpace } from '../../../space';
import { NIcon } from '../../../icon';
import { MdCloseCircle } from '@vicons/ionicons4';
import { NLayout, NLayoutContent, NLayoutFooter } from '../../../layout';
import { get } from 'lodash-es';
import { useMouseInElement } from '@vueuse/core';
import { watchEffect, watch, onMounted, onUnmounted, h } from 'vue';
export const mapProps = Object.assign(Object.assign({}, useTheme.props), {
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
export default defineComponent({
    name: 'Map',
    props: mapProps,
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
        const container = ref();
        const { mergedClsPrefixRef } = useConfig(props);
        const route = useRoute();
        const searchChangeList = ref([]);
        const searchChange = (v) =>
            __awaiter(this, void 0, void 0, function* () {
                placeSearchServe.value.search(v, (status, res) => {
                    searchChangeList.value = get(res, 'poiList.pois', []);
                });
            });
        const panelListSet = ref(/* @__PURE__ */ new Map());
        const panelList = computed(() => [...panelListSet.value.values()]);
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
        const searchElRef = ref();
        const { isOutside } = useMouseInElement(container);
        const getAddress = (lnglat) => {
            map.value.setCenter(lnglat);
            geocoderServe.value.getAddress(lnglat, (status, res) => {
                emit('move', lnglat, res.regeocode);
                searchChangeList.value = get(res, 'regeocode.pois', []);
            });
        };
        const themeName = computed(
            () => useMemo(() => route.params.theme).value
        );
        const placeSearchServe = ref();
        const geocoderServe = ref();
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
        const map = ref();
        const currentAddressInfo = ref(null);
        const showTipPoint = ref(false);
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
        const themeRef = useTheme(
            'Map',
            '-map',
            style,
            mapLight,
            props,
            mergedClsPrefixRef
        );
        const cssVarsRef = computed(() => {
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
                      h(NInput, {
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
                          NLayout,
                          { position: 'absolute', nativeScrollbar: false },
                          {
                              default: () => [
                                  h(
                                      NLayoutContent,
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
                                                                NIcon,
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
                                                                                MdCloseCircle,
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
                                      NLayoutFooter,
                                      {
                                          position: 'absolute',
                                          bordered: true,
                                          class: `${mergedClsPrefix}-map-panel__footer`,
                                      },
                                      {
                                          default: () =>
                                              h(
                                                  NSpace,
                                                  { justify: 'space-between' },
                                                  {
                                                      default: () => [
                                                          h(
                                                              NButton,
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
                                                              NButton,
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
