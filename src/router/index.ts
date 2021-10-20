import {createRouter,createWebHashHistory} from "vue-router"
import Empty from "../view/System/Layout/Empty.vue"
export default createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/:pathMatch(.*)*",
            redirect:"/login",
        },
        {
            path:"/",
            component:Empty,
            children:[
                {
                    path:"login",
                    component:()=>import("../view/System/Login.vue")
                }
            ]
        }
    ],
});