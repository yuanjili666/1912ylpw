export default {
    path:"/home",  //地址
    name:"home",  //路由名称
    meta:{
        flag:true
    },
    //按需加载引入 ===》路由的懒加载
    component:()=>import("@pages/home")  //这个引入的就是XXX/index.vue 文件
}