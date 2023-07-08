import { h, provide, defineComponent, computed } from 'vue';
import { useConfig, useTheme } from '../../../_mixins';
import { rotateAlbumLight } from '../styles';
import { rotateAlbumInjectionKey } from './interface';
import style from './styles/index.cssr';
export const rotateAlbum3dProps = {
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
const RotateAlbum3d = defineComponent({
    name: 'RotateAlbum3d',
    props: rotateAlbum3dProps,
    setup(props) {
        const { mergedClsPrefixRef } = useConfig(props);
        const themeRef = useTheme(
            'RotateAlbum',
            '-rotate-album',
            style,
            rotateAlbumLight,
            props,
            mergedClsPrefixRef
        );
        provide(rotateAlbumInjectionKey, {
            mergedThemeRef: themeRef,
            mergedClsPrefixRef,
        });
        const cssVarsRef = computed(() => {
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
        return h(
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
                      return h(
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
export default RotateAlbum3d;
