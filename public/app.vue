<template>
  <div>
    <!-- start header -->
    <div class="header">
      <div class="search-fa">
        <a href="javascript:history.back(-1);">
          <i class="mui-icon mui-icon-undo"></i>
        </a>
        <input class="search" v-model="$store.state.auther" type="text" placeholder="请输入搜索内容">
        <router-link
          :to="'/searchSong?keywords='+$store.state.auther"
          href="javascript:;"
          @click.native="searchFind"
        >
          <i class="mui-icon mui-icon-search"></i>
        </router-link>
      </div>
    </div>
    <!-- end header -->
    <!-- start  content 路由容器----- -->
    <transition>
      <router-view></router-view>
    </transition>
    <!-- end content -->
    <!-- start footer -->
    <!-- <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-cp" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-cp" to="/song">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-cp" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-cp" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>-->
    <div class="play">
      <!-- 歌手图片 -->
      <audio autoplay="autoplay" controls="controls" :src="this.$store.state.songurl">
        <source class="play-bo" :src="this.$store.state.songurl">
      </audio>
      <div class="songurl">
        <img src="./components/images/poster.jpg" alt>
      </div>
      <!-- 歌手信息 -->
      <div class="songinfo"></div>

      <!-- 播放控制 -->
      <div class="contorller">
        <a href="javascript:;">
          <span class="icon-pause2"></span>
        </a>
        <a href="javascript:;">
          <span class="icon-pause2"></span>
        </a>
        <a href="javascript:;">
          <span class="icon-pause2"></span>
        </a>
      </div>
    </div>
    <!-- end footer -->
  </div>
</template>

<script>
import mui from './lib/mui/js/mui.min.js'
export default {
  data() {
    return {
    };
  },
  methods: {
    // 点击搜索
    searchFind: function() {
      // 判断输入框是否为空
      let isnull=this.$store.state.auther;
      if(isnull){
         // console.log(this.$route.query.keywords);//获取搜素字符串
      let param = {};
      param.keywords = this.$route.query.keywords;
      // console.log(param);
      this.$http
        .get("/search", { params: param })
        .then(function(res) {
          // console.log(res.body.result.songs);
          // console.log(res.bodyText);
          var song = [];
          for (let i = 0; i < res.body.result.songs.length; i++) {
            song.push(res.body.result.songs[i]);
          }
          // console.log(song);
          this.$store.commit("addSong", song);
          // console.log(this.$store.state.callsong[0].id)
        });
      }else{
        // 输入框为空
        mui.toast('不要闹着玩',{ duration:'long', type:'div' }) 
      }
    },
  },
  updated() {
    
  },
};
// export var store;
</script>

<style>
.header {
  height: 50px;
}
input.search {
  border-radius: 18px !important;
  margin-bottom: 0 !important;
  background: none;
  height: 35px !important;
  width: 100%;
  box-sizing: border-box;
}
i.mui-icon-undo {
  line-height: 50px;
  width: 50px;
  height: 50px;
  text-align: center;
  left: 0;
  top: 0;
}
i.mui-icon-search {
  position: absolute;
  line-height: 50px;
  width: 50px;
  height: 50px;
  text-align: center;
  right: 0;
  top: 0;
}
.search-fa {
  background-color: rgba(255, 0, 0, 0.76);
  position: relative;
  padding: 0 50px;
  height: 50px;
  line-height: 50px;
}
.search-fa > a {
  color: black;
  position: absolute;
  top: 0;
  width: 50px;
  height: 50px;
}
.search-fa > a:first-child {
  left: 0;
}
.search-fa > a:last-child {
  right: 0;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  opacity: 0;
  transform: translateX(-100%);
  transition: all 0.3s linear;
}
* {
  touch-action: pan-y;
}
.mui-bar-tab .mui-tab-item-cp.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-cp {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-cp .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-cp .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
image[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.hot-list > ul {
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
}

.hot-list > ul > li > img {
  width: 300px;
  height: 200px;
}
.play {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.songurl {
  width: 50px;
  height: 50px;
}
.songurl > img {
  width: 100%;
  height: 100%;
  display: block;
}
.songinfo {
  flex: 1;
  height: 50px;
  line-height: 50px;
}
.contorller{
  height: 50px;
  line-height: 50px;
  padding-right: 15px;
}
audio {
  display: none !important;
}
</style>