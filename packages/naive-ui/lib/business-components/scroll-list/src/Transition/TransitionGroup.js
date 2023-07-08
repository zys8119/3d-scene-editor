Object.defineProperty(exports, '__esModule', { value: true });
exports.TransitionGroup = void 0;
const Transition_1 = require('./Transition');
const vue_1 = require('vue');
const shared_1 = require('@vue/shared');
const positionMap = /* @__PURE__ */ new WeakMap();
const newPositionMap = /* @__PURE__ */ new WeakMap();
const TransitionGroupImpl = {
    name: 'TransitionGroup',
    props: /* @__PURE__ */ (0, shared_1.extend)(
        {},
        Transition_1.TransitionPropsValidators,
        {
            tag: String,
            moveClass: String,
        }
    ),
    setup(props, { slots }) {
        const instance = (0, vue_1.getCurrentInstance)();
        const state = (0, vue_1.useTransitionState)();
        let prevChildren;
        let children;
        (0, vue_1.onUpdated)(() => {
            try {
                if (!prevChildren.length) {
                    return;
                }
                const moveClass =
                    props.moveClass || `${props.name || 'v'}-move`;
                if (
                    !hasCSSTransform(
                        prevChildren[0].el,
                        instance === null || instance === void 0
                            ? void 0
                            : instance.vnode.el,
                        moveClass
                    )
                ) {
                    return;
                }
                prevChildren.forEach(callPendingCbs);
                prevChildren.forEach(recordPosition);
                const movedChildren = prevChildren.filter(applyTranslation);
                (0, Transition_1.forceReflow)();
                movedChildren.forEach((c) => {
                    const el = c.el;
                    const { style } = el;
                    (0, Transition_1.addTransitionClass)(el, moveClass);
                    style.transform = '';
                    style.transitionDuration = '';
                    const cb = (e) => {
                        if (e && e.target !== el) {
                            return;
                        }
                        if (!e || /transform$/.test(e.propertyName)) {
                            el.removeEventListener('transitionend', cb);
                            el._moveCb = null;
                            (0, Transition_1.removeTransitionClass)(
                                el,
                                moveClass
                            );
                        }
                    };
                    el._moveCb = cb;
                    el.addEventListener('transitionend', cb);
                });
            } catch (e) {
                console.log(e);
            }
        });
        return () => {
            const rawProps = (0, vue_1.toRaw)(props);
            const cssTransitionProps = (0, Transition_1.resolveTransitionProps)(
                rawProps
            );
            let tag = rawProps.tag || vue_1.Fragment;
            if (!rawProps.tag) {
                tag = 'span';
            }
            prevChildren = children;
            children = slots.default
                ? (0, vue_1.getTransitionRawChildren)(slots.default())
                : [];
            if (prevChildren) {
                for (let i = 0; i < prevChildren.length; i++) {
                    const child = prevChildren[i];
                    (0, vue_1.setTransitionHooks)(
                        child,
                        (0, vue_1.resolveTransitionHooks)(
                            child,
                            cssTransitionProps,
                            state,
                            instance
                        )
                    );
                    positionMap.set(child, {
                        left: child.el.offsetLeft,
                        top: child.el.offsetTop,
                    });
                }
            }
            return (0, vue_1.createVNode)(tag, null, children);
        };
    },
};
const removeMode = (props) => delete props.mode;
/* @__PURE__ */ removeMode(TransitionGroupImpl.props);
exports.TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c) {
    const el = c.el;
    if (el._moveCb) {
        el._moveCb();
    }
    if (el._enterCb) {
        el._enterCb();
    }
}
function recordPosition(c) {
    newPositionMap.set(c, {
        left: c.el.offsetLeft,
        top: c.el.offsetTop,
    });
}
function applyTranslation(c) {
    const oldPos = positionMap.get(c);
    const newPos = newPositionMap.get(c);
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
        const s = c.el.style;
        s.transform = `translate(${dx}px,${dy}px)`;
        s.transitionDuration = '0s';
        return c;
    }
}
function hasCSSTransform(el, root, moveClass) {
    const clone = el.cloneNode();
    if (el._vtc) {
        el._vtc.forEach((cls) => {
            cls.split(/\s+/).forEach((c) => c && clone.classList.remove(c));
        });
    }
    moveClass.split(/\s+/).forEach((c) => c && clone.classList.add(c));
    clone.style.display = 'none';
    const container =
        (root === null || root === void 0 ? void 0 : root.nodeType) === 1
            ? root
            : root === null || root === void 0
            ? void 0
            : root.parentNode;
    if (!container) return false;
    container.appendChild(clone);
    const { hasTransform } = (0, Transition_1.getTransitionInfo)(clone);
    container.removeChild(clone);
    return hasTransform;
}
