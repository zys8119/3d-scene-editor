import { defineComponent, Fragment, h } from 'vue';
import { warn } from '../../_utils';
import NDropdownOption from './DropdownOption';
import NDropdownDivider from './DropdownDivider';
import NDropdownGroupHeader from './DropdownGroupHeader';
import { isDividerNode } from './utils';
export default defineComponent({
    name: 'NDropdownGroup',
    props: {
        clsPrefix: {
            type: String,
            required: true,
        },
        tmNode: {
            type: Object,
            required: true,
        },
        parentKey: {
            type: [String, Number],
            default: null,
        },
    },
    render() {
        const { tmNode, parentKey, clsPrefix } = this;
        const { children } = tmNode;
        return h(
            Fragment,
            null,
            h(NDropdownGroupHeader, { clsPrefix, tmNode, key: tmNode.key }),
            children === null || children === void 0
                ? void 0
                : children.map((child) => {
                      const { rawNode } = child;
                      if (rawNode.show === false) return null;
                      if (isDividerNode(rawNode)) {
                          return h(NDropdownDivider, {
                              clsPrefix,
                              key: child.key,
                          });
                      }
                      if (child.isGroup) {
                          warn(
                              'dropdown',
                              '`group` node is not allowed to be put in `group` node.'
                          );
                          return null;
                      }
                      return h(NDropdownOption, {
                          clsPrefix,
                          tmNode: child,
                          parentKey,
                          key: child.key,
                      });
                  })
        );
    },
});
