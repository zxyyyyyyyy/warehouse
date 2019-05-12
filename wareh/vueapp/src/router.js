import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/views/movie.vue'
import MovieDetail from '@/views/movieDetail.vue'

import Music from '@/views/music.vue'
import Musiclist from '@/views/musiclist.vue'

import Photo from '@/views/photo.vue'
import PhotoDetail from '@/views/photoDetail.vue'

import Book from '@/views/book.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/movie",
      component:Movie,
    },
    {
      path:"/movieDetail/:id",
      component:MovieDetail,
    },
    {
      path:"/music",
      component:Music,
    },
    {
      path:"/musiclist",
      component:Musiclist,
    },
    {
      path:"/photo",
      component:Photo,
    },
    {
      path:"/photoDetail",
      component:PhotoDetail,
    },
    {
      path:"/book",
      component:Book,
    },
    {
      path:"/",
      redirect:"/movie",
    }
  
  ]
})
