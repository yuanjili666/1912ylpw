//加载组件
import Carousel from "./index.vue";

Carousel.install=(Vue)=>{
    Vue.component(Carousel.name,Carousel)
}

export default Carousel;