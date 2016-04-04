
// Import Vue
import Vue from 'vue'

// Import Plugin
import VueRouter from 'vue-router'
import VueTouch from 'vue-touch'
import VueTapOutside from 'vue-tap-outside'


// Import components
import app from '../components/app.vue'
import icon from '../components/other/icon.vue'
import grid from '../components/other/grid.vue'


// import map
import map from './router/map.js'


// Bind the Store
import './stores/conf.js'


function initVue() {

  // Debug Mode
  Vue.config.debug = true

  // Global Directives
  Vue.directive('tap-outside', VueTapOutside)

  // Global Components
  Vue.component('icon',icon)
  Vue.component('grid',grid)

  // Use Plugins
  Vue.use(VueRouter)
  Vue.use(VueTouch)


  /**
    VUE ROUTER CONFIGURATION
  */

  // Make new VueRouter Instance
  let router = new VueRouter()

  // Make it global
  global.router = router

  // Register Routes
  router.map(map)

  // Handle not found routes
  router.redirect({ '*' : '/' })

  // Make a new components
  let App = Vue.extend(app)

  // Mount The App
  router.start(App,'#app')

}

/***************
  Choose One~
**************/
// document.addEventListener('deviceready', initVue, false) // For Cordova
initVue() // For Browser
