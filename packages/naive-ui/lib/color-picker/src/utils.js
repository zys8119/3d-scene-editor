Object.defineProperty(exports, '__esModule', { value: true });
exports.convertColor =
    exports.normalizeAlpha =
    exports.normalizeHue =
    exports.floor =
    exports.getModeFromValue =
    exports.deriveDefaultValue =
        void 0;
const seemly_1 = require('seemly');
const _utils_1 = require('../../_utils');
function deriveDefaultValue(modes, showAlpha) {
    const mode = modes[0];
    switch (mode) {
        case 'hex':
            return showAlpha ? '#000000FF' : '#000000';
        case 'rgb':
            return showAlpha ? 'rgba(0, 0, 0, 1)' : 'rgb(0, 0, 0)';
        case 'hsl':
            return showAlpha ? 'hsla(0, 0%, 0%, 1)' : 'hsl(0, 0%, 0%)';
        case 'hsv':
            return showAlpha ? 'hsva(0, 0%, 0%, 1)' : 'hsv(0, 0%, 0%)';
    }
    if (process.env.NODE_ENV !== 'production')
        (0, _utils_1.warn)('color-picker', 'props.modes is invalid.');
    return '#000000';
}
exports.deriveDefaultValue = deriveDefaultValue;
function getModeFromValue(color) {
    if (color === null) return null;
    if (/^ *#/.test(color)) return 'hex';
    if (color.includes('rgb')) return 'rgb';
    if (color.includes('hsl')) return 'hsl';
    if (color.includes('hsv')) return 'hsv';
    return null;
}
exports.getModeFromValue = getModeFromValue;
function floor(color) {
    return color.map((channel) => Math.floor(channel));
}
exports.floor = floor;
function normalizeHue(hue) {
    hue = Math.round(hue);
    return hue >= 360 ? 359 : hue < 0 ? 0 : hue;
}
exports.normalizeHue = normalizeHue;
function normalizeAlpha(alpha) {
    alpha = Math.round(alpha * 100) / 100;
    return alpha > 1 ? 1 : alpha < 0 ? 0 : alpha;
}
exports.normalizeAlpha = normalizeAlpha;
const convert = {
    rgb: {
        hex(value) {
            return (0, seemly_1.toHexaString)((0, seemly_1.rgba)(value));
        },
        hsl(value) {
            const [r, g, b, a] = (0, seemly_1.rgba)(value);
            return (0, seemly_1.toHslaString)([
                ...(0, seemly_1.rgb2hsl)(r, g, b),
                a,
            ]);
        },
        hsv(value) {
            const [r, g, b, a] = (0, seemly_1.rgba)(value);
            return (0, seemly_1.toHsvaString)([
                ...(0, seemly_1.rgb2hsv)(r, g, b),
                a,
            ]);
        },
    },
    hex: {
        rgb(value) {
            return (0, seemly_1.toRgbaString)((0, seemly_1.rgba)(value));
        },
        hsl(value) {
            const [r, g, b, a] = (0, seemly_1.rgba)(value);
            return (0, seemly_1.toHslaString)([
                ...(0, seemly_1.rgb2hsl)(r, g, b),
                a,
            ]);
        },
        hsv(value) {
            const [r, g, b, a] = (0, seemly_1.rgba)(value);
            return (0, seemly_1.toHsvaString)([
                ...(0, seemly_1.rgb2hsv)(r, g, b),
                a,
            ]);
        },
    },
    hsl: {
        hex(value) {
            const [h, s, l, a] = (0, seemly_1.hsla)(value);
            return (0, seemly_1.toHexaString)([
                ...(0, seemly_1.hsl2rgb)(h, s, l),
                a,
            ]);
        },
        rgb(value) {
            const [h, s, l, a] = (0, seemly_1.hsla)(value);
            return (0, seemly_1.toRgbaString)([
                ...(0, seemly_1.hsl2rgb)(h, s, l),
                a,
            ]);
        },
        hsv(value) {
            const [h, s, l, a] = (0, seemly_1.hsla)(value);
            return (0, seemly_1.toHsvaString)([
                ...(0, seemly_1.hsl2hsv)(h, s, l),
                a,
            ]);
        },
    },
    hsv: {
        hex(value) {
            const [h, s, v, a] = (0, seemly_1.hsva)(value);
            return (0, seemly_1.toHexaString)([
                ...(0, seemly_1.hsv2rgb)(h, s, v),
                a,
            ]);
        },
        rgb(value) {
            const [h, s, v, a] = (0, seemly_1.hsva)(value);
            return (0, seemly_1.toRgbaString)([
                ...(0, seemly_1.hsv2rgb)(h, s, v),
                a,
            ]);
        },
        hsl(value) {
            const [h, s, v, a] = (0, seemly_1.hsva)(value);
            return (0, seemly_1.toHslaString)([
                ...(0, seemly_1.hsv2hsl)(h, s, v),
                a,
            ]);
        },
    },
};
function convertColor(value, mode, originalMode) {
    originalMode = originalMode || getModeFromValue(value);
    if (!originalMode) return null;
    if (originalMode === mode) return value;
    const conversions = convert[originalMode];
    return conversions[mode](value);
}
exports.convertColor = convertColor;
