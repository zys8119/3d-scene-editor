var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.rotateAlbum3dProps = void 0;
const vue_1 = require('vue');
const _mixins_1 = require('../../../_mixins');
const styles_1 = require('../styles');
const interface_1 = require('./interface');
const index_cssr_1 = __importDefault(require('./styles/index.cssr'));
exports.rotateAlbum3dProps = {
    list: Array,
    xDeg: String,
    size: {
        type: Number,
        default: 300,
    },
    duration: {
        type: Number,
        default: 20,
    },
    hoverToStop: {
        type: Boolean,
        default: true,
    },
};
const RotateAlbum3d = (0, vue_1.defineComponent)({
    name: 'RotateAlbum3d',
    props: exports.rotateAlbum3dProps,
    setup(props) {
        const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props);
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
                '--n-rotate-album-3d-duration': `${props.duration}s`,
                '--n-rotate-album-3d-x-deg': props.xDeg,
            };
        });
        return {
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
                    `${mergedClsPrefix}-rotate-album-3d`,
                    {
                        [`${mergedClsPrefix}-rotate-album-3d--hover-to-stop`]:
                            this.hoverToStop,
                    },
                ],
                style: this.cssVars,
            },
            (_a = this.list) === null || _a === void 0
                ? void 0
                : _a.map((item, index) => {
                      var _a2, _b, _c;
                      return (0, vue_1.h)(
                          'div',
                          {
                              key: index,
                              class: `${mergedClsPrefix}-rotate-album-3d-cell`,
                              style: {
                                  transform: `rotateY(${
                                      (360 /
                                          (((_a2 = this.list) === null ||
                                          _a2 === void 0
                                              ? void 0
                                              : _a2.length) || 0)) *
                                      (index + 1)
                                  }deg) translateZ(${this.size}px)`,
                              },
                          },
                          (_c = (_b = this.$slots).default) === null ||
                              _c === void 0
                              ? void 0
                              : _c.call(_b, { item })
                      );
                  })
        );
    },
});
exports.default = RotateAlbum3d;
