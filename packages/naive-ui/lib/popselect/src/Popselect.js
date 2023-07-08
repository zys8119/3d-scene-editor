const { ref } = require('vue');
var __createBinding =
    (this && this.__createBinding) ||
    (Object.create
        ? function (o, m, k, k2) {
              if (k2 === void 0) k2 = k;
              var desc = Object.getOwnPropertyDescriptor(m, k);
              if (
                  !desc ||
                  ('get' in desc
                      ? !m.__esModule
                      : desc.writable || desc.configurable)
              ) {
                  desc = {
                      enumerable: true,
                      get: function () {
                          return m[k];
                      },
                  };
              }
              Object.defineProperty(o, k2, desc);
          }
        : function (o, m, k, k2) {
              if (k2 === void 0) k2 = k;
              o[k2] = m[k];
          });
var __setModuleDefault =
    (this && this.__setModuleDefault) ||
    (Object.create
        ? function (o, v) {
              Object.defineProperty(o, 'default', {
                  enumerable: true,
                  value: v,
              });
          }
        : function (o, v) {
              o['default'] = v;
          });
var __importStar =
    (this && this.__importStar) ||
    function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
            for (var k in mod)
                if (
                    k !== 'default' &&
                    Object.prototype.hasOwnProperty.call(mod, k)
                )
                    __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.popselectProps = void 0;
const vue_1 = require('vue');
const Popover_1 = require('../../popover/src/Popover');
const popover_1 = require('../../popover');
const PopselectPanel_1 = __importStar(require('./PopselectPanel'));
const _utils_1 = require('../../_utils');
const _mixins_1 = require('../../_mixins');
const styles_1 = require('../styles');
const interface_1 = require('./interface');
exports.popselectProps = Object.assign(
    Object.assign(
        Object.assign(
            Object.assign({}, _mixins_1.useTheme.props),
            (0, _utils_1.omit)(Popover_1.popoverBaseProps, [
                'showArrow',
                'arrow',
            ])
        ),
        {
            placement: Object.assign(
                Object.assign({}, Popover_1.popoverBaseProps.placement),
                { default: 'bottom' }
            ),
            trigger: {
                type: String,
                default: 'hover',
            },
        }
    ),
    PopselectPanel_1.panelProps
);
exports.default = (0, vue_1.defineComponent)({
    name: 'Popselect',
    props: exports.popselectProps,
    inheritAttrs: false,
    __popover__: true,
    setup(props) {
        const themeRef = (0, _mixins_1.useTheme)(
            'Popselect',
            '-popselect',
            void 0,
            styles_1.popselectLight,
            props
        );
        const popoverInstRef = (0, vue_1.ref)(null);
        function syncPosition() {
            var _a;
            (_a = popoverInstRef.value) === null || _a === void 0
                ? void 0
                : _a.syncPosition();
        }
        function setShow(value) {
            var _a;
            (_a = popoverInstRef.value) === null || _a === void 0
                ? void 0
                : _a.setShow(value);
        }
        (0, vue_1.provide)(interface_1.popselectInjectionKey, {
            props,
            mergedThemeRef: themeRef,
            syncPosition,
            setShow,
        });
        const exposedMethods = {
            syncPosition,
            setShow,
        };
        return Object.assign(Object.assign({}, exposedMethods), {
            popoverInstRef,
            mergedTheme: themeRef,
        });
    },
    render() {
        const { mergedTheme } = this;
        const popoverProps = {
            theme: mergedTheme.peers.Popover,
            themeOverrides: mergedTheme.peerOverrides.Popover,
            builtinThemeOverrides: {
                padding: '0',
            },
            ref: 'popoverInstRef',
            internalRenderBody: (
                className,
                ref2,
                style,
                onMouseenter,
                onMouseleave
            ) => {
                const { $attrs } = this;
                return (0, vue_1.h)(
                    PopselectPanel_1.default,
                    Object.assign(
                        {},
                        $attrs,
                        {
                            class: [$attrs.class, className],
                            style: [$attrs.style, style],
                        },
                        (0, _utils_1.keep)(
                            this.$props,
                            PopselectPanel_1.panelPropKeys
                        ),
                        {
                            ref: (0, _utils_1.createRefSetter)(ref2),
                            onMouseenter: (0, _utils_1.mergeEventHandlers)([
                                onMouseenter,
                                $attrs.onMouseenter,
                            ]),
                            onMouseleave: (0, _utils_1.mergeEventHandlers)([
                                onMouseleave,
                                $attrs.onMouseleave,
                            ]),
                        }
                    ),
                    {
                        action: () => {
                            var _a, _b;
                            return (_b = (_a = this.$slots).action) === null ||
                                _b === void 0
                                ? void 0
                                : _b.call(_a);
                        },
                        empty: () => {
                            var _a, _b;
                            return (_b = (_a = this.$slots).empty) === null ||
                                _b === void 0
                                ? void 0
                                : _b.call(_a);
                        },
                    }
                );
            },
        };
        return (0, vue_1.h)(
            popover_1.NPopover,
            Object.assign(
                {},
                (0, _utils_1.omit)(this.$props, PopselectPanel_1.panelPropKeys),
                popoverProps,
                { internalDeactivateImmediately: true }
            ),
            {
                trigger: () => {
                    var _a, _b;
                    return (_b = (_a = this.$slots).default) === null ||
                        _b === void 0
                        ? void 0
                        : _b.call(_a);
                },
            }
        );
    },
});
