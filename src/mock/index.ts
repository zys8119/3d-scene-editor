import {mock} from "mockjs"

mock("/aaa", o=>{
    console.log(o)
    return {
        code:200,
    }
})