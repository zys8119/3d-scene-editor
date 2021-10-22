import {mock, Random} from "mockjs"
import {v4 as uuid} from "uuid"
class mockData {
    userId = uuid();
    constructor(){

    }
    success(data){
        return {
            code:0,
            data
        }
    }

    getUserInfo(){
        return this.success({
            name:"管理员",
            id:this.userId,
            token:this.userId,
            menus:[
                {
                    path:"/home",
                    title:"首页",
                    name:uuid(),
                    id:uuid(),
                    is_child_page:1,
                },
            ]
        })
    }

    getUserTestData(o){
        let no_page: boolean;
        let body:any = {};
        try {
            body = JSON.parse(o.body)
            no_page = body.no_page;
        }catch (e) {
            no_page = false;
        }
        const data = new Array(10).fill(0).map(()=>({
            "name": "测试内容"+parseInt((Math.random()*1000).toString()),
            "content|1-100": "大量测试内容"+parseInt((Math.random()*1000).toString()),
            time:Random.date('yyyy-MM-dd HH:mm:ss'),
            id:uuid()
        }))
        return {
            code:0,
            data:no_page ? data : {
                body,
                list:data,
                total:100,
            }
        }
    }
}
const md = new mockData();

mock(/\/aaa/,o=>md.getUserTestData(o))
