
// Import Vue Router
import Vue from 'vue';
import VueRouter from '../libs/vue-router.min.js';

// import components
import app from '../components/app.vue';

// import map
import map from './map.js';

/**
  VUE ROUTER CONFIGURATION
*/

(function () {

  // Make new VueRouter Instance
  Vue.use(VueRouter)
  let router = new VueRouter()

  // Make it global
  global.router = router

  // Register Routes
  router.map(map)

  // Handle not found routes
  router.redirect({ '*' : '/' })

  /**
    MOUNT THE VUE
  */

  // Make a new components
  let App = Vue.extend(app)

  // Mount The App
  router.start(App,'#app')

})()
