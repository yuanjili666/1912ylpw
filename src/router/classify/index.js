export default {
    path:"/classify",  //地址
    name:"classify",  //路由名称
    //按需加载引入 ===》路由的懒加载
    component:()=>import("@pages/classify")  //这个引入的就是XXX/index.vue 文件
}