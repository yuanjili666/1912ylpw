<template>
  <div>
    <div class="pb50 search-page">
      <div>
        <h3 class="head-tit">搜索</h3><a href class="goback"></a>
        
        <div class="title-search">
          <form action class="input-kw-form">
            <input type="search" autocomplete="on" autofocus="autofocus" class="searchtxt" v-model="searchName" />
          </form>
          <i class="search-icon"></i>
          <a href="/" class="closes nuxt-link-active">取消</a>
        </div>
      </div>
      <div class="search-content" style="min-height: 456px;">
        <a href="" class="goods-con" v-for="(item ,index) in searchList" :key="index" >
          <div class="left">
            <img :src="'https://static.228.cn'+item.pbigimg"  style="background: rgba(118, 249, 4, 0.3);"> 
            <!-- onerror="this.src=&quot;//static.228.cn/resources/images/lazy_default.gif&quot;" alt="孟京辉戏剧作品《<font class='red'>四川</font>好人》成都站" -->
            <i 
            class="tip  tip-grabSeat"  
            :class="item.status==1?'ticket-state-blue':'gradual-red' ">{{item.status==1?'预售':'售票中'}}</i></div>
          <div class="right">
            <b class="name">{{item.name}}</b>
            <span class="gray mt10 12">{{item.begindate}}</span> 
            <span class="gray f12">{{item.vname}}</span> 
            <span class="gray mt10 f12">
              <b class="red f14 mr5">{{item.minprice}}~{{item.maxprice}}.0元
                <em class="gray5 f11 ml5"></em>
                </b></span>
                </div>
        </a>
      </div>
      
      <!--首页底部-->
       <Foot />
    </div>
   
  </div>
</template>

<script>
import Foot from "@components/foot";
// import {searchApi} from "@api";
import {classifyApi} from "@api"
export default {
  name: "Seek",
  components: {
    Foot
  },
  data(){
    return {
      searchName:"",
      searchList:[]
    }
  },
  watch:{
    async searchName(newVal,oldVal){
      if(newVal ==oldVal) return ;
      let data=await classifyApi(newVal)
      // console.log(data);
      if(data.data){
        this.searchList=data.data.pagerMemoryList;
        // console.log(this.searchList)
      }
    }
  }
};
</script>

<style>
.pb50 {
  padding-bottom: 0.5rem;
}
.head-tit {
  position: relative;
  text-align: center;
  height: 0.4rem;
  line-height: 0.4rem;
  /* width: calc(100% - 0.8rem); */
  font-size: 0.17rem;
  padding: 0 0.4rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
h3{
    margin-left:.4rem
}
.goback {
  left: 0.15rem;
  background-size: 0.8rem;
  background-position: 0px -3.89rem;
  background-image: url("../../../public/img/icon.png");
  background-repeat: no-repeat;
  width: 0.18rem;
  height: 0.18rem;
  position: absolute;
  display: block;
  top: 0.11rem;
  color: #323232;
}
.title-search {
  height: 0.34rem;
  margin: 0.1rem 0.2rem 0;
  position: relative;
  display: flex;
}
.input-kw-form {
  width: 100%;
}
form {
  display: block;
  margin-top: 0em;
}
.title-search input {
  font-size: 0.13rem;
  padding: 0 0.3rem;
  width: 100%;
  height: 0.34rem;
  border: none;
  background: #f3f4f5;
  border-radius: 1rem;
  caret-color: #ff3a56;
  outline: none;
}
.title-search .search-icon {
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
  width: 0.14rem;
  height: 0.14rem;
  background-size: 1.5rem;
  background-position: 0 -28.76rem;
  background-image: url("../../../public/img/icon.png");
  background-repeat: no-repeat;
}
.title-search .closes {
  width: 0.45rem;
  height: 0.34rem;
  line-height: 0.34rem;
  text-align: center;
  display: block;
  color: #5f646a;
  font-weight: normal;
}
.pb50 .home-foot {
  height: 0.77rem;
  width: 100%;
  text-align: center;
}
.pb50 .home-foot .box-shadow-top {
  height: 100%;
  height: 100%;
  box-shadow: 2px 20px 15px -9px #f4f4f4 inset;
}
.pb50 .home-foot .box-shadow-bot {
  height: 100%;
  box-shadow: 0 -20px 15px -9px #f4f4f4 inset;
}
.search-content{padding: .2rem;}
.goods-con{
  display: block;
    margin-bottom: .15rem;
    border-bottom: 1px solid #fafafb;
    padding-bottom: .15rem;
    overflow: hidden;
    color: #333;
}
.goods-con .left {
    position: relative;
    float: left;
    width: .85rem;
    height: 1.13rem;
    border-radius: .1rem;
    overflow: hidden;
    box-shadow: 0px 1px 4px 0px rgba(58, 64, 69, 0.3);
}
.goods-con .left img {
    width: 100%;
    height: 100%;
    vertical-align: top;
}
.tip-grabSeat {
    background-position: 0 -24.19rem;
    display: block;
    height: .20rem;
    line-height: .20rem;
    color: #fff;
    font-style: normal;
    position: absolute;
    top: 0;
    font-size: .11rem;
    font-weight: bold;
    border-radius: .1rem 0;
    padding: 0 .05rem;
    left: 0;
    text-align: center;
}
.gradual-red {
    background: linear-gradient(to right, #ff7e6f, #ff2959);
    box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
}
.ticket-state-blue {
    background: linear-gradient(to right, #3dd9c1, #00a0c2);
}
.goods-con .right {
    margin-left: .15rem;
    float: left;
    width: calc(100% - 1rem);
}
.goods-con .right .name {
    height: .4rem;
    line-height: .2rem;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.red {
    color: #ff3a56;
}
.goods-con .right span {
    display: block;
    color: #999ea3;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.mt10 {
    margin-top: 0.1rem;
}
.mb10 {
  margin-bottom: 0.1rem;
}
.pt20 {
  padding-top: 0.2rem;
}
.f11 {
    font-size: .11rem;
}
.f12 {
    font-size: 0.12rem;
}
.f14 {
    font-size: 0.14rem;
}
.mr5 {
    margin-right: 0.05rem;
}
.gray5 {
    color: #b5bbc1;
}
.ml5 {
    margin-left: 0.05rem;
}
em {
    font-style: normal;
}
.goods-con .right span {
    display: block;
    color: #999ea3;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

</style>