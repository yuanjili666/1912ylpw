<template>
  <div class="login page">
        <div class="login_top">
            <span class="log_span"></span>
            <i class="iconfont icon-jiantou-copy"></i>

            <div class="login_t1">
                <div class="login_t2">
                    <div class="lgt2_to">
                        <img src="http://m2static.228.cn/images/head-photo.png">
                        <h3>yuanjili666</h3>
                        <div class="ioc">
                            <i class="iconfont icon-kefu"></i>
                            <em class="iconfont icon-shezhi"></em>
                        </div>
                    </div>
                    <div class="lgt2_tomm">
                        <ul class="nacgoin">
                            <li>
                                <em>0张</em>
                                <span>现金券</span>
                            </li>
                            <li>
                                <em>未启用</em>
                                <span>电子钱包</span>
                            </li>
                            <li>
                                <em>0</em>
                                <span>积分</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
        <ul class="digndan">
            <li>
                <em class="iconfont icon-dingdan"></em>
                <span>我的订单</span>
            </li>
            <li>
                <em class="iconfont icon-xianjinquan"></em>
                <span>现金券</span>
            </li>
        </ul>
        <ul class="dizhi">
            <li>
                <em class="iconfont icon-icon-test1"></em>
                <span>收货地址</span>
            </li>
            <li>
                <em class="iconfont icon-shoucang"></em>
                <span>我的收藏</span>
            </li>
            <li>
                <em class="iconfont icon-dengjichu"></em>
                <span>我的登记</span>
            </li>
            <li>
                <em class="iconfont icon-90"></em>
                <span>我的提问</span>
            </li>
            <li>
                <em class="iconfont icon-chakanpingzheng"></em>
                <span>观演凭证</span>
            </li>
        </ul>
        <p class="loginp"></p>


    </div>
</template>

<script>
export default {
    
}
</script>

<style>
   .login {
            height: 100%;
            width: 100%;
        }

        .login_top {

            width: 100%;
            height: 3.19rem;
            /* background: darkblue; */
            position: relative;
            top: 0px;
            left: 0;
        }

        .login_t1 {
            height: 2.23rem;
            /* background: saddlebrown; */
            background: url(http://m2static.228.cn/images/head-poho-bg.jpg) no-repeat top;
            background-size: 120%;
        }

        .login_t2 {
            height: 1.79rem;
            width: 100%;
            /* background: khaki; */
            /* margin-top: .44rem; */
            position: absolute;
            left: 0;
            bottom: 0;
        }

        .lgt2_to {
            width: 100%;
            height: 1.05rem;
            /* background: slateblue; */
            background: url(http://m2static.228.cn/images/person-titBg.png) top no-repeat;
            background-size: 100%;
            font-size: .18rem;
            text-align: center;
        }

        .lgt2_to>img {
            width: .64rem;
            height: .64rem;
        }

        .lgt2_tomm {
            height: .4rem;
            padding: 0.2rem 0.2rem 0.1rem;

        }

        .lgt2_to .ioc {
            position: absolute;
            top: .2rem;
            right: .3rem;
            /* background: forestgreen; */
        }

        .icon-kefu {
            margin-right: .2rem;
            font-size: .19rem;
            color: red;
        }

        .icon-shezhi {
            font-size: .25rem;
            color: red;
        }

        .nacgoin {
            display: flex;
            justify-content: space-around;
            /* background: darkblue; */
            font-size: .12rem;
        }

        .nacgoin>li {
            height: .4rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }

        .log_span {
            display: inline-block;
            background: rgba(105, 105, 105, 0.5);
            position: absolute;
            height: .36rem;
            width: .36rem;
            border-radius: 50%;
            top: .29rem;
            left: .13rem;
        }

        .icon-jiantou-copy {
            position: absolute;
            top: .3rem;
            left: .15rem;
            font-size: .3rem;
            color: #F5F5F5;
        }

        .digndan {
            padding-top: .24rem;
            border-top: 1px solid #F5F5F5;
            display: flex;
            justify-content: space-around;
        }

        .digndan>li {
            font-size: .13rem;
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .icon-dingdan,
        .icon-xianjinquan {
            font-size: .3rem;
            color: red;
        }

        /* dizhi */
        .dizhi {
        
            /* padding-top: .24rem; */
            /* border-top: 1px solid #F5F5F5; */
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
        }

        .dizhi>li {
            padding-top: .2rem;
            width: 1.25rem;
            height: .9rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            font-size: .13rem;
        }
        .icon-icon-test1,.icon-shoucang,.icon-dengjichu{
            font-size: .23rem;
        }
        .icon-90,.icon-chakanpingzheng{
            font-size: .26rem;
        }
        .loginp{
            height: .9rem;
        }
    
</style>