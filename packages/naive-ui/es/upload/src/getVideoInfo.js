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
export const getVideoinfo = (file) =>
    __awaiter(void 0, void 0, void 0, function* () {
        console.log(file);
        function getVideoBasicInfo(videoSrc2) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield new Promise((resolve) => {
                    const video = document.createElement('video');
                    video.src = videoSrc2;
                    video.preload = 'auto';
                    video.crossOrigin = 'Anonymous';
                    video.addEventListener('loadedmetadata', () => {
                        const videoInfo = {
                            video,
                            width: video.videoWidth,
                            height: video.videoHeight,
                            duration: video.duration,
                        };
                        resolve(videoInfo);
                    });
                });
            });
        }
        function getVideoPosterInfo(videoInfo) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield new Promise((resolve) => {
                    const { video, width, height } = videoInfo;
                    video.addEventListener('canplay', () => {
                        const canvas = document.createElement('canvas');
                        canvas.width = width;
                        canvas.height = height;
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(video, 0, 0, width, height);
                        const saturation = getImageSaturation(canvas);
                        const posterUrl = canvas.toDataURL('image/jpg');
                        resolve({ posterUrl, saturation });
                    });
                });
            });
        }
        function getImageSaturation(canvas) {
            const ctx = canvas.getContext('2d');
            const uint8ClampedArray = ctx.getImageData(
                0,
                0,
                canvas.width,
                canvas.height
            ).data;
            const rgbaList = binary2rgba(uint8ClampedArray);
            const hslList = rgbaList.map((item) => {
                return rgb2hsl(item.r, item.g, item.b);
            });
            return (
                hslList.reduce((total, curr) => total + curr.s, 0) /
                hslList.length
            );
        }
        function rgb2hsl(r, g, b) {
            r = r / 255;
            g = g / 255;
            b = b / 255;
            const min = Math.min(r, g, b);
            const max = Math.max(r, g, b);
            let l = (min + max) / 2;
            const difference = max - min;
            let h = 0;
            let s = 0;
            if (max === min) {
                h = 0;
                s = 0;
            } else {
                s =
                    l > 0.5
                        ? difference / (2 - max - min)
                        : difference / (max + min);
                switch (max) {
                    case r:
                        h = (g - b) / difference + (g < b ? 6 : 0);
                        break;
                    case g:
                        h = 2 + (b - r) / difference;
                        break;
                    case b:
                        h = 4 + (r - g) / difference;
                        break;
                }
                h = Math.round(h * 60);
            }
            s = Math.round(s * 100);
            l = Math.round(l * 100);
            return { h, s, l };
        }
        function binary2rgba(uint8ClampedArray) {
            const rgbaList = [];
            for (let i = 0; i < uint8ClampedArray.length; i++) {
                if (i % 4 === 0) {
                    rgbaList.push({ r: uint8ClampedArray[i] });
                    continue;
                }
                const currentRgba = rgbaList[rgbaList.length - 1];
                if (i % 4 === 1) {
                    currentRgba.g = uint8ClampedArray[i];
                    continue;
                }
                if (i % 4 === 2) {
                    currentRgba.b = uint8ClampedArray[i];
                    continue;
                }
                if (i % 4 === 3) {
                    currentRgba.a = uint8ClampedArray[i];
                }
            }
            return rgbaList;
        }
        function getVideoPosterByFrame(videoSrc2, targetTime) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield getVideoBasicInfo(videoSrc2).then((videoInfo) =>
                    __awaiter(this, void 0, void 0, function* () {
                        const { video } = videoInfo;
                        video.currentTime = targetTime;
                        return yield getVideoPosterInfo(videoInfo);
                    })
                );
            });
        }
        function getBestPoster(videoSrc2, targetSaturation2) {
            return __awaiter(this, void 0, void 0, function* () {
                const videoInfo = yield getVideoBasicInfo(videoSrc2);
                const { duration } = videoInfo;
                for (let i = 0; i <= duration; i++) {
                    const posterInfo = yield getVideoPosterByFrame(
                        videoSrc2,
                        i
                    );
                    const { posterUrl, saturation } = posterInfo;
                    if (saturation >= targetSaturation2) {
                        return posterUrl;
                    }
                }
            });
        }
        const videoSrc = file.url;
        const targetSaturation = 0;
        return yield getBestPoster(videoSrc, targetSaturation);
    });
