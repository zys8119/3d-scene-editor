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
            avatar:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201712%2F15%2F20171215221023_KiYWM.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637725323&t=4c69eca377f3146abdbfae5af6293e50",
            menus:[
                {
                    path:"/",
                    name:"首页",
                    icon:"&#xe607;",
                    id:uuid(),
                    is_child_page:1,
                },
                {
                    path:"/",
                    name:"数据",
                    icon:"&#xe607;",
                    id:uuid(),
                    is_child_page:1,
                    children:[
                        {
                            path:"/",
                            name:"数据统计",
                            icon:"&#xe639;",
                            id:uuid(),
                            is_child_page:1,
                        },
                    ]
                },
                {
                    path:"/",
                    name:"基本功能",
                    icon:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e9b155438f840000019ae929d23e.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637722257&t=544b6a66a8a4fa66d432604521143075",
                    id:uuid(),
                    is_child_page:1,
                    children:[
                        {
                            path:"/home",
                            name:"首页测试",
                            icon:"&#xe607;",
                            id:uuid(),
                            is_child_page:1,
                        },
                        {
                            path:"/test",
                            name:"测试页面",
                            icon:"&#xe607;",
                            id:uuid(),
                            is_child_page:1,
                        },
                        {
                            path:"/",
                            name:"收文管理",
                            id:uuid(),
                            is_child_page:1,
                        },
                        {
                            path:"/",
                            name:"文库管理",
                            id:uuid(),
                            is_child_page:1,
                        },
                    ]
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
mock(/\/getUserInfo/,o=>md.getUserInfo())
