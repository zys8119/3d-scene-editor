var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.rotateAlbumProps = void 0;
const vue_1 = require('vue');
const core_1 = require('@vueuse/core');
const _mixins_1 = require('../../../_mixins');
const index_cssr_1 = __importDefault(require('./styles/index.cssr'));
const interface_1 = require('./interface');
const styles_1 = require('../styles');
exports.rotateAlbumProps = {
    list: Array,
    duration: {
        type: Number,
        default: 20,
    },
    hoverToStop: {
        type: Boolean,
        default: true,
    },
    showPath: Boolean,
    pathColor: {
        type: String,
        default: 'red',
    },
    pathWidth: {
        type: Number,
        default: 2,
    },
};
const RotateAlbum = (0, vue_1.defineComponent)({
    name: 'RotateAlbum',
    props: exports.rotateAlbumProps,
    setup(props) {
        const elementRef = (0, vue_1.ref)();
        const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props);
        const { width, height } = (0, core_1.useElementSize)(elementRef);
        const path = (0, vue_1.computed)(() => {
            return `M0 ${height.value / 2} a${width.value / 2} ${
                height.value / 2
            } 0 1 0 ${width.value} 0 a${width.value / 2} ${
                height.value / 2
            } 0 1 0 -${width.value} 0z`;
        });
        const themeRef = (0, _mixins_1.useTheme)(
            'RotateAlbum',
            '-rotate-album',
            index_cssr_1.default,
            styles_1.rotateAlbumLight,
            props,
            mergedClsPrefixRef
        );
        (0, vue_1.provide)(interface_1.rotateAlbumInjectionKey, {
            mergedThemeRef: themeRef,
            mergedClsPrefixRef,
        });
        const cssVarsRef = (0, vue_1.computed)(() => {
            return {
                '--n-rotate-album-duration': `${props.duration}s`,
                '--n-rotate-album-offset-path': `path("${path.value}")`,
            };
        });
        return {
            elementRef,
            path,
            width,
            height,
            mergedClsPrefix: mergedClsPrefixRef,
            cssVars: cssVarsRef,
        };
    },
    render() {
        var _a;
        const { mergedClsPrefix } = this;
        return (0, vue_1.h)(
            'div',
            {
                class: [
                    `${mergedClsPrefix}-rotate-album`,
                    {
                        [`${mergedClsPrefix}-rotate-album--hover-to-stop`]:
                            this.hoverToStop,
                    },
                ],
                style: this.cssVars,
                ref: 'elementRef',
            },
            this.showPath &&
                (0, vue_1.h)(
                    'svg',
                    {
                        width: this.width,
                        height: this.height,
                        viewBox: `0 0 ${this.width} ${this.height}`,
                        class: `${mergedClsPrefix}-rotate-album-path`,
                    },
                    (0, vue_1.h)('path', {
                        d: this.path,
                        stroke: this.pathColor,
                        'stroke-width': this.pathWidth,
                        fill: 'none',
                    })
                ),
            (_a = this.list) === null || _a === void 0
                ? void 0
                : _a.map((item, index) => {
                      var _a2, _b, _c, _d;
                      return (0, vue_1.h)(
                          'div',
                          {
                              key: index,
                              class: `${mergedClsPrefix}-rotate-album-cell`,
                              style: {
                                  animationDelay: `-${
                                      (this.duration /
                                          ((_b =
                                              (_a2 = this.list) === null ||
                                              _a2 === void 0
                                                  ? void 0
                                                  : _a2.length) !== null &&
                                          _b !== void 0
                                              ? _b
                                              : 0)) *
                                      index
                                  }s`,
                              },
                          },
                          (_d = (_c = this.$slots).default) === null ||
                              _d === void 0
                              ? void 0
                              : _d.call(_c, { item })
                      );
                  })
        );
    },
});
exports.default = RotateAlbum;
