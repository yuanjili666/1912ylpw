<template>
  <div class="nav_content">
    <div class="nav_to">
      <ul class="nav_ul">
        <!-- <li v-for="(fenleilist,ffl) in  fenleiList" :key="ffl" @click="hanlere(ffl)" >
          <a href="fenleilist.path" :class="fls==ffl ? 'res':''">{{fenleilist.title}}</a></li> -->
        <router-link
          :to="fenleilist.path"
          tag="li"
          v-for="(fenleilist,ffl) in  fenleiList"
          :key="ffl"
        >{{fenleilist.title}}</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      fls:-1,
      fenleiList: [
        {
          title: "全部分类",
          path: "/classify"
        },
          {
          title: "演唱会",
          path: "/activity"
        },
          {
          title: "话剧舞台剧",
          path: "/shuoxi"
        },
          {
          title: "音乐会",
          path: "/DetailPages"
        }
        ,  {
          title: "舞蹈芭蕾",
          path: "/activity"
        }
        ,
          {
          title: "戏曲综艺",
          path: "/activity"
        },
          {
          title: "体育赛事",
          path: "/DetailPages"
        },
          {
          title: "儿童亲子",
          path: "/activity"
        },
          {
          title: "休息娱乐",
          path: "/activity"
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
    
/* .router-link-active{  
        color:#c33;
    } */
</style>