import {createRouter,createWebHashHistory} from "vue-router"

export default createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            component:()=>import("../view/Home.vue")
        }
    ],
});