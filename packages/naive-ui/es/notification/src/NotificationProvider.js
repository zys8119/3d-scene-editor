import {
    Fragment,
    h,
    reactive,
    ref,
    Teleport,
    defineComponent,
    provide,
} from 'vue';
import { createId } from 'seemly';
import { useConfig, useTheme } from '../../_mixins';
import { omit, createInjectionKey } from '../../_utils';
import { notificationLight } from '../styles';
import { NotificationContainer } from './NotificationContainer';
import { NotificationEnvironment } from './NotificationEnvironment';
import { notificationProviderInjectionKey } from './context';
import style from './styles/index.cssr';
export const notificationApiInjectionKey =
    createInjectionKey('n-notification-api');
export const notificationProviderProps = Object.assign(
    Object.assign({}, useTheme.props),
    {
        containerStyle: [String, Object],
        to: [String, Object],
        scrollable: {
            type: Boolean,
            default: true,
        },
        max: Number,
        placement: {
            type: String,
            default: 'top-right',
        },
        keepAliveOnHover: Boolean,
    }
);
export default defineComponent({
    name: 'NotificationProvider',
    props: notificationProviderProps,
    setup(props) {
        const { mergedClsPrefixRef } = useConfig(props);
        const notificationListRef = ref([]);
        const notificationRefs = {};
        const leavingKeySet = /* @__PURE__ */ new Set();
        function create(options) {
            const key = createId();
            const destroy = () => {
                leavingKeySet.add(key);
                if (notificationRefs[key]) {
                    notificationRefs[key].hide();
                }
            };
            const notificationReactive = reactive(
                Object.assign(Object.assign({}, options), {
                    key,
                    destroy,
                    hide: destroy,
                    deactivate: destroy,
                })
            );
            const { max } = props;
            if (
                max &&
                notificationListRef.value.length - leavingKeySet.size >= max
            ) {
                let someoneMountedRemoved = false;
                let index = 0;
                for (const notification of notificationListRef.value) {
                    if (!leavingKeySet.has(notification.key)) {
                        if (notificationRefs[notification.key]) {
                            notification.destroy();
                            someoneMountedRemoved = true;
                        }
                        break;
                    }
                    index++;
                }
                if (!someoneMountedRemoved) {
                    notificationListRef.value.splice(index, 1);
                }
            }
            notificationListRef.value.push(notificationReactive);
            return notificationReactive;
        }
        const apis = ['info', 'success', 'warning', 'error'].map((type) => {
            return (options) =>
                create(Object.assign(Object.assign({}, options), { type }));
        });
        function handleAfterLeave(key) {
            leavingKeySet.delete(key);
            notificationListRef.value.splice(
                notificationListRef.value.findIndex(
                    (notification) => notification.key === key
                ),
                1
            );
        }
        const themeRef = useTheme(
            'Notification',
            '-notification',
            style,
            notificationLight,
            props,
            mergedClsPrefixRef
        );
        const api = {
            create,
            info: apis[0],
            success: apis[1],
            warning: apis[2],
            error: apis[3],
            open,
            destroyAll,
        };
        const wipTransitionCountRef = ref(0);
        provide(notificationApiInjectionKey, api);
        provide(notificationProviderInjectionKey, {
            props,
            mergedClsPrefixRef,
            mergedThemeRef: themeRef,
            wipTransitionCountRef,
        });
        function open(options) {
            return create(options);
        }
        function destroyAll() {
            Object.values(notificationListRef.value).forEach((notification) => {
                notification.hide();
            });
        }
        return Object.assign(
            {
                mergedClsPrefix: mergedClsPrefixRef,
                notificationList: notificationListRef,
                notificationRefs,
                handleAfterLeave,
            },
            api
        );
    },
    render() {
        var _a, _b, _c;
        const { placement } = this;
        return h(
            Fragment,
            null,
            (_b = (_a = this.$slots).default) === null || _b === void 0
                ? void 0
                : _b.call(_a),
            this.notificationList.length
                ? h(
                      Teleport,
                      {
                          to:
                              (_c = this.to) !== null && _c !== void 0
                                  ? _c
                                  : 'body',
                      },
                      h(
                          NotificationContainer,
                          {
                              style: this.containerStyle,
                              scrollable:
                                  this.scrollable &&
                                  placement !== 'top' &&
                                  placement !== 'bottom',
                              placement,
                          },
                          {
                              default: () => {
                                  return this.notificationList.map(
                                      (notification) => {
                                          return h(
                                              NotificationEnvironment,
                                              Object.assign(
                                                  {
                                                      ref: (inst) => {
                                                          const refKey =
                                                              notification.key;
                                                          if (inst === null) {
                                                              delete this
                                                                  .notificationRefs[
                                                                  refKey
                                                              ];
                                                          } else
                                                              this.notificationRefs[
                                                                  refKey
                                                              ] = inst;
                                                      },
                                                  },
                                                  omit(notification, [
                                                      'destroy',
                                                      'hide',
                                                      'deactivate',
                                                  ]),
                                                  {
                                                      internalKey:
                                                          notification.key,
                                                      onInternalAfterLeave:
                                                          this.handleAfterLeave,
                                                      keepAliveOnHover:
                                                          notification.keepAliveOnHover ===
                                                          void 0
                                                              ? this
                                                                    .keepAliveOnHover
                                                              : notification.keepAliveOnHover,
                                                  }
                                              )
                                          );
                                      }
                                  );
                              },
                          }
                      )
                  )
                : null
        );
    },
});
