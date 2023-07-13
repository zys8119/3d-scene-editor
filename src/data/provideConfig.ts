import { BaseThreeClass } from 'naive-ui';
import { Ref } from 'vue';
export default createGlobalState(() => {
    const three = ref() as Ref<BaseThreeClass>;
    return {
        three,
        layerBaseName: 'RedrawObject3D',
    };
});
