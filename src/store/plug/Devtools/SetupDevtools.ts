import {setupDevtoolsPlugin} from "@vue/devtools-api"
export default class SetupDevtools{
    constructor(app, options = {}){
        setupDevtoolsPlugin({
            id:"Asdasd",
            label:"asdsad",
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
