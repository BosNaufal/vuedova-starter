/*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
* Licensed Under MIT (http://opensource.org/licenses/MIT)
*
* Vue Tap Outside - Version@1.0.0
*
*/

(function(){

  var Hammer = typeof require === 'function'
  ? require('hammerjs')
  : window.Hammer

  // Directive for outside click detections
  var VueTapOutSide = {

    time: 0, // need a delay when it come together with 'v-if'

    bind(){

      if(!Hammer) console.error('[vue-tap-outside]: You need to install Hammer Js First');

      var me = this

      // make a event handler for click event
      this.evt = (e) => {

        // Is the target child of the component?
        var itsChildren = me.el.contains(e.target)
        var itself = e.target != me.el

        // Is the target child of the component?
        if(itself && !itsChildren) me.vm.$eval(me.expression)();
      }
      // Attach Event Listener to document
      this.hammer = Hammer(document)
      this.hammer.on('tap', this.evt);
    },

    unbind(){
      // Remove Event Listener from document
      // http://stackoverflow.com/questions/17367198/hammer-js-cant-remove-event-listener
      this.hammer.off('tap', this.evt);
    }
  };

  // If support node / ES6 module
  if( typeof module === 'object' && module.exports ){
    module.exports = VueTapOutSide;
  }
   // if using require js
  else if (typeof define === 'function' && define.amd) {
    define( function () { return VueTapOutSide });
  }
  // if script loaded by script tag in HTML file
  else if (typeof window !== undefined) {
    return Vue.directive('click-outside', VueTapOutSide);
  }

})();
