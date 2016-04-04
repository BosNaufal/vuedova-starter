
<template>
  <div id="root">

    <navigation></navigation>

    <div class="page">
      <router-view></router-view>
    </div>

    <tab-nav></tab-nav>

    <sidebar></sidebar>

  </div>
</template>

<script>

  import sidebar from './main/sidebar.vue';
  import navigation from './main/navigation.vue';
  import tabNav from './main/tab-nav.vue';

  export default {

    name: "App",

    replace: false,

    components: { sidebar, navigation, tabNav }

  };

</script>
