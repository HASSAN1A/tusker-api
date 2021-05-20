import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DetailMovie from './views/DetailMovie.vue'
import DetailSerie from './views/DetailSerie.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail/movie/:id',
      name: 'detailMovie',
      component: DetailMovie
    },
    {
      path: '/detail/serie/:id/:season/:ep',
      name: 'detailSerie',
      component: DetailSerie
    },
  ]
})
