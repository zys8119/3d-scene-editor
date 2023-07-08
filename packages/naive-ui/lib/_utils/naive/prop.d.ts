export declare function largerSize(
    size: 'tiny' | 'small' | 'medium' | 'large'
): 'small' | 'medium' | 'large' | 'huge';
interface SmallerSizeMap {
    tiny: 'mini';
    small: 'tiny';
    medium: 'small';
    large: 'medium';
    huge: 'large';
}
type SmallerSize<T extends keyof SmallerSizeMap> = SmallerSizeMap[T];
export declare function smallerSize<T extends keyof SmallerSizeMap>(
    size: T
): SmallerSize<T>;
export {};
