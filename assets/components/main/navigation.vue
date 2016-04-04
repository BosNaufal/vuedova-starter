
<template>
  <nav>
    <div class="row">
      <grid xs="2">
        <button v-touch:tap="openSidebar">
          <icon name="bars"></icon>
        </button>
      </grid>

      <grid xs="8" classes="text-center">
        <h1 class="main-title">VUEDOVA</h1>
      </grid>

      <grid xs="2" classes="text-right">
        <button v-touch:tap="openMenu">
          <icon name="sliders"></icon>
        </button>
      </grid>
    </div>

    <nav-menu></nav-menu>

  </nav>
</template>

<script>

  import navMenu from './nav-menu.vue';

  export default {

    components: { navMenu },

    methods:{
      openSidebar(){
        this.$action('ui:open_sidebar')
      },
      openMenu(){
        this.$action('ui:open_nav_menu')
      }
    }
  };

</script>
