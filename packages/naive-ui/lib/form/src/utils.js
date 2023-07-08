Object.defineProperty(exports, '__esModule', { value: true });
exports.formItemRule = exports.formItemMisc = exports.formItemSize = void 0;
const vue_1 = require('vue');
const lodash_1 = require('lodash');
const context_1 = require('./context');
const _utils_1 = require('../../_utils');
function formItemSize(props) {
    const NForm = (0, vue_1.inject)(context_1.formInjectionKey, null);
    return {
        mergedSize: (0, vue_1.computed)(() => {
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
exports.formItemSize = formItemSize;
function formItemMisc(props) {
    const NForm = (0, vue_1.inject)(context_1.formInjectionKey, null);
    const mergedLabelPlacementRef = (0, vue_1.computed)(() => {
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
    const isAutoLabelWidthRef = (0, vue_1.computed)(() => {
        return (
            mergedLabelPlacementRef.value === 'left' &&
            (props.labelWidth === 'auto' ||
                (NForm === null || NForm === void 0
                    ? void 0
                    : NForm.props.labelWidth) === 'auto')
        );
    });
    const mergedLabelWidthRef = (0, vue_1.computed)(() => {
        if (mergedLabelPlacementRef.value === 'top') return;
        const { labelWidth } = props;
        if (labelWidth !== void 0 && labelWidth !== 'auto') {
            return (0, _utils_1.formatLength)(labelWidth);
        }
        if (isAutoLabelWidthRef.value) {
            const autoComputedWidth =
                NForm === null || NForm === void 0
                    ? void 0
                    : NForm.maxChildLabelWidthRef.value;
            if (autoComputedWidth !== void 0) {
                return (0, _utils_1.formatLength)(autoComputedWidth);
            } else {
                return void 0;
            }
        }
        if (
            (NForm === null || NForm === void 0
                ? void 0
                : NForm.props.labelWidth) !== void 0
        ) {
            return (0, _utils_1.formatLength)(NForm.props.labelWidth);
        }
        return void 0;
    });
    const mergedLabelAlignRef = (0, vue_1.computed)(() => {
        const { labelAlign } = props;
        if (labelAlign) return labelAlign;
        if (
            NForm === null || NForm === void 0 ? void 0 : NForm.props.labelAlign
        )
            return NForm.props.labelAlign;
        return void 0;
    });
    const mergedLabelStyleRef = (0, vue_1.computed)(() => {
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
    const mergedShowRequireMarkRef = (0, vue_1.computed)(() => {
        const { showRequireMark } = props;
        if (showRequireMark !== void 0) return showRequireMark;
        return NForm === null || NForm === void 0
            ? void 0
            : NForm.props.showRequireMark;
    });
    const mergedRequireMarkPlacementRef = (0, vue_1.computed)(() => {
        const { requireMarkPlacement } = props;
        if (requireMarkPlacement !== void 0) return requireMarkPlacement;
        return (
            (NForm === null || NForm === void 0
                ? void 0
                : NForm.props.requireMarkPlacement) || 'right'
        );
    });
    const validationErroredRef = (0, vue_1.ref)(false);
    const mergedValidationStatusRef = (0, vue_1.computed)(() => {
        const { validationStatus } = props;
        if (validationStatus !== void 0) return validationStatus;
        if (validationErroredRef.value) return 'error';
        return void 0;
    });
    const mergedShowFeedbackRef = (0, vue_1.computed)(() => {
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
    const mergedShowLabelRef = (0, vue_1.computed)(() => {
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
exports.formItemMisc = formItemMisc;
function formItemRule(props) {
    const NForm = (0, vue_1.inject)(context_1.formInjectionKey, null);
    const compatibleRulePathRef = (0, vue_1.computed)(() => {
        const { rulePath } = props;
        if (rulePath !== void 0) return rulePath;
        const { path } = props;
        if (path !== void 0) return path;
        return void 0;
    });
    const mergedRulesRef = (0, vue_1.computed)(() => {
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
                const formRule = (0, lodash_1.get)(formRules, rulePath);
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
    const hasRequiredRuleRef = (0, vue_1.computed)(() => {
        return mergedRulesRef.value.some((rule) => rule.required);
    });
    const mergedRequiredRef = (0, vue_1.computed)(() => {
        return hasRequiredRuleRef.value || props.required;
    });
    return {
        mergedRules: mergedRulesRef,
        mergedRequired: mergedRequiredRef,
    };
}
exports.formItemRule = formItemRule;
