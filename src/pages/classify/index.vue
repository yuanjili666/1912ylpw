<template>
  <div id="box">
    <div class="box_u"></div>
    <Aheader />
    <div class="wrapper" ref="wrapper">
      <!-- <div class="wtp_app"> -->
      <!-- 分类，内容及盒子 -->
      <div class="content" v-show="1">
        <div class="content_list" v-for="(item,index) in classifyList" :key="index">
          <!-- list_lf，开始 -->
          <div class="list_lf">
            <i :class="item.status==1? 'list_ishou i6':'list_ishou i5'" v-html="item.status==0 ?'售票中' :'预订'"></i>
            <img :src="'http://static.228.cn/'+item.pbigimg+'!t120x160.jpg'" />
          </div>
           <!-- list_lf 结束 -->
         <!-- list_rt 开始 --> 
          <div class="list_rt">
            <h3>{{item.name}}</h3>
            <p>
              <span>{{item.begindate}}</span>~
              <span>{{item.enddate}}</span>
            </p>
            <p>{{item.vname}}</p>
            <span><i>{{(item.minprice)*100/100}}</i>-<i>{{item.maxprice}}</i><em>元</em></span>
          </div>
          <!-- list_rt 结束 -->
        </div>

      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { classifyApi } from "@api";
import BScroll from "better-scroll";
export default {
  name: "classify",
  async created() {
    let data = await classifyApi();
    // console.log(data.data.pagerMemoryList);
    this.classifyList = data.data.pagerMemoryList;
  },
  data() {
    return {
      classifyList: []
    };
  },
  mounted() {
    new BScroll(this.$refs.wrapper);
  }
};
</script>

<style>
/* 分类页面的样式 */
i {
  font-style: normal;
}

.box_u {
  height: 0.85rem;
}
/* #app {
  height: 100%;
} */
#app {
  height: 100%;
}

body {
  font-size: 0.16rem;
}

#box {
  /* height: 100%; */
  width: 100%;
  /* padding-top: 0.85rem; */
  padding-bottom: 0.5rem;
}
.wrapper {
  /* height: 100%; */
  height: 5rem;
}

/* 列表内容 */

.content {
  /* margin-top: 0.15rem; */
  padding: 0 0.2rem;
  /* padding-bottom: .5rem; */
}

.content_list {
  width: 100%;
  height: 1.13rem;
  /* background: darkmagenta; */
  margin-bottom: 0.25rem;
  /* border-radius: 0.1rem; */
}
.list_lf {
  width: 0.85rem;
  height: 1.13rem;
  /* background: deeppink; */
  float: left;
  position: relative;
}
.list_lf > img {
  width: 100%;
  border-radius: 0.1rem;
  box-shadow: 0px 1px 4px 0px rgba(58, 64, 69, 0.3);
}
.list_ishou {
  display: block;
  height: 0.2rem;
  line-height: 0.2rem;
  color: #fff;
  position: absolute;
  top: 0;
  font-size: 0.11rem;
  font-weight: bold;
  border-radius: 0.1rem 0;
  padding: 0 0.05rem;
  left: 0;
  text-align: center;

  /* background: linear-gradient(to right, #3dd9c1, #00a0c2); */
  font-style: normal;
}
.i6 {
  background: linear-gradient(to right, #3dd9c1, #00a0c2);
}
.i5 {
  background: linear-gradient(to right, #ff7e6f, #ff2959);
}
.list_iyushou {
  display: block;
  height: 0.2rem;
  line-height: 0.2rem;
  color: #fff;
  position: absolute;
  top: 0;
  font-size: 0.11rem;
  font-weight: bold;
  border-radius: 0.1rem 0;
  padding: 0 0.05rem;
  left: 0;
  text-align: center;
  /* background: linear-gradient(to right, #ff7e6f, #ff2959); */
  background: linear-gradient(to right, #3dd9c1, #00a0c2);
  font-style: normal;
}
.list_rt {
  width: 2.35rem;
  height: 1.13rem;
  /* background: forestgreen; */
  float: left;
  margin-left: 0.15rem;
}
.list_rt > h3 {
  color: #333;
  font-size: 0.14rem;
  line-height: 0.2rem;
  height: 0.4rem;
  margin-bottom: 0.1rem;
}
.list_rt > p {
  color: #999ea3;
  font-size: 0.12rem;
}
.list_rt > span {
  color: #ff3a56;
  font-size: 0.14rem;
  margin-top: 0.15rem;
  display: block;
  margin-top: 0.15rem;
  font-weight: bold;
}

.hongse {
  color: red;
  font-size: 0.17rem;
  font-weight: 700;
}
.hongse {
  color: red;
  font-size: 0.17rem;
  font-weight: 700;
}
</style>