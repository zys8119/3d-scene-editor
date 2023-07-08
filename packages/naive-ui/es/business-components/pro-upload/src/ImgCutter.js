var __awaiter = function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P
            ? value
            : new P(function (resolve) {
                  resolve(value);
              });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator['throw'](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done
                ? resolve(result.value)
                : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { defineComponent, h, Fragment } from 'vue';
import { NButton } from '../../../button';
export const ImgCutterProps = {
    crossOrigin: {
        type: Boolean,
        default: false,
    },
    crossOriginHeader: {
        type: String,
        default: '*',
    },
    blob: {
        type: Boolean,
        default: true,
    },
    label: {
        type: String,
        default: '\u9009\u62E9\u56FE\u7247',
    },
    isModal: {
        type: Boolean,
        default: false,
    },
    lockScroll: {
        type: Boolean,
        default: false,
    },
    showChooseBtn: {
        type: Boolean,
        default: false,
    },
    boxWidth: {
        type: Number,
        default: 800,
    },
    boxHeight: {
        type: Number,
        default: 400,
    },
    cutWidth: {
        type: Number,
        default: 200,
    },
    cutHeight: {
        type: Number,
        default: 200,
    },
    rate: {
        type: String,
        default: null,
    },
    tool: {
        type: Boolean,
        default: true,
    },
    toolBgc: {
        type: String,
        default: '#fff',
    },
    imgMove: {
        type: Boolean,
        default: true,
    },
    sizeChange: {
        type: Boolean,
        default: true,
    },
    originalGraph: {
        type: Boolean,
        default: false,
    },
    moveAble: {
        type: Boolean,
        default: true,
    },
    previewMode: {
        type: Boolean,
        default: false,
    },
    CuttingOriginal: {
        type: Boolean,
        default: false,
    },
    WatermarkText: {
        type: String,
        default: '',
    },
    WatermarkTextFont: {
        type: String,
        default: '12px Sans-serif',
    },
    WatermarkTextColor: {
        type: String,
        default: '#fff',
    },
    WatermarkTextX: {
        type: Number,
        default: 0.95,
    },
    WatermarkTextY: {
        type: Number,
        default: 0.95,
    },
    smallToUpload: {
        type: Boolean,
        default: false,
    },
    saveCutPosition: {
        type: Boolean,
        default: false,
    },
    scaleAble: {
        type: Boolean,
        default: true,
    },
    index: {
        default: null,
    },
    fileType: {
        default: 'png',
        type: String,
    },
    toolBoxOverflow: {
        type: Boolean,
        default: true,
    },
    scale: {
        type: Number,
        default: 1,
    },
};
export default defineComponent({
    name: 'ImgCutter',
    props: ImgCutterProps,
    model: ['label', 'boxWidth', 'boxHeight', 'rate', 'tool'],
    emits: ['cutDown', 'error', 'onChooseImg', 'onClearAll', 'onPrintImg'],
    data() {
        const toolBoxWidth = this.boxWidth / 2;
        const toolBoxHeight = this.boxHeight / 2;
        return {
            version: '',
            visible: false,
            fileName: '',
            cutImageObj: null,
            onPrintImgTimmer: null,
            toolBoxPosition: {
                x: 0,
                y: 0,
            },
            drawImg: {
                img: null,
                sx: 0,
                sy: 0,
                swidth: 0,
                sheight: 0,
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            },
            toolBox: {
                disable: true,
                width: toolBoxWidth,
                height: toolBoxHeight,
                x: 0,
                y: 0,
                boxMove: {
                    start: {
                        x: 0,
                        y: 0,
                    },
                    moveTo: {
                        x: 0,
                        y: 0,
                    },
                },
            },
            dropImg: {
                active: false,
                pageX: 0,
                pageY: 0,
                params: {},
            },
            rotateImg: {
                angle: 0,
            },
            rotateControl: {
                active: false,
                start: {
                    x: 0,
                    y: 0,
                    position: 0,
                },
                position: 100,
            },
            scaleImg: {
                rate: 0,
                params: {},
            },
            controlBox: {
                disable: true,
                btnName: '',
                start: {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                },
            },
            selectBox: false,
            selectBoxColor: 'rgba(0,0,0,0.6)',
            isFlipHorizontal: false,
            isFlipVertically: false,
        };
    },
    mounted() {
        this.version = '3';
        if (!this.isModal) {
            this.visible = true;
            this.$nextTick(() => {
                if (this.$refs.toolBox) {
                    this.$refs.toolBox.onmousewheel = this.scaleImgWheel;
                    this.$refs.toolBox.addEventListener(
                        'DOMMouseScroll',
                        this.scaleImgWheel
                    );
                }
            });
        }
    },
    methods: {
        handleOpen(img) {
            const init = (callback) => {
                if (this.$refs.toolBox) {
                    this.$refs.toolBox.onmousewheel = this.scaleImgWheel;
                    this.$refs.toolBox.addEventListener(
                        'DOMMouseScroll',
                        this.scaleImgWheel
                    );
                }
                if (this.isModal) {
                    if (this.lockScroll) {
                        document.body.style.overflowY = 'hidden';
                    }
                    const dialogBoxHeight =
                        this.$refs.dialogMainModalRef.offsetHeight + 200;
                    const windowHeight = window.innerHeight;
                    const mask = this.$refs.mask;
                    if (dialogBoxHeight > windowHeight) {
                        mask.style.overflowY = 'scroll';
                    } else {
                        mask.style.overflowY = 'hidden';
                    }
                }
                if (callback && typeof callback === 'function') {
                    callback();
                }
            };
            if (img && typeof img === 'object' && img.src) {
                if (img.name) {
                    const $image = new Image();
                    if (this.crossOrigin) {
                        $image.crossOrigin = this.crossOriginHeader;
                    }
                    $image.name = img.name;
                    $image.style.position = 'fixed';
                    $image.style.top = String(-5e3) + 'px';
                    $image.style.opacity = '0';
                    $image.onerror = (e) => {
                        console.error('\u56FE\u7247\u52A0\u8F7D\u5931\u8D25');
                        this.$emit('error', {
                            index: this.index,
                            event: e,
                            msg: '\u56FE\u7247\u52A0\u8F7D\u5931\u8D25',
                        });
                        this.clearCutImageObj();
                    };
                    $image.onload = () => {
                        if ($image.complete) {
                            this.visible = true;
                            this.$nextTick(() => {
                                init(() => {
                                    this.importImgToCanv($image);
                                });
                            });
                        } else {
                            throw new Error(
                                '\u56FE\u7247\u52A0\u8F7D\u5931\u8D25'
                            );
                        }
                    };
                    $image.src = img.src;
                    this.cutImageObj = $image;
                    document.body.appendChild($image);
                    this.$emit('onChooseImg', img, this.index);
                } else {
                    throw new Error(
                        '\u4F20\u5165\u53C2\u6570\u5FC5\u987B\u5305\u542B\uFF1Asrc,name'
                    );
                }
            } else {
                this.visible = true;
                this.$nextTick(() => {
                    init();
                });
            }
        },
        handleClose() {
            this.clearAll();
            if (this.isModal) {
                if (this.lockScroll) {
                    document.body.style.overflowY = 'scroll';
                }
                this.$nextTick(() => {
                    this.visible = false;
                });
            }
        },
        chooseImg() {
            this.$refs.inputFile.click();
        },
        importImgToCanv(img) {
            const imgHeight = img.height;
            const imgWidth = img.width;
            const boxWidth = this.boxWidth;
            const boxHeight = this.boxHeight;
            let rate;
            const drawImg = Object.assign({}, this.drawImg);
            this.fileName = img.name;
            drawImg.img = img;
            this.scaleImg.rate = imgWidth / imgHeight;
            if (imgHeight < boxHeight && imgWidth < boxWidth) {
                rate = 1;
                drawImg.x = (boxWidth - imgWidth) / 2;
                drawImg.y = (boxHeight - imgHeight) / 2;
            } else {
                if (imgWidth / imgHeight <= boxWidth / boxHeight) {
                    rate = boxHeight / imgHeight;
                    drawImg.x = (boxWidth - imgWidth * rate) / 2;
                } else {
                    rate = boxWidth / imgWidth;
                    drawImg.y = (boxHeight - imgHeight * rate) / 2;
                }
            }
            drawImg.swidth = imgWidth;
            drawImg.sheight = imgHeight;
            drawImg.width = imgWidth * rate;
            drawImg.height = imgHeight * rate;
            drawImg.x = (boxWidth - drawImg.width) / 2;
            drawImg.y = (boxHeight - drawImg.height) / 2;
            this.drawImg = drawImg;
            this.printImg();
            this.putToolBox();
        },
        putImgToCanv(e) {
            let file;
            if (e.target.files) {
                file = e.target.files[0] || null;
            } else {
                console.error(
                    'IE9\u53CA\u4EE5\u4E0B\u9700\u8981\u81EA\u5DF1\u4F20\u5165image\u5BF9\u8C61'
                );
                return false;
            }
            if (file) {
                this.fileName = file.name;
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (result) => {
                    var _a;
                    const newUrl =
                        (_a = result.target) === null || _a === void 0
                            ? void 0
                            : _a.result;
                    const img = document.createElement('img');
                    img.src = String(newUrl);
                    const timmer = setInterval(() => {
                        if (reader.readyState === 2) {
                            clearInterval(timmer);
                            if (
                                !this.sizeChange &&
                                this.smallToUpload &&
                                img.width <= this.cutWidth &&
                                img.height <= this.cutHeight
                            ) {
                                this.handleClose();
                                this.$emit('cutDown', {
                                    filename: this.changeFileName(
                                        file.name,
                                        this.fileType
                                    ),
                                    file,
                                    index: this.index,
                                });
                                return;
                            }
                            const imgHeight = img.height;
                            const imgWidth = img.width;
                            const boxWidth = this.boxWidth;
                            const boxHeight = this.boxHeight;
                            let rate;
                            const drawImg = Object.assign({}, this.drawImg);
                            drawImg.img = img;
                            this.scaleImg.rate = imgWidth / imgHeight;
                            if (imgHeight < boxHeight && imgWidth < boxWidth) {
                                rate = 1;
                                drawImg.x = (boxWidth - imgWidth) / 2;
                                drawImg.y = (boxHeight - imgHeight) / 2;
                            } else {
                                if (
                                    imgWidth / imgHeight <=
                                    boxWidth / boxHeight
                                ) {
                                    rate = boxHeight / imgHeight;
                                    drawImg.x =
                                        (boxWidth - imgWidth * rate) / 2;
                                } else {
                                    rate = boxWidth / imgWidth;
                                    drawImg.y =
                                        (boxHeight - imgHeight * rate) / 2;
                                }
                            }
                            drawImg.swidth = imgWidth;
                            drawImg.sheight = imgHeight;
                            drawImg.width = imgWidth * rate;
                            drawImg.height = imgHeight * rate;
                            drawImg.x = (boxWidth - drawImg.width) / 2;
                            drawImg.y = (boxHeight - drawImg.height) / 2;
                            this.drawImg = drawImg;
                            this.printImg();
                            this.putToolBox();
                        }
                    }, 200);
                };
                this.$emit('onChooseImg', file, this.index);
            }
        },
        putToolBox() {
            if (
                this.toolBox.width === this.boxWidth / 2 ||
                this.toolBox.height === this.boxHeight / 2 ||
                !this.saveCutPosition
            ) {
                if (
                    this.cutWidth <= this.boxWidth &&
                    this.cutHeight <= this.boxHeight
                ) {
                    this.toolBox.width = this.cutWidth;
                    this.toolBox.height = this.cutHeight;
                } else {
                    const scaleWidth = this.boxWidth / this.cutWidth;
                    const scaleHeight = this.boxHeight / this.cutHeight;
                    const scale = Math.min(scaleWidth, scaleHeight);
                    this.toolBox.width = this.cutWidth * scale;
                    this.toolBox.height = this.cutHeight * scale;
                }
            }
            if (
                (this.toolBox.x === 0 && this.toolBox.y === 0) ||
                !this.saveCutPosition
            ) {
                this.toolBox.x = this.boxWidth / 2 - this.toolBox.width / 2;
                this.toolBox.y = this.boxHeight / 2 - this.toolBox.height / 2;
            }
            this.checkToolBoxOverflow().then(() => {
                this.printImg();
            });
            this.drawControlBox(
                this.toolBox.width,
                this.toolBox.height,
                this.toolBox.x,
                this.toolBox.y
            );
        },
        checkToolBoxOverflow() {
            return __awaiter(this, void 0, void 0, function* () {
                return yield new Promise((resolve) => {
                    if (!this.toolBoxOverflow) {
                        if (
                            this.drawImg.width < this.toolBox.width ||
                            this.drawImg.height < this.toolBox.height
                        ) {
                            const p = this.drawImg.width / this.drawImg.height;
                            if (this.drawImg.width < this.toolBox.width) {
                                this.drawImg.width = this.toolBox.width;
                                this.drawImg.height = this.drawImg.width / p;
                            }
                            if (this.drawImg.height < this.toolBox.height) {
                                this.drawImg.height = this.toolBox.height;
                                this.drawImg.width = this.drawImg.height * p;
                            }
                            this.drawImg.x =
                                (this.boxWidth - this.drawImg.width) / 2;
                            this.drawImg.y =
                                (this.boxHeight - this.drawImg.height) / 2;
                        }
                        if (this.drawImg.x > this.toolBox.x) {
                            this.drawImg.x = this.toolBox.x;
                        }
                        if (
                            this.drawImg.x + this.drawImg.width <
                            this.toolBox.x + this.toolBox.width
                        ) {
                            this.drawImg.x =
                                this.toolBox.x +
                                this.toolBox.width -
                                this.drawImg.width;
                        }
                        if (this.drawImg.y > this.toolBox.y) {
                            this.drawImg.y = this.toolBox.y;
                        }
                        if (
                            this.drawImg.y + this.drawImg.height <
                            this.toolBox.y + this.toolBox.height
                        ) {
                            this.drawImg.y =
                                this.toolBox.y +
                                this.toolBox.height -
                                this.drawImg.height;
                        }
                    }
                    resolve();
                });
            });
        },
        isSupportFileApi() {
            return !!(
                window.File &&
                window.FileList &&
                window.FileReader &&
                window.Blob &&
                !navigator.userAgent.includes('Edge') &&
                !navigator.userAgent.includes('MSIE') &&
                !navigator.userAgent.includes('Trident')
            );
        },
        dataURLtoFile(dataurl, filename) {
            const arr = dataurl.split(',');
            const mime = arr[0].match(/:(.*?);/)[1];
            const bstr = atob(arr[1]);
            let n = bstr.length;
            const u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            if (this.isSupportFileApi()) {
                return new File([u8arr], filename, { type: mime });
            }
            return '\u4E0D\u652F\u6301File\u5BF9\u8C61';
        },
        clearAll() {
            const _this = this;
            const c = _this.$refs.canvas;
            const ctx = c.getContext('2d');
            if (!ctx) return;
            ctx.clearRect(0, 0, c.width, c.height);
            const c1 = _this.$refs.canvasSelectBox;
            const ctx1 = c1.getContext('2d');
            if (!ctx1) return;
            ctx1.clearRect(0, 0, c1.width, c1.height);
            const sx = _this.drawImg.sx;
            const sy = _this.drawImg.sy;
            this.drawImg = {
                img: null,
                sx,
                sy,
                swidth: 0,
                sheight: 0,
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            };
            this.isFlipHorizontal = false;
            this.isFlipVertically = false;
            if (this.$refs.inputFile) {
                this.$refs.inputFile.value = '';
            }
            this.rotateImg.angle = 0;
            this.drawImg.img = null;
            this.turnReset();
            this.clearCutImageObj();
            this.$emit('onClearAll', this.index);
        },
        clearCutImageObj() {
            if (this.cutImageObj !== null && this.cutImageObj !== void 0) {
                if (typeof this.cutImageObj.remove === 'function') {
                    this.cutImageObj.remove();
                } else {
                    this.cutImageObj.removeNode();
                }
            }
            this.cutImageObj = null;
        },
        drawControlBox(width, height, x, y) {
            if (!this.toolBoxOverflow) {
                if (width < 1) {
                    width = 1;
                }
                if (height < 1) {
                    height = 1;
                }
                if (width > this.drawImg.width) {
                    width = this.drawImg.width;
                }
                if (height > this.drawImg.height) {
                    height = this.drawImg.height;
                }
                if (x < this.drawImg.x) {
                    x = this.drawImg.x;
                }
                if (y < this.drawImg.y) {
                    y = this.drawImg.y;
                }
                if (x > this.drawImg.x + this.drawImg.width - width) {
                    x = this.drawImg.x + this.drawImg.width - width;
                }
                if (y > this.drawImg.y + this.drawImg.height - height) {
                    y = this.drawImg.y + this.drawImg.height - height;
                }
            }
            if (width > this.boxWidth) {
                width = this.boxWidth;
            }
            if (height > this.boxHeight) {
                height = this.boxHeight;
            }
            if (x < 0) {
                x = 0;
            }
            if (y < 0) {
                y = 0;
            }
            const $toolBoxControl = this.$refs.toolBoxControl;
            const c = this.$refs.canvasSelectBox;
            const ctx = c.getContext('2d');
            if (!ctx) return;
            ctx.fillStyle = this.selectBoxColor;
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.fillRect(0, 0, c.width, c.height);
            let toolBoxControlWidth, toolBoxControlHeight;
            if (this.rate && this.rate !== '') {
                const p =
                    Number(Number(this.rate.split(':')[0])) /
                    Number(Number(this.rate.split(':')[1]));
                if (p >= 1) {
                    toolBoxControlWidth = width;
                    toolBoxControlHeight = width / p;
                    if (
                        toolBoxControlHeight + y >
                        this.drawImg.y + this.drawImg.height
                    ) {
                        toolBoxControlHeight =
                            this.drawImg.y + this.drawImg.height - y;
                        toolBoxControlWidth = toolBoxControlHeight * p;
                    }
                } else {
                    toolBoxControlWidth = height * p;
                    toolBoxControlHeight = height;
                }
            } else {
                toolBoxControlWidth = width;
                toolBoxControlHeight = height;
            }
            this.toolBox.width = Math.abs(toolBoxControlWidth);
            this.toolBox.height = Math.abs(toolBoxControlHeight);
            $toolBoxControl.style.width =
                String(Math.abs(toolBoxControlWidth)) + 'px';
            $toolBoxControl.style.height =
                String(Math.abs(toolBoxControlHeight)) + 'px';
            this.toolBox.boxMove.moveTo.x = x;
            this.toolBox.boxMove.moveTo.y = y;
            if (toolBoxControlWidth < 0) {
                x = x + toolBoxControlWidth;
            }
            if (toolBoxControlHeight < 0) {
                y = y + toolBoxControlHeight;
            }
            if (x + this.toolBox.width > this.boxWidth) {
                x = this.boxWidth - this.toolBox.width;
            }
            if (x < 0) {
                x = 0;
            }
            if (y + this.toolBox.height > this.boxHeight) {
                y = this.boxHeight - this.toolBox.height;
            }
            if (y < 0) {
                y = 0;
            }
            this.toolBoxPosition.x = x;
            this.toolBoxPosition.y = y;
            $toolBoxControl.style.left = String(x) + 'px';
            $toolBoxControl.style.top = String(y) + 'px';
            ctx.clearRect(
                x,
                y,
                Math.abs(toolBoxControlWidth),
                Math.abs(toolBoxControlHeight)
            );
            if (this.onPrintImgTimmer) {
                clearTimeout(this.onPrintImgTimmer);
            }
            this.onPrintImgTimmer = window.setTimeout(() => {
                this.cropPicture(true);
            }, 100);
        },
        resetToolBox() {
            if (this.toolBox.width < 0) {
                this.toolBox.boxMove.moveTo.x =
                    this.toolBox.x - this.toolBox.width;
            }
            if (this.toolBox.height < 0) {
                this.toolBox.boxMove.moveTo.y =
                    this.toolBox.y - this.toolBox.height;
            }
            this.toolBox.width = Math.abs(this.toolBox.width);
            this.toolBox.height = Math.abs(this.toolBox.height);
        },
        toolBoxMouseDown(e) {
            const $toolBox = this.$refs.toolBoxControl;
            this.toolBox.x = parseInt($toolBox.style.left.split('px')[0]);
            this.toolBox.y = parseInt($toolBox.style.top.split('px')[0]);
            this.toolBox.disable = false;
            this.dropImg.active = false;
            this.toolBox.boxMove.start = {
                x: e.pageX,
                y: e.pageY,
            };
        },
        toolBoxMouseMove(e) {
            if (this.dropImg.active) {
                this.dropImgMove(e);
            }
            if (!this.toolBox.disable && this.moveAble) {
                const offsetX = e.pageX - this.toolBox.boxMove.start.x;
                const offsetY = e.pageY - this.toolBox.boxMove.start.y;
                const x = this.toolBox.x + offsetX * this.scale;
                const y = this.toolBox.y + offsetY * this.scale;
                this.drawControlBox(
                    this.toolBox.width,
                    this.toolBox.height,
                    x,
                    y
                );
            }
        },
        toolBoxMouseLeave() {
            this.toolBox.disable = true;
            if (this.onPrintImgTimmer) {
                clearTimeout(this.onPrintImgTimmer);
            }
            this.onPrintImgTimmer = window.setTimeout(() => {
                this.cropPicture(true);
            }, 100);
            this.resetToolBox();
        },
        toolBoxMouseUp() {
            this.toolBox.x = parseInt(String(this.toolBoxPosition.x));
            this.toolBox.y = parseInt(String(this.toolBoxPosition.y));
            this.toolBox.disable = true;
            this.dropImg.active = false;
            this.resetToolBox();
        },
        printImg() {
            if (this.drawImg.img) {
                const canv = this.$refs.canvas;
                const ctx = canv.getContext('2d');
                if (!ctx) return;
                ctx.font = '18px bold \u9ED1\u4F53';
                ctx.fillStyle = '#ff0';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.save();
                ctx.clearRect(0, 0, canv.width, canv.height);
                ctx.translate(
                    this.drawImg.x + this.drawImg.width / 2,
                    this.drawImg.y + this.drawImg.height / 2
                );
                ctx.rotate((this.rotateImg.angle * Math.PI) / 180);
                ctx.translate(
                    -(this.drawImg.x + this.drawImg.width / 2),
                    -(this.drawImg.y + this.drawImg.height / 2)
                );
                ctx.translate(this.drawImg.x, this.drawImg.y);
                ctx.scale(
                    this.isFlipHorizontal ? -1 : 1,
                    this.isFlipVertically ? -1 : 1
                );
                ctx.drawImage(
                    this.drawImg.img,
                    this.drawImg.sx,
                    this.drawImg.sy,
                    this.drawImg.swidth,
                    this.drawImg.sheight,
                    this.isFlipHorizontal ? -this.drawImg.width : 0,
                    this.isFlipVertically ? -this.drawImg.height : 0,
                    this.drawImg.width,
                    this.drawImg.height
                );
                ctx.translate(-this.drawImg.x, this.drawImg.y);
                ctx.restore();
                if (this.onPrintImgTimmer) {
                    clearTimeout(this.onPrintImgTimmer);
                }
                this.onPrintImgTimmer = window.setTimeout(() => {
                    this.cropPicture(true);
                }, 100);
            }
        },
        dropImgOn(e) {
            if (this.imgMove) {
                this.dropImg.active = true;
                this.dropImg.params = Object.assign({}, this.drawImg);
                this.dropImg.pageX = e.pageX;
                this.dropImg.pageY = e.pageY;
            }
        },
        dropImgOff() {
            this.dropImg.active = false;
            if (this.onPrintImgTimmer) {
                clearTimeout(this.onPrintImgTimmer);
            }
            this.onPrintImgTimmer = window.setTimeout(() => {
                this.cropPicture(true);
            }, 100);
        },
        dropImgMove(e) {
            if (this.dropImg.active && this.drawImg.img) {
                const drawImg = Object.assign({}, this.drawImg);
                drawImg.x =
                    (this.dropImg.params.x || 0) -
                    (this.dropImg.pageX - e.pageX) * this.scale;
                drawImg.y =
                    (this.dropImg.params.y || 0) -
                    (this.dropImg.pageY - e.pageY) * this.scale;
                if (!this.toolBoxOverflow) {
                    if (drawImg.x > this.toolBox.x) {
                        drawImg.x = this.toolBox.x;
                    }
                    if (
                        drawImg.x <
                        this.toolBox.x + this.toolBox.width - drawImg.width
                    ) {
                        drawImg.x =
                            this.toolBox.x + this.toolBox.width - drawImg.width;
                    }
                    if (drawImg.y > this.toolBox.y) {
                        drawImg.y = this.toolBox.y;
                    }
                    if (
                        drawImg.y <
                        this.toolBox.y + this.toolBox.height - drawImg.height
                    ) {
                        drawImg.y =
                            this.toolBox.y +
                            this.toolBox.height -
                            drawImg.height;
                    }
                }
                this.drawImg = drawImg;
                this.printImg();
                e.stopPropagation();
            }
        },
        scaleReset() {
            this.drawImg.width = this.drawImg.swidth;
            this.drawImg.height = this.drawImg.sheight;
            this.printImg();
        },
        scaleImgWheel(e) {
            if (this.drawImg.img && this.scaleAble) {
                let scale;
                const ee = e || window.event;
                if (ee.wheelDelta) {
                    scale = -(ee.wheelDelta / 40);
                } else if (ee.detail) {
                    scale = ee.detail;
                }
                const widthLimit = 50;
                this.drawImg.x =
                    this.drawImg.width - scale * 9 > widthLimit
                        ? this.drawImg.x + scale * 3
                        : this.drawImg.x;
                this.drawImg.y =
                    this.drawImg.width - scale * 9 > widthLimit
                        ? this.drawImg.y + scale * 3
                        : this.drawImg.y;
                this.drawImg.width =
                    this.drawImg.width - scale * 9 > widthLimit
                        ? this.drawImg.width - scale * 9
                        : widthLimit;
                this.drawImg.height = this.drawImg.width / this.scaleImg.rate;
                this.checkToolBoxOverflow().then(() => {
                    this.printImg();
                    if (this.onPrintImgTimmer) {
                        clearTimeout(this.onPrintImgTimmer);
                    }
                    this.onPrintImgTimmer = window.setTimeout(() => {
                        this.cropPicture(true);
                    }, 100);
                });
            }
            e.preventDefault();
            e.returnValue = false;
            return false;
        },
        flipHorizontal() {
            if (this.drawImg.img) {
                this.isFlipHorizontal = !this.isFlipHorizontal;
                this.printImg();
            }
        },
        flipVertically() {
            if (this.drawImg.img) {
                this.isFlipVertically = !this.isFlipVertically;
                this.printImg();
            }
        },
        turnImg(angle) {
            const startAngle = this.rotateImg.angle;
            const turnAngle = startAngle + angle;
            if (turnAngle >= -180 && turnAngle <= 180) {
                this.rotateImg.angle = turnAngle;
                this.rotateControl.position = (turnAngle / 180) * 100 + 100;
                this.printImg();
            }
        },
        turnReset() {
            this.rotateImg.angle = 0;
            this.rotateControl.position = 100;
            this.printImg();
        },
        controlBtnMouseDown(e, btnName) {
            this.controlBox.disable = false;
            this.controlBox.btnName = btnName;
            this.controlBox.start.x = e.clientX;
            this.controlBox.start.y = e.clientY;
            this.controlBox.start.width = this.toolBox.width;
            this.controlBox.start.height = this.toolBox.height;
            e.stopPropagation();
        },
        controlBtnMouseUp(e) {
            this.controlBox.disable = true;
            this.dropImgOff();
            this.resetToolBox();
            this.toolBoxMouseUp();
            e.stopPropagation();
        },
        controlBtnMouseMove(e) {
            if (!this.controlBox.disable) {
                const offsetX =
                    (e.clientX - this.controlBox.start.x) * this.scale;
                const offsetY =
                    (e.clientY - this.controlBox.start.y) * this.scale;
                let x, y;
                if (this.controlBox.btnName === 'leftUp') {
                    if (!this.rate) {
                        x = this.toolBox.x + offsetX;
                        y = this.toolBox.y + offsetY;
                    } else {
                        const p =
                            Number(this.rate.split(':')[0]) /
                            Number(this.rate.split(':')[1]);
                        if (p >= 1) {
                            x = this.toolBox.x + offsetX;
                            y = this.toolBox.y + offsetX / p;
                        } else {
                            x = this.toolBox.x + offsetY * p;
                            y = this.toolBox.y + offsetY;
                        }
                    }
                    this.toolBox.width = this.controlBox.start.width - offsetX;
                    this.toolBox.height =
                        this.controlBox.start.height - offsetY;
                }
                if (this.controlBox.btnName === 'rightUp') {
                    if (!this.rate) {
                        x = this.toolBox.x;
                        y = this.toolBox.y + offsetY;
                    } else {
                        const p =
                            Number(this.rate.split(':')[0]) /
                            Number(this.rate.split(':')[1]);
                        if (p >= 1) {
                            x = this.toolBox.x;
                            y = this.toolBox.y - offsetX / p;
                        } else {
                            x = this.toolBox.x;
                            y = this.toolBox.y + offsetY;
                        }
                    }
                    this.toolBox.width = this.controlBox.start.width + offsetX;
                    this.toolBox.height =
                        this.controlBox.start.height - offsetY;
                }
                if (this.controlBox.btnName === 'rightDown') {
                    x = this.toolBox.x;
                    y = this.toolBox.y;
                    this.toolBox.width = this.controlBox.start.width + offsetX;
                    this.toolBox.height =
                        this.controlBox.start.height + offsetY;
                }
                if (this.controlBox.btnName === 'leftDown') {
                    if (!this.rate) {
                        x = this.toolBox.x + offsetX;
                        y = this.toolBox.y;
                    } else {
                        const p =
                            Number(this.rate.split(':')[0]) /
                            Number(this.rate.split(':')[1]);
                        if (p >= 1) {
                            x = this.toolBox.x + offsetX;
                            y = this.toolBox.y;
                        } else {
                            x = this.toolBox.x + -offsetY * p;
                            y = this.toolBox.y;
                        }
                    }
                    this.toolBox.width = this.controlBox.start.width - offsetX;
                    this.toolBox.height =
                        this.controlBox.start.height + offsetY;
                }
                if (this.controlBox.btnName === 'topCenter') {
                    x = this.toolBox.x;
                    y = this.toolBox.y + offsetY;
                    this.toolBox.width = this.controlBox.start.width;
                    this.toolBox.height =
                        this.controlBox.start.height - offsetY;
                }
                if (this.controlBox.btnName === 'downCenter') {
                    x = this.toolBox.x;
                    y = this.toolBox.y;
                    this.toolBox.width = this.controlBox.start.width;
                    this.toolBox.height =
                        this.controlBox.start.height + offsetY;
                }
                if (this.controlBox.btnName === 'leftCenter') {
                    x = this.toolBox.x + offsetX;
                    y = this.toolBox.y;
                    this.toolBox.width = this.controlBox.start.width - offsetX;
                    this.toolBox.height = this.controlBox.start.height;
                }
                if (this.controlBox.btnName === 'rightCenter') {
                    x = this.toolBox.x;
                    y = this.toolBox.y;
                    this.toolBox.width = this.controlBox.start.width + offsetX;
                    this.toolBox.height = this.controlBox.start.height;
                }
                this.drawControlBox(
                    this.toolBox.width,
                    this.toolBox.height,
                    x,
                    y
                );
            }
            e.stopPropagation();
        },
        changeFileName(fileName, type) {
            const index = fileName.lastIndexOf('.');
            return (
                fileName.substr(0, index + 1) + (type === 'jpeg' ? 'jpg' : type)
            );
        },
        cropPicture(doNotReset) {
            const _this = this;
            if (this.drawImg.img) {
                const canvas = this.$refs.canvas;
                if (this.WatermarkText && !doNotReset) {
                    const ctx2 = canvas.getContext('2d');
                    if (!ctx2) return;
                    ctx2.font = this.WatermarkTextFont;
                    ctx2.fillStyle = this.WatermarkTextColor;
                    ctx2.textAlign = 'right';
                    ctx2.textBaseline = 'bottom';
                    ctx2.fillText(
                        this.WatermarkText,
                        this.toolBox.x +
                            this.toolBox.width * this.WatermarkTextX,
                        this.toolBox.y +
                            this.toolBox.height * this.WatermarkTextY
                    );
                }
                const tempImg = new Image();
                if (this.crossOrigin) {
                    tempImg.crossOrigin = this.crossOriginHeader;
                }
                tempImg.src = canvas.toDataURL(`image/${this.fileType}`);
                if (!HTMLCanvasElement.prototype.toBlob) {
                    Object.defineProperty(
                        HTMLCanvasElement.prototype,
                        'toBlob',
                        {
                            value: (callback, type, quality) => {
                                setTimeout(() => {
                                    const binStr = atob(
                                        canvas
                                            .toDataURL(type, quality)
                                            .split(',')[1]
                                    );
                                    const len = binStr.length;
                                    const arr = new Uint8Array(len);
                                    let NewBlob;
                                    for (let i = 0; i < len; i++) {
                                        arr[i] = binStr.charCodeAt(i);
                                    }
                                    try {
                                        NewBlob = new Blob([arr], {
                                            type: `image/${_this.fileType}`,
                                        });
                                    } catch (e) {
                                        window.BlobBuilder =
                                            window.BlobBuilder ||
                                            window.WebKitBlobBuilder ||
                                            window.MozBlobBuilder ||
                                            window.MSBlobBuilder;
                                        if (
                                            e.name === 'TypeError' &&
                                            window.BlobBuilder
                                        ) {
                                            const BlobBuilder =
                                                window.BlobBuilder;
                                            const bb = new BlobBuilder();
                                            bb.append(arr.buffer);
                                            NewBlob = bb.getBlob(
                                                `image/${_this.fileType}`
                                            );
                                        }
                                        if (e.name === 'InvalidStateError') {
                                            NewBlob = new Blob([arr.buffer], {
                                                type: `image/${_this.fileType}`,
                                            });
                                        }
                                    }
                                    callback(NewBlob);
                                }, 200);
                            },
                        }
                    );
                }
                canvas.toBlob((blob) => {
                    if (blob) {
                        const reader = new FileReader();
                        reader.readAsDataURL(blob);
                        reader.onload = () => {
                            const timmer = setInterval(() => {
                                if (reader.readyState === 2) {
                                    clearInterval(timmer);
                                    const newCanv =
                                        document.createElement('canvas');
                                    const ctx = newCanv.getContext('2d');
                                    if (!ctx) return;
                                    if (_this.originalGraph) {
                                        const scale =
                                            _this.drawImg.width /
                                            _this.drawImg.swidth;
                                        const transWidth =
                                            _this.toolBox.width / scale;
                                        const transHeight =
                                            _this.toolBox.height / scale;
                                        newCanv.width = transWidth;
                                        newCanv.height = transHeight;
                                        const sx =
                                            (_this.toolBox.x -
                                                _this.drawImg.x) /
                                            scale;
                                        const sy =
                                            (_this.toolBox.y -
                                                _this.drawImg.y) /
                                            scale;
                                        const swidth = _this.drawImg.swidth;
                                        const sheight = _this.drawImg.sheight;
                                        ctx.translate(-sx, -sy);
                                        if (!_this.drawImg.img) return;
                                        ctx.drawImage(
                                            _this.drawImg.img,
                                            0,
                                            0,
                                            swidth,
                                            sheight
                                        );
                                    } else {
                                        newCanv.width = _this.toolBox.width;
                                        newCanv.height = _this.toolBox.height;
                                        const params = _this.toolBox;
                                        if (_this.rate) {
                                            const p =
                                                Number(
                                                    this.rate.split(':')[0]
                                                ) /
                                                Number(this.rate.split(':')[1]);
                                            const m = Number(
                                                this.rate.split(':')[0]
                                            );
                                            const n = Number(
                                                this.rate.split(':')[1]
                                            );
                                            if (m >= n) {
                                                ctx.drawImage(
                                                    tempImg,
                                                    params.x,
                                                    params.y,
                                                    params.width,
                                                    params.width * p,
                                                    0,
                                                    0,
                                                    params.width,
                                                    params.width * p
                                                );
                                            } else {
                                                ctx.drawImage(
                                                    tempImg,
                                                    params.x,
                                                    params.y,
                                                    params.width,
                                                    params.width / p,
                                                    0,
                                                    0,
                                                    params.width,
                                                    params.width / p
                                                );
                                            }
                                        } else {
                                            ctx.drawImage(
                                                tempImg,
                                                params.x,
                                                params.y,
                                                params.width,
                                                params.height,
                                                0,
                                                0,
                                                params.width,
                                                params.height
                                            );
                                        }
                                    }
                                    newCanv.toBlob(
                                        (newBlob) => {
                                            const fileName =
                                                _this.changeFileName(
                                                    _this.fileName,
                                                    _this.fileType
                                                );
                                            if (!doNotReset) {
                                                _this.handleClose();
                                                _this.$emit('cutDown', {
                                                    index: _this.index,
                                                    fileName,
                                                    blob: newBlob,
                                                    file: _this.dataURLtoFile(
                                                        newCanv.toDataURL(
                                                            `image/${_this.fileType}`
                                                        ),
                                                        fileName
                                                    ),
                                                    dataURL: newCanv.toDataURL(
                                                        `image/${_this.fileType}`
                                                    ),
                                                });
                                            } else {
                                                if (_this.previewMode) {
                                                    _this.$emit('onPrintImg', {
                                                        index: _this.index,
                                                        fileName,
                                                        blob: newBlob,
                                                        file: _this.dataURLtoFile(
                                                            newCanv.toDataURL(
                                                                `image/${_this.fileType}`
                                                            ),
                                                            fileName
                                                        ),
                                                        dataURL:
                                                            newCanv.toDataURL(
                                                                `image/${_this.fileType}`
                                                            ),
                                                    });
                                                }
                                            }
                                        },
                                        `image/${_this.fileType}`,
                                        0.95
                                    );
                                }
                            }, 200);
                        };
                    } else {
                        const newCanv = document.createElement('canvas');
                        newCanv.width = _this.toolBox.width;
                        newCanv.height = _this.toolBox.height;
                        const ctx = newCanv.getContext('2d');
                        const params = _this.toolBox;
                        if (!ctx) return;
                        if (_this.rate) {
                            const p =
                                Number(this.rate.split(':')[0]) /
                                Number(this.rate.split(':')[1]);
                            ctx.drawImage(
                                tempImg,
                                params.x,
                                params.y,
                                params.width,
                                params.width * p,
                                0,
                                0,
                                params.width,
                                params.width * p
                            );
                        } else {
                            ctx.drawImage(
                                tempImg,
                                params.x,
                                params.y,
                                params.width,
                                params.height,
                                0,
                                0,
                                params.width,
                                params.height
                            );
                        }
                        const fileName = _this.changeFileName(
                            _this.fileName,
                            _this.fileType
                        );
                        if (!doNotReset) {
                            _this.handleClose();
                            _this.$emit('cutDown', {
                                fileName,
                                dataURL: newCanv.toDataURL(
                                    `image/${_this.fileType}`
                                ),
                            });
                        } else {
                            _this.$emit('onPrintImg', {
                                fileName,
                                dataURL: newCanv.toDataURL(
                                    `image/${_this.fileType}`
                                ),
                            });
                        }
                    }
                }, `image/${_this.fileType}`);
            } else {
                if (!doNotReset) {
                    console.warn('No picture selected');
                    _this.$emit('error', {
                        err: 1,
                        msg: 'No picture selected',
                    });
                }
            }
        },
    },
    computed: {
        showToolBoxWidth() {
            let result;
            if (!this.originalGraph) {
                result = this.toolBox.width;
            } else {
                result =
                    this.toolBox.width /
                    (this.drawImg.width / this.drawImg.swidth);
            }
            return Number(result).toFixed(0);
        },
        showToolBoxHeight() {
            let result;
            if (!this.originalGraph) {
                result = this.toolBox.height;
            } else {
                result =
                    this.toolBox.height /
                    (this.drawImg.width / this.drawImg.swidth);
            }
            return Number(result).toFixed(0);
        },
        showToolBoxX() {
            const result = this.toolBoxPosition.x;
            return Number(result).toFixed(0);
        },
        showToolBoxY() {
            const result = this.toolBoxPosition.y;
            return Number(result).toFixed(0);
        },
    },
    render() {
        var _a,
            _b,
            _c,
            _d,
            _e,
            _f,
            _g,
            _h,
            _j,
            _k,
            _l,
            _m,
            _o,
            _p,
            _q,
            _r,
            _s,
            _t,
            _u,
            _v,
            _w,
            _x,
            _y,
            _z,
            _0;
        return h(
            'div',
            { class: 'n-img-cutter' },
            this.showChooseBtn &&
                this.isModal &&
                h(
                    'div',
                    { onClick: this.handleOpen },
                    (_b = (_a = this.$slots).openImgCutter) === null ||
                        _b === void 0
                        ? void 0
                        : _b.call(_a),
                    (_d = (_c = this.$slots).open) === null || _d === void 0
                        ? void 0
                        : _d.call(_c)
                ),
            !this.$slots.openImgCutter &&
                !this.$slots.open &&
                this.isModal &&
                h(
                    NButton,
                    { type: 'primary', onClick: this.handleOpen },
                    { default: () => this.label }
                ),
            h(
                'div',
                null,
                this.visible &&
                    h(
                        'div',
                        {
                            class: this.isModal
                                ? 'n-mask n-vue-img-cutter'
                                : '',
                            ref: 'mask',
                        },
                        h(
                            'div',
                            {
                                class: this.isModal
                                    ? 'n-dialogBoxModal'
                                    : 'n-dialogBox',
                            },
                            h(
                                'div',
                                {
                                    'enter-class': 'fade-in-enter',
                                    'enter-active-class': 'fade-in-active',
                                    'leave-class': 'fade-out-enter',
                                    'leave-active-class': 'fade-out-active',
                                },
                                h(
                                    'div',
                                    {
                                        ref: 'dialogMainModalRef',
                                        class: this.isModal
                                            ? 'n-dialogMainModal'
                                            : 'n-dialogMain',
                                        style: {
                                            width:
                                                String(
                                                    this.isModal
                                                        ? this.boxWidth + 32
                                                        : this.boxWidth
                                                ) + 'px',
                                        },
                                    },
                                    h(
                                        'div',
                                        { class: 'n-toolMain' },
                                        this.isModal &&
                                            h(
                                                'div',
                                                { class: 'n-tool-title' },
                                                '\u56FE\u7247\u88C1\u526A',
                                                h(
                                                    'span',
                                                    {
                                                        class: 'n-closeIcon',
                                                        onClick:
                                                            this.handleClose,
                                                    },
                                                    '\xD7'
                                                )
                                            ),
                                        h(
                                            'div',
                                            {
                                                ref: 'toolBox',
                                                style: {
                                                    height:
                                                        String(this.boxHeight) +
                                                        'px',
                                                    width:
                                                        String(this.boxWidth) +
                                                        'px',
                                                },
                                                onMousemove:
                                                    this.controlBtnMouseMove,
                                                onMouseup:
                                                    this.controlBtnMouseUp,
                                                onMouseleave:
                                                    this.controlBtnMouseUp,
                                                class: 'n-toolBox',
                                            },
                                            !this.drawImg.img &&
                                                this.showChooseBtn &&
                                                h(
                                                    'div',
                                                    { class: 'n-tips' },
                                                    h(
                                                        'div',
                                                        {
                                                            class: 'n-btn n-btn-warning n-btn-xs',
                                                            onClick:
                                                                this.chooseImg,
                                                        },
                                                        this.showChooseBtn
                                                    )
                                                ),
                                            this.tool &&
                                                h(
                                                    'div',
                                                    {
                                                        'v-show':
                                                            this.drawImg.img &&
                                                            !this.dropImg
                                                                .active &&
                                                            this.controlBox
                                                                .disable &&
                                                            this.toolBox
                                                                .disable,
                                                        class: 'n-dockMain',
                                                        style: {
                                                            background:
                                                                this.toolBgc,
                                                            transform:
                                                                'scale(' +
                                                                String(
                                                                    this.scale
                                                                ) +
                                                                ')',
                                                            transformOrigin:
                                                                'left bottom',
                                                        },
                                                        onMouseenter:
                                                            this.dropImgOff,
                                                    },
                                                    this.rate &&
                                                        h(
                                                            'div',
                                                            {
                                                                class: 'n-dockBtn',
                                                            },
                                                            (_g =
                                                                (_f = (_e =
                                                                    this.$slots)
                                                                    .ratio) ===
                                                                    null ||
                                                                _f === void 0
                                                                    ? void 0
                                                                    : _f.call(
                                                                          _e
                                                                      )) !==
                                                                null &&
                                                                _g !== void 0
                                                                ? _g
                                                                : 'Ratio:',
                                                            this.rate
                                                        ),
                                                    h(
                                                        'div',
                                                        {
                                                            class: 'n-dockBtn',
                                                            onClick:
                                                                this.scaleReset,
                                                        },
                                                        (_k =
                                                            (_j = (_h =
                                                                this.$slots)
                                                                .scaleReset) ===
                                                                null ||
                                                            _j === void 0
                                                                ? void 0
                                                                : _j.call(
                                                                      _h
                                                                  )) !== null &&
                                                            _k !== void 0
                                                            ? _k
                                                            : 'Scale:',
                                                        this.drawImg.swidth > 0
                                                            ? (
                                                                  this.drawImg
                                                                      .width /
                                                                  this.drawImg
                                                                      .swidth
                                                              ).toFixed(2)
                                                            : '-'
                                                    ),
                                                    !this.originalGraph &&
                                                        h(
                                                            Fragment,
                                                            null,
                                                            h(
                                                                'div',
                                                                {
                                                                    onClick:
                                                                        () =>
                                                                            this.turnImg(
                                                                                -90
                                                                            ),
                                                                    class: 'n-dockBtn',
                                                                },
                                                                (_o =
                                                                    (_m = (_l =
                                                                        this
                                                                            .$slots)
                                                                        .turnLeft) ===
                                                                        null ||
                                                                    _m ===
                                                                        void 0
                                                                        ? void 0
                                                                        : _m.call(
                                                                              _l
                                                                          )) !==
                                                                    null &&
                                                                    _o !==
                                                                        void 0
                                                                    ? _o
                                                                    : ' \u21B3 '
                                                            ),
                                                            h(
                                                                'div',
                                                                {
                                                                    onClick:
                                                                        () =>
                                                                            this.turnImg(
                                                                                90
                                                                            ),
                                                                    class: 'n-dockBtn',
                                                                },
                                                                (_r =
                                                                    (_q = (_p =
                                                                        this
                                                                            .$slots)
                                                                        .turnRight) ===
                                                                        null ||
                                                                    _q ===
                                                                        void 0
                                                                        ? void 0
                                                                        : _q.call(
                                                                              _p
                                                                          )) !==
                                                                    null &&
                                                                    _r !==
                                                                        void 0
                                                                    ? _r
                                                                    : ' \u21B2 '
                                                            ),
                                                            h(
                                                                'div',
                                                                {
                                                                    onClick:
                                                                        () =>
                                                                            this.turnReset(),
                                                                    class: 'n-dockBtn',
                                                                },
                                                                (_u =
                                                                    (_t = (_s =
                                                                        this
                                                                            .$slots)
                                                                        .reset) ===
                                                                        null ||
                                                                    _t ===
                                                                        void 0
                                                                        ? void 0
                                                                        : _t.call(
                                                                              _s
                                                                          )) !==
                                                                    null &&
                                                                    _u !==
                                                                        void 0
                                                                    ? _u
                                                                    : ' \u21BB '
                                                            ),
                                                            h(
                                                                'div',
                                                                {
                                                                    onClick:
                                                                        this
                                                                            .flipHorizontal,
                                                                    class: 'n-dockBtn',
                                                                },
                                                                (_x =
                                                                    (_w = (_v =
                                                                        this
                                                                            .$slots)
                                                                        .flipHorizontal) ===
                                                                        null ||
                                                                    _w ===
                                                                        void 0
                                                                        ? void 0
                                                                        : _w.call(
                                                                              _v
                                                                          )) !==
                                                                    null &&
                                                                    _x !==
                                                                        void 0
                                                                    ? _x
                                                                    : ' \u21C6 '
                                                            ),
                                                            h(
                                                                'div',
                                                                {
                                                                    onClick:
                                                                        this
                                                                            .flipVertically,
                                                                    class: 'n-dockBtn',
                                                                },
                                                                (_0 =
                                                                    (_z = (_y =
                                                                        this
                                                                            .$slots)
                                                                        .turnRight) ===
                                                                        null ||
                                                                    _z ===
                                                                        void 0
                                                                        ? void 0
                                                                        : _z.call(
                                                                              _y
                                                                          )) !==
                                                                    null &&
                                                                    _0 !==
                                                                        void 0
                                                                    ? _0
                                                                    : ' \u21C5 '
                                                            )
                                                        )
                                                ),
                                            h(
                                                'div',
                                                {
                                                    'v-show':
                                                        this.drawImg.img !=
                                                        null,
                                                    ref: 'toolBoxControl',
                                                    onMousedown:
                                                        this.toolBoxMouseDown,
                                                    onMouseup:
                                                        this.toolBoxMouseUp,
                                                    onMousemove:
                                                        this.toolBoxMouseMove,
                                                    onMouseleave:
                                                        this.toolBoxMouseLeave,
                                                    class: 'n-toolBoxControl',
                                                },
                                                h(
                                                    'div',
                                                    {
                                                        class: 'n-toolBoxControlBox',
                                                    },
                                                    h(
                                                        'div',
                                                        {
                                                            class: 'n-controlBox',
                                                        },
                                                        h('div', {
                                                            class: 'n-controlBoxInnerLine n-controlBoxInnerLineTop',
                                                        }),
                                                        h('div', {
                                                            class: 'n-controlBoxInnerLine n-controlBoxInnerLineBottom',
                                                        }),
                                                        h('div', {
                                                            class: 'n-controlBoxInnerLine n-controlBoxInnerLineLeft',
                                                        }),
                                                        h('div', {
                                                            class: 'n-controlBoxInnerLine n-controlBoxInnerLineRight',
                                                        }),
                                                        h(
                                                            'div',
                                                            {
                                                                class: 'n-selectArea',
                                                            },
                                                            '\u5BBD:',
                                                            this
                                                                .showToolBoxWidth,
                                                            ' \u9AD8:',
                                                            this
                                                                .showToolBoxHeight,
                                                            ' (x:',
                                                            this.showToolBoxX,
                                                            ',y:',
                                                            this.showToolBoxY,
                                                            ')'
                                                        ),
                                                        this.sizeChange &&
                                                            h(
                                                                Fragment,
                                                                null,
                                                                h('div', {
                                                                    'data-name':
                                                                        'leftUp',
                                                                    onMousedown:
                                                                        (
                                                                            $event
                                                                        ) =>
                                                                            this.controlBtnMouseDown(
                                                                                $event,
                                                                                'leftUp'
                                                                            ),
                                                                    class: 'n-leftUp n-controlBtn',
                                                                }),
                                                                h('div', {
                                                                    'data-name':
                                                                        'leftDown',
                                                                    onMousedown:
                                                                        (
                                                                            $event
                                                                        ) =>
                                                                            this.controlBtnMouseDown(
                                                                                $event,
                                                                                'leftDown'
                                                                            ),
                                                                    class: 'n-leftDown n-controlBtn',
                                                                }),
                                                                h('div', {
                                                                    'data-name':
                                                                        'rightUp',
                                                                    onMousedown:
                                                                        (
                                                                            $event
                                                                        ) =>
                                                                            this.controlBtnMouseDown(
                                                                                $event,
                                                                                'rightUp'
                                                                            ),
                                                                    class: 'n-rightUp n-controlBtn',
                                                                }),
                                                                h('div', {
                                                                    'data-name':
                                                                        'rightDown',
                                                                    onMousedown:
                                                                        (
                                                                            $event
                                                                        ) =>
                                                                            this.controlBtnMouseDown(
                                                                                $event,
                                                                                'rightDown'
                                                                            ),
                                                                    class: 'n-rightDown n-controlBtn',
                                                                })
                                                            ),
                                                        this.sizeChange &&
                                                            !this.rate &&
                                                            this.toolBox.width >
                                                                20 &&
                                                            h(
                                                                Fragment,
                                                                null,
                                                                h('div', {
                                                                    'data-name':
                                                                        'topCenter',
                                                                    onMousedown:
                                                                        (
                                                                            $event
                                                                        ) =>
                                                                            this.controlBtnMouseDown(
                                                                                $event,
                                                                                'topCenter'
                                                                            ),
                                                                    class: 'n-topCenter n-controlBtn',
                                                                }),
                                                                h('div', {
                                                                    'data-name':
                                                                        'downCenter',
                                                                    onMousedown:
                                                                        (
                                                                            $event
                                                                        ) =>
                                                                            this.controlBtnMouseDown(
                                                                                $event,
                                                                                'downCenter'
                                                                            ),
                                                                    class: 'n-downCenter n-controlBtn',
                                                                })
                                                            ),
                                                        this.sizeChange &&
                                                            !this.rate &&
                                                            this.toolBox
                                                                .height > 20 &&
                                                            h(
                                                                Fragment,
                                                                null,
                                                                h('div', {
                                                                    'data-name':
                                                                        'leftCenter',
                                                                    onMousedown:
                                                                        (
                                                                            $event
                                                                        ) =>
                                                                            this.controlBtnMouseDown(
                                                                                $event,
                                                                                'leftCenter'
                                                                            ),
                                                                    class: 'n-leftCenter n-controlBtn',
                                                                }),
                                                                h('div', {
                                                                    'data-name':
                                                                        'rightCenter',
                                                                    onMousedown:
                                                                        (
                                                                            $event
                                                                        ) =>
                                                                            this.controlBtnMouseDown(
                                                                                $event,
                                                                                'rightCenter'
                                                                            ),
                                                                    class: 'n-rightCenter n-controlBtn',
                                                                })
                                                            )
                                                    ),
                                                    h('div', {
                                                        class: 'n-toolBoxControlLine n-toolBoxControlLineItem-1',
                                                    }),
                                                    h('div', {
                                                        class: 'n-toolBoxControlLine n-toolBoxControlLineItem-2',
                                                    }),
                                                    h('div', {
                                                        class: 'n-toolBoxControlLine n-toolBoxControlLineItem-3',
                                                    }),
                                                    h('div', {
                                                        class: 'n-toolBoxControlLine n-toolBoxControlLineItem-4',
                                                    })
                                                )
                                            ),
                                            h('canvas', {
                                                class: 'n-canvasSelectBox',
                                                ref: 'canvasSelectBox',
                                                width: this.boxWidth,
                                                onMousedown: this.dropImgOn,
                                                onMouseup: this.dropImgOff,
                                                onMousemove: this.dropImgMove,
                                                height: this.boxHeight,
                                            }),
                                            h('canvas', {
                                                class: 'n-canvas',
                                                ref: 'canvas',
                                                width: this.boxWidth,
                                                height: this.boxHeight,
                                            })
                                        )
                                    )
                                )
                            ),
                            h('div', { style: 'clear: both' })
                        )
                    )
            )
        );
    },
});
