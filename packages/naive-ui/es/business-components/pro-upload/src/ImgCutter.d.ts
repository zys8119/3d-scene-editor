export declare const ImgCutterProps: {
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
};
declare const _default: import('vue').DefineComponent<
    {
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
        changeFileName(fileName: string, type: string): string;
        cropPicture(doNotReset: boolean): void;
    },
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    ('error' | 'cutDown' | 'onChooseImg' | 'onClearAll' | 'onPrintImg')[],
    'error' | 'cutDown' | 'onChooseImg' | 'onClearAll' | 'onPrintImg',
    import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
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
    {}
>;
export default _default;
