
<template>
  <aside v-touch:pan="onSwipe" :style="{
      transform: 'translate3d('+swipeRange+',0,0)',
      '-webkit-transform': 'translate3d('+swipeRange+',0,0)',
      '-moz-transform': 'translate3d('+swipeRange+',0,0)',
      '-o-transform': 'translate3d('+swipeRange+',0,0)',
      opacity: show ? 1 : 0
    }">
    <ul class="list-unstyled">
      <li v-for="menu in menus">
        <a :href="menu.link">
          <icon :name="menu.icon"></icon>
          <span>{{ menu.text }}</span>
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>

  // refs: http://www.effectiveui.com/blog/2013/12/12/lessons-learned-tips-on-creating-smooth-native-like-interactions-in-phonegap/

  export default {

    data(){
      return{
        show: false,
        menus: [
          { icon: "home", text:"Home", link:"#!/" },
          { icon: "search", text:"Search", link:"#!/" },
          { icon: "folder-open", text:"Browse", link:"#!/" },
          { icon: "music", text:"Playlist", link:"#!/" },
          { icon: "comment", text:"Chat", link:"#!/" }
        ],
        swipeRange: 0
      }
    },

    watch: {
      'state.ui.sidebarOpen'(val,old){
        if(val) this.openSidebar()
      }
    },

    methods: {

      openSidebar(){
        this.swipeRange = 0
      },

      closeSidebar(){
        this.$action('ui:close_sidebar')
        this.swipeRange = -100 + '%'
      },

      onSwipe(e){

        let swipeRight = e.deltaX > 0

        if(swipeRight) return false

        this.swipeRange = e.deltaX + 'px'

        let sidemenuWidth = this.$el.clientWidth
        let lessThanHalfWidth = sidemenuWidth / 2 < e.deltaX * -1
        let touchEnd = e.isFinal

        if(touchEnd){
          if(lessThanHalfWidth) this.closeSidebar()
          else this.openSidebar()
        }

      },

    },

    ready(){
      this.closeSidebar()
      setTimeout(() => {
        this.show = true
      },750)
    }

  }

</script>
