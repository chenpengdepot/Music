// 引入vue模块
import Vue from 'vue';
// 引入模板
import app from './app.vue'
// import {store}  from './app.vue';

// 引入http请求
import VueResource from 'vue-resource';

Vue.use(VueResource);

// 引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
    state: {
      auther: "",
      callsong: [],
      songurl:'',
    //   strsearch:'',     //搜索字符串,
    songdetail:[],   //点击歌单的详情数据
    songAutherId:'' , //  歌手的id，根据此id获取歌手的单曲
    },
    mutations: {
      increment(state) {
        state.auther;
      },
      addSong: function(state, song) {
        state.callsong = song;
      }
    }
  });

// 路由
import VueRouter from 'vue-router'

import './lib/font-css/style.css'

Vue.use(VueRouter)
import router from './router.js'

import Mint from 'mint-ui';
// 引入mui
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icon.css'

// 引入mint-ui
Vue.use(Mint)
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);




new Vue({
    el:'#app',
    render:function(ce){
        return ce(app)
    },
    router,
    store
})



