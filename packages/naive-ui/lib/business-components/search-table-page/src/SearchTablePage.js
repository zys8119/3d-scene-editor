const { watch } = require('vue');
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
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.searchTablePageProps = exports.searchTablePageBaseProps = void 0;
const vue_1 = require('vue');
const space_1 = require('../../../space');
const input_1 = require('../../../input');
const pagination_1 = require('../../../pagination');
const data_table_1 = require('../../../data-table');
const button_1 = require('../../../button');
const _mixins_1 = require('../../../_mixins');
const index_cssr_1 = __importDefault(require('./styles/index.cssr'));
const styles_1 = require('../styles');
const typography_1 = require('../../../typography');
const lodash_1 = require('lodash');
exports.searchTablePageBaseProps = {
    searchTableSpace: Object,
    searchSpace: Object,
    searchBottomSpace: Object,
    tableSpace: Object,
    searchFormSpace: Object,
    searchInputProps: Object,
    dataTableProps: Object,
    paginationProps: Object,
    pageConfig: {
        type: Object,
        default: () => ({
            page: 1,
            size: 10,
        }),
    },
    searchProps: {
        type: Object,
        default: () => ({
            show: true,
            showInput: true,
            inputWidth: 'auto',
            showSearch: true,
            showReset: true,
            showHandle: true,
            showAdd: true,
            showDeleteSelect: false,
            showTotal: true,
            showPageTotal: false,
            searchText: '\u641C\u7D22',
            searchInputPlaceholder: '\u8BF7\u8F93\u5165\u5173\u952E\u8BCD',
            resetText: '\u91CD\u7F6E',
            addText: '\u65B0\u589E',
            deleteSelectText: '\u5220\u9664\u6240\u9009',
            leftMaxWidth: 'none',
            leftMinWidth: 'auto',
            rightMaxWidth: 'none',
            rightMinWidth: 'auto',
        }),
    },
    tableProps: {
        type: Object,
        default: {
            show: true,
            showTable: true,
            showPagination: true,
            showTotal: true,
        },
    },
    dataApi: Function,
    params: Object,
    dataField: {
        type: String,
        default: 'data',
    },
    searchField: {
        type: String,
        default: 'search',
    },
    pageField: {
        type: String,
        default: 'page',
    },
    sizeField: {
        type: String,
        default: 'pageSize',
    },
    totalField: {
        type: String,
        default: 'total',
    },
    noPageField: {
        type: String,
        default: 'noPage',
    },
    padding: {
        type: String,
        default: '10px',
    },
    hasBackgroundColor: {
        type: Boolean,
        default: true,
    },
    backgroundColor: {
        type: String || null,
        default: null,
    },
    tag: {
        type: String,
        default: 'div',
    },
};
exports.searchTablePageProps = Object.assign(
    Object.assign({}, _mixins_1.useTheme.props),
    exports.searchTablePageBaseProps
);
const SearchTablePage = (0, vue_1.defineComponent)({
    name: 'SearchTablePage',
    props: exports.searchTablePageProps,
    emits: {
        search: () => true,
        reset: () => true,
        add: () => true,
        deleteSelect: () => true,
    },
    setup(props) {
        var _a, _b;
        const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props);
        const searchVal = (0, vue_1.ref)('');
        const currentPage = (0, vue_1.ref)();
        const pageSize = (0, vue_1.ref)();
        const pageTotal = (0, vue_1.ref)();
        const tableData = (0, vue_1.ref)([]);
        const tableRef = (0, vue_1.ref)();
        currentPage.value =
            (_a = props.pageConfig) === null || _a === void 0
                ? void 0
                : _a.page;
        pageSize.value =
            (_b = props.pageConfig) === null || _b === void 0
                ? void 0
                : _b.size;
        watch(
            (0, vue_1.computed)(() => props.pageConfig),
            () => {
                var _a2, _b2;
                currentPage.value =
                    ((_a2 = props.pageConfig) === null || _a2 === void 0
                        ? void 0
                        : _a2.page) || 1;
                pageSize.value =
                    (_b2 = props.pageConfig) === null || _b2 === void 0
                        ? void 0
                        : _b2.size;
                initData(currentPage.value);
            },
            {
                deep: true,
            }
        );
        function initData(page) {
            var _a2;
            return __awaiter(this, void 0, void 0, function* () {
                const queryParams = Object.assign({}, props.params);
                queryParams[props.searchField] = searchVal.value;
                currentPage.value = page !== null && page !== void 0 ? page : 1;
                if (
                    (_a2 = props.tableProps) === null || _a2 === void 0
                        ? void 0
                        : _a2.showPagination
                ) {
                    queryParams[props.pageField] = currentPage.value;
                    queryParams[props.sizeField] = pageSize.value;
                } else queryParams[props.noPageField] = true;
                if (props.dataApi) {
                    const res = yield props.dataApi(queryParams);
                    pageTotal.value = res.data[props.totalField];
                    tableData.value = res.data[props.dataField];
                }
            });
        }
        function unCheckAll() {
            var _a2;
            (_a2 = tableRef.value) === null || _a2 === void 0
                ? void 0
                : _a2.doUncheckAll();
        }
        initData();
        const themeRef = (0, _mixins_1.useTheme)(
            'SearchTablePage',
            '-search-table-page',
            index_cssr_1.default,
            styles_1.searchTablePageLight,
            props,
            mergedClsPrefixRef
        );
        const cssVarsRef = (0, vue_1.computed)(() => {
            const {
                self: { baseColor },
            } = themeRef.value;
            return {
                '--n-background-color': props.hasBackgroundColor
                    ? props.backgroundColor
                        ? props.backgroundColor
                        : baseColor
                    : 'none',
                padding: props.padding,
            };
        });
        return {
            cssVarsRef,
            mergedClsPrefix: mergedClsPrefixRef,
            searchVal,
            currentPage,
            pageSize,
            pageTotal,
            tableData,
            tableRef,
            initData,
            unCheckAll,
        };
    },
    render() {
        const { tag: Component } = this;
        const _props = (0, vue_1.computed)(() =>
            Object.fromEntries(
                Object.entries(exports.searchTablePageProps).map(([k, v]) => {
                    var _a;
                    return [
                        k,
                        typeof v.default === 'string'
                            ? v.default
                            : Object.assign(
                                  Object.assign(
                                      {},
                                      typeof (v === null || v === void 0
                                          ? void 0
                                          : v.default) === 'function'
                                          ? (_a =
                                                v === null || v === void 0
                                                    ? void 0
                                                    : v.default) === null ||
                                            _a === void 0
                                              ? void 0
                                              : _a.call(v)
                                          : v === null || v === void 0
                                          ? void 0
                                          : v.default
                                  ),
                                  this.$props[k]
                              ),
                    ];
                })
            )
        );
        const resetColumns = (0, vue_1.computed)(() =>
            _props.value.dataTableProps.columns.map((v) =>
                Object.assign(Object.assign({}, v), {
                    render:
                        typeof v.render === 'function'
                            ? v.render
                            : (data, index) => {
                                  var _a, _b;
                                  return (
                                      ((_b = (_a = this.$slots)[
                                          `table_${v.key}`
                                      ]) === null || _b === void 0
                                          ? void 0
                                          : _b.call(_a, {
                                                row: data,
                                                index,
                                                col: v,
                                            })) ||
                                      (0, lodash_1.get)(data, v.key, '')
                                  );
                              },
                })
            )
        );
        const searchLayout = (0, vue_1.h)(
            space_1.NSpace,
            Object.assign(
                { vertical: true, wrap: false, size: 15 },
                this.$props.searchBottomSpace
            ),
            {
                default: () => {
                    var _a, _b;
                    return [
                        (0, vue_1.h)(
                            space_1.NSpace,
                            Object.assign(
                                {
                                    justify: 'space-between',
                                    wrap: false,
                                    size: 20,
                                },
                                this.$props.searchSpace
                            ),
                            {
                                default: () => {
                                    var _a2, _b2, _c, _d, _e;
                                    return [
                                        (0, vue_1.h)(
                                            Component,
                                            {
                                                class: 'search-layout-form',
                                                style: {
                                                    maxWidth:
                                                        this.$props.searchProps
                                                            .leftMaxWidth,
                                                    minWidth:
                                                        this.$props.searchProps
                                                            .leftMinWidth,
                                                },
                                            },
                                            ((_b2 = (_a2 = this.$slots)
                                                .search_form) === null ||
                                            _b2 === void 0
                                                ? void 0
                                                : _b2.call(_a2)) ||
                                                (0, vue_1.h)(
                                                    space_1.NSpace,
                                                    Object.assign(
                                                        { align: 'center' },
                                                        this.$props
                                                            .searchFormSpace
                                                    ),
                                                    {
                                                        default: () => {
                                                            var _a3,
                                                                _b3,
                                                                _c2,
                                                                _d2,
                                                                _e2,
                                                                _f,
                                                                _g,
                                                                _h,
                                                                _j;
                                                            return [
                                                                (_b3 = (_a3 =
                                                                    this.$slots)
                                                                    .search_form_pre) ===
                                                                    null ||
                                                                _b3 === void 0
                                                                    ? void 0
                                                                    : _b3.call(
                                                                          _a3
                                                                      ),
                                                                (
                                                                    (_c2 =
                                                                        _props
                                                                            .value
                                                                            .searchProps) ===
                                                                        null ||
                                                                    _c2 ===
                                                                        void 0
                                                                        ? void 0
                                                                        : _c2.showInput
                                                                )
                                                                    ? (0,
                                                                      vue_1.h)(
                                                                          input_1.NInput,
                                                                          Object.assign(
                                                                              {
                                                                                  style: {
                                                                                      width:
                                                                                          typeof _props
                                                                                              .value
                                                                                              .searchProps
                                                                                              .inputWidth ===
                                                                                          'number'
                                                                                              ? `${_props.value.searchProps.inputWidth}px`
                                                                                              : _props
                                                                                                    .value
                                                                                                    .searchProps
                                                                                                    .inputWidth,
                                                                                  },
                                                                                  value: this
                                                                                      .searchVal,
                                                                              },
                                                                              this
                                                                                  .$props
                                                                                  .searchInputProps,
                                                                              {
                                                                                  onUpdateValue:
                                                                                      (
                                                                                          val
                                                                                      ) =>
                                                                                          (this.searchVal =
                                                                                              val),
                                                                                  placeholder:
                                                                                      _props
                                                                                          .value
                                                                                          .searchProps
                                                                                          .searchInputPlaceholder,
                                                                                  clearable: true,
                                                                              }
                                                                          )
                                                                      )
                                                                    : null,
                                                                (_e2 = (_d2 =
                                                                    this.$slots)
                                                                    .search_form_middle) ===
                                                                    null ||
                                                                _e2 === void 0
                                                                    ? void 0
                                                                    : _e2.call(
                                                                          _d2
                                                                      ),
                                                                (
                                                                    (_f =
                                                                        _props
                                                                            .value
                                                                            .searchProps) ===
                                                                        null ||
                                                                    _f ===
                                                                        void 0
                                                                        ? void 0
                                                                        : _f.showSearch
                                                                )
                                                                    ? (0,
                                                                      vue_1.h)(
                                                                          button_1.NButton,
                                                                          {
                                                                              type: 'primary',
                                                                              onClick:
                                                                                  () => {
                                                                                      this.initData(
                                                                                          1
                                                                                      );
                                                                                      this.$emit(
                                                                                          'search'
                                                                                      );
                                                                                  },
                                                                          },
                                                                          {
                                                                              default:
                                                                                  () =>
                                                                                      _props
                                                                                          .value
                                                                                          .searchProps
                                                                                          .searchText,
                                                                          }
                                                                      )
                                                                    : null,
                                                                (
                                                                    (_g =
                                                                        _props
                                                                            .value
                                                                            .searchProps) ===
                                                                        null ||
                                                                    _g ===
                                                                        void 0
                                                                        ? void 0
                                                                        : _g.showReset
                                                                )
                                                                    ? (0,
                                                                      vue_1.h)(
                                                                          button_1.NButton,
                                                                          {
                                                                              type: 'default',
                                                                              onClick:
                                                                                  () => {
                                                                                      this.searchVal =
                                                                                          '';
                                                                                      this.$emit(
                                                                                          'reset'
                                                                                      );
                                                                                  },
                                                                          },
                                                                          {
                                                                              default:
                                                                                  () =>
                                                                                      _props
                                                                                          .value
                                                                                          .searchProps
                                                                                          .resetText,
                                                                          }
                                                                      )
                                                                    : null,
                                                                (_j = (_h =
                                                                    this.$slots)
                                                                    .search_form_after) ===
                                                                    null ||
                                                                _j === void 0
                                                                    ? void 0
                                                                    : _j.call(
                                                                          _h
                                                                      ),
                                                            ];
                                                        },
                                                    }
                                                )
                                        ),
                                        (
                                            (_c = _props.value.searchProps) ===
                                                null || _c === void 0
                                                ? void 0
                                                : _c.showHandle
                                        )
                                            ? ((_e = (_d = this.$slots)
                                                  .search_handle) === null ||
                                              _e === void 0
                                                  ? void 0
                                                  : _e.call(_d)) ||
                                              (0, vue_1.h)(
                                                  Component,
                                                  {
                                                      class: 'search-layout-handle',
                                                      style: {
                                                          maxWidth:
                                                              this.$props
                                                                  .searchProps
                                                                  .rightMaxWidth,
                                                          minWidth:
                                                              this.$props
                                                                  .searchProps
                                                                  .rightMinWidth,
                                                          display: 'flex',
                                                          justifyContent:
                                                              'right',
                                                      },
                                                  },
                                                  (0, vue_1.h)(
                                                      space_1.NSpace,
                                                      {
                                                          align: 'center',
                                                          justify: 'end',
                                                      },
                                                      {
                                                          default: () => {
                                                              var _a3,
                                                                  _b3,
                                                                  _c2,
                                                                  _d2,
                                                                  _e2,
                                                                  _f,
                                                                  _g,
                                                                  _h;
                                                              return [
                                                                  (_b3 = (_a3 =
                                                                      this
                                                                          .$slots)
                                                                      .search_handle_pre) ===
                                                                      null ||
                                                                  _b3 === void 0
                                                                      ? void 0
                                                                      : _b3.call(
                                                                            _a3
                                                                        ),
                                                                  (
                                                                      (_c2 =
                                                                          _props
                                                                              .value
                                                                              .searchProps) ===
                                                                          null ||
                                                                      _c2 ===
                                                                          void 0
                                                                          ? void 0
                                                                          : _c2.showAdd
                                                                  )
                                                                      ? (0,
                                                                        vue_1.h)(
                                                                            button_1.NButton,
                                                                            {
                                                                                type: 'primary',
                                                                                onClick:
                                                                                    () => {
                                                                                        this.$emit(
                                                                                            'add'
                                                                                        );
                                                                                    },
                                                                            },
                                                                            {
                                                                                default:
                                                                                    () =>
                                                                                        _props
                                                                                            .value
                                                                                            .searchProps
                                                                                            .addText,
                                                                            }
                                                                        )
                                                                      : null,
                                                                  (_e2 = (_d2 =
                                                                      this
                                                                          .$slots)
                                                                      .search_handle_middle) ===
                                                                      null ||
                                                                  _e2 === void 0
                                                                      ? void 0
                                                                      : _e2.call(
                                                                            _d2
                                                                        ),
                                                                  (
                                                                      (_f =
                                                                          _props
                                                                              .value
                                                                              .searchProps) ===
                                                                          null ||
                                                                      _f ===
                                                                          void 0
                                                                          ? void 0
                                                                          : _f.showDeleteSelect
                                                                  )
                                                                      ? (0,
                                                                        vue_1.h)(
                                                                            button_1.NButton,
                                                                            {
                                                                                type: 'error',
                                                                                onClick:
                                                                                    () => {
                                                                                        this.$emit(
                                                                                            'deleteSelect'
                                                                                        );
                                                                                    },
                                                                            },
                                                                            {
                                                                                default:
                                                                                    () =>
                                                                                        _props
                                                                                            .value
                                                                                            .searchProps
                                                                                            .deleteSelectText,
                                                                            }
                                                                        )
                                                                      : null,
                                                                  (_h = (_g =
                                                                      this
                                                                          .$slots)
                                                                      .search_handle_after) ===
                                                                      null ||
                                                                  _h === void 0
                                                                      ? void 0
                                                                      : _h.call(
                                                                            _g
                                                                        ),
                                                              ];
                                                          },
                                                      }
                                                  )
                                              )
                                            : null,
                                    ];
                                },
                            }
                        ),
                        (_b = (_a = this.$slots).search_bottom_layout) ===
                            null || _b === void 0
                            ? void 0
                            : _b.call(_a),
                    ];
                },
            }
        );
        const renderPageSlot = () => {
            return Object.assign(
                {
                    prefix: () => {
                        if (_props.value.tableProps.showPageTotal) {
                            return `\u5171 ${
                                (0, lodash_1.get)(
                                    _props.value,
                                    'dataTableProps.data',
                                    []
                                ).length ||
                                this.pageTotal ||
                                0
                            } \u9879`;
                        }
                    },
                },
                Object.keys(this.$slots)
                    .filter((e) => /^page_.*/.test(e))
                    .reduce((a, b) => {
                        a[b.replace(/^page_/, '')] = this.$slots[b];
                        return a;
                    }, {})
            );
        };
        const tableLayout = (0, vue_1.h)(
            space_1.NSpace,
            Object.assign({ vertical: true, size: 10 }, this.$props.tableSpace),
            {
                default: () => {
                    var _a, _b;
                    return [
                        (_b = (_a = this.$slots).table_pre) === null ||
                        _b === void 0
                            ? void 0
                            : _b.call(_a),
                        _props.value.tableProps.showTable
                            ? (0, vue_1.h)(
                                  data_table_1.NDataTable,
                                  Object.assign(
                                      { ref: 'tableRef', data: this.tableData },
                                      _props.value.dataTableProps,
                                      {
                                          columns:
                                              _props.value.dataTableProps
                                                  .columns &&
                                              _props.value.dataTableProps
                                                  .columns.length > 0
                                                  ? resetColumns.value
                                                  : [],
                                      }
                                  )
                              )
                            : null,
                        _props.value.tableProps.showPagination
                            ? (0, vue_1.h)(
                                  space_1.NSpace,
                                  { justify: 'end', align: 'center' },
                                  {
                                      default: () => {
                                          var _a2;
                                          return [
                                              (
                                                  (_a2 =
                                                      _props.value
                                                          .tableProps) ===
                                                      null || _a2 === void 0
                                                      ? void 0
                                                      : _a2.showTotal
                                              )
                                                  ? (0, vue_1.h)(
                                                        typography_1.NText,
                                                        null,
                                                        {
                                                            default: () =>
                                                                `\u5171 ${
                                                                    (0,
                                                                    lodash_1.get)(
                                                                        _props.value,
                                                                        'dataTableProps.data',
                                                                        []
                                                                    ).length ||
                                                                    this
                                                                        .pageTotal ||
                                                                    0
                                                                } \u9879`,
                                                        }
                                                    )
                                                  : null,
                                              (0, vue_1.h)(
                                                  pagination_1.NPagination,
                                                  Object.assign(
                                                      {
                                                          remote: true,
                                                          page: this
                                                              .currentPage,
                                                          pageSize:
                                                              this.pageSize,
                                                          itemCount:
                                                              this.pageTotal,
                                                      },
                                                      _props.value
                                                          .paginationProps,
                                                      {
                                                          onUpdatePage: (
                                                              page
                                                          ) => {
                                                              this.currentPage =
                                                                  page;
                                                              this.initData(
                                                                  page
                                                              );
                                                          },
                                                          onUpdatePageSize: (
                                                              size
                                                          ) => {
                                                              this.pageSize =
                                                                  size;
                                                              this.initData();
                                                          },
                                                      }
                                                  ),
                                                  renderPageSlot()
                                              ),
                                          ];
                                      },
                                  }
                              )
                            : null,
                    ];
                },
            }
        );
        return (0, vue_1.h)(
            Component,
            {
                class: `${this.mergedClsPrefix}-search-table-page`,
                style: this.cssVarsRef,
            },
            (0, vue_1.h)(
                space_1.NSpace,
                Object.assign(
                    { vertical: true, size: 40 },
                    this.$props.searchTableSpace
                ),
                {
                    default: () => {
                        var _a, _b, _c, _d, _e, _f, _g;
                        return [
                            (
                                (_b =
                                    (_a = _props.value) === null ||
                                    _a === void 0
                                        ? void 0
                                        : _a.searchProps) === null ||
                                _b === void 0
                                    ? void 0
                                    : _b.show
                            )
                                ? ((_d = (_c = this.$slots).search_layout) ===
                                      null || _d === void 0
                                      ? void 0
                                      : _d.call(_c)) || searchLayout
                                : null,
                            (
                                (_e = _props.value.tableProps) === null ||
                                _e === void 0
                                    ? void 0
                                    : _e.show
                            )
                                ? ((_g = (_f = this.$slots).table_layout) ===
                                      null || _g === void 0
                                      ? void 0
                                      : _g.call(_f)) || tableLayout
                                : null,
                        ];
                    },
                }
            )
        );
    },
});
exports.default = SearchTablePage;
