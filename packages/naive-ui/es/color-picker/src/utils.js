import {
    hsl2hsv,
    hsl2rgb,
    hsla,
    hsv2hsl,
    hsv2rgb,
    hsva,
    rgb2hsl,
    rgb2hsv,
    rgba,
    toHexaString,
    toHslaString,
    toHsvaString,
    toRgbaString,
} from 'seemly';
import { warn } from '../../_utils';
export function deriveDefaultValue(modes, showAlpha) {
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
        warn('color-picker', 'props.modes is invalid.');
    return '#000000';
}
export function getModeFromValue(color) {
    if (color === null) return null;
    if (/^ *#/.test(color)) return 'hex';
    if (color.includes('rgb')) return 'rgb';
    if (color.includes('hsl')) return 'hsl';
    if (color.includes('hsv')) return 'hsv';
    return null;
}
export function floor(color) {
    return color.map((channel) => Math.floor(channel));
}
export function normalizeHue(hue) {
    hue = Math.round(hue);
    return hue >= 360 ? 359 : hue < 0 ? 0 : hue;
}
export function normalizeAlpha(alpha) {
    alpha = Math.round(alpha * 100) / 100;
    return alpha > 1 ? 1 : alpha < 0 ? 0 : alpha;
}
const convert = {
    rgb: {
        hex(value) {
            return toHexaString(rgba(value));
        },
        hsl(value) {
            const [r, g, b, a] = rgba(value);
            return toHslaString([...rgb2hsl(r, g, b), a]);
        },
        hsv(value) {
            const [r, g, b, a] = rgba(value);
            return toHsvaString([...rgb2hsv(r, g, b), a]);
        },
    },
    hex: {
        rgb(value) {
            return toRgbaString(rgba(value));
        },
        hsl(value) {
            const [r, g, b, a] = rgba(value);
            return toHslaString([...rgb2hsl(r, g, b), a]);
        },
        hsv(value) {
            const [r, g, b, a] = rgba(value);
            return toHsvaString([...rgb2hsv(r, g, b), a]);
        },
    },
    hsl: {
        hex(value) {
            const [h, s, l, a] = hsla(value);
            return toHexaString([...hsl2rgb(h, s, l), a]);
        },
        rgb(value) {
            const [h, s, l, a] = hsla(value);
            return toRgbaString([...hsl2rgb(h, s, l), a]);
        },
        hsv(value) {
            const [h, s, l, a] = hsla(value);
            return toHsvaString([...hsl2hsv(h, s, l), a]);
        },
    },
    hsv: {
        hex(value) {
            const [h, s, v, a] = hsva(value);
            return toHexaString([...hsv2rgb(h, s, v), a]);
        },
        rgb(value) {
            const [h, s, v, a] = hsva(value);
            return toRgbaString([...hsv2rgb(h, s, v), a]);
        },
        hsl(value) {
            const [h, s, v, a] = hsva(value);
            return toHslaString([...hsv2hsl(h, s, v), a]);
        },
    },
};
export function convertColor(value, mode, originalMode) {
    originalMode = originalMode || getModeFromValue(value);
    if (!originalMode) return null;
    if (originalMode === mode) return value;
    const conversions = convert[originalMode];
    return conversions[mode](value);
}
