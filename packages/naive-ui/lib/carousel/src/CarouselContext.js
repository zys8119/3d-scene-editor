Object.defineProperty(exports, '__esModule', { value: true });
exports.useCarouselContext = exports.provideCarouselContext = void 0;
const vue_1 = require('vue');
const _utils_1 = require('../../_utils');
const carouselMethodsInjectionKey = (0, _utils_1.createInjectionKey)(
    'n-carousel-methods'
);
const provideCarouselContext = (contextValue) =>
    (0, vue_1.provide)(carouselMethodsInjectionKey, contextValue);
exports.provideCarouselContext = provideCarouselContext;
const useCarouselContext = (location = 'unknown', component = 'component') => {
    const CarouselContext = (0, vue_1.inject)(carouselMethodsInjectionKey);
    if (!CarouselContext) {
        (0, _utils_1.throwError)(
            location,
            `\`${component}\` must be placed inside \`n-carousel\`.`
        );
    }
    return CarouselContext;
};
exports.useCarouselContext = useCarouselContext;
