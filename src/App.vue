<template>
  <div id="app">
    <router-view></router-view>
    <TabBar/>
  </div>
</template>
<script>
import TabBar from "@components/tabBar"
export default {
  name: "App",
  components: {
    TabBar
  }
};
</script>

<style lang="scss">

</style>
