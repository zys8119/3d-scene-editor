const easeOut = (t) => 1 - Math.pow(1 - t, 5);
export function tween(props) {
    const { from, to, duration, onUpdate, onFinish } = props;
    const tick = () => {
        const current = performance.now();
        const elapsedTime = Math.min(current - startTime, duration);
        const currentValue =
            from + (to - from) * easeOut(elapsedTime / duration);
        if (elapsedTime === duration) {
            onFinish();
            return;
        }
        onUpdate(currentValue);
        requestAnimationFrame(tick);
    };
    const startTime = performance.now();
    tick();
}
