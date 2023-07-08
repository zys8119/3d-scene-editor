import { inject, computed, ref } from 'vue';
import { get } from 'lodash-es';
import { formInjectionKey } from './context';
import { formatLength } from '../../_utils';
export function formItemSize(props) {
    const NForm = inject(formInjectionKey, null);
    return {
        mergedSize: computed(() => {
            if (props.size !== void 0) return props.size;
            if (
                (NForm === null || NForm === void 0
                    ? void 0
                    : NForm.props.size) !== void 0
            )
                return NForm.props.size;
            return 'medium';
        }),
    };
}
export function formItemMisc(props) {
    const NForm = inject(formInjectionKey, null);
    const mergedLabelPlacementRef = computed(() => {
        const { labelPlacement } = props;
        if (labelPlacement !== void 0) return labelPlacement;
        if (
            NForm === null || NForm === void 0
                ? void 0
                : NForm.props.labelPlacement
        )
            return NForm.props.labelPlacement;
        return 'top';
    });
    const isAutoLabelWidthRef = computed(() => {
        return (
            mergedLabelPlacementRef.value === 'left' &&
            (props.labelWidth === 'auto' ||
                (NForm === null || NForm === void 0
                    ? void 0
                    : NForm.props.labelWidth) === 'auto')
        );
    });
    const mergedLabelWidthRef = computed(() => {
        if (mergedLabelPlacementRef.value === 'top') return;
        const { labelWidth } = props;
        if (labelWidth !== void 0 && labelWidth !== 'auto') {
            return formatLength(labelWidth);
        }
        if (isAutoLabelWidthRef.value) {
            const autoComputedWidth =
                NForm === null || NForm === void 0
                    ? void 0
                    : NForm.maxChildLabelWidthRef.value;
            if (autoComputedWidth !== void 0) {
                return formatLength(autoComputedWidth);
            } else {
                return void 0;
            }
        }
        if (
            (NForm === null || NForm === void 0
                ? void 0
                : NForm.props.labelWidth) !== void 0
        ) {
            return formatLength(NForm.props.labelWidth);
        }
        return void 0;
    });
    const mergedLabelAlignRef = computed(() => {
        const { labelAlign } = props;
        if (labelAlign) return labelAlign;
        if (
            NForm === null || NForm === void 0 ? void 0 : NForm.props.labelAlign
        )
            return NForm.props.labelAlign;
        return void 0;
    });
    const mergedLabelStyleRef = computed(() => {
        var _a;
        return [
            (_a = props.labelProps) === null || _a === void 0
                ? void 0
                : _a.style,
            props.labelStyle,
            {
                width: mergedLabelWidthRef.value,
            },
        ];
    });
    const mergedShowRequireMarkRef = computed(() => {
        const { showRequireMark } = props;
        if (showRequireMark !== void 0) return showRequireMark;
        return NForm === null || NForm === void 0
            ? void 0
            : NForm.props.showRequireMark;
    });
    const mergedRequireMarkPlacementRef = computed(() => {
        const { requireMarkPlacement } = props;
        if (requireMarkPlacement !== void 0) return requireMarkPlacement;
        return (
            (NForm === null || NForm === void 0
                ? void 0
                : NForm.props.requireMarkPlacement) || 'right'
        );
    });
    const validationErroredRef = ref(false);
    const mergedValidationStatusRef = computed(() => {
        const { validationStatus } = props;
        if (validationStatus !== void 0) return validationStatus;
        if (validationErroredRef.value) return 'error';
        return void 0;
    });
    const mergedShowFeedbackRef = computed(() => {
        const { showFeedback } = props;
        if (showFeedback !== void 0) return showFeedback;
        if (
            (NForm === null || NForm === void 0
                ? void 0
                : NForm.props.showFeedback) !== void 0
        )
            return NForm.props.showFeedback;
        return true;
    });
    const mergedShowLabelRef = computed(() => {
        const { showLabel } = props;
        if (showLabel !== void 0) return showLabel;
        if (
            (NForm === null || NForm === void 0
                ? void 0
                : NForm.props.showLabel) !== void 0
        )
            return NForm.props.showLabel;
        return true;
    });
    return {
        validationErrored: validationErroredRef,
        mergedLabelStyle: mergedLabelStyleRef,
        mergedLabelPlacement: mergedLabelPlacementRef,
        mergedLabelAlign: mergedLabelAlignRef,
        mergedShowRequireMark: mergedShowRequireMarkRef,
        mergedRequireMarkPlacement: mergedRequireMarkPlacementRef,
        mergedValidationStatus: mergedValidationStatusRef,
        mergedShowFeedback: mergedShowFeedbackRef,
        mergedShowLabel: mergedShowLabelRef,
        isAutoLabelWidth: isAutoLabelWidthRef,
    };
}
export function formItemRule(props) {
    const NForm = inject(formInjectionKey, null);
    const compatibleRulePathRef = computed(() => {
        const { rulePath } = props;
        if (rulePath !== void 0) return rulePath;
        const { path } = props;
        if (path !== void 0) return path;
        return void 0;
    });
    const mergedRulesRef = computed(() => {
        const rules = [];
        const { rule } = props;
        if (rule !== void 0) {
            if (Array.isArray(rule)) rules.push(...rule);
            else rules.push(rule);
        }
        if (NForm) {
            const { rules: formRules } = NForm.props;
            const { value: rulePath } = compatibleRulePathRef;
            if (formRules !== void 0 && rulePath !== void 0) {
                const formRule = get(formRules, rulePath);
                if (formRule !== void 0) {
                    if (Array.isArray(formRule)) {
                        rules.push(...formRule);
                    } else {
                        rules.push(formRule);
                    }
                }
            }
        }
        return rules;
    });
    const hasRequiredRuleRef = computed(() => {
        return mergedRulesRef.value.some((rule) => rule.required);
    });
    const mergedRequiredRef = computed(() => {
        return hasRequiredRuleRef.value || props.required;
    });
    return {
        mergedRules: mergedRulesRef,
        mergedRequired: mergedRequiredRef,
    };
}
