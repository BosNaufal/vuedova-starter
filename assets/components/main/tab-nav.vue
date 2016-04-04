
<template>
  <div class="tab-nav bottom">
    <div class="row">
      <grid v-for="menu in menus" xs="4" classes="text-center">
        <a :href="menu.link">
          <icon :name="menu.icon"></icon>
        </a>
      </grid>
    </div>
  </div>
</template>


<script>

  export default {

    data(){
      return{
        menus: [
          { icon: "home", link: "#!/" },
          { icon: "wrench", link: "#!/" },
          { icon: "star", link: "#!/" }
        ]
      }
    }

  };

</script>
