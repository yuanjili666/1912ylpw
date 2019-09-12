<template>
    
    <div id="box">
        <!-- 顶部头 -->
        <div class="hear">
            <i class="iconfont icon-jiantou-copy"></i>
            <span>活动专区</span>
            <i></i>
        </div>
        <div class="activity">

            <div class="content">
                <div class="content_img">
                    <img src="http://static.228.cn/upload/2019/05/07/1557211136696_s9i7_m1.jpg">
                </div>
                <div class="content_bt">
                    <p>惹急偶尔圣诞节佛惹急偶尔圣诞惹急偶尔圣诞山</p>
                </div>
            </div>

            <!-- 1 -->
            <div class="content">
                <div class="content_img">
                    <img src="http://static.228.cn/upload/2019/09/02/1567390905969_u4r7_m1.jpg">
                </div>
                <div class="content_bt">
                    <p>惹急偶尔圣急偶尔圣诞山</p>
                </div>
            </div>
            <!-- 2 -->
            <div class="content">
                <div class="content_img">
                    <img src="http://static.228.cn/upload/2018/05/22/1526977155309_b9e5_m1.jpg">
                </div>
                <div class="content_bt">
                    <p>惹急偶尔圣诞节佛惹急偶尔圣诞惹急偶尔圣诞山</p>
                </div>
            </div>
            <!-- 3 -->
            <div class="content">
                <div class="content_img">
                    <img src="http://static.228.cn/upload/2018/07/27/1532681634284_l7u8_m1.jpg">
                </div>
                <div class="content_bt">
                    <p>惹急偶尔圣圣诞山</p>
                </div>
            </div>
            <!-- 4 -->
            <div class="content">
                <div class="content_img">
                    <img src="http://static.228.cn/upload/2018/10/08/1538991976758_b1v1_m1.jpg">
                </div>
                <div class="content_bt">
                    <p>惹急偶尔圣诞惹急偶尔圣诞山</p>
                </div>
            </div>
            <!-- 5 -->
            <div class="content">
                <div class="content_img">
                    <img src="http://static.228.cn/upload/2019/05/07/1557211136696_s9i7_m1.jpg">
                </div>
                <div class="content_bt">
                    <p>惹急偶尔圣诞节惹急偶尔圣诞山</p>
                </div>
            </div>

        </div>

    </div>

</template>
<script>
export default {
    
}
</script>


<style>
 /* 头部 导航*/
        .hear {
            height: .4rem;
            width: 100%;
            /* background: darkcyan; */
        }

        body {
            font-size: 0.16rem;
        }

        .hear {
            display: flex;
            justify-content: space-between;
            padding: 0 .2rem;
            align-items: center;
        }

        .hear>span {
            font-size: .17rem;
        }

        /* 活动 */

        .activity {
            width: 100%;
            height: 100%;
            padding: .15rem .15rem 0;
            background: #F8F8FF;
        }

        .content {
            height: 2.13rem;
            /* background: darkcyan; */
            margin-bottom: .2rem;
            width: 100%;
            border-radius: .1rem;
            overflow: hidden;
            background: #fff;
        }

        .content_img {
            height: 1.5rem;
            background: saddlebrown;
        }

        .content_img>img {
            width: 100%;
        }

        .content_bt {
            text-align: center;
            padding: .15rem;
        }
        .content_bt>p{
            font-size: .17rem;
            color:#000;
            font-weight: 700;
        }

</style>