import {
    addTransitionClass,
    removeTransitionClass,
    getTransitionInfo,
    resolveTransitionProps,
    TransitionPropsValidators,
    forceReflow,
} from './Transition';
import {
    onUpdated,
    Fragment,
    resolveTransitionHooks,
    useTransitionState,
    getTransitionRawChildren,
    getCurrentInstance,
    setTransitionHooks,
    createVNode,
    toRaw,
} from 'vue';
import { extend } from '@vue/shared';
const positionMap = /* @__PURE__ */ new WeakMap();
const newPositionMap = /* @__PURE__ */ new WeakMap();
const TransitionGroupImpl = {
    name: 'TransitionGroup',
    props: /* @__PURE__ */ extend({}, TransitionPropsValidators, {
        tag: String,
        moveClass: String,
    }),
    setup(props, { slots }) {
        const instance = getCurrentInstance();
        const state = useTransitionState();
        let prevChildren;
        let children;
        onUpdated(() => {
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
                forceReflow();
                movedChildren.forEach((c) => {
                    const el = c.el;
                    const { style } = el;
                    addTransitionClass(el, moveClass);
                    style.transform = '';
                    style.transitionDuration = '';
                    const cb = (e) => {
                        if (e && e.target !== el) {
                            return;
                        }
                        if (!e || /transform$/.test(e.propertyName)) {
                            el.removeEventListener('transitionend', cb);
                            el._moveCb = null;
                            removeTransitionClass(el, moveClass);
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
            const rawProps = toRaw(props);
            const cssTransitionProps = resolveTransitionProps(rawProps);
            let tag = rawProps.tag || Fragment;
            if (!rawProps.tag) {
                tag = 'span';
            }
            prevChildren = children;
            children = slots.default
                ? getTransitionRawChildren(slots.default())
                : [];
            if (prevChildren) {
                for (let i = 0; i < prevChildren.length; i++) {
                    const child = prevChildren[i];
                    setTransitionHooks(
                        child,
                        resolveTransitionHooks(
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
            return createVNode(tag, null, children);
        };
    },
};
const removeMode = (props) => delete props.mode;
/* @__PURE__ */ removeMode(TransitionGroupImpl.props);
export const TransitionGroup = TransitionGroupImpl;
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
    const { hasTransform } = getTransitionInfo(clone);
    container.removeChild(clone);
    return hasTransform;
}
