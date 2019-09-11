<template>
  <div class="nav_content">
    <div class="nav_to">
      <ul class="nav_ul">
        <!-- <li v-for="(fenleilist,ffl) in  fenleiList" :key="ffl">{{fenleilist.title}}</li> -->
         <router-link :to="fenleilist.path" tag="li" v-for="(fenleilist,ffl) in  fenleiList" :key="ffl">{{fenleilist.title}}</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      fenleiList: [
        {
          title: "全部分类",
          path: "/classify"
        },
          {
          title: "演唱会",
          path: "/"
        },
          {
          title: "话剧舞台剧",
          path: "/"
        },
          {
          title: "音乐会",
          path: "/"
        }
        ,  {
          title: "舞蹈芭蕾",
          path: "/"
        }
        ,
          {
          title: "戏曲综艺",
          path: "/"
        },
          {
          title: "体育赛事",
          path: "/"
        },
          {
          title: "儿童亲子",
          path: "/"
        },
          {
          title: "休息娱乐",
          path: "/"
        }
      ]
    };
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

/* .router-link-active{  
        color:#c33;
    } */
</style>