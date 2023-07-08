const { onMounted, watch } = require('vue');
const { useThrottleFn } = require('@vueuse/core');
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected);
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            );
        });
    };
var __rest =
    (this && this.__rest) ||
    function (s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (
                var i = 0, p = Object.getOwnPropertySymbols(s);
                i < p.length;
                i++
            ) {
                if (
                    e.indexOf(p[i]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(s, p[i])
                )
                    t[p[i]] = s[p[i]];
            }
        return t;
    };
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.cascadeMenuProps = void 0;
const vue_1 = require('vue');
const get_1 = __importDefault(require('lodash/get'));
const set_1 = __importDefault(require('lodash/set'));
const space_1 = require('../../../space');
const list_1 = require('../../../list');
const checkbox_1 = require('../../../checkbox');
const icon_1 = require('../../../icon');
const ionicons5_1 = require('@vicons/ionicons5');
const dropdown_1 = require('../../../dropdown');
const button_1 = require('../../../button');
const radio_1 = require('../../../radio');
const uuid_1 = require('uuid');
const use_theme_1 = __importDefault(require('../../../_mixins/use-theme'));
const _mixins_1 = require('../../../_mixins');
const index_cssr_1 = __importDefault(require('./styles/index.cssr'));
const styles_1 = require('../styles');
const use_drag_drop_1 = require('../../../_mixins/use-drag-drop');
exports.cascadeMenuProps = Object.assign(
    Object.assign({}, use_theme_1.default.props),
    {
        tag: {
            type: String,
            default: 'div',
        },
        tree: [Array],
        loadTree: Function,
        loadSelected: Function,
        identifier: {
            type: String,
            default: () => void 0,
        },
        selected: {
            type: [Object, Array],
            default: () => void 0,
        },
        treeOptions: {
            type: Object,
            default: () => ({ label: 'name', children: 'children' }),
        },
        config: {
            type: Object,
            default: () => ({
                selectAllNodesText: '\u5168\u9009',
                addNodeText: '\u65B0\u589E\u8282\u70B9',
            }),
        },
        editable: {
            type: Boolean,
            default: false,
        },
        draggable: {
            type: Boolean,
            default: false,
        },
        crossLevelDraggable: {
            type: Boolean,
            default: false,
        },
        selectable: {
            type: Boolean,
            default: false,
        },
        multiple: {
            type: Boolean,
            default: false,
        },
        propagation: {
            type: Boolean,
            default: false,
        },
    }
);
const CascadeMenu = (0, vue_1.defineComponent)({
    name: 'CascadeMenu',
    props: exports.cascadeMenuProps,
    emits: {
        'node:drag': (source, target, tree, done) => true,
        'node:add': (parent, children, done) => true,
        'node:expanded': (node) => true,
        'node:edit': (node) => true,
        'node:delete': (node) => true,
        'update:selected': (nodes) => true,
        'update:tree': (nodes) => true,
    },
    setup(props, { emit, expose }) {
        const {
            tree,
            selected,
            treeOptions,
            selectable,
            multiple,
            loadTree,
            loadSelected,
            identifier,
            propagation,
        } = props;
        const {
            children: childrenKey = 'children',
            parent: parentKey = 'parent',
            expanded: expandedKey = '__expanded__',
            checked: checkedKey = '__checked__',
        } = treeOptions;
        const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)();
        const themeRef = (0, use_theme_1.default)(
            'CascadeMenu',
            '-cascade-menu',
            index_cssr_1.default,
            styles_1.cascadeMenuLight,
            props,
            mergedClsPrefixRef
        );
        const cssVarsRef = (0, vue_1.computed)(() => {
            const {
                self: { primaryColor, primaryColorHover, neutralCard },
                common: { textColor1, textColor3, textColor7 },
            } = themeRef.value;
            return {
                primaryColor,
                textColor1,
                textColor3,
                textColor7,
                primaryColorHover,
                neutralCard,
                '--n-background-color': neutralCard,
                '--n-draggable-background-color': primaryColorHover,
            };
        });
        function expandToRoot(node) {
            if (!node[parentKey]) {
                return;
            }
            (0, set_1.default)(node, `${parentKey}.${expandedKey}`, true);
            expandToRoot((0, get_1.default)(node, parentKey));
        }
        function isDescentOf(maybeDescent, maybeAncestor) {
            var _a;
            let found = false;
            function walkTree(node) {
                var _a2;
                if (isSameNode(maybeDescent, node)) {
                    found = true;
                }
                const children2 =
                    (_a2 = node[childrenKey]) !== null && _a2 !== void 0
                        ? _a2
                        : [];
                for (const subNode of children2) {
                    if (found) {
                        break;
                    }
                    walkTree(subNode);
                }
            }
            const children =
                (_a = maybeAncestor[childrenKey]) !== null && _a !== void 0
                    ? _a
                    : [];
            for (const item of children) {
                if (found) {
                    break;
                }
                walkTree(item);
            }
            return found;
        }
        function isSameNode(node1, node2) {
            if (identifier) {
                return node1[identifier] === node2[identifier];
            }
            for (const key in node1) {
                if (key in [parentKey, childrenKey, expandedKey, checkedKey]) {
                    continue;
                }
                if (node1[key] !== node2[key]) {
                    return false;
                }
            }
            return true;
        }
        function cleanStateInDescent(node, cleanAction) {
            var _a;
            return __awaiter(this, void 0, void 0, function* () {
                cleanAction(node);
                if (
                    (_a = node[childrenKey]) === null || _a === void 0
                        ? void 0
                        : _a.length
                ) {
                    for (const item of node[childrenKey]) {
                        yield cleanStateInDescent(item, cleanAction);
                    }
                }
            });
        }
        function extendNode(node, i, $$selected, parent) {
            var _a;
            node.__id__ = (0, uuid_1.v4)();
            node[childrenKey] =
                (_a = node[childrenKey]) !== null && _a !== void 0 ? _a : [];
            node[checkedKey] = !!$$selected.find((item) =>
                isSameNode(item, node)
            );
            Object.defineProperties(node, {
                __path__: {
                    get() {
                        const _parent = node[parentKey];
                        return _parent
                            ? `${_parent.__path__}.${childrenKey}.${this.__index__}`
                            : `${this.__index__}`;
                    },
                },
                __index__: {
                    get() {
                        const _parent = node[parentKey];
                        const siblings = _parent ? _parent[childrenKey] : tree;
                        return siblings.findIndex(
                            (item) => item.__id__ === node.__id__
                        );
                    },
                },
                __depth__: {
                    get() {
                        let depth = 0;
                        let current = this;
                        while ((0, get_1.default)(current, parentKey)) {
                            depth++;
                            current = current[parentKey];
                            if (!current[parentKey]) {
                                break;
                            }
                        }
                        return depth;
                    },
                },
            });
            node[parentKey] = parent;
        }
        function extendTree(node, i, $$selected, parent) {
            var _a;
            extendNode(node, i, $$selected, parent);
            (_a = node[childrenKey]) === null || _a === void 0
                ? void 0
                : _a.forEach((subNode, j) =>
                      extendTree(subNode, j, $$selected, node)
                  );
        }
        function extendSelected(node, i, selectedList = []) {
            var _a;
            for (const item of selectedList) {
                if (isSameNode(item, node)) {
                    node[checkedKey] = true;
                    if (selectable && !multiple) {
                        expandToRoot(node);
                    }
                }
            }
            (_a = node[childrenKey]) === null || _a === void 0
                ? void 0
                : _a.forEach((subNode, j) =>
                      extendSelected(subNode, j, selectedList)
                  );
        }
        function bootstrap($tree, $selected) {
            const selectedList =
                selectable && multiple
                    ? $selected
                    : $selected
                    ? [$selected]
                    : [];
            $tree === null || $tree === void 0
                ? void 0
                : $tree.forEach((node, i) => extendTree(node, i, selectedList));
            $tree === null || $tree === void 0
                ? void 0
                : $tree.forEach((node, i) =>
                      extendSelected(node, i, selectedList)
                  );
            emit('update:tree', $tree);
            requestAnimationFrame(() => {
                emit(
                    'update:selected',
                    selectable && multiple ? selectedList : selectedList[0]
                );
            });
        }
        function refresh() {
            return __awaiter(this, void 0, void 0, function* () {
                const loadedTree = yield loadTree === null ||
                loadTree === void 0
                    ? void 0
                    : loadTree();
                const loadedSelected = yield loadSelected === null ||
                loadSelected === void 0
                    ? void 0
                    : loadSelected();
                bootstrap(
                    loadedTree !== null && loadedTree !== void 0
                        ? loadedTree
                        : tree,
                    loadedSelected !== null && loadedSelected !== void 0
                        ? loadedSelected
                        : selected
                );
            });
        }
        expose({ refresh });
        onMounted(() =>
            __awaiter(this, void 0, void 0, function* () {
                const loadedTree = yield loadTree === null ||
                loadTree === void 0
                    ? void 0
                    : loadTree();
                const loadedSelected = yield loadSelected === null ||
                loadSelected === void 0
                    ? void 0
                    : loadSelected();
                bootstrap(
                    loadedTree !== null && loadedTree !== void 0
                        ? loadedTree
                        : tree,
                    loadedSelected !== null && loadedSelected !== void 0
                        ? loadedSelected
                        : selected
                );
            })
        );
        const getSelectedNodes = () => {
            var _a;
            const map = /* @__PURE__ */ new Map();
            function walkTree(node) {
                var _a2;
                if (node[checkedKey]) {
                    map.set(node.__id__, node);
                }
                const children =
                    (_a2 = node[childrenKey]) !== null && _a2 !== void 0
                        ? _a2
                        : [];
                for (const subNode of children) {
                    walkTree(subNode);
                }
            }
            for (const node of (_a = props.tree) !== null && _a !== void 0
                ? _a
                : []) {
                walkTree(node);
            }
            return Array.from(map, ([, value]) => value);
        };
        const onNodeCheckStatusChange = useThrottleFn((node) => {
            function propagate(
                targetNode,
                directions = { up: false, down: false }
            ) {
                var _a, _b, _c;
                if (directions.up) {
                    const siblings =
                        (_a = (0, get_1.default)(
                            targetNode,
                            `${parentKey}.${childrenKey}`
                        )) !== null && _a !== void 0
                            ? _a
                            : [];
                    const siblingsCheckedCount =
                        (_b = siblings.reduce((prev, next) => {
                            if (next[checkedKey]) {
                                prev++;
                            }
                            return prev;
                        }, 0)) !== null && _b !== void 0
                            ? _b
                            : 0;
                    if (
                        siblingsCheckedCount > 0 &&
                        siblingsCheckedCount === siblings.length
                    ) {
                        if (targetNode[parentKey]) {
                            (0, set_1.default)(
                                targetNode,
                                `${parentKey}.${checkedKey}`,
                                true
                            );
                            propagate(targetNode[parentKey], {
                                up: true,
                                down: false,
                            });
                        }
                    }
                    if (siblingsCheckedCount === 0) {
                        if (targetNode[parentKey]) {
                            (0, set_1.default)(
                                targetNode,
                                `${parentKey}.${checkedKey}`,
                                false
                            );
                            propagate(targetNode[parentKey], {
                                up: true,
                                down: false,
                            });
                        }
                    }
                }
                if (directions.down) {
                    const children =
                        (_c = targetNode[childrenKey]) !== null && _c !== void 0
                            ? _c
                            : [];
                    for (const item of children) {
                        item[checkedKey] = targetNode[checkedKey];
                        propagate(item, { up: false, down: true });
                    }
                }
            }
            if (propagation) {
                propagate(node, { up: true, down: true });
            }
            emit('update:selected', getSelectedNodes());
        }, 50);
        return {
            mergedClsPrefixRef,
            cssVarsRef,
            themeRef,
            extendNode,
            onNodeCheckStatusChange,
            cleanStateInDescent,
            isDescentOf,
        };
    },
    render() {
        const {
            mergedClsPrefixRef,
            cssVarsRef,
            tag: Component,
            $props: props,
            $emit: emit,
            $slots: slots,
            tree,
            selected,
            treeOptions,
            config,
            editable,
            selectable,
            multiple,
            draggable,
            crossLevelDraggable,
            onNodeCheckStatusChange,
            cleanStateInDescent,
            extendNode,
            isDescentOf,
        } = this;
        const {
            label: labelKey = 'name',
            children: childrenKey = 'children',
            parent: parentKey = 'parent',
            expanded: expandedKey = '__expanded__',
            checked: checkedKey = '__checked__',
        } = treeOptions;
        const createNodeReactions = (node) => {
            const isIndeterminate = (0, vue_1.computed)(() => {
                if (selectable && multiple) {
                    for (const selectedItem of selected !== null &&
                    selected !== void 0
                        ? selected
                        : []) {
                        if (isDescentOf(selectedItem, node)) {
                            return !node[checkedKey];
                        }
                    }
                }
            });
            if (selectable && multiple) {
                watch(
                    () => node[checkedKey],
                    () =>
                        __awaiter(this, void 0, void 0, function* () {
                            yield onNodeCheckStatusChange(node);
                        })
                );
            }
            return {
                isIndeterminate,
                onExpand: (e) =>
                    __awaiter(this, void 0, void 0, function* () {
                        var _a;
                        const shouldBe = !node[expandedKey];
                        const siblings =
                            (_a = (0, get_1.default)(
                                node,
                                `${parentKey}.${childrenKey}`
                            )) !== null && _a !== void 0
                                ? _a
                                : tree;
                        for (const sibling of siblings !== null &&
                        siblings !== void 0
                            ? siblings
                            : []) {
                            yield cleanStateInDescent(sibling, (n) => {
                                n[expandedKey] = false;
                            });
                        }
                        node[expandedKey] = shouldBe;
                        emit('node:expanded', node);
                    }),
                onEdit: (e) => emit('node:edit', node),
                onDelete: (e) => emit('node:delete', node),
                onChecked: (checked) =>
                    __awaiter(this, void 0, void 0, function* () {
                        if (!multiple) {
                            for (const subNode of tree !== null &&
                            tree !== void 0
                                ? tree
                                : []) {
                                yield cleanStateInDescent(subNode, (n) => {
                                    n[checkedKey] = false;
                                });
                            }
                        }
                        node[checkedKey] = checked;
                        emit('update:selected', node);
                    }),
                onMultipleChecked: (checked) => {
                    const updated =
                        selected !== null && selected !== void 0
                            ? selected
                            : [];
                    if (checked) {
                        updated.push(node);
                    } else {
                        const targetIndex = updated.findIndex(
                            (item) => item.__id__ === node.__id__
                        );
                        updated.splice(targetIndex, 1);
                    }
                    node[checkedKey] = checked;
                },
            };
        };
        const createNodeLevelReactions = (nodes = [], parent) => {
            const isChecked = (0, vue_1.computed)(() => {
                const checkedCount = nodes.reduce((prev, next) => {
                    if (next[checkedKey]) {
                        prev++;
                    }
                    return prev;
                }, 0);
                return checkedCount > 0 && checkedCount === nodes.length;
            });
            const isIndeterminate = (0, vue_1.computed)(() => {
                const checkedCount =
                    nodes === null || nodes === void 0
                        ? void 0
                        : nodes.reduce((prev, next) => {
                              if (next[checkedKey]) {
                                  prev++;
                              }
                              return prev;
                          }, 0);
                return checkedCount > 0 && checkedCount !== nodes.length;
            });
            return {
                isChecked,
                isIndeterminate,
                nodeAddCallback: (createdNode) => {
                    extendNode(
                        createdNode,
                        nodes.length,
                        this.$props.selected,
                        parent
                    );
                    nodes.push(createdNode);
                },
                onAllSelectChange: (checked) => {
                    const updated =
                        selected !== null && selected !== void 0
                            ? selected
                            : [];
                    function walkInDescent(node) {
                        node[checkedKey] = checked;
                        const indexInSelected = updated.findIndex(
                            (item) => item.__id__ === node.__id__
                        );
                        if (checked) {
                            if (indexInSelected === -1) {
                                updated.push(node);
                            }
                        } else {
                            if (indexInSelected > -1) {
                                updated.splice(indexInSelected, 1);
                            }
                        }
                        if (props.propagation) {
                            node[childrenKey].forEach(walkInDescent);
                        }
                    }
                    nodes === null || nodes === void 0
                        ? void 0
                        : nodes.forEach(walkInDescent);
                    emit('update:selected', updated);
                },
            };
        };
        function findNearestDraggableElement(el) {
            let current = el;
            while (
                !(current === null || current === void 0
                    ? void 0
                    : current.draggable)
            ) {
                current =
                    current === null || current === void 0
                        ? void 0
                        : current.parentElement;
                if (
                    current === null || current === void 0
                        ? void 0
                        : current.draggable
                ) {
                    break;
                }
            }
            return current;
        }
        const createDraggableReactions = () => {
            return Object.assign(
                {},
                (0, use_drag_drop_1.useDragDrop)({
                    draggable,
                    onDragstart: (e) => {
                        var _a;
                        const $el = e.target;
                        (_a = e.dataTransfer) === null || _a === void 0
                            ? void 0
                            : _a.setData('text', $el.dataset.path);
                    },
                    onDragover: (e) => {
                        e.preventDefault();
                        const $el = findNearestDraggableElement(e.target);
                        if (!$el) {
                            return;
                        }
                        const node = (0, get_1.default)(tree, $el.dataset.path);
                        if (node) {
                            node.__colored__ = true;
                        }
                    },
                    onDragleave: (e) => {
                        const $el = findNearestDraggableElement(e.target);
                        if (!$el) {
                            return;
                        }
                        const node = (0, get_1.default)(tree, $el.dataset.path);
                        if (node) {
                            node.__colored__ = false;
                        }
                    },
                    onDrop: (e) => {
                        var _a;
                        const $el = findNearestDraggableElement(e.target);
                        if (!$el) {
                            return;
                        }
                        const node = (0, get_1.default)(tree, $el.dataset.path);
                        const siblings = (0, get_1.default)(
                            node,
                            `${parentKey}.${childrenKey}`,
                            tree
                        );
                        siblings.forEach((item) => {
                            item.__colored__ = false;
                        });
                        const sourcePath =
                            (_a = e.dataTransfer) === null || _a === void 0
                                ? void 0
                                : _a.getData('text');
                        const targetPath = $el.dataset.path;
                        const sourceNode = (0, get_1.default)(tree, sourcePath);
                        const targetNode = (0, get_1.default)(tree, targetPath);
                        if (isDescentOf(targetNode, sourceNode)) {
                            return;
                        }
                        emit('node:drag', sourceNode, targetNode, tree, () => {
                            const sourceList = (0, get_1.default)(
                                sourceNode,
                                `${parentKey}.${childrenKey}`,
                                tree
                            );
                            const targetList = (0, get_1.default)(
                                targetNode,
                                `${parentKey}.${childrenKey}`,
                                tree
                            );
                            const [x, y] = [
                                Number(sourceNode.__index__),
                                Number(targetNode.__index__),
                            ];
                            const isInSameLevel =
                                (0, get_1.default)(
                                    sourceNode,
                                    `${parentKey}.__id__`
                                ) ===
                                (0, get_1.default)(
                                    targetNode,
                                    `${parentKey}.__id__`
                                );
                            if (!crossLevelDraggable && !isInSameLevel) {
                                return;
                            }
                            sourceList.splice(x, 1);
                            sourceNode[parentKey] = null;
                            targetList.splice(y, 0, sourceNode);
                            sourceNode[parentKey] = targetNode[parentKey];
                            emit('update:tree', tree);
                        });
                    },
                })
            );
        };
        const renderNode = (node) => {
            const {
                isIndeterminate,
                onExpand,
                onEdit,
                onDelete,
                onChecked,
                onMultipleChecked,
            } = createNodeReactions(node);
            const dragProps = __rest(createDraggableReactions(), []);
            return (0, vue_1.h)(
                list_1.NListItem,
                Object.assign({}, dragProps, {
                    'data-path': node.__path__,
                    style: {
                        minWidth: '160px',
                        cursor: draggable ? 'move' : 'inherit',
                    },
                    class: node.__colored__ ? 'n-node-draggable' : 'n-node',
                }),
                {
                    prefix: !selectable
                        ? null
                        : () => {
                              if (!multiple) {
                                  return (0, vue_1.h)(radio_1.NRadio, {
                                      checked: node[checkedKey],
                                      onUpdateChecked: onChecked,
                                  });
                              }
                              return (0, vue_1.h)(checkbox_1.NCheckbox, {
                                  indeterminate: isIndeterminate.value,
                                  checked: node[checkedKey],
                                  onUpdateChecked: onMultipleChecked,
                              });
                          },
                    default: () => {
                        return (0, vue_1.h)(
                            'div',
                            {
                                onClick: onExpand,
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    color: node[expandedKey]
                                        ? cssVarsRef.primaryColor
                                        : node.__colored__
                                        ? cssVarsRef.textColor7
                                        : cssVarsRef.textColor1,
                                },
                            },
                            slots.node ? slots.node({ node }) : node[labelKey],
                            editable
                                ? slots.node_menu
                                    ? slots.node_menu({ node, emit })
                                    : (0, vue_1.h)(
                                          dropdown_1.NDropdown,
                                          {
                                              trigger: 'hover',
                                              options: [
                                                  {
                                                      label: '\u7F16\u8F91',
                                                      key: 'edit',
                                                      props: {
                                                          onClick: onEdit,
                                                      },
                                                  },
                                                  {
                                                      label: '\u5220\u9664',
                                                      key: 'delete',
                                                      props: {
                                                          onClick: onDelete,
                                                      },
                                                  },
                                              ],
                                          },
                                          {
                                              default: () =>
                                                  (0, vue_1.h)(
                                                      icon_1.NIcon,
                                                      {
                                                          style: {
                                                              marginLeft: '8px',
                                                          },
                                                      },
                                                      {
                                                          default: () =>
                                                              (0, vue_1.h)(
                                                                  ionicons5_1.EllipsisHorizontal,
                                                                  null
                                                              ),
                                                      }
                                                  ),
                                          }
                                      )
                                : null
                        );
                    },
                    suffix: () => {
                        var _a;
                        if (
                            !editable &&
                            !((_a = node[childrenKey]) === null || _a === void 0
                                ? void 0
                                : _a.length)
                        ) {
                            return null;
                        }
                        return (0, vue_1.h)(
                            'div',
                            {
                                onClick: onExpand,
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                },
                            },
                            (0, vue_1.h)(icon_1.NIcon, null, {
                                default: () =>
                                    node[expandedKey]
                                        ? (0, vue_1.h)(
                                              ionicons5_1.ChevronBack,
                                              null
                                          )
                                        : (0, vue_1.h)(
                                              ionicons5_1.ChevronForward,
                                              null
                                          ),
                            })
                        );
                    },
                }
            );
        };
        const renderTree = (nodeList = [], elements = []) => {
            function renderLevel(list, parent) {
                const expandedNode =
                    list === null || list === void 0
                        ? void 0
                        : list.find((node) => node[expandedKey]);
                const {
                    onAllSelectChange,
                    nodeAddCallback,
                    isIndeterminate,
                    isChecked,
                } = createNodeLevelReactions(list, parent);
                if (
                    (list === null || list === void 0 ? void 0 : list.length) ||
                    editable
                ) {
                    elements.push(
                        (0, vue_1.h)(
                            list_1.NList,
                            { class: 'level', hoverable: true, bordered: true },
                            {
                                default: () => [
                                    editable
                                        ? (0, vue_1.h)(
                                              list_1.NListItem,
                                              {
                                                  style: { minWidth: '160px' },
                                                  class: 'node action',
                                              },
                                              {
                                                  default: () =>
                                                      (0, vue_1.h)(
                                                          button_1.NButton,
                                                          {
                                                              text: true,
                                                              onClick: () =>
                                                                  emit(
                                                                      'node:add',
                                                                      parent,
                                                                      list !==
                                                                          null &&
                                                                          list !==
                                                                              void 0
                                                                          ? list
                                                                          : [],
                                                                      nodeAddCallback
                                                                  ),
                                                          },
                                                          {
                                                              icon: () =>
                                                                  (0, vue_1.h)(
                                                                      icon_1.NIcon,
                                                                      null,
                                                                      {
                                                                          default:
                                                                              () =>
                                                                                  (0,
                                                                                  vue_1.h)(
                                                                                      ionicons5_1.Add,
                                                                                      null
                                                                                  ),
                                                                      }
                                                                  ),
                                                              default: () =>
                                                                  config ===
                                                                      null ||
                                                                  config ===
                                                                      void 0
                                                                      ? void 0
                                                                      : config.addNodeText,
                                                          }
                                                      ),
                                              }
                                          )
                                        : null,
                                    selectable && multiple
                                        ? (0, vue_1.h)(
                                              list_1.NListItem,
                                              {
                                                  style: { minWidth: '160px' },
                                                  class: 'node selection',
                                              },
                                              {
                                                  prefix: () =>
                                                      (0, vue_1.h)(
                                                          checkbox_1.NCheckbox,
                                                          {
                                                              indeterminate:
                                                                  isIndeterminate.value,
                                                              checked:
                                                                  isChecked.value,
                                                              onUpdateChecked:
                                                                  onAllSelectChange,
                                                          }
                                                      ),
                                                  default: () =>
                                                      config === null ||
                                                      config === void 0
                                                          ? void 0
                                                          : config.selectAllNodesText,
                                              }
                                          )
                                        : null,
                                    ...(list !== null && list !== void 0
                                        ? list
                                        : []
                                    ).map(renderNode),
                                ],
                            }
                        )
                    );
                }
                if (expandedNode) {
                    renderLevel(expandedNode[childrenKey], expandedNode);
                }
            }
            renderLevel(nodeList);
            return elements;
        };
        return (0, vue_1.h)(
            Component,
            { class: `${mergedClsPrefixRef}-cascade-menu`, style: cssVarsRef },
            (0, vue_1.h)(
                space_1.NSpace,
                { style: { gap: 0, overflowX: 'auto', flexWrap: 'nowrap' } },
                {
                    default: () => renderTree(tree, []),
                }
            )
        );
    },
});
exports.default = CascadeMenu;
