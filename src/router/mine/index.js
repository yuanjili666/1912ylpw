export default {
    path:"/mine",  //地址
    name:"mine",  //路由名称
    //按需加载引入 ===》路由的懒加载
    component:()=>import("@pages/mine")  //这个引入的就是XXX/index.vue 文件
}