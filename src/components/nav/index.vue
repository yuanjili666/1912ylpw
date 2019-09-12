<template>
      <div class="nav_content">
        <div class="nav_to">
            <ul class="nav_ul">
                <li>全部分类</li>
                <li>演唱会</li>
                <li>话剧舞台剧</li>
                <li>音乐会</li>
                <li>舞蹈芭蕾</li>
                <li>戏曲综艺</li>
                <li>体育赛事</li>
                <li>儿童亲子</li>
                <li>休息娱乐</li>
            </ul>

        </div>


    </div>
</template>

<script>
export default {
    name:"Nav"
}
</script>

<style>


 .nav_content{
            width: 100%;
            height:7.5rem;
            background: rgba(0, 0, 0, .5);
            z-index: 100;
            position: fixed;
            left: 0;
        }
        .nav_to{
            padding:.2rem .3rem;
            background: #fff;
            border-radius: 0 0 .2rem .2rem;
        }
        .nav_ul{
            display: flex;
            justify-content: space-around;
            /* background: darkcyan; */
            flex-wrap: wrap;
        }
        .nav_ul>li{
            font-size: .14rem;
            height:.45rem;
            width: 1.05rem;
            line-height: .45rem;
            text-align: center;
        }


</style>