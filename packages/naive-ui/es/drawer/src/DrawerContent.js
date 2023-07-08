import { defineComponent, h, inject } from 'vue';
import { NBaseClose, NScrollbar } from '../../_internal';
import { throwError } from '../../_utils';
import { drawerInjectionKey } from './interface';
export const drawerContentProps = {
    title: {
        type: String,
    },
    headerStyle: [Object, String],
    footerStyle: [Object, String],
    bodyStyle: [Object, String],
    bodyContentStyle: [Object, String],
    nativeScrollbar: { type: Boolean, default: true },
    scrollbarProps: Object,
    closable: Boolean,
};
export default defineComponent({
    name: 'DrawerContent',
    props: drawerContentProps,
    setup() {
        const NDrawer = inject(drawerInjectionKey, null);
        if (!NDrawer) {
            throwError(
                'drawer-content',
                '`n-drawer-content` must be placed inside `n-drawer`.'
            );
        }
        const { doUpdateShow } = NDrawer;
        function handleCloseClick() {
            doUpdateShow(false);
        }
        return {
            handleCloseClick,
            mergedTheme: NDrawer.mergedThemeRef,
            mergedClsPrefix: NDrawer.mergedClsPrefixRef,
        };
    },
    render() {
        const {
            title,
            mergedClsPrefix,
            nativeScrollbar,
            mergedTheme,
            bodyStyle,
            bodyContentStyle,
            headerStyle,
            footerStyle,
            scrollbarProps,
            closable,
            $slots,
        } = this;
        return h(
            'div',
            {
                role: 'none',
                class: [
                    `${mergedClsPrefix}-drawer-content`,
                    nativeScrollbar &&
                        `${mergedClsPrefix}-drawer-content--native-scrollbar`,
                ],
            },
            $slots.header || title || closable
                ? h(
                      'div',
                      {
                          class: `${mergedClsPrefix}-drawer-header`,
                          style: headerStyle,
                          role: 'none',
                      },
                      h(
                          'div',
                          {
                              class: `${mergedClsPrefix}-drawer-header__main`,
                              role: 'heading',
                              'aria-level': '1',
                          },
                          $slots.header !== void 0 ? $slots.header() : title
                      ),
                      closable &&
                          h(NBaseClose, {
                              onClick: this.handleCloseClick,
                              clsPrefix: mergedClsPrefix,
                              class: `${mergedClsPrefix}-drawer-header__close`,
                              absolute: true,
                          })
                  )
                : null,
            nativeScrollbar
                ? h(
                      'div',
                      {
                          class: `${mergedClsPrefix}-drawer-body`,
                          style: bodyStyle,
                          role: 'none',
                      },
                      h(
                          'div',
                          {
                              class: `${mergedClsPrefix}-drawer-body-content-wrapper`,
                              style: bodyContentStyle,
                              role: 'none',
                          },
                          $slots
                      )
                  )
                : h(
                      NScrollbar,
                      Object.assign(
                          {
                              themeOverrides:
                                  mergedTheme.peerOverrides.Scrollbar,
                              theme: mergedTheme.peers.Scrollbar,
                          },
                          scrollbarProps,
                          {
                              class: `${mergedClsPrefix}-drawer-body`,
                              contentClass: `${mergedClsPrefix}-drawer-body-content-wrapper`,
                              contentStyle: bodyContentStyle,
                          }
                      ),
                      $slots
                  ),
            $slots.footer
                ? h(
                      'div',
                      {
                          class: `${mergedClsPrefix}-drawer-footer`,
                          style: footerStyle,
                          role: 'none',
                      },
                      $slots.footer()
                  )
                : null
        );
    },
});
