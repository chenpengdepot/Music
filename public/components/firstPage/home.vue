<template>
  <div class="mui-scroll-wrapper">
    <div class="mui-scroll">
      <!--这里放置真实显示的DOM内容-->
      <!--start swiper -->
      <div class="lunbo">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="item in img" :key="item.imageUrl">
            <img :src="item.imageUrl" alt="暂无图片">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <!-- end swiper -->

      <!-- start grad -->
      <div class="grad">
        <router-link to="/songbang" tag="div">
          <i class="icon-music"></i>
          <br>歌手
        </router-link>
        <div>
          <i class="icon-headphones"></i>
          <br>音乐榜
        </div>
        <div>
          <i class="icon-mug"></i>
          <br>电台
        </div>
      </div>
      <!-- end grad -->

      <!-- start songmenu -->
      <div class="song">
        <div
          tag="div"
          class="songlist"
          v-for="(item,index ) in songMenu"
          :key="item.id"
          :ref="index"
          @click="songdetail(index)"
          :iddetail="item.id"
        >
          <img :src="item.picUrl" alt="...">
          <p>{{item.name}}</p>
        </div>

        <!-- <div class="songlist">
        <img src="https://p2.music.126.net/EBStQXKcb93IICWWMIW3uQ==/109951163889027036.jpg" alt="">
        <p>这首歌超级好听的，我超级瞎换听这首歌的哈哈哈哈哈哈</p>
        </div>
        <div class="songlist">
        <img src="https://p2.music.126.net/EBStQXKcb93IICWWMIW3uQ==/109951163889027036.jpg" alt="">
        <p>这首歌超级好听的，我超级瞎换听这首歌的哈哈哈哈哈哈</p>
        </div>-->
      </div>
      <!-- end songmenu -->
    </div>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
  data() {
    return {
      img: [],
      songMenu: []
    };
  },
  created() {
    this.getImgUrl();
    this.getSongMenu();
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    //   banners
    getImgUrl: function() {
      this.$http.get("/banner").then(function(data) {
        if (data.status == 200) {
          for (let i = 0; i < data.body.banners.length; i++) {
            this.img.push(data.body.banners[i]);
          }
          //   console.log(data);
        }
        // console.log(this.img);
      });
    },
    // 获取歌单
    getSongMenu: function() {
      this.$http.get("/personalized").then(function(data) {
        if (data.status == 200) {
          for (let i = 0; i < 9; i++) {
            this.songMenu.push(data.body.result[i]);
          }
        }
        console.log(this.songMenu);
      });
    },
    // 获取歌单详情
    songdetail: function(index) {
        let scureenDetial = this.$refs[index][0].attributes[1].nodeValue;
        console.log(this);
        console.log(scureenDetial);
        let scureenId = {};
        scureenId.id = scureenDetial;
        this.$http
          .get("/playlist/detail", { params: scureenId })
          .then(function(res) {
            if (res.status == 200) {
              // for (let i = 0; i < res.body.playlist.tracks.length; i++) {
              // console.log(res.body.play.list.tracks); // 数组
              this.$store.state.songdetail = res.body.playlist.tracks;
              // }
            }
            // console.log(res.body.playlist.tracks)
            console.log(this.$store.state.songdetail);
          });
          this.$router.push('/songdetial')  //太有用了
    }
  }
};
</script>

<style scope>
.lunbo {
  height: 180px;
}
.mint-swipe-item > img {
  width: 100%;
  height: 180px;
  display: block;
}
.grad {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.grad > div {
  flex: 1;
  text-align: center;
  box-sizing: border-box;
  padding-top: 4px;
  background-color: rgb(230, 230, 230);
}
.grad > div:nth-child(2) {
  border-left: 1px solid #999;
  border-right: 1px solid #999;
}
.grad div > i {
  font-size: 25px;
  color: rgba(221, 18, 18, 0.877);
}
.song {
  padding: 5px 3px 0 3px;
}
.songlist {
  width: 32.9%;
  height: 144px;
  float: left;
}
.songlist:nth-child(3n-1) {
  margin: 0 2px;
}
.songlist > img {
  width: 100%;
  height: 121px;
  display: block;
  padding-top: 2px;
  box-shadow: 2px 3px 3px #666;
}
.songlist > p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px !important;
}
.mui-scroll-wrapper {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>