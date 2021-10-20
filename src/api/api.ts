import { AxiosPromise } from "axios"
import { ComponentInternalInstance } from "vue"
export type apiOpt <T = any> = (this:ComponentInternalInstance,...args:any)=>AxiosPromise<T> | T;
export default <Partial<apiOpt>>{
    test(data){
        if(data.no_page){
            return  Promise.resolve({
                data:new Array(parseInt(<any>(Math.random()*10))).toString().split(",").map((e,k)=>({
                    name:"A",c:{b:{a:5454}},b:Math.random()
                }))
            })
        }
        return Promise.resolve({
            data:{
                list:new Array(parseInt(<any>(Math.random()*10))).toString().split(",").map((e,k)=>({
                    name:"A",c:{b:{a:5454}},b:Math.random(),
                    children:new Array(parseInt(<any>(Math.random()*10))).toString().split(",").map((e,k)=>({
                        name:"A",c:{b:{a:5454}},b:Math.random()
                    }))
                })),
                pageNo:1,
                pageSize:10,
                total:100
            }
        })
    }
}
