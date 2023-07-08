import { Ref } from 'vue';
import { MergedTheme } from '../../../_mixins';
import type { RotateAlbumTheme } from '../styles';
export interface RotateAlbumInjection {
    mergedThemeRef: Ref<MergedTheme<RotateAlbumTheme>>;
    mergedClsPrefixRef: Ref<string>;
}
export declare const rotateAlbumInjectionKey: globalThis.InjectionKey<RotateAlbumInjection>;
