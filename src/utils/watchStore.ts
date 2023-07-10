import { Store } from '@/store';
import { Ref } from 'vue';
const store = ref() as Ref<Store>;
export default function useWatchStore(): Ref<Store> {
    if (window.store) {
        store.value = window.store;
        return store;
    } else {
        setTimeout(() => {
            useWatchStore();
        }, 500);
    }
    return store as Ref<Store>;
}
