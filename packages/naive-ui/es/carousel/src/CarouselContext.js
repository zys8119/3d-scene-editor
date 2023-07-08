import { inject, provide } from 'vue';
import { createInjectionKey, throwError } from '../../_utils';
const carouselMethodsInjectionKey = createInjectionKey('n-carousel-methods');
export const provideCarouselContext = (contextValue) =>
    provide(carouselMethodsInjectionKey, contextValue);
export const useCarouselContext = (
    location = 'unknown',
    component = 'component'
) => {
    const CarouselContext = inject(carouselMethodsInjectionKey);
    if (!CarouselContext) {
        throwError(
            location,
            `\`${component}\` must be placed inside \`n-carousel\`.`
        );
    }
    return CarouselContext;
};
