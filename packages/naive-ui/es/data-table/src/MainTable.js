import { h, ref, defineComponent, inject, computed, watchEffect } from 'vue';
import { formatLength } from '../../_utils';
import TableHeader from './TableParts/Header';
import TableBody from './TableParts/Body';
import { dataTableInjectionKey } from './interface';
export default defineComponent({
    setup() {
        const {
            mergedClsPrefixRef,
            rightFixedColumnsRef,
            leftFixedColumnsRef,
            bodyWidthRef,
            maxHeightRef,
            minHeightRef,
            flexHeightRef,
            syncScrollState,
        } = inject(dataTableInjectionKey);
        const headerInstRef = ref(null);
        const bodyInstRef = ref(null);
        const selfElRef = ref(null);
        const fixedStateInitializedRef = ref(
            !(
                leftFixedColumnsRef.value.length ||
                rightFixedColumnsRef.value.length
            )
        );
        const bodyStyleRef = computed(() => {
            return {
                maxHeight: formatLength(maxHeightRef.value),
                minHeight: formatLength(minHeightRef.value),
            };
        });
        function handleBodyResize(entry) {
            bodyWidthRef.value = entry.contentRect.width;
            syncScrollState();
            if (!fixedStateInitializedRef.value) {
                fixedStateInitializedRef.value = true;
            }
        }
        function getHeaderElement() {
            const { value } = headerInstRef;
            if (value) {
                return value.$el;
            }
            return null;
        }
        function getBodyElement() {
            const { value } = bodyInstRef;
            if (value) {
                return value.getScrollContainer();
            }
            return null;
        }
        const exposedMethods = {
            getBodyElement,
            getHeaderElement,
            scrollTo(arg0, arg1) {
                var _a;
                (_a = bodyInstRef.value) === null || _a === void 0
                    ? void 0
                    : _a.scrollTo(arg0, arg1);
            },
        };
        watchEffect(() => {
            const { value: selfEl } = selfElRef;
            if (!selfEl) return;
            const transitionDisabledClass = `${mergedClsPrefixRef.value}-data-table-base-table--transition-disabled`;
            if (fixedStateInitializedRef.value) {
                setTimeout(() => {
                    selfEl.classList.remove(transitionDisabledClass);
                }, 0);
            } else {
                selfEl.classList.add(transitionDisabledClass);
            }
        });
        return Object.assign(
            {
                maxHeight: maxHeightRef,
                mergedClsPrefix: mergedClsPrefixRef,
                selfElRef,
                headerInstRef,
                bodyInstRef,
                bodyStyle: bodyStyleRef,
                flexHeight: flexHeightRef,
                handleBodyResize,
            },
            exposedMethods
        );
    },
    render() {
        const { mergedClsPrefix, maxHeight, flexHeight } = this;
        const headerInBody = maxHeight === void 0 && !flexHeight;
        return h(
            'div',
            {
                class: `${mergedClsPrefix}-data-table-base-table`,
                ref: 'selfElRef',
            },
            headerInBody ? null : h(TableHeader, { ref: 'headerInstRef' }),
            h(TableBody, {
                ref: 'bodyInstRef',
                bodyStyle: this.bodyStyle,
                showHeader: headerInBody,
                flexHeight,
                onResize: this.handleBodyResize,
            })
        );
    },
});
