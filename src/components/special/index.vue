<template>
  <div id="recommend">
    <ul class="recommend cl">
      <li v-for="(item,index) in recommend" :key="index" >
        <a href>
          <img
            :src="'https://static.228.cn'+item.PBIGIMG" class="imgs" style="background: rgba(35, 171, 9, 0.3);"/>
          <b class="db mt5 name">{{item.NAME}}</b>
          <span class="gray9 db f11">{{item.BEGINDATE}}</span>
          <span class="gray5 db f10">
            <b class="red mr5 f13">¥ {{item.MINPRICE}}</b>起
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { homeApi } from "@api";
export default {
  name: "Recommend",
  async created() {
    let data = await homeApi();
    console.log(data.data.recommendPage.list);
    this.recommend = data.data.recommendPage.list;
  },
  data() {
    return {
      recommend: [],
    };
  },
  
};
</script>
<style>
.recommend {
  width: calc(100% - 0.4rem);
  margin: 0 0.2rem; 
  
}
.cl {
  zoom: 1;
}
.recommend li {
  float: left;
  margin-right: calc((100% - (1.05rem * 3)) / 2);
  width: 1.05rem;
  position: relative;
  overflow: hidden;
  margin-bottom: 0.12rem;
  display: flex;
}
.recommend li .imgs {
  width: 100%;
  height: 1.4rem;
  border-radius: 0.1rem;
}
.recommend li .name {
  font-size: 0.13rem;
  height: 0.34rem;
  line-height: 0.18rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.recommend li:nth-child(3n) {
  margin-right: 0;
}
</style>