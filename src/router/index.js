import Vue from "vue";
import VueRouter from "vue-router"
import classify from "./classify"
import home from "./home"
import mine from "./mine"
import seek from "./seek"
import activity from "./activity"
import shuoxi from "./shuoxi"
import DetailPages from "./detaipages"
Vue.use(VueRouter);

const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/home",
        },
        home,
        classify,
        mine,
        seek,
        activity,
        shuoxi,
        DetailPages
        
    ]
})


export default router;

