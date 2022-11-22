import {getApi} from './config'
import {request} from 'http'
console.log('请稍等...')
request(getApi('/synchronousConfigs'), res => {
    res.on('data', c => {
        console.log(c.toString())
    })
}).end()
