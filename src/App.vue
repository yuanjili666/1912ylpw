<template>
  <div id="app">
    <router-view></router-view>
    <TabBar/>
  </div>
</template>
<script>
import TabBar from "@components/tabBar"
// import { classifyApi } from "@api"
import axios from "axios";
export default {
  name: "App",
  components: {
    TabBar
  },
  //  async created(){
  //  let data = await classifyApi();
  //   console.log(data);
  // }

  created(){
       axios({
      method:"GET",
      url:"/server/category/default.json"
    }).then((data)=>{
      console.log(data);
      
    })
  }

};
</script>

<style lang="scss">

</style>
