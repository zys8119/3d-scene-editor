import {createRouter,createWebHashHistory} from "vue-router"
import Empty from "../view/System/Layout/Empty.vue"
import Layout from "../view/System/Layout/Layout.vue"
export default createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/:pathMatch(.*)*",
            redirect:"/login",
        },
        {
            path:"/login",
            component:()=>import("../view/System/Login.vue")
        },
        {
            path:"/",
            component:Layout,
            redirect:"/login",
            children:[
                {
                    path:"home",
                    component:()=>import("../view/Home/Home.vue")
                },
                {
                    path:"test",
                    component:()=>import("../view/Test/Test.vue")
                },
                {
                    path:"iframe",
                    component:()=>import("../view/System/iframePage.vue")
                }
            ]
        }
    ],
});
