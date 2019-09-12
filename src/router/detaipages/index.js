export default {
    path:"/DetailPages",  //地址
    name:"DetailPages",  //路由名称
    meta:{
        flag:false
    },
    //按需加载引入 ===》路由的懒加载
    component:()=>import("@components/DetailPages")  //这个引入的就是XXX/index.vue 文件
}