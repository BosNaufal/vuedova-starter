
<template>
  <div class="nav-menu" v-if="state.ui.navMenuOpen" v-tap-outside="closeMenu" >
    <a href="#">
      <icon name="users"></icon>
      <span>Add Contact</span>
    </a>
    <a href="#">
      <icon name="comment"></icon>
      <span>Start a Chat</span>
    </a>
    <a href="#">
      <icon name="bullhorn"></icon>
      <span>Send Broadcast Message</span>
    </a>
  </div>
</template>

<script>
  export default {
    methods: {
      closeMenu(){
        this.$action('ui:close_nav_menu')
      }
    }
  };
</script>
