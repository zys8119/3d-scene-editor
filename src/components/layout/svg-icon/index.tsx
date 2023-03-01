import { defineComponent } from 'vue';
import { NIcon } from 'naive-ui';
import add from '../../../icons/add.svg?raw';
const Test = defineComponent({
    render() {
        return <div v-html={add}>asda</div>;
    },
});
export default defineComponent({
    setup() {},
    render() {
        return (
            <NIcon>
                <Test />
            </NIcon>
        );
    },
});
