import { PropType } from 'vue'

const TableColumn = ElTableColumn

export default defineComponent({
    props: {
        slots: {
            type: Object as PropType<any>,
            default: () => ({})
        },
        columns: {
            type: Array as PropType<(ExtractProps<typeof TableColumn> & Record<string, any>)[]>,
            default: () => []
        }
    },
    render() {
        return (
            <>
                {
                    this.columns.map(column => (
                        <TableColumn
                            key={column.prop}
                            align="center"
                            { ...column as any }
                            v-slots={{
                                default: this.slots[column.name] ? (scope: any) => this.slots[column.name]?.(scope) : undefined
                            }}
                        />
                    ))
                }
            </>
        )
    }
})