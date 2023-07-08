import { h, defineComponent } from 'vue';
import NBaseClear from '../../clear';
import NBaseLoading from '../../loading';
import { NBaseIcon } from '../../icon';
import { ChevronDownIcon } from '../../icons';
import { resolveSlot } from '../../../_utils/vue';
export default defineComponent({
    name: 'InternalSelectionSuffix',
    props: {
        clsPrefix: {
            type: String,
            required: true,
        },
        showArrow: {
            type: Boolean,
            default: void 0,
        },
        showClear: {
            type: Boolean,
            default: void 0,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        onClear: Function,
    },
    setup(props, { slots }) {
        return () => {
            const { clsPrefix } = props;
            return h(
                NBaseLoading,
                {
                    clsPrefix,
                    class: `${clsPrefix}-base-suffix`,
                    strokeWidth: 24,
                    scale: 0.85,
                    show: props.loading,
                },
                {
                    default: () =>
                        props.showArrow
                            ? h(
                                  NBaseClear,
                                  {
                                      clsPrefix,
                                      show: props.showClear,
                                      onClear: props.onClear,
                                  },
                                  {
                                      placeholder: () =>
                                          h(
                                              NBaseIcon,
                                              {
                                                  clsPrefix,
                                                  class: `${clsPrefix}-base-suffix__arrow`,
                                              },
                                              {
                                                  default: () =>
                                                      resolveSlot(
                                                          slots.default,
                                                          () => [
                                                              h(
                                                                  ChevronDownIcon,
                                                                  null
                                                              ),
                                                          ]
                                                      ),
                                              }
                                          ),
                                  }
                              )
                            : null,
                }
            );
        };
    },
});
