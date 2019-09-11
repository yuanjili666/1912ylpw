<template>
  <div class="nav_content">
    <div class="wrapp_city" ref="wrapper">
      <div class="nav_to">
        <h4>热门城市</h4>
        <ul class="nav_ul">
          <li v-for="(hotcity,hy) in hotCitysList" :key="hy">{{hotcity.JXNAME}}</li>
        </ul>
        <h4>更多城市</h4>
        <ul class="nav_ul">
          <li v-for="(fcitys,fl) in fcitysList" :key="fl">{{fcitys.JXNAME}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { cityApi } from "@api";
import BScroll from "better-scroll"; 
export default {
  name: "City",
  async created() {
    let data = await cityApi();
    console.log(data.data);
    this.hotCitysList = data.data.hotCitys;
    this.fcitysList = data.data.fcitys;
  },
  data() {
    return {
      hotCitysList: [],
      fcitysList: []
    };
  },
  mounted(){
   this.scroll =  new BScroll(this.$refs.wrapper);
  },
  updated(){
    this.scroll.refresh()
  }
};
</script>

<style scoped>
.nav_content {
  width: 100%;
  /* height: 7.5rem; */
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  /* position: fixed; */
  left: 0;
  overflow: hidden;
}

.wrapp_city{
  overflow:hidden;
  height:100%;
  /* height: 7rem;  */
  position: relative;
}
.nav_to {
  position: absolute;
  /* padding: 0.2rem 0.3rem; */
  background: #fff;
  border-radius: 0 0 0.2rem 0.2rem;
  padding-bottom: 2rem;
}
.nav_to h4 {
  color: #999;
  font-size: 0.13rem;
}
.nav_ul {
  height: 100%;
  display: flex;
  justify-content: space-between;
  /* background: darkcyan; */
  flex-wrap: wrap;
}
.nav_ul > li {
  font-size: 0.14rem;
  height: 0.45rem;
  width: 1.05rem;
  line-height: 0.45rem;
  text-align: center;
  color: #7b8187;
}
</style>