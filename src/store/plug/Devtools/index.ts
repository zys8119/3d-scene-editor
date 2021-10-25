import SetupDevtools from './SetupDevtools'

export default {
    install (app, options = {}) {
        // Our Vue plugin logic

        new SetupDevtools(app, options)
    }
}
