Object.defineProperty(exports, '__esModule', { value: true });
exports.countdownProps = void 0;
const vue_1 = require('vue');
exports.countdownProps = {
    duration: {
        type: Number,
        default: 0,
    },
    active: {
        type: Boolean,
        default: true,
    },
    precision: {
        type: Number,
        default: 0,
    },
    render: Function,
    onFinish: Function,
};
exports.default = (0, vue_1.defineComponent)({
    name: 'Countdown',
    props: exports.countdownProps,
    setup(props) {
        let timerId = null;
        let elapsed = 0;
        let finished = false;
        const distanceRef = (0, vue_1.ref)(0);
        (0, vue_1.watchEffect)(() => {
            distanceRef.value = props.duration;
        });
        let pnow = -1;
        function getDistance(time) {
            return props.duration - elapsed + pnow - time;
        }
        function getTimeInfo(distance) {
            const day = Math.floor(distance / 864e5);
            const hours = Math.floor(distance / 36e5) % 24;
            const minutes = Math.floor((distance % 36e5) / 6e4);
            const seconds = Math.floor((distance % 6e4) / 1e3);
            const milliseconds = Math.floor(distance % 1e3);
            return {
                day,
                hours,
                minutes,
                seconds,
                milliseconds,
            };
        }
        function getDisplayValue(info) {
            const { day, hours, minutes, seconds, milliseconds } = info;
            const { precision } = props;
            switch (precision) {
                case 0:
                    return `${String(hours).padStart(2, '0')}:${String(
                        minutes
                    ).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
                case 3:
                    return `${String(day).padStart(2, '0')}\u5929${String(
                        hours
                    ).padStart(2, '0')}\u65F6${String(minutes).padStart(
                        2,
                        '0'
                    )}\u5206${String(seconds).padStart(2, '0')}\u79D2`;
                default:
                    return `${String(hours).padStart(2, '0')}:${String(
                        minutes
                    ).padStart(2, '0')}:${String(seconds).padStart(
                        2,
                        '0'
                    )}.${String(
                        Math.floor(
                            milliseconds /
                                (precision === 1
                                    ? 100
                                    : precision === 2
                                    ? 10
                                    : 1)
                        )
                    ).padStart(precision, '0')}`;
            }
        }
        const frame = () => {
            var _a;
            const { precision } = props;
            const distance = getDistance(performance.now());
            if (distance <= 0) {
                distanceRef.value = 0;
                stopTimer();
                if (!finished) {
                    finished = true;
                    (_a = props.onFinish) === null || _a === void 0
                        ? void 0
                        : _a.call(props);
                }
                return;
            }
            let leftTime;
            switch (precision) {
                case 3:
                case 2:
                    leftTime = distance % 34;
                    break;
                case 1:
                    leftTime = distance % 100;
                    break;
                default:
                    leftTime = distance % 1e3;
            }
            distanceRef.value = distance;
            timerId = window.setTimeout(() => {
                frame();
            }, leftTime);
        };
        const stopTimer = () => {
            if (timerId !== null) {
                window.clearTimeout(timerId);
                timerId = null;
            }
        };
        (0, vue_1.onMounted)(() => {
            (0, vue_1.watchEffect)(() => {
                if (props.active) {
                    pnow = performance.now();
                    frame();
                } else {
                    const now = performance.now();
                    if (pnow !== -1) {
                        elapsed += now - pnow;
                    }
                    stopTimer();
                }
            });
        });
        (0, vue_1.onBeforeUnmount)(() => {
            stopTimer();
        });
        function reset() {
            distanceRef.value = props.duration;
            elapsed = 0;
            pnow = performance.now();
            if (props.active && finished) {
                frame();
            }
            finished = false;
        }
        const countdownExposedMethod = {
            reset,
        };
        return Object.assign(countdownExposedMethod, {
            distance: distanceRef,
            getTimeInfo,
            getDisplayValue,
        });
    },
    render() {
        const { render, precision, distance, getTimeInfo, getDisplayValue } =
            this;
        let timeInfo;
        switch (precision) {
            case 0:
                timeInfo = getTimeInfo(distance + 999);
                timeInfo.milliseconds = 0;
                break;
            case 1:
                timeInfo = getTimeInfo(distance + 99);
                timeInfo.milliseconds =
                    Math.floor(timeInfo.milliseconds / 100) * 100;
                break;
            case 2:
                timeInfo = getTimeInfo(distance + 9);
                timeInfo.milliseconds =
                    Math.floor(timeInfo.milliseconds / 10) * 10;
                break;
            case 3:
                timeInfo = getTimeInfo(distance);
        }
        if (render) {
            return render(timeInfo);
        } else {
            return getDisplayValue(timeInfo);
        }
    },
});
