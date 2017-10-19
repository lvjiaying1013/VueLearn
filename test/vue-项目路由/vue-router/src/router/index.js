import Vue from 'vue'
import Router from 'vue-router'
// import Test from '@/components/test'
//1.在src下创建一个项目组件文件夹创建路由模块
//2.配置路由入口
import Home from'../pages/Home/home.vue'
import Broadcast from'../pages/Broadcast/broadcast.vue'
import Audio from'../pages/Audio/audio.vue'
import Group from'../pages/Group/group.vue'
import Mine from'../pages/Mine/mine.vue'
import Tv from '../pages/Audio/tv/tv.vue'
import Film from '../pages/Audio/film/film.vue'
import City from '../pages/Audio/city/city.vue'
import Book from '../pages/Audio/book/book.vue'
import Music from '../pages/Audio/music/music.vue'
Vue.use(Router)

export default new Router({
  routes: [
  //3.配置路由信息
    {
      path: '/',
      name: 'Home',
      component: Home
    },
     {
      path: '/home',
      name: 'Home',
      component: Home
    },
     {
      path: '/audio',
      name: 'Audio',
      component: Audio,
      children:[
        {path:'film',component:Film},
        {path:'',component:Film},
        {path:'tv',component:Tv},
        {path:'city',component:City},
        {path:'book',component:Book},
        {path:'music',component:Music},
      ]
    },
     {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
     {
      path: '/group',
      name: 'Group',
      component: Group
    },
     {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
  ]
})
