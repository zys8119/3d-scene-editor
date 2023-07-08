var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.timeProps = void 0;
const vue_1 = require('vue');
const date_fns_1 = require('date-fns');
const formatInTimeZone_1 = __importDefault(
    require('date-fns-tz/formatInTimeZone')
);
const _mixins_1 = require('../../_mixins');
exports.timeProps = {
    time: {
        type: [Number, Date],
        default: void 0,
    },
    type: {
        type: String,
        default: 'datetime',
    },
    to: {
        type: [Number, Date],
        default: void 0,
    },
    unix: Boolean,
    format: String,
    text: Boolean,
    timeZone: String,
};
exports.default = (0, vue_1.defineComponent)({
    name: 'Time',
    props: exports.timeProps,
    setup(props) {
        const now = Date.now();
        const { localeRef, dateLocaleRef } = (0, _mixins_1.useLocale)('Time');
        const mergedFormatRef = (0, vue_1.computed)(() => {
            const { timeZone } = props;
            if (timeZone) {
                return (time, _format, options) => {
                    return (0, formatInTimeZone_1.default)(
                        time,
                        timeZone,
                        _format,
                        options
                    );
                };
            }
            return date_fns_1.format;
        });
        const dateFnsOptionsRef = (0, vue_1.computed)(() => {
            return {
                locale: dateLocaleRef.value.locale,
            };
        });
        const mergedTimeRef = (0, vue_1.computed)(() => {
            const { time } = props;
            if (props.unix) {
                if (time === void 0) return now;
                return (0, date_fns_1.fromUnixTime)(
                    typeof time === 'number' ? time : time.valueOf()
                );
            }
            return time !== null && time !== void 0 ? time : now;
        });
        const mergedToRef = (0, vue_1.computed)(() => {
            const { to } = props;
            if (props.unix) {
                if (to === void 0) return now;
                return (0, date_fns_1.fromUnixTime)(
                    typeof to === 'number' ? to : to.valueOf()
                );
            }
            return to !== null && to !== void 0 ? to : now;
        });
        const renderedTimeRef = (0, vue_1.computed)(() => {
            if (props.format) {
                return mergedFormatRef.value(
                    mergedTimeRef.value,
                    props.format,
                    dateFnsOptionsRef.value
                );
            } else if (props.type === 'date') {
                return mergedFormatRef.value(
                    mergedTimeRef.value,
                    localeRef.value.dateFormat,
                    dateFnsOptionsRef.value
                );
            } else if (props.type === 'datetime') {
                return mergedFormatRef.value(
                    mergedTimeRef.value,
                    localeRef.value.dateTimeFormat,
                    dateFnsOptionsRef.value
                );
            } else {
                return (0, date_fns_1.formatDistanceStrict)(
                    mergedTimeRef.value,
                    mergedToRef.value,
                    {
                        addSuffix: true,
                        locale: dateLocaleRef.value.locale,
                    }
                );
            }
        });
        return {
            renderedTime: renderedTimeRef,
        };
    },
    render() {
        return this.text
            ? (0, vue_1.createTextVNode)(this.renderedTime)
            : (0, vue_1.h)('time', [this.renderedTime]);
    },
});
