<template>
    
    <div id="box">
        <!-- 活动页面，顶部头 -->
        <div class="hear">
            <i class="iconfont icon-jiantou-copy"></i>
            <span>活动专区</span>
            <i></i>
        </div>
        <div class="activity" v-for="(huodong,hd) in huodongList" :key="hd" >

            <div class="content">
                <div class="content_img">
                    <img :src="'http://static.228.cn/'+huodong.IMG">
                </div>
                <div class="content_bt">
                    <p>{{huodong.REMARK}}</p>
                </div>
            </div>
        </div>

    </div>

</template>
<script>
import { fenleiApi } from "@api";
export default {
    name:"activity",
    async created() {
    let data = await fenleiApi();
    // console.log(data.data.subjectPage.list);
    this.huodongList=data.data.subjectPage.list;
    console.log(this.huodongList);
  },

 data() {
    return {
    huodongList:[]
    };
  }
}
</script>
<style scoped>
 /* 头部 导航*/
        .hear {
            height: .4rem;
            width: 100%;
            /* background: darkcyan; */
        }

        body {
            font-size: 0.16rem;
        }
        #box{
            padding-bottom: .5rem;
        }

        .hear {
            display: flex;
            justify-content: space-between;
            padding: 0 .2rem;
            align-items: center;
        }

        .hear>span {
            font-size: .17rem;
        }

        /* 活动 */

        .activity {
            width: 100%;
            height: 100%;
            padding: .15rem .15rem 0;
            background: #F8F8FF;
        }

        .content {
            height: 2.13rem;
            /* background: darkcyan; */
            margin-bottom: .2rem;
            width: 100%;
            border-radius: .1rem;
            overflow: hidden;
            background: #fff;
        }

        .content_img {
            height: 1.5rem;
            /* background: saddlebrown; */
        }

        .content_img>img {
            width: 100%;
        }

        .content_bt {
            text-align: center;
            padding: .15rem;
        }
        .content_bt>p{
            font-size: .17rem;
            color:#000;
            font-weight: 700;
        }

</style>