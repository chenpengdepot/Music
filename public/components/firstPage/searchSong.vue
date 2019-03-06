<template>
  <div class="mui-scroll-wrapper">
    <div class="mui-scroll">
      <!--这里放置真实显示的DOM内容-->
      <!-- {{$store.state.callsong}} -->
      <div class="searchWrapper">
        <p
          v-for="(item,index) in $store.state.callsong"
          :key="item.id"
          :ref="index"
          :songid="item.id"
          @click="play(index)"
        >
          <i class="icon-play3"></i>
          <span>{{item.name}}</span>
          <span>{{item.artists[0].name}}</span>
          <span>{{item.album.name}}</span>
          <!-- <span>03:47</span> -->
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
  data() {
    return {
      result: []
    };
  },
  methods: {
    play: function(index) {
      var sid = this.$refs[index][0].attributes[0].nodeValue;
      //    发起请求
      let playid = {};
      playid.id = sid;
      this.$http.get("/song/url", { params: playid }).then(function(res) {
        if (res.status == 200) {
          this.$store.state.songurl = res.body.data[0].url;
        }
        console.log(this.$store.state.songurl);
      });
    }
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>
<style scope>
.icon-play3 {
  color: rgb(0, 204, 0);
}
.searchWrapper {
  width: 100%;
}
.searchWrapper > p {
  height: 30px;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0;
  margin: 0;
  font-size: 13px;
}
</style>