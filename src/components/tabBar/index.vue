<template>
    <div id=footer>
        <ul>
            <router-link
                v-for="(item,index) in tabBar"
                :key="index"
                :to="item"
                tag="li">
                <i :class="'iconfont'+' '+item.icon" ></i>
                <span>{{item.title}}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"TabBar",
    data(){
        return{
            tabBar:[
                {
                    icon:"icon-home",
                    title:"首页",
                    path:"/home"
                },
                {
                    icon:"icon-fenlei",
                    title:"分类",
                    path:"classify"
                },
                {
                    icon:"icon-sousuo",
                    title:"搜索",
                    path:"/seek"
                },
                {
                    icon:"icon-wode",
                    title:"我的",
                    path:"/mine"
                }
            ]
        }
    }
    
}
</script>

<style>

   #footer{
        width:100%;
        height:0.5rem;
        position: fixed;
        left:0;
        bottom:0;
        background:#fff;
        border-top:1px solid #ccc;
    }

    #footer ul{
        width:100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #footer ul li{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #footer ul .router-link-active{
        color:#c33;
    }
    #footer ul li i{
        font-size:.26rem;
        font-weight:700;
    }

    #footer ul li span{
        font-size:.12rem
    }
    
</style>