import { h, defineComponent, toRef } from 'vue';
import { resolveSlot } from '../../../_utils';
import { useStyle } from '../../../_mixins';
import { ClearIcon } from '../../icons';
import { NBaseIcon } from '../../icon';
import NIconSwitchTransition from '../../icon-switch-transition';
import style from './styles/index.cssr';
export default defineComponent({
    name: 'BaseClear',
    props: {
        clsPrefix: {
            type: String,
            required: true,
        },
        show: Boolean,
        onClear: Function,
    },
    setup(props) {
        useStyle('-base-clear', style, toRef(props, 'clsPrefix'));
        return {
            handleMouseDown(e) {
                e.preventDefault();
            },
        };
    },
    render() {
        const { clsPrefix } = this;
        return h(
            'div',
            { class: `${clsPrefix}-base-clear` },
            h(NIconSwitchTransition, null, {
                default: () => {
                    var _a, _b;
                    return this.show
                        ? h(
                              'div',
                              {
                                  key: 'dismiss',
                                  class: `${clsPrefix}-base-clear__clear`,
                                  onClick: this.onClear,
                                  onMousedown: this.handleMouseDown,
                                  'data-clear': true,
                              },
                              resolveSlot(this.$slots.icon, () => [
                                  h(
                                      NBaseIcon,
                                      { clsPrefix },
                                      {
                                          default: () => h(ClearIcon, null),
                                      }
                                  ),
                              ])
                          )
                        : h(
                              'div',
                              {
                                  key: 'icon',
                                  class: `${clsPrefix}-base-clear__placeholder`,
                              },
                              (_b = (_a = this.$slots).placeholder) === null ||
                                  _b === void 0
                                  ? void 0
                                  : _b.call(_a)
                          );
                },
            })
        );
    },
});
