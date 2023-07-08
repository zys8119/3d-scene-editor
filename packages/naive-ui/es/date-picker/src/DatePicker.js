import {
    h,
    defineComponent,
    ref,
    Transition,
    computed,
    provide,
    watch,
    withDirectives,
    toRef,
    watchEffect,
} from 'vue';
import { VBinder, VTarget, VFollower } from 'vueuc';
import { clickoutside } from 'vdirs';
import { format, getTime, isValid } from 'date-fns';
import { useIsMounted, useMergedState } from 'vooks';
import { getPreciseEventTarget, happensIn } from 'seemly';
import { DateIcon, ToIcon } from '../../_internal/icons';
import { NInput } from '../../input';
import { NBaseIcon } from '../../_internal';
import {
    useFormItem,
    useTheme,
    useConfig,
    useLocale,
    useThemeClass,
} from '../../_mixins';
import {
    warn,
    call,
    useAdjustedTo,
    createKey,
    warnOnce,
    resolveSlot,
    markEventEffectPerformed,
} from '../../_utils';
import { datePickerLight } from '../styles';
import { strictParse } from './utils';
import {
    uniCalendarValidation,
    dualCalendarValidation,
} from './validation-utils';
import { datePickerInjectionKey } from './interface';
import DatetimePanel from './panel/datetime';
import DatetimerangePanel from './panel/datetimerange';
import DatePanel from './panel/date';
import DaterangePanel from './panel/daterange';
import MonthPanel from './panel/month';
import MonthRangePanel from './panel/monthrange';
import style from './styles/index.cssr';
export const datePickerProps = Object.assign(
    Object.assign({}, useTheme.props),
    {
        to: useAdjustedTo.propTo,
        bordered: {
            type: Boolean,
            default: void 0,
        },
        clearable: Boolean,
        updateValueOnClose: Boolean,
        defaultValue: [Number, Array],
        defaultFormattedValue: [String, Array],
        defaultTime: [Number, String, Array],
        disabled: {
            type: Boolean,
            default: void 0,
        },
        placement: {
            type: String,
            default: 'bottom-start',
        },
        value: [Number, Array],
        formattedValue: [String, Array],
        size: String,
        type: {
            type: String,
            default: 'date',
        },
        valueFormat: String,
        separator: String,
        placeholder: String,
        startPlaceholder: String,
        endPlaceholder: String,
        format: String,
        dateFormat: String,
        timeFormat: String,
        actions: Array,
        shortcuts: Object,
        isDateDisabled: Function,
        isTimeDisabled: Function,
        show: {
            type: Boolean,
            default: void 0,
        },
        panel: Boolean,
        ranges: Object,
        firstDayOfWeek: Number,
        inputReadonly: Boolean,
        closeOnSelect: Boolean,
        status: String,
        timePickerProps: [Object, Array],
        onClear: Function,
        onConfirm: Function,
        defaultCalendarStartTime: Number,
        defaultCalendarEndTime: Number,
        bindCalendarMonths: Boolean,
        'onUpdate:show': [Function, Array],
        onUpdateShow: [Function, Array],
        'onUpdate:formattedValue': [Function, Array],
        onUpdateFormattedValue: [Function, Array],
        'onUpdate:value': [Function, Array],
        onUpdateValue: [Function, Array],
        onFocus: [Function, Array],
        onBlur: [Function, Array],
        onChange: [Function, Array],
    }
);
export default defineComponent({
    name: 'DatePicker',
    props: datePickerProps,
    setup(props, { slots }) {
        var _a;
        if (process.env.NODE_ENV !== 'production') {
            watchEffect(() => {
                if (props.onChange !== void 0) {
                    warnOnce(
                        'date-picker',
                        '`on-change` is deprecated, please use `on-update:value` instead.'
                    );
                }
            });
        }
        const { localeRef, dateLocaleRef } = useLocale('DatePicker');
        const formItem = useFormItem(props);
        const { mergedSizeRef, mergedDisabledRef, mergedStatusRef } = formItem;
        const {
            mergedComponentPropsRef,
            mergedClsPrefixRef,
            mergedBorderedRef,
            namespaceRef,
            inlineThemeDisabled,
        } = useConfig(props);
        const panelInstRef = ref(null);
        const triggerElRef = ref(null);
        const inputInstRef = ref(null);
        const uncontrolledShowRef = ref(false);
        const controlledShowRef = toRef(props, 'show');
        const mergedShowRef = useMergedState(
            controlledShowRef,
            uncontrolledShowRef
        );
        const dateFnsOptionsRef = computed(() => {
            return {
                locale: dateLocaleRef.value.locale,
            };
        });
        const mergedFormatRef = computed(() => {
            const { format: format2 } = props;
            if (format2) return format2;
            switch (props.type) {
                case 'date':
                case 'daterange':
                    return localeRef.value.dateFormat;
                case 'datetime':
                case 'datetimerange':
                    return localeRef.value.dateTimeFormat;
                case 'year':
                case 'yearrange':
                    return localeRef.value.yearTypeFormat;
                case 'month':
                case 'monthrange':
                    return localeRef.value.monthTypeFormat;
                case 'quarter':
                case 'quarterrange':
                    return localeRef.value.quarterFormat;
            }
        });
        const mergedValueFormatRef = computed(() => {
            var _a2;
            return (_a2 = props.valueFormat) !== null && _a2 !== void 0
                ? _a2
                : mergedFormatRef.value;
        });
        function getTimestampValue(value) {
            if (value === null) return null;
            const { value: mergedValueFormat } = mergedValueFormatRef;
            const { value: dateFnsOptions } = dateFnsOptionsRef;
            if (Array.isArray(value)) {
                return [
                    strictParse(
                        value[0],
                        mergedValueFormat,
                        new Date(),
                        dateFnsOptions
                    ).getTime(),
                    strictParse(
                        value[1],
                        mergedValueFormat,
                        new Date(),
                        dateFnsOptions
                    ).getTime(),
                ];
            }
            return strictParse(
                value,
                mergedValueFormat,
                new Date(),
                dateFnsOptions
            ).getTime();
        }
        const { defaultFormattedValue, defaultValue } = props;
        const uncontrolledValueRef = ref(
            (_a =
                defaultFormattedValue !== void 0
                    ? getTimestampValue(defaultFormattedValue)
                    : defaultValue) !== null && _a !== void 0
                ? _a
                : null
        );
        const controlledValueRef = computed(() => {
            const { formattedValue } = props;
            if (formattedValue !== void 0) {
                return getTimestampValue(formattedValue);
            }
            return props.value;
        });
        const mergedValueRef = useMergedState(
            controlledValueRef,
            uncontrolledValueRef
        );
        const pendingValueRef = ref(null);
        watchEffect(() => {
            pendingValueRef.value = mergedValueRef.value;
        });
        const singleInputValueRef = ref('');
        const rangeStartInputValueRef = ref('');
        const rangeEndInputValueRef = ref('');
        const themeRef = useTheme(
            'DatePicker',
            '-date-picker',
            style,
            datePickerLight,
            props,
            mergedClsPrefixRef
        );
        const timePickerSizeRef = computed(() => {
            var _a2, _b;
            return (
                ((_b =
                    (_a2 =
                        mergedComponentPropsRef === null ||
                        mergedComponentPropsRef === void 0
                            ? void 0
                            : mergedComponentPropsRef.value) === null ||
                    _a2 === void 0
                        ? void 0
                        : _a2.DatePicker) === null || _b === void 0
                    ? void 0
                    : _b.timePickerSize) || 'small'
            );
        });
        const isRangeRef = computed(() => {
            return [
                'daterange',
                'datetimerange',
                'monthrange',
                'quarterrange',
                'yearrange',
            ].includes(props.type);
        });
        const localizedPlacehoderRef = computed(() => {
            const { placeholder } = props;
            if (placeholder === void 0) {
                const { type } = props;
                switch (type) {
                    case 'date':
                        return localeRef.value.datePlaceholder;
                    case 'datetime':
                        return localeRef.value.datetimePlaceholder;
                    case 'month':
                        return localeRef.value.monthPlaceholder;
                    case 'year':
                        return localeRef.value.yearPlaceholder;
                    case 'quarter':
                        return localeRef.value.quarterPlaceholder;
                    default:
                        return '';
                }
            } else {
                return placeholder;
            }
        });
        const localizedStartPlaceholderRef = computed(() => {
            if (props.startPlaceholder === void 0) {
                if (props.type === 'daterange') {
                    return localeRef.value.startDatePlaceholder;
                } else if (props.type === 'datetimerange') {
                    return localeRef.value.startDatetimePlaceholder;
                } else if (props.type === 'monthrange') {
                    return localeRef.value.startMonthPlaceholder;
                }
                return '';
            } else {
                return props.startPlaceholder;
            }
        });
        const localizedEndPlaceholderRef = computed(() => {
            if (props.endPlaceholder === void 0) {
                if (props.type === 'daterange') {
                    return localeRef.value.endDatePlaceholder;
                } else if (props.type === 'datetimerange') {
                    return localeRef.value.endDatetimePlaceholder;
                } else if (props.type === 'monthrange') {
                    return localeRef.value.endMonthPlaceholder;
                }
                return '';
            } else {
                return props.endPlaceholder;
            }
        });
        const mergedActionsRef = computed(() => {
            const { actions, type, clearable } = props;
            if (actions === null) return [];
            if (actions !== void 0) return actions;
            const result = clearable ? ['clear'] : [];
            switch (type) {
                case 'date': {
                    result.push('now');
                    return result;
                }
                case 'datetime': {
                    result.push('now', 'confirm');
                    return result;
                }
                case 'daterange': {
                    result.push('confirm');
                    return result;
                }
                case 'datetimerange': {
                    result.push('confirm');
                    return result;
                }
                case 'month': {
                    result.push('now', 'confirm');
                    return result;
                }
                case 'year': {
                    result.push('now');
                    return result;
                }
                case 'quarter': {
                    result.push('now', 'confirm');
                    return result;
                }
                case 'monthrange':
                case 'yearrange':
                case 'quarterrange': {
                    result.push('confirm');
                    return result;
                }
                default: {
                    warn(
                        'date-picker',
                        "The type is wrong, n-date-picker's type only supports `date`, `datetime`, `daterange` and `datetimerange`."
                    );
                    break;
                }
            }
        });
        function getFormattedValue(value) {
            if (value === null) return null;
            if (Array.isArray(value)) {
                const { value: mergedValueFormat } = mergedValueFormatRef;
                const { value: dateFnsOptions } = dateFnsOptionsRef;
                return [
                    format(value[0], mergedValueFormat, dateFnsOptions),
                    format(
                        value[1],
                        mergedValueFormat,
                        dateFnsOptionsRef.value
                    ),
                ];
            } else {
                return format(
                    value,
                    mergedValueFormatRef.value,
                    dateFnsOptionsRef.value
                );
            }
        }
        function doUpdatePendingValue(value) {
            pendingValueRef.value = value;
        }
        function doUpdateFormattedValue(value, timestampValue) {
            const {
                'onUpdate:formattedValue': _onUpdateFormattedValue,
                onUpdateFormattedValue,
            } = props;
            if (_onUpdateFormattedValue) {
                call(_onUpdateFormattedValue, value, timestampValue);
            }
            if (onUpdateFormattedValue) {
                call(onUpdateFormattedValue, value, timestampValue);
            }
        }
        function doUpdateValue(value, options) {
            const {
                'onUpdate:value': _onUpdateValue,
                onUpdateValue,
                onChange,
            } = props;
            const { nTriggerFormChange, nTriggerFormInput } = formItem;
            const formattedValue = getFormattedValue(value);
            if (options.doConfirm) {
                doConfirm(value, formattedValue);
            }
            if (onUpdateValue) {
                call(onUpdateValue, value, formattedValue);
            }
            if (_onUpdateValue) {
                call(_onUpdateValue, value, formattedValue);
            }
            if (onChange) call(onChange, value, formattedValue);
            uncontrolledValueRef.value = value;
            doUpdateFormattedValue(formattedValue, value);
            nTriggerFormChange();
            nTriggerFormInput();
        }
        function doClear() {
            const { onClear } = props;
            onClear === null || onClear === void 0 ? void 0 : onClear();
        }
        function doConfirm(value, formattedValue) {
            const { onConfirm } = props;
            if (onConfirm) onConfirm(value, formattedValue);
        }
        function doFocus(e) {
            const { onFocus } = props;
            const { nTriggerFormFocus } = formItem;
            if (onFocus) call(onFocus, e);
            nTriggerFormFocus();
        }
        function doBlur(e) {
            const { onBlur } = props;
            const { nTriggerFormBlur } = formItem;
            if (onBlur) call(onBlur, e);
            nTriggerFormBlur();
        }
        function doUpdateShow(show) {
            const { 'onUpdate:show': _onUpdateShow, onUpdateShow } = props;
            if (_onUpdateShow) call(_onUpdateShow, show);
            if (onUpdateShow) call(onUpdateShow, show);
            uncontrolledShowRef.value = show;
        }
        function handleKeydown(e) {
            if (e.key === 'Escape') {
                if (mergedShowRef.value) {
                    markEventEffectPerformed(e);
                    closeCalendar({
                        returnFocus: true,
                    });
                }
            }
        }
        function handleInputKeydown(e) {
            if (e.key === 'Escape' && mergedShowRef.value) {
                markEventEffectPerformed(e);
            }
        }
        function handleClear() {
            var _a2;
            doUpdateShow(false);
            (_a2 = inputInstRef.value) === null || _a2 === void 0
                ? void 0
                : _a2.deactivate();
            doClear();
        }
        function handlePanelClear() {
            var _a2;
            (_a2 = inputInstRef.value) === null || _a2 === void 0
                ? void 0
                : _a2.deactivate();
            doClear();
        }
        function handlePanelTabOut() {
            closeCalendar({
                returnFocus: true,
            });
        }
        function handleClickOutside(e) {
            var _a2;
            if (
                mergedShowRef.value &&
                !((_a2 = triggerElRef.value) === null || _a2 === void 0
                    ? void 0
                    : _a2.contains(getPreciseEventTarget(e)))
            ) {
                closeCalendar({
                    returnFocus: false,
                });
            }
        }
        function handlePanelClose(disableUpdateOnClose) {
            closeCalendar({
                returnFocus: true,
                disableUpdateOnClose,
            });
        }
        function handlePanelUpdateValue(value, doUpdate) {
            if (doUpdate) {
                doUpdateValue(value, { doConfirm: false });
            } else {
                doUpdatePendingValue(value);
            }
        }
        function handlePanelConfirm() {
            const pendingValue = pendingValueRef.value;
            doUpdateValue(
                Array.isArray(pendingValue)
                    ? [pendingValue[0], pendingValue[1]]
                    : pendingValue,
                { doConfirm: true }
            );
        }
        function deriveInputState() {
            const { value } = pendingValueRef;
            if (isRangeRef.value) {
                if (Array.isArray(value) || value === null) {
                    deriveRangeInputState(value);
                }
            } else {
                if (!Array.isArray(value)) {
                    deriveSingleInputState(value);
                }
            }
        }
        function deriveSingleInputState(value) {
            if (value === null) {
                singleInputValueRef.value = '';
            } else {
                singleInputValueRef.value = format(
                    value,
                    mergedFormatRef.value,
                    dateFnsOptionsRef.value
                );
            }
        }
        function deriveRangeInputState(values) {
            if (values === null) {
                rangeStartInputValueRef.value = '';
                rangeEndInputValueRef.value = '';
            } else {
                const dateFnsOptions = dateFnsOptionsRef.value;
                rangeStartInputValueRef.value = format(
                    values[0],
                    mergedFormatRef.value,
                    dateFnsOptions
                );
                rangeEndInputValueRef.value = format(
                    values[1],
                    mergedFormatRef.value,
                    dateFnsOptions
                );
            }
        }
        function handleInputActivate() {
            if (!mergedShowRef.value) {
                openCalendar();
            }
        }
        function handleInputBlur(e) {
            var _a2;
            if (
                !((_a2 = panelInstRef.value) === null || _a2 === void 0
                    ? void 0
                    : _a2.$el.contains(e.relatedTarget))
            ) {
                doBlur(e);
                deriveInputState();
                closeCalendar({
                    returnFocus: false,
                });
            }
        }
        function handleInputDeactivate() {
            if (mergedDisabledRef.value) return;
            deriveInputState();
            closeCalendar({
                returnFocus: false,
            });
        }
        function handleSingleUpdateValue(v) {
            if (v === '') {
                doUpdateValue(null, { doConfirm: false });
                pendingValueRef.value = null;
                singleInputValueRef.value = '';
                return;
            }
            const newSelectedDateTime = strictParse(
                v,
                mergedFormatRef.value,
                new Date(),
                dateFnsOptionsRef.value
            );
            if (isValid(newSelectedDateTime)) {
                doUpdateValue(getTime(newSelectedDateTime), {
                    doConfirm: false,
                });
                deriveInputState();
            } else {
                singleInputValueRef.value = v;
            }
        }
        function handleRangeUpdateValue(v) {
            if (v[0] === '' && v[1] === '') {
                doUpdateValue(null, { doConfirm: false });
                pendingValueRef.value = null;
                rangeStartInputValueRef.value = '';
                rangeEndInputValueRef.value = '';
                return;
            }
            const [startTime, endTime] = v;
            const newStartTime = strictParse(
                startTime,
                mergedFormatRef.value,
                new Date(),
                dateFnsOptionsRef.value
            );
            const newEndTime = strictParse(
                endTime,
                mergedFormatRef.value,
                new Date(),
                dateFnsOptionsRef.value
            );
            if (isValid(newStartTime) && isValid(newEndTime)) {
                doUpdateValue([getTime(newStartTime), getTime(newEndTime)], {
                    doConfirm: false,
                });
                deriveInputState();
            } else {
                [rangeStartInputValueRef.value, rangeEndInputValueRef.value] =
                    v;
            }
        }
        function handleTriggerClick(e) {
            if (mergedDisabledRef.value) return;
            if (happensIn(e, 'clear')) return;
            if (!mergedShowRef.value) {
                openCalendar();
            }
        }
        function handleInputFocus(e) {
            if (mergedDisabledRef.value) return;
            doFocus(e);
        }
        function openCalendar() {
            if (mergedDisabledRef.value || mergedShowRef.value) return;
            doUpdateShow(true);
        }
        function closeCalendar({ returnFocus, disableUpdateOnClose }) {
            var _a2;
            if (mergedShowRef.value) {
                doUpdateShow(false);
                if (
                    props.type !== 'date' &&
                    props.updateValueOnClose &&
                    !disableUpdateOnClose
                ) {
                    handlePanelConfirm();
                }
                if (returnFocus) {
                    (_a2 = inputInstRef.value) === null || _a2 === void 0
                        ? void 0
                        : _a2.focus();
                }
            }
        }
        watch(pendingValueRef, () => {
            deriveInputState();
        });
        deriveInputState();
        watch(mergedShowRef, (value) => {
            if (!value) {
                pendingValueRef.value = mergedValueRef.value;
            }
        });
        const uniVaidation = uniCalendarValidation(props, pendingValueRef);
        const dualValidation = dualCalendarValidation(props, pendingValueRef);
        provide(
            datePickerInjectionKey,
            Object.assign(
                Object.assign(
                    Object.assign(
                        {
                            mergedClsPrefixRef,
                            mergedThemeRef: themeRef,
                            timePickerSizeRef,
                            localeRef,
                            dateLocaleRef,
                            firstDayOfWeekRef: toRef(props, 'firstDayOfWeek'),
                            isDateDisabledRef: toRef(props, 'isDateDisabled'),
                            rangesRef: toRef(props, 'ranges'),
                            timePickerPropsRef: toRef(props, 'timePickerProps'),
                            closeOnSelectRef: toRef(props, 'closeOnSelect'),
                            updateValueOnCloseRef: toRef(
                                props,
                                'updateValueOnClose'
                            ),
                        },
                        uniVaidation
                    ),
                    dualValidation
                ),
                { datePickerSlots: slots }
            )
        );
        const exposedMethods = {
            focus: () => {
                var _a2;
                (_a2 = inputInstRef.value) === null || _a2 === void 0
                    ? void 0
                    : _a2.focus();
            },
            blur: () => {
                var _a2;
                (_a2 = inputInstRef.value) === null || _a2 === void 0
                    ? void 0
                    : _a2.blur();
            },
        };
        const triggerCssVarsRef = computed(() => {
            const {
                common: { cubicBezierEaseInOut },
                self: { iconColor, iconColorDisabled },
            } = themeRef.value;
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-icon-color-override': iconColor,
                '--n-icon-color-disabled-override': iconColorDisabled,
            };
        });
        const triggerThemeClassHandle = inlineThemeDisabled
            ? useThemeClass(
                  'date-picker-trigger',
                  void 0,
                  triggerCssVarsRef,
                  props
              )
            : void 0;
        const cssVarsRef = computed(() => {
            const { type } = props;
            const {
                common: { cubicBezierEaseInOut },
                self: {
                    calendarTitleFontSize,
                    calendarDaysFontSize,
                    itemFontSize,
                    itemTextColor,
                    itemColorDisabled,
                    itemColorIncluded,
                    itemColorHover,
                    itemColorActive,
                    itemBorderRadius,
                    itemTextColorDisabled,
                    itemTextColorActive,
                    panelColor,
                    panelTextColor,
                    arrowColor,
                    calendarTitleTextColor,
                    panelActionDividerColor,
                    panelHeaderDividerColor,
                    calendarDaysDividerColor,
                    panelBoxShadow,
                    panelBorderRadius,
                    calendarTitleFontWeight,
                    panelExtraFooterPadding,
                    panelActionPadding,
                    itemSize,
                    itemCellWidth,
                    itemCellHeight,
                    scrollItemWidth,
                    scrollItemHeight,
                    calendarTitlePadding,
                    calendarTitleHeight,
                    calendarDaysHeight,
                    calendarDaysTextColor,
                    arrowSize,
                    panelHeaderPadding,
                    calendarDividerColor,
                    calendarTitleGridTempateColumns,
                    iconColor,
                    iconColorDisabled,
                    scrollItemBorderRadius,
                    calendarTitleColorHover,
                    [createKey('calendarLeftPadding', type)]:
                        calendarLeftPadding,
                    [createKey('calendarRightPadding', type)]:
                        calendarRightPadding,
                },
            } = themeRef.value;
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-panel-border-radius': panelBorderRadius,
                '--n-panel-color': panelColor,
                '--n-panel-box-shadow': panelBoxShadow,
                '--n-panel-text-color': panelTextColor,
                '--n-panel-header-padding': panelHeaderPadding,
                '--n-panel-header-divider-color': panelHeaderDividerColor,
                '--n-calendar-left-padding': calendarLeftPadding,
                '--n-calendar-right-padding': calendarRightPadding,
                '--n-calendar-title-color-hover': calendarTitleColorHover,
                '--n-calendar-title-height': calendarTitleHeight,
                '--n-calendar-title-padding': calendarTitlePadding,
                '--n-calendar-title-font-size': calendarTitleFontSize,
                '--n-calendar-title-font-weight': calendarTitleFontWeight,
                '--n-calendar-title-text-color': calendarTitleTextColor,
                '--n-calendar-title-grid-template-columns':
                    calendarTitleGridTempateColumns,
                '--n-calendar-days-height': calendarDaysHeight,
                '--n-calendar-days-divider-color': calendarDaysDividerColor,
                '--n-calendar-days-font-size': calendarDaysFontSize,
                '--n-calendar-days-text-color': calendarDaysTextColor,
                '--n-calendar-divider-color': calendarDividerColor,
                '--n-panel-action-padding': panelActionPadding,
                '--n-panel-extra-footer-padding': panelExtraFooterPadding,
                '--n-panel-action-divider-color': panelActionDividerColor,
                '--n-item-font-size': itemFontSize,
                '--n-item-border-radius': itemBorderRadius,
                '--n-item-size': itemSize,
                '--n-item-cell-width': itemCellWidth,
                '--n-item-cell-height': itemCellHeight,
                '--n-item-text-color': itemTextColor,
                '--n-item-color-included': itemColorIncluded,
                '--n-item-color-disabled': itemColorDisabled,
                '--n-item-color-hover': itemColorHover,
                '--n-item-color-active': itemColorActive,
                '--n-item-text-color-disabled': itemTextColorDisabled,
                '--n-item-text-color-active': itemTextColorActive,
                '--n-scroll-item-width': scrollItemWidth,
                '--n-scroll-item-height': scrollItemHeight,
                '--n-scroll-item-border-radius': scrollItemBorderRadius,
                '--n-arrow-size': arrowSize,
                '--n-arrow-color': arrowColor,
                '--n-icon-color': iconColor,
                '--n-icon-color-disabled': iconColorDisabled,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass(
                  'date-picker',
                  computed(() => {
                      return props.type;
                  }),
                  cssVarsRef,
                  props
              )
            : void 0;
        return Object.assign(Object.assign({}, exposedMethods), {
            mergedStatus: mergedStatusRef,
            mergedClsPrefix: mergedClsPrefixRef,
            mergedBordered: mergedBorderedRef,
            namespace: namespaceRef,
            uncontrolledValue: uncontrolledValueRef,
            pendingValue: pendingValueRef,
            panelInstRef,
            triggerElRef,
            inputInstRef,
            isMounted: useIsMounted(),
            displayTime: singleInputValueRef,
            displayStartTime: rangeStartInputValueRef,
            displayEndTime: rangeEndInputValueRef,
            mergedShow: mergedShowRef,
            adjustedTo: useAdjustedTo(props),
            isRange: isRangeRef,
            localizedStartPlaceholder: localizedStartPlaceholderRef,
            localizedEndPlaceholder: localizedEndPlaceholderRef,
            mergedSize: mergedSizeRef,
            mergedDisabled: mergedDisabledRef,
            localizedPlacehoder: localizedPlacehoderRef,
            isValueInvalid: uniVaidation.isValueInvalidRef,
            isStartValueInvalid: dualValidation.isStartValueInvalidRef,
            isEndValueInvalid: dualValidation.isEndValueInvalidRef,
            handleInputKeydown,
            handleClickOutside,
            handleKeydown,
            handleClear,
            handlePanelClear,
            handleTriggerClick,
            handleInputActivate,
            handleInputDeactivate,
            handleInputFocus,
            handleInputBlur,
            handlePanelTabOut,
            handlePanelClose,
            handleRangeUpdateValue,
            handleSingleUpdateValue,
            handlePanelUpdateValue,
            handlePanelConfirm,
            mergedTheme: themeRef,
            actions: mergedActionsRef,
            triggerCssVars: inlineThemeDisabled ? void 0 : triggerCssVarsRef,
            triggerThemeClass:
                triggerThemeClassHandle === null ||
                triggerThemeClassHandle === void 0
                    ? void 0
                    : triggerThemeClassHandle.themeClass,
            triggerOnRender:
                triggerThemeClassHandle === null ||
                triggerThemeClassHandle === void 0
                    ? void 0
                    : triggerThemeClassHandle.onRender,
            cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
            themeClass:
                themeClassHandle === null || themeClassHandle === void 0
                    ? void 0
                    : themeClassHandle.themeClass,
            onRender:
                themeClassHandle === null || themeClassHandle === void 0
                    ? void 0
                    : themeClassHandle.onRender,
        });
    },
    render() {
        const { clearable, triggerOnRender, mergedClsPrefix, $slots } = this;
        const commonPanelProps = {
            onUpdateValue: this.handlePanelUpdateValue,
            onTabOut: this.handlePanelTabOut,
            onClose: this.handlePanelClose,
            onClear: this.handlePanelClear,
            onKeydown: this.handleKeydown,
            onConfirm: this.handlePanelConfirm,
            ref: 'panelInstRef',
            value: this.pendingValue,
            active: this.mergedShow,
            actions: this.actions,
            shortcuts: this.shortcuts,
            style: this.cssVars,
            defaultTime: this.defaultTime,
            themeClass: this.themeClass,
            panel: this.panel,
            onRender: this.onRender,
        };
        const renderPanel = () => {
            const { type } = this;
            return type === 'datetime'
                ? h(DatetimePanel, Object.assign({}, commonPanelProps), $slots)
                : type === 'daterange'
                ? h(
                      DaterangePanel,
                      Object.assign({}, commonPanelProps, {
                          defaultCalendarStartTime:
                              this.defaultCalendarStartTime,
                          defaultCalendarEndTime: this.defaultCalendarEndTime,
                          bindCalendarMonths: this.bindCalendarMonths,
                      }),
                      $slots
                  )
                : type === 'datetimerange'
                ? h(
                      DatetimerangePanel,
                      Object.assign({}, commonPanelProps, {
                          defaultCalendarStartTime:
                              this.defaultCalendarStartTime,
                          defaultCalendarEndTime: this.defaultCalendarEndTime,
                          bindCalendarMonths: this.bindCalendarMonths,
                      }),
                      $slots
                  )
                : type === 'month' || type === 'year' || type === 'quarter'
                ? h(
                      MonthPanel,
                      Object.assign({}, commonPanelProps, { type, key: type })
                  )
                : type === 'monthrange' ||
                  type === 'yearrange' ||
                  type === 'quarterrange'
                ? h(
                      MonthRangePanel,
                      Object.assign({}, commonPanelProps, { type })
                  )
                : h(DatePanel, Object.assign({}, commonPanelProps), $slots);
        };
        if (this.panel) {
            return renderPanel();
        }
        triggerOnRender === null || triggerOnRender === void 0
            ? void 0
            : triggerOnRender();
        const commonInputProps = {
            bordered: this.mergedBordered,
            size: this.mergedSize,
            passivelyActivated: true,
            disabled: this.mergedDisabled,
            readonly: this.inputReadonly || this.mergedDisabled,
            clearable,
            onClear: this.handleClear,
            onClick: this.handleTriggerClick,
            onKeydown: this.handleInputKeydown,
            onActivate: this.handleInputActivate,
            onDeactivate: this.handleInputDeactivate,
            onFocus: this.handleInputFocus,
            onBlur: this.handleInputBlur,
        };
        return h(
            'div',
            {
                ref: 'triggerElRef',
                class: [
                    `${mergedClsPrefix}-date-picker`,
                    this.mergedDisabled &&
                        `${mergedClsPrefix}-date-picker--disabled`,
                    this.isRange && `${mergedClsPrefix}-date-picker--range`,
                    this.triggerThemeClass,
                ],
                style: this.triggerCssVars,
                onKeydown: this.handleKeydown,
            },
            h(VBinder, null, {
                default: () => [
                    h(VTarget, null, {
                        default: () =>
                            this.isRange
                                ? h(
                                      NInput,
                                      Object.assign(
                                          {
                                              ref: 'inputInstRef',
                                              status: this.mergedStatus,
                                              value: [
                                                  this.displayStartTime,
                                                  this.displayEndTime,
                                              ],
                                              placeholder: [
                                                  this
                                                      .localizedStartPlaceholder,
                                                  this.localizedEndPlaceholder,
                                              ],
                                              textDecoration: [
                                                  this.isStartValueInvalid
                                                      ? 'line-through'
                                                      : '',
                                                  this.isEndValueInvalid
                                                      ? 'line-through'
                                                      : '',
                                              ],
                                              pair: true,
                                              onUpdateValue:
                                                  this.handleRangeUpdateValue,
                                              theme: this.mergedTheme.peers
                                                  .Input,
                                              themeOverrides:
                                                  this.mergedTheme.peerOverrides
                                                      .Input,
                                              internalForceFocus:
                                                  this.mergedShow,
                                              internalDeactivateOnEnter: true,
                                          },
                                          commonInputProps
                                      ),
                                      {
                                          separator: () =>
                                              this.separator === void 0
                                                  ? resolveSlot(
                                                        $slots.separator,
                                                        () => [
                                                            h(
                                                                NBaseIcon,
                                                                {
                                                                    clsPrefix:
                                                                        mergedClsPrefix,
                                                                    class: `${mergedClsPrefix}-date-picker-icon`,
                                                                },
                                                                {
                                                                    default:
                                                                        () =>
                                                                            h(
                                                                                ToIcon,
                                                                                null
                                                                            ),
                                                                }
                                                            ),
                                                        ]
                                                    )
                                                  : this.separator,
                                          [clearable
                                              ? 'clear-icon-placeholder'
                                              : 'suffix']: () =>
                                              resolveSlot(
                                                  $slots['date-icon'],
                                                  () => [
                                                      h(
                                                          NBaseIcon,
                                                          {
                                                              clsPrefix:
                                                                  mergedClsPrefix,
                                                              class: `${mergedClsPrefix}-date-picker-icon`,
                                                          },
                                                          {
                                                              default: () =>
                                                                  h(
                                                                      DateIcon,
                                                                      null
                                                                  ),
                                                          }
                                                      ),
                                                  ]
                                              ),
                                      }
                                  )
                                : h(
                                      NInput,
                                      Object.assign(
                                          {
                                              ref: 'inputInstRef',
                                              status: this.mergedStatus,
                                              value: this.displayTime,
                                              placeholder:
                                                  this.localizedPlacehoder,
                                              textDecoration:
                                                  this.isValueInvalid &&
                                                  !this.isRange
                                                      ? 'line-through'
                                                      : '',
                                              onUpdateValue:
                                                  this.handleSingleUpdateValue,
                                              theme: this.mergedTheme.peers
                                                  .Input,
                                              themeOverrides:
                                                  this.mergedTheme.peerOverrides
                                                      .Input,
                                              internalForceFocus:
                                                  this.mergedShow,
                                              internalDeactivateOnEnter: true,
                                          },
                                          commonInputProps
                                      ),
                                      {
                                          [clearable
                                              ? 'clear-icon-placeholder'
                                              : 'suffix']: () =>
                                              h(
                                                  NBaseIcon,
                                                  {
                                                      clsPrefix:
                                                          mergedClsPrefix,
                                                      class: `${mergedClsPrefix}-date-picker-icon`,
                                                  },
                                                  {
                                                      default: () =>
                                                          resolveSlot(
                                                              $slots[
                                                                  'date-icon'
                                                              ],
                                                              () => [
                                                                  h(
                                                                      DateIcon,
                                                                      null
                                                                  ),
                                                              ]
                                                          ),
                                                  }
                                              ),
                                      }
                                  ),
                    }),
                    h(
                        VFollower,
                        {
                            show: this.mergedShow,
                            containerClass: this.namespace,
                            to: this.adjustedTo,
                            teleportDisabled:
                                this.adjustedTo === useAdjustedTo.tdkey,
                            placement: this.placement,
                        },
                        {
                            default: () =>
                                h(
                                    Transition,
                                    {
                                        name: 'fade-in-scale-up-transition',
                                        appear: this.isMounted,
                                    },
                                    {
                                        default: () => {
                                            if (!this.mergedShow) return null;
                                            return withDirectives(
                                                renderPanel(),
                                                [
                                                    [
                                                        clickoutside,
                                                        this.handleClickOutside,
                                                        void 0,
                                                        { capture: true },
                                                    ],
                                                ]
                                            );
                                        },
                                    }
                                ),
                        }
                    ),
                ],
            })
        );
    },
});
