export default defineComponent({
    props: {
        content: {},
    },
    render() {
        return <>{this.$props.content}</>;
    },
});
