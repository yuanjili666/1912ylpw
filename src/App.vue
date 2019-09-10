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

  // created(){
  //      axios({
  //     method:"GET",
  //     url:"/server/category/default.json"
  //   }).then((data)=>{
  //     let hen=data.data.data;
  //      console.log(data);
  //      console.log(data.data.data.allkeyList);
  //       console.log(data.data.data.fcitys);
  //      console.log(data.data.data.searMap);
  //     console.log(data.status);
  //       console.log(hen.pagerMemory.fistPage);
      
  //   })
  // }

};
</script>

<style lang="scss">

</style>
