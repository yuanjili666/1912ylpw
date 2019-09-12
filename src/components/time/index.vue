<template>
  <div class="nav_content">
    <div class="nav_to">
      <ul class="nav_ul">
        <!-- <li v-for="(tiamfor,tf) in tiamelist" :key="tf">{{tiamfor.title}}</li> -->




 <li v-for="(tiamfor,tf) in   tiamelist" :key="tf" @click="hanlere(tf)" >
          <a href=" tiamelist.path" :class="fls==tf ? 'res':''">{{tiamfor.title}}</a></li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Time",
  data() {
    return {
        fls:-1,
      tiamelist: [
        {
          title: "全部分类",
          path: "/classify"
        },
          {
          title: "今天",
          path: "/classify"
        },
          {
          title: "明天",
          path: "/classify"
        },
          {
          title: "本周内",
          path: "/classify"
        },
          {
          title: "本周末",
          path: "/classify"
        },
          {
          title: "下周",
          path: "/classify"
        },
          {
          title: "本月",
          path: "/classify"
        }
      ]
    };
  },
   methods:{
    hanlere(ffl){
      // alert(5555);
       console.log(ffl);
        this.fls=ffl;
    }
  }
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
ul .res{  
        color:#c33;
    }
</style>