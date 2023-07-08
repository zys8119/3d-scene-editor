import { PropType } from 'vue';
import {
    UploadCustomRequestOptions,
    UploadFileInfo,
    UploadProps,
} from '../../../upload';
import { ExtractPublicPropTypes } from '../../../_utils';
import type { OnUpdateValue } from './interface';
export interface CutProps {
    label: string;
    cutWidth: number;
    cutHeight: number;
    tool: boolean;
    toolBgc: string;
    sizeChange: boolean;
    moveAble: boolean;
    originalGraph: boolean;
    rate: string;
    WatermarkText: string;
    WatermarkTextFont: string;
    WatermarkTextColor: string;
    WatermarkTextX: number;
    WatermarkTextY: number;
    smallToUpload: boolean;
    scaleAble: true;
    imgMove: true;
    toolBoxOverflow: true;
    previewMode: boolean;
    fileType: string;
    boxHeight: number;
    boxWidth: number;
    blob: boolean;
    showChooseBtn: false;
}
export declare const proUploadProps: {
    uploadProps: PropType<UploadProps>;
    value: {
        type: PropType<UploadFileInfo[]>;
    };
    extra: {
        type: PropType<Record<string, any>>;
    };
    cut: BooleanConstructor;
    cutProps: {
        type: PropType<Partial<CutProps>>;
    };
    limitFileSize: {
        type: BooleanConstructor;
        default: boolean;
    };
    fileSize: {
        type: NumberConstructor;
        default: number;
    };
    api: {
        type: PropType<{
            upload?:
                | ((
                      file: File | Blob,
                      data?: Record<string, any>,
                      onProgress?: ((e: number) => void) | undefined
                  ) => Promise<any>)
                | undefined;
        }>;
    };
    'onUpdate:value': PropType<OnUpdateValue>;
    urlPrefix: StringConstructor;
    showMessage: {
        type: BooleanConstructor;
        default: boolean;
    };
    theme: PropType<
        import('../../../_mixins').Theme<
            'ProUpload',
            {
                padding: string;
                baseColor: string;
            },
            any
        >
    >;
    themeOverrides: PropType<
        import('../../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../../_mixins').Theme<
                'ProUpload',
                {
                    padding: string;
                    baseColor: string;
                },
                any
            >
        >
    >;
    builtinThemeOverrides: PropType<
        import('../../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../../_mixins').Theme<
                'ProUpload',
                {
                    padding: string;
                    baseColor: string;
                },
                any
            >
        >
    >;
};
export type ProUploadProps = ExtractPublicPropTypes<typeof proUploadProps>;
declare const ProUpload: import('vue').DefineComponent<
    {
        uploadProps: PropType<UploadProps>;
        value: {
            type: PropType<UploadFileInfo[]>;
        };
        extra: {
            type: PropType<Record<string, any>>;
        };
        cut: BooleanConstructor;
        cutProps: {
            type: PropType<Partial<CutProps>>;
        };
        limitFileSize: {
            type: BooleanConstructor;
            default: boolean;
        };
        fileSize: {
            type: NumberConstructor;
            default: number;
        };
        api: {
            type: PropType<{
                upload?:
                    | ((
                          file: File | Blob,
                          data?: Record<string, any>,
                          onProgress?: ((e: number) => void) | undefined
                      ) => Promise<any>)
                    | undefined;
            }>;
        };
        'onUpdate:value': PropType<OnUpdateValue>;
        urlPrefix: StringConstructor;
        showMessage: {
            type: BooleanConstructor;
            default: boolean;
        };
        theme: PropType<
            import('../../../_mixins').Theme<
                'ProUpload',
                {
                    padding: string;
                    baseColor: string;
                },
                any
            >
        >;
        themeOverrides: PropType<
            import('../../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../../_mixins').Theme<
                    'ProUpload',
                    {
                        padding: string;
                        baseColor: string;
                    },
                    any
                >
            >
        >;
        builtinThemeOverrides: PropType<
            import('../../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../../_mixins').Theme<
                    'ProUpload',
                    {
                        padding: string;
                        baseColor: string;
                    },
                    any
                >
            >
        >;
    },
    {
        cssVarsRef: globalThis.ComputedRef<{
            '--n-padding': string;
        }>;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        upload: globalThis.Ref<any>;
        fileList: globalThis.ComputedRef<UploadFileInfo[]>;
        handleUpload: ({
            file,
            data,
            onFinish,
            onError,
        }: UploadCustomRequestOptions) => Promise<void>;
        handleFileList: (fileList: UploadFileInfo[]) => void;
        handleBeforeUpload: (data: {
            file: UploadFileInfo;
            fileList: UploadFileInfo[];
        }) => Promise<boolean>;
        handleClose: () => void;
        cutModal: globalThis.Ref<boolean>;
        cutterRef: globalThis.Ref<
            | ({
                  $: import('vue').ComponentInternalInstance;
                  $data: {
                      version: string;
                      visible: boolean;
                      fileName: string;
                      cutImageObj: Record<any, any> | null;
                      onPrintImgTimmer: number | null;
                      toolBoxPosition: {
                          x: number;
                          y: number;
                      };
                      drawImg: {
                          img: any;
                          sx: number;
                          sy: number;
                          swidth: number;
                          sheight: number;
                          x: number;
                          y: number;
                          width: number;
                          height: number;
                      };
                      toolBox: {
                          disable: boolean;
                          width: number;
                          height: number;
                          x: number;
                          y: number;
                          boxMove: {
                              start: {
                                  x: number;
                                  y: number;
                              };
                              moveTo: {
                                  x: number;
                                  y: number;
                              };
                          };
                      };
                      dropImg: {
                          active: boolean;
                          pageX: number;
                          pageY: number;
                          params: {
                              x?: number | undefined;
                              y?: number | undefined;
                          };
                      };
                      rotateImg: {
                          angle: number;
                      };
                      rotateControl: {
                          active: boolean;
                          start: {
                              x: number;
                              y: number;
                              position: number;
                          };
                          position: number;
                      };
                      scaleImg: {
                          rate: number;
                          params: {};
                      };
                      controlBox: {
                          disable: boolean;
                          btnName: string;
                          start: {
                              x: number;
                              y: number;
                              width: number;
                              height: number;
                          };
                      };
                      selectBox: boolean;
                      selectBoxColor: string;
                      isFlipHorizontal: boolean;
                      isFlipVertically: boolean;
                  };
                  $props: {
                      label?: string | undefined;
                      index?: null | undefined;
                      scale?: number | undefined;
                      crossOrigin?: boolean | undefined;
                      rate?: string | undefined;
                      blob?: boolean | undefined;
                      boxWidth?: number | undefined;
                      boxHeight?: number | undefined;
                      tool?: boolean | undefined;
                      crossOriginHeader?: string | undefined;
                      isModal?: boolean | undefined;
                      lockScroll?: boolean | undefined;
                      showChooseBtn?: boolean | undefined;
                      cutWidth?: number | undefined;
                      cutHeight?: number | undefined;
                      toolBgc?: string | undefined;
                      imgMove?: boolean | undefined;
                      sizeChange?: boolean | undefined;
                      originalGraph?: boolean | undefined;
                      moveAble?: boolean | undefined;
                      previewMode?: boolean | undefined;
                      CuttingOriginal?: boolean | undefined;
                      WatermarkText?: string | undefined;
                      WatermarkTextFont?: string | undefined;
                      WatermarkTextColor?: string | undefined;
                      WatermarkTextX?: number | undefined;
                      WatermarkTextY?: number | undefined;
                      smallToUpload?: boolean | undefined;
                      saveCutPosition?: boolean | undefined;
                      scaleAble?: boolean | undefined;
                      fileType?: string | undefined;
                      toolBoxOverflow?: boolean | undefined;
                      key?: string | number | symbol | undefined;
                      onError?: ((...args: any[]) => any) | undefined;
                      style?: unknown;
                      class?: unknown;
                      ref?: import('vue').VNodeRef | undefined;
                      ref_for?: boolean | undefined;
                      ref_key?: string | undefined;
                      onVnodeBeforeMount?:
                          | ((
                                vnode: globalThis.VNode<
                                    import('vue').RendererNode,
                                    import('vue').RendererElement,
                                    {
                                        [key: string]: any;
                                    }
                                >
                            ) => void)
                          | ((
                                vnode: globalThis.VNode<
                                    import('vue').RendererNode,
                                    import('vue').RendererElement,
                                    {
                                        [key: string]: any;
                                    }
                                >
                            ) => void)[]
                          | undefined;
                      onVnodeMounted?:
                          | ((
                                vnode: globalThis.VNode<
                                    import('vue').RendererNode,
                                    import('vue').RendererElement,
                                    {
                                        [key: string]: any;
                                    }
                                >
                            ) => void)
                          | ((
                                vnode: globalThis.VNode<
                                    import('vue').RendererNode,
                                    import('vue').RendererElement,
                                    {
                                        [key: string]: any;
                                    }
                                >
                            ) => void)[]
                          | undefined;
                      onVnodeBeforeUpdate?:
                          | ((
                                vnode: globalThis.VNode<
                                    import('vue').RendererNode,
                                    import('vue').RendererElement,
                                    {
                                        [key: string]: any;
                                    }
                                >,
                                oldVNode: globalThis.VNode<
                                    import('vue').RendererNode,
                                    import('vue').RendererElement,
                                    {
                                        [key: string]: any;
                                    }
                                >
                            ) => void)
                          | ((
                                vnode: globalThis.VNode<
                                    import('vue').RendererNode,
                                    import('vue').RendererElement,
                                    {
                                        [key: string]: any;
                                    }
                                >,
                                oldVNode: globalThis.VNode<
                                    import('vue').RendererNode,
                                    import('vue').RendererElement,
                                    {
                                        [key: string]: any;
                                    }
                                >
                            ) => void)[]
                          | undefined;
                      onVnodeUpdated?:
                          | ((
                                vnode: globalThis.VNode<
                                    import('vue').RendererNode,
                                    import('vue').RendererElement,
                                    {
                                        [key: string]: any;
                                    }
                                >,
                                oldVNode: globalThis.VNode<
                                    import('vue').RendererNode,
                                    import('vue').RendererElement,
                                    {
                                        [key: string]: any;
                                    }
                                >
                            ) => void)
                          | ((
                                vnode: globalThis.VNode<
                                    import('vue').RendererNode,
                                    import('vue').RendererElement,
                                    {
                                        [key: string]: any;
                                    }
                                >,
                                oldVNode: globalThis.VNode<
                                    import('vue').RendererNode,
                                    import('vue').RendererElement,
                                    {
                                        [key: string]: any;
                                    }
                                >
                            ) => void)[]
                          | undefined;
                      onVnodeBeforeUnmount?:
                          | ((
                                vnode: globalThis.VNode<
                                    import('vue').RendererNode,
                                    import('vue').RendererElement,
                                    {
                                        [key: string]: any;
                                    }
                                >
                            ) => void)
                          | ((
                                vnode: globalThis.VNode<
                                    import('vue').RendererNode,
                                    import('vue').RendererElement,
                                    {
                                        [key: string]: any;
                                    }
                                >
                            ) => void)[]
                          | undefined;
                      onVnodeUnmounted?:
                          | ((
                                vnode: globalThis.VNode<
                                    import('vue').RendererNode,
                                    import('vue').RendererElement,
                                    {
                                        [key: string]: any;
                                    }
                                >
                            ) => void)
                          | ((
                                vnode: globalThis.VNode<
                                    import('vue').RendererNode,
                                    import('vue').RendererElement,
                                    {
                                        [key: string]: any;
                                    }
                                >
                            ) => void)[]
                          | undefined;
                      onCutDown?: ((...args: any[]) => any) | undefined;
                      onOnChooseImg?: ((...args: any[]) => any) | undefined;
                      onOnClearAll?: ((...args: any[]) => any) | undefined;
                      onOnPrintImg?: ((...args: any[]) => any) | undefined;
                  };
                  $attrs: {
                      [x: string]: unknown;
                  };
                  $refs: {
                      [x: string]: unknown;
                  };
                  $slots: Readonly<{
                      [name: string]: import('vue').Slot<any> | undefined;
                  }>;
                  $root: globalThis.ComponentPublicInstance<
                      {},
                      {},
                      {},
                      {},
                      {},
                      {},
                      {},
                      {},
                      false,
                      import('vue').ComponentOptionsBase<
                          any,
                          any,
                          any,
                          any,
                          any,
                          any,
                          any,
                          any,
                          any,
                          {},
                          {},
                          string,
                          {}
                      >,
                      {},
                      {}
                  > | null;
                  $parent: globalThis.ComponentPublicInstance<
                      {},
                      {},
                      {},
                      {},
                      {},
                      {},
                      {},
                      {},
                      false,
                      import('vue').ComponentOptionsBase<
                          any,
                          any,
                          any,
                          any,
                          any,
                          any,
                          any,
                          any,
                          any,
                          {},
                          {},
                          string,
                          {}
                      >,
                      {},
                      {}
                  > | null;
                  $emit: (
                      event:
                          | 'error'
                          | 'cutDown'
                          | 'onChooseImg'
                          | 'onClearAll'
                          | 'onPrintImg',
                      ...args: any[]
                  ) => void;
                  $el: any;
                  $options: import('vue').ComponentOptionsBase<
                      Readonly<
                          import('vue').ExtractPropTypes<{
                              crossOrigin: {
                                  type: BooleanConstructor;
                                  default: boolean;
                              };
                              crossOriginHeader: {
                                  type: StringConstructor;
                                  default: string;
                              };
                              blob: {
                                  type: BooleanConstructor;
                                  default: boolean;
                              };
                              label: {
                                  type: StringConstructor;
                                  default: string;
                              };
                              isModal: {
                                  type: BooleanConstructor;
                                  default: boolean;
                              };
                              lockScroll: {
                                  type: BooleanConstructor;
                                  default: boolean;
                              };
                              showChooseBtn: {
                                  type: BooleanConstructor;
                                  default: boolean;
                              };
                              boxWidth: {
                                  type: NumberConstructor;
                                  default: number;
                              };
                              boxHeight: {
                                  type: NumberConstructor;
                                  default: number;
                              };
                              cutWidth: {
                                  type: NumberConstructor;
                                  default: number;
                              };
                              cutHeight: {
                                  type: NumberConstructor;
                                  default: number;
                              };
                              rate: {
                                  type: StringConstructor;
                                  default: null;
                              };
                              tool: {
                                  type: BooleanConstructor;
                                  default: boolean;
                              };
                              toolBgc: {
                                  type: StringConstructor;
                                  default: string;
                              };
                              imgMove: {
                                  type: BooleanConstructor;
                                  default: boolean;
                              };
                              sizeChange: {
                                  type: BooleanConstructor;
                                  default: boolean;
                              };
                              originalGraph: {
                                  type: BooleanConstructor;
                                  default: boolean;
                              };
                              moveAble: {
                                  type: BooleanConstructor;
                                  default: boolean;
                              };
                              previewMode: {
                                  type: BooleanConstructor;
                                  default: boolean;
                              };
                              CuttingOriginal: {
                                  type: BooleanConstructor;
                                  default: boolean;
                              };
                              WatermarkText: {
                                  type: StringConstructor;
                                  default: string;
                              };
                              WatermarkTextFont: {
                                  type: StringConstructor;
                                  default: string;
                              };
                              WatermarkTextColor: {
                                  type: StringConstructor;
                                  default: string;
                              };
                              WatermarkTextX: {
                                  type: NumberConstructor;
                                  default: number;
                              };
                              WatermarkTextY: {
                                  type: NumberConstructor;
                                  default: number;
                              };
                              smallToUpload: {
                                  type: BooleanConstructor;
                                  default: boolean;
                              };
                              saveCutPosition: {
                                  type: BooleanConstructor;
                                  default: boolean;
                              };
                              scaleAble: {
                                  type: BooleanConstructor;
                                  default: boolean;
                              };
                              index: {
                                  default: null;
                              };
                              fileType: {
                                  default: string;
                                  type: StringConstructor;
                              };
                              toolBoxOverflow: {
                                  type: BooleanConstructor;
                                  default: boolean;
                              };
                              scale: {
                                  type: NumberConstructor;
                                  default: number;
                              };
                          }>
                      > & {
                          onError?: ((...args: any[]) => any) | undefined;
                          onCutDown?: ((...args: any[]) => any) | undefined;
                          onOnChooseImg?: ((...args: any[]) => any) | undefined;
                          onOnClearAll?: ((...args: any[]) => any) | undefined;
                          onOnPrintImg?: ((...args: any[]) => any) | undefined;
                      },
                      unknown,
                      {
                          version: string;
                          visible: boolean;
                          fileName: string;
                          cutImageObj: Record<any, any> | null;
                          onPrintImgTimmer: number | null;
                          toolBoxPosition: {
                              x: number;
                              y: number;
                          };
                          drawImg: {
                              img: any;
                              sx: number;
                              sy: number;
                              swidth: number;
                              sheight: number;
                              x: number;
                              y: number;
                              width: number;
                              height: number;
                          };
                          toolBox: {
                              disable: boolean;
                              width: number;
                              height: number;
                              x: number;
                              y: number;
                              boxMove: {
                                  start: {
                                      x: number;
                                      y: number;
                                  };
                                  moveTo: {
                                      x: number;
                                      y: number;
                                  };
                              };
                          };
                          dropImg: {
                              active: boolean;
                              pageX: number;
                              pageY: number;
                              params: {
                                  x?: number | undefined;
                                  y?: number | undefined;
                              };
                          };
                          rotateImg: {
                              angle: number;
                          };
                          rotateControl: {
                              active: boolean;
                              start: {
                                  x: number;
                                  y: number;
                                  position: number;
                              };
                              position: number;
                          };
                          scaleImg: {
                              rate: number;
                              params: {};
                          };
                          controlBox: {
                              disable: boolean;
                              btnName: string;
                              start: {
                                  x: number;
                                  y: number;
                                  width: number;
                                  height: number;
                              };
                          };
                          selectBox: boolean;
                          selectBoxColor: string;
                          isFlipHorizontal: boolean;
                          isFlipVertically: boolean;
                      },
                      {
                          showToolBoxWidth(): string;
                          showToolBoxHeight(): string;
                          showToolBoxX(): string;
                          showToolBoxY(): string;
                      },
                      {
                          handleOpen(img: any): void;
                          handleClose(): void;
                          chooseImg(): void;
                          importImgToCanv(img: HTMLImageElement): void;
                          putImgToCanv(e: any): false | undefined;
                          putToolBox(): void;
                          checkToolBoxOverflow(): Promise<void>;
                          isSupportFileApi(): boolean;
                          dataURLtoFile(
                              dataurl: string,
                              filename: string
                          ): File | '不支持File对象';
                          clearAll(): void;
                          clearCutImageObj(): void;
                          drawControlBox(
                              width: number,
                              height: number,
                              x: number,
                              y: number
                          ): void;
                          resetToolBox(): void;
                          toolBoxMouseDown(e: any): void;
                          toolBoxMouseMove(e: any): void;
                          toolBoxMouseLeave(): void;
                          toolBoxMouseUp(): void;
                          printImg(): void;
                          dropImgOn(e: { pageX: number; pageY: number }): void;
                          dropImgOff(): void;
                          dropImgMove(e: {
                              pageX: number;
                              pageY: number;
                              stopPropagation: () => void;
                          }): void;
                          scaleReset(): void;
                          scaleImgWheel(e: any): false;
                          flipHorizontal(): void;
                          flipVertically(): void;
                          turnImg(angle: number): void;
                          turnReset(): void;
                          controlBtnMouseDown(e: any, btnName: any): void;
                          controlBtnMouseUp(e: any): void;
                          controlBtnMouseMove(e: any): void;
                          changeFileName(
                              fileName: string,
                              type: string
                          ): string;
                          cropPicture(doNotReset: boolean): void;
                      },
                      import('vue').ComponentOptionsMixin,
                      import('vue').ComponentOptionsMixin,
                      (
                          | 'error'
                          | 'cutDown'
                          | 'onChooseImg'
                          | 'onClearAll'
                          | 'onPrintImg'
                      )[],
                      string,
                      {
                          label: string;
                          index: null;
                          scale: number;
                          crossOrigin: boolean;
                          rate: string;
                          blob: boolean;
                          boxWidth: number;
                          boxHeight: number;
                          tool: boolean;
                          crossOriginHeader: string;
                          isModal: boolean;
                          lockScroll: boolean;
                          showChooseBtn: boolean;
                          cutWidth: number;
                          cutHeight: number;
                          toolBgc: string;
                          imgMove: boolean;
                          sizeChange: boolean;
                          originalGraph: boolean;
                          moveAble: boolean;
                          previewMode: boolean;
                          CuttingOriginal: boolean;
                          WatermarkText: string;
                          WatermarkTextFont: string;
                          WatermarkTextColor: string;
                          WatermarkTextX: number;
                          WatermarkTextY: number;
                          smallToUpload: boolean;
                          saveCutPosition: boolean;
                          scaleAble: boolean;
                          fileType: string;
                          toolBoxOverflow: boolean;
                      },
                      {},
                      string,
                      {}
                  > & {
                      beforeCreate?:
                          | ((() => void) | (() => void)[])
                          | undefined;
                      created?: ((() => void) | (() => void)[]) | undefined;
                      beforeMount?: ((() => void) | (() => void)[]) | undefined;
                      mounted?: ((() => void) | (() => void)[]) | undefined;
                      beforeUpdate?:
                          | ((() => void) | (() => void)[])
                          | undefined;
                      updated?: ((() => void) | (() => void)[]) | undefined;
                      activated?: ((() => void) | (() => void)[]) | undefined;
                      deactivated?: ((() => void) | (() => void)[]) | undefined;
                      beforeDestroy?:
                          | ((() => void) | (() => void)[])
                          | undefined;
                      beforeUnmount?:
                          | ((() => void) | (() => void)[])
                          | undefined;
                      destroyed?: ((() => void) | (() => void)[]) | undefined;
                      unmounted?: ((() => void) | (() => void)[]) | undefined;
                      renderTracked?:
                          | (
                                | ((e: import('vue').DebuggerEvent) => void)
                                | ((e: import('vue').DebuggerEvent) => void)[]
                            )
                          | undefined;
                      renderTriggered?:
                          | (
                                | ((e: import('vue').DebuggerEvent) => void)
                                | ((e: import('vue').DebuggerEvent) => void)[]
                            )
                          | undefined;
                      errorCaptured?:
                          | (
                                | ((
                                      err: unknown,
                                      instance: globalThis.ComponentPublicInstance<
                                          {},
                                          {},
                                          {},
                                          {},
                                          {},
                                          {},
                                          {},
                                          {},
                                          false,
                                          import('vue').ComponentOptionsBase<
                                              any,
                                              any,
                                              any,
                                              any,
                                              any,
                                              any,
                                              any,
                                              any,
                                              any,
                                              {},
                                              {},
                                              string,
                                              {}
                                          >,
                                          {},
                                          {}
                                      > | null,
                                      info: string
                                  ) => boolean | void)
                                | ((
                                      err: unknown,
                                      instance: globalThis.ComponentPublicInstance<
                                          {},
                                          {},
                                          {},
                                          {},
                                          {},
                                          {},
                                          {},
                                          {},
                                          false,
                                          import('vue').ComponentOptionsBase<
                                              any,
                                              any,
                                              any,
                                              any,
                                              any,
                                              any,
                                              any,
                                              any,
                                              any,
                                              {},
                                              {},
                                              string,
                                              {}
                                          >,
                                          {},
                                          {}
                                      > | null,
                                      info: string
                                  ) => boolean | void)[]
                            )
                          | undefined;
                  };
                  $forceUpdate: () => void;
                  $nextTick: typeof import('vue').nextTick;
                  $watch<T extends string | ((...args: any) => any)>(
                      source: T,
                      cb: T extends (...args: any) => infer R
                          ? (args_0: R, args_1: R) => any
                          : (...args: any) => any,
                      options?: import('vue').WatchOptions<boolean> | undefined
                  ): import('vue').WatchStopHandle;
              } & Readonly<
                  import('vue').ExtractPropTypes<{
                      crossOrigin: {
                          type: BooleanConstructor;
                          default: boolean;
                      };
                      crossOriginHeader: {
                          type: StringConstructor;
                          default: string;
                      };
                      blob: {
                          type: BooleanConstructor;
                          default: boolean;
                      };
                      label: {
                          type: StringConstructor;
                          default: string;
                      };
                      isModal: {
                          type: BooleanConstructor;
                          default: boolean;
                      };
                      lockScroll: {
                          type: BooleanConstructor;
                          default: boolean;
                      };
                      showChooseBtn: {
                          type: BooleanConstructor;
                          default: boolean;
                      };
                      boxWidth: {
                          type: NumberConstructor;
                          default: number;
                      };
                      boxHeight: {
                          type: NumberConstructor;
                          default: number;
                      };
                      cutWidth: {
                          type: NumberConstructor;
                          default: number;
                      };
                      cutHeight: {
                          type: NumberConstructor;
                          default: number;
                      };
                      rate: {
                          type: StringConstructor;
                          default: null;
                      };
                      tool: {
                          type: BooleanConstructor;
                          default: boolean;
                      };
                      toolBgc: {
                          type: StringConstructor;
                          default: string;
                      };
                      imgMove: {
                          type: BooleanConstructor;
                          default: boolean;
                      };
                      sizeChange: {
                          type: BooleanConstructor;
                          default: boolean;
                      };
                      originalGraph: {
                          type: BooleanConstructor;
                          default: boolean;
                      };
                      moveAble: {
                          type: BooleanConstructor;
                          default: boolean;
                      };
                      previewMode: {
                          type: BooleanConstructor;
                          default: boolean;
                      };
                      CuttingOriginal: {
                          type: BooleanConstructor;
                          default: boolean;
                      };
                      WatermarkText: {
                          type: StringConstructor;
                          default: string;
                      };
                      WatermarkTextFont: {
                          type: StringConstructor;
                          default: string;
                      };
                      WatermarkTextColor: {
                          type: StringConstructor;
                          default: string;
                      };
                      WatermarkTextX: {
                          type: NumberConstructor;
                          default: number;
                      };
                      WatermarkTextY: {
                          type: NumberConstructor;
                          default: number;
                      };
                      smallToUpload: {
                          type: BooleanConstructor;
                          default: boolean;
                      };
                      saveCutPosition: {
                          type: BooleanConstructor;
                          default: boolean;
                      };
                      scaleAble: {
                          type: BooleanConstructor;
                          default: boolean;
                      };
                      index: {
                          default: null;
                      };
                      fileType: {
                          default: string;
                          type: StringConstructor;
                      };
                      toolBoxOverflow: {
                          type: BooleanConstructor;
                          default: boolean;
                      };
                      scale: {
                          type: NumberConstructor;
                          default: number;
                      };
                  }>
              > & {
                      onError?: ((...args: any[]) => any) | undefined;
                      onCutDown?: ((...args: any[]) => any) | undefined;
                      onOnChooseImg?: ((...args: any[]) => any) | undefined;
                      onOnClearAll?: ((...args: any[]) => any) | undefined;
                      onOnPrintImg?: ((...args: any[]) => any) | undefined;
                  } & import('vue').ShallowUnwrapRef<{}> & {
                      version: string;
                      visible: boolean;
                      fileName: string;
                      cutImageObj: Record<any, any> | null;
                      onPrintImgTimmer: number | null;
                      toolBoxPosition: {
                          x: number;
                          y: number;
                      };
                      drawImg: {
                          img: any;
                          sx: number;
                          sy: number;
                          swidth: number;
                          sheight: number;
                          x: number;
                          y: number;
                          width: number;
                          height: number;
                      };
                      toolBox: {
                          disable: boolean;
                          width: number;
                          height: number;
                          x: number;
                          y: number;
                          boxMove: {
                              start: {
                                  x: number;
                                  y: number;
                              };
                              moveTo: {
                                  x: number;
                                  y: number;
                              };
                          };
                      };
                      dropImg: {
                          active: boolean;
                          pageX: number;
                          pageY: number;
                          params: {
                              x?: number | undefined;
                              y?: number | undefined;
                          };
                      };
                      rotateImg: {
                          angle: number;
                      };
                      rotateControl: {
                          active: boolean;
                          start: {
                              x: number;
                              y: number;
                              position: number;
                          };
                          position: number;
                      };
                      scaleImg: {
                          rate: number;
                          params: {};
                      };
                      controlBox: {
                          disable: boolean;
                          btnName: string;
                          start: {
                              x: number;
                              y: number;
                              width: number;
                              height: number;
                          };
                      };
                      selectBox: boolean;
                      selectBoxColor: string;
                      isFlipHorizontal: boolean;
                      isFlipVertically: boolean;
                  } & {
                      showToolBoxWidth: string;
                      showToolBoxHeight: string;
                      showToolBoxX: string;
                      showToolBoxY: string;
                  } & {
                      handleOpen(img: any): void;
                      handleClose(): void;
                      chooseImg(): void;
                      importImgToCanv(img: HTMLImageElement): void;
                      putImgToCanv(e: any): false | undefined;
                      putToolBox(): void;
                      checkToolBoxOverflow(): Promise<void>;
                      isSupportFileApi(): boolean;
                      dataURLtoFile(
                          dataurl: string,
                          filename: string
                      ): File | '不支持File对象';
                      clearAll(): void;
                      clearCutImageObj(): void;
                      drawControlBox(
                          width: number,
                          height: number,
                          x: number,
                          y: number
                      ): void;
                      resetToolBox(): void;
                      toolBoxMouseDown(e: any): void;
                      toolBoxMouseMove(e: any): void;
                      toolBoxMouseLeave(): void;
                      toolBoxMouseUp(): void;
                      printImg(): void;
                      dropImgOn(e: { pageX: number; pageY: number }): void;
                      dropImgOff(): void;
                      dropImgMove(e: {
                          pageX: number;
                          pageY: number;
                          stopPropagation: () => void;
                      }): void;
                      scaleReset(): void;
                      scaleImgWheel(e: any): false;
                      flipHorizontal(): void;
                      flipVertically(): void;
                      turnImg(angle: number): void;
                      turnReset(): void;
                      controlBtnMouseDown(e: any, btnName: any): void;
                      controlBtnMouseUp(e: any): void;
                      controlBtnMouseMove(e: any): void;
                      changeFileName(fileName: string, type: string): string;
                      cropPicture(doNotReset: boolean): void;
                  } & import('vue').ComponentCustomProperties & {})
            | undefined
        >;
        cutResolve: globalThis.Ref<
            ((value: Blob | PromiseLike<Blob>) => void) | undefined
        >;
    },
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {
        success: (file: UploadFileInfo) => true;
    },
    string,
    import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
    Readonly<
        import('vue').ExtractPropTypes<{
            uploadProps: PropType<UploadProps>;
            value: {
                type: PropType<UploadFileInfo[]>;
            };
            extra: {
                type: PropType<Record<string, any>>;
            };
            cut: BooleanConstructor;
            cutProps: {
                type: PropType<Partial<CutProps>>;
            };
            limitFileSize: {
                type: BooleanConstructor;
                default: boolean;
            };
            fileSize: {
                type: NumberConstructor;
                default: number;
            };
            api: {
                type: PropType<{
                    upload?:
                        | ((
                              file: File | Blob,
                              data?: Record<string, any>,
                              onProgress?: ((e: number) => void) | undefined
                          ) => Promise<any>)
                        | undefined;
                }>;
            };
            'onUpdate:value': PropType<OnUpdateValue>;
            urlPrefix: StringConstructor;
            showMessage: {
                type: BooleanConstructor;
                default: boolean;
            };
            theme: PropType<
                import('../../../_mixins').Theme<
                    'ProUpload',
                    {
                        padding: string;
                        baseColor: string;
                    },
                    any
                >
            >;
            themeOverrides: PropType<
                import('../../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../../_mixins').Theme<
                        'ProUpload',
                        {
                            padding: string;
                            baseColor: string;
                        },
                        any
                    >
                >
            >;
            builtinThemeOverrides: PropType<
                import('../../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../../_mixins').Theme<
                        'ProUpload',
                        {
                            padding: string;
                            baseColor: string;
                        },
                        any
                    >
                >
            >;
        }>
    > & {
        onSuccess?: ((file: UploadFileInfo) => any) | undefined;
    },
    {
        cut: boolean;
        limitFileSize: boolean;
        fileSize: number;
        showMessage: boolean;
    },
    {}
>;
export default ProUpload;
