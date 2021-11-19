import {setupDevtoolsPlugin} from "@vue/devtools-api"
export default class SetupDevtools{
    constructor(app, options = {}){
        setupDevtoolsPlugin({
            id:"vueDevtools",
            label:"vue开发调试工具",
            app,
        },api => {
            api.on.inspectComponent(payload => {
                payload.instanceData.state.push({
                    type: "vuex",
                    key: 'state',
                    value: payload.app.config.globalProperties.$store.state
                })
            })
        })
    }
}
