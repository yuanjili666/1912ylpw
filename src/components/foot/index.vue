<template>
  <div id="foot">
    <div class="home-foot tc">
      <div class="box-shadow-top">
        <div class="box-shadow-bot">
          <div class="pt20 mb10">
            <a href="/notices/" class>最新资讯</a>
            <a href="/partner.html" class>合作招商</a>
            <a href="/contect.html" class>联系我们</a>
          </div>
          <em class="f11">© 永乐票务</em>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Foot"
};
</script>

<style>
 
.home-foot{
    height: .77rem;
    width: 100%;
    text-align: center;
    
}
.home-foot .box-shadow-top {
        height: 100%;
        height: 100%;
        box-shadow: 2px 20px 15px -9px #f4f4f4 inset;
}
.home-foot .box-shadow-bot {
    height: 100%;
    box-shadow: 0 -20px 15px -9px #f4f4f4 inset;
}
.home-foot .pt20 a {
    display: inline-block;
    margin: 0 .15rem;
    color: #5f646a;
    font-size: .12rem;
}
.home-foot em {
    color: #ccd1d6;
}
</style>