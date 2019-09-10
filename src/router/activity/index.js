export default {
    path:"/activity",  //地址
    name:"activity",  //路由名称
    //按需加载引入 ===》路由的懒加载
    component:()=>import("@components/activity")  //这个引入的就是XXX/index.vue 文件
}