import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import A from "./views/A.vue"
import B from "./views/B.vue"
import C from "./views/C.vue"
import Test1 from "./views/Test1.vue"
import Test2 from "./views/Test2.vue"
import Error from "./views/Error.vue"
import Count from "./views/Count.vue"


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      // 别名
      alias:'/xxx'
    },
    // 重定向不带参数
    {
      path:'/home',
      redirect:'/',
    },
    {
      path: '/a',
      component: A,
      children: [
        {
          path: '/a/test1',
          component: Test1,
        },
        {
          path: '/a/test2',
          component: Test2,
        },
      ]
    },
    {
      path: '/b',
      component: B,
      name: 'b',
    },
    {
      path: '/c/:id',
      component: C,
      name: 'c',
    },
    // B页面重定向C页面
    {
      path: '/b/:id',
     redirect:'/c/:id',
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/count',
      component:CountQueuingStrategy,
    },
    {
      path:'*',
      component:Error,
      // 路由钩子函数
      // 在页面跳转之前 进行  to 到哪个页面去  from 从哪个页面来 next 函数，是否进行跳转
      beforeEnter:(to,from,next) => {
        console.log(to,from,next);
        next();
      }
    }
  ]
})
