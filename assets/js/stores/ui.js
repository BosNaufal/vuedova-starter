

export default {

  name: "ui",

  state: {
    sidebarOpen: false,
    navMenuOpen: false
  },

  open_sidebar(){
    this.state.sidebarOpen = true
  },

  close_sidebar(){
    this.state.sidebarOpen = false
  },

  open_nav_menu(){
    this.state.navMenuOpen = true
  },

  close_nav_menu(){
    this.state.navMenuOpen = false
  },

};
