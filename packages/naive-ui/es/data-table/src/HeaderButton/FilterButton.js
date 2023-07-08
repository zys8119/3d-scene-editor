import { h, defineComponent, ref, computed, inject } from 'vue';
import { FilterIcon } from '../../../_internal/icons';
import { NBaseIcon } from '../../../_internal';
import { NPopover } from '../../../popover';
import RenderFilter from './RenderFilter';
import NDataTableFilterMenu from './FilterMenu';
import { dataTableInjectionKey } from '../interface';
import { useConfig } from '../../../_mixins';
function createFilterState(currentFilterState, columnKey, mergedFilterValue) {
    const nextFilterState = Object.assign({}, currentFilterState);
    nextFilterState[columnKey] = mergedFilterValue;
    return nextFilterState;
}
export default defineComponent({
    name: 'DataTableFilterButton',
    props: {
        column: {
            type: Object,
            required: true,
        },
        options: {
            type: Array,
            default: () => [],
        },
    },
    setup(props) {
        const { mergedComponentPropsRef } = useConfig();
        const {
            mergedThemeRef,
            mergedClsPrefixRef,
            mergedFilterStateRef,
            filterMenuCssVarsRef,
            paginationBehaviorOnFilterRef,
            doUpdatePage,
            doUpdateFilters,
        } = inject(dataTableInjectionKey);
        const showPopoverRef = ref(false);
        const filterStateRef = mergedFilterStateRef;
        const filterMultipleRef = computed(() => {
            return props.column.filterMultiple !== false;
        });
        const mergedFilterValueRef = computed(() => {
            const filterValue = filterStateRef.value[props.column.key];
            if (filterValue === void 0) {
                const { value: multiple } = filterMultipleRef;
                if (multiple) return [];
                else return null;
            }
            return filterValue;
        });
        const activeRef = computed(() => {
            const { value: filterValue } = mergedFilterValueRef;
            if (Array.isArray(filterValue)) {
                return filterValue.length > 0;
            }
            return filterValue !== null;
        });
        const mergedRenderFilterRef = computed(() => {
            var _a, _b;
            return (
                ((_b =
                    (_a =
                        mergedComponentPropsRef === null ||
                        mergedComponentPropsRef === void 0
                            ? void 0
                            : mergedComponentPropsRef.value) === null ||
                    _a === void 0
                        ? void 0
                        : _a.DataTable) === null || _b === void 0
                    ? void 0
                    : _b.renderFilter) || props.column.renderFilter
            );
        });
        function handleFilterChange(mergedFilterValue) {
            const nextFilterState = createFilterState(
                filterStateRef.value,
                props.column.key,
                mergedFilterValue
            );
            doUpdateFilters(nextFilterState, props.column);
            if (paginationBehaviorOnFilterRef.value === 'first') {
                doUpdatePage(1);
            }
        }
        function handleFilterMenuCancel() {
            showPopoverRef.value = false;
        }
        function handleFilterMenuConfirm() {
            showPopoverRef.value = false;
        }
        return {
            mergedTheme: mergedThemeRef,
            mergedClsPrefix: mergedClsPrefixRef,
            active: activeRef,
            showPopover: showPopoverRef,
            mergedRenderFilter: mergedRenderFilterRef,
            filterMultiple: filterMultipleRef,
            mergedFilterValue: mergedFilterValueRef,
            filterMenuCssVars: filterMenuCssVarsRef,
            handleFilterChange,
            handleFilterMenuConfirm,
            handleFilterMenuCancel,
        };
    },
    render() {
        const { mergedTheme, mergedClsPrefix, handleFilterMenuCancel } = this;
        return h(
            NPopover,
            {
                show: this.showPopover,
                onUpdateShow: (v) => (this.showPopover = v),
                trigger: 'click',
                theme: mergedTheme.peers.Popover,
                themeOverrides: mergedTheme.peerOverrides.Popover,
                placement: 'bottom',
                style: { padding: 0 },
            },
            {
                trigger: () => {
                    const { mergedRenderFilter } = this;
                    if (mergedRenderFilter) {
                        return h(RenderFilter, {
                            'data-data-table-filter': true,
                            render: mergedRenderFilter,
                            active: this.active,
                            show: this.showPopover,
                        });
                    }
                    const { renderFilterIcon } = this.column;
                    return h(
                        'div',
                        {
                            'data-data-table-filter': true,
                            class: [
                                `${mergedClsPrefix}-data-table-filter`,
                                {
                                    [`${mergedClsPrefix}-data-table-filter--active`]:
                                        this.active,
                                    [`${mergedClsPrefix}-data-table-filter--show`]:
                                        this.showPopover,
                                },
                            ],
                        },
                        renderFilterIcon
                            ? renderFilterIcon({
                                  active: this.active,
                                  show: this.showPopover,
                              })
                            : h(
                                  NBaseIcon,
                                  { clsPrefix: mergedClsPrefix },
                                  { default: () => h(FilterIcon, null) }
                              )
                    );
                },
                default: () => {
                    const { renderFilterMenu } = this.column;
                    return renderFilterMenu
                        ? renderFilterMenu({ hide: handleFilterMenuCancel })
                        : h(NDataTableFilterMenu, {
                              style: this.filterMenuCssVars,
                              radioGroupName: String(this.column.key),
                              multiple: this.filterMultiple,
                              value: this.mergedFilterValue,
                              options: this.options,
                              column: this.column,
                              onChange: this.handleFilterChange,
                              onClear: this.handleFilterMenuCancel,
                              onConfirm: this.handleFilterMenuConfirm,
                          });
                },
            }
        );
    },
});
