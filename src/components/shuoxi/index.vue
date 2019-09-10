<template>
  <div id="box">
    <!-- 顶部头 -->
    <div class="hear">
      <i class="iconfont icon-jiantou-copy"></i>
      <span>永乐说戏</span>
      <i></i>
    </div>

    <div class="slideshow">
      <img src="http://static.228.cn/upload/2018/04/25/1524637153542_o1z2.png" />
    </div>
    <div class="sx_content" v-for="(shuoxi,sx) in shuoxiList" :key="sx">
      <div class="sxcon_1">
        <div class="sxcon_top">
          <div class="sxcon_top_lt">
            <img :src="'http://static.228.cn/'+shuoxi.IMG" />
          </div>
          <div class="sxcon_top_rg">
            <h4>{{shuoxi.REMARK  }}</h4>
            <p>{{shuoxi.ACTBEGINDATE | formatDate }}</p>
          </div>
        </div>
        <div class="sxcon_bm">
          <p>{{shuoxi.TEXT}}</p>
        </div>
      </div>
      <!-- 01 -->
    </div>
  </div>
</template>

<script>
import  {formatDate} from "@utils/data.js";
import { shuoxiApi } from "@api";
export default {
  name: "shuoxi",
  async created() {
    let data = await shuoxiApi();
    // let timi = data.data.sxList[0].ACTBEGINDATE;
    console.log(data.data.sxList[0].ACTBEGINDATE);
    this.shuoxiList = data.data.sxList;
    // let uuuu = timestampToTime(timi);
    // console.log(uuuu);
  },

  data() {
    return {
      shuoxiList: []
    };
  },

  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd ");
    }
  }
};
</script>

<style scoped>
/* 头部 导航*/
.hear {
  height: 0.4rem;
  width: 100%;
  /* background: darkcyan; */
}

body {
  font-size: 0.16rem;
}

.hear {
  display: flex;
  justify-content: space-between;
  padding: 0 0.2rem;
  align-items: center;
}

.hear > span {
  font-size: 0.17rem;
}

/* 永乐说戏 */

/* 轮播图 */
.slideshow {
  width: 100%;
  height: 1.52rem;
  background: darkgray;
}

.sx_content {
  width: 100%;
  height: 100%;
  padding: 0 0.15rem;
}

.sxcon_1 {
  width: 3.45rem;
  height: 1.86rem;
  /* background: fuchsia; */
}

.sxcon_top {
  width: 100%;
  height: 1.32rem;
  /* background: darkgoldenrod; */
  padding: 0.15rem;
}

.sxcon_top_lt {
  float: left;
  width: 1.8rem;
  height: 1.01rem;
  /* background: darkmagenta; */
  border-radius: 0.06rem;
}

.sxcon_top_lt > img {
  width: 100%;
  border-radius: 0.06rem;
}

.sxcon_top_rg {
  margin-left: 0.1rem;
  float: left;
  width: 1.25rem;
  height: 1.01rem;
  /* background: tan; */
}

.sxcon_top_rg > h4 {
  font-size: 0.16rem;
}

.sxcon_top_rg > p {
  color: #b5bbc1;
  font-size: 0.11rem;
  margin-top: 0.1rem;
}

.sxcon_bm {
  padding: 0.1rem 0.15rem;
}

.sxcon_bm > p {
  font-size: 0.13rem;
  height: 0.4rem;
  word-break: break-all;
  overflow: hidden;
  color: #7b8187;
  -webkit-line-clamp: 2;
  border-top: 1px solid #f3f4f5;
  padding-top: 0.05rem;
  text-overflow: ellipsis;
}

.slideshow > img {
  width: 100%;
}
</style>