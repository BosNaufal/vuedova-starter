
// Import the library
import Vue from 'vue'
import VueSimpleStore from 'vue-simple-store'

// Import All Store Once
import ui from './ui.js';

(function () {
  // Install Vue Simple Store
  Vue.use( VueSimpleStore,{ stores: [ ui ], debug: true } )
})()
