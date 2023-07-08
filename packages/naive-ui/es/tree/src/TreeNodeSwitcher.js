import { h, defineComponent, inject } from 'vue';
import { SwitcherIcon } from '../../_internal/icons';
import {
    NIconSwitchTransition,
    NBaseLoading,
    NBaseIcon,
} from '../../_internal';
import { treeInjectionKey } from './interface';
export default defineComponent({
    name: 'NTreeSwitcher',
    props: {
        clsPrefix: {
            type: String,
            required: true,
        },
        expanded: Boolean,
        selected: Boolean,
        hide: Boolean,
        loading: Boolean,
        onClick: Function,
    },
    setup(props) {
        const { renderSwitcherIconRef } = inject(treeInjectionKey, null);
        return () => {
            const { clsPrefix } = props;
            return h(
                'span',
                {
                    'data-switcher': true,
                    class: [
                        `${clsPrefix}-tree-node-switcher`,
                        props.expanded &&
                            `${clsPrefix}-tree-node-switcher--expanded`,
                        props.hide && `${clsPrefix}-tree-node-switcher--hide`,
                    ],
                    onClick: props.onClick,
                },
                h(
                    'div',
                    { class: `${clsPrefix}-tree-node-switcher__icon` },
                    h(NIconSwitchTransition, null, {
                        default: () => {
                            if (props.loading) {
                                return h(NBaseLoading, {
                                    clsPrefix,
                                    key: 'loading',
                                    radius: 85,
                                    strokeWidth: 20,
                                });
                            }
                            const { value: renderSwitcherIcon } =
                                renderSwitcherIconRef;
                            return renderSwitcherIcon
                                ? renderSwitcherIcon({
                                      expanded: props.expanded,
                                      selected: props.selected,
                                  })
                                : h(
                                      NBaseIcon,
                                      { clsPrefix, key: 'switcher' },
                                      { default: () => h(SwitcherIcon, null) }
                                  );
                        },
                    })
                )
            );
        };
    },
});
