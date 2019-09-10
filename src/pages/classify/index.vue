<template>
  <div id="box">

    <Aheader/>
   
    <!-- 内容及盒子 -->
    <div class="content page">
      <div class="content_list">
        <div class="list_lf">
          <i class="list_ishou">售票中</i>
          <img
            src="http://static.228.cn/upload/2019/09/06/AfterTreatment/1567755066414_d4f7-0.jpg!t120x160.jpg"
          />
        </div>
        <div class="list_rt">
          <h3>我等等得到的</h3>
          <p>2019.10.03~2019.10.27</p>
          <p>天乐元大西路等</p>
          <span>
            280-380
            <em>元</em>
          </span>
        </div>
      </div>
      <!-- 内容01 -->
      <div class="content_list">
        <div class="list_lf">
          <i class="list_iyushou">预订</i>
          <img
            src="http://static.228.cn/upload/2019/09/05/AfterTreatment/1567673145844_j8c6-0.jpg!t120x160.jpg"
          />
        </div>
        <div class="list_rt">
          <h3>我等等梵蒂冈梵蒂冈大幅度发鬼地方大幅度发得到的</h3>
          <p>2019.10.03~2019.10.27</p>
          <p>天乐元大西路等</p>
          <span>
            280-380
            <em>元</em>
          </span>
        </div>
      </div>
      <!-- 内容03 -->
      <div class="content_list">
        <div class="list_lf">
          <img
            src="http://static.228.cn/upload/2019/09/05/AfterTreatment/1567672872865_l1l6-0.jpg!t120x160.jpg"
          />
        </div>
        <div class="list_rt">
          <h3>我等等得到的</h3>
          <p>2019.10.03~2019.10.27</p>
          <p>天乐元大西路等</p>
          <span>
            280-380
            <em>元</em>
          </span>
        </div>
      </div>
      <!-- 内容4 -->
      <div class="content_list">
        <div class="list_lf">
          <img
            src="http://static.228.cn/upload/2019/08/31/AfterTreatment/1567239080055_a1w2-0.jpg!t120x160.jpg"
          />
        </div>
        <div class="list_rt">
          <h3>我等等得到的</h3>
          <p>2019.10.03~2019.10.27</p>
          <p>天乐元大西路等</p>
          <span>
            280-380
            <em>元</em>
          </span>
        </div>
      </div>
      <!-- 内容5 -->
      <div class="content_list">
        <div class="list_lf">
          <img
            src="http://static.228.cn/upload/2019/08/31/AfterTreatment/1567239080055_a1w2-0.jpg!t120x160.jpg"
          />
        </div>
        <div class="list_rt">
          <h3>我等等得到的</h3>
          <p>2019.10.03~2019.10.27</p>
          <p>天乐元大西路等</p>
          <span>
            280-380
            <em>元</em>
          </span>
        </div>
      </div>
      <!-- 内容6 -->
    </div>
  </div>
</template>

<script>
// import { classifyApi } from "@api"
export default {
  name:"classify",
    //  async created(){
  //  let data = await classifyApi();
  //   console.log(data);
  // }
};
</script>

<style>
/* 分类页面的样式 */

#app{
  height: 100%;
}

body {
  font-size: 0.16rem;
}

#box{
  height: 100%;
  width: 100%;
}

/* 列表内容 */


.content {
  margin-top: 0.15rem;
  padding: 0 0.2rem;
  padding-top: .85rem;
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
  background: linear-gradient(to right, #ff7e6f, #ff2959);
  /* background: linear-gradient(to right, #3dd9c1, #00a0c2); */
  font-style: normal;
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