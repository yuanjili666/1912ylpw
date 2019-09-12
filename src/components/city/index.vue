<template>
  <div class="nav_content">
    <div class="nav_to">
      <ul class="nav_ul">
        <li>全国</li>
        <li>澳门</li>
        <li>本息</li>
        <li>北京</li>
        <li>全国</li>
        <li>澳门</li>
        <li>本息</li>
        <li>北京</li>
        <li>全国</li>
        <li>澳门</li>
        <li>本息</li>
        <li>北京</li>
        <li>全国</li>
        <li>澳门</li>
        <li>本息</li>
        <li>北京</li>
        <li>全国</li>
        <li>澳门</li>
        <li>本息</li>
        <li>北京</li>
        <li>全国</li>
        <li>澳门</li>
        <li>本息</li>
        <li>北京</li>
        <li>全国</li>
        <li>澳门</li>
        <li>本息</li>
        <li>北京</li>
        <li>全国</li>
        <li>澳门</li>
        <li>本息</li>
        <li>北京</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "City"
};
</script>

<style>
.nav_content {
  width: 100%;
  height: 7.5rem;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  position: fixed;
  left: 0;
}
.nav_to {
  padding: 0.2rem 0.3rem;
  background: #fff;
  border-radius: 0 0 0.2rem 0.2rem;
}
.nav_ul {
  display: flex;
  justify-content: space-around;
  /* background: darkcyan; */
  flex-wrap: wrap;
}
.nav_ul > li {
  font-size: 0.14rem;
  height: 0.45rem;
  width: 1.05rem;
  line-height: 0.45rem;
  text-align: center;
}
</style>