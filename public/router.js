import VueRouter from 'vue-router'
import home from './components/firstPage/home.vue'
import song from './components/firstPage/song.vue'
import searchSong from './components/firstPage/searchSong.vue'
import songdetial from './components/firstPage/songdetial.vue'
import songbang from './components/firstPage/songbang.vue'
import autherdetail from './components/firstPage/autherdetail.vue'


var router=new VueRouter({
    routes:[
        {path:'/',redirect:'/home'}, //重定向
        {path:'/home',component:home},  //主页面
        {path:'/song',component:song},  
        {path:'/songdetial',component:songdetial},
        {path:'/songbang',component:songbang},
        {path:'/autherdetail',component:autherdetail},
        {path:'/searchSong',component:searchSong,meta:{requiresAuth: true }}  //搜索
    ],
    linkActiveClass:'mui-active' //  点击激活时候的类
})
// var a=1;
router.beforeEach((to, from, next) => {
    // console.log(a);
    // console.log(to);
    // console.log('-----------------------')
    // console.log(from);
    // console.log(from.meta.requiresAuth)
    // var search=this.$store.state.auther;
    // console.log(search)
    // var search=decodeURI()
    var search=to.query.keywords;
   if (to.meta.requiresAuth) { // 判断该路由是否需要登录权限
       if (search) { // 判断当前的token是否存在
           next();
       } else {
            //    console.log(to)
                   next({
                       path: from.path,
                       // query: {
                       //     redirect: '/s'
                       // } // 将跳转的路由path作为参数，登录成功后跳转到该路由
                   })
               }
       }
    else {
       next();
   }
});

export default router
