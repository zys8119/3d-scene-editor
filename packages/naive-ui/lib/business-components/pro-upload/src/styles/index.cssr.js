Object.defineProperty(exports, '__esModule', {
    value: true,
});
const cssr_1 = require('../../../../_utils/cssr');
exports.default = (0, cssr_1.c)([
    (0, cssr_1.cB)('pro-upload', ''),
    (0, cssr_1.cB)('img-cutter', [
        (0, cssr_1.cB)(
            'vue-img-cutter',
            `
 fontSize: 12px;
 line-height: 130%;
 `
        ),
        (0, cssr_1.cB)(
            'fl',
            `
 float: left;
 `
        ),
        (0, cssr_1.cB)(
            'fr',
            `
 float: right;
 `
        ),
        (0, cssr_1.cB)(
            'i-dialog-footer',
            `
 display: block;
 width: 100%;
 margin-top: 15px;
 margin-bottom: 15px;
 text-align: left;
 `
        ),
        (0, cssr_1.cB)(
            'mask',
            `
 background: rgba(0, 0, 0, 0.6);
 position: fixed;
 overflow-y: scroll;
 overflow-x: hidden;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 z-index: 999;
 `
        ),
        (0, cssr_1.cB)(
            'dialogBox',
            `
 clear: both;
 `
        ),
        (0, cssr_1.cB)(
            'dialogBoxModal',
            `
 position: relative;
 padding-top: 100px;
 padding-bottom: 100px;
 clear: both;
 `
        ),
        (0, cssr_1.cB)(
            'dialogMainModal',
            `
 line-height: 125%;
 font-size: 16px;
 position: absolute;
 top: 100px;
 left: 50%;
 margin-bottom: 100px;
 transform: translateX(-50%);
 border: 1px solid rgba(0, 0, 0, 0.8);
 border-radius: 3px;
 box-sizing: border-box;
 padding: 15px 15px 0 15px;
 background: #fff;
 z-index: 1000;
 -webkit-touch-callout: none;
 -webkit-user-select: none;
 -khtml-user-select: none;
 -moz-user-select: none;
 -ms-user-select: none;
 user-select: none;
 animation: dialogShow 0.3s;
 `
        ),
        (0, cssr_1.cB)(
            'dialogMain',
            `
 line-height: 125%;
 font-size: 16px;
 box-sizing: border-box;
 background: #fff;
 z-index: 1000;
 -webkit-touch-callout: none;
 -webkit-user-select: none;
 -khtml-user-select: none;
 -moz-user-select: none;
 -ms-user-select: none;
 user-select: none;
 `
        ),
        (0, cssr_1.cB)(
            'toolMain',
            `
 box-sizing: border-box;
 `
        ),
        (0, cssr_1.cB)(
            'toolBox',
            `
 border: 1px solid #dedede;
 background-image: linear-gradient(45deg,
 rgba(0, 0, 0, 0.25) 25%,
 transparent 0,
 transparent 75%,
 rgba(0, 0, 0, 0.25) 0),
 linear-gradient(45deg, rgba(0, 0, 0, 0.25) 25%, transparent 0, transparent 75%, rgba(0, 0, 0, 0.25) 0);
 background-color: #eee;
 background-size: 30px 30px;
 background-position: 0 0, 15px 15px;
 position: relative;
 `
        ),
        (0, cssr_1.cB)(
            'tool-title',
            `
 margin-bottom: 10px;
 `
        ),
        (0, cssr_1.cB)(
            'canvas',
            `
 position: absolute;
 top: 0;
 left: 0;
 z-index: 98;
 `
        ),
        (0, cssr_1.cB)(
            'canvasSelectBox',
            `
 position: absolute;
 top: 0;
 left: 0;
 z-index: 99;
 `
        ),
        (0, cssr_1.cB)(
            'toolBoxControl',
            `
 background: rgba(255, 255, 255, 0);
 /*background:#fff;*/
 position: absolute;
 z-index: 101;
 box-sizing: border-box;
 /*border: 1px dotted #409EFF;*/
 `
        ),
        (0, cssr_1.cB)(
            'toolBoxControlBox',
            `
 width: 100%;
 height: 100%;
 position: relative;
 background: transparent;
 z-index: 103;
 pointer-events: none;
 `
        ),
        (0, cssr_1.cB)(
            'controlBoxInnerLine',
            `
 position: absolute;
 z-index: 1;
 background-size: 10px 10px;
 background-image: linear-gradient(-45deg,
 rgba(64, 158, 255, 1) 25%,
 rgba(64, 158, 255, 0) 25%,
 rgba(64, 158, 255, 0) 50%,
 rgba(64, 158, 255, 1) 50%,
 rgba(64, 158, 255, 1) 75%,
 rgba(64, 158, 255, 0) 75%,
 rgba(64, 158, 255, 0));
 -ms-animation: zi-antBorder 0.8s linear 0s infinite normal;
 -moz-animation: zi-antBorder 0.8s linear 0s infinite normal;
 -webkit-animation: zi-antBorder 0.8s linear 0s infinite normal;
 animation: zi-antBorder 0.8s linear 0s infinite normal;
 pointer-events: none;
 `
        ),
        (0, cssr_1.cB)(
            'controlBoxInnerLineTop',
            `
 height: 1px;
 width: 100%;
 top: -1px;
 `
        ),
        (0, cssr_1.cB)(
            'controlBoxInnerLineBottom',
            `
 height: 1px;
 width: 100%;
 bottom: -1px;
 `
        ),
        (0, cssr_1.cB)(
            'controlBoxInnerLineLeft',
            `
 height: 100%;
 width: 1px;
 left: -1px;
 top: 0;
 `
        ),
        (0, cssr_1.cB)(
            'controlBoxInnerLineRight',
            `
 height: 100%;
 width: 1px;
 right: -1px;
 top: 0;
 `
        ),
        (0, cssr_1.cB)(
            'toolBoxControlLine',
            `
 position: absolute;
 z-index: 1;
 background: transparent;
 `
        ),
        (0, cssr_1.cB)(
            'toolBoxControlLineItem-1',
            `
 top: 33%;
 width: 100%;
 height: 1px;
 box-sizing: border-box;
 border-bottom: 1px dashed #409eff;
 `
        ),
        (0, cssr_1.cB)(
            'toolBoxControlLineItem-2',
            `
 top: 66%;
 width: 100%;
 height: 1px;
 box-sizing: border-box;
 border-bottom: 1px dashed #409eff;
 `
        ),
        (0, cssr_1.cB)(
            'toolBoxControlLineItem-3',
            `
 left: 33%;
 border-right: 1px dashed #409eff;
 height: 100%;
 width: 1px;
 box-sizing: border-box;
 `
        ),
        (0, cssr_1.cB)(
            'toolBoxControlLineItem-4',
            `
 left: 66%;
 border-right: 1px dashed #409eff;
 height: 100%;
 width: 1px;
 box-sizing: border-box;
 `
        ),
        (0, cssr_1.cB)(
            'controlBox',
            `
 width: 100%;
 height: 100%;
 position: absolute;
 cursor: move;
 z-index: 1;
 pointer-events: none;
 `
        ),
        (0, cssr_1.cB)(
            'controlBtn',
            `
 border: 1px solid rgba(255, 255, 255, 0.5);
 box-sizing: border-box;
 width: 6px;
 height: 6px;
 background: #409eff;
 position: absolute;
 border-radius: 50%;
 z-index: 999;
 pointer-events: auto !important;
 `
        ),
        (0, cssr_1.cB)(
            'leftUp',
            `
 top: 0;
 left: 0;
 margin-left: -3px;
 margin-top: -3px;
 cursor: se-resize;
 `
        ),
        (0, cssr_1.cB)(
            'leftDown',
            `
 bottom: 0;
 left: 0;
 margin-left: -3px;
 margin-bottom: -3px;
 cursor: sw-resize;
 `
        ),
        (0, cssr_1.cB)(
            'rightUp',
            `
 top: 0;
 right: 0;
 margin-right: -3px;
 margin-top: -3px;
 cursor: sw-resize;
 `
        ),
        (0, cssr_1.cB)(
            'rightDown',
            `
 bottom: 0;
 right: 0;
 margin-right: -3px;
 margin-bottom: -3px;
 cursor: se-resize;
 `
        ),
        (0, cssr_1.cB)(
            'topCenter',
            `
 top: 0;
 right: 50%;
 margin-right: -3px;
 margin-top: -3px;
 cursor: s-resize;
 `
        ),
        (0, cssr_1.cB)(
            'downCenter',
            `
 bottom: 0;
 right: 50%;
 margin-right: -3px;
 margin-bottom: -3px;
 cursor: s-resize;
 `
        ),
        (0, cssr_1.cB)(
            'leftCenter',
            `
 top: 50%;
 left: 0;
 margin-left: -3px;
 margin-top: -3px;
 cursor: e-resize;
 `
        ),
        (0, cssr_1.cB)(
            'rightCenter',
            `
 top: 50%;
 right: 0;
 margin-right: -3px;
 margin-top: -3px;
 cursor: e-resize;
 `
        ),
        (0, cssr_1.cB)(
            'toolBar',
            `
 margin-top: 10px;
 `
        ),
        (0, cssr_1.cB)(
            'selectArea',
            `
 display: block;
 width: 260px;
 text-align: right;
 color: #fff;
 position: absolute;
 top: -20px;
 right: 0;
 font-size: 10px;
 user-select: none;
 `
        ),
        (0, cssr_1.cB)(
            'tips',
            `
 position: absolute;
 top: 50%;
 left: 50%;
 color: red;
 z-index: 101;
 transform: translate(-50%, -50%);
 `
        ),
        (0, cssr_1.cB)(
            'btn',
            `
 display: inline-block;
 text-align: center;
 background: #dedede;
 height: 40px;
 line-height: 40px;
 padding: 0 20px;
 box-sizing: border-box;
 border-radius: 4px;
 cursor: pointer;
 border: 1px solid;
 font-size: 14px;
 transition: background 0.3s, color 0.3s;
 -webkit-touch-callout: none;
 -webkit-user-select: none;
 -khtml-user-select: none;
 -moz-user-select: none;
 -ms-user-select: none;
 user-select: none;
 `,
            [
                (0, cssr_1.cE)(
                    'disabled',
                    `
 opacity: 0.6;
 color: #333;
 border-color: #dedede !important;
 background-color: #fff !important;
 cursor: default;
 `,
                    [
                        (0, cssr_1.c)(
                            '&::hover',
                            `
 opacity: 0.6;
 color: #333 !important;
 border-color: #dedede !important;
 background-color: #fff !important;
 `
                        ),
                    ]
                ),
                (0, cssr_1.cB)(
                    '&-default',
                    `
 color: #333;
 border-color: #dcdfe6;
 background-color: #fff;
 transition: background 0.3s, color 0.3s;
 `,
                    [
                        (0, cssr_1.c)(
                            '&::hover',
                            `
 color: #409eff;
 border-color: #c6e2ff;
 background-color: #ecf5ff;
 `
                        ),
                    ]
                ),
                (0, cssr_1.cB)(
                    '&-primary',
                    `
 color: #fff;
 background-color: #409eff;
 border-color: #409eff;
 transition: background 0.3s, color 0.3s;
 `,
                    [
                        (0, cssr_1.c)(
                            '&::hover',
                            `
 background: #66b1ff;
 border-color: #66b1ff;
 color: #fff;
 `
                        ),
                    ]
                ),
                (0, cssr_1.cB)(
                    '&-warning',
                    `
 color: #fff;
 background-color: #409eff;
 border-color: #409eff;
 transition: background 0.3s, color 0.3s;
 `,
                    [
                        (0, cssr_1.c)(
                            '&::hover',
                            `
 background: #66b1ff;
 border-color: #66b1ff;
 color: #fff;
 `
                        ),
                    ]
                ),
                (0, cssr_1.cB)(
                    '&-primary-plain',
                    `
 color: #fff;
 background-color: #409eff;
 border-color: #409eff;
 transition: background 0.3s, color 0.3s;
 `,
                    [
                        (0, cssr_1.c)(
                            '&::hover',
                            `
 background: #66b1ff;
 border-color: #66b1ff;
 color: #fff;
 `
                        ),
                    ]
                ),
                (0, cssr_1.cB)(
                    '&-xs',
                    `
 color: #fff;
 background-color: #409eff;
 border-color: #409eff;
 transition: background 0.3s, color 0.3s;
 `,
                    [
                        (0, cssr_1.c)(
                            '&::hover',
                            `
 background: #66b1ff;
 border-color: #66b1ff;
 color: #fff;
 `
                        ),
                    ]
                ),
            ]
        ),
        (0, cssr_1.cB)(
            'dialog-footer',
            `
 float: right;
 `
        ),
        (0, cssr_1.cB)(
            'fade-enter-active fade-leave-active',
            `
 transition: opacity 0.3s;
 `
        ),
        (0, cssr_1.cB)(
            'fade-enter fade-leave-to',
            `
 opacity: 0;
 `
        ),
        (0, cssr_1.cB)(
            'fade-in-enter',
            `
 margin-top: -50px;
 opacity: 0;
 transition: margin-top 0.2s, opacity 0.2s;
 `
        ),
        (0, cssr_1.cB)(
            'fade-out-enter',
            `
 transition: margin-top 0.2s, opacity 0.2s;
 `
        ),
        (0, cssr_1.cB)(
            'fade-in-active',
            `
 transition: margin-top 0.2s, opacity 0.2s;
 `
        ),
        (0, cssr_1.cB)(
            'fade-out-active',
            `
 margin-top: -50px;
 opacity: 0;
 transition: margin-top 0.2s, opacity 0.2s;
 `
        ),
        (0, cssr_1.cB)(
            'file-input',
            `
 height: 40px;
 line-height: 40px;
 padding: 0 10px;
 box-sizing: border-box;
 border-radius: 4px;
 border: 1px solid #dedede;
 `,
            [
                (0, cssr_1.c)(
                    '&::placeholder',
                    `
 color: #c0c4cc;
 `
                ),
            ]
        ),
        (0, cssr_1.cB)(
            'toolbar-item',
            `
 display: inline-block;
 `
        ),
        (0, cssr_1.cB)(
            'closeIcon',
            `
 float: right;
 cursor: pointer;
 display: block;
 background: #c6e2ff;
 color: #fff;
 width: 18px;
 height: 18px;
 line-height: 18px;
 text-align: center;
 border-radius: 50%;
 margin: 0;
 padding: 0;
 transition: transform 0.3s, background 0.3s;
 `,
            [
                (0, cssr_1.c)(
                    '&::hover',
                    `
 background: #409eff;
 transform: rotate(180deg);
 `
                ),
            ]
        ),
        (0, cssr_1.cB)(
            'copyright',
            `
 font-size: 10px !important;
 clear: both !important;
 width: 100% !important;
 text-align: right !important;
 display: block !important;
 opacity: 0.5 !important;
 position: absolute !important;
 bottom: 0 !important;
 right: 0 !important;
 line-height: 100% !important;
 z-index: 100 !important;
 `,
            [
                (0, cssr_1.c)(
                    '& .a',
                    `
 color: #fff !important;
 text-decoration: none !important;
 position: relative !important;
 opacity: 1 !important;
 display: inline-block !important;
 padding: 2px !important;
 background: rgba(0, 0, 0, 0.4);
 `
                ),
            ]
        ),
        (0, cssr_1.cB)(
            'dockMain',
            `
 position: absolute;
 z-index: 1002;
 bottom: 5px;
 left: 5px;
 opacity: .5;
 transition: opacity .5s;
 box-sizing: border-box;
 padding: 5px 5px;
 border-radius: 5px;
 `,
            [
                (0, cssr_1.c)(
                    '&::hover',
                    `
 opacity: 1;
 `
                ),
            ]
        ),
        (0, cssr_1.cB)(
            'dockBtn',
            `
 font-size: 10px;
 cursor: pointer;
 display: inline-block;
 margin-right: 4px;
 color: #409eff;
 border: 1px solid #c6e2ff;
 background-color: #ecf5ff;
 padding: 1px 4px;
 border-radius: 3px;
 height: 20px;
 line-height: 16px;
 transition: background 0.2s, color 0.2s;
 -webkit-touch-callout: none;
 /* iOS Safari */
 -webkit-user-select: none;
 /* Chrome/Safari/Opera */
 -khtml-user-select: none;
 /* Konqueror */
 -moz-user-select: none;
 /* Firefox */
 -ms-user-select: none;
 /* Internet Explorer/Edge */
 user-select: none;
 /* Non-prefixed version, currently*/
 `,
            [
                (0, cssr_1.c)(
                    '&::hover',
                    `
 color: #fff;
 background-color: #409eff;
 border-color: #409eff;
 `
                ),
            ]
        ),
        (0, cssr_1.cB)(
            'dockBtnScrollBar',
            `
 display: inline-block;
 margin-right: 4px;
 margin-left: 10px;
 background: #409eff;
 width: 200px;
 height: 10px;
 border-radius: 5px;
 position: relative;
 -webkit-touch-callout: none;
 /* iOS Safari */
 -webkit-user-select: none;
 /* Chrome/Safari/Opera */
 -khtml-user-select: none;
 /* Konqueror */
 -moz-user-select: none;
 /* Firefox */
 -ms-user-select: none;
 /* Internet Explorer/Edge */
 user-select: none;
 /* Non-prefixed version, currently*/
 `
        ),
        (0, cssr_1.cB)(
            'scrollBarControl',
            `
 position: absolute;
 cursor: pointer;
 background: #fff;
 border: 2px solid #409eff;
 box-sizing: border-box;
 border-radius: 50%;
 width: 20px;
 height: 20px;
 top: 50%;
 transform: translate(-50%, -50%);
 box-shadow: 0 0 3px #1f5184;
 `
        ),
        (0, cssr_1.cB)(
            'scrollBarText',
            `
 position: absolute;
 cursor: pointer;
 background: rgba(0, 0, 0, 0.7);
 padding: 2px;
 color: #fff;
 top: -16px;
 height: 14px;
 line-height: 14px;
 text-align: center;
 font-size: 10px;
 border-radius: 3px;
 transform: translate(-50%, -50%);
 `
        ),
    ]),
]);
