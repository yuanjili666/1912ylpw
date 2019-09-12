<template>
  <div class="wh_content">
    <swiper :options="swiperOption">
      <swiperSlide>
        <img src="https://static.228.cn/upload/2019/07/26/1564138988312_g1a4.jpg" />
      </swiperSlide>
      <swiperSlide>
        <img src="https://static.228.cn/upload/2018/11/17/1542430574022_i1w5.jpg" />
      </swiperSlide>
      <swiperSlide>
        <img src="https://static.228.cn/upload/2019/07/22/1563778969714_b7o1.jpg" />
      </swiperSlide>
      <swiperSlide>
        <img src="https://static.228.cn/upload/2019/07/09/1562654036473_e5c7.jpg" />
      </swiperSlide>
      <swiperSlide>
        <img src="https://static.228.cn/upload/2019/07/26/1564137082824_n5j6.jpg" />
      </swiperSlide>
    </swiper>
     <div class="swiper-pagination"></div> //标页码
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "Carousel",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        autoplay: true,
        speed: 1000,
        loop: true
      },
      }
    }
  }

</script>

<style>
.wh_content {
  width: 100%;
  height: 1.52rem;
  background: pink;
  overflow: hidden;
  /* position: relative;
  top:1rem;
  left:0 */
}
.wh_content img {
  width: 100%;
  height: 100%;
  display: inline-block;
}
</style> 