import {defineComponent, ref, h, provide} from 'vue'
import {WpImage, WpInput} from 'wisdom-plus'
import logo from 'wisdom-plus/wisdom-plus.png'

export default defineComponent({
    name:'App',
    setup() {
        const el = ref()
        const search = ref('')
        const loading = ref(false)
        const route = ref(null)
        const translateY = ref(0)
        const isSwitch = ref(false)
        const switchItem = ref(500)
        const isLocalSearch = ref(false)
        const searchChange = async() => {
            route.value.searchChange()
        }
        const synchronousIconConfigs = async() => {
            route.value.synchronousIconConfigs()
        }
        const handleWheel = (e: WheelEvent) => {
            const index = 0
            if (!isSwitch.value && (e.deltaY > index || e.deltaY < -index)) {
                isSwitch.value = true
                if (translateY.value === 0) {
                    translateY.value = -40
                    isLocalSearch.value = true
                } else {
                    translateY.value = 0
                    isLocalSearch.value = false
                }
                setTimeout(() => {
                    isSwitch.value = false
                }, switchItem.value)
            }
        }
        provide('search', search)
        provide('isLocalSearch', isLocalSearch)
        return {
            search,
            searchChange,
            synchronousIconConfigs,
            route,
            loading,
            el,
            handleWheel,
            translateY,
            switchItem,
        }
    },
    render() {
        return (<div ref={'el'} class={{
            'icons-main':true
        }}>
            <div class={{
                'icons-main-header': true
            }}>
                <WpImage class={'logo'} src={logo}></WpImage>
                {this.$route.path === '/' ? <div class="search">
                    <div class="search-box" onWheel={this.handleWheel} style={{
                        transform: `translateY(${this.translateY}px)`,
                        transition: `all ease-in-out ${this.switchItem}ms`,
                    }}>
                        <WpInput placeholder={'搜索阿里图标，鼠标滚轮切换本地搜索'}
                                 clearable
                                 v-model={this.search}
                                 onKeyup={e => e.code === 'Enter' ? this.searchChange() : null}
                                 onClear={this.searchChange}
                        ></WpInput>
                        <WpInput placeholder={'搜索本地图标，鼠标滚轮切换在线搜索'}
                                 class={'is-local-search'}
                                 clearable
                                 v-model={this.search}
                                 onKeyup={e => e.code === 'Enter' ? this.searchChange() : null}
                                 onClear={this.searchChange}
                        ></WpInput>
                    </div>
                </div> : null}
                <div class={'navs'}>
                    {this.$route.path === '/' ? <div onClick={this.synchronousIconConfigs}>本地同步</div> : <div onClick={() => this.$router.push('/')}>首页</div>}
                </div>
            </div>
            <router-view v-slots={{
                default:({Component}) => h(Component || 'div', {
                    ref:'route',
                    props:{
                        search:this.search
                    }
                })
            }}></router-view>
        </div>)
    }
})
