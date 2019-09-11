<template>
      <div class="content">
        <div class="content_list" v-for="(item,index) in classifyList" :key="index">
          <!-- list_lf，开始 -->
          <div class="list_lf">
            <i :class="item.status==1? 'list_ishou i6':'list_ishou i5'" v-html="item.status==0 ?'售票中' :'预订'"></i>
            <img :src="'http://static.228.cn/'+item.pbigimg+'!t120x160.jpg'" />
          </div>
           <!-- list_lf 结束 -->
         <!-- list_rt 开始 --> 
          <div class="list_rt">
            <h3>{{item.name}}</h3>
            <p>
              <span>{{item.begindate}}</span>~
              <span>{{item.enddate}}</span>
            </p>
            <p>{{item.vname}}</p>
            <span><i>{{(item.minprice)*100/100}}</i>-<i>{{item.maxprice}}</i><em>元</em></span>
          </div>
          <!-- list_rt 结束 -->
        </div>

</template>
<script>
export default {
    
}
</script>

<style>

</style>