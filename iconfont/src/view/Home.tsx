import {defineComponent, ref, h, onMounted, nextTick, inject} from 'vue'
import {
    WpSpin,
    Toast as WpToast,
    WpEllipsis,
    Dialog,
    WpPagination
} from 'wisdom-plus'
import {getConfigs, setConfigs, Icon, synchronousConfigs, searchIcon} from '../../config'
import {useClipboard} from '@vueuse/core'

export default defineComponent({
    name:'Home',
    setup(props, {expose}) {
        const MyIconList = ref<Array<{
            [key:number]:Icon
        }>>({} as any)
        const IconList = ref<Array<Icon>>([])
        const loading = ref(false)
        const count = ref(0)
        const page = ref(1)
        const size = ref(54)
        const search:any = inject('search', ref(''))
        const isLocalSearch:any = inject('isLocalSearch', ref(false))
        const searchReset = () => {
            count.value = 0
            page.value = 1
        }
        const getMyIconList = async(isreset: boolean = true) => {
            nextTick(async() => {
                MyIconList.value = await getConfigs()
                if (isreset) {
                    const results = (Object.values(MyIconList.value) as any)
                    IconList.value = isLocalSearch.value ? results.filter((e:Icon) => {
                        const str = (search.value || '').toLowerCase()
                        return e.name.indexOf(str) > -1 || e.font_class.toLowerCase().indexOf(str) > -1
                    }) : results
                }
            })
        }
        const pageChage = async p => {
            page.value = p
            await searchChange()
        }
        const searchChange = async() => {
            loading.value = true
            if (isLocalSearch.value) {
                await getMyIconList()
                searchReset()
            } else {
                if (search.value) {
                    // 搜索图标
                    const res = await searchIcon(search.value, {
                        page:page.value,
                        sortType:'updated_at',
                        fromCollection:'-1',
                        fills:'',
                        t:Date.now(),
                    })
                    count.value = res.count
                    IconList.value = res.icons
                } else {
                    await getMyIconList()
                    searchReset()
                }
            }
            loading.value = false
        }

        const {copy:onCopy} = useClipboard()
        const IconClick = async(icon:Icon) => {
            if (MyIconList.value[icon.id]) {
                // 我的图标
                await onCopy(icon.font_class)
                WpToast({
                    message:'已复制',
                    placement:'top',
                    dark:true
                })
            } else {
                // 添加图标
                loading.value = true
                await setConfigs({
                    ...icon,
                    wp_icon_prefix:'WpIconFont'
                })
                await getMyIconList(false)
                loading.value = false
                WpToast({
                    message:'保存成功',
                    placement:'top',
                    dark:true
                })
                // searchReset();
            }
        }
        const delIcon = (icon:Icon, ev:any) => {
            ev.stopPropagation()
            Dialog({
                title:'删除提示',
                content:`确定删除该【${icon.name}】图标吗`,
            }).then(async() => {
                loading.value = true
                await setConfigs({
                    ...icon,
                    is_delete_wp_icon:true,
                })
                await getMyIconList()
                loading.value = false
                WpToast({
                    message:'已删除',
                    placement:'top',
                    dark:true
                })
                searchReset()
            })
        }

        const synchronousIconConfigs = async() => {
            loading.value = true
            await synchronousConfigs()
            loading.value = false
            WpToast({
                message:'同步成功',
                placement:'top',
                dark:true
            })
            searchReset()
        }

        expose({
            searchChange,
            synchronousIconConfigs,
        })
        onMounted(async() => {
            await searchChange()
        })
        return () => (<div>
            {loading.value ? <WpSpin></WpSpin> : null}
            <div class={'icons-container'}>
                {IconList.value.map((item) => (<div
                    onClick={() => IconClick(item)}
                    class={{
                        'icons-container-item':true,
                        'icons-container-item-active':MyIconList.value[item.id],
                    }}>
                    {h('div', {
                        class:'icons-container-item-icon',
                        innerHTML:item.show_svg
                    })}
                    <div class={{
                        'icons-container-item-icon-name': true,
                    }}><WpEllipsis>{item.name}</WpEllipsis></div>
                    <div class={{
                        'icons-container-item-icon-name': true,
                    }}><WpEllipsis>({item.font_class})</WpEllipsis></div>
                    {MyIconList.value[item.id] ?
                        [
                            <div class={{
                                'icons-container-item-action': true,
                            }}>复制图标名称</div>,
                            <div class={{
                                'icons-container-item-operate': true,
                            }}>
                                <span onClick={(ev) => delIcon(item, ev)}>删除图标</span>
                            </div>
                        ]
                        :
                        <div class={{
                            'icons-container-item-action': true,
                        }}>保存图标</div> }
                </div>))}
                {IconList.value.length === 0 ? <div class={'notSearchResult'}>暂无数据！</div> : null}
            </div>
            {count.value > 0 ? <div class={{
                'icons-main-pagination':true
            }}>
                <WpPagination total={count.value}
                              size={size.value}
                              v-model={page.value}
                              onChange={pageChage}>
                </WpPagination>
            </div> : null}
        </div>)
    }
})
