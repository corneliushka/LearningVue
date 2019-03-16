// importe automatiquement les infos du routes, 

import Vue from 'vue'
import Router from 'vue-router' 
import Bonjour from "./components/Bonjour.vue"
import Aurevoir from "./components/AuRevoir.vue"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/bonjour',
      name: 'bonjour',
      component: Bonjour
    },
    {
      path: '/aurevoir',
      name: 'aurevoir',
      component: Aurevoir
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    }
  ]
})
