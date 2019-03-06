<template>
  <div class="mui-scroll-wrapper">
    <div class="mui-scroll">
        <div class="songwrapper" v-for="(item,index) in result" :songid="item.id" :ref="index" :key="item.id" @click="autherId(index)">
            <img :src="item.picUrl" alt="...">
            <p>{{item.name}}</p>
        </div>
    </div>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
  // 点击路由,页面创建的时候,进行请求ajax,然后显示歌手榜
  // 点击详细的歌手榜,进行页面跳转
  data() {
    return {
        result:[]
    };
  },
  methods: {
    // 获取歌手id
    autherId:function(index){
        // 点击获取队形的id
       let paramsId = this.$refs[index][0].attributes[0].nodeValue;
    //    将id传给store
    this.$store.state.songAutherId=paramsId;
    this.$router.push('/autherdetail')
       
    },
    // 获取歌手榜信息
    songbang:function(){
        this.$http.get('/top/artists?offset=0&limit=18')
      .then(function(res){
          if(res.status==200){
              for(let i=0; i<res.body.artists.length; i++){
                  this.result.push(res.body.artists[i])
              }
          }
          console.log(this.result);
      })
    }
  },
//   创建执行
  created() {
      this.songbang()
  },
//   挂载执行
  mounted() {
      mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
};
</script>
<style scope>
.songwrapper{
    width: 33.33%;
    float: left;
    height: 110px;
}
.songwrapper>img{
    width: 98%;
    display: block;
    height: 90px;
}
.songwrapper>p{
    text-align: center;
    margin-bottom: 0;
}
</style>