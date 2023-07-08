import { h, ref, provide, computed, defineComponent } from 'vue';
import { useElementSize } from '@vueuse/core';
import { useConfig, useTheme } from '../../../_mixins';
import style from './styles/index.cssr';
import { rotateAlbumInjectionKey } from './interface';
import { rotateAlbumLight } from '../styles';
export const rotateAlbumProps = {
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
const RotateAlbum = defineComponent({
    name: 'RotateAlbum',
    props: rotateAlbumProps,
    setup(props) {
        const elementRef = ref();
        const { mergedClsPrefixRef } = useConfig(props);
        const { width, height } = useElementSize(elementRef);
        const path = computed(() => {
            return `M0 ${height.value / 2} a${width.value / 2} ${
                height.value / 2
            } 0 1 0 ${width.value} 0 a${width.value / 2} ${
                height.value / 2
            } 0 1 0 -${width.value} 0z`;
        });
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
        return h(
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
                h(
                    'svg',
                    {
                        width: this.width,
                        height: this.height,
                        viewBox: `0 0 ${this.width} ${this.height}`,
                        class: `${mergedClsPrefix}-rotate-album-path`,
                    },
                    h('path', {
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
                      return h(
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
export default RotateAlbum;
