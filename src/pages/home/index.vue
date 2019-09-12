<template>
  <!--首页-->
  <div class="pb50">
    <!--头部-->
    <div class="home-head">
      <a href>
        全国
        <span></span>
      </a>
      <router-link to="/seek" tag="div" class="search">
        <input type="text" placeholder="搜索" />
        <i></i>
      </router-link>
    </div>

    <!--轮播图-->

    <Carousel />

    <!--标题导航-->
    <div class="title-nav">
      <p>
        <a href>
          <i></i>演唱会
        </a>
        <a href>
          <i></i>话剧舞台剧
        </a>
        <a href>
          <i></i>体育赛事
        </a>
        <a href>
          <i></i>儿童亲子
        </a>
      </p>
      <p class="mt25">
        <a href>
          <i></i>全部分类
        </a>
        <!-- <a href="#/activity">
          <i></i>活动
        </a> -->
         <router-link to="/activity" tag="a">
          <i></i>活动
        </router-link>
        <a href>
          <i></i>永乐说
        </a>
        <a href>
          <i></i>我的
        </a>
      </p>
    </div>
    <!--主要演出-->
    <div class="first-pay-first">
      <a href>
        <img
          src="https://static.228.cn/upload/2019/09/09/1567992986913_m8x2_m1.jpg"
          width="100%"
          height="152"
          style="background: rgba(225, 2, 9, 0.3);"
        />
        <i class="tit" style="display:none;">先付先抢</i>
      </a>
    </div>
    <!--推荐 场馆-->
    
    <div class="special">
      <ul>
        <li></li>
      </ul>
    </div>
    <div>
    <h3 class="con-tit con-tits mb15 pt10">
      <b :class="activeIndex==1?'active':''" @click="handlerRemmond()">推荐</b>
      <b :class="activeIndex==2?'active':''" @click="handlerVenue()">场馆</b>
    </h3>
    <component :is="comName"></component>
    </div>
    
    <!-- 首页底部 -->
    <Foot/>
    <!-- <Time /> -->
  
  <!--首页结束-->
  <!--公共底部-->
  </div>
</template>

<script>
// import DetailPages from "@components/DetailPages";
import Foot from "@components/foot";
import Recommend from "@components/special";
import Venue from "@components/venue";
import Time from "@components/time";
export default {
  name: "Home",
  data() {
    return {
      comName: "recommend",
      flag: true,
      activeIndex: 1
    };
  },
  components: {
    // DetailPages,
    Time,
    [Foot.name]: Foot,
    [Recommend.name]: Recommend,
    [Venue.name]: Venue
  },
  methods: {
    handlerRemmond() {
      (this.comName = "recommend"), (this.flag = true), (this.activeIndex = 1);
    },
    handlerVenue() {
      (this.comName = "venue"), (this.flag = false), (this.activeIndex = 2);
    }
  }
};
</script>

<style>

body,
p,
h3,
h4,
h5,
ul,
figure,
figcaption {
  margin: 0;
  padding: 0;
}
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
img {
  vertical-align: top;
}
html {
  font-size: 26.667vw;
}
img,
a,
i,
em,
strong {
  display: block;
}
img {
  vertical-align: top;
}
.mt5 {
  margin-top: 0.05rem;
}
.f11 {
  font-size: 0.11rem;
}
.gray9 {
  color: #999;
}
.f11 {
  font-size: 0.11rem;
}
em {
  font-style: normal;
}
.db {
  display: block;
}
.special {
  margin: 0 0.2rem;
}

.special li {
  margin-bottom: 0.1rem;
  display: flex;
}
h3 {
  font-size: 0.22rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
}
h3 b {
  margin-right: 0.1rem;
  color: #b5bbc1;
}
h3 .active {
  color: #000;
}
.con-tit {
  font-size: 0.22rem;
  color: #000;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
}
.recommend li a span:last-child {
  margin-top: 0.02rem;
}
.gray5 {
  color: #b5bbc1;
}
.f10 {
  font-size: 0.1rem;
}
.red {
  color: #ff3a56;
}
.f13 {
  font-size: 0.13rem;
}
.mr5 {
  margin-right: 0.05rem;
}
.pb {
  padding-bottom: 0.5rem;
}
.mb15 {
  margin-bottom: 0.15rem;
}
.pt10 {
  padding-top: 0.1rem;
}
.mb10 {
  margin-bottom: 0.1rem;
}

body {
  font-size: 0.14rem;
  font-family: "PingFangSC-Regular";
  max-width: 640px;
  min-width: 320px;
  margin: auto;
  font-weight: 400;
}
.pb50{
  position: absolute;
  width: 100%;
  height: 100%;

}

.pb50 .home-head {
  width: 100%;
  height: 0.48rem;
  background: linear-gradient(to right, #ff7e6f, #ff2959);
  padding: 0.04rem 0.15rem 0.04rem 0.1rem;
  display: flex;
  background: linear-gradient(to right, #ff7e6f, #ff2959);
  box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
  box-sizing: border-box;
}
.pb50 .home-head a {
  width: 0.5rem;
  height: 0.4rem;
  line-height: 0.4rem;
  position: relative;
  text-align: center;
  padding-right: 0.15rem;
  color: #fff;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.pb50 .home-head span {
  background: url("../../../public/img/icon.png") no-repeat 0 -11.44rem;
  position: absolute;
  right: 0.06rem;
  top: 0.175rem;
  display: block;
  width: 0.08rem;
  height: 0.05rem;
  background-size: 0.75rem;
}
.pb50 .home-head .search {
  flex: 1;
  text-align: center;
  height: 0.34rem;
  line-height: 0.34rem;
  border-radius: 1rem;
  margin-top: 0.03rem;
  background-color: #fff;
  overflow: hidden;
  position: relative;
}
.pb50 .home-head .search input {
  position: relative;
  height: 0.34rem;
  line-height: 0.34rem;
  font-size: 0.13rem;
  width: calc(100% - 0.75rem);
  padding: 0 0.2rem 0 0.55rem;
  border: none;
  text-align: center;
  z-index: 2;
  background: none;
}
.pb50 .home-head .search i {
  background: url("../../../public/img/icon.png") no-repeat;
  width: 0.14rem;
  height: 0.14rem;
  display: block;
  position: absolute;
  top: 0.1rem;
  background-size: 1.5rem;
  background-position: 0 -28.76rem;
  z-index: 1;
  left: calc(100% / 2 - 15px);
}
/* .pb50 .wh_content {
  width: 100%;
  height: 1.52rem;
  background: pink;
} */
.pb50 .title-nav {
  margin: 0.25rem 0.2rem;
  width: 3.35rem;
  height: 1.35rem;
}
.pb50 .title-nav p {
  display: flex;
}
.pb50 .title-nav p a {
  float: left;
  flex: 1;
  text-align: center;
  color: rgb(123, 129, 135);
}
.pb50 .title-nav a i {
  background: url("../../../public/img/icon.png") no-repeat;
  width: 0.36rem;
  height: 0.36rem;
  background-size: 0.75rem;
  margin: auto;
}
.pb50 .title-nav p:nth-child(1) a:nth-child(1) i {
  background-position: 0 -6.9325rem;
}
.pb50 .title-nav p:nth-child(1) a:nth-child(2) i {
  background-position: 0 -7.3773rem;
}
.pb50 .title-nav p:nth-child(1) a:nth-child(3) i {
  background-position: 0 -7.83rem;
}
.pb50 .title-nav p:nth-child(1) a:nth-child(4) i {
  background-position: 0 -8.265rem;
}
.pb50 .title-nav .mt25 {
  margin-top: 0.25rem;
}
.pb50 .title-nav p:nth-child(2) a:nth-child(1) i {
  background-position: 0 -8.7125rem;
}
.pb50 .title-nav p:nth-child(2) a:nth-child(2) i {
  background-position: 0 -9.155rem;
}
.pb50 .title-nav p:nth-child(2) a:nth-child(3) i {
  background-position: 0 -9.6rem;
}
.pb50 .title-nav p:nth-child(2) a:nth-child(4) i {
  background-position: 0 -10.0475rem;
}
.pb50 .first-pay-first {
  position: relative;
  border-radius: 0.1rem;
  margin: 0.2rem;
  overflow: hidden;
}
.pb50 .first-pay-first .tit {
  position: absolute;
  top: 0;
  right: 0;
  width: 0.6rem;
  height: 0.2rem;
  line-height: 0.2rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0 0.1rem;
}
</style>