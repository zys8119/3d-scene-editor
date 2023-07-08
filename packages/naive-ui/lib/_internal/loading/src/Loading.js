var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const vue_1 = require('vue');
const _mixins_1 = require('../../../_mixins');
const icon_switch_transition_1 = __importDefault(
    require('../../icon-switch-transition')
);
const index_cssr_1 = __importDefault(require('./styles/index.cssr'));
const exposedLoadingProps = {
    strokeWidth: {
        type: Number,
        default: 28,
    },
    stroke: {
        type: String,
        default: void 0,
    },
};
exports.default = (0, vue_1.defineComponent)({
    name: 'BaseLoading',
    props: Object.assign(
        {
            clsPrefix: {
                type: String,
                required: true,
            },
            show: {
                type: Boolean,
                default: true,
            },
            scale: {
                type: Number,
                default: 1,
            },
            radius: {
                type: Number,
                default: 100,
            },
        },
        exposedLoadingProps
    ),
    setup(props) {
        (0, _mixins_1.useStyle)(
            '-base-loading',
            index_cssr_1.default,
            (0, vue_1.toRef)(props, 'clsPrefix')
        );
    },
    render() {
        const { clsPrefix, radius, strokeWidth, stroke, scale } = this;
        const scaledRadius = radius / scale;
        return (0, vue_1.h)(
            'div',
            {
                class: `${clsPrefix}-base-loading`,
                role: 'img',
                'aria-label': 'loading',
            },
            (0, vue_1.h)(icon_switch_transition_1.default, null, {
                default: () =>
                    this.show
                        ? (0, vue_1.h)(
                              'div',
                              {
                                  key: 'icon',
                                  class: `${clsPrefix}-base-loading__transition-wrapper`,
                              },
                              (0, vue_1.h)(
                                  'div',
                                  {
                                      class: `${clsPrefix}-base-loading__container`,
                                  },
                                  (0, vue_1.h)(
                                      'div',
                                      {
                                          class: `${clsPrefix}-base-loading__container-layer`,
                                      },
                                      (0, vue_1.h)(
                                          'div',
                                          {
                                              class: `${clsPrefix}-base-loading__container-layer-left`,
                                          },
                                          (0, vue_1.h)(
                                              'svg',
                                              {
                                                  class: `${clsPrefix}-base-loading__svg`,
                                                  viewBox: `0 0 ${
                                                      2 * scaledRadius
                                                  } ${2 * scaledRadius}`,
                                                  xmlns: 'http://www.w3.org/2000/svg',
                                                  style: { color: stroke },
                                              },
                                              (0, vue_1.h)('circle', {
                                                  fill: 'none',
                                                  stroke: 'currentColor',
                                                  'stroke-width': strokeWidth,
                                                  'stroke-linecap': 'round',
                                                  cx: scaledRadius,
                                                  cy: scaledRadius,
                                                  r: radius - strokeWidth / 2,
                                                  'stroke-dasharray':
                                                      4.91 * radius,
                                                  'stroke-dashoffset':
                                                      2.46 * radius,
                                              })
                                          )
                                      ),
                                      (0, vue_1.h)(
                                          'div',
                                          {
                                              class: `${clsPrefix}-base-loading__container-layer-patch`,
                                          },
                                          (0, vue_1.h)(
                                              'svg',
                                              {
                                                  class: `${clsPrefix}-base-loading__svg`,
                                                  viewBox: `0 0 ${
                                                      2 * scaledRadius
                                                  } ${2 * scaledRadius}`,
                                                  xmlns: 'http://www.w3.org/2000/svg',
                                                  style: { color: stroke },
                                              },
                                              (0, vue_1.h)('circle', {
                                                  fill: 'none',
                                                  stroke: 'currentColor',
                                                  'stroke-width': strokeWidth,
                                                  'stroke-linecap': 'round',
                                                  cx: scaledRadius,
                                                  cy: scaledRadius,
                                                  r: radius - strokeWidth / 2,
                                                  'stroke-dasharray':
                                                      4.91 * radius,
                                                  'stroke-dashoffset':
                                                      2.46 * radius,
                                              })
                                          )
                                      ),
                                      (0, vue_1.h)(
                                          'div',
                                          {
                                              class: `${clsPrefix}-base-loading__container-layer-right`,
                                          },
                                          (0, vue_1.h)(
                                              'svg',
                                              {
                                                  class: `${clsPrefix}-base-loading__svg`,
                                                  viewBox: `0 0 ${
                                                      2 * scaledRadius
                                                  } ${2 * scaledRadius}`,
                                                  xmlns: 'http://www.w3.org/2000/svg',
                                                  style: { color: stroke },
                                              },
                                              (0, vue_1.h)('circle', {
                                                  fill: 'none',
                                                  stroke: 'currentColor',
                                                  'stroke-width': strokeWidth,
                                                  'stroke-linecap': 'round',
                                                  cx: scaledRadius,
                                                  cy: scaledRadius,
                                                  r: radius - strokeWidth / 2,
                                                  'stroke-dasharray':
                                                      4.91 * radius,
                                                  'stroke-dashoffset':
                                                      2.46 * radius,
                                              })
                                          )
                                      )
                                  )
                              )
                          )
                        : (0, vue_1.h)(
                              'div',
                              {
                                  key: 'placeholder',
                                  class: `${clsPrefix}-base-loading__placeholder`,
                              },
                              this.$slots
                          ),
            })
        );
    },
});
