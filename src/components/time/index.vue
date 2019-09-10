<template>
      <div class="nav_content">
        <div class="nav_to">
            <ul class="nav_ul">
                <li>全部时间</li>
                <li>今天</li>
                <li>明天</li>
                <li>本周内</li>
                <li>本周末</li>
                <li>下周</li>
                <li>本月</li>
                
            </ul>

        </div>


    </div>
</template>

<script>
export default {
    name:"Time"
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