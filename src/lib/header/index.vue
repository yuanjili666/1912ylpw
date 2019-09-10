<template>
  <div id="header">
    <!-- 顶部头 -->
    <div class="hear">
      <i class="iconfont icon-jiantou-copy hongse"></i>
      <span>分类</span>
      <i class="iconfont icon-sousuo hongse"></i>
    </div>
    <!-- 导航 -->
    <ul class="nav_classify">
      <li @click="hanleidcy()">全国</li>
      <li @click="hanleid()">全部分类</li>
      <li @click="hanltime()">全部时间</li>
    </ul>
    <Nav v-if="flag" />
    <City v-if="flagcy" />
    <Time v-if="flagtime" />
  </div>
</template>

<script>
import Nav from "@components/nav";
import City from "@components/city";
import Time from "@components/time";
export default {
  name: "Aheader",
  data() {
    return {
      flag: false,
      flagcy: false,
      flagtime: false
    };
  },
  components: {
    Nav,
    City,
    Time
  },
  methods: {
    hanleid() {
      this.flagcy = false;
      this.flagtime = false;
      this.flag = !this.flag;
    },
    hanleidcy() {
      this.flag = false;
      this.flagtime = false;
      this.flagcy = !this.flagcy;
    },
    hanltime() {
      this.flagcy = false;
      this.flag = false;
      this.flagtime = !this.flagtime;
    }
  }
};
</script>


<style>
#header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  background: #fff;
  /* height: 0.88rem;
  background: #c33;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 0.36rem;
  position: fixed;
  left: 0;
  top: 0; */
}

/* 头部 导航*/
.hear {
  height: 0.4rem;
  width: 100%;
  /* background: darkcyan; */
  display: flex;
  justify-content: space-between;
  padding: 0 0.2rem;
  align-items: center;
}

.hear > span {
  font-size: 0.17rem;
}

.nav_classify {
  height: 0.458rem;
  width: 100%;
  /* background: darkgray; */
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.nav_classify li {
  /* width: 1/3; */
  width: 33.3%;
  text-align: center;
  position: relative;
  color: #999ea3;
}

.nav_classify li::after {
  position: absolute;
  content: "";
  top: 0.08rem;
  right: 0.08rem;
  /* width: 0.1rem;
    height: 0.1rem;
    border: 0.1rem solid red;
    border-width: 0 0.1rem 0.1rem 0; */
  /* transform: rotate(45deg); */
  /* border: 0.06rem solid #fff; */
  /* border: nonel; */
  border-right: 0.05rem solid rgba(255, 255, 2550, 0.1);
  border-left: 0.05rem solid rgba(255, 255, 255, 0.1);
  border-top: 0.05rem solid #b22222;
  z-index: 8;
}
</style>