<template>
  <div class="xiangqingye">
    <div class="xqytop">
      <div class="bg_shang">
        <div class="xqybg"></div>
      </div>
      <div class="content">
        <div class="ioc">
          <span class="iconfont icon-jiantou-copy"></span>
          <span>
            <span class="iconfont icon-shoucang"></span>
            <span class="iconfont icon-shezhi"></span>
          </span>
        </div>
        <div class="cont">
          <div class="cont_left">
            <img
              src="http://static.228.cn/upload/2019/07/18/AfterTreatment/1563426752892_g9f2-0.jpg"
            />
          </div>
          <div class="cont_right">
            <p>【上海】江苏2019选一选的地下第五付款人人访客卡</p>
            <span>￥380-￥1280</span>
          </div>
        </div>
      </div>
    </div>
    <div class="shuoming">
      <div class="wenzi">
        <p>【温馨提示】本演出于7月26日11:18开启预售；建议您提前注册、登陆永乐票务网站或客户端，便于第一时间抢票成功；为了保证您能够更顺利购票，请下载最新版本的APP（版本号：V3.6.2）。</p>
        <a>查看更多</a>
      </div>
      <div class="wenzi_bm">
        <p>
          <span class="iconfont icon-icon-test1"></span> 2019.09.14
        </p>
        <p>
          <span class="iconfont icon-dengjichu"></span> 国家会展中心（上海）红桥
        </p>
        <em class="iconfont icon-arrow-right icon-rr"></em>
      </div>
    </div>
    <!-- 注意 -->
    <div class="zhuyi">
      <h3>注意事项</h3>
      <div>
        <p>a)演出详情仅供参考，具体信息以现场为准；</p>
        <p>b)1.2米以下儿童谢绝入场，1.2米以上儿童需持票入场；</p>
        <p>c)演出票品具有唯一性、时效性等特殊属性，其中年票，年卡、季度票、无实际票纸的电子票不支持退换，购票时请务必仔细核对并审慎下单，具体退换票规则详见“退换及缺货说明”。</p>
        <p>d)需要开具发票的购票客户，请您在演出/活动开始5天前提供相关发票信息至在线客服，演出/活动结束后将统一由演出/活动主办单位开具增值税发票。</p>
        <p>e)票品具有唯一性，遗失不补，入场时必须携带本场演出实体门票（电子票订单除外），如未带门票、门票损坏及持任何购买凭证将无法入场，请妥善保管演出门票。</p>
      </div>
    </div>
    <!--  -->
    <div class="goupiao">
      <h3>购票公告</h3>
      <div class="wenxin">
        <p>【温馨提示】</p>
        <p>
          1.本演出将于
          <span>7月26日11:18</span>

          开启预售；
        </p>
        <div class="gegnduo">
          <a>查看更多</a>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="goupiao">
      <h3>演出详情</h3>
      <div class="yanchu">
        <h6>演出时长：90分钟，最低曲目：15首</h6>
        <h6>在广无微微儿无疮是是是</h6>

        <div class="gegnduo geg11">
          <a>查看更多</a>
        </div>
      </div>
    </div>

    <div class="faq">
      <span>FAQ</span>
      <i class="iconfont icon-arrow-right fqscion"></i>
    </div>

    <div class="faq">
      <span>在线问答</span>
      <i class="iconfont icon-arrow-right fqscion"></i>
    </div>

    <div class="foo_gou"></div>

    <div id="foot">
      <span class="iconfont icon-kefu demgjizhong"></span>
      <a>预订登记</a>
    </div>
  </div>
</template>

<script>
export default {
    nameL:DetailPages
};
</script>


<style>
.xiangqingye {
  width: 100%;
  height: 100%;
  font-size: 0.16rem;
  /* position: relative; */
  background: #dcdcdc;
}

.xqytop {
  width: 100%;
  height: 2.5rem;
  position: relative;
  /* background: khaki; */
}

.xqybg {
  /* background: url(http://static.228.cn/upload/2019/07/18/AfterTreatment/1563426752892_g9f2-0.jpg); */
  height: 190px;

  background: url(http://static.228.cn/upload/2019/07/18/AfterTreatment/1563426752892_g9f2-0.jpg)
    no-repeat center / 50% 3.9rem;
  float: left;
  width: 100%;
  background-repeat: no-repeat;
  /* background-position:-10px 0; */
  /* background-size:375px 60px; */
  background-size: cover;
  filter: blur(0.08rem);
}

.bg_shang {
  width: 100%;
  height: 1.9rem;
  background: rgba(0, 0, 0, -0.7);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 202;
  border-bottom-right-radius: 2em;
  border-bottom-left-radius: 2em;
  overflow: hidden;
  background: #f5f6f7;
}

.content {
  width: 100%;
  height: 2.5rem;
  /* background: blue; */
  /* position: relative; */
  z-index: 300;
  position: absolute;
  left: 0rem;
  top: 0rem;
  padding: 0.3rem 0.2rem 0;
}

.ioc {
  width: 100%;
  height: 0.3rem;
  /* background: saddlebrown; */
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
}

.cont {
  width: 3.35rem;
  height: 1.6rem;
  /* background: fuchsia; */
  margin-top: 0.3rem;
}

.cont_left {
  float: left;
  width: 1.2rem;
  height: 1.6rem;
}

.cont_left > img {
  width: 100%;
  border-radius: 8%;
}

.cont_right {
  margin-left: 0.1rem;
  float: left;
  height: 1.6rem;
  width: 2rem;
}

.cont_right > p {
  color: #fff;
  font-size: 0.15rem;
  margin-bottom: 0.8rem;
}

.cont_right > span {
  font-size: 0.14rem;
  color: #000;
  font-weight: 600;
}

.icon-jiantou-copy,
.icon-shoucang,
.icon-shezhi {
  font-size: 0.3rem;
  color: #f8f8ff;
}

.icon-shezhi {
  margin-left: 0.1rem;
}

.icon-shezhi::after {
  position: absolute;
  z-index: 60;
  content: "";
  /* top:0rem; */
  right: 0.2rem;
  width: 0.3rem;
  height: 0.3rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
}

.icon-shoucang::after {
  position: absolute;
  z-index: 60;
  content: "";
  top: 0.32rem;
  right: 0.65rem;
  width: 0.3rem;
  height: 0.3rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
}

.icon-jiantou-copy::after {
  position: absolute;
  z-index: 60;
  content: "";
  /* top:0rem; */
  left: 0.2rem;
  width: 0.3rem;
  height: 0.3rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
}

/* 内容 */

.shuoming {
  width: 3.35rem;
  height: 1.43rem;
  background: #fff;
  margin: 0.3rem 0.2rem 0;
  border-radius: 0.1rem;
}

.wenzi {
  width: 100%;
  height: 0.72rem;
  text-align: center;
  /* background: salmon */
}

.wenzi > p {
  font-size: 0.13rem;
  color: #999;
  /* font-size: .13rem; */
  height: 0.55rem;
  word-break: break-all;
  overflow: hidden;
  /* color: #7b8187; */
  -webkit-line-clamp: 3;
  /* border-top: 1px solid #f3f4f5; */
  padding-top: 0.05rem;
  text-overflow: ellipsis;
}

.wenzi > a {
  font-size: 0.11rem;
  color: red;
}

.wenzi_bm {
  height: 0.41rem;
  /* background: darkcyan; */
  position: relative;
  margin-top: 0.15rem;
}

.wenzi_bm > p {
  font-size: 0.14rem;
  color: #5f646a;
}

.icon-rr {
  position: absolute;
  top: 0.15rem;
  right: 0;
  color: red;
  font-size: 0.12rem;
}

/* zhuyi */
.zhuyi {
  padding: 0.3rem 0.2rem 0;
}
.zhuyi > h3 {
  margin-bottom: 0.15rem;
}
.zhuyi p {
  font-size: 0.14rem;
  color: #7b8187;
}
/* 购票 */
.goupiao {
  height: 1.43rem;
  padding: 0.3rem 0.2rem 0.1rem;
}
.wenxin {
  padding: 0.2rem 0.15rem 0.15rem;
}
.wenxin p {
  line-height: 0.3rem;
}
.wenxin span {
  color: red;
  font-weight: 700;
}
.gegnduo {
  text-align: center;
}
.gegnduo a {
  color: red;
  font-size: 0.14rem;
}
.yanchu h6 {
  margin-top: 0.15rem;
}
.yanchu h6 {
  font-size: 0.12rem;
  line-height: 0.16rem;
}
.faq {
  width: 3.35rem;
  height: 0.45rem;
  background: #fff;
  border-radius: 0.15rem;

  margin: 0 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2rem;
  margin-top: 0.26rem;
  margin-bottom: 0.16rem;
}
.goupiao .geg11 {
  width: 100%;
  height: 0.6rem;
}
.fqscion {
  color: red;
}
.foo_gou {
  width: 100%;
  height: 1rem;
}
#foot {
  width: 100%;
  height: 0.6rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#foot > a {
  display: block;
  width: 3.07rem;
  height: 0.44rem;
  background: linear-gradient(to right, #ff7e6f, #ff2959);
  box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
  border-radius: 1rem;
  text-align: center;
  line-height: 0.44rem;
  color: #fff;
}
.demgjizhong {
  font-size: 0.3rem;
  color: red;
}
</style>