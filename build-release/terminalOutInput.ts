import {merge} from 'lodash'
import * as readline from 'readline'
import { stdin as input, stdout as output } from 'process'
import {Interface} from 'readline'
const ncol = require('ncol')

export type Config = {
    message:string
    error?:string
    isError?:boolean
    options?:ConfigOption[]
    optionsTitle?:string
    isOutHelp?:boolean
}
export type ConfigOption = {
    name:string
    value:number | string
}
export default class TerminalOutInput {
    options = null
    originOpts = {
        isError:true,
        isOutHelp:true,
        options:[]
    } as Partial<Config>
    log = ncol
    rl:Interface
    constructor(originOpts:Config = {} as Config) {
        this.originOpts = merge(this.originOpts, originOpts)
        if (originOpts && originOpts.options) {
            this.options = originOpts.options.map(e => e.value)
        }
        if (this.originOpts.isOutHelp) {
            ncol.info(`${originOpts.message}${this.options ? `\n ${originOpts.optionsTitle || '选项如下：'}` : ''}`)
            if (this.options) {
                ncol.cyan(`\n${originOpts.options.map(e => `  ${e.value}：${e.name}`).join('\n')}`)
            }
        }
    }

    async init() {
        this.setEncoding()
        let chunk:any = await this.readable()
        if (chunk !== null) {
            if (!this.options || (this.options && this.options.some(e => e == chunk))) {
                if ((this.options && this.options.some(e => e == chunk))) {
                    chunk = this.originOpts.options.find(e => e.value == chunk)
                }
            } else {
                if (this.originOpts.isError) {
                    throw new Error(this.originOpts.error)
                }
            }
        }
        return chunk
    }
    setEncoding() {
        process.stdin.setEncoding('utf8')
    }
    async readable() {
        this.rl = readline.createInterface({ input, output })
        return new Promise(r => {
            this.rl.question('', (answer) => {
                r(answer)
                this.end()
            })
        })
    }
    end() {
        this.rl.close()
    }
}
