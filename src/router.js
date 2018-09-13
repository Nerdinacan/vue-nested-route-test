// Now exports a function that initializes the router 
// from the passed routes

import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

// export default (routes) => new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: routes
// });

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});