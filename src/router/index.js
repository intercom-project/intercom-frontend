import Vue from 'vue'
import Router from 'vue-router'
import VueMaterial from 'vue-material'
import InterCom from '@/components/InterCom'

Vue.use(Router)
Vue.use(VueMaterial)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'InterCom',
      component: InterCom
    }
  ]
})
