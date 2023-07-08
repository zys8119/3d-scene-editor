import { useTheme } from '../../_mixins';
import { createInjectionKey } from '../../_utils';
export const imagePreviewSharedProps = Object.assign(
    Object.assign({}, useTheme.props),
    {
        showToolbar: { type: Boolean, default: true },
        showToolbarTooltip: Boolean,
    }
);
export const imageContextKey = createInjectionKey('n-image');
